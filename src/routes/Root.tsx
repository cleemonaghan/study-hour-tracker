import "../App.css";
import {
  Navigate,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";

// router singleton
const router = createBrowserRouter([
  {
    path: "*",
    Component: Root,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  return (
    <Routes>
      {/* All routes are wrapped by a pathless layout route with the navbar */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<div>Page 1</div>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
