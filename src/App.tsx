import React, { useState } from "react";
import {LoginContext} from "./contexts/login.context";
import {Route, Routes} from "react-router-dom";
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [id, setId] = useState('');

  return (
    <>
      <LoginContext.Provider value={{loggedIn, setLoggedIn, id, setId}}>
          <Routes>
              <Route path='/'
                     element={<HomeView/>}/>
              <Route path='/user/login'
                     element={<LoginView/>}/>
              <Route path='/user/register'
                     element={<RegisterView/>}/>
              <Route path='/user/:id'
                     element={<DashboardView/>}/>
              <Route path='/termbase'
                     element={<TermbaseListView/>}/>
              <Route path='/termbase/:termbaseId'
                     element={<TermbaseView/>}/>
              <Route path='/entry/add'
                     element={<AddEntryView/>}/>
              <Route path='/entry/:entryId'
                     element={<EntryView/>}/>
              <Route path='/entry/:entryId/edit'
                     element={<EditEntryView/>}/>
              <Route path='*'
                     element={<NotFoundView/>}/>
          </Routes>
      </LoginContext.Provider>
      </>
  );
}

export default App;
