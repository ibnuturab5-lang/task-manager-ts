import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div> <h1 className="p-3">Login</h1>
      <div className="bg-pink-600 w-20 p-3 rounded-md">
        <Link to={'/'}>Home</Link>
      </div></div>
  )
}

export default Login