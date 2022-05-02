import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { deleteProduct } from '../redux/actions';{/*use actions from redux */}


function Cart( props ) {
  let buys = props.handleCart;
  //console.log(buys)
  {/*use for closing buy located in right side*/}
  const closeItem = (item) => {
    props.deleteProduct(item);
  };
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
    <div key={buy.id} className="container mt-2 py-2 d-flex flex-row" style={{ backgroundColor: '#ede6e6' }}>
      <div className="card py-2 mx-2 px-2" style={{ width: '18rem' }}>
        <img src={buy.image} className="card-img-top" />
      </div>
      <div className=" mt-2 py-2 mx-5" >
        <h1 className="mb-1 fs-3 fw-bold mt-2">{buy.title}</h1>
        <p className="fs-3 fw-bold lead mt-4"> ${buy.price} </p>
        
        
      </div>
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

export default connect(mapStateToProps, { deleteProduct })(Cart); 
