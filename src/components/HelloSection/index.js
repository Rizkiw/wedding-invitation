import React, { Fragment, useEffect } from 'react';
import AOS from 'aos';
import 'animate.css';
import 'aos/dist/aos.css';

import Bride from '@assets/images/linda.jpg';
import Groom from '@assets/images/rizki.jpg';

import Rose from '@components/Particles/Rose';
import Leaf from '@components/Particles/Leaf';
import Bird from '@components/Particles/Bird';

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
        <div className="particles-container">
          <div data-aos="fade-down-right">
            <Leaf className="img-responsive leaf-top-left" />
            <Rose className="img-responsive rose-top-left" />
          </div>
          <div data-aos="fade-up-right">
            <Leaf className="img-responsive leaf-bottom-left" />
          </div>
          <div data-aos="fade-down-left">
            <Bird className="img-responsive bird-top-right" />
          </div>
          <div data-aos="fade-up-left">
            <Rose className="img-responsive rose-bottom-right" />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading" >
              <h3 className="sub-title hs" data-aos="fade-down">{finalSubtitle}</h3>
              <p className="info" data-aos="fade-down-right">
                "So they are no longer two but one flesh. What therefore God has joined together, let not man separate.”
              </p>
              <p data-aos="fade-down-left"><b>Matthew 19:6</b></p>
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
