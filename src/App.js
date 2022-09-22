import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';

//react-router-dom version 5.2.0 :
//import { Route, Switch, Redirect } from 'react-router-dom';
//-------------------------------------------------------------------
//react-router-dom version 6 :
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Redirect from="/" to="/signup" /> 
      </Switch> */}

      {/* -------------------------------------------------------------------
      react-router-dom version 6 : */}
      
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/" element={<Navigate to="/signup" />} />
      </Routes>


    </div>
  );
}

export default App;
