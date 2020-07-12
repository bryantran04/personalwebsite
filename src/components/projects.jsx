import React, { Component } from 'react'

const projects = [
    {
        'img': 'furniture.jpg', 'title': 'UVA Furniture', 'desc': 'Developed a scalable web app with Django to help students find furniture. Used Docker to containerize micro-services, experience services, and front-end services. Used Kafka to queue item creation and queue search indexer and Elastic Search to optimize our search results. Used HaProxy for load balancing and Redis for caching.', 'link': 'https://github.com/bryantran04'
    },
    { 'img': 'torch-nn.png', 'title': 'Picture2Emotion2Song', 'desc': 'Web app that takes a picture, inputs into our pretrained model, and then outputs a spotify playlist. We used deep-learning to extract abstract emotion from various pictures. We fine tuned a VGG-16 model with pytorch and used flash with Spotify\'s web API', 'link': 'documents/cvproj.pdf' }

]

export default class About extends Component {

    render() {
        return (
            <div id="projects" className="subsection">
                <h1>Projects</h1>

                <div className="container">
                    <div class="row mt-5">
                        {projects.map((item, key) => (

                            <div className='col-md-6'>


                                <div class="card" style={{ width: "22rem", height: "40rem" }}>
                                    <a href={`${item['link']}`} target="_blank">
                                        <img className="project-img" src={`images/${item["img"]}`}></img>
                                    </a>
                                    <div class="card-body">
                                        <h5 class="card-title">{`${item['title']}`}</h5>
                                        <p class="card-text">{`${item['desc']}`}</p>
                                    </div>
                                </div>
                            </div>



                        ))}
                    </div>

                </div>
            </div>
        )
    }
}