import React,{useMemo,useCallback,useState} from 'react';
type propsType = {
    age:number;
    stranger:number;
}
const ChildMemo2:React.FC<propsType> = props =>{
    const {age:fAge,stranger:fStranger} = props;
    let [age,setAge] = useState(fAge)
    let [stranger,setStranger] = useState(fStranger)
    useMemo(()=>{
        console.log('usememo222222222,',age);
        return age;
    },[age])
    const handleStranger=useCallback(()=>{
        console.log('useCallback2222222222',stranger);
        setStranger(stranger+1)
    },[stranger])
    const handleAge = ()=>setAge(age+1);
    return (
        <>
       <h2>我朋友今年{age}了，遇见了{stranger}个心心</h2>
       <button onClick={handleAge}>age+1</button>
       <button onClick={handleStranger}>stranger+1</button>
        </>
    )
}
export default React.memo((props:propsType)=><ChildMemo2 {...props}/>);