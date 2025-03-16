import React, { Fragment } from 'react';
import { styWrapper } from './style';


function SendGift() {

    return (
        <Fragment>
            <div id="fh5co-thank-you" css={styWrapper}>
                <div className="container">
                    <div className="row">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                                <h2 className="main-font">Thank you</h2>
                                <p className="info">
                                    We would like to express our gratitude for your presence and prayers in this special moment of ours. We hope that you will be willing to attend and enjoy the entire series of our events.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default SendGift;
