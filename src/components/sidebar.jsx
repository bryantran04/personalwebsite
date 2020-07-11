import React, { Component } from 'react'

export default class Sidebar extends Component {

    render() {

        const mystyle = {
            width: "15%",
            height: "15%",
            margin: "auto",
        };

        return (
            <nav id="sidebar" >
                <div class="sidebar-header">
                    <h3>Bryan Tran</h3>
                </div>

                <ul class="list-unstyled components">
                    <p>Made with React :)</p>
                    <li>
                        <a href="#">Introduction</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Personal Projects</a>
                    </li>
                    <a href="https://www.linkedin.com/in/bryantranva/">
                        <img src='images/linkedin-brands.svg' style={mystyle}></img>
                    </a>
                </ul>

            </nav >

        )
    }
}