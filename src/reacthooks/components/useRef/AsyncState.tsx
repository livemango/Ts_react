import React, { useState } from "react";
function AsyncState() {
  const [count, setCount] = useState(0);

  function handleAlertClick() {
    setTimeout(() => {
      alert("You clicked on: " + count);
    }, 3000);
  }

  return (
    <div>
      <a href="https://zh-hans.reactjs.org/docs/hooks-faq.html#why-am-i-seeing-stale-props-or-state-inside-my-function">为什么我会在我的函数中看到陈旧的 props 和 state </a>
      <p> You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={handleAlertClick}>Show alert</button>
      {/*  在count为6的时候, 点击 show alert , 再继续增加 count , 弹出的值为 6, 而非 10. */}
    </div>
  );
}
export default React.memo(AsyncState);
// https://zhuanlan.zhihu.com/p/105276393
