// src/components/GenerateLink.jsx
import React, { useState, useEffect, Fragment } from 'react';

const PERSONAL = 1;

function GenerateLink() {
  const [type, setType] = useState(PERSONAL);
  const [loc, setLoc] = useState('HPW'); // ✅ default value
  const [name, setName] = useState('');
  const [currentUrl, setCurrentUrl] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [successCopy, setSuccessCopy] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = window.location.href.split('/').slice(0, 3).join('/');
      setCurrentUrl(url);
    }
  }, []);

  const handleChangeLoc = (e) => {
    const value = e.target.value;
    setLoc(value);
    setShowResult(false);
  };

  const handleChange = (e) => {
    setType(parseInt(e.target.value, 10));
    setShowResult(false);
  };

  const handleSetName = (e) => {
    setName(e.target.value);
  };

  const handleCopy = async (text, showAlert = false) => {
    try {
      await navigator.clipboard.writeText(text);
      setSuccessCopy(true);
      if (showAlert) alert('Berhasil');
    } catch (err) {
      setSuccessCopy(false);
      alert('Failed to copy! :(');
    }
  };

  const renderContentType = () => {
    if (type === PERSONAL) {
      return (
        <Fragment>
          <div className="form-group">
            <label htmlFor="guestName">Nama Tamu</label>
            <input
              id="guestName"
              value={name}
              onChange={handleSetName}
              type="text"
              className="form-control"
              placeholder="Nama tamu.."
            />
          </div>
          <button type="button" className="btn btn-primary" onClick={() => setShowResult(true)}>
            Generate Link
          </button>
        </Fragment>
      );
    }
  };

  const renderResult = () => {
    const location =
      loc === 'HPW'
        ? 'Happy Wedding Hall'
        : loc === 'Gereja'
        ? 'Gereja Trinitas Cengkareng'
        : 'Serdang Asri 2 Blok E 11 No. 21, Kec.Panongan, Kab.Tangerang';
    const date = loc === 'Rumah' ? 'Minggu, 30 November 2025' : 'Sabtu, 29 November 2025';
    let URL = `${currentUrl}?to=${encodeURIComponent(name)}`;

    if (loc === 'Gereja') {
      URL += `&type=holymatrimoni`;
    } else if (loc === 'Rumah') {
      URL += `&loc=home`;
    }

    const event = loc === 'Gereja' ? 'pemberkatan' : 'pernikahan';

    if (!showResult) return null;

    if (type === PERSONAL) {
      const invitationText = `Dear ${name},\n\nDengan penuh sukacita, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara ${event} kami, Rizki dan Linda, yang akan dilaksanakan pada hari ${date}.\n\nLokasi: ${location}\n\nBerikut link undangan untuk informasi lebih lengkap:\n\n${URL}\n\nMerupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.\nTerima kasih.`;

      return (
        <div className="col-md-4 col-md-offset-4">
          <div className="alert alert-success" role="alert" style={{ marginTop: '20px' }}>
            <strong>Berhasil!</strong>
            <br />
            <p>
              {invitationText.split('\n').map((line, index) => (
                <Fragment key={index}>
                  {line}
                  <br />
                </Fragment>
              ))}
            </p>
            <br />
            <strong>Test Link : </strong>
            <a href={URL} target="_blank" rel="noreferrer" style={{ color: 'green', textDecoration: 'underline' }}>
              {URL}
            </a>
            <br />
            <br />
            <button
              type="button"
              className="btn btn-default btn-xs"
              style={{ position: 'center' }}
              onClick={() => handleCopy(invitationText)}
            >
              {successCopy ? 'Tersalin' : 'Salin'}
            </button>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <h2 className="title">Generator of Link Invitation</h2>
      <h3 className="title__sub">Rizki & Linda Wedding</h3>

      <Fragment>
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <div className="form-group">
              <label htmlFor="linkType">Tipe Link</label>
              <select id="linkType" className="form-control" value={type} onChange={handleChange}>
                <option value={PERSONAL}>Individu</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="InputLokasi">Lokasi</label>
              <select id="InputLokasi" className="form-control" value={loc} onChange={handleChangeLoc}>
                <option value="HPW">Happy Wedding Hall</option>
                <option value="Gereja">Gereja</option>
                <option value="Rumah">Rumah</option>
              </select>
            </div>

            {renderContentType()}
          </div>
        </div>
        <div className="row">{renderResult()}</div>
      </Fragment>
    </div>
  );
}

export default GenerateLink;
