import React, { useState } from 'react'; //every import is a chunks
import data from './data.json';
import Loader from './loader';
import logo from '../../images/platzi.png';
import video from '../../video/que-es-core.mp4';
import '../../sass/sass.scss';
import '../../less/less.less';
import '../../stylus/stylus.styl';
console.log(data);
function App() {
  const [loaderList, setLoaderList] = useState([]);
  async function handleClick() {
    setLoaderList(data.loaders);
    const { alerta } = await import('./alert.js');
    alerta('OMG! This module has been loaded dynamically');
  }
  return (
    <div>
      <p className='sass'>This is Sass!</p>
      <p className='less'>This is Less!</p>
      <p className='stylus'>This is Stylus!</p>
      <p className='postcss'>This is PostCss!</p>

      <div>Hi Human! I'm React!</div>
      <video src={video} width={360} controls poster={logo}></video>
      <p>
        <img src={logo} alt='' width={40} />
      </p>
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
