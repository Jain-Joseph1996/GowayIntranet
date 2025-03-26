export interface IUserProfile {
  displayName: string;
  email: string;
  loginName: string;
  jobTitle: string;
  department: string;
  pictureUrl: string;
  error?: string;
}

export interface IUserProfileProperties {
  Key: string;
  Value: string;
}