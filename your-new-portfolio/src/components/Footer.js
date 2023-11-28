import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <h4>Connect with Me</h4>
                <ul>
                    <li>
                        <a 
                            href="https://github.com/lafrefre?tab=repositories"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/miranda-mendoza-b71bb6273/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;