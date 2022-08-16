import React from "react";
import Script from "next/script";
import Head from "next/head";
import LoadingScreen from "../components/Loading-Screen/loading-screen ";
import { useRouter } from "next/router";
import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const onRouteChangeDone = () => {
    function noScroll() {
      window.scrollTo(0, 0);
    }
    var open = false,
      navDark = document.querySelector(".topnav.dark"),
      logoChan = document.querySelector(".topnav.dark .logo img"),
      menuIcon = document.querySelector(".topnav .menu-icon");
    if (menuIcon) {
      menuIcon.addEventListener("click", function () {
        open = !open;
        document.querySelector(".hamenu").classList.toggle("open");
        if (open) {
          animateEl(document.querySelector(".hamenu"), "0px");
          document.querySelector(".topnav .menu-icon ").classList.add("open");
          if (navDark) {
            navDark.classList.add("navlit");
          }
          if (logoChan) {
            logoChan.setAttribute("src", "/img/logo-light.png");
          }
          window.addEventListener("scroll", noScroll);
        } else {
          delay(300, animateEl(document.querySelector(".hamenu"), "-100%"));
          document.querySelector(".topnav .menu-icon").classList.remove("open");
          if (navDark) {
            navDark.classList.remove("navlit");
          }
          if (logoChan) {
            logoChan.setAttribute("src", "");
          }
          window.removeEventListener("scroll", noScroll);
        }
      });
      document.querySelectorAll(".main-menu a").forEach((item) => {
        item.addEventListener("click", () => {
          delay(300, animateEl(document.querySelector(".hamenu"), "-100%"));
          document.querySelector(".topnav .menu-icon").classList.remove("open");
          if (navDark) {
            navDark.classList.remove("navlit");
          }
          if (logoChan) {
            logoChan.setAttribute("src", "");
          }
          window.removeEventListener("scroll", noScroll);
        });
      });
    }
    document
      .querySelectorAll(".hamenu .menu-links .main-menu > li")
      .forEach((item) => {
        item.addEventListener("mouseenter", function () {
          this.style.opacity = "1";
          getSiblings(this).forEach((item) => {
            item.style.opacity = ".5";
          });
        });
        item.addEventListener("mouseleave", function () {
          document
            .querySelectorAll(".hamenu .menu-links .main-menu > li")
            .forEach((item2) => {
              item2.style.opacity = "1";
            });
        });
      });
    if (document.querySelectorAll(".main-menu > li .dmenu").length) {
      document.querySelectorAll(".main-menu > li .dmenu").forEach((item) => {
        item.addEventListener("click", function () {
          document.querySelector(".main-menu").classList.add("gosub");
          this.parentNode.parentNode.childNodes[1].classList.add("sub-open");
        });
      });
    }
    if (
      document.querySelectorAll(".main-menu .sub-menu li .sub-link.back").length
    ) {
      document
        .querySelectorAll(".main-menu .sub-menu li .sub-link.back")
        .forEach((item) => {
          item.addEventListener("click", function () {
            document.querySelector(".main-menu").classList.remove("gosub");
            document.querySelector(".main-menu").classList.remove("sub-open");
          });
        });
    }
  };
  React.useEffect(() => {
    onRouteChangeDone();
    router.events.on("routeChangeComplete", onRouteChangeDone);
    return () => {
      router.events.off("routeChangeComplete", onRouteChangeDone);
    };
    Pace.on("start", function () {
      //When Pace Start
      document.querySelector("#preloader").classList.remove("isdone");
      document.querySelector(".loading").classList.remove("isdone");
    });
    Pace.on("done", function () {
      //When Pace End
      if (document.querySelector(".hamenu")) {
        delay(300, animateEl(document.querySelector(".hamenu"), "-100%"));
        document.querySelector(".topnav .menu-icon").classList.remove("open");
      }
      document.querySelector("#preloader").classList.add("isdone");
      document.querySelector(".loading").classList.add("isdone");
    });
  }, [router.events]);

  React.useEffect(() => {
    setTimeout(() => {
Pace.on("start", function () {
  //When Pace Start
  document.querySelector("#preloader").classList.remove("isdone");
  document.querySelector(".loading").classList.remove("isdone");
});
Pace.on("done", function () {
  //When Pace End
  if (document.querySelector(".hamenu")) {
    delay(300, animateEl(document.querySelector(".hamenu"), "-100%"));
    document.querySelector(".topnav .menu-icon").classList.remove("open");
  }
  document.querySelector("#preloader").classList.add("isdone");
  document.querySelector(".loading").classList.add("isdone");
});
      function mousecursor() {
        const cursorInner = document.querySelector(".cursor-inner"),
          cursorOuter = document.querySelector(".cursor-outer");
        let n,
          i = 0,
          o = !1;
        window.onmousemove = function (s) {
          o ||
            (cursorOuter.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (cursorInner.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (n = s.clientY),
            (i = s.clientX);
        };
        if (document.querySelector(".cursor-pointer")) {
          document
            .querySelector(".cursor-pointer")
            .addEventListener("mouseenter", function () {
              cursorInner.classList.add("cursor-hover"),
                cursorOuter.classList.add("cursor-hover");
            });
          document
            .querySelector(".cursor-pointer")
            .addEventListener("mouseleave", function () {
              cursorInner.classList.remove("cursor-hover"),
                cursorOuter.classList.remove("cursor-hover");
            }),
            (cursorInner.style.visibility = "visible"),
            (cursorOuter.style.visibility = "visible");
        }
        document.querySelectorAll("a").forEach(function (item) {
          item.addEventListener("mouseenter", function () {
            cursorInner.classList.add("cursor-hover"),
              cursorOuter.classList.add("cursor-hover");
          });
        });
        document.querySelectorAll("a").forEach(function (item) {
          item.addEventListener("mouseleave", function () {
            cursorInner.classList.remove("cursor-hover"),
              cursorOuter.classList.remove("cursor-hover");
          });
        }),
          (cursorInner.style.visibility = "visible"),
          (cursorOuter.style.visibility = "visible");
      }
      mousecursor();
    }, 1000)
  }, [])
  return (
    <>
      <Head>
        <title>Garmetic</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>
      <LoadingScreen />
      <Component {...pageProps} />
      <div className="progress-wrap cursor-pointer">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
      <Script id="pace" src="/js/pace.min.js"></Script>
      <Script id="wow" src="/js/wow.min.js"></Script>
      <Script id="bootstrap" src="/js/bootstrap.min.js"></Script>
      <Script
        strategy="beforeInteractive"
        id="splitting"
        src="/js/splitting.min.js"
      ></Script>
      <Script id="simpleParallax" src="/js/simpleParallax.min.js"></Script>
      <Script id="isotope" src="/js/isotope.pkgd.min.js"></Script>
      <Script src="/js/main.js" strategy="lazyOnload"></Script>
    </>
  );
}

export default MyApp;
