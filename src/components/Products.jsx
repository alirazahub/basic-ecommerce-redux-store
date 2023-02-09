import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Product from './Product'
import axios from 'axios'
import { setProducts } from '../redux/actions/productActions'

function Products() {
    const dispatch = useDispatch()

    useEffect(() => {
        const getProducts = async () => {
            const res = await axios.get('https://fakestoreapi.com/products').then(res => res.data)
                .catch(err => console.log(err))

            dispatch(setProducts(res))
        }
        getProducts()

    }, [dispatch])
    return (
        <div>
            <Product />
        </div>
    )
}

export default Products
