const React = require('react');

function Product({ name, description, image }) {
    return (
        React.createElement('div', { className: 'product' },
            React.createElement('img', { src: image, alt: name }),
            React.createElement('h2', null, name),
            React.createElement('p', null, description)
        )
    );
}

module.exports = Product;