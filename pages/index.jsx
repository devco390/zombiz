import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import { useEffect } from 'react'

const Home = () => {

  useEffect(() => {
    // 1. Scroll To Top
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 600) {
        $(".return-to-top").fadeIn();
      } else {
        $(".return-to-top").fadeOut();
      }
    });
    $(".return-to-top").on("click", function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        1500
      );
      return false;
    });

    // 2 . hcsticky

    $("#menu").hcSticky();

    // 3. counter
    $(window).on("load", function () {
      $(".counter").counterUp({
        delay: 10,
        time: 3000,
      });
    });

    // 4. owl carousel

    // i. .team-carousel

    var owl = $(".team-carousel");
    owl.owlCarousel({
      items: 4,
      margin: 0,

      loop: true,
      autoplay: true,
      smartSpeed: 500,

      //nav:false,
      //navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],

      dots: false,
      autoplayHoverPause: true,

      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        640: {
          items: 2,
        },
        768: {
          items: 3,
        },
        992: {
          items: 4,
        },
      },
    });

    // ii. .client (carousel)

    $("#client").owlCarousel({
      items: 5,
      loop: true,
      smartSpeed: 1000,
      autoplay: true,
      dots: false,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 2,
        },
        415: {
          items: 2,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 5,
        },
      },
    });

    $(".play").on("click", function () {
      owl.trigger("play.owl.autoplay", [1000]);
    });
    $(".stop").on("click", function () {
      owl.trigger("stop.owl.autoplay");
    });

    // iii.  testimonial

    $("#testemonial-carousel").owlCarousel({
      items: 1,
      autoplay: true,
      loop: true,
      dots: true,
      mouseDrag: true,
      nav: false,
      smartSpeed: 1000,
      transitionStyle: "fade",
      animateIn: "fadeIn",
      animateOut: "fadeOutLeft",
      // navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
    });

    // 5. vedio player
    $(".vedio-play-icon").magnificPopup({
      type: "video",
    });

    // 6. animation support

    $(window).load(function () {
      $(".single-slide-item-content h2, .single-slide-item-content p")
        .removeClass("animated fadeInUp")
        .css({ opacity: "0" });
      $(".single-slide-item-content button")
        .removeClass("animated fadeInLeft")
        .css({ opacity: "0" });
    });

    $(window).load(function () {
      $(".single-slide-item-content h2, .single-slide-item-content p")
        .addClass("animated fadeInUp")
        .css({ opacity: "0" });
      $(".single-slide-item-content button")
        .addClass("animated fadeInLeft")
        .css({ opacity: "0" });
    });

    // 6. Smooth Scroll spy

    // $('.header-area').sticky({
    //    topSpacing:0
    // });

    //=============

    $("li.smooth-menu a").bind("click", function (event) {
      event.preventDefault();
      var anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $(anchor.attr("href")).offset().top - -1,
          },
          1200,
          "easeInOutExpo"
        );
    });

    $("body").scrollspy({
      target: ".navbar-collapse",
      offset: 0,
    });
  }, []);

  return (
    <div>
      <Head>

        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Zombiz</title>



      </Head>

      <section id="home" className="header">
        <div className="container">
          <div className="header-left">
            <ul className="pull-left">
              <li>
                <a href="#">
                  <i className="fa fa-phone" aria-hidden="true"></i> +992 563 542
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-envelope" aria-hidden="true"></i>info@mail.com
                </a>
              </li>
            </ul>
          </div>
          <div className="header-right pull-right">
            <ul>
              <li className="reg">
                <a href="#" data-toggle="modal" data-target=".bs-example-modal-sm">
                  Register
                </a>
                /
                <a href="#" data-toggle="modal" data-target=".bs-example-modal-lg">
                  Log in
                </a>

                <div className="modal fade bs-example-modal-sm" tabIndex={-1} role="dialog" aria-labelledby="mySmallModalLabel">
                  <div className="modal-dialog modal-sm" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">
                            <i className="fa fa-close"></i>
                          </span>
                        </button>
                        <h4 className="modal-title" id="mySmallModalLabel">
                          Sign In
                        </h4>
                        <form className="sm-frm" style={{ padding: '25px' }}>
                          <label>Name :</label>
                          <input type="text" className="form-control" placeholder="Enter Email" />
                          <label>Passoward :</label>
                          <input type="text" className="form-control" placeholder="Enter Passoward" />
                          <label><input type="checkbox" name="personality" /> Remenber Me</label>
                          <button type="button" className="btn btn-default pull-right">Submit</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="modal fade bs-example-modal-lg" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel">
                  <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">
                            <i className="fa fa-close"></i>
                          </span>
                        </button>
                        <h4 className="modal-title" id="myLargeModalLabel">Register</h4>
                        <form className="lg-frm" style={{ padding: '25px' }}>
                          <label>Name :</label>
                          <input type="text" className="form-control" placeholder="Enter Name" />
                          <label>Email :</label>
                          <input type="text" className="form-control" placeholder="Enter Email" />
                          <label>Passoward :</label>
                          <input type="text" className="form-control" placeholder="Enter Passoward" />
                          <button type="button" className="btn btn-default pull-right">Submit</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="social-icon">
                  <ul>
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </section>

      <section id="menu">
        <div className="container">
          <div className="menubar">
            <nav className="navbar navbar-default">


              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="index.html">
                  <img src="assets/images/logo/logo.png" alt="logo" />
                </a>
              </div>

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                  <li className="smooth-menu">
                    <a href="#home">Home</a>
                  </li>
                  <li className="smooth-menu"><a href="#about">About</a></li>
                  <li className="smooth-menu"><a href="#service">Service</a></li>
                  <li className="smooth-menu"><a href="#project">Project</a></li>
                  <li className="smooth-menu"><a href="#team">Team</a></li>
                  <li className="smooth-menu"><a href="#blog">Blog</a></li>
                  <li className="smooth-menu"><a href="#contact">Contact</a></li>
                  <li>
                    <a href="#">
                      <span className="lnr lnr-cart"></span>
                    </a>
                  </li>
                  <li className="search">
                    <form action="">
                      <input type="text" name="search" placeholder="Search...." />
                      <a href="#">
                        <span className="lnr lnr-magnifier"></span>
                      </a>
                    </form>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>

      </section>

      <section className="header-slider-area">
        <div id="carousel-example-generic" className="carousel slide carousel-fade" data-ride="carousel">


          <ol className="carousel-indicators">
            <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
          </ol>


          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <div className="single-slide-item slide-1">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="single-slide-item-content">
                        <h2>Consult Your <br /> Business With Us</h2>
                        <p>
                          We are the unique Consultancy Farm for your business solution, That is ready to take challenge and knockout your business problems.
                        </p>
                        <button type="button" className="slide-btn">
                          get started
                        </button>
                        <button type="button" className="slide-btn">
                          explore more
                        </button>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="single-slide-item slide-2">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="single-slide-item-content">
                        <h2>
                          Consult Your <br /> Business
                        </h2>
                        <p>
                          We are the unique Consultancy Farm for your business solution, That is ready to take challenge and knockout your business problems.
                        </p>
                        <button type="button" className="slide-btn">
                          get started
                        </button>
                        <button type="button" className="slide-btn
											">
                          explore more
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
            <span className="lnr lnr-chevron-left"></span>
          </a>
          <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
            <span className="lnr lnr-chevron-right"></span>
          </a>
        </div>

      </section>

      <section className="we-do">
        <div className="container">
          <div className="we-do-details">
            <div className="section-header text-center">
              <h2>what we do</h2>
              <p>
                Pallamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div className="we-do-carousel">
              <div className="row">
                <div className="col-sm-4 col-xs-12">
                  <div className="single-we-do-box text-center">
                    <div className="we-do-description">
                      <div className="we-do-info">
                        <div className="we-do-img">
                          <img src="assets/images/home/consultency.png" alt="image of consultency" />
                        </div>
                        <div className="we-do-topics">
                          <h2>
                            <a href="#">
                              Business Consultancy
                            </a>
                          </h2>
                        </div>
                      </div>
                      <div className="we-do-comment">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ul.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-xs-12">
                  <div className="single-we-do-box text-center">
                    <div className="we-do-description">
                      <div className="we-do-info">
                        <div className="we-do-img">
                          <img src="assets/images/home/busisness_grow.png" alt="image of business" />
                        </div>
                        <div className="we-do-topics">
                          <h2>
                            <a href="#">
                              help to grow Business
                            </a>
                          </h2>
                        </div>
                      </div>
                      <div className="we-do-comment">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ul.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-xs-12">
                  <div className="single-we-do-box text-center">
                    <div className="we-do-description">
                      <div className="we-do-info">
                        <div className="we-do-img">
                          <img src="assets/images/home/support-logo.png" alt="image of support" />
                        </div>
                        <div className="we-do-topics">
                          <h2>
                            <a href="#">
                              great support
                            </a>

                          </h2>
                        </div>
                      </div>
                      <div className="we-do-comment">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ul.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section id="about" className="about-us">
        <div className="container">
          <div className="about-us-content">
            <div className="row">
              <div className="col-sm-6">
                <div className="single-about-us">
                  <div className="about-us-txt">
                    <h2>about us</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.
                    </p>
                    <div className="project-btn">
                      <a href="#" className="project-view">learn more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="single-about-us">
                  <div className="about-us-img">
                    <img src="assets/images/about/about-part.jpg" alt="about images" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section id="service" className="service">
        <div className="container">
          <div className="service-details">
            <div className="section-header text-center">
              <h2>our services</h2>
              <p>
                Pallamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div className="service-content-one">
              <div className="row">
                <div className="col-sm-4 col-xs-12">
                  <div className="service-single text-center">
                    <div className="service-img">
                      <img src="assets/images/service/service1.png" alt="image of service" />
                    </div>
                    <div className="service-txt">
                      <h2>
                        <a href="#">busisness planning</a>
                      </h2>
                      <p>
                        Lorem ipsum dolo dolor in  in voluptate velit esse cillum dolore. epteur sint oat cupidatat
                      </p>
                      <a href="#" className="service-btn">
                        learn more
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-xs-12">
                  <div className="service-single text-center">
                    <div className="service-img">
                      <img src="assets/images/service/service2.png" alt="image of service" />
                    </div>
                    <div className="service-txt">
                      <h2>
                        <a href="#">busisness consultency</a>
                      </h2>
                      <p>
                        Lorem ipsum dolo dolor in  in voluptate velit esse cillum dolore. epteur sint oat cupidatat
                      </p>
                      <a href="#" className="service-btn">
                        learn more
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-xs-12">
                  <div className="service-single text-center">
                    <div className="service-img">
                      <img src="assets/images/service/service3.png" alt="image of service" />
                    </div>
                    <div className="service-txt">
                      <h2>
                        <a href="#">financial services</a>
                      </h2>
                      <p>
                        Lorem ipsum dolo dolor in  in voluptate velit esse cillum dolore. epteur sint oat cupidatat
                      </p>
                      <a href="#" className="service-btn">
                        learn more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="service-content-two">
              <div className="row">
                <div className="col-sm-4 col-xs-12">
                  <div className="service-single text-center">
                    <div className="service-img">
                      <img src="assets/images/service/service4.png" alt="image of service" />
                    </div>
                    <div className="service-txt">
                      <h2>
                        <a href="#">risk management</a>
                      </h2>
                      <p>
                        Lorem ipsum dolo dolor in  in voluptate velit esse cillum dolore. epteur sint oat cupidatat
                      </p>
                      <a href="#" className="service-btn">
                        learn more
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-xs-12">
                  <div className="service-single text-center">
                    <div className="service-img">
                      <img src="assets/images/service/service5.png" alt="image of service" />
                    </div>
                    <div className="service-txt">
                      <h2>
                        <a href="#">expert advisers</a>
                      </h2>
                      <p>
                        Lorem ipsum dolo dolor in  in voluptate velit esse cillum dolore. epteur sint oat cupidatat
                      </p>
                      <a href="#" className="service-btn">
                        learn more
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-xs-12">
                  <div className="service-single text-center">
                    <div className="service-img">
                      <img src="assets/images/service/service6.png" alt="image of service" />
                    </div>
                    <div className="service-txt">
                      <h2>
                        <a href="#">24/7 customer support</a>
                      </h2>
                      <p>
                        Lorem ipsum dolo dolor in  in voluptate velit esse cillum dolore. epteur sint oat cupidatat
                      </p>
                      <a href="#" className="service-btn">
                        learn more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="statistics">
        <div className="container">
          <div className="statistics-counter ">
            <div className="col-md-3 col-sm-6">
              <div className="single-ststistics-box">
                <div className="statistics-img">
                  <img src="assets/images/counter/counter1.png" alt="counter-icon" />
                </div>
                <div className="statistics-content">
                  <div className="counter">2556</div>
                  <h3>days worked</h3>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-ststistics-box">
                <div className="statistics-img">
                  <img src="assets/images/counter/counter2.png" alt="counter-icon" />
                </div>
                <div className="statistics-content">
                  <div className="counter">326</div>
                  <h3>project finished</h3>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-ststistics-box">
                <div className="statistics-img">
                  <img src="assets/images/counter/counter3.png" alt="counter-icon" />
                </div>
                <div className="statistics-content">
                  <div className="counter">1526</div>
                  <h3>coffee cup</h3>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-ststistics-box">
                <div className="statistics-img">
                  <img src="assets/images/counter/counter4.png" alt="counter-icon" />
                </div>
                <div className="statistics-content">
                  <div className="counter">856</div>
                  <h3>client satisfied</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section id="project" className="project">
        <div className="container">
          <div className="project-details">
            <div className="project-header text-left">
              <h2>Our Finished Projects</h2>
              <p>
                Pallamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="project-content">
              <div className="gallery-content">
                <div className="isotope">
                  <div className="row">
                    <div className=" col-md-4 col-sm-12">
                      <div className="item big-height">
                        <img src="assets/images/project/project1.jpg" alt="portfolio image" />
                        <div className="isotope-overlay">
                          <a href="project.html">
                            <span className="lnr lnr-link"></span>

                          </a>
                          <h3>
                            <a href="project.html">
                              aquisition plan
                            </a>
                          </h3>
                          <p>busisness planning</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8 col-sm-12">
                      <div className="row">
                        <div className="col-sm-6 col-xs-12">
                          <div className="item">
                            <img src="assets/images/project/project2.jpg" alt="portfolio image" />
                            <div className="isotope-overlay">
                              <a href="project.html">
                                <span className="lnr lnr-link"></span>

                              </a>
                              <h3>
                                <a href="project.html">
                                  aquisition plan
                                </a>
                              </h3>
                              <p>busisness planning</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-xs-12">
                          <div className="item">
                            <img src="assets/images/project/project3.jpg" alt="portfolio image" />
                            <div className="isotope-overlay">
                              <a href="project.html">
                                <span className="lnr lnr-link"></span>

                              </a>
                              <h3>
                                <a href="project.html">
                                  aquisition plan
                                </a>
                              </h3>
                              <p>busisness planning</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6 col-xs-12">
                          <div className="item">
                            <img src="assets/images/project/project4.jpg" alt="portfolio image" />
                            <div className="isotope-overlay">
                              <a href="project.html">
                                <span className="lnr lnr-link"></span>

                              </a>
                              <h3>
                                <a href="project.html">
                                  aquisition plan
                                </a>
                              </h3>
                              <p>busisness planning
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-xs-12">
                          <div className="item">
                            <img src="assets/images/project/project5.jpg" alt="portfolio image" />
                            <div className="isotope-overlay">
                              <a href="project.html">
                                <span className="lnr lnr-link"></span>

                              </a>
                              <h3>
                                <a href="project.html">
                                  aquisition plan
                                </a>
                              </h3>
                              <p>busisness planning
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="project-btn text-center">
            <a href="project.html" className="project-view">view all
            </a>
          </div>
        </div>

      </section>

      <section id="team" className="team">
        <div className="container">
          <div className="team-details">
            <div className="project-header team-header text-left">
              <h2>Our expert team</h2>
              <p>
                Pallamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="team-card">
              <div className="container">
                <div className="row">
                  <div className="owl-carousel  team-carousel">
                    <div className="col-sm-3 col-xs-12">
                      <div className="single-team-box team-box-bg-1">
                        <div className="team-box-inner">
                          <h3>tom hanks</h3>
                          <p className="team-meta">Founder &  CEO</p>
                          <a href="team.html" className="learn-btn">
                            learn more
                          </a>
                        </div>

                      </div>
                    </div>
                    <div className="col-sm-3 col-xs-12">
                      <div className="single-team-box team-box-bg-2">
                        <div className="team-box-inner">
                          <h3>alex browne</h3>
                          <p className="team-meta">
                            Director, Management & Research
                          </p>
                          <a href="team.html" className="learn-btn">
                            learn more
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3 col-xs-12">
                      <div className="single-team-box team-box-bg-3">
                        <div className="team-box-inner">
                          <h3>darren j. stevens</h3>
                          <p className="team-meta">
                            Director, Finance Solution
                          </p>
                          <a href="team.html" className="learn-btn">
                            learn more
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3 col-xs-12">
                      <div className="single-team-box team-box-bg-4">
                        <div className="team-box-inner">
                          <h3>kevin thomson</h3>
                          <p className="team-meta">
                            Head, Legal Advising
                          </p>
                          <a href="team.html" className="learn-btn">
                            learn more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section id="pricing" className="pricing">
        <div className="container">
          <div className="pricing-details">
            <div className="section-header text-center">
              <h2 className="price-head">our pricing table</h2>
              <p>
                Pallamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div className="pricing-content">
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <div className="pricing-box">
                    <div className="pricing-header">
                      <h2>basic</h2>
                      <h3 className="packeg_p"><span>$</span>99</h3>
                      <p>monthly</p>
                    </div>
                    <ul className="plan-lists">
                      <li>01 user</li>
                      <li>01 project</li>
                      <li>01 advisor team</li>
                      <li>complete statistics</li>
                      <li>E-Mail support</li>
                    </ul>

                    <div className="project-btn pricing-btn text-center">
                      <a href="project.html" className="project-view">
                        Sign Up Now
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 col-sm-6">
                  <div className="pricing-box">
                    <div className="pricing-header">
                      <h2>standard</h2>
                      <h3 className="packeg_p"><span>$</span>299</h3>
                      <p>monthly</p>
                    </div>
                    <ul className="plan-lists">
                      <li>05 user</li>
                      <li>05 project</li>
                      <li>05 advisor team</li>
                      <li>complete statistics</li>
                      <li>full support</li>
                    </ul>

                    <div className="project-btn pricing-btn text-center">
                      <a href="project.html" className="project-view">
                        Sign Up Now
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 col-sm-6">
                  <div className="pricing-box">
                    <div className="pricing-header">
                      <h2>advanced</h2>
                      <h3 className="packeg_p"><span>$</span>499</h3>
                      <p>monthly</p>
                    </div>
                    <ul className="plan-lists">
                      <li>10 user</li>
                      <li>10 project</li>
                      <li>10 advisor team</li>
                      <li>complete statistics</li>
                      <li>full support</li>
                    </ul>

                    <div className="project-btn pricing-btn text-center">
                      <a href="project.html" className="project-view">
                        Sign Up Now
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 col-sm-6">
                  <div className="pricing-box">
                    <div className="pricing-header">
                      <h2>unlimited</h2>
                      <h3 className="packeg_p"><span>$</span>1099</h3>
                      <p>monthly</p>
                    </div>
                    <ul className="plan-lists">
                      <li>unlimited user</li>
                      <li>unlimited project</li>
                      <li>unlimited advisor team</li>
                      <li>complete statistics</li>
                      <li>full support</li>
                    </ul>

                    <div className="project-btn pricing-btn text-center">
                      <a href="project.html" className="project-view">
                        Sign Up Now
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="testemonial">
        <div className="container">
          <div className="section-header text-center">
            <h2>
              <span>
                what our client say about us
              </span>
            </h2>
          </div>
          <div className="owl-carousel owl-theme" id="testemonial-carousel">
            <div className="home1-testm item">
              <div className="home1-testm-single text-center">
                <div className="home1-testm-img">
                  <img src="assets/images/client/testimonial1.jpg" alt="img" />
                </div>
                <div className="home1-testm-txt">
                  <span className="icon section-icon">
                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                  </span>
                  <p>
                    Lorem ipsum dolor sit amet conse adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam..
                  </p>
                  <h3>
                    <a href="#">
                      kevin watson
                    </a>
                  </h3>
                  <h4>CEO, Kingston</h4>
                </div>
              </div>
            </div>
            <div className="home1-testm item">
              <div className="home1-testm-single text-center">
                <div className="home1-testm-img">
                  <img src="assets/images/client/testimonial2.jpg" alt="img" />
                </div>
                <div className="home1-testm-txt">
                  <span className="icon section-icon">
                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                  </span>
                  <p>
                    Lorem ipsum dolor sit amet conse adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam..
                  </p>
                  <h3>
                    <a href="#">
                      kevin watson
                    </a>
                  </h3>
                  <h4>CEO, Kingston</h4>
                </div>
              </div>
            </div>
            <div className="home1-testm item">
              <div className="home1-testm-single text-center">
                <div className="home1-testm-img">
                  <img src="assets/images/client/testimonial1.jpg" alt="img" />
                </div>
                <div className="home1-testm-txt">
                  <span className="icon section-icon">
                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                  </span>
                  <p>
                    Lorem ipsum dolor sit amet conse adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam..
                  </p>
                  <h3>
                    <a href="#">
                      kevin watson
                    </a>
                  </h3>
                  <h4>CEO, Kingston</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="clients">
        <div className="container">
          <div className="clients-area">
            <div className="owl-carousel owl-theme" id="client">
              <div className="item">
                <a href="#">
                  <img src="assets/images/client/client1.png" alt="brand-image" />
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src="assets/images/client/client2.png" alt="brand-image" />
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src="assets/images/client/client3.png" alt="brand-image" />
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src="assets/images/client/client4.png" alt="brand-image" />
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src="assets/images/client/client5.png" alt="brand-image" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </section>


      <section id="blog" className="news">
        <div className="container">
          <div className="news-details">
            <div className="section-header text-center">
              <h2>our latest news</h2>
              <p>
                Pallamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div className="news-card news-card-pb-25">
              <div className="row">
                <div className="col-md-4 col-sm-6">
                  <div className="single-news-box">
                    <div className="news-box-bg">
                      <img src="assets/images/blog/bl1.jpg" alt="blog image" />
                      <div className="isotope-overlay">
                        <a href="blog_single.html">
                          <span className="lnr lnr-link"></span>

                        </a>
                      </div>

                    </div>
                    <div className="news-box-inner">
                      <h3>
                        <a href="blog_single.html">
                          The Pros and Cons of Starting an Online Consulting Business
                        </a>
                      </h3>
                      <p className="news-meta">
                        Posted By:  <span>Mick Steven</span>  //  On <span>12th June, 2017</span>
                      </p>

                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="single-news-box">
                    <div className="news-box-bg">
                      <img src="assets/images/blog/bl2.jpg" alt="blog image" />
                      <div className="isotope-overlay">
                        <a href="blog_single.html">
                          <span className="lnr lnr-link"></span>

                        </a>
                      </div>

                    </div>
                    <div className="news-box-inner">
                      <h3>
                        <a href="blog_single.html">
                          8 Secrets for Your successful Business Mentor Won't Tell You
                        </a>
                      </h3>
                      <p className="news-meta">
                        Posted By:  <span>Mick Steven</span>  //  On <span>12th June, 2017</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="single-news-box">
                    <div className="news-box-bg">
                      <img src="assets/images/blog/bl3.jpg" alt="blog image" />
                      <div className="isotope-overlay">
                        <a href="blog_single.html">
                          <span className="lnr lnr-link"></span>

                        </a>
                      </div>

                    </div>
                    <div className="news-box-inner">
                      <h3>
                        <a href="blog_single.html">
                          Hire a Branding Consultant With a Similar Aesthetic to Your Own
                        </a>
                      </h3>
                      <p className="news-meta">
                        Posted By:  <span>Mick Steven</span>  //  On <span>12th June, 2017</span>
                      </p>

                    </div>
                  </div>
                </div>
              </div>
              <div className="project-btn text-center">
                <a href="project.html" className="project-view">read more
                </a>
              </div>
            </div>

          </div>
        </div>

      </section>

      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-details">
            <div className="section-header contact-head  text-center">
              <h2>contact us</h2>
              <p>
                Pallamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div className="contact-content">
              <div className="row">
                <div className="col-sm-offset-1 col-sm-5">
                  <div className="single-contact-box">
                    <div className="contact-right">
                      <div className="contact-adress">
                        <div className="contact-office-address">
                          <h3>contact info</h3>
                          <p>
                            125, Park street avenue, Brocklyn, Newyork.
                          </p>
                          <div className="contact-online-address">
                            <div className="single-online-address">
                              <i className="fa fa-phone"></i>
                              +11253678958
                            </div>

                            <div className="single-online-address">
                              <i className="fa fa-envelope-o"></i>
                              <span>info@mail.com</span>
                            </div>
                          </div>
                        </div>
                        <div className="contact-office-address">
                          <h3>social partner</h3>
                          <div className="contact-icon">
                            <ul>
                              <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                              <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                              <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                              <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            </ul>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-5">
                  <div className="single-contact-box">
                    <div className="contact-form">
                      <h3>Leave us a Massage Here</h3>
                      <form>
                        <div className="row">
                          <div className="col-sm-6 col-xs-12">
                            <div className="form-group">
                              <input type="text" className="form-control" id="firstname" placeholder="First Name" name="firstname" />
                            </div>
                          </div>
                          <div className="col-sm-6 col-xs-12">
                            <div className="form-group">
                              <input type="text" className="form-control" id="lastname" placeholder="Last Name" name="laststname" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-6 col-xs-12">
                            <div className="form-group">
                              <input type="email" className="form-control" id="email" placeholder="Email" name="email" />
                            </div>
                          </div>
                          <div className="col-sm-6 col-xs-12">
                            <div className="form-group">
                              <input type="text" className="form-control" id="phone" placeholder="Phone" name="phone" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="form-group">
                              <textarea className="form-control" rows={7} id="comment" placeholder="Message" ></textarea>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="single-contact-btn pull-right">
                              <button className="contact-btn" type="button">send message</button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section id="new-project" className="new-project">
        <div className="container">
          <div className="new-project-details">
            <div className="row">
              <div className="col-md-10 col-sm-8">
                <div className="single-new-project">
                  <h3>
                    Want to start a new project with us? Let’s Start!
                  </h3>
                </div>
              </div>
              <div className="col-md-2 col-sm-4">
                <div className="single-new-project">
                  <a href="#" className="slide-btn">
                    start now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="hm-footer">
        <div className="container">
          <div className="hm-footer-details">
            <div className="row">
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="hm-footer-widget">
                  <div className="hm-foot-title ">
                    <div className="logo">
                      <a href="index.html">
                        <img src="assets/images/logo/logo.png" alt="logo" />
                      </a>
                    </div>
                  </div>
                  <div className="hm-foot-para">
                    <p>
                      Lorem ipsum dolor sit amt conetur adcing elit. Sed do eiusod tempor utslr. Ut laboris nisi ut aute irure dolor in rein velit esse.
                    </p>
                  </div>
                  <div className="hm-foot-icon">
                    <ul>
                      <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                      <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                      <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                      <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className=" col-md-2 col-sm-6 col-xs-12">
                <div className="hm-footer-widget">
                  <div className="hm-foot-title">
                    <h4>Useful Links</h4>
                  </div>
                  <div className="footer-menu ">
                    <ul className="">
                      <li><a href="index.html" >Home</a></li>
                      <li><a href="about.html">About</a></li>
                      <li><a href="services.html">Service</a></li>
                      <li><a href="portfolio.html">Portfolio</a></li>
                      <li><a href="blog.html">Blog</a></li>
                      <li><a href="contact.html">Contact us</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className=" col-md-3 col-sm-6 col-xs-12">
                <div className="hm-footer-widget">
                  <div className="hm-foot-title">
                    <h4>from the news</h4>
                  </div>
                  <div className="hm-para-news">
                    <a href="blog_single.html">
                      The Pros and Cons of Starting an Online Business.
                    </a>
                    <span>12th June 2017</span>
                  </div>
                  <div className="footer-line">
                    <div className="border-bottom"></div>
                  </div>
                  <div className="hm-para-news">
                    <a href="blog_single.html">
                      The Pros and Cons of Starting an Online Business.
                    </a>
                    <span>12th June 2017</span>
                  </div>
                </div>
              </div>
              <div className=" col-md-3 col-sm-6  col-xs-12">
                <div className="hm-footer-widget">
                  <div className="hm-foot-title">
                    <h4> Our Newsletter</h4>
                  </div>
                  <div className="hm-foot-para">
                    <p className="para-news">
                      Subscribe to our newsletter to get the latest News and offers..
                    </p>
                  </div>
                  <div className="hm-foot-email">
                    <div className="foot-email-box">
                      <input type="text" className="form-control" placeholder="Email Address" />
                    </div>
                    <div className="foot-email-subscribe">
                      <button type="button" >go</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <footer className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-sm-7">
              <div className="foot-copyright pull-left">
                <p>
                  &copy; All Rights Reserve
                  <a href="https://www.themesine.com">ThemeSINE</a>
                </p>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="foot-menu pull-right
						">
                <ul>
                  <li ><a href="#">legal</a></li>
                  <li ><a href="#">sitemap</a></li>
                  <li ><a href="#">privacy policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div id="scroll-Top">
            <i className="fa fa-angle-double-up return-to-top" id="scroll-top" data-toggle="tooltip" data-placement="top" title="" data-original-title="Back to Top" aria-hidden="true"></i>
          </div>
        </div>

      </footer>


      <script src="assets/js/jquery.js"></script>

      <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"
      ></script>

      <script type="text/javascript" src="assets/js/bootstrap.min.js"></script>

      <script src="assets/js/bootsnav.js"></script>

      <script
        src="assets/js/jquery.hc-sticky.min.js"
        type="text/javascript"
      ></script>

      <script src="assets/js/jquery.magnific-popup.min.js"></script>

      <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"
      ></script>

      <script
        type="text/javascript"
        src="assets/js/owl.carousel.min.js"
      ></script>

      <script src="assets/js/jquery.counterup.min.js"></script>
      <script src="assets/js/waypoints.min.js"></script>

      <script type="text/javascript" src="assets/js/jak-menusearch.js"></script>


    </div>
  )
}

export default Home
