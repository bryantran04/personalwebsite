import React from 'react';
import ReactDOM from 'react-dom'
import Sidebar from './components/sidebar'
import Intro from './components/intro'
import About from './components/about'

import './style.css';

class App extends React.Component {

    render() {
        return (
            <div className="wrapper">
                <Sidebar></Sidebar>

                <div id="content">
                    <Intro></Intro>
                    <About></About>
                </div>

            </div>

        )
    }
}

export default App;
