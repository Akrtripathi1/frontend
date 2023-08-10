import React, { useState } from 'react'

const Statemanagement = () => {

    const [likes, setlikes] = useState(0);


    let count=1;

    const [img, setImg] = useState('');


  return (
    <div>
        <div className="container">
            <h1>State Management</h1>
    <hr />

    <h1>Count :{count}</h1>

    <button className='btn btn-primary mt-5' onClick={() => {count++; console.log(count);}}>
        Add count</button>

            <h1>Likes: {likes}</h1>
            <button className='btn btn-danger mt-5' onClick={() => {setlikes(likes+1);}}> Add Likes</button>


            <button className='btn btn-danger mt-5' onClick={() => {setlikes(0);}}> Reset</button>

            <input type="text" style={{textOverflow:'ellipsis'}} className='form-control' onChange={(e)=>setImg(e.target.value)} />


            {/* <h1>{img}</h1> */}
            <img src={img} alt="" />

        </div>

    </div>
  )
}

export default Statemanagement