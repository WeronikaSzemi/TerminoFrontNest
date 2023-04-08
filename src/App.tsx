import React, { useState } from "react";
import {UserContext} from "./contexts/user.context";
import {Route, Routes} from "react-router-dom";
import './App.css';
import { HomeView } from "./views/HomeView";
import { RegisterView } from "./views/RegisterView";
import { LoginView } from "./views/LoginView";
import { TermbaseListView } from "./views/TermbaseListView";
import { EntryListView } from "./views/EntryListView";
import { TermbaseContext } from "./contexts/termbase.context";
import { AddEntryView } from "./views/AddEntryView";
import { SingleEntryView } from "./views/SingleEntryView";
import { EditEntryView } from "./views/EditEntryView";
import { DashboardView } from "./views/DashboardView";
import { AccountView } from "./views/AccountView";

function App() {
  const [id, setId] = useState('');
  const [termbaseId, setTermbaseId] = useState('');

  return (
    <>
      <UserContext.Provider value={{id, setId}}>
          <TermbaseContext.Provider value={{termbaseId, setTermbaseId}}>
              <Routes>
                  <Route path='/'
                         element={<HomeView/>}/>
                  <Route path='/user/register'
                         element={<RegisterView/>}/>
                  <Route path='/user/login'
                         element={<LoginView/>}/>
                  <Route path='/user/:id'
                         element={<DashboardView/>}/>
                  <Route path='/user/:id/account'
                         element={<AccountView/>}/>
                  <Route path='/:id/termbase'
                         element={<TermbaseListView/>}/>
                  <Route path='/:id/termbase/:termbaseId/entry'
                         element={<EntryListView/>}/>
                  <Route path='/:id/termbase/:termbaseId/entry/add'
                         element={<AddEntryView/>}/>
                  <Route path='/:id/termbase/:termbaseId/entry/:entryId'
                         element={<SingleEntryView/>}/>
                  <Route path='/:id/termbase/:termbaseId/entry/:entryId/edit'
                         element={<EditEntryView/>}/>
                  {/*<Route path='/demo'*/}
                  {/*       element={<DemoView/>}/>*/}
                  {/*<Route path='*'*/}
                  {/*       element={<NotFoundView/>}/>*/}
              </Routes>
          </TermbaseContext.Provider>
      </UserContext.Provider>
      </>
  );
}

export default App;
