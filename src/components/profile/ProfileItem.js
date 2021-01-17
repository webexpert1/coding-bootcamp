import React from 'react'

const ProfileItem = ({profile}) => {
    return (
        
        <div className="col-sm-4">

        
        <div class="card-deck">
        <div class="card">
            <div style={{width: '100%', textAlign: 'center' }}>
                 <img class="card-img-top" src="assets/avatar.png" style={{height: '100px', width:'100px', textAlign: 'center'}} alt="Card image cap" />

            </div>
           <div class="card-body">
            <div className="row">
                <div className="col-sm-6">
                  <h5 class="card-title">First Name</h5>
                  <p class="card-text">{profile.FirstName}</p>
                </div>
                <div className="col-sm-6">
                   <h5 class="card-title">Last Name</h5>
                   <p class="card-text">{profile.LastName}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                  <h5 class="card-title">Email</h5>
                  <p class="card-text">{profile.Email}</p>
                </div>
                <div className="col-sm-6">
                   <h5 class="card-title">UserName</h5>
                   <p class="card-text">{profile.UserName}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                  <h5 class="card-title">Gender</h5>
                  <p class="card-text">{profile.Gender}</p>
                </div>
                <div className="col-sm-6">
                   <h5 class="card-title">PhoneNumber</h5>
                   <p class="card-text">{profile.PhoneNumber}</p>
                </div>
            </div>

          </div>
          <div class="card-footer">
            {/* <small class="text-muted">Last updated 3 mins ago</small> */}
            <button className="btn btn-primary btn-block">View</button>
          </div>
        </div>
               
      </div>
      </div>
    )
}

export default ProfileItem;