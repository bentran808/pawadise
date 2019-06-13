import React, { Component } from 'react';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from './routes';
class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Nav />
                    {this.showContent(routes)}
                    <Footer />
                </div>
            </Router>
        );
    }

    showContent = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
            });
        }
        return <Switch>{result}</Switch>
    }
}

export default App;