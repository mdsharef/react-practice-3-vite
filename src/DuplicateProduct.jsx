import React, { useState } from 'react';

// const ListItem = (props) => (
//     <li style={{ listStyleType: 'none', display: 'flex', alignItems: 'center' }}>
//         <input type="checkbox" checked={props.checked} />
//         <p>{props.title}</p>
//         <button style={{ marginLeft: 'auto' }}>Delete</button>
//     </li>
// )

// const taskList = [
//     {
//         id: 1,
//         title: 'Title 1',
//         checked: false
//     },
//     {
//         id: 2,
//         title: 'Title 2',
//         checked: false
//     },
//     {
//         id: 3,
//         title: 'Title 3',
//         checked: false
//     },
//     {
//         id: 4,
//         title: 'Title 4',
//         checked: false
//     },
//     {
//         id: 5,
//         title: 'Title 5',
//         checked: false
//     },
//     {
//         id: 6,
//         title: 'Title 6',
//         checked: true
//     }
// ]

// const taskLi = arrList.map(item => {
//     const li = document.createElement('li');
//     li.innerHTML = item.text;
//     return li;
// })
// console.log(taskLi);

// const App = (props) => {
//   return (
//     <div>
//         <ul>
//             {
//                 taskList.map(
//                     item => <ListItem key={item.id} title={item.title} checked={item.checked} />
//                 )
//             }
//         </ul>
//     </div>
//   )
// }

function ProductItem({ productName, stock }) {
    const [count, setCount] = useState(0);

    function increment() {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    function decrement() {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    return (
        <div>
            <p>{productName}</p>
            <p>{count}/{stock}</p>
            <button onClick={increment} disabled={count == stock} >Increment</button>
            <button onClick={decrement} disabled={count == 0} >Decrement</button>
        </div>
    )
}

const App = (props) => {
    // const [count, setCount] = useState(0);

    // function increment() {
    //     if (count < 10) {
    //         setCount(count + 1);
    //     }
    // }

    // function decrement() {
    //     if (count > 0) {
    //         setCount(count - 1);
    //     }
    // }


    return (
        <div>
            {/* <div>
                <p>Keyboard</p>
                <p>{count}/10</p>
                <button onClick={increment} disabled={count == 10} >Increment</button>
                <button onClick={decrement} disabled={count == 0} >Decrement</button>
            </div> */}

            {/* {count >= 10 && 
                <div>
                    <p>Limit Reached</p>
                </div>
            } */}

            {/* <div>
                <p>Mouse</p>
                <p>{count}/10</p>
                <button onClick={increment} disabled={count == 10} >Increment</button>
                <button onClick={decrement} disabled={count == 0} >Decrement</button>
            </div> */}

            <ProductItem productName="Keyboard" stock='15' />
            <ProductItem productName="Mouse" stock='8' />
            <ProductItem productName="Headphone" stock='0' />
        </div>
    )
}

export default App;