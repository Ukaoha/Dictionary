import React from 'react';

const Result = ({ result }) => {
  return (
    <div>
    <div className='main-header'>
      <div className="header">
      <h1>{result.word}</h1>
      <div className='audio'>
        {result.phonetics.map((phonetic) => (
          <div key={phonetic.text}>
            <p>{phonetic.text}</p>
            <audio src={phonetic.audio}  controls  />
          </div>
        ))}
        
      </div>
      </div>
      <div className='container'>
        
        {result.meanings.map((meaning) => (
          <div className='container-item' key={meaning.partOfSpeech}>
            <div className="partsofspeech">
            <h2>{meaning.partOfSpeech}</h2>
            </div>
            <div className="meaning">
                {meaning.definitions.map((definition) => (
              <div className='main-meaning' key={definition.definition}>
                <h3><i className="fas fa-angle-right"></i> {definition.definition}</h3>
                <p>{definition.example}</p>
                </div>
                

            ))}
            </div>

          </div>
        
        ))}
      
         </div>

      </div>
    </div>
    // </div>
  );
};

export default Result;
