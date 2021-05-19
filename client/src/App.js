import React, { Component, useEffect } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/homepage/homepage";
import axios from "axios";
import Userfront from "@userfront/react";
import ProtectedRoute from "./components/ProtectedRoutes/ProtectedRoutes";

Userfront.init("wn9965n5");
const LoginForm = Userfront.build({
  toolId: "ldkoaa",
});

require("dotenv").config();

// useEffect(() => {
//   const callWisdomAPI = async() => {
//     const res = await axios.get('/api/wisdom');
//     setWisdom(res.data);
// };
//   callWisdomAPI();
// }
export default class App extends Component {
  state = {
    meme: [],
    wisdom: [],
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

  callWisdomAPI = () => {
    axios.get("/api/wisdom").then((res) => {
      this.setState({
        wisdom: res.data,
        meme: [],
      });
      console.log(this.state.wisdom);
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
                  handleWisdom={this.callWisdomAPI}
                  handleMeme={this.handleMeme}
                  wisdom={this.state.wisdom}
                  meme={this.state.meme}
                />
              )}
            />
            <Route exact path="/login" component={LoginForm} />
          </Switch>
        </Router>
      </div>
    );
  }
}
