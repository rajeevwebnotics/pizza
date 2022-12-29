
import {useNavigate} from 'react-router-dom'  
const Logout = () => {
    localStorage.clear()
    const navigate = useNavigate()
    return (
        navigate('./Login') 
    )
}
export default Logout;