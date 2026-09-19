import React from 'react'
import './slideProduct.css'

function SlideProductLoading() {
  return (
    <div className='loadingSlideProduct'>
        <div className="container">
            <div className="topSlide">
                <h2 className='skeltion'></h2>
                <p className='skeltion'></p>
            </div>
            <div className="productsLoading">
                <div className="product">
                    <div className="imgProduct skeltion"></div>
                    <div className="content skeltion"></div>
                    <div className="content skeltion"></div>
                </div>
                <div className="product">
                    <div className="imgProduct skeltion"></div>
                    <div className="content skeltion"></div>
                    <div className="content skeltion"></div>
                </div>
                <div className="product">
                    <div className="imgProduct skeltion"></div>
                    <div className="content skeltion"></div>
                    <div className="content skeltion"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SlideProductLoading