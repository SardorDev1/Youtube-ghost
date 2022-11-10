import React, { useState } from 'react';
import AppY from './AppY';

import "./App.css"
import { useEffect } from 'react';


import Load from "./assets/Load.gif"
import Login from './companent/Login';
import {auth} from "./companent/firebase/config"

const App = () => {

  const [user, setUser] = useState(null);


  useEffect(() => {

auth.onAuthStateChanged(user => {
setUser(user)
  
})
  }, [])




  const [loading, setLoading] = useState(true)


  setTimeout(() => {
    setLoading(false)
  }, 7000);
  if (loading) {
    return (
      <>

        <div className="load">
          <img src={Load} alt="" />
        </div>

      </>
    )
  }


  return (
    <>
      {user ? <AppY user={user} /> : <Login />}
    </>
    //   <BrowserRouter>
    //  <Routes>
    //   <Route path='/login' element={<Login/>} />
    //   </Routes> 
    //   </BrowserRouter>
    // <div>


    // </div>
  );
};



export default App;