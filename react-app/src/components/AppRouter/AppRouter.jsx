import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "../FormValidation/userSignUp/SignUp";
import Login from "../FormValidation/userLogin/Login";
import HomePage from "../HomePage/HomePage";
import BlogPage from "../HomePage/pages/BlogPage";
import ContactPage from "../HomePage/pages/ContactPage";
import PageNotFound from "../HomePage/pages/PageNotFound";
import UserGoogleAuthentication from "../FormValidation/GoogleAuth/UserGoogleAuthentication";

const AppRouter = () => {
  return (
    <Router>
      <UserGoogleAuthentication>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </UserGoogleAuthentication>
    </Router>
  );
};

export default AppRouter;
