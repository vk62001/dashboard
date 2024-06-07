import { faCalculator, faFile, faGear, faGears } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom"
import { AppDispatch } from "../../../store/store";
import { performLogout } from "../../../store/dataSlice/thunk";

export const Sidebar = () => {

  const dispatch: AppDispatch = useDispatch();

  const handleLogout = () => {
    dispatch(performLogout());
  };

  return (
    <div className="w-64 bg-gray-800 text-white h-screen flex flex-col">
    <div className="p-4 text-2xl font-bold">My Dashboard</div>
    <nav className="flex-1 p-4">
      <ul>
        <li className="mb-4">
            <NavLink to="/inicio" className="hover:text-gray-300"><FontAwesomeIcon icon={faFile} /> Resumen</NavLink>
        </li>
        <li className="mb-4">
            <NavLink to="/calculos" className="hover:text-gray-300"><FontAwesomeIcon icon={faCalculator} /> Profile</NavLink>
        </li>
        <li className="mb-4">
            <NavLink to="/configuracion" className="hover:text-gray-300"><FontAwesomeIcon icon={faGears} /> Settings</NavLink>
        </li>
      </ul>
    </nav>
    <div className="p-4 mt-auto">
        <button className="w-full py-2 px-4 bg-red-600 hover:bg-red-700 rounded" onClick={handleLogout}>
          Cerrar Sesión
        </button>
      </div>
  </div>
  )
}
