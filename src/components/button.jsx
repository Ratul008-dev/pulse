import React from 'react'
import './button.css'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Button() {
    const navigate = useNavigate();
    const location = useLocation();

    const pages=["/", "/about", "/blog", "/contact"];
    const currentIndex = pages.indexOf(location.pathname);
    const nextPage= pages[(currentIndex + 1) % pages.length];

    return (
        <button className="custom-button" onClick={() => navigate(nextPage)}>
            Go Next <span className="arrow">&rarr;</span>
        </button>
    );
}