import React from 'react'
import { Link } from 'react-router-dom'

export default function Filter() {
  return (

    <div className="filterTotal">
        <div className="filter">
                  <button className='btnFilter'>
                      <Link className="dropdown-filter" to={'/categoria/Argentina'}>Argentina</Link>
                  </button>
                  <button className='btnFilter'>
                      <Link className="dropdown-filter" to={'/categoria/Brasil'}>Brasil</Link>
                  </button>
                  <button className='btnFilter'>
                      <Link className="dropdown-filter" to={'/categoria/Portugal'}>Portugal</Link>
                  </button>
                  <button className='btnFilter'>
                      <Link className="dropdown-filter" to={'/categoria/Francia'}>Francia</Link>
                  </button>
                  <button className='btnFilter'>
                      <Link className="dropdown-filter" to={'/categoria/Legendarias'}>Premium</Link>
                  </button>
        </div>
    </div>
        
  )
}
