import './App.css';
import IMG_aboutus from './assets/img/aboutus.jpeg';
import IMG_videogames
    from './assets/img/team/video games touhou snakes green eyes miko smiling open mouth kochiya sanae japanese clothes anime gi_www.wallpaperhi.com_57.jpg';
import IMG_07ab from './assets/img/team/07ab098e29d5eac4d98894b3178394f6.jpeg';
import IMG_0f8 from './assets/img/team/0f84c537b19a860ed57ebca1a5d04f24.jpeg';
import IMG_wp90 from './assets/img/team/wp9039266.jpeg';
import IMG_portfolio_1 from './assets/img/portfolio/portfolio-1.jpg';
import IMG_portfolio_2 from './assets/img/portfolio/portfolio-2.jpg';
import IMG_portfolio_3 from './assets/img/portfolio/portfolio-3.jpg';
import IMG_portfolio_4 from './assets/img/portfolio/portfolio-4.jpg';
import IMG_portfolio_5 from './assets/img/portfolio/portfolio-5.jpg';
import IMG_portfolio_6 from './assets/img/portfolio/portfolio-6.jpg';
import IMG_portfolio_7 from './assets/img/portfolio/portfolio-7.jpg';
import IMG_portfolio_8 from './assets/img/portfolio/portfolio-8.jpg';
import IMG_portfolio_9 from './assets/img/portfolio/portfolio-9.jpg';
import IMG_17aoua from './assets/img/17-aoua1-night1.png'

