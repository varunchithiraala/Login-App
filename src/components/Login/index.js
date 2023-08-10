// Write your code here
import './index.css'

const Login = props => {
  const {login} = props

  return (
    <button className="login-button" onClick={login} type="button">
      Login
    </button>
  )
}

export default Login
