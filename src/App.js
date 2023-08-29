import React, { useState } from 'react';
import InputForm from './Components/InputForm/InputForm';
import ResultCard from './Components/ResultCard/ResultCard';
import './App.css';

const App = () => {
  const [shortUrl, setShortUrl] = useState('');

  const handleShorten = (url) => {
    setShortUrl(url);
  };

  return (
    <div className="App">
      <h1>Сокращение ссылок</h1>
      <InputForm onShorten={handleShorten} />
      {shortUrl && <ResultCard shortUrl={shortUrl} />}
    </div>
  );
};

export default App;