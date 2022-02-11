import React,{useContext} from 'react'
import { useMyContext } from "./useMyContext";
 
const ShowArea = () => {
  const { color } = useContext(useMyContext);
  return <div style={{ color: color }}>字体颜色展示为{color}</div>;
};

export default ShowArea