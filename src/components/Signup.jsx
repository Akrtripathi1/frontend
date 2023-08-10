import React from 'react'

const Signup = () => {
  return (
    <div className='bg-dark d-flex justify-content-center p-2 font-family-Poppins vh-100'>
       <div className='card col-lg-3 col-md-6 col-sm-10 align-items-center   bg-light'>
       <img className='w-25 d-block m-auto' src="download.webp " alt="" />
          <h3 className='text-center text-bold mb-2'>Sign Up</h3>
        <form action="">
        <label className='mt-2 py-1' > Full Name</label> 
         <input className='form-control p-1 ' placeholder='Full name' type="text" />
         <label className='py-1 mt-2' > E-mail Id</label>
         <input className='form-control p-1' type="email" placeholder='Akr@gamil.com' required/>
         <label className='py-1 mt-2' > Password</label>
         <input className='form-control p-1' type="password" placeholder='Minimum 8 charcters' required/>
         <label className='py-1 mt-2' > Re-Enter-Password</label>
         <input className='form-control p-1' type="password" placeholder='Minimum 8 charcters' required/>
        
         <button className='btn btn-dark text-center mt-2 p-2 mb-2 form-control' type='submit'>Submit</button>
        </form>
        </div>
       </div>
        
  )
}

export default Signup