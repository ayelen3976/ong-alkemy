import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import AppRouter from "./AppRouter";
import 'bootstrap/dist/css/bootstrap.min.css';
import jwtDecode from 'jwt-decode';
import setAuthorizationToken from './utils/setAuthorizationToken';
import { setCurrentUser } from './actions/auth';


function App() {
  
  if (localStorage.jwtToken) {
    setAuthorizationToken(localStorage.jwtToken);
    const data = jwtDecode(localStorage.jwtToken);
     const { id, email, firstName, roleId } = data.user;
     store.dispatch(setCurrentUser({ id, email, firstName, roleId }));
  }

  return (
    <Provider store={store} >
      <div className="App">
        <AppRouter  />
      </div>
    </Provider>
  );
}

export default App;
