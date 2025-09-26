import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { photos } from './photo-data';
import { styWrapper } from './styles';
import Rose from '@components/Particles/Rose';
import Leaf from '@components/Particles/Leaf';

function PhotoSection() {
  // const renderYoutubeVideo = () => {
  //   return (
  //     <iframe
  //       title="Pre-Wedding Dinda & Indra"
  //       width="100%"
  //       height="360px"
  //       src="https://www.youtube.com/embed/75w39OY7N-k"
  //       frameBorder="0"
  //       allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  //       allowFullScreen
  //     ></iframe>
  //   );
  // };

  return (
    <div id="fh5co-gallery" className="fh5co-section-gray" css={styWrapper}>
      <div className="particles-container">
        <div data-aos="fade-down-right">
          <Leaf className="img-responsive leaf-top-right" />
          <Rose className="img-responsive rose-top-left" />
        </div>
        <div data-aos="fade-up-left">
          <Rose className="img-responsive rose-bottom-right" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font">Our Moment Galleries</h2>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-md-10 col-md-offset-1">{renderYoutubeVideo()}</div>
          </div> */}
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <ImageGallery
                items={photos}
                showBullets={false}
                lazyLoad={true}
                autoPlay={true} // Enable autoplay
                slideInterval={3000} // Set slide interval to 3000ms (3 seconds)
              />
              ;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoSection;
