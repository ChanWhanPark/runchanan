import * as React from 'react';
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import AppToolbar from '@Component/ui/Toolbar.tsx';
import Pace from "./services/Pace.tsx";
import CourseAnalyst from "./services/CourseAnalyst.tsx";

const ToolbarSection = <AppToolbar />

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/pace",
    element: <Pace />,
  },
  {
    path: "/course",
    element: <CourseAnalyst />,
  },
  
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {ToolbarSection}
    <RouterProvider router={router} />
  </React.StrictMode>
);
