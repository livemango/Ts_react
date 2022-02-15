import React from "react";
import {useWinResize} from './utils'
const WinSize: React.FC = () => {
    const size= useWinResize();
    return (<>
      <h2>窗口大小为：{size.width}X{size.height}</h2>
    </>)
};
export default React.memo(WinSize);
