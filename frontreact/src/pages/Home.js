import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import {Card} from '../components/Card';
import axios from 'axios'

export const Home = ({ searchKey }) => {
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
    <section id='home'>
      <div className='home-container'>
        <h1>
          <FormattedMessage id={"gallery"}/>
        </h1>
        <div className='home-card'>
          {products.map((e, i) => (
              <Card
                  key={i}
                  name={e.name}
                  picture={e.picture}
                  price={e.price}
                  isActive={e.isActive}
              />
          ))}
        </div>
      </div>
    </section>
  );
};
