import React, {useState} from 'react'
import {Route, Link, Routes} from 'react-router-dom';
import {Layout, Typography, Space, Button, Affix} from 'antd';
import 
    { 
        Navbar, Homepage,
        Services, Members, 
        LoginForm, Header,
        Home, Login
    } 
     from './components';
import {useGetUserQuery} from './services/LoginAPI'
import './App.css';

const App = () => {
    const adminUser = {
        email: 'amohelangt@chaperone.co.ls',
        password: '1',
    }
    const [user, setUser] = useState({email: "", password: "", token: ""});
    const [error, setError] = useState("");
    //const { data, isFetching } = useGetUserQuery({email, password});
    

    const LoginValidation = details =>{
        console.log(details);
        if(details.result === 'success'){
            console.log("login successful");
            setUser({
                email: details.email,
                token: details.jwtToken,
            })
        }else{
            console.log("not found");
            setError("Not found")
            
        }
    }
  
    const Logout = () => {
        console.log("logout");
        setUser({
            email: "", password: "", token: ""
        })
    }

    const [container, setContainer] = useState(null);


    return (
        <div className="app">
            
            
            <div className="main">
                {(user.token != "") ?
                (
                    <Layout>
                    <div className="navbar"><Header /></div>
                    <div ref={setContainer}><Affix target={() => container}><Navbar /></Affix></div>
                    <div className="switch">
                        <Routes>
                            <Route exact path="/" element={<Home />}/>
                            <Route exact path="/services" element={<Services />}/>
                            <Route exact path="/member" element={<Members />}/>
                        </Routes>
                        <Button level={3} className="show-more" onClick={Logout}>Logout</Button>
                    </div>
                </Layout>
                ) : (
                    <Login LoginValidation={LoginValidation} error={error} />
                )};

                <div className="footer">
                    <Typography.Title level={5} style={{ color:'white', textAlign: 'center' }}>
                        Piece Job <br />
                        All right reserved.
                    </Typography.Title>
                    <Space>
                        <Link to="/">Home</Link>
                        <Link to="/services">Service Providers</Link>
                        <Link to="/member">Members</Link>
                        <Link to="/help">Help</Link>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default App
