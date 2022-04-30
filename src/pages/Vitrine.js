
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Product from '../components/Product'
import Pagination from '../components/Pagination'
import '../style/Vitrine.css'

function Vitrine() {
  return (
    <div>
        <div className="row container mx-auto my-4">
            <Breadcrumb/>
            <Product/>
            <Product/>
            <Product/>
            <Pagination/>
        </div>
    </div>

  );
}

export default Vitrine;