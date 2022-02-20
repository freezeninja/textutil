import React from 'react';
import loader from '../../assest/loader.png'

export default function Loader() {
  return (
    <div className="loader_box">
        <div className="loader">
            <img src={loader} alt="loader" />
        </div>
    </div>
  )
}
