import { Link } from "react-router-dom";
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { HiLocationMarker } from 'react-icons/hi';
import Container from "../../components/Container";

const Footer = () => {
    return (
        <div className="bg-base-200">
            <Container>
                <footer className="footer bg-base-200 p-10 justify-center w-full sm:grid-cols-2 sm:grid lg:grid-cols-4 text-base-content">
                    <div className="flex h-[100%] items-center mx-auto">
                        <Link className="font-extrabold text-2xl uppercase" to='/'><h1 className="font-extrabold text-2xl uppercase tracking-[4px]">Playfit <span className="block tracking-[6px]">sports</span></h1>Academy</Link>
                    </div>
                    <div className="mx-auto">
                        <span className="footer-title">Institute</span>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Classes</a>
                        <a className="link link-hover">Instructors</a>
                    </div>
                    <div className="mx-auto">
                        <span className="footer-title">Contact With Us</span>
                        <a className="link link-hover flex gap-2 items-center" href="mailto:playfitsports@example.com"><MdEmail></MdEmail>playfitsports@example.com</a>
                        <a className="link link-hover flex gap-2 items-center" href="tel:+880175...."><BsFillTelephoneFill></BsFillTelephoneFill>+880175....</a>
                        <p className="link link-hover flex gap-2 items-center"><HiLocationMarker></HiLocationMarker>Kazipur, Sirajganj, Bangladesh</p>

                    </div>
                    <div className="mx-auto">
                        <span className="footer-title">Legal</span>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                </footer>
            </Container>
            <div className="footer footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p>Copyright © 2023 - All right reserved by <span className="uppercase font-bold text-white">Playfit sports academy</span></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;