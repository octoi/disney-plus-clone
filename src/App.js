import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import Login from './components/Login';
import AuthProtected from './utils/AuthProtected';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact>
                        <AuthProtected>
                            <Home />
                        </AuthProtected>
                    </Route>
                    <Route path="/login" exact>
                        <Login />
                    </Route>
                    <Route path="/detail/:movie" exact>
                        <AuthProtected>
                            <Detail />
                        </AuthProtected>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
