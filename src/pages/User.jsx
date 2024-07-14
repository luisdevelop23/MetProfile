import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CLoading from '../components/Loading';
import UserPage from '../layout/UserPage';
import searchUserData from "../utils/SearchUser";

const User = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const data = await searchUserData(userId);
      setUserData(data);
      if(!data){
        setError(true)
      }
    }
    fetchData();
    if(!data){
      
      setError(true)
    }
  }, [userId]);


  useEffect(() => {
    if (error && !userData) {
      navigate('/error');
    }
  }, [error, navigate]);

console.log(userData)
  
  return (
    <>
    {
      userData ? <UserPage user={userData}/> :  <CLoading/>
    }
    {/* <UserPage user={userData}/> */}
    
    </>
  )
}

export default User