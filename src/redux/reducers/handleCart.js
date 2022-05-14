

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
           
            if (exist1.qty === 1) {
                return cart.filter((x) => x.id !== exist1.id);
                break;
            } else {
                return cart.map((x) => x.id === product.id ? { ...x, qty: x.qty - 1 } : x);
                break;
            };
            case "DELALLNUM":
            //if exist
            return cart.filter((x) => x.id!==product.id );
                break;
            
               
               
           

            
        default:
            return cart;
            break;
        
            
    };
    
};
export default handleCart;


