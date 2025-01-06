import styles from "./PropsTest.module.css"
import reactLogo from "../../assets/reactLogo.png"
import PropTypes from "prop-types"
import React, {useState} from 'react'

Card.propTypes = {
    name: PropTypes.string
}


function Card({name = "Test name here"}) {
    return(
        <div className={styles.card}>
            <img src={reactLogo} />
            <h3>{name}</h3>
        </div>
    );
}

function CardButton({clickEvent}) {
    return (<button className={styles.button} onClick={(clickEvent)}>Add Card</button>)
}

export default function CardsContainer({list = [{name: "Test"}, {name: "Test No 2"}]}) {
    const [objs, setObjs] = useState(list);
    const handleClick = () => {
        setObjs(prev => [...prev, {name: "Screeee!!!"}]);
    }

    const cardElems = objs.map((obj, i) => 
        <Card name={obj.name} key={i} />
    );
    return(
        <>
            <div className={styles.cardsContainer}>{cardElems}</div>
            <CardButton clickEvent={handleClick}/>
        </>
    );
}


