import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar  from './components/nav/NavBar';
import {Fragment} from 'react';
import Profile from './components/profile/Profile';
import Pagination from "react-js-pagination";
import ProfileDetail from './components/profile/ProfileDetail';



const PROFILE_API_URL = "https://api.enye.tech/v1/challenge/records";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [profiles, setProfiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [ activePage, setCurrentPage ] = useState( 1 );

  const profilesPerPage = 20;

  useEffect(() => {
    fetch(PROFILE_API_URL)
        .then(response => response.json())
        .then(jsonResponse => {
          if(jsonResponse.status == "success") {
            setProfiles(jsonResponse.records.profiles);
            setLoading(false);
            console.log(jsonResponse)
          }
          
        })
  },[]);

   // Logic for displaying current profiles
   const indexOfLastProfile  = activePage * profilesPerPage;
   const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
   const currentProfiles     = profiles.slice( indexOfFirstProfile, indexOfLastProfile );
   console.log("Current Profile = " ,currentProfiles)
   console.log("indexOfFirstProfile  = " ,indexOfFirstProfile)
   console.log("indexOfLastProfile = " ,indexOfLastProfile)


   const handlePageChange = ( pageNumber ) => {
      console.log( `active page is ${ pageNumber }` );
      setCurrentPage( pageNumber )
   };

  return (
    <Fragment>
        <NavBar />
         <div className="">
            <Profile profiles={currentProfiles} />
            {/* <ProfileDetail /> */}
         </div>
        <div>
        <Pagination
               activePage={ activePage }
               itemsCountPerPage={ 3 }
               totalItemsCount={ profiles.length }
               pageRangeDisplayed={ 5 }
               onChange={ handlePageChange }
            />
        </div>
    </Fragment>
  );
}

export default App;
