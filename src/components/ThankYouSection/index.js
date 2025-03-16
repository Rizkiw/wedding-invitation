import React, { Fragment, useState } from 'react';
import useClipboard from '@hooks/useClipboard';
import LogoBca from '@assets/images/bank/logo_bca.webp';
import LogoMandiri from '@assets/images/bank/logo_mandiri.webp';
import LogoCopy from '@assets/images/icon/copy.png';
import { styWrapper } from './style';


function SendGift() {
    const { handleCopy } = useClipboard();
    const [successBCA, setSuccessBCA] = useState(false);
    const [successMandiri, setSuccessMandiri] = useState(false);

    const rekMandiri = '1180010239563';
    const rekBCA = '0010560128';

    const copyBCA = async () => {
        await handleCopy(rekBCA);
        setSuccessBCA(true);
        setTimeout(() => setSuccessBCA(false), 2000); // Reset after 2 sec
    };

    const copyMandiri = async () => {
        await handleCopy(rekMandiri);
        setSuccessMandiri(true);
        setTimeout(() => setSuccessMandiri(false), 2000);
    };

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
