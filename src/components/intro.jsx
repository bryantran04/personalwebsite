import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import SnowStorm from 'react-snowstorm';

export default class Sidebar extends Component {

    render() {
        return (
            <Fade>
                <div id="showcase">
                    <SnowStorm />
                    <div className="showcase-content">
                        <h1>
                            Hello, I'm Bryan
                    </h1>
                        <h2> I am a <span
                            class="txt-rotate"
                            data-period="2000"
                            data-rotate='["Software Engineer", "Photographer", "ML Enthusiast"]'></span></h2>
                    </div>
                </div>
            </Fade>
        )
    }
}