import React from 'react';

const Pixel = (props) => {
    let pixelColor=props.backColor;
    let styles = {
        pixel: {
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            width:'20px',
            height:'20px',
            marginTop:'5px',
            marginRight:'5px',
            marginBottom:'5px',
            marginLeft:'5px',
            backgroundColor:pixelColor
        }
    }
    return(
       <div onClick={() => props.takeColor(pixelColor)} style={styles.pixel}>
       </div>
    );
    
}

export default Pixel;