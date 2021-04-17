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
import thumb07 from '../assets/images/thumbs/07.jpg'
import thumb08 from '../assets/images/thumbs/08.jpg'
import thumb09 from '../assets/images/thumbs/101.jpg'
import thumb10 from '../assets/images/thumbs/102.jpg'
import thumb11 from '../assets/images/thumbs/103.jpg'
import thumb12 from '../assets/images/thumbs/012.jpg'
import thumb13 from '../assets/images/thumbs/013.jpg'

import full01 from '../assets/images/fulls/04.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'
import full07 from '../assets/images/fulls/07.jpg'
import full08 from '../assets/images/fulls/08.jpg'
import full09 from '../assets/images/fulls/101.jpg'
import full10 from '../assets/images/fulls/102.jpg'
import full11 from '../assets/images/fulls/103.jpg'


// 'https://share.streamlit.io/svensone/fastai2-bali-dance/main/app.py'
const DEFAULT_IMAGES = [
    { id: '1', src: full01, thumbnail: thumb01, 
    caption: 'Bali Covid Data Dashboard - Plotly/Python', 
    description: 'Collecting daily COVID-data from official sources, Dashboard Visualization with Plotly-Dash App deployed on Heroku: Displaying Regency Data for Bali with interactive comparison with other countries and indonesia provinces- made with Plotly, Scrapy, Python, Pandas, ', link: 'https://bali-covid-app.herokuapp.com/'},
    { id: '8', src: full08, thumbnail: thumb08, caption: 'Pytorch/fastai Comp. Vision Pneumonia detection',     description: 'Image Recognition on lung x-rays to detect pneumonia, accuracy 72% - pytorch/fastAI', link: 'https://share.streamlit.io/svensone/-fastai2-pneumonia-cv/app.py'},
    { id: '2', src: full07, thumbnail: thumb07, 
    caption: 'fastai Balinese-Dance-Styles Recognition, scraped and cleaned Image-Dataset', 
    description: 'ResNet34 CNN trained on balinese dance-style images (500 images), accuracy 86% - made with fastai/pytorch, Python', link: 'https://share.streamlit.io/svensone/fastai2-bali-dance/main/app.py' },
    { id: '12', src: full06, thumbnail: thumb13, 
    caption: 'Tensorflow Computer Vision',
    description: 'Detection of Pneumonia caused by COVID, with Scikit-learn and TensorFlow', 
    link: 'https://www.kaggle.com/svensone/tf-covid19-comp-vision-x-ray/output'},
    { id: '13', src: full06, thumbnail: thumb12, 
    caption: 'Pytorch CNN on DICOM-Images for Skin Melanoma Detection',
    description: ' Dataset 33.000 DICOM Images, pytorch, fastai, scikit-learn', 
    link: 'https://github.com/Svensone/kaggle/blob/main/Competitions/06_04_21_%5Bfastaiv2%5D_DICOM_Melanoma_Ver_5.ipynb'},
    { id: '9', src: full09, thumbnail: thumb09, 
    caption: 'Dataset Creation for daily Covid-Data in Bali on sub_regency level', 
    description: 'Dataset created with python scrapy, processing with Pandas', link: 'https://www.kaggle.com/svensone/covid19-bali-regencies-data'},
    { id: '10', src: full10, thumbnail: thumb10, caption: 'Garmin Watch Widget', 
    description: 'Garmin Slope Detection App (MonkeyC)', link: 'https://github.com/Svensone/Garmin-Slope-App'},
    { id: '11', src: full11, thumbnail: thumb11, caption: 'coming next',
    description: 'next project coming soon', link: ''},
    { id: '3', src: full02, thumbnail: thumb02, caption: 'Various Data Visualization', 
    description: 'classic EDA of DNA Data, AI Image recognition, and Stock Data Visualization- made with Python, seaborn, pandas, yfinance', link: 'http://b3eb0f5587b2.ngrok.io/'},
    { id: '4', src: full03, thumbnail: thumb03, caption: 'Space-X App', 
    description: 'ReactJS-GraphQl App displaying all launches of Elon Musks Space-X', link: 'https://space-x-app-sven.herokuapp.com/launch/1'},
    { id: '5', src: full04, thumbnail: thumb04, caption: 'Data Visualization with Javascript and D3', 
    description: 'Animated visualization of US GDP - REST API, Javascript, D3', link: 'https://datavisualization-with-d3.herokuapp.com/index.html'},
    { id: '6', src: full05, thumbnail: thumb05, caption: 'Simple Classic Html Homepage', 
    description: 'made with Bootstrap, Html, Sass & some JS Animations', link: 'https://svensone.github.io/'},
    { id: '7', src: full06, thumbnail: thumb06, caption: 'Welcome to Bali', 
    description: 'HTML / CSS / JS Site with anime.js and other animations', link: 'https://svenson-bali-homepage.netlify.com/'},
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
        // if (this.state.currentImage === this.props.images.length - 1) return;

        // this.gotoNext();
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

                        <h2>About me</h2>
                        </header>
                        <p> Hi, my name is Sven and I work as a <strong>Data Scientist</strong>. After my <strong>MBA</strong> studies in
                        Technology and Management at TU Munich, I have extended my knowledge in <strong>International Business Law</strong>
                        at Univerity of London (LLM). Before I started as a <strong>Frontend Web-Developer</strong> in 2017, I gathered
                        valuable experience at <strong>Lufthansa</strong> by implementing Lean-Management projects.<br />
                        <strong>Main work</strong>: <br />
                        - <strong>Data Analytics:</strong> <br />
                        gathering, cleaning, processing and visualizing data with Python Pandas, Numpy, Scrapy, Seaborn, Matplotlib<br/>
                        - Machine Learning: <strong><br />
                        Computer Vision</strong> and <strong>NLP</strong> with TensorFlow and Pytorch / fastAI<br />
                        - <strong>Business Intelligence:</strong><br />
                        -Tableau, Excel, Dash/Plotly <br />
                        Since the  <strong>ocean</strong> and <strong>surfing</strong> are a great passion for me, I spent a lot of time in Indonesia 🌴, 
                        where I also help at a local <strong>orphanage</strong>. I also enjoy cooking and all things sports & fitness related.    
                        </p>
                        <ul className="actions">
                            <li><a href="https://www.linkedin.com/in/sven-ertel1/" target="_blank" className="button" > LinkedIn</a></li>
                        </ul>
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
                                        based in : <br/>
                                        80679 Munich / Germany <br />
                                        Bali / Indonesia 
                                        
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