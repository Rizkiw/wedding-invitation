import React, { Fragment, useEffect } from 'react';
import { bool } from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { styWrapper } from './styles';

function LocationSection(isMatrimoni) {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const gereja = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15867.521469080304!2d106.7251564!3d-6.1467661!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7f8224337bf%3A0x5207de20b85d0835!2sGereja%20Katolik%20Paroki%20Trinitas%2C%20Cengkareng!5e0!3m2!1sid!2sid!4v1732435132885!5m2!1sid!2sid"
  const resepsi = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.621861305265!2d106.63074327591373!3d-6.181338893806146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f8d594f72dc3%3A0xae92741b5907139f!2sHappy%20Wedding%20Hall!5e0!3m2!1sid!2sid!4v1722790547942!5m2!1sid!2sid"

  const renderTitleLocation = () => {
    if (isMatrimoni.isMatrimoni) return (
      <Fragment>
        <h2 className="main-font">Lokasi Pemberkatan</h2>
        <p className="sub-title">
          <strong>Gereja Katolik Paroki Trinitas</strong>
          <br />
          Jl. Utama III No.23, RT.11/RW.3, Cengkareng Barat, Kecamatan Cengkareng, <br />
          Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11730
        </p>

      </Fragment>
    );

    return (
      <Fragment>
        <h2 className="main-font">Reception</h2>
        <p className="sub-title">
          <strong>Happy Wedding Hall Tangerang</strong>
          <br />
          Jl. Mt. Haryono N No.26, RT.002/RW.002, Sukasari, Kec. Tangerang, <br />
          Kota Tangerang, Banten 15118
        </p>
      </Fragment>
    );
  };
  return (
    <Fragment>
      <div id="fh5co-couple-story" className="fh5co-section-gray" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
              {renderTitleLocation()}
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1" data-aos="zoom-in">
              <iframe
                src={(isMatrimoni.isMatrimoni) ? gereja : resepsi}
                width="100%"
                height="450"
                loading="lazy"
                frameBorder="0"
                style={{ border: '0' }}
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
                title="Google Maps - Rizki & Linda Wedding"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

LocationSection.propTypes = {
  props: bool.isRequired,
};

LocationSection.defaultProps = {
  props: false,
};

export default React.memo(LocationSection);
