import React from "react"
import{Link} from 'react-router-dom'
import './ContactPages.css';
import Header from "../Components/Headers/Header"
import Footer from "../Components/Footer/Footer";
const Contact =() => {
    return(

    <div className="Da">
    <Header/>
    <div className="contact" id="scroller">
    <h1 className="dd">Contact Us</h1>
    <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>
    <h2>General Enquiries</h2>
            <p>Vivekanand College Main Campus
            [Your College Full Address Here, e.g., Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]
                India
                <br/>Phone: +91 12345 67890
                <br/>Email: info@vivekanandcollege.edu
                <br/>Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST
            </p>
            <h2>Admissions Office</h2>
                <p>For all admission-related queries regarding undergraduate or postgraduate programs:
                    <br/>Phone: +91 98765 43210
                    <br/>Email: admissions@vivekanandcollege.edu
                </p>
            <h2>Student Support Services</h2>
                <p>For current student support, academic advising, or general assistance:
                    <br/>Phone: +91 87654 32109
                    <br/>Email: studentsupport@vivekanandcollege.edu
                </p>
            <h2>Find Us on the Map</h2>
                <p>[You can embed a Google Map here later using an iframe or a React map library.]<br/>
                 <a href="https://www.google.com/maps/place/Vivekanand+College/data=!4m7!3m6!1s0x3bc100664ad0e191:0x4b2af9253659bbec!8m2!3d16.7123502!4d74.2386097!16s%2Fg%2F11f_zngrbh!19sChIJkeHQSmYAwTsR7LtZNiX5Kks?authuser=0&hl=en&rclk=1"   >View on Google Maps</a>
                </p>
            <h2>Send Us a Message</h2>
                <p>[A contact form with fields for Name, Email, Subject, Message can be added here.]</p>
        </div>
        <Footer/>
        </div>
    )
}

        
export default Contact;