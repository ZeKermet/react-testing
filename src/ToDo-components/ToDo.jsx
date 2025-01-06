import styles from './ToDo.module.css';
import React,  {useState} from 'react';

function Task({taskString, index, funcs}) {
    return (
        <div className={styles.task} index={index}>
            <p>{taskString}</p>
            <div className={styles.taskShifters}>
                <button className={styles.pushUpBtn} onClick={funcs[1]}>Up</button>
                <button className={styles.pushDownBtn} onClick={funcs[2]}>Down</button>
                <button className={styles.deleteBtn} onClick={funcs[0]}>Delete</button>
            </div>
        </div>
    );
}

export default function ToDo() {
    const [tasksList, setTasksList] = useState(["Sample Task", "Sample Task 2", "Sample Task 3"]);

    const handleSubmit = (e) => {
        const inputValueElem = e.target.parentElement.getElementsByClassName(styles.taskInput)[0];
        const value = inputValueElem.value;
        setTasksList(prev => [...prev, value]);
        inputValueElem.value = "";
    }

    const handleDelete = (e) => {
        let index = parseInt(e.target.parentElement.parentElement.getAttribute('index'));
        const newArray = [...tasksList];
        newArray.splice(index, 1);
        setTasksList(newArray);
    }

    const handleUpShift = (e) => {
        const newArray = [...tasksList];
        let index = parseInt(e.target.parentElement.parentElement.getAttribute('index'));
        if (newArray.length > 1 && index > 0) {
            let tempPrev = newArray[index - 1];
            newArray[index - 1] = newArray[index];
            newArray[index] = tempPrev;
            setTasksList(newArray);
        }
    }

    const handleDownShift = (e) => {
        const newArray = [...tasksList];
        let index = parseInt(e.target.parentElement.parentElement.getAttribute('index'));
        if (newArray.length > 1 && index < newArray.length-1) {
            let tempPrev = newArray[index + 1];
            newArray[index + 1] = newArray[index];
            newArray[index] = tempPrev;
            setTasksList(newArray);
        }
    }

    return(
        <div className={styles.toDo}>
            <h1>To-Do React App</h1>
            <div className={styles.taskInputContainer}>
                <input className={styles.taskInput} placeholder="Enter Task" />
                <button className={styles.submitTaskBtn} onClick={handleSubmit}>Submit</button>
            </div>
            <div className={styles.tasksContainer}>
                {tasksList.map((task, i) => 
                    <Task key={i} taskString={task} index={i} funcs={[handleDelete, handleUpShift, handleDownShift]} />
                )}
            </div>
        </div>
    );
}