import '../style.css'

export default function Navbar() {
    return (
        <div className='nav'>
            <a href="/" className='icon'>Web Scraping</a>
            <ul>
                <li className='active'>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/profile">Profile</a>
                </li>
            </ul>
        </div>
    )
}