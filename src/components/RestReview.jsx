import React from 'react'
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
function RestReview({selectedRestaurant}) {
    const [open, setOpen] = useState(false);

  return (
    <><button onClick={() => setOpen(!open)} className='btn btn-warning ms-3'>Click here to see reviews</button>
          <Collapse in={open}>

    <div className='my-2'>
        <hr />
        {
          selectedRestaurant[0]?.reviews.length>0?
          selectedRestaurant[0].reviews.map(item=>(
            <div>
            <h6>Name:{item.name}</h6>
            <h6>Rating:{item.rating}</h6>
            <h6>Description:{item.comments}</h6>
            <br />
            </div>
          )):
          <p>No reviews found.</p>
        }
            </div>
            </Collapse>
            </>
           
  )
}

export default RestReview