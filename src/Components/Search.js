import React, { useState } from 'react';
import axios from 'axios';
import Result from './Result';
import {ColorRing} from 'react-loader-spinner'

const Search = () => {
  const [searchWord, setSearchWord] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;
      const result = await axios.get(apiUrl);
setResult(result.data[0]);
} catch (error) {
setError(error.message);
} finally {
setLoading(false);
}
}

return (

 <React.Fragment>
<div>
  <div className="nav">
  <h2>Dictionary</h2>
<form onSubmit={handleSubmit} className="search">
<input type="text" value={searchWord} placeholder='Search a word...'
onChange={(e) => setSearchWord(e.target.value)}
/>
<button type="submit"><i className="fas fa-search"></i></button>
</form>
</div>  

      {loading ? (
        <div className='loader'><ColorRing 
        visible={true}
        height="80"
        width="80"
        style= {{
         bacground:"linear-gradiant(to right, white, #0083b0)" 
        }}
         />
         </div>
      ) : (
        <>
        {error ? (
          <div className='error'>An error has occurred: {error}</div>
        ) : (
          <div className='main'>
               {result && <Result result={result} />}
          </div>


   )}
   <footer>
    <p>Made with love &zoba</p>
   </footer>
        </>
      )}
    </div>



 </React.Fragment>

);
};

export default Search;

