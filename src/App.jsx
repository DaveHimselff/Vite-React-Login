//Dave Vite-React-Login
import { useState } from "react";
import { FaHamburger } from "react-icons/fa";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
  };

  return (
    <div className="flex flex-col w-screen">
      <div className="font-sans p-4 bg-gray-200 z-10 flex-grow">
        <div className="w-[90%] m-auto flex justify-between items-center">
          <div className="text-2xl font-medium">Logo</div>
          <nav className="items-center gap-3 hidden md:flex">
            <a>Home</a>
            <a>About</a>
            <a>Contact</a>
          </nav>
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="md:hidden inline"
          >
            <FaHamburger size={30} className="text-indigo-500" />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden fixed bottom-0 left-0 h-screen w-screen bg-gray-300 
                        ${isNavOpen ? "" : "hidden"}`}
      >
        <div className="h-full w-full flex items-center justify-center font-bold text-5xl">
          <div className="flex flex-col w-full -mt-40 text-center">
            <a>Home</a>
            <a>About</a>
            <a>Contact</a>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center flex-grow">
      <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Monserat' }}>Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-8 bg-gray-100 rounded shadow-md" style={{ backgroundColor: "#c9d6df" }}>
          <div className="flex flex-col gap-1">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="border p-2 rounded"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="border p-2 rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-500 text-white py-2 px-4 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
