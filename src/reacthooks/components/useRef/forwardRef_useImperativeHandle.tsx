import React,{useRef,useImperativeHandle, ReactNode} from 'react';

// const ForWardRef:React.FC = (props)=>{
//     const {myRef} =props;
//     const innerRef = useRef(null);
//     useImperativeHandle(myRef,()=>({
//         focus(){
//             const node = innerRef.current;
//             node.focus();
//         }
//     }))
//    return (<>
//    <input type="text" ref={innerRef} />
//    </>)
// }
// const RefInput = React.forwardRef((props,ref)=>(<ForWardRef {...props} ref= {ref}/>))
// export default React.memo(RefInput)

// 且议  先拆分任务
function FancyInput(props:any, ref:any):React.FC {
    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current.focus();
      }
    }));
    return <input ref={inputRef} />;
  }
  FancyInput = forwardRef(FancyInput);