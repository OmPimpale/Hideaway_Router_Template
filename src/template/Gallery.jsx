import GalleryHero from "./gallery/GalleryHero";
import MainImg from "./gallery/MainImg";
import Footer from "./home/Footer";
import Navbar from "./home/Navbar";

let Gallery = () => {
    return (
        <>
            <Navbar />
            <GalleryHero />
            <MainImg />
            <Footer />
        </>
    )
}

export default Gallery;