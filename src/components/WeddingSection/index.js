import React, { Fragment } from 'react';

import WeddingInfoBox from './WeddingInfoBox';
import { styWrapper } from './styles';

function WeddingSection() {

  return (
    <Fragment>
      <div id="fh5co-event" css={styWrapper}>
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font main-font__wedding">Pesta Pernikahan</h2>
              <span className="sub-title sub-title__wedding">Akan diselenggarakan pada:</span>
            </div>
          </div>
          <div className="row">
            {
              <div className="col-md-10 col-md-offset-1">
                <WeddingInfoBox
                  title="Pemberkatan"
                  time="Akan dilaksanakan pagi hari "
                  date="Sabtu, 29 November 2024"
                  description="Gereja Katolik Paroki Trinitas, Cengkareng"
                  locationUrl="https://maps.app.goo.gl/4GzqQLS2QmAjEmzc7"
                />
                <WeddingInfoBox
                  title="Pesta Pernikahan"
                  time="15:00 WIB"
                  date="Sabtu, 29 November 2024"
                  description="Happy Wedding Hall, Tangerang"
                  locationUrl="https://maps.app.goo.gl/iJyHxnJoa1qSmB7H7"
                />
              </div>
            }
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default React.memo(WeddingSection);
