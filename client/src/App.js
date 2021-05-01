import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/homepage/homepage";
// import StruggleBot from '../src/components/card-one/StruggleBot';
// import DisplayPage from '../src/components/card-two/DisplayPage';
// import ChatBox from '../src/components/card-three/ChatBox';
import axios from "axios";
import Userfront from "@userfront/react";
import ProtectedRoute from "./components/ProtectedRoutes/ProtectedRoutes";

Userfront.init("wn9965n5");
const LoginForm = Userfront.build({
  toolId: "ldkoaa",
});

const LogoutButton = Userfront.build({
  toolId: "naornr",
});

require("dotenv").config();

export default class App extends Component {
  state = {
    meme: [],
    wisdom: [],
  };

  handleWisdom = () => {
    axios.get("https://zenquotes.io/api/random").then((res) => {
      this.setState({
        wisdom: res.data,
        meme: [],
      });
      console.log(this.state.wisdom);
    });
  };

  handleMeme = () => {
    axios.get("https://api.imgflip.com/get_memes").then((res) => {
      this.setState({
        meme: res.data,
        wisdom: [],
      });
      console.log(this.state.meme);
    });
  };

  render() {
    return (
      <div className="homepage">
        <Router className="App">
          <Switch>
            <ProtectedRoute
              exact
              path="/"
              render={() => (
                <HomePage
                  handleWisdom={this.handleWisdom}
                  handleMeme={this.handleMeme}
                  wisdom={this.state.wisdom}
                  meme={this.state.meme}
                  logoutButton={LogoutButton}
                />
              )}
            />
            <Route exact path="/login" component={LoginForm} />
            {/* <ProtectedRoute exact path="/" render={()=> <><StruggleBot handleWisdom={this.handleWisdom} handleMeme={this.handleMeme}/><DisplayPage wisdom={this.state.wisdom} meme={this.state.meme}/> <ChatBox/></>}/> */}
          </Switch>
        </Router>
      </div>
    );
  }
}
