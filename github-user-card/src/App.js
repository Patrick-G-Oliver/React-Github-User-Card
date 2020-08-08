import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import UserCard from "./components/UserCard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
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
  }

  render() {
    return (
      <div className="App">
        <UserCard user={this.state.user} />
      </div>
    );
  }
}

export default App;
