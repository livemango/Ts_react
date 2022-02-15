import React from 'react';
import ChildMemo from './ChildMemo';
import ChildMemo2 from './ChildMemo2';

const FatherMemo:React.FC = ()=>{
    const age = 23,stranger = 1001
    return (<div style={{background:'grey'}}>
        <ChildMemo age={age} stranger={stranger}/>
    <ChildMemo2 age={age} stranger={stranger}/>
    </div>)
}
export default React.memo(FatherMemo);