import './Footer.css';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-black mt-60 text-white px-2 md:px-6 lg:px-12 ' id='footer'>
        <div className='footer flex flex-col items-center md:items-start md:flex-row md:justify-between'>
            <div className="footer-start flex flex-col items-center md:items-start py-1 md:py-6">
                <h1 className='text-2xl font-semibold text-orange-600'>FooDi</h1>
                <p className='text-start'>Famous Food Delivery App in Bangladesh.</p>
                <div className='flex gap-3'>
                    <FaFacebookSquare className='cursor-pointer'></FaFacebookSquare>
                    <FaInstagramSquare className='cursor-pointer'></FaInstagramSquare>
                    <FaLinkedin className='cursor-pointer'></FaLinkedin>
                </div>
            </div>
            <div className="footer-middle flex flex-col items-center md:items-start py-1 md:py-6">
                <h2 className='text-center md:text-start'>COMPANY</h2>
                <ul className='text-center md:text-start'>
                    <li className='cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>About us</li>
                    <li className='cursor-pointer'>Delivery</li>
                    <li className='cursor-pointer'>Privacy&Policy</li>
                </ul>
            </div>
            <div className="footer-end flex flex-col items-center md:items-start py-1 md:py-6 ">
                <h1>GET IN TOUCH</h1>
                <p className='cursor-pointer'>+88 017********</p>
                <p className='cursor-pointer'>mdkabirulhossainj@gmail.com</p>
                
            </div>
        </div>
        <div >
            <hr />
            <p className='text-center text-sm p-1'>Copyright-2024 @FooDi - All Right Reserved</p>
        </div>

        </div>
    );
};

export default Footer;