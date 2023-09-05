import React, { useEffect, useState } from "react";
import { Timeline, Tween } from "react-gsap";
import gsap from "gsap";
import {Row,Col } from "react-bootstrap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//Components
import  ApCard from "./components/ApCard";
import ArijitCard from "./components/ArijitCard";
import JasleenCard from "./components/JasleenCard";
import data from "../src/data/cardData";
import AsData from "../src/data/cardData2";
import JrData from "./data/cardJasleen";
//Assets
import app_store from "./images/app_store.png";
import play_store from "./images/play_store.png";
import Her from "./images/Her.jpeg";
import With_You from "./images/With_You.jpeg";
//Styles
import "./reset.css";
import "./styles.css";

const App = () => {
  const [animateCard, setAnimateCard] = useState(false);

  useEffect(() => {
    gsap.config({ trialWarn: false });
    gsap.registerPlugin(ScrollTrigger);
    const descTxt = document.querySelector(".desc-txt");
    

    let someDelay = gsap.delayedCall(0.2, newTriggers).pause();
    window.addEventListener("resize", () => someDelay.restart(true));

    function newTriggers() {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    }
    gsap.to(".desc-txt", {
      "--text-color": "white", 
      scrollTrigger: {
        trigger: ".desc-txt",
        start: "top bottom", 
        end: "bottom bottom", 
        scrub: 0.5, 
      },
    });

    const handleScroll = () => {
      
      const scrollPositionToTriggerAnimation = 300; 

      if (window.scrollY >= scrollPositionToTriggerAnimation) {
        setAnimateCard(true);
      }
    };
    window.addEventListener("scroll", handleScroll);

   
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Timeline
        labels={[
          { label: "start", position: 0 },
          {
            label: "header-end",
            position: "start+=1.8",
          },
          { label: "h1Show", position: "header-end+=1.3" },
          { label: "album-1-start", position: "h1Show-=0.5" },
          { label: "album-2-start", position: "album-1-start+=0.4" },
          { label: "shapes-start", position: "album-2-start+=0.4" },
        ]}
      >
        <header>
          <Timeline
            target={
              <>
                <div className="logo">
                  Wynk Lite <span>♫</span>
                </div>
                <div className="menu">
                  <MenuList />
                </div>
              </>
            }
          >
            <Tween
              target={0}
              from={{ x: "-200px", opacity: 0 }}
              to={{ x: "0px", opacity: 1 }}
              delay={0.5}
              duration={1.3}
              position="start"
            />
            <Tween
              target={1}
              from={{ x: "200px", opacity: 0 }}
              to={{ x: "0px", opacity: 1 }}
              delay={0.5}
              duration={1.3}
              position="start"
            />
          </Timeline>
        </header>
        <section id="home">
          <div className="container">
            <div className="content-area">
              <div className="info-section">
                <Timeline
                  target={
                    <>
                      <h1>Harmonize Your Sonic Journey</h1>
                      <h4>Let's Begin..</h4>
                      <div className="call-actions">
                        <CallToActionButtons />
                      </div>
                    </>
                  }
                >
                  <Tween
                    target={0}
                    from={{ x: "0px", y: "100px", opacity: 0 }}
                    to={{ x: "0px", y: "0px", opacity: 1 }}
                    duration={1.3}
                    position="header-end"
                  />
                  <Tween
                    target={1}
                    from={{ x: "-50px", opacity: 0 }}
                    to={{ x: "0px", opacity: 1 }}
                    duration={1.3}
                    position="h1Show"
                  />
                  <Tween
                    target={2}
                    from={{ x: "-50px", opacity: 0 }}
                    to={{ x: "0px", opacity: 1 }}
                    duration={1.3}
                    position="h1Show+=1"
                  />
                </Timeline>
              </div>
              <div className="photos">
                <Timeline
                  target={
                    <>
                      <img src={Her} alt="" className="album-1" />
                      <img src={With_You} alt="" className="album-2" />
                    </>
                  }
                >
                  <Tween
                    target={0}
                    from={{ height: 0 }}
                    to={{ height: 600 }}
                    duration={1.4}
                    position="album-1-start"
                  />
                  <Tween
                    target={1}
                    from={{ height: 0 }}
                    to={{ height: 600 }}
                    duration={1.4}
                    position="album-2-start"
                  />
                </Timeline>
                <Timeline
                  target={
                    <>
                      <div className="shape1"></div>
                      <div className="shape2"></div>
                      <div className="shape3"></div>
                    </>
                  }
                >
                  <Tween
                    target={0}
                    from={{ scale: 0, opacity: 0 }}
                    to={{ scale: 1, opacity: 1 }}
                    position="shapes-start"
                  />
                  <Tween
                    target={2}
                    from={{ opacity: 0 }}
                    to={{ opacity: 0.6 }}
                    duration={1}
                    position=">-0.2"
                  />
                  <Tween
                    target={2}
                    from={{ x: -50, y: 500 }}
                    to={{ y: 465 }}
                    repeat={-1}
                    yoyo
                  />
                  <Tween
                    target={1}
                    from={{ opacity: 0 }}
                    to={{ opacity: 0.3 }}
                    duration={1}
                    position=">-2"
                  />
                  <Tween
                    target={1}
                    from={{ x: 550, y: -150 }}
                    to={{ y: -185 }}
                    duration={1.5}
                    repeat={-1}
                    yoyo
                  />
                </Timeline>
              </div>
            </div>
          </div>
        </section>
      </Timeline>
      <section id="main-services">
        <div className="black-bg">
          <div className="container">
            <h2>Discover the unheard..</h2>
            <div className="services mt-4 ">
              {animateCard && <ApCard data={data.cardData} />}
              <div className="ps-2">
                {animateCard && <ArijitCard data={AsData.cardData} />}
              </div>
              <div className="ps-2">
                {animateCard && <JasleenCard data={JrData.cardData} />}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="test">
        <section id="main-services">
          <div className="container mt-3">
            <h2>About Wynk Lite</h2>
            <div className="mt-4 desc-txt d-flex justify-content-center text-center">
                Wynk Lite is the answer to your musical cravings in a simplified
                package. This lightweight music platform offers an effortless
                way to explore and enjoy your favorite songs without the
                data-heavy baggage. Wynk Lite brings you the music you love, efficiently and conveniently, all within
                100 MB. Embrace the future of music streaming with Wynk Lite.
            </div>
          </div>
        </section>
        <hr className="footer-line"/>
        <section>
          <div className="footer m-3">
<p className="footer-txt"><span className="footer-txt">©</span>2023 Wynk Lite.All rights reserved, built with <span class="fm77HeartImg">♥</span>in India</p>
<Row>
  <Col lg={4}>
  <p className="address mt-4">Vaishnavi Tech Park, 3rd & 4th Floor
Sarjapur Main Road, Bellandur
Bengaluru – 560103
Contact Us</p>
<div className="d-flex justify-content-start mt-4">
  <div className="d-flex justify-content-center">
  <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" height={25} width ={25} style={{backgroundColor:"white", borderRadius:"50%"}}/>
  <a className="footer-txt text-center ps-3" href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C589460569852%7Cb%7Cfacebook%20%27%7C&placement=&creative=589460569852&keyword=facebook%20%27&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696220912%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-327195741349%26loc_physical_ms%3D1007749%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQjwgNanBhDUARIsAAeIcAs17FZIij9jqdYWo2oLvwd3oE-tPIxGD7B6aOQurFO5XhSytZbtzVoaAlDLEALw_wcB">Connect with us on Facebook</a>
  </div>

</div>
<div className="d-flex justify-content-start mt-4">
  <div className="d-flex justify-content-center">
  <img src="	https://cdn-icons-png.flaticon.com/512/124/124021.png" height={25} width ={25} style={{backgroundColor:"white", borderRadius:"50%"}}/>
  <a className="footer-txt text-center ps-3" href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D">Connect with us on Twitter</a>
  </div>

</div>
  </Col>
  <Col lg={4}>
    <div className="mt-2">
    <h1 className="quick-links mb-2">Download on the App store</h1>
    <a href="https://www.apple.com/in/app-store/" target="_blank" rel="noopener noreferrer">
    <img src={app_store} alt="App Store" />
  </a>
    </div>
  </Col>
  <Col lg={4}>
    <div className="mt-2">
    <h1 className="quick-links mb-2">Download on the Play store</h1>
    <a href="https://play.google.com/store/games?utm_source=apac_med&hl=en-IN&utm_medium=hasem&utm_content=Oct0121&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-in-1003227-med-hasem-py-Evergreen-Oct0121-Text_Search_BKWS-BKWS%7CONSEM_kwid_43700065205026376_creativeid_535350509651_device_c&gclid=Cj0KCQjwgNanBhDUARIsAAeIcAtNua535B5vXJkSfycYKMZ3XgmKE_8N_ZH-bfMv0eMNH-AyLpPzB7saAtVyEALw_wcB&gclsrc=aw.ds" target="_blank" rel="noopener noreferrer">
    <img src={play_store} alt="App Store" />
  </a>
    </div>
  </Col>
</Row>
          </div>
        </section>
      </section>
      <footer id="animationPlayOnMountHack"></footer>
    </div>
  );
};

const MenuList = () => (
  <ul>
    <li>
      <a href="#">Subscription</a>
    </li>
    <li>
      <a href="#">Career</a>
    </li>
    <li>
      <a href="#">Contact</a>
    </li>
    <li>
      <a href="#" className="menu-btn">
        Sign Up
      </a>
    </li>
  </ul>
);

const CallToActionButtons = () => (
  <>
    <a href="#" className="action-btn">
      Listen Now
    </a>
    <a href="#" className="action-ghost-btn">
      Download
    </a>
  </>
);

export default App;