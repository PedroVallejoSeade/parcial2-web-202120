import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import axios from 'axios'
import {Chart} from '../components/Chart'

export const Report = ({ searchKey }) => {
  const [products, setProducts] = useState([]);

  const url = `http://localhost:3001/api/products?q=${searchKey}`;

  useEffect(() => {
    fetchProducts()
  }, [searchKey])

  const fetchProducts = () => {
    axios.get(url)
    .then(function (response) {
      setProducts(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  return (
    <section id='report'>
      <div className='report-container'>
        <h1>
          <FormattedMessage id={"inventory"}/>
        </h1>
        <Chart data = {products}></Chart>
      </div>
    </section>
  );
};
