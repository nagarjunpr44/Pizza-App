import React, { useState,useEffect  } from "react";
import "./Card.css";
import AOS from 'aos'
import { addToCart } from "../../Actions/cartActions";
import {useDispatch , useSelector} from 'react-redux'
import 'aos/dist/aos.css';
import { Modal,Button } from "react-bootstrap";

const Card = ({ pizza }) => {

  AOS.init({
    
  })


  const [quantity, setquantity] = useState(1);
  const [varient, setvarient] = useState("small");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const dispatch = useDispatch()
  function addtocart()
  {
    dispatch(addToCart(pizza , quantity , varient))
  }

  return (
    <>
    <div
     data-aos='zoom-in'
      className="shadow-lg p-3 mb-5 bg-white rounded"
      key={pizza._id}
    ></div>
      <div className="card-container">
        <div onClick={handleShow}>
          <img className="card-img" src={pizza.image} alt={pizza.name} />
          <h1 className="card-title">{pizza.name}</h1>
        </div>
        <div className="v-flex w-100">
          <div className="var">
            <h4>Varients</h4>
            <select
              value={varient}
              onChange={(e) => {
                setvarient(e.target.value);
              }}
            >
              {pizza.varients.map((varient) => {
                return <option value={varient}>{varient}</option>;
              })}
            </select>
          </div>
          <div className="quan">
            <h4>Quantity</h4>
            <select
              value={quantity}
              onChange={(e) => {
                setquantity(e.target.value);
              }}
            >
              {[...Array(10).keys()].map((x, i) => {
                return <option value={i + 1}>{i + 1}</option>;
              })}
            </select>
          </div>
        </div>
        <div className="b-flex w-100">
          <h4 className="card-price">
            Price :{pizza.prices[0][varient] * quantity}{" "}
          </h4>
          <button className="btn">Add to cart</button>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{pizza.name}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
          <img className="card-img" src={pizza.image} alt={pizza.name} />
          <p>{pizza.description} </p>
          </Modal.Body>

          <Modal.Footer>
            <button  onClick={handleClose}>Close</button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Card;
