import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <section>
            <footer>
                <div className="footer p-10 lg:pl-20 bg-[#303030] text-white">
                    <aside className="space-y-3">
                            <Link><div className="flex items-center">
                                <img src="https://i.ibb.co/QFLk4p3/logo.png" className="w-20 h-14" alt="Logo" />
                                <p className=" font-jost text-white text-xl lg:text-3xl -ml-5">SPORT CAPSULE</p>
                            </div></Link>
                        <p className="text-left block lg:block md:hidden">Your gateway to style and performance. Explore top fashion brands like <br /> Nike, Adidas, Gucci, and more on our premier fashion and apparel platform.</p>
                        <div className="flex gap-3 text-xl ">
                            <p><BsFacebook></BsFacebook></p>
                            <p><BsTwitter></BsTwitter></p>
                            <p><BsInstagram></BsInstagram></p>
                        </div>
                    </aside>
                    <div className="footer grid grid-cols-2 md:grid-cols-4 mx-auto w-auto  gap-6">
                        <nav>
                            <header className="footer-title font-jost">About</header>
                            <a className="link link-hover">Browse Categories</a>
                            <a className="link link-hover">Testimonials</a>
                            <a className="link link-hover">Terms & Condition</a>
                        </nav>
                        <nav>
                            <header className="footer-title font-jost">Account</header>
                            <a className="link link-hover">Orders</a>
                            <a className="link link-hover">Wishlist</a>
                            <a className="link link-hover">Payment Info</a>
                        </nav>
                        <nav>
                            <header className="footer-title font-jost">Support</header>
                            <a className="link link-hover">Help Desk</a>
                            <a className="link link-hover">Return Policy</a>
                            <a className="link link-hover">Privacy Policy</a>
                        </nav>
                        <nav>
                            <header className="footer-title font-jost">Contact</header>
                            <a className="link link-hover">123 Main Street Chicago, IL 60601 USA </a>
                            <a className="link link-hover">Customer Care: +1 (312) 555-1234</a>
                        </nav>
                    </div>
                </div>
                <hr />
                <div className="flex items-center p-4 pl-20 bg-[#303030] text-white justify-between">
                    <p>Copyright © 2023 - All right reserved</p>
                    <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                        Developed by: <Link to='https://github.com/Shabnaz21'>Shabnaz</Link>
                    </nav>
                </div>
            </footer>
        </section>
    );
};

export default Footer;