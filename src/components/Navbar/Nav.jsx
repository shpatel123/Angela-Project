import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Nav = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleHomeDropdown = (e) => {
        e.preventDefault();
        setHomeDropdownOpen(!homeDropdownOpen);
    };

    return (
        <nav className="navbar">
            <div
                className="logo"
                onClick={() => navigate("/")}
                style={{ cursor: "pointer" }}
            >
                TRIPS & SHIPS
            </div>

            <div className="nav-links">
                <div className="nav-dropdown-wrapper">
                    <Link to="/" className="nav-dropdown-trigger">
                        HOME <i className="fas fa-angle-down"></i>
                    </Link>
                    <div className="nav-dropdown-menu">
                        <div className="nav-dropdown-group">
                            <NavLink
                                to="/azamara-ship-comparison"
                                className="nav-dropdown-single"
                                onClick={toggleMenu}
                            >
                                Azamara Ship Comparison</NavLink>

                            <NavLink
                                to="/azamara-vs-regent-seven-seas"
                                className="nav-dropdown-single"
                                onClick={toggleMenu}
                            >
                                Azamara vs Regent Seven Seas</NavLink>

                            <NavLink
                                to="/azamara-vs-seabourn"
                                className="nav-dropdown-single"
                                onClick={toggleMenu}
                            >
                                Azamara vs Seabourn</NavLink>


                        </div>
                    </div>
                </div>
                <a href="#">EXPERIENCES</a>
                <a href="#">MEETINGS & INCENTIVES</a>
                <a href="#">ALUMNI TRAVEL</a>
                <a href="#">VIP HOTELS</a>
                <a href="#">ABOUT & RESOURCES</a>
                <a href="#">BLOG</a>
            </div>

            <div className="nav-right">
                <button className="nav-btn">CONTACT</button>
            </div>

            <div className="hamburger" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className={`offcanvas-menu ${menuOpen ? "active" : ""}`}>
                <div className="close-btn" onClick={toggleMenu}>
                    ×
                </div>

                <div className="mobile-dropdown-wrapper">
                    <div className="mobile-dropdown-trigger" onClick={toggleHomeDropdown}>
                        HOME{" "}
                        <i
                            className={`fas fa-angle-${homeDropdownOpen ? "up" : "down"}`}
                        ></i>
                    </div>
                    <div
                        className={`mobile-dropdown-menu ${homeDropdownOpen ? "active" : ""}`}
                    >
                        <span className="mobile-dropdown-title">ANTARCTICA</span>
                        <NavLink to="/emerald-yachts" onClick={toggleMenu}>
                            Emerald Yachts
                        </NavLink>
                        <NavLink to="/antarctica-cruise-cost" onClick={toggleMenu}>
                            Antarctica Cruise Cost
                        </NavLink>
                        <NavLink to="/scenic-antarctica-cruise" onClick={toggleMenu}>
                            Scenic Antarctica Cruises
                        </NavLink>
                        <NavLink to="/scenic-vs-silversea-antarctica" onClick={toggleMenu}>
                            Scenic vs Silversea Antarctica
                        </NavLink>
                        <NavLink to="/ScenicvsEmeraldYachts" onClick={toggleMenu}>
                            Scenic vs Emerald Yachts
                        </NavLink>
                        <NavLink to="/DrakePassagePage" onClick={toggleMenu}>
                            The Drake Passage
                        </NavLink>
                        <NavLink
                            to="/luxury-travel"
                            onClick={toggleMenu}
                            className="mobile-dropdown-single"
                        >
                            Luxury Travel
                        </NavLink>
                        <NavLink
                            to="/emerald-azzurra-vs-emerald-sakara"
                            onClick={toggleMenu}
                        >
                            Emerald Azzurra vs Emerald Sakara
                        </NavLink>
                        <NavLink
                            to="/scenic-vs-four-seasons-yachts"
                            onClick={toggleMenu}
                            className="mobile-dropdown-single"
                        >
                            Scenic vs Four Seasons Yachts
                        </NavLink>
                        <NavLink
                            to="/emerald-yachts-vs-ritz-carlton-yacht-collection"
                            className="nav-dropdown-single"
                            onClick={toggleMenu}
                        >
                            Emerald Yachts vs Ritz-Carlton Yacht Collection
                        </NavLink>
                        <NavLink
                            to="/luxury-yacht-cruises"
                            className="nav-dropdown-single"
                            onClick={toggleMenu}
                        >
                            Luxury Yacht Cruises
                        </NavLink>

                        <NavLink
                            to="/riverside-vs-viking-river-cruises"
                            className="nav-dropdown-single"
                            onClick={toggleMenu}
                        >
                            Riverside vs Viking River Cruises
                        </NavLink>

                        <NavLink
                            to="/riverside-vs-amawaterways"
                            className="nav-dropdown-single"
                            onClick={toggleMenu}
                        >
                            Riverside vs AmaWaterways
                        </NavLink>

                        <NavLink
                            to="/distinctive-voyage-sailings"
                            className="nav-dropdown-single"
                            onClick={toggleMenu}
                        >
                            Distinctive Voyage Sailings
                        </NavLink>

                        <NavLink
                            to="/luxury-travel-to-japan"
                            className="nav-dropdown-single"
                        >
                            Luxury travel to Japan
                        </NavLink>

                        <NavLink
                            to="/trip-to-japan"
                            className="nav-dropdown-single"
                            onClick={toggleMenu}
                        >
                            Trip To Japan
                        </NavLink>

                        <NavLink
                            to="/first-time-japan-itinerary"
                            className="nav-dropdown-single"
                            onClick={toggleMenu}
                        >
                            First Time Japan Itinerary
                        </NavLink>

                        <NavLink
                            to="/japan-travel-cost"
                            className="nav-dropdown-single"
                            onClick={toggleMenu}
                        >
                            Japan Travel Cost
                        </NavLink>

                        <NavLink
                            to="/best-time-to-visit-japan"
                            className="nav-dropdown-single"
                            onClick={toggleMenu}
                        >
                            Best Time to Visit Japan
                        </NavLink>

                        <NavLink
                            to="/japan-land-vs-cruise"
                            className="nav-dropdown-single"
                            onClick={toggleMenu}
                        >
                            Japan Land vs Cruise
                        </NavLink>

                        <NavLink
                            to="/azamara-cruises-guide-2026-2027"
                            className="nav-dropdown-single"
                            onClick={toggleMenu}
                        >
                            Azamara Cruises Guide 2026-2027
                        </NavLink>

                        <NavLink
                            to="/azamara-vs-viking-ocean-cruises"
                            className="nav-dropdown-single"
                            onClick={toggleMenu}
                        >
                            Azamara Vs Viking Ocean Cruises
                        </NavLink>

                        <NavLink
                            to="/azamara-cabins-guide"
                            className="nav-dropdown-single"
                            onClick={toggleMenu}
                        >
                            Azamara Cabins Guide
                        </NavLink>

                        <NavLink
                            to="/azamara-alaska-cruises"
                            className="nav-dropdown-single"
                            onClick={toggleMenu}
                        >
                            Azamara Alaska Cruises
                        </NavLink>

                        <NavLink
                            to="/azamara-cabins-alaska-guide"
                            className="nav-dropdown-single"
                            onClick={toggleMenu}
                        >
                            Azamara Cabins Alaska Guide
                        </NavLink>

                        <NavLink
                            to="/world-cruises"
                            className="nav-dropdown-single"
                            onClick={toggleMenu}
                        >
                            World Cruises
                        </NavLink>

                        <NavLink
                            to="/world-cruise-cost"
                            className="nav-dropdown-single"
                            onClick={toggleMenu}
                        >
                            World Cruise Cost
                        </NavLink>

                        <NavLink
                            to="/regent-seven-seas-world-cruise-guide"
                            className="nav-dropdown-single"
                            onClick={toggleMenu}
                        >
                            Regent Seven Seas World Cruise Guide
                        </NavLink>

                        <NavLink
                            to="/luxury-kenya-safari-micato"
                            className="nav-dropdown-single"
                            onClick={toggleMenu}
                        >
                            Luxury Kenya Safari Micato
                        </NavLink>

                        <NavLink
                            to="/kenya-vs-tanzania-safari"
                            className="nav-dropdown-single"
                            onClick={toggleMenu}
                        >
                            Kenya Vs Tanzania Safari
                        </NavLink>

                        <NavLink
                            to="/best-time-great-migration-safari"
                            className="nav-dropdown-single"
                            onClick={toggleMenu}
                        >
                            Best Time Great Migration Safari
                        </NavLink>

                        <NavLink
                            to="/luxury-kenya-safari"
                            className="nav-dropdown-single"
                            onClick={toggleMenu}
                        >
                            Luxury Kenya Safari
                        </NavLink>

                        <NavLink
                            to="/luxury-african-safari-cost"
                            className="nav-dropdown-single"
                            onClick={toggleMenu}
                        >
                            Luxury African Safari Cost
                        </NavLink>

                        <NavLink
                            to="/best-african-safari-for-first-timers"
                            className="nav-dropdown-single"
                            onClick={toggleMenu}
                        >
                            Best African Safari for First-Timers
                        </NavLink>

                        <NavLink
                            to="/best-african-safari-for-families/"
                            className="nav-dropdown-single"
                            onClick={toggleMenu}
                        >
                            Best African Safari for Families</NavLink>


                        <NavLink
                            to="/azamara-mediterranean-cruises"
                            className="nav-dropdown-single"
                            onClick={toggleMenu}
                        >
                            Azamara Mediterranean Cruises</NavLink>


                        <span className="mobile-dropdown-divider"></span>
                    </div>
                </div>

                <a href="#">EXPERIENCES</a>
                <a href="#">MEETINGS & INCENTIVES</a>
                <a href="#">ALUMNI TRAVEL</a>
                <a href="#">VIP HOTELS</a>
                <a href="#">ABOUT & RESOURCES</a>
                <a href="#">BLOG</a>
                <button className="nav-btn">CONTACT</button>
            </div>
        </nav>
    );
};

export default Nav;
