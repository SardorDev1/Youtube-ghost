import React, { useState } from 'react';
import AppY from './AppY';
import firebase from 'firebase/app';
import "./App.css"
import { useEffect } from 'react';
import Load from "./assets/Load.gif"
import Login from './companent/Login';
const App = () => {

const [user , setUser] = useState(null);

useEffect( () =>{
firebase.auth().onAuthStateChanged(user => {
  setUser(user)

})
} , [])

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
    <div>
    {user ? <AppY user={user}/> : <Login/>}
    
    </div>
  );
};



export default App;