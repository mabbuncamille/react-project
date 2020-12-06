import React, { Component } from "react";
import "./app.scss";

class App extends Component {
  render() {
    return (
      <div>
        <div className="bannerImg">
          <div className="bannerContent">
            <div className="logoWrapper">
              <a href="#" className="logo">Space Savvy</a>
            </div>
            <h1 className="bannerHead">Discover Space Missions</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
