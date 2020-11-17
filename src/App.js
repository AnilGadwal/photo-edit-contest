import './App.css';
import fire from "./firebase"
import {useState, useEffect} from "react";
import Login from "./Login";
import Hero from "./Hero"

function App() {
  const [user, setuser] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [emailError, setemailError] = useState('');
  const [passwordError, setpasswordError] = useState('');
  const [hasAccount, sethasAccount] = useState(false)

  const clearInputs = () =>{
    setemail("");
    setpassword('');
  }

  const clearErrors = () =>{
    setemailError('');
    setpasswordError('');
  }

  const handelLogin = () => {
    clearErrors();
    fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(err => {
      switch(err.code){
        case "auth/invalid-email":
          case "auth/user-disabled":
            case "auth/user-not-found":
              setemailError(err.message);
              break;
              case "auth/wrong-password":
                setpasswordError(err.message);
                break;
      }
    })

  }

  const handleSignup = () =>{
    clearErrors();
    fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(err => {
      switch(err.code){
        case "auth/email-already-in-use":
          case "auth/invalid-email":
              setemailError(err.message);
              break;
              case "auth/weak-password":
                setpasswordError(err.message);
                break;
              }
            })
        
          }

    const handleLogout = () =>{
      fire.auth().signOut();
    }

    const authListener = () =>{
      fire.auth().onAuthStateChanged(user =>{
        if(user){
          clearInputs();
          setuser(user);
        }
        else{
          setuser("");
        }
      })
    }

    useEffect(() => {
      authListener();
      return () => {
      }
    }, [])

  return (
    <div className="App">
      {user ? (
        <Hero handleLogout={handleLogout}/>
      ) : ( 
      <Login email={email}
       setemail={setemail}
       password={password}
       setpassword={setpassword}
       handelLogin={handelLogin}
       handleSignup={handleSignup}
       hasAccount={hasAccount}
       sethasAccount={sethasAccount}
       emailError={emailError}
       passwordError={passwordError}/>
       )}
    </div>
  );
}

export default App;
