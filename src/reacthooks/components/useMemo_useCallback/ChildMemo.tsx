import React,{useMemo,useCallback,useState} from 'react';
type propsType = {
    age:number;
    stranger:number;
}
const ChildMemo:React.FC<propsType> = props =>{
    const {age:fAge,stranger:fStranger} = props;
    let [age,setAge] = useState(fAge)
    let [stranger,setStranger] = useState(fStranger)
    useMemo(()=>{
        console.log('usememo,',age);
        return age;
    },[age])
    const handleStranger=useCallback(()=>{
        console.log('useCallback',stranger);
        setStranger(stranger+1)
    },[stranger])
    const handleAge = ()=>setAge(age+1);
    return (
        <>
        {/* 组件设计也有问题，这分明就是一个组件，个人想体现的是两个组件，用了memo之后各自渲染，互不牵连 */}
       <h1> React.memo</h1>
       <h2>我今年{age}了，遇见了{stranger}个星星</h2>
       <button onClick={handleAge}>age+1</button>
       <button onClick={handleStranger}>stranger+1</button>
        </>
    )
}
export default React.memo((props:propsType)=><ChildMemo {...props}/>);

 // 问题：按钮点击两次之后数据才会更新？ 涉及setState取值延期问题。。。。。
    // 。。。果然是setState有问题   

    // 方法一，用过set回调函数没用   const handleAge = ()=>setAge(age=>age++);
    // 方法二，通过ref保存值    额，还是老样子
               

    // 有一个问题，这里setstate初始值是props，然后set++


    // solve:age++ 是先用值，再加1，所以有问题。应该直接改为age+1    shabi了  不是setState有问题--------