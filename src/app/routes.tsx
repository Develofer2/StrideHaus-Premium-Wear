import { createBrowserRouter, Outlet, ScrollRestoration } from "react-router";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Registration from "./pages/Registration";
import Cart from "./pages/Cart";
import Biography from "./pages/Biography";
import ThankYou from "./pages/ThankYou";

function RootLayout() {
  return (
    <div className="bg-[#080808]">
      <ScrollRestoration />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

function MinimalLayout() {
  return (
    <div className="bg-[#080808]">
      <ScrollRestoration />
      <Outlet />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "products", Component: Products },
      { path: "contact", Component: Contact },
      { path: "cart", Component: Cart },
      { path: "biography", Component: Biography },
    ],
  },
  {
    path: "/",
    Component: MinimalLayout,
    children: [
      { path: "register", Component: Registration },
      { path: "thank-you", Component: ThankYou },
    ],
  },
]);
