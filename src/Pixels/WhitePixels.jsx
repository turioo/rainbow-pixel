import React, {useState} from 'react';

const Pixel = (props) => {
    const [pixelColor, setPixelColor] = useState(props.backColor);
    let styles = {
        pixel: {
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            width:'40px',
            height:'40px',
            backgroundColor:pixelColor,
            padding:'0',
            margin:'0'
        }
    }
    console.log(props.takeColor);
    let newColor = () => {
        setPixelColor(props.takeColor);
    }
    return(
       <div onClick={() => newColor()} style={styles.pixel}>
       </div>
    );
    
}

export default Pixel;