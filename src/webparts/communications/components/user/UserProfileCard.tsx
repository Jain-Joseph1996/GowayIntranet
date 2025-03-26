import * as React from 'react';
import { IUserProfile } from '../../models/IUserProfile';
import styles from './UserProfileCard.module.scss';

interface IUserProfileCardProps {
  profile?: IUserProfile;
  className?: string;
  context?: any;
}

export const UserProfileCard: React.FunctionComponent<IUserProfileCardProps> = (props) => {
  const { profile, className } = props;

  if (!profile) {
    return null;
  }

  if (profile.error) {
    return <div className={`${styles.error} ${className}`}>{profile.error}</div>;
  }

  return (
    <div className={`${styles.userProfileCard} ${className}`}>
      <div className={styles.profileImageContainer}>
        <img src={profile.pictureUrl} alt="Profile" className={styles.profileImage} />
      </div>
      <div className={styles.profileDetails}>
        <h3 className={styles.displayName}>{profile.displayName}</h3>
        {profile.jobTitle && <div className={styles.jobTitle}>{profile.jobTitle}</div>}
        {profile.department && <div className={styles.department}>{profile.department}</div>}
        <div className={styles.contactInfo}>
          <div className={styles.email}>{profile.email}</div>
        </div>
      </div>
    </div>
  );
};