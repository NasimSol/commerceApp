import React, {useEffect,useState} from 'react';
import { useParams , Link } from "react-router-dom";
import axios from "axios";

function Product() {
    const { id } = useParams();//this name here shoul be exat with name in Route in App//
     const [sequence, setSquence] = useState([]);
  
  const [load, setLoad] = useState(false);
    useEffect(() => {
        const search = async () => {
            setLoad(true);
            const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
            console.log(data)
            setSquence(data);
    
            setLoad(false);
     
     
        }
        if (!sequence.length) {
            search();
    
        }
    
    }, []);
     const showLoading = () => {
    return (
      <>
      ...loading
        </>
      
    ) 
    }
    const rendering = () => {
        return (
           <>
            
             <div className="card mb-3" style={{maxWidth:'540px'}}>
               <div className="row g-0">
                <div className="col-md-4">
                   <img  src={sequence.image} className="img-fluid rounded-start"/>
                </div>
              <div className="col-md-8">
                   <div className="card-body">
                   <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider caradditiona bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
              </div>
            </div>
          </> 
        )
     
   }
    
  return (
      <div className='container'>
          <div className='row'>
              {load ? <div>{showLoading()}</div> :<div>{rendering()}</div>} 
       </div> 
    </div>
  )
}

export default Product