import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Outlet,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";

// router singleton
const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  return (
    <Routes>
      {/* All routes are wrapped by a pathless layout route with the navbar */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <>
      <header>
        <h1>Study Hour Tracker</h1>
        {/* TODO: Add nav menu here */}
      </header>
      <main>
        {/* Render the app routes via the Layout Outlet */}
        <Outlet />
      </main>
      <footer>©️ Colin Monaghan 2024</footer>
    </>
  );
}

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
