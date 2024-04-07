import axios from "axios";
import  { ReactNode, createContext, useContext, useEffect, useState } from "react";

export const BACKEND_URL="https://medium.rahulsoni3108.workers.dev/api/v1"

export interface UserDetails {
  FirstName: string;
  LastName: string;
  Bio?: string;
  id: number;
  Blog: [
    {
      Title: string;
      Content: string;
      Published: boolean;
      id: number;
    }
  ];
}

interface UserContextType{
    userdetails?:UserDetails,
    detailsloading:boolean,

}

const initialUserContextValue: UserContextType = {
  userdetails: undefined,
  detailsloading: false,
};


const UserContext = createContext(initialUserContextValue);

export const UseUserContext = () => {
  return useContext(UserContext);
};

export const UserContextProvider = ({ children }:{children:ReactNode}) => {
  const [detailsloading, setloading] = useState(false);
  const [userdetails, setuserdetails] = useState<UserDetails>();

  useEffect(()=>{
    setloading(true)
    async function fetchdetails(){
     const response = await axios.get(`${BACKEND_URL}/user/userprofile`,{
      headers:{
        Authorization:`Bearer ${localStorage.getItem('token')}`
      }
     }) 
     setloading(false);
     setuserdetails(response.data.user)
    }
    fetchdetails()
  },[])
  return (
    <UserContext.Provider value={{ userdetails, detailsloading }}>
      {children}
    </UserContext.Provider>
  );
};

