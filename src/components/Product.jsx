import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


function Product() {
    const products = useSelector(state => state.allProducts.products)
    return (
        <div className='row'>
            {products.map(product => {
                return (
                    <div key={product.id} className="col-md-4 p-4 my-3 card">
                            <img src={product.image} height={350} alt={product.title} className="card-img-top" />
                            <div className="card-body">
                                <div className='fw-bold card-title'>{product.title}</div>
                                <div className='card-text'>$ {product.price}</div>
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                                <button className="btn btn-primary">Add to Cart</button>
                                <Link className='btn btn-outline-warning' to={`/product/${product.id}`}>View Details</Link>
                            </div>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Product
