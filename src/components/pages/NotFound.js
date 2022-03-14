import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <p className="text-6xl my-4"> Whoops!! </p>
        <p className="text-3xl">404 Error - Page not found! </p>
      </div>

      <Link to="/" className="btn btn-primary btn-lg my-10">
        <FaHome className="text-3xl mr-4" />
        Take me home!
      </Link>
    </div>
  )
}

export default NotFound
