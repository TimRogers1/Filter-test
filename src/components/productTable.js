import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const ProductTable = (props) => {
    
    const [productData, setProductData] = useState([]);
    console.log('filterData in product table', props.filterData)

    const columns = [
        { 
            field: 'id', 
            headerName: 'ID', 
            width: 70
         },
        { 
            field: 'slug', 
            headerName: 'Slug', 
            width: 130 
        },
        { 
            field: 'title', 
            headerName: 'Title', 
            width: 130 },
        {
          field: 'vendor',
          headerName: 'Vendor',
          width: 90,
        },
        {
          field: 'tags',
          headerName: 'Tags',
          width: 160,
        },
        {
          field: 'published',
          headerName: 'Published',
          width: 160,
        },
        {
          field: 'url',
          headerName: 'Url',
          width: 160,
        },
        {
          field: 'image_src',
          headerName: 'Image source',
          width: 160,
        },
        {
          field: 'option_value',
          headerName: 'Option Value',
          width: 160,
        },
        {
          field: 'sku',
          headerName: 'Sku',
          width: 160,
        },
        {
          field: 'price',
          headerName: 'Price',
          width: 160,
        },
        {
          field: 'subscription_discount',
          headerName: 'Subscription discount',
          width: 160,
        },
        {
          field: 'subscription',
          headerName: 'Subscription',
          width: 160,
        }
      ];

    useEffect(() => {
        axios.get('http://localhost:3002/products').then((res) => {
            setProductData(res.data)
    })
    }, []);

    useEffect(() => {
        axios.get('http://localhost:3002/products').then((res) => {
            const value = res.data;
            console.log('value', value)

            const filters = props.filterData

            if (filters.animalName !== '' && filters.price !== '' && filters.subscription !== '') {
              const newValue = value.filter((el) => {
           
                return (

                 el.tags.includes(props.filterData.animalName) && 
     
                el.price === parseFloat(props.filterData.price) &&
     
                String(el.subscription) === props.filterData.subscription
                )
               } 
                
           )
           console.log('newValue', newValue);
          setProductData(newValue);
            }
            else if (filters.animalName !== '' && filters.price === '' && filters.subscription === '') {
              const newValue = value.filter((el) => {
                return el.tags.includes(props.filterData.animalName)
              })
              setProductData(newValue);
            }
            else if (filters.animalName === '' && filters.price !== '' && filters.subscription === '') {
              const newValue = value.filter((el) => {
                return el.price === parseFloat(props.filterData.price)
              })
              setProductData(newValue);
            }
            else if (filters.animalName === '' && filters.price === '' && filters.subscription !== '') {
              const newValue = value.filter((el) => {
                return String(el.subscription) === props.filterData.subscription
              })
              setProductData(newValue);
            }
            else if (filters.animalName !== '' && filters.price === '' && filters.subscription !== '') {
              const newValue = value.filter((el) => {
                return (
                  String(el.subscription) === props.filterData.subscription && el.tags.includes(props.filterData.animalName)
                ) 
              })
              setProductData(newValue);
            }
            else {
              setProductData(value)
            }
        
        
        // const val = value.filter((item)=> props.filterData.animalName.length > 0 ? 
        // item.tags.includes(props.filterData.animalName) ? true : false : true)
      
    })
    }, [props.filterData]);



    return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={productData}
        columns={columns}
        pageSize={12}
        rowsPerPageOptions={[12]}
      />
    </div>
    )
}

export default ProductTable;
