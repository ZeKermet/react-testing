import styles from "./ColorPicker.module.css"
import React, {useState} from 'react'

function invertHex(hex) {
    const newHex = hex.replace("#", "");
    return (Number(`0x1${newHex}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase();
}

export default function ColorPicker() {
    const [colorVal, setColorVal] = useState("#222fff");
    const handleColorChange = (e) => {
        setColorVal(e.target.value);
    }

    return(
        <div className={styles.colorPickerContainer}>
            <div className={styles.colorPicker} style={{background: colorVal}}>
                <h3 style={{color: `#${invertHex(colorVal)}`}}>Color Picked:</h3>
                <p style={{color: `#${invertHex(colorVal)}`}}>{colorVal}</p>
            </div>

            <input type="color" onChange={handleColorChange} value={colorVal}/>
        </div>
    );
}