

import './Footer.css'

export default function Footer() {

    return (
        <>
            <footer className="footer-content">
                <div className="footer-section quick-links footer-bottom-section">


                    <ul>
                        <li>
                            <a href="mailto:aydagonzalez15@gmail.com">
                            <img src="/mail-icon.png" alt="LinkedIn" className='footer-imgs' />
                                </a>     
                            
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/aydagonzalez15/">
                            <img src="/LI-In-Bug.png" alt="LinkedIn" className='footer-imgs' />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/aydagonzalez15">
                            <img src="/github-mark-white.png" alt="GitHub" className='footer-imgs'  />
                            </a>
                        </li>
                    </ul>
                    <h5> Date Night by Ayda Gonzalez &copy; 2024 </h5>
                </div>

            </footer>
        </>
    )
}