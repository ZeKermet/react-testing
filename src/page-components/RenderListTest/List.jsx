import styles from './List.module.css'

function List() {
    const fruits = [
        {name: 'apple', color: 'red', calories: 29}, 
        {name: 'banana', color: 'yellow', calories: 48}, 
        {name: 'pineapple', color: 'yellow', calories: 99}
    ];

    const orderedFruits = fruits.filter(fruit => fruit.calories < 80);

    // Filter Test
    const listElems = orderedFruits.map(fruit => 
        <li className={styles.listElems} key={fruit.name}>
            A {fruit.name} is {fruit.color} with {fruit.calories} calories
        </li>
    );

    return(
        <ul>{listElems}</ul>
    )
}

export default List