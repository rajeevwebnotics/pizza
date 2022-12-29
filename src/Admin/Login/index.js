
import React, {  useState } from 'react'
import {useNavigate} from 'react-router-dom' 
const AdminLogin = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Loading, setLoading] = useState(false);



    const Admin_Login = () => {
        localStorage.clear()
    
             
                var today = new Date(),
                    curTime = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

                var datess = new Date(),
                    date = datess.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                var raw = JSON.stringify(
                    {
                        "email": email,
                        "password": password,
                        "time": curTime,
                        "date": date,
                
                    }
                );

                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };

                fetch("http://localhost:3000/AdminLogin", requestOptions)
                    .then(response => response.json())
                    .then(result => {
                    
                        localStorage.setItem('adminid', JSON.stringify(result));
                        if (result.message === 'Login Successfully.') {
                            setLoading(true)
                            setTimeout(() => {
                                setLoading(false)
                                navigate('./')
                            }, 2000);
        
        
        
                        }
                        else {
                            return <p>Username or password is incorrect!</p>
                        }
                    })
                    .catch(error => console.log('error', error));
            }

    return (
        <>
         {
                Loading ? (
                    <div className="loader text-center">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                ) : null
            }
     
        <section className="h-100 ">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">

                    <div className="col offset-md-4">
                        <div className="card card-registration my-4">
                                    <div className="card-body p-md-5 text-black">
                                        <h3 className="mb-5 ">Admin Signup</h3>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" for="form3Example97">Email ID <em>*</em></label>
                                            <input type="email" id="form3Example97" className="form-control form-control-lg" requried="true"
                                                value={email} onChange={(e) => setEmail(e.target.value)} />

                                        </div>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" for="form3Example97">Password <em>*</em></label>
                                            <input type="password" id="form3Example97" className="form-control form-control-lg" requried="true"
                                                value={password} onChange={(e) => setPassword(e.target.value)} />
                                        </div>


                                        <div className="d-flex justify-content-end pt-3">
                                            {/* <button type="button" className="btn btn-light btn-lg">Reset all</button> */}
                                            <button type="button" className="btn btn-warning btn-lg Buy" onClick={Admin_Login}>Login</button>
                                        </div>

                                    </div>
                                </div>
                               
                            </div>
                    
                </div>
            </div>
        </section>
        </>
    )
}
export default AdminLogin;