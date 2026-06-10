import { useState } from "react";
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
                Azamara Ship Comparison
              </NavLink>

              <NavLink
                to="/azamara-vs-regent-seven-seas"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Azamara vs Regent Seven Seas
              </NavLink>

              <NavLink
                to="/azamara-vs-seabourn"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Azamara vs Seabourn
              </NavLink>

              <NavLink
                to="/azamara-dining-guide"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Azamara Dining Guide
              </NavLink>

              <NavLink
                to="/azamara-alaska-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Azamara Alaska Cruises
              </NavLink>

              <NavLink
                to="/azamara-norway-fjords-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Azamara Norway Fjords Cruises
              </NavLink>

              <NavLink
                to="/luxury-explora-journeys-guide"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Luxury Explora Journeys Guide
              </NavLink>

              <NavLink
                to="/is-explora-journeys-worth-it"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Is Explora Journeys Worth It?
              </NavLink>

              <NavLink
                to="/explora-journeys-cruise-inclusions"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Explora Journeys Cruise Inclusions
              </NavLink>

              <NavLink
                to="/how-much-does-an-explora-cruise-cost-2026-2027"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                How Much Does an Explora Cruise Cost?
              </NavLink>

              <NavLink
                to="/explora-journeys-vs-seabourn"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Explora Journeys vs Seabourn
              </NavLink>

              <NavLink
                to="/faculty-led-travel-programs"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Faculty-Led Travel Programs
              </NavLink>

              <NavLink
                to="/educational-travel-programs"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Educational Travel Programs
              </NavLink>

              <NavLink
                to="/luxury-alumni-travel"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Luxury Alumni Travel
              </NavLink>

              <NavLink
                to="/alumni-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Alumni Cruises
              </NavLink>

              <NavLink
                to="/university-group-travel-planning"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                University Group Travel Planning
              </NavLink>

              <NavLink
                to="/why-universities-partner-with-travel-companies"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Why Universities Partner With Travel Companies
              </NavLink>

              <NavLink
                to="/alumni-river-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Alumni River Cruises
              </NavLink>

              <NavLink
                to="/alumni-expedition-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Alumni Expedition Cruises
              </NavLink>

              <NavLink
                to="/small-ship-alumni-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Small Ship Alumni Cruises
              </NavLink>

              <NavLink
                to="/donor-travel-programs"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Donor Travel Programs
              </NavLink>

              <NavLink
                to="/multi-generational-alumni-travel"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Multi-Generational Alumni Travel
              </NavLink>

              <NavLink
                to="/why-trips-and-ships-luxury-travel-for-universities"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Why Trips and Ships Luxury Travel for Universities
              </NavLink>

              <NavLink
                to="/disney-cruise-vs-viking-ocean-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Disney Cruise vs Viking Ocean Cruises
              </NavLink>

              <NavLink
                to="/disney-cruises-for-grandparents-and-multigenerational-families"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Disney Cruise For Multigenerational Families
              </NavLink>

              <NavLink
                to="/disney-alaska-vs-princess-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Disney Alaska vs Princess Cruises
              </NavLink>

              <NavLink
                to="/disney-alaska-vs-holland-america"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Disney Alaska vs Holland America
              </NavLink>

              <NavLink
                to="/is-disney-cruise-really-just-for-kids"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Is Disney Cruise Really For Kids
              </NavLink>

              <NavLink
                to="/disney-alaska-cruises"
                className="nav-dropdown-single"
                onClick={toggleMenu}
              >
                Disney Alaska Cruises
              </NavLink>
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
            <NavLink
              to="/azamara-ship-comparison"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Azamara Ship Comparison
            </NavLink>

            <NavLink
              to="/azamara-vs-regent-seven-seas"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Azamara vs Regent Seven Seas
            </NavLink>

            <NavLink
              to="/azamara-vs-seabourn"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Azamara vs Seabourn
            </NavLink>

            <NavLink
              to="/azamara-dining-guide"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Azamara Dining Guide
            </NavLink>

            <NavLink
              to="/azamara-alaska-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Azamara Alaska Cruises
            </NavLink>

            <NavLink
              to="/azamara-norway-fjords-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Azamara Norway Fjords Cruises
            </NavLink>

            <NavLink
              to="/luxury-explora-journeys-guide"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Luxury Explora Journeys Guide
            </NavLink>

            <NavLink
              to="/is-explora-journeys-worth-it"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Is Explora Journeys Worth It?
            </NavLink>

            <NavLink
              to="/explora-journeys-cruise-inclusions"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Explora Journeys Cruise Inclusions
            </NavLink>

            <NavLink
              to="/how-much-does-an-explora-cruise-cost-2026-2027"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              How Much Does an Explora Cruise Cost?
            </NavLink>

            <NavLink
              to="/explora-journeys-vs-seabourn"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Explora Journeys vs Seabourn
            </NavLink>

            <NavLink
              to="/faculty-led-travel-programs"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Faculty-Led Travel Programs
            </NavLink>

            <NavLink
              to="/educational-travel-programs"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Educational Travel Programs
            </NavLink>

            <NavLink
              to="/luxury-alumni-travel"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Luxury Alumni Travel
            </NavLink>

            <NavLink
              to="/alumni-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Alumni Cruises
            </NavLink>

            <NavLink
              to="/university-group-travel-planning"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              University Group Travel Planning
            </NavLink>

            <NavLink
              to="/why-universities-partner-with-travel-companies"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Why Universities Partner With Travel Companies
            </NavLink>

            <NavLink
              to="/alumni-river-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Alumni River Cruises
            </NavLink>

            <NavLink
              to="/alumni-expedition-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Alumni Expedition Cruises
            </NavLink>

            <NavLink
              to="/small-ship-alumni-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Small Ship Alumni Cruises
            </NavLink>

            <NavLink
              to="/donor-travel-programs"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Donor Travel Programs
            </NavLink>

            <NavLink
              to="/multi-generational-alumni-travel"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Multi-Generational Alumni Travel
            </NavLink>

            <NavLink
              to="/why-trips-and-ships-luxury-travel-for-universities"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Why Trips and Ships Luxury Travel for Universities
            </NavLink>

            <NavLink
              to="/disney-cruise-vs-viking-ocean-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Disney Cruise vs Viking Ocean Cruises
            </NavLink>

            <NavLink
              to="/disney-cruises-for-grandparents-and-multigenerational-families"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Disney Cruise For Multigenerational Families
            </NavLink>

            <NavLink
              to="/disney-alaska-vs-princess-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Disney Alaska vs Princess Cruises
            </NavLink>

            <NavLink
              to="/disney-alaska-vs-holland-america"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Disney Alaska vs Holland America
            </NavLink>

            <NavLink
              to="/is-disney-cruise-really-just-for-kids"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Is Disney Cruise Really For Kids
            </NavLink>

            <NavLink
              to="/disney-alaska-cruises"
              className="nav-dropdown-single"
              onClick={toggleMenu}
            >
              Disney Alaska Cruises
            </NavLink>

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
