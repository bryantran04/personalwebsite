
import React, { Component, Fragment } from 'react'
const roles = [
    { 'img': 'uva.jpg', 'role': 'Graduated', 'years': 'Aug 2016- May 2020', 'desc': 'I studied Computer Science and Statistics.', 'location': 'Charlottesville, VA', 'company': 'University of Virginia' },
    { 'img': 'cap1alt.png', 'role': 'Associate Software Engineer', 'years': 'Aug 2020 - Present', 'desc': 'I am a software engineer for Capital One, part of the TDP rotational program', 'location': 'McLean, VA', 'company': 'Capital One' },
    { 'img': 'cvent.jpg', 'role': 'Software Engineering Intern', 'years': 'June 2019 - Aug 2019', 'desc': 'Testing Framework Development: Developed Java functions with Selenium for the company\'s testing framework to automate testing scripts and extract information from web pages. Used JIRA to track issues with the company\'s testing framework and Jenkins for continuous integration. Developed test cases with Cucumber and Gherkin to test the Java functions. \n API Endpoint Conversion: Re - factored old test cases that uses the UI to generate test data, to use API Endpoints instead.Reduced time in creating testing data sets and solve sync issues.Used Postman to test the converted scripts.Decreased failed tests by 50 % and improved overall execution time.', 'location': 'McLean, VA', 'company': 'Cvent' },
    { 'img': 'sp.png', 'role': 'Data Science Intern', 'years': 'June 2018 - Aug 2018', 'desc': 'Natural Language Processing: Developed Machine-Learning models with Python and Natural Language processing to analyze text and predict the categories of financial documents. Each financial document would then be sent to a specific team based on the category. Utilized scikit-learn and Tensorflow to build the SVM and deep-learning models. Pandas, Numpy, and matplotlib for exploratory data analysis. \n Data Pipeline: Implemented a text transformation through a pipeline in the final product.Text would be transformed based on TF - IDF and bag of words techniques.Used NTLK, numpy, and scikit - learn python packages.Entire service turned a week long task to approximately one hour.', 'location': 'Charlottesville, VA', 'company': 'Standard and Poor\'s Market Intelligence' },

]
const imgs = ["uva.jpg", "cap1alt.png", "cvent.jpg", "sp.png"]

// https://www.selbekk.io/blog/2019/08/how-to-fade-in-content-as-it-scrolls-into-view/
function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(true);
    const domRef = React.useRef();
    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, []);
    return (
        <div
            className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}

export default class About extends Component {

    render() {
        return (
            <div className="subsection">
                <h1>About</h1>

                <div className="container">

                    <Fragment>
                        {roles.map((item, key) => (
                            <FadeInSection>
                                <div class="row mt-5 " key={key}>

                                    <div className="col-md-6 img-container">
                                        <img src={`images/${item["img"]}`}></img>
                                    </div>
                                    <div className="col-md-6">
                                        <h2>{`${item['company']}`}</h2>
                                        <h5>{`${item['role']}`}</h5>
                                        <h6>{`${item['location']}`}</h6>
                                        <h6>{`${item['years']}`}</h6>
                                        <p>{`${item['desc']}`}</p>
                                    </div>

                                </div>
                            </FadeInSection>
                        ))}
                    </Fragment>
                </div>
            </div>
        )
    }
}