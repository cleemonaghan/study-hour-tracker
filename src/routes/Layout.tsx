import { Outlet, useNavigate } from "react-router-dom";

function Layout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        {/* Render the app routes via the Layout Outlet */}
        <Outlet />
      </main>
      <footer>©️ Colin Monaghan 2024</footer>
    </>
  );
}

function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Study Hour Tracker</h1>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/page1")}>Page 1</button>
    </>
  );
}

export default Layout;
