const Navigation = () => {

    return (
            <nav className="container">
                <div className='logo'>
                    <img src='/images/brand_logo.png' alt='brand-logo' />
                </div>
                <ul>
                    <li href="#">Menu</li>
                    <li href="#">About</li>
                    <li href="#">Contact</li>
                    <li href="#">Location</li>
                </ul>
                <button>Login</button>
            </nav>
    );
};

export default Navigation