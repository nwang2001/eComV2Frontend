import React, { useEffect, useState } from "react";
import '../css/Store.css';
import Header2 from "./Header2";
import Footer2 from "./Footer2";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [sortBy, setSortBy] = useState('default');
    const [filterCategory, setFilterCategory] = useState('all');

    useEffect(() => {
        console.log('Fetching data...');
        fetch('https://ecommerce-v2-backend.onrender.com/store')
            .then(response => response.json())
            .then(data => {
                console.log('Data received:', data);
                setProducts(data);
            })
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    const filteredProducts = products
        .filter(product => filterCategory === 'all' || product.category === filterCategory)
        .sort((a, b) => {
            if (sortBy === 'lowestToHighest') {
                return a.price - b.price;
            } else if (sortBy === 'highestToLowest') {
                return b.price - a.price;
            } else {
                return 0;
            }
        });

    const handleSortChange = event => {
        setSortBy(event.target.value);
    };

    const handleCategoryChange = event => {
        setFilterCategory(event.target.value);
    };

    return (
        <div className="body">
            <Header2 />
            <div className="store">
            <main>
                <h1>Shop our products!</h1>
                <div className="filter-options">
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <label htmlFor="sortBy">Sort by Price:</label>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <select id="sortBy" value={sortBy} onChange={handleSortChange}>
                        <option value="default">Default</option>
                        <option value="lowestToHighest">Low to High</option>
                        <option value="highestToLowest">High to Low</option>
                    </select>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <label htmlFor="filterCategory">Filter by Category:</label>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <select id="filterCategory" value={filterCategory} onChange={handleCategoryChange}>
                        <option value="all">All</option>
                        <option value="Art Mediums">Art Mediums</option>
                        <option value="Ceramics">Ceramics</option>
                        <option value="Surfaces">Surfaces</option>
                        <option value="Tools">Tools</option>
                        <option value="Other Supplies">Other Supplies</option>
                    </select>
                </div>
                <div className="productGrid">
                    {filteredProducts.map(product => (
                        <div key={product.id} className="item">
                            <img src={`${product.image}`} alt={product.name} />
                            <h2>{product.name}</h2>
                            <h2>${product.price}</h2>
                            <p>{product.description}</p>
                        </div>
                    ))}
                </div>
            </main>
            </div>
            <Footer2 />
        </div>
    );
};

export default Products;
