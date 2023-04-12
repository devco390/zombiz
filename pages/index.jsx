import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import { useEffect } from 'react'
import Home from '../components/home/home'
import Menu from '../components/menu/menu'
import HeaderSliderArea from '../components/header-slider-area/header-slider-area'
import WeDo from '../components/we-do/we-do'
import About from '../components/about/about'
import Service from '../components/service/service'
import Statistics from '../components/statistics/statistics'
import Project from '../components/project/project'
import Team from '../components/team/team'
import Pricing from '../components/pricing/pricing'
import Testemonial from '../components/testemonial/testemonial'
import Clients from '../components/clients/clients'
import Blog from '../components/blog/blog'
import Contact from '../components/contact/contact'
import NewProject from '../components/new-project/new-project'
import HMFooter from '../components/hm-footer/hm-footer'
import FooterCopyright from '../components/footer-copyright/footer-copyright'

const Index = () => {

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

      <Home />
      <Menu />
      <HeaderSliderArea />
      <WeDo />
      <About />
      <Service />
      <Statistics />
      <Project />
      <Team />
      <Pricing />
      <Testemonial />
      <Clients />
      <Blog />
      <Contact />
      <NewProject />
      <HMFooter />
      <FooterCopyright />


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

export default Index
