import Navbar from "../template/home/Navbar";
import HeroSection from "../template/home/HeroSection"
import Images from "../template/home/Images";
import Book from "../template/home/Book";
import MoreAboutUs from "../template/home/MoreAboutUs";
import Footer from "../template/home/Footer";

let Home = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <Images />
            <Book />
            <MoreAboutUs />
            <Footer/>
        </>
    )
}

export default Home;