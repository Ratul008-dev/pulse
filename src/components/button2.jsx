import { useLocation, useNavigate } from "react-router-dom";
import'./button2.css'


export default function Back() {
    const navigate = useNavigate();
    const location = useLocation();

    const pages = ["/", "/about", "/blog", "/contact"];
    const currentIndex = pages.findIndex((p) => location.pathname === p);

    const prevPage =
        currentIndex > 0
            ? pages[currentIndex - 1]
            : pages[0];

    return (
        <button className="custom-button"
            onClick={() => navigate(prevPage)}
            disabled={currentIndex === -1}
        >
            <span className="arrow">&larr;</span> Go Back
        </button>
    );
}
