import React from 'react';
import Product from './product'; // Adjust the path as per your directory structure

function App() {
    return (
        <div className="App">
            <header>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/support">Support</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </nav>
            </header>

            <section id="hero">
                <div className="hero-content">
                    <h1>Welcome to Apple Showcase</h1>
                    <p>Explore the latest innovations in technology.</p>
                    <a href="/products" className="btn">Explore Now</a>
                </div>
            </section>

            <section id="products">
                <h2>Featured Products</h2>
                <div className="product-list">
                    <Product name="iPhone 13" description="The latest iPhone with amazing features." image="url_to_iphone_image" />
                    <Product name="MacBook Pro" description="High performance laptop for professionals." image="url_to_macbook_image" />
                </div>
            </section>

            <section id="about">
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo nisl a metus lobortis, eget dignissim nulla iaculis.</p>
            </section>

            <footer>
                <p>&copy; 2024 Apple Showcase. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
