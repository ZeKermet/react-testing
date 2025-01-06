import React, {useState} from 'react'
import styles from './StateButton.module.css'

export function StateButton() {
    let color = ['#b6601a', '#4d2200'];
    const colorStyle = (color) => { 
        return({
            background: color,
            border: `1px solid ${color}`,
        });
    }

    const [isActive, setIsActive] = useState(false);
    const updateState = () => {
        setIsActive(!isActive);
    }

    let num = !isActive ? 0 : 1;

    return(
        <button 
            className={styles.button}
            style={!isActive ? colorStyle(color[1]) : colorStyle(color[0])} 
            onClick={updateState}
        >
            State Number {num}
        </button>
    );
}

// Testing onChange
export function ChangeDropdown() {
    let [color, setColor] = useState("#5d5dff");
    let [value, setValue] = useState("Perhaps");

    const handleChange = (e) => {
        setColor(color === "#5d5dff" ? "#156805" : "#5d5dff");
        setValue(e.target.value);
    }

    return(
        <>
            <p className={styles.p}>{value}</p>
            <select className={styles.select} onChange={handleChange} style={{background:`${color}`}}>
                <option value="Perhaps">Perhaps</option>
                <option value="Not Perhaps">Not Perhaps</option>
                <option value="Maybe">Maybe</option>
            </select>
        </>
        
    )
}