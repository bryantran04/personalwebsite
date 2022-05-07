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
                    <li>
                        <a href="#showcase">Introduction</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="documents/bryan_tran_resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                    </li>


                </ul>
                <div className="links">


                </div>
                <div style={{ position: "absolute", bottom: "0", textAlign: "center", width: "100%" }}>
                    <ul style={{ listStyleType: "none", paddingInlineStart: "0px" }}>
                        <li>
                            <a href="https://www.linkedin.com/in/bryantranva/">
                                <img src='images/linkedin-brands.svg' style={mystyle}></img>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/bryantran04">
                                <img src='images/github-square-brands.svg' style={mystyle}></img>
                            </a>
                        </li>
                    </ul>
                    <p>   Made with React :)</p>

                </div>
            </nav >

        )
    }
}