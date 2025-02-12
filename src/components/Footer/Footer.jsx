import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../../Auth/firebase";
// import { useState } from "react";
import { Container, Grid, Typography, Snackbar, Alert } from "@mui/material";
import QrCode from "./QrCode.png";
import GooglePlay from "./GooglePlay.png";
import AppStore from "./AppStore.png";
import i18n from "../common/components/LangConfig";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState(null);
  // const [success, setSuccess] = useState(null);
  // const [open, setOpen] = useState(false);

  // const handleSignUp = async (e) => {
  //   e.preventDefault();
  //   try {
  //     // Attempt to create a new user account
  //     const userCredential = await createUserWithEmailAndPassword(
  //       auth,
  //       email,
  //       password
  //     );

  //     // Send email verification
  //     await sendEmailVerification(userCredential.user);

  //     setSuccess("Account created successfully! Verification email sent.");
  //     setOpen(true);
  //   } catch (error) {
  //     // Handle specific errors
  //     if (error.code === "auth/email-already-in-use") {
  //       setSuccess("");
  //       setError("The email address is already in use.");
  //     } else {
  //       setError(error.message); // Handle other errors generically
  //     }
  //     setOpen(true);
  //   }
  // };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling behavior
    });
  };
  return (
    <footer className="bg-black text-white py-8 mt-24 bottom-0 w-full">
      <Container>
        <Grid
          container
          direction="row"
          spacing={5}
          className="md:min-h-96 justify-center items-stretch md:justify-between"
        >
          <Grid
            item
            sm={6}
            md={2.5}
            className="justify-center items-stretch md:justify-between md:leading-5"
          >
            <Typography className="font-bold" variant="h6" gutterBottom>
              Exclusive
            </Typography>
            <Typography className="font-medium" gutterBottom>
              {i18n.t("footer.subscribe")}
            </Typography>
            <Typography variant="body2">{i18n.t("footer.offer")}</Typography>
            {/* <div className=" mt-4 flex w-56	 py-2 px-1 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 bg-transparent text-white placeholder-gray-400">
              <div className=" flex flex-col ">
                <input
                  type="email"
                  placeholder={i18n.t("footer.enterEmail")}
                  className="w-full py-2 px-3 rounded-md focus:outline-none focus:border-transparent bg-transparent text-white "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder={i18n.t("footer.enterPassword")}
                  className="w-full py-2 px-3 rounded-md focus:outline-none focus:border-transparent bg-transparent text-white "
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button onClick={handleSignUp}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.91199 11.9998H3.99999L2.02299 4.1348C2.01033 4.0891 2.00262 4.04216 1.99999 3.9948C1.97799 3.2738 2.77199 2.7738 3.45999 3.1038L22 11.9998L3.45999 20.8958C2.77999 21.2228 1.99599 20.7368 1.99999 20.0288C2.00201 19.9655 2.01313 19.9029 2.03299 19.8428L3.49999 14.9998"
                    stroke="#FAFAFA"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div> */}
          </Grid>

          {/* Support */}
          <Grid
            item
            xs={8}
            sm={6}
            md={2.5}
            className="justify-center items-stretch md:justify-between md:leading-10"
          >
            <Typography variant="h6" gutterBottom>
              {i18n.t("footer.support")}
            </Typography>
            {/* <Typography gutterBottom>{i18n.t("footer.address")}</Typography> */}
            <h2>Chittagong, Banglades</h2>
            <Typography variant="body2">adnanmahmud3394@gmail.com</Typography>
            <Typography variant="body2">+8801820339433</Typography>
          </Grid>

          {/* Account */}
          <Grid
            item
            xs={8}
            sm={6}
            md={2}
            className="justify-center items-stretch md:justify-between md:leading-10"
          >
            <Typography variant="h6" gutterBottom>
              {i18n.t("footer.account")}
            </Typography>
            <ul className="list-none p-0">
              <li>
                <Link
                  onClick={scrollToTop}
                  to="/account"
                  sx={{ color: "white" }}
                >
                  {i18n.t("footer.myAccount")}
                </Link>
              </li>
              <li>
                <Link
                  onClick={scrollToTop}
                  to="/signup"
                  sx={{ color: "white" }}
                >
                  {i18n.t("footer.sign")}
                </Link>
              </li>
              <li>
                <Link onClick={scrollToTop} to="/cart" sx={{ color: "white" }}>
                  {i18n.t("footer.cart")}
                </Link>
              </li>
              <li>
                <Link
                  onClick={scrollToTop}
                  to="/wishlist"
                  sx={{ color: "white" }}
                >
                  {i18n.t("footer.wishlist")}
                </Link>
              </li>
              <li>
                <Link
                  onClick={scrollToTop}
                  to="/category"
                  sx={{ color: "white" }}
                >
                  {i18n.t("footer.shop")}
                </Link>
              </li>
            </ul>
          </Grid>

          {/* Quick Link */}
          <Grid
            item
            xs={8}
            sm={6}
            md={2}
            className="justify-center items-stretch md:justify-between md:leading-10"
          >
            <Typography variant="h6" gutterBottom>
              {i18n.t("footer.quickLinks")}
            </Typography>
            <ul className="list-none p-0">
              <li>
                <Link to="/allProducts" sx={{ color: "white" }}>
                  {i18n.t("allProducts.redTitle")}
                </Link>
              </li>
              <li>
                <Link to="/category" sx={{ color: "white" }}>
                  {i18n.t("category.redTitle")}
                </Link>
              </li>

              <li>
                <Link onClick={scrollToTop} to="about" sx={{ color: "white" }}>
                  {i18n.t("footer.usage")}
                </Link>
              </li>
              <li>
                <Link onClick={scrollToTop} to="about" sx={{ color: "white" }}>
                  {i18n.t("footer.FAQ")}
                </Link>
              </li>
              <li>
                <Link
                  onClick={scrollToTop}
                  to="/contact"
                  sx={{ color: "white" }}
                >
                  {i18n.t("footer.Contact")}
                </Link>
              </li>
            </ul>
          </Grid>

          {/* Download App */}
          <Grid
            item
            xs={8}
            sm={6}
            md={2}
            className="justify-center items-stretch md:justify-between md:leading-10"
          >
            <Typography variant="h6" gutterBottom className="text-white">
              {i18n.t("footer.downloadApp")}
            </Typography>
            <Typography variant="body2" gutterBottom className="text-gray-500 ">
              {i18n.t("footer.save")}
            </Typography>
            <div className="flex flex-row gap-2 my-4">
              <img src={QrCode} alt="Qr Code" />
              <div>
                <Link onClick={scrollToTop} to="/">
                  <img src={GooglePlay} alt="Google Play" />
                </Link>
                <Link onClick={scrollToTop} to="/">
                  <img src={AppStore} alt="App Store" />
                </Link>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-4 flex items-center gap-2">
         
            {/* facebook here */}
            <div>
      <a
        href="https://www.facebook.com/mdjashimuddin.uddin.79" // Replace with your Facebook profile URL
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook size={24} className="text-blue-500 hover:text-blue-800" />
      </a>
    </div>
              {/* instagrams  here*/}
              <div>
      <a
        href="https://www.instagram.com/frontend.developer.jashim" // Replace with your Instagram profile URL
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={24} className="text-pink-500 hover:text-pink-700" />
      </a>
    </div>

       {/* linkdin here */}
              <div>
      <a
        href="https://www.linkedin.com/in/jashim-uddin-047a0b2b9/" // Replace with your LinkedIn profile URL
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} className="text-blue-600 hover:text-blue-800" />
      </a>
    </div>
              <div className="mt-8 flex items-center"></div>
            </div>
          </Grid>
        </Grid>
      </Container>
      {/* Copyright */}
      <hr className="w-full border-gray-800 my-4" />
      <div className=" text-center text-white py-4">
      <p className="text-sm">&copy; Creadted By Jashim Uddin 2024</p>
    </div>
      {/* <Typography variant="body2" className=" text-center text-gray-600">
        {i18n.t("footer.copyrights")}
      </Typography> */}
   
    </footer>
  );
};

export default Footer;
