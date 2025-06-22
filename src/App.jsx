// import React from 'react';
// import {Routes,Route,Navigate} from "react-router";
// import { useAuth } from './context/AuthProvider';


// import Home from './components/Home'
// import Login from './components/Login';   
// import Signup from './components/Signup';

// function App() {
//   const {authUser} = useAuth();
//   console.log(authUser);
//   return (<>
//   <div>
// <Routes>
//     {/* Home route - accessible only if logged in */}
//       <Route
//         path="/"
//         element={authUser ? <Home /> : <Navigate to="/login" />}
//       />

//       {/* Login route - redirect to Home if already logged in */}
//       <Route
//         path="/login"
//         element={authUser ? <Navigate to="/" /> : <Login />}
//       />

//       {/* Signup route - redirect to Home if already logged in */}
//       <Route
//         path="/signup"
//         element={authUser ? <Navigate to="/" /> : <Signup />}
//       />
//     </Routes>
   
//   </div>
  
//    </>
//   );
// }

// export default App






import React from 'react';
import { Routes, Route, Navigate } from "react-router";
import { useAuth } from './context/AuthProvider';

import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const { authUser } = useAuth();

  return (
    <Routes>
      <Route path="/" element={authUser ? <Home /> : <Navigate to="/login" />} />
      <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
      <Route path="/signup" element={authUser ? <Navigate to="/" /> : <Signup />} />
    </Routes>
  );
}

export default App;

