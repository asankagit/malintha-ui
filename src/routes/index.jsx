import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
// import ItemPage from "views/Items/Pricing.jsx";
// import ItemPage from './../components/ImageCard';
import ItemPage from './../views/Items/Pricing'

import ImgGallery from "views/ImgGallery";

var indexRoutes = [
  { path: "/items-page", name: "LandingPage", component: LandingPage },
  { path: "/items-page", name: "ProfilePage", component: ProfilePage },
  { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path: "/items-page", name: "Pricing", component: ItemPage },
  { path: "/gallery", name: "imageGallery", component: ImgGallery },
  { path: "/", name: "Components", component: Components }
  
];

export default indexRoutes;
