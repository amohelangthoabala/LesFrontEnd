import React, {useState} from 'react'

const LoginForm = ({ Login , error}) => {
    const [details, setDetails] = useState({email : "", password : ""});
    const SubmitHandler = e => {
        e.preventDefault();
        Login(details);
    }

    return (
        <form onSubmit={SubmitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {(error != "") ? (<div>{error}</div>) : ""}
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" 
                    onChange={
                        e => setDetails({...details, email: e.target.value})
                    } 
                    value={details.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" 
                    onChange={
                        e => setDetails({...details, password: e.target.value})
                    } 
                    value={details.password}
                    />
                </div>
                <input type="submit" value="Login" /> 
            </div>
        </form>
    )
}

export default LoginForm
