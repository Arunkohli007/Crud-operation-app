import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (

        <div className="main">
            <div className="heading bg-secondary-subtle w-100 text-center">
                <h1>In this App you can add Users, Update & Delete Users.</h1>
            </div>
            <div className='container w-50 mt-5 p-5'>
                <h2 className='text-primary-emphasis'> Read the user Info By: <Link to="/read"><span className='fs-5 text-secondary'>Read data</span></Link></h2>
                <h2 className='text-primary-emphasis'>Create the user Info By: <Link to="/read"><span className='fs-5 text-secondary'>User Create</span></Link></h2>
                <h2 className='text-primary-emphasis'>Update the user Info By: <Link to="/read"><span className='fs-5 text-secondary'>User Update</span></Link></h2>
                <h2 className='text-primary-emphasis'>Search the user InfoBy: <Link to="/read"><span className='fs-5 text-secondary'>User Search</span></Link></h2>
            </div>
        </div>
    )
}
