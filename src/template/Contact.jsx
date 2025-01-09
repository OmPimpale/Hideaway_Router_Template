import ContactForm from "./contact/ContactForm";
import HeroContact from "./contact/HeroContact";
import Footer from "./home/Footer";
import Navbar from "./home/Navbar";

let Contact = () => {
    return (
        <>
            <Navbar />
            <HeroContact />
            <ContactForm />
            <Footer />
        </>
    )
}

export default Contact;