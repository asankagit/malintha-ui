//import Components from "views/Components/Components.jsx";
//import LandingPage from "views/LandingPage/LandingPage.jsx";
//import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
//import LoginPage from "views/LoginPage/LoginPage.jsx";
// import ItemPage from "views/Items/Pricing.jsx";
// import ItemPage from './../components/ImageCard';
import ItemPage from './../views/Items/Pricing'

//import ImgGallery from "views/ImgGallery";

var indexRoutes = [
  { path: "/landing-page", name: "LandingPage", component: ItemPage },
  { path: "/profile-page", name: "ProfilePage", component: ItemPage },
  { path: "/login-page", name: "LoginPage", component: ItemPage },
  { path: "/items-page", name: "Pricing", component: ItemPage },
  { path: "/gallery", name: "imageGallery", component: ItemPage },
  { path: "/", name: "Components", component: ItemPage }
  
];

export default indexRoutes;
