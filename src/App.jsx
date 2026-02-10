import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";

import Error from "./pages/Error";
import Home from "./pages/Home";
// import Services from "./pages/Services";
// import About from "./pages/About";
// import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
// import Legal from "./pages/Legal";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ disable: "mobile" });
  }, []);
  const router = createBrowserRouter(
    createRoutesFromElements(
      // parent path
      <Route path="/" element={<RootLayout />} errorElement={<Error />}>
        {/* child routes */}
        <Route index element={<Home />} />
        <Route path="about" element={<Error />} />
        <Route path="services" element={<Error />} />
        <Route path="gallery" element={<Error />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy-terms" element={<Error />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}
export default App;
