import '../css/Header2.css'

export default function Header2() {
    return (
        <header className='two'>
            <nav className="main-nav">
                <a href="/">
                    <img
                        className="logo"
                        src="img/logo2.png"
                        alt="Color Splash logo and name"
                    />

                    <img
                        className="minilogo"
                        src="img/minilogo2.png"
                        alt="mini Color Splash logo and name"
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