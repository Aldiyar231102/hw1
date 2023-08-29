import React, { useState } from 'react';
import './InputForm.css';

const InputForm = ({ onShorten }) => {
  const [inputUrl, setInputUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const inputChange = (event) => {
    setInputUrl(event.target.value);
  };

  const shortenUrl = async () => {
    if (inputUrl.trim() === '') return;
    setIsLoading(true);

    try {
      const response = await fetch(`https://clck.ru/--?url=${inputUrl}`);
      const data = await response.text();
      onShorten(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <div className='input-container'>
      <input
        className='input-field'
        type="text"
        value={inputUrl}
        onChange={inputChange}
        placeholder="Вставьте ссылку"
      />
      <button
        onClick={shortenUrl}
        className='input-button'        
      >
        {isLoading ? 'Сокращается...' : 'Сократить'}
      </button>
    </div>
  );
};

export default InputForm;