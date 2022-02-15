import React ,{useRef} from 'react';
import AsyncState from './AsyncState';
import UseRefAsyncState from './useRefAsyncState';
import RefInput from './forwardRef_useImperativeHandle'

const UseRef:React.FC=()=>{
    const myRef = useRef(null);
    const handleFocus = ()=>{
        const node = myRef.current;
        console.log(node);
        node.focus();
        
    }
    return (
        <div>
            <AsyncState/>
            <UseRefAsyncState/>
            <RefInput ref={myRef}/>
            <button onClick = {handleFocus}>Focus</button>
        </div>
    )
}
export default React.memo(UseRef);