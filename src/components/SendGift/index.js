import React, { Fragment, useState } from 'react';
import useClipboard from '@hooks/useClipboard';
import LogoBca from '@assets/images/bank/logo_bca.webp';
import LogoMandiri from '@assets/images/bank/logo_mandiri.webp';
import LogoCopy from '@assets/images/icon/copy.png';
import { styWrapper } from './styles';


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
            <div id="fh5co-testimonial" className="fh5co-section-gray" css={styWrapper}>
                <div className="container">
                    <div className="row">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                                <h2 className="main-font">Send Gift</h2>
                                <p className="info">
                                    Your blessing and coming to our wedding are enough for us. However, if you want to give a gift we provide a Digital Envelope to make it easier for you. Thank you
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                                <div className="bank-info">
                                    <div className="col-md-8">
                                        <div className="logo_bank">
                                            <img src={LogoBca} alt="logo_bca" className="img-responsive" loading="lazy" />
                                        </div>
                                        <p>{rekBCA}
                                            <button
                                                type="button"
                                                className="btn btn-default btn-xs"
                                                style={{ position: 'center', marginLeft: '10px' }}
                                                onClick={copyBCA}
                                            >
                                                {successBCA ? 'Tersalin' : <img src={LogoCopy} alt="logo_copy" className="img-responsive" loading="lazy" />}
                                            </button><br />
                                            <strong>Lindawati</strong>
                                        </p>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="logo_bank">
                                            <img src={LogoMandiri} alt="logo_mandiri" className="img-responsive" loading="lazy" />
                                        </div>
                                        <p>{rekMandiri}
                                            <button
                                                type="button"
                                                className="btn btn-default btn-xs "
                                                style={{ position: 'center', marginLeft: '10px' }}
                                                onClick={copyMandiri}
                                            >
                                                {successMandiri ? 'Tersalin' : <img src={LogoCopy} alt="logo_copy" className="img-responsive" loading="lazy" />}
                                            </button> <br />
                                            <strong>Rizki Wibisono Kristianto</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default SendGift;
