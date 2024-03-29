import React, { useContext, useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const { user, loginWithRedirect, logout } = useAuth0();
  const [myUser, setMyUser] = useState(null);

  useEffect(() => {
    setMyUser(user);
  }, [user]);
  return (
    <UserContext.Provider value={{ loginWithRedirect, logout, myUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext };
