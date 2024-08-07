import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import Bride from '@assets/images/linda.jpg';
import Groom from '@assets/images/rizki.jpg';

import { styWrapper } from './styles';

function HelloSection() {
  const finalSubtitle = 'Sabtu, 29 November 2025';

  return (
    <Fragment>
      <div id="fh5co-couple" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              {/* <h2 className="main-font">Assalamualaikum Wr. Wb</h2> */}
              <h3 className="sub-title hs">{finalSubtitle}</h3>
              <p className="info">
                "Sehingga keduanya itu menjadi satu daging. Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia."
                <br /><b>Markus 10:8-9</b>
              </p>
            </div>
          </div>
          <div className="couple-wrap">
            <div className="couple-half">
              <div className="groom">
                <img src={Groom} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-groom">
                <h3 className="main-font">Rizki Wibisono Kristianto</h3>
                <p className="parent-name parent-name__top">
                  Putra Pertama Bapak Kristanto <br />& Ibu Kristina Sri Sugiarti
                </p>
              </div>
            </div>
            <p className="heart text-center">
              <i className="icon-heart2"></i>
            </p>
            <div className="and-love">
              <i>&</i>
            </div>
            <div className="couple-half">
              <div className="bride">
                <img src={Bride} alt="bride" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-bride">
                <h3 className="main-font">Lindawati</h3>
                <p className="parent-name">
                  Putri Pertama Bapak Harianto Kusuma <br />& Alm. Ibu Neni Supiani
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

HelloSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default HelloSection;
