import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './assets/uilits/Layout';
import Register from './components/Register';
import Linkpage from './components/Linkpage';
import Unauthorized from './components/Unauthorized';
import Home from './components/Home';
import Editor from './components/Editor';
import Admin from './components/Admin';
import Lounge from './components/Lounge';
import Missing from './components/Missing';
import RequireAuth from './assets/uilits/RequireAuth';
import Login from './components/Login';
import { useContext,useEffect } from 'react';
import {AuthProviderContext } from './context/AuthProvider'

function App() {

  const { auth, updateUserInfo } = useContext(AuthProviderContext);
  console.log("login : ", auth.username);

  /* code : https://github.com/gitdagray/react_protected_routes  */

  
  return (
    
      <Routes>

          {/* public routes */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="linkpage" element={<Linkpage />} />
          <Route path="unauthorized" element={<Unauthorized />} />

            {/* we want to protect these routes */}
          <Route element={<RequireAuth />}>
              <Route path="/" element={<Home />} />
              <Route path="editor" element={<Editor />} />
              <Route path="admin" element={<Admin />} />
              <Route path="lounge" element={<Lounge />} />
          </Route>

            <Route path="*" element={<Missing />} />

        </Routes>
 
  )
}

export default App
