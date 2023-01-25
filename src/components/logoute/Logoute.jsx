import classes from './Logoute.module.scss'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LogoutButton() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
const navigate = useNavigate()
  const handleLogout = () => {
    
    localStorage.removeItem("token");
    
    setIsAuthenticated(false);
    navigate('/')
  }

  return (
    <button className={classes["logoite"]} onClick={handleLogout}>Logout</button>
  );
}
export default LogoutButton;