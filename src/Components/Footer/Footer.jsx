import React from 'react';
import twitter from "../../assets/icon/twitter.png"
import linkedIn from "../../assets/icon/linkedin.png"
import facebook from "../../assets/icon/facebook.png"
import mail from "../../assets/icon/mail.png"

const Footer = () => {
    return (
        <>
            <footer className="footer sm:footer-horizontal bg-neutral-950 text-neutral-content p-10">
                <aside>
                    <h2 className='font-bold text-2xl'>CS-Ticket System</h2>
                    <p className='w-64'>
                        CS-Ticket is a professional customer support management system designed to streamline ticket handling, improve team collaboration, track performance metrics, and deliver efficient, reliable service solutions
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Our Mission</a>
                    <a className="link link-hover">Contact Saled</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Product & Services</a>
                    <a className="link link-hover">Customer Stories</a>
                    <a className="link link-hover">Dowanload Apps</a>

                </nav>
                <nav>
                    <h6 className="footer-title">Information</h6>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Join Us</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social Links</h6>
                    <div className='flex items-center gap-4'>
                        <img src={twitter} alt="" className='bg-white rounded-full w-4.5 p-1' />
                        <p>@CS-Ticket System</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <img src={linkedIn} alt="" className='w-5' />
                        <p>@CS-Ticket System</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <img src={facebook} alt="" className='w-5' />
                        <p>@CS-Ticket System</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <img src={mail} alt="" className='w-5' />
                        <p>suport@cst.com</p>
                    </div>
                </nav>
            </footer>
            <div className='border-t-2 px-8 bg-neutral-950 mx-auto'></div>
            <footer className="footer sm:footer-horizontal footer-center bg-neutral-950 text-neutral-content p-4 ">
                
                <aside >
                    <p>Copyright © 2025 - Ticket System. All rights reserved </p>
                </aside>
            </footer>
        </>
    );
};

export default Footer;