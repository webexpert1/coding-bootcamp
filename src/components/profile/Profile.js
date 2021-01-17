import React from 'react'
import ProfileItem from './ProfileItem'

const Profile = ({profiles}) => {
   
    return (
         
            <div className="row" style={{ marginTop: '20px'}}>
                 {profiles.map(profile => (
                 <ProfileItem profile={profile}/>
            ))}
            </div>
           
          
         
    )
}

export default Profile;
