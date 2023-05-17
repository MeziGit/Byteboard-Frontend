import React from "react";
import "./App.css";

function Footer() {
    return (
        <div className="footer">
            <p className="footer-title">ByteBoard</p>
            <p className="footer-copyright">© {(new Date().getFullYear())} ByteBoard. All rights reserved.</p>
            <p className="footer-contact">
                Contact us: <br />
                Phone: +1 (123) 456-7890 <br />
                Email: contact@byteboard.com
            </p>
        </div>
    )
}

export default Footer;
