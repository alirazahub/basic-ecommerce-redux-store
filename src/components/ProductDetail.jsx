import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { selectedProduct, removeSelectedProducts } from '../redux/actions/productActions';

function ProductDetail() {
    const { productId } = useParams();
    const product = useSelector(state => state.product)
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchProductDetail = async () => {
            const res = await axios.get(`https://fakestoreapi.com/products/${productId}`).then(res => res.data)
                .catch(err => console.log(err))
            dispatch(selectedProduct(res))
        }
        if(productId && productId !== ''){
            dispatch(removeSelectedProducts())
            fetchProductDetail()
        }
    }, [productId])
  return (
    <div>
        {Object.keys(product).length === 0 ? (
            <div className='text-center h2 fw-bold'>...Loading</div>
        ) : (
        <div className="card">
            <div className="card-body">
                <div className="fw-bold d-flex justify-content-between card-title">
                    <div>{product.title}</div>
                    <div>{product.category}</div>
                </div>
                <div className='d-flex justify-content-between'>
                    <img src={product.image} alt={product.title} className="imgsss card-img-top" />
                    <button className='btn btn-outline-warning'>Delete Product</button>
                </div>
                <div className="card-text">{product.description}</div>
                <div className="card-text d-flex justify-content-between">
                    <div className="fw-bold">Price: ${product.price}</div>
                    <div className="fw-bold">Rating: {product.rating.rate}</div>
                    <div className="fw-bold">Total Rating: {product.rating.count}</div>
                </div>
            </div>
        </div>
        )}
    </div>
  )
}

export default ProductDetail
