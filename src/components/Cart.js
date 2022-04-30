import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import '../style/Cart.css'
import {FaPlus , FaMinus } from 'react-icons/fa'

function Cart() {
    return (
        
    <div className="m-5 pb-5 row">
        <div className="col-12 pb-5 col-md-8">
            <h3 className="m-0 p-3 border-bottom text-large text-black">
                Shopping bag
            </h3>
            
            <div className="d-flex border-bottom">
                <img src="logo512.png" height="70" width="70" alt="" className="avatar m-3" />
                <div className="m-4 w-100">
                    <h3 className="col-md-6">Product Name</h3>
                    <div className="w-mc ms-auto me-0 d-flex text-small">
                    <label>Quantity:</label>
                    <FaPlus className="ms-4"/>
                    <input className='text-center' type="text"  value="1" id="quatity" />
                    <FaMinus className="ms-4"/>
                    </div>
                    <p className="text-end text-small">$25.00</p>
                </div>
            </div>
        </div>
        <div className="col-12 col-md-4">
            <h3 className="m-0 p-3 border-bottom text-large text-black">
                Order validation
            </h3>
            <div className=' m-3'>

                <div className="d-flex mt-5">
                    <p className="text-small">Command price:</p>
                    <p className="ms-auto me-0 text-small">$305.00</p>
                </div>
                <div className="d-flex">
                    <p className="text-small">TVA:</p>
                    <p className="ms-auto me-0 text-small">$05.00</p>
                </div>
                <div className="d-flex">
                    <p className="text-small">Shipping:</p>
                    <p className="ms-auto me-0 text-small">$50.00</p>
                </div>
                <div className="text-glaucous d-flex">
                    <p className="text-large">Total:</p>
                    <p className="ms-auto me-0 fs-3">$340.00</p>
                </div>

                <button className="bg-light-sky-blue btn rounded-0 w-100 fw-bold text-light p-3">Validate</button>
            </div>
        </div>
    </div>

    );
}
export default Cart;