function App() {
    return (
        <div className="App">
            <header id="header" className="main-header" style={{
                backgroundImage: `url(${IMG_17aoua})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "670px"
            }}>
                <nav className="navbar navbar-dark navbar-expand-md fixed-top mobi">
                    <div className="container">
                        <a className="navbar-brand" href="#">GNOSISLIFE</a>
                        <button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse"
                             id="navcol-1" style={{fontSize: "14px"}}>
                            <ul className="nav navbar-nav ml-auto">
                                <li className="nav-item"><a className="nav-link active scrollto" href="#header">HOME</a>
                                </li>
                                <li className="nav-item"><a className="nav-link scrollto" href="#about-us">ABOUT</a>
                                </li>
                                <li className="nav-item"><a className="nav-link js-scroll-trigger scrollto"
                                                            href="#services">SERVICES</a></li>
                                <li className="nav-item"><a className="nav-link js-scroll-trigger scrollto"
                                                            href="#team">FREELANCERS</a>
                                </li>
                                <li className="nav-item"><a className="nav-link js-scroll-trigger scrollto"
                                                            href="#pricing">PLANS</a>
                                </li>
                                <li className="nav-item dropdown"><a className="dropdown-toggle nav-link"
                                                                     data-toggle="dropdown"
                                                                     aria-expanded="false" href="#">ITEMS</a>
                                    <div className="dropdown-menu"><a className="dropdown-item" href="#">First
                                        Item</a><a
                                        className="dropdown-item" href="#">Second Item</a><a className="dropdown-item"
                                                                                             href="#">Third
                                        Item</a></div>
                                </li>
                                <li className="nav-item"><a className="nav-link js-scroll-trigger scrollto"
                                                            href="#contact">CONTACT</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center header-elements">
                                <h1 data-aos="fade-up" className="header-main-title"
                                    style={{color: "#0b506bce", fontSize: "48px", letterSpacing: "2px"}}><strong>FIND
                                    YOURSELF
                                    EMPLOYED
                                    HERE</strong><br/></h1>
                                <p className="lead d-inline"
                                   data-aos="fade-up"
                                   style={{color: "#df37c3a9", width: "50%"}}>
                                    <strong>"PERFECT
                                        PLACE FOR THE FREELANCERS"</strong><br/></p>
                                <button className="btn btn-outline-info header-btn" data-aos="fade-right"
                                        type="button">GET STARTED
                                </button>
                                <div className="header-icon"
                                     style={{marginTop: "80px"}}><a data-aos="fade-up" className="nav-link scrollto"
                                                                    href="#about-us"><i
                                    className="fa fa-angle-down hvr-hang"
                                    style={{color: "#f4eeee", fontSize: "48px"}}/></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section id="about-us" className="about-us" style={{paddingBottom: "50px"}}>
                <div>
                    <h2 className="text-center section-title" data-aos="fade-up"
                        style={{paddingTop: "30px", paddingBottom: "0px"}}>
                        <strong>ABOUT US</strong></h2>
                </div>
                <hr data-aos="fade-up" style={{width: "120px", borderBottomStyle: "none", paddingBottom: "30px"}}/>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div data-aos="fade-up" className="hvr-trim"><img className="img-fluid about-us-img"
                                                                              src={IMG_aboutus}/></div>
                        </div>
                        <div className="col">
                            <div>
                                <h1 data-aos="fade-up" style={{color: "#002654"}}><strong>A whole world of freelance
                                    talent at your
                                    fingertips</strong></h1>
                                <p className="lead" data-aos="fade-up" style={{color: "#9bc4e2"}}>Find the right
                                    freelancer to begin
                                    working on your project within minutes.</p>
                                <p data-aos="fade-up">Find high-quality services at every price point. No hourly
                                    rates, just
                                    project-based pricing.</p><a className="btn btn-info about-us-btn" role="button"
                                                                 data-aos="fade-up"
                                                                 href="#" style={{width: "150px"}}>More About Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="services" className="services"
                     style={{marginTop: "20px", marginBottom: "20px", background: "rgba(240,249,255,0.6)"}}>
                <div className="text-center">
                    <h2 className="text-center section-title" data-aos="fade-up"
                        style={{paddingTop: "50px", paddingBottom: "0px"}}>
                        <strong>SERVICES</strong></h2>
                    <hr data-aos="fade-up" style={{width: "120px", borderBottomStyle: "none", paddingBottom: "30px"}}/>
                    <p data-aos="fade-up" style={{marginBottom: "25px"}}>Explore The Marketplace.</p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-lg-4 col-md-6 icon-box" data-aos="fade-up"
                             style={{marginTop: "20px", marginBottom: "20px"}}>
                            <div className="float-left services-icon" data-aos="fade-up"><i
                                className="fa fa-shopping-cart"
                                style={{fontSize: "25px"}}/></div>
                            <div>
                                <a href="#"><h4 data-aos="fade-up" className="services-title"><strong>Digital
                                    Marketing</strong><br/>
                                </h4></a>
                                <p data-aos="fade-up" className="services-p">Build your brand. Grow your business.
                                    Search Engine
                                    Optimization (SEO), Social Media Marketing and many more.</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-4 col-md-6 icon-box"
                             style={{marginTop: "20px", marginBottom: "20px"}}>
                            <div className="float-left services-icon" data-aos="fade-up"><i
                                className="fa fa-free-code-camp"
                                style={{fontSize: "25px"}}/></div>
                            <div>
                                <a href="#"><h4 data-aos="fade-up" className="services-title"><strong>Programing &
                                    Tech</strong><br/>
                                </h4></a>
                                <p data-aos="fade-up" className="services-p">Get all the technical bells and whistles
                                    without paying for
                                    a programming degree.</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-4 col-md-6 icon-box"
                             style={{marginTop: "20px", marginBottom: "20px"}}>
                            <div className="float-left services-icon" data-aos="fade-up"><i className="fa fa-edit"
                                                                                            style={{fontSize: "25px"}}/>
                            </div>
                            <div>
                                <a href="#"><h4 data-aos="fade-up" className="services-title"><strong>Writing &
                                    Translation</strong><br/>
                                </h4></a>
                                <p data-aos="fade-up" className="services-p">Get your words across in any language.
                                    Content Writing &
                                    Editing, Business Names, Case Studies & Slogans and more.</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-4 col-md-6 icon-box"
                             style={{marginTop: "20px", marginBottom: "20px"}}>
                            <div className="float-left services-icon" data-aos="fade-up"><i className="fa fa-bar-chart"
                                                                                            style={{fontSize: "25px"}}/>
                            </div>
                            <div>
                                <a href="#"><h4 data-aos="fade-up" className="services-title"><strong>Data</strong><br/>
                                </h4></a>
                                <p data-aos="fade-up" className="services-p">From analytics to databases, find all the
                                    data services you
                                    need.</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-4 col-md-6 icon-box"
                             style={{marginTop: "20px", marginBottom: "20px"}}>
                            <div className="float-left services-icon" data-aos="fade-up"><i
                                className="fa fa-paint-brush"
                                style={{fontSize: "25px"}}/></div>
                            <div>
                                <a href="#"><h4 data-aos="fade-up" className="services-title"><strong>Graphic &
                                    Design</strong><br/></h4>
                                </a>
                                <p data-aos="fade-up" className="services-p">A single place, millions of creative
                                    talents.</p>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 icon-box">
                            <div className="float-left services-icon" data-aos="fade-up"><i
                                className="fa fa-camera-retro"
                                style={{fontSize: "25px"}}/></div>
                            <div>
                                <a href="#"><h4 data-aos="fade-up" className="services-title"><strong>Video &
                                    Animation</strong><br/>
                                </h4></a>
                                <p data-aos="fade-up" className="services-p">Your story's unique. Tell it differently
                                    with custom video
                                    & animation services.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="team" className="team" style={{marginTop: "20px", marginBottom: "20px"}}>
                <div className="text-center">
                    <h2 className="text-center section-title" data-aos="fade-up"
                        style={{paddingTop: "30px", paddingBottom: "0px"}}>
                        <strong>POPULAR FREELANCERS </strong></h2>
                    <hr data-aos="fade-up" style={{width: "120px", borderBottomStyle: "none", paddingBottom: "30px"}}/>
                    <p data-aos="fade-up" style={{marginBottom: "30px"}}>Find the talent needed to get your business
                        growing</p>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-lg-3 col-md-6 d-flex align-items-stretch"
                                 data-aos="fade-up"
                                 data-aos-delay="100">
                                <div className="member">
                                    <div className="member-img"><img className="img-fluid serves-team-image-height"
                                                                     src={IMG_videogames}/>
                                    </div>
                                    <div className="social"><a href="#"><i className="fab fa-facebook"/></a><a
                                        href="#"><i
                                        className="fab fa-twitter"/></a><a href="#"><i
                                        className="fab fa-instagram"/></a><a
                                        href="#"><i className="fab fa-linkedin-in"/></a></div>
                                    <div className="member-info">
                                        <h5><strong>Miko </strong></h5><span>Video Editor</span></div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3 col-md-6 d-flex align-items-stretch"
                                 data-aos="fade-up"
                                 data-aos-delay="200">
                                <div className="member">
                                    <div className="member-img"><img className="img-fluid serves-team-image-height"
                                                                     src={IMG_07ab}/>
                                    </div>
                                    <div className="social"><a href="#"><i className="fab fa-facebook"/></a><a
                                        href="#"><i
                                        className="fab fa-twitter"/></a><a href="#"><i
                                        className="fab fa-instagram"/></a><a
                                        href="#"><i className="fab fa-linkedin-in"/></a></div>
                                    <div className="member-info">
                                        <h5><strong>Saro Tobi</strong></h5><span>IT Manager</span></div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3 col-md-6 d-flex align-items-stretch"
                                 data-aos="fade-up"
                                 data-aos-delay="300">
                                <div className="member">
                                    <div className="member-img"><img className="img-fluid serves-team-image-height"
                                                                     src={IMG_0f8}/>
                                    </div>
                                    <div className="social"><a href="#"><i className="fab fa-facebook"/></a><a
                                        href="#"><i
                                        className="fab fa-twitter"/></a><a href="#"><i
                                        className="fab fa-instagram"/></a><a
                                        href="#"><i className="fab fa-linkedin-in"/></a></div>
                                    <div className="member-info">
                                        <h5><strong>Rayuga</strong></h5><span>Website Designer</span></div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3 col-md-6 d-flex align-items-stretch"
                                 data-aos="fade-up"
                                 data-aos-delay="400">
                                <div className="member">
                                    <div className="member-img"><img className="img-fluid serves-team-image-height"
                                                                     src={IMG_wp90}/></div>
                                    <div className="social"><a href="#"><i className="fab fa-facebook"/></a><a
                                        href="#"><i
                                        className="fab fa-twitter"/></a><a href="#"><i
                                        className="fab fa-instagram"/></a><a
                                        href="#"><i className="fab fa-linkedin-in"/></a></div>
                                    <div className="member-info">
                                        <h5><strong>Hinata</strong></h5><span>Marketing Expert</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="portfolio" className="portfolio">
                <div className="container">
                    <div className="text-center section-title" style={{paddingBottom: "0px"}}>
                        <h3 className="text-uppercase" data-aos="fade-up" style={{paddingTop: "30px"}}>Get inspired with
                            projects made
                            by our &nbsp;<span style={{color: "#f96302"}}><strong>freelancers</strong></span></h3>
                    </div>
                    <hr data-aos="fade-up" style={{width: "120px", borderBottomStyle: "none", paddingBottom: "30px"}}/>
                    <div className="row">
                        <div className="col col-lg-12 d-flex justify-content-center">
                            <ul id="portfolio-flters">
                                <li className="filter-active" data-filter="*">All&nbsp;</li>
                                <li data-filter=".filter-app">App</li>
                                <li data-filter=".filter-card">Card</li>
                                <li data-filter=".filter-web">Web</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row portfolio-container">
                        <div className="col-12 col-lg-4 col-md-6 portfolio-item filter-app" data-aos="fade-up"
                             data-aos-delay="100">
                            <img className="img-fluid"
                                 src={IMG_portfolio_1}/>
                            <div className="portfolio-info">
                                <h4>App 1</h4>
                                <p>App</p><a className="venobox preview-link"
                                             href={IMG_portfolio_1}
                                             data-gall="portfolioGallery" data-title="App 1" data-lightbox="App"><i
                                className="fas fa-plus" style={{fontSize: "20px"}}/></a><a className="details-link"
                                                                                           href="portfolio-details.html"
                                                                                           title="More Details"><i
                                className="fas fa-link" style={{fontSize: "20px"}}/></a></div>
                        </div>
                        <div className="col-12 col-lg-4 col-md-6 portfolio-item filter-card" data-aos="fade-up"
                             data-aos-delay="200"><img className="img-fluid"
                                                       src={IMG_portfolio_2}/>
                            <div className="portfolio-info">
                                <h4>Card 1</h4>
                                <p>Card</p><a className="venobox preview-link"
                                              href={IMG_portfolio_2}
                                              data-gall="portfolioGallery" data-title="Card 1" data-lightbox="Card"><i
                                className="fas fa-plus" style={{fontSize: "20px"}}/></a><a className="details-link"
                                                                                           href="portfolio-details.html"
                                                                                           title="More Details"><i
                                className="fas fa-link" style={{fontSize: "20px"}}/></a></div>
                        </div>
                        <div className="col-12 col-lg-4 col-md-6 portfolio-item filter-web" data-aos="fade-up"
                             data-aos-delay="300">
                            <img className="img-fluid"
                                 src={IMG_portfolio_3}/>
                            <div className="portfolio-info">
                                <h4>Web 1</h4>
                                <p>Web</p><a className="venobox preview-link"
                                             href={IMG_portfolio_3}
                                             data-gall="portfolioGallery" data-title="Web 1" data-lightbox="Web"><i
                                className="fas fa-plus" style={{fontSize: "20px"}}/></a><a className="details-link"
                                                                                           href="portfolio-details.html"
                                                                                           title="More Details"><i
                                className="fas fa-link" style={{fontSize: "20px"}}/></a></div>
                        </div>
                        <div className="col-12 col-lg-4 col-md-6 portfolio-item filter-app" data-aos="fade-up"
                             data-aos-delay="400">
                            <img className="img-fluid"
                                 src={IMG_portfolio_4}/>
                            <div className="portfolio-info">
                                <h4>App 2</h4>
                                <p>App</p><a className="venobox preview-link"
                                             href={IMG_portfolio_4}
                                             data-gall="portfolioGallery" data-title="App 2" data-lightbox="App"><i
                                className="fas fa-plus" style={{fontSize: "20px"}}/></a><a className="details-link"
                                                                                           href="portfolio-details.html"
                                                                                           title="More Details"><i
                                className="fas fa-link" style={{fontSize: "20px"}}/></a></div>
                        </div>
                        <div className="col-12 col-lg-4 col-md-6 portfolio-item filter-card" data-aos="fade-up"
                             data-aos-delay="500"><img className="img-fluid"
                                                       src={IMG_portfolio_5}/>
                            <div className="portfolio-info">
                                <h4>Card 2</h4>
                                <p>Card</p><a className="venobox preview-link"
                                              href={IMG_portfolio_5}
                                              data-gall="portfolioGallery" data-title="Card 2" data-lightbox="Card"><i
                                className="fas fa-plus" style={{fontSize: "20px"}}/></a><a className="details-link"
                                                                                           href="portfolio-details.html"
                                                                                           title="More Details"><i
                                className="fas fa-link" style={{fontSize: "20px"}}/></a></div>
                        </div>
                        <div className="col-12 col-lg-4 col-md-6 portfolio-item filter-web" data-aos="fade-up"
                             data-aos-delay="600">
                            <img className="img-fluid"
                                 src={IMG_portfolio_6}/>
                            <div className="portfolio-info">
                                <h4>Web 2</h4>
                                <p>Web</p><a className="venobox preview-link"
                                             href={IMG_portfolio_6}
                                             data-gall="portfolioGallery" data-title="Web 2" data-lightbox="Web"><i
                                className="fas fa-plus" style={{fontSize: "20px"}}/></a><a className="details-link"
                                                                                           href="portfolio-details.html"
                                                                                           title="More Details"><i
                                className="fas fa-link" style={{fontSize: "20px"}}/></a></div>
                        </div>
                        <div className="col-12 col-lg-4 col-md-6 portfolio-item filter-app" data-aos="fade-up"
                             data-aos-delay="700">
                            <img className="img-fluid"
                                 src={IMG_portfolio_7}/>
                            <div className="portfolio-info">
                                <h4>App 3</h4>
                                <p>App</p><a className="venobox preview-link"
                                             href={IMG_portfolio_7}
                                             data-gall="portfolioGallery" data-title="App 3" data-lightbox="App"><i
                                className="fas fa-plus" style={{fontSize: "20px"}}/></a><a className="details-link"
                                                                                           href="portfolio-details.html"
                                                                                           title="More Details"><i
                                className="fas fa-link" style={{fontSize: "20px"}}/></a></div>
                        </div>
                        <div className="col-12 col-lg-4 col-md-6 portfolio-item filter-card" data-aos="fade-up"
                             data-aos-delay="800"><img className="img-fluid"
                                                       src={IMG_portfolio_8}/>
                            <div className="portfolio-info">
                                <h4>Card 3</h4>
                                <p>Card</p><a className="venobox preview-link"
                                              href={IMG_portfolio_8}
                                              data-gall="portfolioGallery" data-title="Card 3" data-lightbox="Card"><i
                                className="fas fa-plus" style={{fontSize: "20px"}}/></a><a className="details-link"
                                                                                           href="portfolio-details.html"
                                                                                           title="More Details"><i
                                className="fas fa-link" style={{fontSize: "20px"}}/></a></div>
                        </div>
                        <div className="col-12 col-lg-4 col-md-6 portfolio-item filter-web" data-aos="fade-up"
                             data-aos-delay="900">
                            <img className="img-fluid"
                                 src={IMG_portfolio_9}/>
                            <div className="portfolio-info">
                                <h4>Web 3</h4>
                                <p>Web</p><a className="venobox preview-link"
                                             href={IMG_portfolio_9}
                                             data-gall="portfolioGallery" data-title="Web 3" data-lightbox="Web"><i
                                className="fas fa-plus" style={{fontSize: "20px"}}/></a><a className="details-link"
                                                                                           href="portfolio-details.html"
                                                                                           title="More Details"><i
                                className="fas fa-link" style={{fontSize: "20px"}}/></a></div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="pricing" className="pricing" style={{marginTop: "20px", marginBottom: "20px"}}>
                <div className="text-center">
                    <h2 className="text-center section-title" data-aos="fade-up"
                        style={{paddingTop: "20px", paddingBottom: "0px"}}>
                        <strong>GNOSISLIFE BUSINESS</strong><br/></h2>
                    <hr data-aos="fade-up" style={{width: "120px", borderBottomStyle: "none", paddingBottom: "30px"}}/>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="100"
                                 style={{marginTop: "15px", marginBottom: "15px"}}>
                                <div className="card shadow" style={{width: "277.5"}}>
                                    <div className="card-body"
                                         style={{
                                             padding: "0px",
                                             paddingRight: "0px",
                                             paddingLeft: "0px10px",
                                             width: "100%",
                                             background: "#fff1dc"
                                         }}>
                                        <h4 className="card-title" style={{marginTop: "20px"}}><strong>Free
                                            Plan</strong></h4>
                                        <h1 className="card-subtitle mb-2"
                                            style={{color: "#e04251", marginBottom: "0px"}}><sup>$</sup>0</h1>
                                        <span className="text-uppercase text-dark">per Month</span>
                                        <ul className="list-group">
                                            <li className="list-group-item text-success"><span><i
                                                className="fa fa-check-square-o"/>&nbsp;Nec feugiat nisl<br/></span>
                                            </li>
                                            <li className="list-group-item text-success"><span><i
                                                className="fa fa-check-square-o"/>&nbsp;Nulla at volutpat dola<br/></span>
                                            </li>
                                            <li className="list-group-item text-muted"><span><i
                                                className="fa fa-times"/>&nbsp;<span
                                                style={{textDecoration: "line-through"}}>Pharetra massa</span><br/></span>
                                            </li>
                                            <li className="list-group-item text-muted"><span><i
                                                className="fa fa-times"/>&nbsp;<span
                                                style={{textDecoration: "line-through"}}>Massa ultricies mi</span><br/></span>
                                            </li>
                                            <li className="list-group-item text-muted"><span><i
                                                className="fa fa-times"/>&nbsp;<span
                                                style={{textDecoration: "line-through"}}>Massa ultricies</span><br/></span>
                                            </li>
                                        </ul>
                                        <div>
                                            <button className="btn btn-warning text-white pricing-btn"
                                                    type="button">Buy Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="200"
                                 style={{marginTop: "15px", marginBottom: "15px"}}>
                                <div className="card shadow" style={{width: "277.5"}}>
                                    <div className="card-body"
                                         style={{
                                             padding: "0px",
                                             paddingRight: "0px",
                                             paddingLeft: "0px10px",
                                             width: "100%",
                                             background: "#fff1dc"
                                         }}>
                                        <h4 className="card-title" style={{marginTop: "20px"}}><strong>Pro
                                            Plan</strong></h4>
                                        <h1 className="card-subtitle mb-2"
                                            style={{color: "#e04251", marginBottom: "0px"}}><sup>$</sup>60</h1>
                                        <span className="text-uppercase text-dark">PER MONTH<br/></span>
                                        <ul className="list-group">
                                            <li className="list-group-item text-success"><span><i
                                                className="fa fa-check-square-o"/>&nbsp;Nulla at volutpat dola<br/></span>
                                            </li>
                                            <li className="list-group-item text-success"><span><i
                                                className="fa fa-check-square-o"/>&nbsp;<span
                                                style={{textDecoration: "line-through"}}>Pharetra massa</span><br/></span>
                                            </li>
                                            <li className="list-group-item text-success"><span><i
                                                className="fa fa-check-square-o"/>&nbsp;<span
                                                style={{textDecoration: "line-through"}}>Massa ultricies mi</span><br/></span>
                                            </li>
                                            <li className="list-group-item text-muted"><span><i
                                                className="fa fa-times"/>&nbsp;<span
                                                style={{textDecoration: "line-through"}}>Massa ultricies</span><br/></span>
                                            </li>
                                            <li className="list-group-item text-muted"><span><i
                                                className="fa fa-times"/>&nbsp;<span
                                                style={{textDecoration: "line-through"}}>Massa</span><br/></span>
                                            </li>
                                        </ul>
                                        <div>
                                            <button className="btn btn-warning text-white pricing-btn"
                                                    type="button">Buy Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="300"
                                 style={{marginTop: "15px", marginBottom: "15px"}}>
                                <div className="card shadow" style={{width: "277.5"}}>
                                    <div className="card-body"
                                         style={{
                                             padding: "0px",
                                             paddingRight: "0px",
                                             paddingLeft: "0px10px",
                                             width: "100%",
                                             background: "#fff1dc"
                                         }}>
                                        <h4 className="card-title" style={{marginTop: "20px"}}><strong>Bussines
                                            Plan</strong></h4>
                                        <h1 className="card-subtitle mb-2"
                                            style={{color: "#e04251", marginBottom: "0px"}}><sup>$</sup>120</h1>
                                        <span className="text-uppercase text-dark">PER MONTH<br/></span>
                                        <ul className="list-group">
                                            <li className="list-group-item text-success"><span><i
                                                className="fa fa-check-square-o"/>&nbsp;Nulla at volutpat dola<br/></span>
                                            </li>
                                            <li className="list-group-item text-success"><span><i
                                                className="fa fa-check-square-o"/>&nbsp;Pharetra massa<br/></span>
                                            </li>
                                            <li className="list-group-item text-success"><span><i
                                                className="fa fa-check-square-o"/>&nbsp;Massa ultricies mi<br/></span>
                                            </li>
                                            <li className="list-group-item text-success"><span><i
                                                className="fa fa-check-square-o"/>&nbsp;Massa ultricies<br/></span>
                                            </li>
                                            <li className="list-group-item text-muted"><span><i
                                                className="fa fa-times"/>&nbsp;<span
                                                style={{textDecoration: "line-through"}}>Massa&nbsp;</span><br/></span>
                                            </li>
                                        </ul>
                                        <div>
                                            <button className="btn btn-warning text-white pricing-btn"
                                                    type="button">Buy Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="400"
                                 style={{marginTop: "15px", marginBottom: "15px"}}>
                                <div className="card shadow" style={{width: "277.5"}}>
                                    <div className="card-body"
                                         style={{
                                             padding: "0px",
                                             paddingRight: "0px",
                                             paddingLeft: "0px10px",
                                             width: "100%",
                                             background: "#fff1dc"
                                         }}>
                                        <h4 className="card-title" style={{marginTop: "20px"}}><strong>Developer
                                            Plan</strong></h4>
                                        <h1 className="card-subtitle mb-2"
                                            style={{color: "#e04251", marginBottom: "0px"}}><sup>$</sup>240</h1>
                                        <span className="text-uppercase text-dark">PER MONTH<br/></span>
                                        <ul className="list-group">
                                            <li className="list-group-item text-success"><span><i
                                                className="fa fa-check-square-o"/>&nbsp;Nulla at volutpat dola<br/></span>
                                            </li>
                                            <li className="list-group-item text-success"><span><i
                                                className="fa fa-check-square-o"/>&nbsp;Pharetra massa<br/></span>
                                            </li>
                                            <li className="list-group-item text-success"><span><i
                                                className="fa fa-check-square-o"/>&nbsp;Massa ultricies mi<br/></span>
                                            </li>
                                            <li className="list-group-item text-success"><span><i
                                                className="fa fa-check-square-o"/>&nbsp;Massa ultricies<br/></span>
                                            </li>
                                            <li className="list-group-item text-success"><span><i
                                                className="fa fa-check-square-o"/>&nbsp;Massa<br/></span></li>
                                        </ul>
                                        <div>
                                            <button className="btn btn-warning text-white pricing-btn"
                                                    type="button">Buy Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div data-bs-parallax-bg="true" className="highlight-blue">
                <div className="container">

                    <div className="intro">
                        <h2 className="text-center" data-aos="fade-up"
                            style={{color: "rgba(244,157,186,0.95)"}}>Highlights</h2>
                        <p className="text-center" data-aos="fade-up">"When you want to creat a business bigger than
                            yourself, you
                            need a lot of help. That's what GnosisLife does." says Anonymous(CEO of company & co.) </p>
                    </div>

                </div>
            </div>

            <section id="contact" className="getintouch">
                <div className="container modern-form">
                    <div className="text-center">
                        <h4 data-aos="fade-up" style={{color: "#212529", fontSize: "40px"}}>Get in touch</h4>
                    </div>
                    <hr data-aos="fade-up" className="modern-form__hr" style={{marginBottom: "26px"}}/>
                    <div className="row text-center" style={{backgroundColor: "#ffffff"}}>
                        <div className="col-6 col-sm-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
                            <div><i className="icon ion-ios-location get-in-touch-icons"
                                    style={{fontSize: "40px", color: "#f95602"}}/>
                                <h5 className="icon-title" style={{color: "#ff993f"}}>Location:</h5>
                                <p style={{color: "#cccccc"}}>Naxal, Kathmandu, Nepal&nbsp;<br/></p>
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
                            <div><i className="icon ion-ios-time get-in-touch-icons"
                                    style={{fontSize: "40px", color: "#f95602"}}/>
                                <h5 className="icon-title" style={{color: "#ff993f"}}>Open-Hours</h5>
                                <p style={{color: "#cccccc"}}>Sunday-Friday:<br/>10:00 AM - 23:00 PM</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
                            <div><i className="icon ion-android-mail get-in-touch-icons"
                                    style={{fontSize: "40px", color: "#f95602"}}/>
                                <h5 className="icon-title" style={{color: "#ff993f"}}>E-mail:</h5>
                                <p style={{color: "#cccccc"}}>Contact: info@GnosisLife.com</p>
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
                            <div><i className="icon ion-ios-telephone get-in-touch-icons"
                                    style={{fontSize: "40px", color: "#f95602"}}/>
                                <h5 style={{color: "#ff993f"}}>Call-Us:</h5>
                                <p style={{color: "#cccccc"}}>+977 98*******5</p>
                            </div>
                        </div>
                    </div>
                    <div className="modern-form__form-container" style={{paddingTop: "40px"}}>
                        <form data-bss-recipient="4c4c512131ddbe75b2cf0f351ecabf2b">
                            <div className="form-row">
                                <div className="col col-contact" data-aos="fade-up" data-aos-delay="450">
                                    <div className="form-group modern-form__form-group--padding-r"><input
                                        className="form-control input input-tr" type="text" placeholder="First Name"
                                        required=""
                                        name="First Name"/>
                                        <div className="line-box">
                                            <div className="line"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-contact" data-aos="fade-up" data-aos-delay="500">
                                    <div className="form-group modern-form__form-group--padding-l"><input
                                        className="form-control input input-tr" type="text" placeholder="Email"
                                        required="" name="Email"
                                        title="Invalid email address"
                                        pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$"/>
                                        <div className="line-box">
                                            <div className="line"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col" data-aos="fade-up" data-aos-delay="550">
                                    <form data-bss-recipient="4c4c512131ddbe75b2cf0f351ecabf2b">
                                        <div className="form-group modern-form__form-group--padding-t"><textarea
                                            className="form-control input modern-form__form-control--textarea"
                                            data-aos="fade-up"
                                            placeholder="Message" name="Message" required="" minLength="1"
                                            maxLength="1000"/>
                                            <div className="line-box">
                                                <div className="line"/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col text-center" data-aos="fade-up">
                                    <button className="btn btn-primary submit-now" type="submit"
                                            style={{width: "150px"}}>Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <div className="footer-dark"
                 style={{
                     backgroundImage: `url("${IMG_17aoua}")`,
                     backgroundRepeat: "no-repeat",
                     backgroundPosition: "center",
                     backgroundSize: "cover",
                     backgroundColor: "#03142c",
                 }}>
                <footer>
                    <div className="container">
                        <div className="row">

                            <div className="col-sm-6 col-md-3 item" data-aos="fade-up">
                                <h3>Services</h3>
                                <ul>
                                    <li><a href="#">Digital Marketing</a></li>
                                    <li><a href="#">Programing & Tech</a></li>
                                    <li><a href="#">Writing & Translation</a></li>
                                    <li><a href="#">Data</a></li>
                                    <li><a href="#">Graphic & Design</a></li>
                                    <li><a href="#">Video & Animation</a></li>
                                </ul>
                            </div>

                            <div className="col-sm-6 col-md-3 item" data-aos="fade-up">
                                <h3>About</h3>
                                <ul>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Press & News</a></li>
                                    <li><a href="#">Terms & policies</a></li>
                                    <li><a href="#">Partnership</a></li>
                                    <li><a href="#">Investor Relations</a></li>
                                    <li><a href="#">Help & Support</a></li>
                                </ul>
                            </div>

                            <div className="col-md-6 item text" data-aos="fade-up">
                                <h3>GNOSISLIFE</h3>
                                <p>Gnosislife will serve to allow listing and applying for small one-off jobs, or gigs,
                                    online. Jobs
                                    listed on the platform are diverse and range from "get a well-designed business
                                    card" to "help with
                                    HTML, JavaScript, CSS, and jQuery". Gnosislife is a company built on the model of
                                    listing temporary
                                    work positions. Freelancers work in a variety of workplaces, ranging from home to
                                    office. Gnosislife
                                    serves as an e-commerce platform for freelancers and companies to sell their
                                    services by using their
                                    gigs. The pricing of Gigs depends on how much a seller earns per completed
                                    task. </p>
                            </div>

                            <div className="col item social">

                                <div className="intro">
                                    <h2 className="text-center" data-aos="fade-up">Subscribe to GNOSISLIFE</h2>
                                    <p className="text-center d-inline-block" data-aos="fade-up"
                                       style={{width: "60%"}}>Find the right
                                        freelancer to begin working on your project within minutes. </p>
                                </div>

                                <form
                                    className="form-inline d-flex d-lg-flex justify-content-center align-items-center justify-content-lg-center align-items-lg-center"
                                    data-aos="fade-up" style={{marginBottom: "20px"}}
                                    data-bss-recipient="6439679b7634006b8b02aa34b900f8eb">
                                    <div className="form-group"><input className="form-control" type="email"
                                                                       name="email"
                                                                       placeholder="Your Email"
                                                                       style={{paddingRight: "12px"}} required=""
                                                                       pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$"/>
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-info" type="submit"
                                                style={{marginLeft: "5px", width: "100px"}}>Subscribe
                                        </button>
                                    </div>
                                </form>
                                <a data-aos="fade-up" href="#" style={{background: "#18a2b8"}}><i
                                    className="icon ion-social-facebook"/></a><a
                                data-aos="fade-up" href="#" style={{background: "#18a2b8"}}><i
                                className="icon ion-social-twitter"/></a><a data-aos="fade-up"
                                                                            href="#" style={{background: "#18a2b8"}}><i
                                className="icon ion-social-snapchat"/></a><a data-aos="fade-up" href="#"
                                                                             style={{background: "#18a2b8"}}><i
                                className="icon ion-social-instagram"/></a></div>

                        </div>

                        <p className="copyright" style={{color: "#000000"}}>© Copyright&nbsp;GNOSISLIFE. All Rights
                            Reserved.</p>

                    </div>
                </footer>
            </div>

            <div><a className="text-center back-to-top" href="#"><i className="fa fa-angle-up"/></a></div>
        </div>
    );
}

export default App;
