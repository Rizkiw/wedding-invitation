import React, { Fragment, useEffect } from 'react';
import { bool } from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';

import WeddingInfoBox from './WeddingInfoBox';
import { styWrapper } from './styles';

function WeddingSection(isMatrimoni) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const renderTitle = () => {
    if (isMatrimoni.isMatrimoni) return <h2 className="main-font main-font__wedding">Pemberkatan</h2>;

    return (
      <Fragment>
        <h2 className="main-font main-font__wedding">Pemberkatan & Resepsi</h2>
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
              <span className="sub-title sub-title__wedding">Akan diselenggarakan pada:</span>
            </div>
          </div>
          <div className="row">
            {
              <div className={(isMatrimoni.isMatrimoni) ? "col-md-12 col-md-offset-3" : "col-md-10 col-md-offset-1"}>
                <div data-aos="fade-right">
                  <WeddingInfoBox
                    title="Pemberkatan"
                    time="11:00 WIB"
                    date="Sabtu, 29 November 2025"
                    description="Gereja Katolik Paroki Trinitas, Cengkareng"
                    locationUrl="https://maps.app.goo.gl/4GzqQLS2QmAjEmzc7"
                  />
                </div>
                {isMatrimoni.isMatrimoni === false && (
                  <div data-aos="fade-left">
                    <WeddingInfoBox
                      title="Resepsi"
                      time="19:00 WIB"
                      date="Sabtu, 29 November 2025"
                      description="Happy Wedding Hall, Tangerang"
                      locationUrl="https://maps.app.goo.gl/iJyHxnJoa1qSmB7H7"
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
