import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import Login from './pages/login.jsx'
import Register from './pages/Register.jsx'  //add for linking registration and login page

function App() {
  const [currentPage, setCurrentPage]=useState("register")
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegisteredIn, setIsRegisteredIn ]=useState(false); //add

  return (
    <div>
      {currentPage==="register" && <Register/>}
      {currentPage==="login" && (isLoggedIn ? (
        <h1>Welcome, Admin !</h1>
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      ))}
    </div>
  );
}

export default App