import React, { useState, useEffect, Fragment } from 'react';

const PERSONAL = 1;

function GenerateLink() {

  const [type, setType] = useState(PERSONAL);
  const [name, setName] = useState();
  const [currentUrl, setCurrentUrl] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [successCopy, setSuccessCopy] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = window.location.href.split('/').slice(0, 3).join('/');
      setCurrentUrl(url);
    }
  }, []);


  const URL = `${currentUrl}?to=${encodeURIComponent(name)}`;

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
      showAlert && alert('Berhasil');
    } catch (err) {
      setSuccessCopy(false);
      alert('Failed to copy! :(');
    }
  };

  const renderContentType = () => {
    if (type === PERSONAL) {
      return (
        <Fragment>
          <div class="form-group">
            <label for="exampleInputEmail1">Nama Tamu</label>
            <input
              value={name}
              onChange={handleSetName}
              type="text"
              class="form-control"
              placeholder="Nama tamu.."
            ></input>
          </div>
          <button type="submit" class="btn btn-primary" onClick={() => setShowResult(true)}>
            Generate Link
          </button>
        </Fragment>
      );
    }
  };

  const renderResult = () => {
    if (!showResult) return null;

    if (type === PERSONAL) {
      const invitationText = `Dear ${name},\n\nDengan penuh sukacita, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami, Rizki dan Linda, yang akan dilaksanakan pada hari Sabtu, tanggal 29 November 2025.\n\nBerikut link undangan untuk informasi lebih lengkap:\n\n${URL}\n\nMerupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.\nTerima kasih.`;

      return (
        <div className="col-md-4 col-md-offset-4">
          <div class="alert alert-success" role="alert" style={{ marginTop: '20px' }}>
            <strong>Berhasil!</strong> <br />
            <p>
              {invitationText.split('\n').map((line, index) => (
                <Fragment key={index}>
                  {line}
                  <br />
                </Fragment>
              ))}
            </p><br />

            <strong>Test Link : </strong>
            <a href={URL} target="_blank" rel="noreferrer" style={{ color: 'green', textDecoration: 'underline' }}>
              {URL}
            </a> <br /><br />
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
            <div class="form-group">
              <label for="exampleInputEmail1">Tipe Link</label>
              <select class="form-control" value={type} onChange={handleChange}>
                <option value={PERSONAL}>Individu</option>
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
