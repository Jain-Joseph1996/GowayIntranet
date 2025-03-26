import { SPHttpClient } from '@microsoft/sp-http';
import { IUserProfile, IUserProfileProperties } from '../models/IUserProfile';
import { WebPartContext } from '@microsoft/sp-webpart-base';


export class UserService {
    constructor(
        private spHttpClient: SPHttpClient,
        private webAbsoluteUrl: string,
        private context: WebPartContext
    ) { }

    public async getCurrentUserProfile(): Promise<IUserProfile> {
        try {
            // Get basic user info from context
            const userId = this.getUserId(); // Implement this based on your context
            const [profileResponse, userInfoResponse] = await Promise.all([
                this.getUserProfileProperties(),
                this.getUserInfoListData(userId)
            ]);

            return {
                displayName: this.getProfileProperty(profileResponse.UserProfileProperties, "PreferredName") ||
                    this.getProfileProperty(profileResponse.UserProfileProperties, "DisplayName") ||
                    "Unknown User",
                email: this.getProfileProperty(profileResponse.UserProfileProperties, "WorkEmail") ||
                    this.context.pageContext.user.email,
                loginName: this.context.pageContext.user.loginName,
                jobTitle: this.getProfileProperty(profileResponse.UserProfileProperties, "Title") ||
                    userInfoResponse.JobTitle || "Not specified",
                department: this.getProfileProperty(profileResponse.UserProfileProperties, "Department") ||
                    userInfoResponse.Department || "Not specified",
                pictureUrl: `${this.webAbsoluteUrl}/_layouts/15/userphoto.aspx?size=M&accountname=${encodeURIComponent(this.context.pageContext.user.email || '')}`
                    + `&fallback=https://${this.context.pageContext.web.absoluteUrl.split('/')[2]}/_layouts/15/images/silhouette.jpg`
            };
        } catch (error) {
            console.error("Error getting user profile:", error);
            return {
                displayName: "",
                email: "",
                loginName: "",
                jobTitle: "",
                department: "",
                pictureUrl: "",
                error: "Failed to load user details"
            };
        }
    }

    private async getUserProfileProperties(): Promise<{ UserProfileProperties: IUserProfileProperties[] }> {
        const response = await this.spHttpClient.get(
            `${this.webAbsoluteUrl}/_api/SP.UserProfiles.PeopleManager/GetMyProperties`,
            SPHttpClient.configurations.v1
        );
        return response.json();
    }

    private async getUserInfoListData(userId: number): Promise<{ JobTitle: string; Department: string }> {
        const response = await this.spHttpClient.get(
            `${this.webAbsoluteUrl}/_api/web/getuserbyid(${userId})?$select=JobTitle,Department`,
            SPHttpClient.configurations.v1
        );
        return response.json();
    }

    private getProfileProperty(properties: IUserProfileProperties[], key: string): string {
        const prop = properties.find(p => p.Key === key);
        return prop ? prop.Value : "";
    }

    private getUserId(): number {
        return this.context.pageContext.legacyPageContext.userId;
    }
}