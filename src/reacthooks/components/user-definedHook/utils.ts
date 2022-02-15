import  { useState, useEffect, useCallback } from "react";
type stateType =  {
    width:number,
    height:number
}

// 自定义Hook  获取浏览器窗口大小
export function useWinResize():stateType {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  });
  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    });
  }, []);
  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
    // React Hook useEffect has a missing dependency: 'onResize'.
    //  Either include it or remove the dependency array.eslintreact-hooks/exhaustive-deps
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return size;
}
// 这是一个封装函数，而不是一个组件，所以不能呢用React.memo 包裹
