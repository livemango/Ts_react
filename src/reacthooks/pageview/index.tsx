import ContetxReducer from '../components/useContext_Reducer'
import WinSize from '../components/user-definedHook'
import FatherMemo from '../components/useMemo_useCallback'
const PageView = ()=>{
    return (<>
    <ContetxReducer/>
    <WinSize/>
    <FatherMemo/>
    </>)
}
export default PageView;