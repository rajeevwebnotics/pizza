import {useNavigate} from 'react-router-dom' 

const Logout = () => {
    const navigate = useNavigate()
    localStorage.clear()
    return (
        navigate('/admin/login')
    )
}
export default Logout;