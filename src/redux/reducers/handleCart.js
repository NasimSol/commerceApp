let cart = [];

const handleCart = (cart = [], action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
            //if exist
            const exist = cart.find((x) => x.id === product.id);
            if (exist) {
                return cart.map((x) => x.id === product.id ? { ...x, qty: x.qty + 1 } : x);
                break;
            } else {
                const product = action.payload;
                return [
                    ...cart,
                    {
                        ...product,
                        qty: 1
                    }
                ]
                break;
            };
            
        case "DELITEM":
            //if exist
            const exist1 = cart.find((x) => x.id === product.id);
            console.log(exist1);
            if (exist1.qty === 1) {
                return cart.filter((x) => x.id !== exist1.id);
                break;
            } else {
                return cart.map((x) => x.id === product.id ? { ...x, qty: x.qty - 1 } : x);
                break;
            };

            
        default:
            return cart;
            break;
        
            
    };
    
};
export default handleCart;

/*
const handleCart = (cart = [], action) => {
  
    switch (action.type) {
       case "ADDITEM":
            //if exist
           
                return [
                    ...cart,
                   action.payload
                    
                ]
            break;
        case "DELITEM":
            //if exist
           
                return cart.filter((x) => x.id !== action.payload.id);
            break;
            default:
        
                return cart;
                break;
            }
            
         
        
            
    }
   
    
*/
