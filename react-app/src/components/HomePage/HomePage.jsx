import { Link } from "react-router-dom";
import { UserContext } from "../FormValidation/GoogleAuth/UserGoogleAuthentication";
import { useContext, useState, useEffect } from "react";
import { useRef } from "react";
import { GiFarmer } from "react-icons/gi";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";

const HomePage = () => {
  const { user, logOut } = useContext(UserContext);
  const [dropMenu, setDropMenu] = useState(false);
  const [currentSlideImage, setCurrentSlideImage] = useState(0);
  // slide images
  const slides = [
    {
      url: "https://images.pexels.com/photos/5677794/pexels-photo-5677794.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      url: "https://images.pexels.com/photos/5677628/pexels-photo-5677628.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      url: "https://images.pexels.com/photos/5326232/pexels-photo-5326232.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      url: "https://images.pexels.com/photos/708798/pexels-photo-708798.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      url: "https://images.pexels.com/photos/6129018/pexels-photo-6129018.jpeg",
    },
  ];
  const previousSlides = () => {
    const isFirstSlide = currentSlideImage === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentSlideImage - 1;
    setCurrentSlideImage(newIndex);
  };
  const nextSlides = () => {
    const isLastSlide = currentSlideImage === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentSlideImage + 1;
    setCurrentSlideImage(newIndex);
  };
  // for dots image slides
  const goToSlide = (slideIndex) => {
    setCurrentSlideImage(slideIndex);
  };
  const handleAutoPlay = () => {
    const interval = setInterval(() => {
      const nextSlideIndex = (currentSlideImage + 1) % slides.length;
      setCurrentSlideImage(nextSlideIndex);
    }, 4000);

    return () => clearInterval(interval);
  };

  useEffect(() => {
    const stopAutoPlay = handleAutoPlay();
    return () => stopAutoPlay();
  });

  //handle sign out
  const handleSignOut = async () => {
    try {
      await logOut();
      window.location.reload(); // Refresh the page after successful logout
    } catch (error) {
      console.log("Logout errors:", error);
    }
  };

  // drop down menu ref
  const menuRef = useRef();
  const imgRef = useRef();
  //* card outside click is --> false
  //* card and profile inside click is --> true
  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== imgRef.current) {
      setDropMenu(false);
    }
  });

  return (
    // main-section
    <section className="w-full h-screen bg-white flex justify-center">
      {/* sub-main section */}
      <div className="w-[1024px]  bg-[#FBF9F4] relative flex flex-col items-center">
        {/* nav-div */}
        <div className="flex justify-end items-center bg-[#81C408] h-[90px] space-x-2 pr-1 w-[1024px] absolute">
          {/* Logo */}
          <div className="text-center text-6xl py-8 absolute left-0 text-black h-[90px] flex justify-center items-center cursor-pointer">
            <GiFarmer />
          </div>
          <div>
            <div className="flex h-[50px] justify-around items-center w-[280px]">
              <Link to="/contact">
                <button className="w-[130px] border-2 rounded-lg  py-2 px-[10px] font-semibold border-red-500">
                  Contact Us
                </button>
              </Link>
              <Link to="/blog">
                <button className="w-[130px] border-2 rounded-lg py-2 px-[10px] font-semibold border-red-500">
                  Blog
                </button>
              </Link>
            </div>
          </div>
          <div className="h-[50px] w-[300px] flex justify-between items-center relative">
            <input
              type="text"
              name="search"
              placeholder="Search..."
              className="h-full w-full rounded-lg pl-2 outline-none border-[#FBF9F4] bg-[#FBF9F4] hover:border-blue-700 border-[2px] transition duration-300"
            />
            <BiSearchAlt2 className="absolute right-2 text-2xl text-[#81C408]" />
          </div>
          {user?.email ? (
            <div className="w-[100px] flex justify-around items-center">
              <img
                ref={imgRef}
                onClick={() => setDropMenu(!dropMenu)}
                src={user.photoURL}
                alt="User-Profile"
                className="h-[75px] w-[75px] object-cover border-2 border-gray-400 rounded-full cursor-pointer"
              />
              {dropMenu && (
                <div className="bg-white w-[150px] h-[150px] shadow-lg flex flex-col justify-center items-center absolute top-[85px] right-[3px] rounded-md">
                  <ul
                    ref={menuRef}
                    className=" text-[16px] font-bold flex flex-col justify-center items-center h-full w-full space-y-1"
                  >
                    <li className="cursor-pointer h-[40px] w-[90%] flex justify-center items-center rounded-md border-2 border-gray-400 hover:bg-blue-100 hover:border-blue-500">
                      Profile
                    </li>
                    <li className="cursor-pointer h-[40px] w-[90%] flex justify-center items-center rounded-md border-2 border-gray-400 hover:bg-blue-100 hover:border-blue-500">
                      Settings
                    </li>
                    <li
                      onClick={handleSignOut}
                      className="cursor-pointer h-[40px] w-[90%] flex justify-center items-center rounded-md border-2 border-gray-400 hover:bg-blue-100 hover:border-blue-500"
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div className="w-[320px] flex justify-around items-center">
              {/* Display Sign Up and Login buttons only if user is not logged in */}
              <Link to="/login">
                <button className="border-2 hover:border-blue-600 text-white font-semibold rounded-lg transition duration-300 w-[150px] h-[50px]">
                  Login
                </button>
              </Link>
              <Link to="/signUp">
                <button className="bg-[#FBF9F4] border-[#FBF9F4] border-2 hover:border-blue-600 text-black font-semibold py-2 px-4 rounded-lg transition duration-300 w-[150px] h-[50px]">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>
        <div className="w-[700px] h-[400px] mt-[100px] relative group">
          <div
            style={{ backgroundImage: `url(${slides[currentSlideImage].url})` }}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
          >
            {/* left arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-4xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <MdKeyboardArrowLeft onClick={previousSlides} size={50} />
            </div>
            {/* right arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-4xl  rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <MdKeyboardArrowRight onClick={nextSlides} size={50} />
            </div>
          </div>
        </div>
        <div className="flex top-4 justify-center py-[4px]">
          {slides.map((slide, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className={`text-2xl cursor-pointer flex items-center justify-center ${
                index === currentSlideImage
                  ? "text-4xl transition-all duration-200 transform scale-125"
                  : ""
              }`}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
