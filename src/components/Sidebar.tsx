import { Link } from 'react-router-dom'
import "../styles/sidebar.css"

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <h3>
        <Link to={"/"}>NonoX</Link>
      </h3>
      <div className='links'>
        <Link to={"/"}>
        Platform launch
        </Link>
        <Link to={"/marketing"}>
        Marketing plan
        </Link>
        <Link to={"/roadmap"}>
        RoadMap
        </Link>
        <Link to={"/new-board"}>
        Create new Board
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
