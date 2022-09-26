import React from 'react'
import "./LoginPage.css"
import {Link} from 'react-router-dom';


export default function LoginPage() {
  return (
    <div className='Background'>
    <div className="Auth-form-container">
      <form className="Auth-form1">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            {/* <label>Email address</label> */}
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            {/* <label>Password</label> */}
            <input
              type="password"
              className="form-control mt-4"
              placeholder="Enter password"
            />
          </div>
          {/* To re-direct towards the new Page */}
          <div className="d-grid gap-2 mt-4">
            <Link button type="submit" className="btn btn-primary" to="/userhome">
              Submit
            </Link>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="/">password?</a>
          </p>
        </div>
      </form>
    </div>
    </div>

  )
}
