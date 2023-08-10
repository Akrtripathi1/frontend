import React from 'react'

const EventHandeling = () => {
  return (
    <div>
        <div className="container">

            <h1 className='text-center'>Event Handling</h1>

            <hr />

            <h2>Click Event Handling</h2>
            <button className='btn btn-primary' onClick={ () => {alert('button was click')}}>Click event</button>

            <input className='form-control' type="text" onChange={(e)=>{console.log(e.target.value)}} />

            <input type="color" className='mt-5' onChange={(e)=>{document.body.style.background=e.target.value}} />

            <input type="file" className='form-control mt-5' multiple2 onChange={(e)=>{console.log(e.target.file);
            }} />
        </div>



    </div>
  )
}

export default EventHandeling