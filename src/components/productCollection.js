import React, { useState } from 'react';
import FilterSidebar from './filterSidebar';
import ProductTable from './productTable';

const ProductCollection = (props) => {
    const [filterData, setFilterData] = useState({
        animalName: '',
        price: '',
        subscription: ''
    });

    const filterHandler = (data) => {
        console.log('data', data)
        setFilterData({...data})
    };

    return (
        <div style={{display: 'flex'}}>
            <div style={{flexGrow: '1'}}>
                <FilterSidebar filter={filterHandler}/>
            </div>
            <div style={{flexGrow: '3'}}>
                <ProductTable filterData={filterData}/>
            </div>
        </div>
        
    )
};

export default ProductCollection;
