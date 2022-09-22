import React from 'react'
import  "./SignUp.css"
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='BackgroundSup'>
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="name"
              className="form-control mt-1"
              placeholder="Enter full name"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter Password"
            />
          </div>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="username"
              className="form-control mt-1"
              placeholder="Enter username"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
             <Link to="/">Terms and Conditions</Link>
          </p>
        </div>
      </form>
    </div>
    </div>
  )
}
