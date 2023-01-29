import React, { Component } from 'react'
export default class home extends Component {
    
    
  render() {
    const {price,title,img}=this.props.product;
    return (
      <div className='item'>
        <div className='upper-part'>
          <img src={img} />
        </div>
        <div className='lower-part'>
          <div>{title}</div>
          <div>{price}</div>
          <div className='cart-item-actions'>
            <img alt="small" className='item-action'
            src='https://img.theloom.in/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/p/spp31133_1.jpg'
            // onClick={changeStyle}
            />
            <img alt='medium' className='item-action'
            src='https://lmsin.net/cdn-cgi/image/h=730,w=540,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011902396-Blue-Teal-1000011902396_01-2100.jpg'
            // onClick={changeStyle}
            />
            <img alt='large' className='item-action'
            src='https://images.unsplash.com/photo-1614634717465-eb3d6bc8d930?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNhbmRhbHN8ZW58MHx8MHx8&w=1000&q=80'
            // onClick={}
            />
            <img alt='rating' className='item-action'
            src='https://www.rebelathletic.com/media/catalog/product/cache/5be406c7e91a99e368db87ce042e68dd/_/r/_rr1525_crystal_couture_athens_dress-e_4.jpg'
            />
            <div>BUY+</div>
          </div>
        </div>
      </div>
    )
  }
}