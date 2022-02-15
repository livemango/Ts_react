import React, { useState ,useRef,useEffect} from "react";
function UseRefAsyncState() {
  const [count, setCount] = useState(0);
  const lastestCount = useRef(count);
  useEffect(()=>{
    lastestCount.current = count;
  })

  function handleAlertClick() {
    setTimeout(() => {
      alert("You clicked on: " + count);
    }, 3000);
  }

  return (
    <div>
      <p>new-useRef-------------------------- </p>
      <p>You clicked {lastestCount.current} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={handleAlertClick}>Show alert</button>
      {/* 不够及时 */}
    </div>
  );
}
export default React.memo(UseRefAsyncState);