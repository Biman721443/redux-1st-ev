import React from "react";
import data from "./db.json"
import { useDispatch, useSelector } from "react-redux";
import {
  getShoesFailure,
  getShoesRequest,
  getShoesSuccess,
} from "../../Redux/action";
const Shoes = () => {
  const [rest,setRest] = useState(data);
const ratedData  = (anyparameter) =>{
setRest(anyparameter)
}
  return <div>
     <Allfunction ratedData={ratedData}/>
    {rest.map((item) => { 
    return  <Shoes key={item.id} item={item}/>})}</div>;
};

export default Shoes;
