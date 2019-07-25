// Dependencies
import React, {Component} from 'react';
import logo from '../../hamburguesa.svg'
import {db} from '../../data/firebaseInit';
//Components

//import Button from '../elements/button'
// assets
import '../../components/components.css'

//data
const menuJson = require('../../data/menu.json')


// Class components
class Waitress extends Component {
  constructor(){
    super();
    this.state = {
      menuBf: menuJson.Breakfast,
      orders: [],
      totalPrice: 0,
      productOrder:" ",
      
  
    }

  }

  handleClick(i) { // select menu
    this.setState({
        orders: this.state.orders.concat([i])
        
    });
   
const total = this.state.orders.concat([i]).reduce((prevVal, currentVal) => { return this.state.totalPrice + currentVal.price }, 0)
  // const currentOrder = i.product
 const currentOrder = this.state.orders.concat([i]).reduce(() => { return this.state.productOrder + " - " + i.product}, " ")

    this.setState({
        totalPrice: total,
        productOrder: currentOrder

    })
    
} // fin select menu

sendClick(){ //enviar data a firestore
  
  this.setState({
    orders: [],
    totalPrice: 0,
    productOrder:" ",
  })
  console.log(this.state.orders)
  if(this.state.orders !== [{}]){
    db.collection("orders").add({
      orders:this.state.orders,
      totalPrice: this.state.totalPrice,
      productOrder: this.state.productOrder
    }).then(()=>{
      alert("Sending to kitchen");
      })
  .catch (()=>{
      alert("Failed to send");
  })
  } else {
    alert("Debes ingresar una orden")
  }
  
      
} // fin de sendClick

deleteClick(id){
  const orders= this.state.orders;
  if(id === id){
    orders.splice(id, 1);
 }
this.setState({
  orders: this.state.orders,
  totalPrice: this.state.totalPrice
  })
}
  
  render() {
const menuBreakfast = this.state.menuBf.map((element, index)=>{
      
      return (  
      
        <div className="card col-sm-12 col-md-4 col-lg-2 mt-4">
        <img src={element.img} className="card-img-top" alt="burger"></img>
        <div className="card-body">
        <h5 className="card-title">{element.product}</h5>
        <p className="card-text">Precio : $ {element.price}</p>
        <button onClick={()=>this.handleClick(element)} className="btn btn-danger" key={index}>Seleccionar
        </button>
  </div>
</div>
       

      )
})

const printMenu = this.state.orders.map(element=>{

  return(
<div>
<p>{element.product} <span className="close" role="img" aria-label="sheep" onClick={() => this.deleteClick(element)}>
      ❌</span></p>
      
</div>
  )
})

    return (
      <div>
 <div className="row">
        { menuBreakfast }
        </div>
<div className="print-order">

Total del pedido: {this.state.totalPrice} 
                        <br></br>
                        Productos: 
                     {printMenu}   
                        
                        <br></br>
                        <button onClick={()=>this.sendClick()} className="btn btn-danger">Enviar a cocina
        </button>
</div>

      
      </div>
     
  );
  }
    

}

export default Waitress;