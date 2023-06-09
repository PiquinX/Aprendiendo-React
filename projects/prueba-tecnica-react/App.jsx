import { useState, useEffect } from 'react';
import { useCatImg } from './hooks/useCatImage';
import { useCatFact } from './hooks/usecatFact';

// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
export default function App() {
  const { fact, refreshFact } = useCatFact()
  const { finalResult } = useCatImg({ fact })



  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>New content</button>
      {fact && <p>{fact}</p>}
      {finalResult && <img src={finalResult} alt={`img obteined using only the three first words of this fact : ${fact}`}></img>}
    </main>
  )
}