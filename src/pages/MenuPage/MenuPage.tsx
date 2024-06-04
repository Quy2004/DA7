import { useState } from "react";
import { Link, Outlet } from "react-router-dom";


interface SidebarItem {
    text: string;
    link?: string; // Optional link for the item
}

const MenuPage: React.FC = () => {
    const sidebarItems: SidebarItem[] = [
        { text: "Tất cả", link: "" },
        { text: "Trà", link: "teaside" },
        { text: "Cà phê", link: "#" },
        { text: "Hi-Tea Healthy", link: "#" },
        { text: "Bánh & Snack", link: "#" },
    ];

    const [activeItem, setActiveItem] = useState<string | null>(null);

    const handleClick = (text: string) => {
        setActiveItem(text); // Update active item on click
    };

    return (
        <>
            <div>
                <div className="containerAll mt-16 flex mx-auto">
                    <div className="siderbar border-2 border-red-500 min-w-60">
                        <ul className="text-left mx-6">
                            {sidebarItems.map((item) => (
                                <li key={item.text} className="py-2">
                                    <Link
                                        to={item.link || ""}
                                        className={activeItem === item.text ? "active  text-orange-500 font-bold -translate-y-6" : ""}
                                        onClick={() => handleClick(item.text)}
                                    >
                                        <h3 className=" ease-in-out hover:-translate-y-1" >{item.text}</h3>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="allproduct border-2 border-red-500 flex-1">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MenuPage;