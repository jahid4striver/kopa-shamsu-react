import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card/Card";
import Navbar from "./Navbar/Navbar";
import Modal from 'react-modal';
import Cart from "./Cart/Cart";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

function App() {
const [guns, setGuns]=useState([]);
const [cart, setCart]= useState([]);
const [modalIsOpen, setIsOpen] = useState(false);

function openModal() {
  setIsOpen(true);
}

function closeModal() {
  setIsOpen(false);
}

console.log(cart);

const handleAddtoCart= (gun)=>{
  const newCart= [...cart, gun];
  setCart(newCart);
  // console.log(newCart);
}

// console.log(guns);
useEffect(()=>{
  fetch('https://raw.githubusercontent.com/mir-hussain/kopa-samsu-practice/main/public/data.json')
  .then(res=> res.json())
  .then(data=> setGuns(data))
},[])

  return (
    <div>
      <Navbar cart={cart} openModal={openModal} />
      
      
      <div className="card-container">
      {
        guns.map((gun)=><Card
        key={gun.id}
        gunData={gun}
        handleAddtoCart= {handleAddtoCart}
        />)
      }
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>Close</button>
        <div>
        {
          
          cart.map((item)=> <Cart item={item}></Cart> )
        }
      </div>
      </Modal>
    </div>
  );
}

export default App;
