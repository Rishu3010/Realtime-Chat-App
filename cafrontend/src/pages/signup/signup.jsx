import React from 'react'
import GenderCheckBox from './GenderCheckBox';

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className='text-3x1 font-semibold text-center text-gray-300'>
                Sign Up
                <span className='text-blue-500'> ChatApp</span>
            </h1>

            <form>
                <div>
                    <label className="label p-2">
                        <span className='text-base label-text'>Email</span>
                    </label>
                    <input type="email" placeholder="Enter Email" className="w-full input input-bordered h-10" />
                </div>
                <div>
                    <label className="label">
                        <span className='text-base label-text'>Full Name</span>
                    </label>
                    <input type="text" placeholder="Enter Email" className="w-full input input-bordered h-10" />
                </div>
                
                <div>
                    <label className="role">
                        <span className='text-base label-text'>Roll</span>
                    </label>
                    <input type="text" placeholder="male or female" className="w-full input input-bordered h-10" />
                </div>
                <div>
                    <label className="label">
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" />
                </div>
                <div>
                    <label className="label">
                        <span className='text-base label-text'>Confirm Password</span>
                    </label>
                    <input type="password" placeholder="Confirm Password" className="w-full input input-bordered h-10" />
                </div>
                <GenderCheckBox />
                {/* <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                    Don't have an account?
                </a> */}
                <button type="submit" className='btn btn-block btn-sm mt-2'>
                    Sign Up
                </button>
            </form>
        </div>
    </div>
  )
}

export default SignUp;