import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import './ResultCard.css';

const ResultCard = ({ shortUrl }) => {
  const [copied, setCopied] = useState(false);

  const copyClick = () => {
    setCopied(true);
  };

  return (
    <div className="result-card">
      <p className='result-text'>Сокращенная ссылка:  {shortUrl}</p>
      <CopyToClipboard text={shortUrl} onCopy={copyClick}>
        <button className='copy-button'>
          {copied ? 'Скопировано!' : 'Копировать'}
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default ResultCard;