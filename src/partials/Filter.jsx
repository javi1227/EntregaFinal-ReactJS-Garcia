import React from 'react'
import { Link } from 'react-router-dom'

export default function Filter() {
  return (
    <div className="filter">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Categorias
          </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Link className="dropdown-item" to={'/categoria/1'}>Argentina</Link>
              <Link className="dropdown-item" to={'/categoria/2'}>Brasil</Link>
            </div>
    </div>
  )
}
