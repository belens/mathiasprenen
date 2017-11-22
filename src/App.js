import React, { Component } from "react";
import styled, { injectGlobal } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "./components/Nav";

import About from "./routes/About";
import Home from "./routes/Home";

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    background-color: #222;
    font-family: "Raleway", Arial, sans-serif;
  }

  .App-intro {
    font-size: large;
  }

  @keyframes App-logo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const Title = styled.h1`
  font-weight: 400;
  text-align: center;
  font-size: 1.5em;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Header = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const Wrap = styled.div``;

class App extends Component {
  render() {
    return (
      <Wrap>
        <Router basename={process.env.PUBLIC_URL}>
          <Header>
            <Title>Mathias Prenen</Title>
            <Nav />

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Header>
        </Router>
      </Wrap>
    );
  }
}

export default App;
