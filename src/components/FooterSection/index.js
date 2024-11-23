import React, { Fragment } from 'react';

function FooterSection() {
  return (
    <Fragment>
      <footer id="fh5co-footer" role="contentinfo" className="fh5co-section-gray">
        <div className="container" >
          <div className="row copyright">
            <div className="col-md-12 text-center">
              <p>
                <small className="block">Made with ❤️ by Rizki & Linda. <br />All Rights Reserved &copy; 2024.</small>
                {/* <small className="block">
                  Covid-19 Icon by{' '}
                  <a href="https://www.flaticon.com" target="_blank" rel="noreferrer">
                    Flat Icon - Frepik
                  </a>
                </small> */}
                <small className="block">
                  Song by{' '}
                  <a href="https://www.youtube.com/watch?v=WNw2yH_waVc" target="_blank" rel="noreferrer">
                    Juicy Luicy - Lagu Nikah
                  </a>
                </small>
                <small className="block">
                  Original Template from{' '}
                  <a href="https://indrakusuma.web.id/" target="_blank" rel="noreferrer">
                    Indra Kusuma
                  </a>
                </small>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

export default React.memo(FooterSection);
