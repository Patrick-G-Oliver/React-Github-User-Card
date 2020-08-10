import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import UserCard from "./components/UserCard";
import FollowerCards from "./components/FollowerCards";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
    }
  }

  componentDidMount() {
    console.log("CDM");
    axios
      .get("https://api.github.com/users/Patrick-G-Oliver")
      .then(res => {
        console.log(res.data)
        this.setState({ user: res.data })
      })
      .catch(err => console.log(err));

    axios 
      .get("https://api.github.com/users/Patrick-G-Oliver/followers")
      .then(res => {
        console.log("followers", res.data)
        this.setState({ followers: res.data }) 
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <UserCard user={this.state.user} />
        <FollowerCards followers={this.state.followers}/>
      </div>
    );
  }
}

export default App;
