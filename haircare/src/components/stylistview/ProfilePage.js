import React from 'react';

const ProfilePage = props => {
  return (
    <div>
      {props.profile.username}
      {props.profile.profileImage}
      {props.profile.about}
      {props.profile.skills}
      {props.profile.portfolio}
    </div>
  )
}

export default ProfilePage;
//This is the main profile page that the stylists will see to update their data.
//They should be able to update their entire page . . . and also add
//new portfolio items to the state