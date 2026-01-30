import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";

import Error from "./pages/Error";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Legal from "./pages/Legal";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      // parent path
      <Route path="/" element={<RootLayout />} errorElement={<Error />}>
        {/* child routes */}
        <Route index element={<Page1 />} />
        <Route path="page-2" element={<Page2 />} />
        <Route path="page-3" element={<Page3 />} />
        <Route path="page-4" element={<Page4 />} />
        <Route path="page-5" element={<Page5 />} />
        <Route path="privacy-terms" element={<Legal />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}
export default App;
