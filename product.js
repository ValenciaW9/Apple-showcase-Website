import React from 'react';
import Product from './product'; // Adjust the path as per your directory structure

function App() {
    // Example product data
    const product = {
        name: 'Example Product',
        price: 99.99,
        description: 'This is an example product description.'
    };

    return (
        <div className="App">
            <h1>My Product Showcase</h1>
            <Product
                name={product.name}
                price={product.price}
                description={product.description}
            />
        </div>
    );
}

export default App;
