import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import './App.css';
import AddUser from './AddUserApp';
import SignInForm from "./User_SignIn";
import LogOutForm from "./LogOut"
import Home from "./Home";


function App() {

    const [loggedInStatus, setloggedInStatus] = useState("NOT_LOGGED_IN");
    const [user, setUser] = useState({});

    const checkLoginStatus = (id) => {

        fetch("http://localhost:5000/login_instructor", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(id),
        })
            .then((res) => res.json())
            .then((res) => {
                if (
                    res.data.logged_in &&
                    this.state.loggedInStatus === "NOT_LOGGED_IN"
                ) {
                    this.setState({
                        loggedInStatus: "LOGGED_IN",
                        user: res.data.user
                    });
                } else if (
                    !res.data.logged_in &
                    (this.state.loggedInStatus === "LOGGED_IN")
                ) {
                    this.setState({
                        loggedInStatus: "NOT_LOGGED_IN",
                        user: {}
                    });
                }
            });
    }


    const handleLogout = (val) => {

        setloggedInStatus(val);
        setUser({});
        console.log("Log out : ", loggedInStatus);

    }

    const handleLogin = (data) => {
        console.log(data);
        setloggedInStatus("LOGGED_IN")
        setUser(data)
    }


    return (
        <div className="App">
            <Router>
                <Navigation loggedInStatus={loggedInStatus}/>
                <Switch>
                    <Route path="/" exact component={() => <Home/>}/>

                    <Route path="/SignUp"
                           exact component={() => loggedInStatus === "NOT_LOGGED_IN" ?
                        <AddUser onChangeLogin={handleLogin}/> : ""}
                    />
                    <Route path="/SignIn"
                           exact component={() => loggedInStatus === "NOT_LOGGED_IN" ?
                        <SignInForm onChangeLogin={handleLogin}/> : ""}
                    />
                    <Route path="/LogOut"
                           exact component={() => loggedInStatus === "LOGGED_IN" ?
                        <LogOutForm onChangeLogout={handleLogout}/> : ""}
                    />
                </Switch>
            </Router>
        </div>
    );
}





export default App;
