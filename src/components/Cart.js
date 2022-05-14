import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {addCart, deleteProduct,deleteAllProduct } from '../redux/actions';{/*use actions from redux */}


function Cart( props ) {
  let buys = props.handleCart;
 
  {/*use for closing buy located in right side*/}
  const closeItem = (item) => {
    
    props.deleteAllProduct(item);
  };
  //function for add and subtract product in button click
  const addQuantity = (item) => {
    
    props.addCart(item);
  }
  //
 const decreaseQuantity = (item) => {
    
   props.deleteProduct(item);
}

  //Use for get data from localstorage in initial
 useEffect(() => {
    const stringfiedBuys = localStorage.getItem("buys");
   const buys = JSON.parse(stringfiedBuys);
   
  }, []);



  useEffect(() => {
    const temp = JSON.stringify(buys);
    {/*information convert to string and put them in to key word*/}
    localStorage.setItem("buys", temp);

  }, [buys]);
 

// use this help function for show items in cart
  const renderCart = buys.map((buy) =>
    <div key={buy.id} className="container mt-2 py-1 d-flex flex-row border border-2" style={{ backgroundColor: '#faf9f7',width:'75%' }}>
         
      <div className="card py-2  " style={{ width: '15rem' }}>
        <img src={buy.image} className="card-img-top mx-auto" style={{ width: '100%' }} />
        </div>
      <div className=" mt-2 py-2 mx-5 d-flex flex-column justify-content-between" >
        <h1 className="mb-1 fs-3 fw-bold mt-2">{buy.title}</h1>
        <p className="fs-4  lead mt-4 ">price of each number:  ${buy.price} </p>
        <div className='d-flex'>
        <div className="btn-group" role="group" aria-label="Second group"  >
            <button type="button" className="btn btn-outline-dark" onClick={() => addQuantity(buy)}>+</button>
            
              
              <button type="button" className="btn btn-outline-dark">{buy.qty} </button>
        
            {buy.qty === 1 ?
              <button type="button" className="btn btn-outline-danger" onClick={() => closeItem({...buy, qty: 1 })}><i className="fa fa-trash me-1" ></i></button> :
              <button type="button" className="btn btn-outline-dark" onClick={() => decreaseQuantity(buy)} > - </button>
             }
         
        
          </div>
          <div className='ms-2 fs-4 fw-bold' >${buy.qty*buy.price}</div>
          </div>
     
        
      </div>
      <div></div>
      
       
      <button type="button"
        className="btn-close btn-close-black ms-auto p-2 bd-highlight"
        aria-label="Close"
        onClick={() => closeItem(buy)}
        
      ></button>
    </div>
   
  );
  {/*do this for save and do not refresh*/ }
  
  
  const showButton = () => {
    return (
      <div className='container'>
        <div className='row'>
          <button className='btn btn-outline-dark mx-auto fs-3 fw-normal w-25 mt-4'
          >
            proceed checkout
          </button>
        </div>
      </div>
      
    )
  };

  //use this function for add or minus product in cart


  //when cart is empty this function run
  const emptyCart = () => {
    return (
      <>
        <div className="  container mt-2 py-2 align-self-center" style={{ backgroundColor: '#ede6e6', height: '200px', lineHeight: '100px' }}>
          <h1 className="fs-3 fw-bold">Empty Cart</h1>
        </div>
      </>
    );
  };
  return (
    <>
      {buys.length === 0 && emptyCart()}
      {buys.length !== 0 && renderCart}
      {buys.length !== 0 && showButton()}
    </>
  );
 
}


const mapStateToProps = (state) => {
  return { handleCart: state.handleCart };
};

export default connect(mapStateToProps, {addCart, deleteProduct,deleteAllProduct })(Cart); 
