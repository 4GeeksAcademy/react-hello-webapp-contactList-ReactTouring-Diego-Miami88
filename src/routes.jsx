// Import necessary components and functions from react-router-dom.

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Demo } from "./pages/Demo";
import { StoreProvider } from "./hooks/useGlobalReducer";


export const router = createBrowserRouter(
    createRoutesFromElements(
    // CreateRoutesFromElements function allows you to build route elements declaratively.
    // Create your routes here, if you want to keep the Navbar and Footer in all views, add your new routes inside the containing Route.
    // Root, on the contrary, create a sister Route, if you have doubts, try it!
    // Note: keep in mind that errorElement will be the default page when you don't get a route, customize that page to make your project more attractive.
    // Note: The child paths of the Layout element replace the Outlet component with the elements contained in the "element" attribute of these child paths.

      // Root Route: All navigation will start from here.
      <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >

        {/* Nested Routes: Defines sub-routes within the BaseHome component. */}
        <Route path= "/" element={<Home />} />
        <Route path="/single/:theId" element={ <Single />} />  {/* Dynamic route for single items */}
        <Route path="/demo" element={<Demo />} />
        <Route path="/ store" element={<StoreProvider><Home /></StoreProvider>} /> {/* Route for the store page, wrapped with StoreProvider to provide global state. */}
        <Route path="*" element={<h1>Not found!</h1>} /> {/* Catch-all route for undefined paths, showing a "Not found!" message. */} 
        <Route path="/contact" element={<Home />} /> {/* Route for the contact page, rendering the Home component. */}    
        <Route path="/contact/:contactId" element={<Home />} /> {/* Dynamic route for individual contact details, rendering the Home component. */}   
        
      </Route>
    )
);