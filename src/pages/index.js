import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/04.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'
import full07 from '../assets/images/fulls/07.jpg'

const DEFAULT_IMAGES = [
    { id: '1', src: full01, thumbnail: thumb01, caption: 'Bali Covid Dash App', description: 'Dash App deployed on Heroku : Displaying Regency Data for Bali - made with Python, Plotly, Scrapy', link: 'https://bali-covid-app.herokuapp.com/'},
    { id: '2', src: full07, thumbnail: thumb07, caption: 'fastAI/pytorch ML Image Recognition', 
    description: 'ResNet34 CNN trained on balinese dance-style images, accuracy 86% - made with fastai, pytorch, Python', link: 'https://share.streamlit.io/svensone/fastai2-bali-dance/main/app.py'},

    { id: '3', src: full02, thumbnail: thumb02, caption: 'Streamlit App', description: 'Various Projects (classic EDA, ML, Web-Scraping, Data Visualization - made with Python, seaborn, pandas, yfinance', link: 'https://share.streamlit.io/svensone/streamlit_web_app/app.py'},
    { id: '4', src: full03, thumbnail: thumb03, caption: 'Space-X App', description: 'ReactJS-GraphQl App displaying all launches of Elon Musks Space-X', link: 'https://space-x-app-sven.herokuapp.com/launch/1'},
    { id: '5', src: full04, thumbnail: thumb04, caption: 'Data Visualization w/ d3.js', description: 'visualization of US GDP called with json API', link: 'https://datavisualization-with-d3.herokuapp.com/index.html'},
    { id: '6', src: full05, thumbnail: thumb05, caption: 'Simple Html Homepage', description: 'Coding in Bali - Bootstrap, Html, Sass & some JS Animations', link: 'https://svensone.github.io/'},
    { id: '7', src: full06, thumbnail: thumb06, caption: 'Welcome to Bali', description: 'HTML / CSS / JS Site with anime.js and other animations', link: 'https://svenson-bali-homepage.netlify.com/'}
];

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        const siteTitle = "Portfolio by Sven"
        const siteDescription = "Display of my works"
        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>
                <div id="main">
                    <section id="one">
                        <header className="major">
                            <h2>Web-Dev (2017-) and Data Science(2019-)</h2>
                        </header>
                        <p> Diploma Business Administration (Munich) and LLM (London)<br /> 
                        now Coding in Bali🌴🥥 </p>
                        {/* Button for More Info - LinkedIn Profile ? */}
                        {/* <ul className="actions">
                            <li><a href="#" className="button"> More</a></li>
                        </ul> */}
                    </section>

                    <section id="two">
                        <h2>Recent Works</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description, link }) => ({
                            src,
                            thumbnail,
                            caption,
                            description,
                            link
                        }))} />

                        {/* <ul className="actions">
                            <li><a href="#" className="button">Full Portfolio</a></li>
                        </ul> */}
                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                        {/* <p>to stay connected & so you can enjoy my future works as well</p> */}
                        <div className="row">
                            {/* <div className="8u 12u$(small)">
                                <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div> */}
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        82261 Bali <br />
                                        Indonesia <br />
                                        / <br />
                                        80679 Munich <br />
                                        Germany
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        -
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="#">svenson.ertel@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        )
    }
}

export default HomeIndex