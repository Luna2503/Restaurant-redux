import React from 'react'
import {Row,Col} from 'react-bootstrap'
import RestCard from '../components/RestCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestaurant } from '../redux/restaurantSlice';
import { useEffect } from 'react';

function Home() {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(fetchRestaurant())
  },[])
  const allRestaurant=useSelector((state)=>state.restaurantSlice.allRestaurant.restaurants);
  console.log('1',allRestaurant);
  return (
    <div>
      <Row>{
        allRestaurant?.length>0?
        allRestaurant.map((restaurant)=>(
          <Col className='px-5 py-3 ' sm={3} md={3} lg={4}>
          <RestCard restaurant={restaurant}/>
        </Col>
        )):
        <p>No Restaurant Found</p>
        }
        
      </Row>
    </div>
  )
}

export default Home