import React from 'react';
import Sidebar from './components/sidebar'
import Intro from './components/intro'
import About from './components/about'
import Projects from './components/projects'


import './style.css';

class App extends React.Component {

    render() {
        return (
            <div className="wrapper">
                <Sidebar></Sidebar>

                <div id="content">
                    <Intro></Intro>
                    <About></About>
                    <Projects></Projects>
                </div>

            </div>

        )
    }
}

export default App;
