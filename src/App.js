import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import './App.css';
import AddUser from './AddUserApp';
import SignInForm from "./User_SignIn";


function App() {
  return (
    <div className="AddUser">
		<AddUser/>
    </div>
  );
}

export default App;
