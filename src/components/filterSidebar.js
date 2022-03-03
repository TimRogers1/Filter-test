import React, { useState } from 'react';

const FilterSidebar = (props) => {

    const [animalName, setAnimalName] = useState('');
    const [subscription, setSubscription] = useState('');
    const [price, setPrice] = useState('');


      const animalNameHandler = (event) => {
        setAnimalName(event.target.value);
        const filterObj = {
            animalName: event.target.value,
            price: price,
            subscription: subscription
        };
        props.filter(filterObj);
      };

      const subscriptionHandler = (event) => {
        setSubscription(event.target.value);
        console.log(event.target.value);
        const filterObj = {
            animalName: animalName,
            price: price,
            subscription: event.target.value,
        };
        props.filter(filterObj);
      };

      const priceHandler = (event) => {
        setPrice(event.target.value);
        const filterObj = {
            animalName: animalName,
            price: event.target.value,
            subscription: subscription
        };
        props.filter(filterObj);
      };

      const getFilterData = () => {
        const filterObj = {
            animalName: animalName,
            price: price,
            subscription: subscription
        };
        props.filter(filterObj);
      };



    return (
        <div>
            <div>
                <h1>Sidebar</h1>
            </div>
            <div>
                <h3>Animal Filter</h3>
                <input
                onChange={animalNameHandler}
                type="text"
                placeholder="Enter Animal"/>
            </div>
            <div>
                <h3>Price Filter</h3>
                <input
                onChange={priceHandler}
                type="text"
                placeholder="Enter Price"/>
            </div>
            <div>
                <h3>Subscription Filter</h3>
                <div >
                <input
                    value={"true"}
                    type="radio"
                    name="subscription"
                    checked={subscription==="true" ? true:false}
                    onClick={subscriptionHandler}
                />
                Yes
                <input
                    value={"false"}
                    onClick={subscriptionHandler}
                    type="radio"
                    name="subscription"
                    checked={subscription==="false"? true:false}
                />
                No
                </div>
            </div>
        </div>
    )
};

export default FilterSidebar;
