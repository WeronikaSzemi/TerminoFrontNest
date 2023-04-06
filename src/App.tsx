import React, { useState } from "react";
import {UserContext} from "./contexts/user.context";
import {Route, Routes} from "react-router-dom";
import './App.css';
import { HomeView } from "./views/HomeView";
import { RegisterView } from "./views/RegisterView";
import { LoginView } from "./views/LoginView";
import { TermbaseListView } from "./views/TermbaseListView";

function App() {
  const [id, setId] = useState('');

  return (
    <>
      <UserContext.Provider value={{id, setId}}>
          <Routes>
              <Route path='/'
                     element={<HomeView/>}/>
              <Route path='/user/register'
                     element={<RegisterView/>}/>
              <Route path='/user/login'
                     element={<LoginView/>}/>
              {/*<Route path='/user/:id'*/}
              {/*       element={<DashboardView/>}/>*/}
              <Route path='/:id/termbase'
                     element={<TermbaseListView/>}/>
              {/*<Route path='/:id/termbase/:termbaseId'*/}
              {/*       element={<TermbaseView/>}/>*/}
              {/*<Route path='/:id/termbase/:termbaseId/entry/add'*/}
              {/*       element={<AddEntryView/>}/>*/}
              {/*<Route path='/:id/termbase/:termbaseId/entry/:entryId'*/}
              {/*       element={<EntryView/>}/>*/}
              {/*<Route path='/:id/termbase/:termbaseId/entry/:entryId/edit'*/}
              {/*       element={<EditEntryView/>}/>*/}
              {/*<Route path='/demo'*/}
              {/*       element={<DemoView/>}/>*/}
              {/*<Route path='*'*/}
              {/*       element={<NotFoundView/>}/>*/}
          </Routes>
      </UserContext.Provider>
      </>
  );
}

export default App;
