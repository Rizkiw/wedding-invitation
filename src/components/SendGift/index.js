import React, { Fragment, useState } from 'react';
import useClipboard from '@hooks/useClipboard';
import LogoBca from '@assets/images/bank/logo_bca.webp';
import LogoBNI from '@assets/images/bank/logo_bni.webp';
import { styWrapper } from './styles';


function SendGift() {
    const { handleCopy } = useClipboard();
    const [successBCA, setSuccessBCA] = useState(false);
    const [succesBNI, setSuccessBNI] = useState(false);

    const rekBNI = '1934921820';
    const rekBCA = '0010560128';

    const copyBCA = async () => {
        await handleCopy(rekBCA);
        setSuccessBCA(true);
        setTimeout(() => setSuccessBCA(false), 2000); // Reset after 2 sec
    };

    const copyBNI = async () => {
        await handleCopy(rekBNI);
        setSuccessBNI(true);
        setTimeout(() => setSuccessBNI(false), 2000);
    };

    return (
        <Fragment>
            <div id="fh5co-gift" className="fh5co-section-gray" css={styWrapper}>
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
                                        <div className="detail_bank">
                                            <h4>A.N Lindawati <br /><br />No Rek. {rekBCA}</h4>
                                            <p>
                                                <button
                                                    type="button"
                                                    className="btn btn-default btn-xs"
                                                    onClick={copyBCA}
                                                >
                                                    {successBCA ? 'Tersalin' : 'Salin'}
                                                </button>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="logo_bank">
                                            <img src={LogoBNI} alt="logo_mandiri" className="img-responsive" loading="lazy" />
                                        </div>
                                        <div className="detail_bank">
                                            <h4>A.N Rizki Wibisono Kristianto <br /><br />No Rek. {rekBNI}</h4>
                                            <p>
                                                <button
                                                    type="button"
                                                    className="btn btn-default btn-xs"
                                                    onClick={copyBNI}
                                                >
                                                    {succesBNI ? 'Tersalin' : 'Salin'}
                                                </button>
                                            </p>
                                        </div>
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
