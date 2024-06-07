export const NavBar = () => {
  return (
    <div className="bg-gray-700 text-white p-4 flex justify-between items-center">
      <div className="text-xl">Navbar</div>
      <div className="flex items-center">
        <div className="flex items-center">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User profile"
            className="w-10 h-10 rounded-full"
          />
          <span className="ml-2">John Doe</span>
        </div>
      </div>
    </div>
  );
}
