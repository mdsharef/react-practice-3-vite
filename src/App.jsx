import React, { useState } from 'react';

const productList = [
    {
        id: 111221,
        productName: 'Keyboard',
        price: 2000,
        stock: 10
    },
    {
        id: 111222,
        productName: 'Mouse',
        price: 1500,
        stock: 8
    },
    {
        id: 111223,
        productName: 'Headphone',
        price: 2500,
        stock: 15
    },
    {
        id: 111224,
        productName: 'Mobile',
        price: 2300,
        stock: 12
    }
]

const RowList = ({ id, productName, stock, price, quantity, total, increment, decrement }) => {
    return (
        <tr>
            <th>{id}</th>
            <th>{productName}</th>
            <th>{stock}</th>
            <th>{price}</th>
            <th>{quantity}</th>
            <th>{total}</th>
            <th>
                <button 
                    onClick={()=> increment(id)} 
                    disabled={quantity == stock}
                >
                        +
                </button>
                <button 
                    onClick={()=> decrement(id)} 
                    disabled={quantity == 0} 
                >
                    -
                </button>
            </th>
        </tr>
    )
}

const App = () => {
    const [products, setProducts] = useState(
        productList.map(item => (
            {
                ...item,
                quantity: 0,
                total: 0
            }
        ))
    )

    function incrementQuantity(id) {
        setProducts(products.map(product => {
            if(product.id == id && product.quantity < product.stock) {
                product.quantity++;
                product.total = product.quantity * product.price;
            }
            return product;
        }));
    }

    function decrementQuantity(id) {
        setProducts(products.map(product => {
            if(product.id == id && product.quantity > 0) {
                product.quantity--;
                product.total = product.quantity * product.price;
            }
            return product;
        }));
    }

    const total = products.reduce((acc, cur) => acc = acc + cur.total, 0)

  return (
    <div>
        <h1>Product List</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Stock</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => (
                        <RowList 
                            key={product.id} 
                            {...product} 
                            increment={incrementQuantity} 
                            decrement={decrementQuantity} 
                        />
                    ))
                }
            </tbody>
        </table>
        {total > 0 && <p>Total = {total}</p>}
    </div>
  )
}

export default App;