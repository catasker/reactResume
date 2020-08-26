import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Contact } from './components/Contact';
import { NoMatch } from './components/NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Resume } from './components/Resume'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Resume}></Route>
              <Route path='/contact' component={Contact}></Route>
              <Route component={NoMatch}></Route>
            </Switch>
          </Router>
        </Layout>
        <contactModal></contactModal>
      </React.Fragment>
    )
  }
}

export default App;
