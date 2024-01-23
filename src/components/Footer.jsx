import '../css/Footer.css'

export default function Footer() {
    function validateForm(e) {
        e.preventDefault();
        var email = document.getElementById("emailBottom").value;
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return false;
        }

        alert(`Thank you for registering!\nYou have successfully subscribed your email, ${email}, to receive updates.`)
        return true;
    }

    return (
        <footer>
            <div className="bottom-links">
                <div>
                    <p className="bottom-header"> Color Splash</p>
                    <ul className="footer-nav">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/store">Store</a>
                        </li>
                        <li>
                            <a href="/contact">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="bottom-header">Socials</p>
                    <ul className="footer-icons">
                        <li>
                            <a href="https://www.facebook.com/">
                                <img
                                    className="icons"
                                    src="../../img/facebook.png"
                                    alt="facebook icon"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/">
                                <img
                                    className="icons"
                                    src="../../img/instagram.png"
                                    alt="instagram icon"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/">
                                <img
                                    className="icons"
                                    src="../../img/twitterx.png"
                                    alt="twitter icon"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.tiktok.com/">
                                <img className="icons" src="../../img/tiktok.png" alt="tiktok icon" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/">
                                <img
                                    className="icons"
                                    src="../../img/linkedin.png"
                                    alt="linkedin icon"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/">
                                <img className="icons" src="../../img/youtube.png" alt="youtube icon" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="bottom-header">Subscribe now to receive updates! </p>
                    <form onSubmit={validateForm}>
                        <label htmlFor="emailBottom" id="emailBottomLabel">Enter email:</label>
                        <br />
                        <input id="emailBottom" type="text" />
                        <input type="submit" />
                    </form>
                </div>
            </div>
            <hr />

            <div className="bottom-content">
                <ul>
                    <li>
                        Terms &amp; Conditions
                        &nbsp;
                    </li>
                    <li>
                        | &nbsp;
                    </li>
                    <li>
                        Privacy Policy
                        &nbsp;
                    </li>
                    <li>
                        | &nbsp;
                    </li>
                    <li>
                        Pledge
                        &nbsp;
                    </li>
                    <li>
                        | &nbsp;
                    </li>
                    <li>
                        Careers
                        &nbsp;
                    </li>
                    <li>
                        | &nbsp;
                    </li>
                    <li>
                        Support
                        &nbsp;
                    </li>
                </ul>
                <p>© 2024 Color Splash, All rights reserved.</p>
            </div>
        </footer>
    )
}