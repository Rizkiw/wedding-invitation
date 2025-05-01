import React, { Fragment, useEffect } from 'react';
import AOS from 'aos';
import 'animate.css';
import 'aos/dist/aos.css';

import Bride from '@assets/images/linda.jpg';
import Groom from '@assets/images/rizki.jpg';
import Rose from '@assets/images/particles/rose-1.webp';
import Leaf from '@assets/images/particles/leaf-1.webp';
import Bird from '@assets/images/particles/parket.webp';

import { styWrapper } from './styles';

function HelloSection() {
  const finalSubtitle = 'Saturday, 29 November 2025';

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <Fragment>
      <div id="fh5co-couple" className="fh5co-section-white" css={styWrapper}>
        <div className="rose-container">
          <div data-aos="fade-down-right">
            <img
              src={Rose}
              alt="rose-animated"
              className="img-responsive rose-sway rose-top-left"
              loading="lazy"
            />
            <img
              src={Leaf}
              alt="leaf-animated"
              className="img-responsive leaf-sway leaf-top-left"
              loading="lazy"
            />
          </div>
          <div data-aos="fade-up-right">
            <img
              src={Leaf}
              alt="leaf-animated"
              className="img-responsive leaf-bottom-left"
              loading="lazy"
            />
          </div>
          <div data-aos="fade-down-left">
            <img
              src={Bird}
              alt="bird-animated"
              className="img-responsive bird-top-right"
              loading="lazy"
            />
          </div>
          <div data-aos="fade-up-left">
            <img
              src={Rose}
              alt="rose-animated"
              className="img-responsive rose-bottom-right"
              loading="lazy"
            />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading" >
              <h3 className="sub-title hs" data-aos="fade-down">{finalSubtitle}</h3>
              <p className="info" data-aos="fade-down-right">
                "And the two will become one flesh. So they are no longer two, but one flesh. Therefore what God has joined together, let no one separate"
              </p>
              <p data-aos="fade-down-left"><b>Mark 10 : 8-9</b></p>
            </div>
          </div>
          <div className="couple-wrap">
            <div className="couple-half" data-aos="fade-right">
              <div className="groom">
                <img src={Groom} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-groom">
                <h3 className="main-font">Rizki Wibisono Kristianto</h3>
                <p className="parent-name parent-name__top">
                  The Son of Mr. Kristanto <br />& Mrs. Kristina Sri Sugiarti
                </p>
              </div>
            </div>
            <p className="heart text-center" data-aos="zoom-in">
              <i className="icon-heart2"></i>
            </p>
            <div className="and-love" data-aos="zoom-in">
              <i>&</i>
            </div>
            <div className="couple-half" data-aos="fade-left">
              <div className="bride">
                <img src={Bride} alt="bride" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-bride">
                <h3 className="main-font">Lindawati</h3>
                <p className="parent-name">
                  The Daughter of Mr. Harianto Kusuma <br />& Mrs. Neni Supiani (Almh)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default HelloSection;
