import React, {useState} from 'react';
import './App.css';
import Pixel from './Pixels/Pixel';
import WhitePixels from './Pixels/WhitePixels'

function App(props) {
  const [currentColor, setCurrentColor] = useState('#fff');
  let spaceArr;
  const takeColor = (color) => {
    setCurrentColor(color);
    window.currentColor=currentColor;
    spaceArr = props.whitePixels.map( p => <WhitePixels id={p.id} backColor={p.backColor} takeColor={currentColor} />)
  }
    
    let pixelsArr = props.state.map( p => <Pixel id={p.id} backColor={p.backColor} changeColor={props.changeColor} takeColor={takeColor}/>)
    spaceArr = props.whitePixels.map( p => <WhitePixels id={p.id} backColor={p.backColor} takeColor={currentColor} />)


  
  return (
    <div className='app-wrapper'>
      <div className='pageLoad'>

        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div> 
        <div>Please wait</div>
      </div>
      
      {/* <div className='header'>
        <img src='https://i.imgur.com/yPd9FdW.png' alt='pines'></img>
        <div className='colors'>{pixelsArr}</div>
        <div className='button' onClick={() => window.location.reload(false)}>Clear</div>
      </div>
      <div className='artBody'>
        <div id='mycanvas' className='place'>{spaceArr}</div>
        <div className='button'>Download</div>
        <div className='text'>Turio created. Ⓒ 2020</div>
      
      </div> */}
     </div> 
  );
}

export default App;
