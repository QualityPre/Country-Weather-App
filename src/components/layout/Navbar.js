import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-netural-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <div className="dropdown dropdown-hover">
            <label tabIndex="0" className="btn m-1">
              <GiHamburgerMenu className="inline pr-2 text-3xl" />
            </label>
            <ul
              tabIndex="0"
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <a href="https://adam-preece.netlify.app"> Portfolio</a>
              </li>
            </ul>
          </div>
        </div>

        <Link to="/" className="ml-5 text-lg font-bold align-middle ">
          Country and Weather
        </Link>
        <div className="flex-1 px-2 mx-2">
          <div className="flex space-x-6 justify-end">
            <a href="https://www.linkedin.com/in/qualitypre/">
              <FaLinkedinIn className="inline pr-2 text-3xl" />{' '}
            </a>
            <a href="https://github.com/QualityPre">
              <FaGithub className="inline pr-2 text-3xl" />{' '}
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
