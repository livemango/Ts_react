import React, { createContext, useReducer } from "react";

type propsType={
  children:any;
}
type actionType={
  color:string;
  type:string
}
// type PackValue<value> = React.Dispatch<React.SetStateAction<value>>;
export interface OrgValues {
  color:'red' | 'yellow';
  // setColor 这个set方法就是dispatch的封装
  // setColor:PackValue<OrgValues['color']>
  dispatch:React.Dispatch<any>
}
 
// 创建 context
export const useMyContext = createContext<OrgValues>({
  color:'red',
  dispatch:()=>{},
});
 
// reducer
export const UPDATE_COLOR = "UPDATE_COLOR"
const reducer = (state: string, action:actionType ) => {
  switch(action.type) {
    case UPDATE_COLOR:
      return action.color
    default:
      return state  
  }
}
 
/**
 * 创建一个 Color 组件
 * Color 组件包裹的所有组件都可以访问到 value
 */
export const Color = (props:propsType) => {
  const [color , dispatch]= useReducer(reducer, 'red')  as [color:'red' | 'yellow',dispatch:React.Dispatch<any>]
  return (
    <useMyContext.Provider value={{color, dispatch}}>
      {props.children}
    </useMyContext.Provider>
  );
};
