import React from 'react'

const Login = () => {
  return (
    <div className='bg-dark d-flex justify-content-center align-items-center font-family-Poppins vh-100'>
       <div className='card col-lg-3 col-md-6 col-sm-10 p-5 bg-light'>
       <img className='w-25 d-block m-auto' src="download.webp " alt="" />
          <h3 className='text-center text-bold'>Log In</h3>
        <form action="">
        <label className='mt-2 py-1' > User Id</label> 
         <input className='form-control ' type="text" />
         <label className='py-1 mt-2' > Password</label>
         <input className='form-control p-2' type="password" required/>
         <button className='btn btn-dark text-center mt-3 form-control'>Submit</button>
        </form>
        </div>
       </div>
        
  )
}

export default Login