import React from 'react'

const Login = (props) => {

const { email, 
    setemail, 
    password, 
    setpassword, 
    handelLogin, 
    handleSignup, 
    hasAccount, 
    sethasAccount, 
    emailError, 
    passwordError} = props;

    return (
        <section className="login">
            <div className="loginContainer">
            <label>Username</label>
            <input
             type='text'
             autoFocus
             required
             value={email}
             onChange={(e) => setemail(e.target.value)}
             />
            <p className="errorMsg">{emailError}</p>

            <label>Password</label>
            <input
             type='password'
             autoFocus
             required
             value={password}
             onChange={(e) => setpassword(e.target.value)}
             />
            <p className="errorMsg">{passwordError}</p>

            <div className="btnContainer">
                {hasAccount ? (
                    <>
                    <button onClick={handelLogin}>Sign In</button> 
                    <p>
                    Don't have an account ?
                    <span onClick={() => sethasAccount(!hasAccount)}> Sign up</span>
                    </p>
                    </>
                ) : (
                    <>
                    <button onClick={handleSignup}>Sign Up</button> 
                    <p
                    >Have an account ? 
                    <span onClick={() => sethasAccount(!hasAccount)}> Sign in</span>
                    </p>
                    </>
                )}
              </div>
              </div>
              </section>
    )
}

export default Login
