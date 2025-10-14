import React from 'react';
import { string } from 'prop-types';

function WeddingInfoBox({ title, date, time, description, locationUrl }) {
  return (
    <div className="col-md-6 col-sm-6">
      <div className="event-wrap">
        <div className="text-center">
          <h3>{title}</h3>
        </div>
        <div className="event-col">
          <i className="icon-clock"></i>
          <span>{time}</span>
        </div>
        <div className="event-col">
          <i className="icon-calendar"></i>
          <span>{date}</span>
        </div>
        {description && (
          <div className="event-col">
            <i className="icon-location-pin"></i>
            <span>
              <a href={locationUrl} target="_blank" rel="noopener noreferrer">
                <span dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, '<br />') }} />
              </a>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

WeddingInfoBox.propTypes = {
  title: string.isRequired,
  date: string.isRequired,
  time: string.isRequired,
  description: string.isRequired,
};

export default React.memo(WeddingInfoBox);
