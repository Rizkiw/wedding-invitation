import React, { Fragment, useEffect } from 'react';
import { bool } from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';

import WeddingInfoBox from './WeddingInfoBox';
import { styWrapper } from './styles';

function WeddingSection(params) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);
  const renderTitle = () => {
    if (params.isMatrimoni) return <h2 className="main-font main-font__wedding">Pemberkatan</h2>;
    if (params.isHome) return <h2 className="main-font main-font__wedding">Ngunduh Mantu</h2>;

    return (
      <Fragment>
        <h2 className="main-font main-font__wedding">It's The Day !</h2>
      </Fragment>
    );
  };

  return (
    <Fragment>
      <div id="fh5co-event" css={styWrapper}>
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              {renderTitle()}
              <span className="sub-title sub-title__wedding">Two souls, destined to be together, joining as one in a journey of love, trust, and endless happines.</span>
            </div>
          </div>
          <div className="row">
            {
              <div className={(params.isMatrimoni || params.isHome) ? "col-md-12 col-md-offset-3" : "col-md-10 col-md-offset-1"}>
                {params.isHome === false && (
                  <div data-aos="fade-right">
                    <WeddingInfoBox
                      title="Holy Matrimony"
                      time="11:00 WIB"
                      date="Saturday, 29 November 2025"
                      description="Gereja Katolik Paroki Trinitas, Cengkareng"
                      locationUrl="https://maps.app.goo.gl/4GzqQLS2QmAjEmzc7"
                    />
                  </div>
                )}
                {params.isHome === false && params.isMatrimoni === false && (
                  <div data-aos="fade-left">
                    <WeddingInfoBox
                      title="Reception"
                      time="19:00 WIB"
                      date="Saturday, 29 November 2025"
                      description="Happy Wedding Hall, Tangerang"
                      locationUrl="https://maps.app.goo.gl/iJyHxnJoa1qSmB7H7"
                    />
                  </div>
                )}
                {params.isHome === true && (
                  <div data-aos="fade-up">
                    <WeddingInfoBox
                      title="Ngunduh Mantu"
                      time="10:00 WIB"
                      date="Sunday, 30 November 2025"
                      description="Serdang Asri 2 Blok E 11 No.21, Kab. Tangerang"
                      locationUrl="https://maps.app.goo.gl/6nqDhkfkaKxd6oZ17"
                    />
                  </div>
                )}
              </div>
            }
          </div>
        </div>
      </div>
    </Fragment>
  );
}

WeddingSection.propTypes = {
  props: bool.isRequired,
};

WeddingSection.defaultProps = {
  props: false,
};

export default React.memo(WeddingSection);
