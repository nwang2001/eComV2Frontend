import '../css/Header.css'

export default function Header() {
    return (
            <header>
            <nav className="main-nav">
                    <a href="/">
                        <img
                        className="logo"
                            src="img/logo.png"
                            alt="Color Splash logo and name"
                        />
                    </a>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/store">Store</a>
                        </li>
                    <li>
                            <a href="/contact">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        )
}