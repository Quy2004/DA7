import { Link } from "react-router-dom"

const Header: React.FC = () => {
    return (
        <header className="" >
            <div className=" flex h-16 bg-white bg-opacity-70 max-w items-center gap-8 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto inner-header">
                    <nav aria-label="Global" className="hidden md:block">
                        <ul className="flex items-center gap-6 text-sm" id="main-menu">
                            <li>
                                <Link to="/" className="bg-none">
                                    <img className="h-16" src="/src/assets/images/bg-remove-cf.png" alt="" />
                                </Link>
                            </li>

                            <li>
                                <Link className="" to="#" >
                                    <p> Trà </p>
                                </Link>
                            </li>

                            <li>
                                <Link className="" to="#">
                                    <p>Cà Phê</p>
                                </Link>
                            </li>

                            <li>
                                <Link className="" to="/menu" >
                                    <p>Menu</p>
                                </Link>
                            </li>

                            <li>
                                <Link className="" to="/chuyennha">
                                    <p>Chuyện nhà</p>
                                </Link>
                            </li>

                            <li>
                                <Link className="" to="#">
                                    <p>Tài Khoản</p>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header