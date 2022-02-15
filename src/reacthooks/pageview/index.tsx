import ContetxReducer from '../components/useContext_Reducer'
import WinSize from '../components/user-definedHook'
import FatherMemo from '../components/useMemo_useCallback'
import UseRef from '../components/useRef'
const PageView = ()=>{
    return (<>
    <ContetxReducer/>
    <WinSize/>
    <FatherMemo/>
    <UseRef/>
    </>)
}
export default PageView;