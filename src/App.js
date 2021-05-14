import './App.css';
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/detail" exact>
                        <Detail />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
