import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { photos } from './photo-data';

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
    <div id="fh5co-gallery" className="fh5co-section-white" >
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font">Our Happiest Moment</h2>
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
                autoPlay={true}  // Enable autoplay
                slideInterval={3000}  // Set slide interval to 3000ms (3 seconds)
              />;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoSection;
