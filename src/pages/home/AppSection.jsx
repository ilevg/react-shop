import { Link } from "react-router-dom"

const btnText = 'Sing up for Free'
const title = 'Shop Anytime, Anywhere'
const desc = 'Take shop on your any devices with our App & learn all time what you want. Just download and install'

const AppSection = () => {
    return (
        <div className="app-section padding-tb">
            <div className="container">
                <div className="section-header text-center">
                    <Link to="/sing-up" className="lab-btn mb4">{btnText}</Link>
                    <h2 className="title">{title}</h2>
                    <p>{desc}</p>
                </div>

                <div className="section-wrapper">
                    <ul className="lab-ul">
                        <li>
                            <a href="#">
                                <img src="/images/app/01.jpg" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/images/app/02.jpg" alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AppSection
