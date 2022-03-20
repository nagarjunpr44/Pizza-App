import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <>
    <div className="footer-container">
      <div className="f-left">
        <img className='f-img' src="https://kitchenofyouth.com/wp-content/uploads/2016/08/paleo-pizza-margarita-cropped-vertical-separated-3628.jpg" alt="Image back" />
      </div>
      <div className="f-left">
        <div className="f-card">
        <h2 className="f-items-titlee">The best pizza is here ,with you🤤</h2>
        <h2 className="f-items-title">Find us here👇</h2>
        <p className="items">5, Ram Mansion, Naoroji Frdnjee Street, Colaba
        <br />Mumbai,India
        <br />+1223344556
        </p>
        <p className="items">5, Ram Mansion, Naoroji Frdnjee Street, Colaba
        <br />Mumbai,India
        <br />+1223344556
        </p>
        <p className="items">5, Ram Mansion, Naoroji Frdnjee Street, Colaba
        <br />Mumbai,India
        <br />+1223344556
        </p>
      </div>
      <div className="f-card">
      <h2 className="f-items-title">Wroking Hours</h2>
      <p className="items">Everday <br />
        9:00-22:00
       </p>
      </div>
        </div>
    </div>
    </>
  )
}

export default Footer