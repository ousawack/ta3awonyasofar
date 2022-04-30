
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Product from '../components/Product'
import '../style/Vitrine.css'

function Vitrine() {
  return (
    <div>
        <div className="row container mx-auto my-4">
            <Breadcrumb/>
            <Product/>
            <Product/>
            <Product/>
        </div>
        <nav aria-label="Page navigation example">
            <ul className="m-auto my-4 w-mc pagination">
                <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
                </li>
            </ul>
        </nav>
    </div>

  );
}

export default Vitrine;