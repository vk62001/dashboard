import { NavBar } from "./components/Navbar"
import { Sidebar } from "./components/Sidebar"

export const HomePage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <NavBar />
        <div className="flex-1 p-4">
          <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
          <p>Your content goes here.</p>
        </div>
      </div>
    </div>
  )
}
