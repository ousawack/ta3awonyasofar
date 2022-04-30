
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import {HiShoppingCart ,HiEye} from 'react-icons/hi'
import {FaPlus ,FaStar } from 'react-icons/fa'

function Product() {
  return (
    <div className="col-md-3">
        <div className="shadow p-2 mb-5 bg-body ">
            <div className="product-top">
                <div className="overlay">
                    <img src="logo512.png" className="card__image"/>
                    <div className="card__overlay">
                        <div className='px-2 w-100'>
                            <button title="Preview" className="btn p-1 btn-info d-block my-2 bg-light-sky-blue text-white fw-bold" >
                                <HiEye/>
                            </button>
                            <button title="Add to cart" className="btn p-1 btn-info d-block my-2 bg-light-sky-blue text-white fw-bold" >
                                <FaPlus/>
                            </button>
                            <button title="Buy" className="btn p-1 btn-info d-block my-2 bg-light-sky-blue text-white fw-bold" >
                                <HiShoppingCart color='white'/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-bottom text-center">
                <FaStar color="rgb(230, 214, 96)"/>
                <FaStar color="rgb(230, 214, 96)"/>
                <FaStar color="rgb(230, 214, 96)"/>
                <FaStar color="rgb(230, 214, 96)"/>
                <FaStar color="rgb(230, 214, 96)"/>
                <a className='link' href="#">
                <h3 className="fs-6 text-glaucous">Product Name</h3>
                </a>
                <h5 className='text-small'>$20.00</h5>
            </div>
        </div>
    </div>

  );
}

export default Product;