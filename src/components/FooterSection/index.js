import React, { Fragment } from 'react';

function FooterSection() {
  return (
    <Fragment>
      <footer id="fh5co-footer" className="fh5co-section-gray" role="contentinfo">
        <div className="container" >
          <div className="row copyright">
            <div className="col-md-12 text-center">
              <p>
                <small className="block">Made with ❤️ by Rizki & Linda. <br />All Rights Reserved &copy; 2024.</small>
                <small className="block">
                  Song by{' '}
                  <a href="https://www.youtube.com/watch?v=BqFEtDsTUrQ" target="_blank" rel="noreferrer">
                    Nyoman Paul, Andi Rianto – The Way You Look At Me
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
