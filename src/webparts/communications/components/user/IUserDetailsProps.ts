import { IUserProfile } from '../../models/IUserProfile';
import { WebPartContext } from '@microsoft/sp-webpart-base';

export interface IUserDetailsProps {
  userProfile: IUserProfile;
  context: WebPartContext;
  loading: boolean;
}