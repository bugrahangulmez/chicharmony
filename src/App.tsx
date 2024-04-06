import { Home } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function Root() {
  return (
    <>
      <Home />
    </>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    },
  ]);
  return <RouterProvider router={router} />;
}
export default App;
