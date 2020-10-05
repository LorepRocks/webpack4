import React, { useState } from 'react';
import data from './data.json';
import Loader from './loader';
console.log(data);
function App() {
  const [loaderList, setLoaderList] = useState([]);
  function handleClick() {
    setLoaderList(data.loaders);
  }
  return (
    <div>
      <div>Hi Human! I'm React!</div>
      <ul>
        {loaderList.map((item) => (
          <Loader {...item} key={item.id} />
        ))}
      </ul>
      <button onClick={handleClick}>Show so far!</button>
    </div>
  );
}

export default App;
