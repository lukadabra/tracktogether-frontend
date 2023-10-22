import Root from "./routes/root";
import ErrorPage from "./routes/error-page";
import JoySignInSideTemplate from "./features/auth/pages/login";
import { QueryClient, QueryClientProvider } from 'react-query';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <JoySignInSideTemplate />,
    errorElement: <ErrorPage />
  },
]);


function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;