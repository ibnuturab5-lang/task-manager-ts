
import { Link } from "react-router-dom"


const Home = () => {
  return (
    <div className="">
      <h1 className="p-3">Home</h1>
      <div className="bg-pink-600 w-20 p-3 rounded-md">
        <Link to={'/login'}>Login</Link>
      </div>
     
    </div>
  )
}

export default Home