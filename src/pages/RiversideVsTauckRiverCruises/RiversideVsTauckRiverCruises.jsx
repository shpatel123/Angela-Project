import { useState, useEffect } from "react";
import {
    Ship,
    Users,
    MapPin,
    Award,
    Check,
    Plus,
    Minus,
    ArrowRight,
    Star,
    ChefHat,
    Utensils,
    Sparkles,
    Compass,
    HeartHandshake,
    Plane,
    BadgePercent,
    Home,
    MapPinned,
    ShieldCheck,
    DollarSign,
    Waves,
    Bike,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

// NOTE: Replace these with your own Riverside vs. Tauck images once available.
// Folder suggestion: src/assets/RiversidevsTauck/
// import HeroImage1 from "../../assets/RiversidevsTauck/riverside-ship.jpg";
// import HeroImage2 from "../../assets/RiversidevsTauck/tauck-ship.jpg";
// import HeroImage3 from "../../assets/RiversidevsTauck/riverside-ship2.jpg";
// import RiversideOverviewImage from "../../assets/RiversidevsTauck/riverside-overview.jpg";
// import TauckOverviewImage from "../../assets/RiversidevsTauck/tauck-overview.jpg";
// import RiversideAtmosphereImage from "../../assets/RiversidevsTauck/riverside-atmosphere.jpg";
// import TauckAtmosphereImage from "../../assets/RiversidevsTauck/tauck-atmosphere.jpg";
// import RiversideFleetImage from "../../assets/RiversidevsTauck/riverside-fleet.jpg";
// import TauckFleetImage from "../../assets/RiversidevsTauck/tauck-fleet.jpg";
// import RiversideDiningImage from "../../assets/RiversidevsTauck/riverside-dining.jpg";
// import TauckDiningImage from "../../assets/RiversidevsTauck/tauck-dining.jpg";
// import RiversideSuiteImage from "../../assets/RiversidevsTauck/riverside-suite.jpg";
// import TauckSuiteImage from "../../assets/RiversidevsTauck/tauck-suite.jpg";
// import RiversideVsTauckCtaImage from "../../assets/RiversidevsTauck/riverside-tauck-cta.jpg";

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../RiversideLuxuryCruisesReviews/RiversideLuxuryCruisesReviews.css";

// Commented out images for comparison sections
// import RiversideImage from "../../assets/VikingDanubeRiverCruises/AmaSonata_Budapest_Parliment_building.webp";
// import TauckImage from "../../assets/VikingRiverCruises/DE_Passau_Danube.webp";

const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            name: "Trips & Ships Luxury Travel",
            url: "https://www.tripsandships.com",
            logo: "https://www.tripsandships.com/Copy-of-TRIPSSHIPS-e1592486640831.webp",
            sameAs: [
                "https://www.facebook.com/tripsandships/",
                "https://www.instagram.com/tripsandshipsluxurytravel",
            ],
            contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-603-860-3274",
                email: "sales@tripsandships.com",
                contactType: "customer service",
            },
        },
        {
            "@type": "TravelAgency",
            name: "Trips & Ships Luxury Travel",
            url: "https://www.tripsandships.com",
            logo: "https://www.tripsandships.com/Copy-of-TRIPSSHIPS-e1592486640831.webp",
            image: "https://www.tripsandships.com/Copy-of-TRIPSSHIPS-e1592486640831.webp",
            founder: { "@type": "Person", name: "Angela Hughes" },
            areaServed: "Worldwide",
            priceRange: "$$$$",
            telephone: "+1-603-860-3274",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Orlando",
                addressRegion: "FL",
                addressCountry: "US",
            },
        },
        {
            "@type": "Person",
            name: "Angela Hughes",
            jobTitle:
                "CEO, Trips & Ships Luxury Travel; Founder, Luxury Travel University",
            worksFor: {
                "@type": "Organization",
                name: "Trips & Ships Luxury Travel",
            },
            description:
                "Luxury travel expert with 40+ years in the travel industry and personal travel to 121+ countries. Global luxury travel speaker and trainer, weekly industry columnist, Travel Leaders Network Advisory Board member, 2024 Luxury Travel Influencer of the Year, and named one of the Most Influential Women in Travel in 2026 by TravelPulse.",
            award: [
                "2024 Luxury Travel Influencer of the Year — Travel Leaders Network",
                "2026 Most Influential Women in Travel — TravelPulse",
            ],
        },
        {
            "@type": "WebPage",
            name: "Riverside vs. Tauck River Cruises | Which Luxury River Cruise Is Better?",
            description:
                "Compare Riverside and Tauck River Cruises. Discover differences in ships, suites, dining, service, itineraries, inclusions, pricing, excursions, and which luxury river cruise line is the best fit for your travel style.",
            url: "https://www.tripsandships.com/riverside-vs-tauck-river-cruises",
            author: { "@type": "Person", name: "Angela Hughes" },
            publisher: {
                "@type": "Organization",
                name: "Trips & Ships Luxury Travel",
            },
            datePublished: "2026-08-01",
            dateModified: "2026-08-01",
        },
        {
            "@type": "BreadcrumbList",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.tripsandships.com/",
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "River Cruises",
                    item: "https://www.tripsandships.com/river-cruises",
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: "Riverside Luxury Cruises",
                    item: "https://www.tripsandships.com/riverside-luxury-cruises",
                },
                {
                    "@type": "ListItem",
                    position: 4,
                    name: "Riverside vs. Tauck",
                    item: "https://www.tripsandships.com/riverside-vs-tauck-river-cruises",
                },
            ],
        },
        {
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Is Riverside more luxurious than Tauck?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Both offer luxury experiences. Riverside emphasizes boutique elegance and spacious accommodations, while Tauck focuses on guided travel and destination immersion.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which cruise line has larger suites?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Riverside generally offers significantly larger suites.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which includes more excursions?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Tauck includes a broader range of guided and exclusive shore experiences.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which is better for first-time river cruisers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Both are excellent. Riverside offers a relaxed luxury introduction, while Tauck provides more structured guidance.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which cruise line is better for couples?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Both appeal to couples, though Riverside's intimate atmosphere is especially popular for romantic vacations.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Tauck include gratuities?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Tauck includes many items that other cruise lines charge separately for, though inclusions vary by itinerary.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which cruise line offers better value?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "If you prioritize accommodations, Riverside offers outstanding value. If you value comprehensive experiences and guided travel, Tauck may provide greater overall value.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which has more personalized service?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Both offer exceptional service, though Riverside's smaller fleet creates an especially intimate onboard atmosphere.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I use a travel advisor?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. A luxury travel advisor can compare both brands, identify the best itinerary, and help you choose the cruise that fits your travel style.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Do Riverside and Tauck sail the same rivers in Europe?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, both cruise lines sail major European rivers like the Danube and the Rhine. However, Tauck also has a broader presence across other global itineraries and destination packages, whereas Riverside focuses specifically on premium European riverways with its boutique ships.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How do the dining packages compare between Riverside and Tauck?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Tauck features fully all-inclusive dining and beverages included in the upfront cruise fare. Riverside offers a flexible approach, allowing guests to choose between all-inclusive packages or cruise-only rates where dining is included but premium alcoholic beverages and specific excursions can be purchased separately.",
                    },
                },
            ],
        },
    ],
};

function FAQ() {
    const [open, setOpen] = useState(null);

    const faqData = [
        {
            q: "Is Riverside more luxurious than Tauck?",
            a: "Both offer luxury experiences. Riverside emphasizes boutique elegance and spacious accommodations, while Tauck focuses on guided travel and destination immersion.",
        },
        {
            q: "Which cruise line has larger suites?",
            a: "Riverside generally offers significantly larger suites.",
        },
        {
            q: "Which includes more excursions?",
            a: "Tauck includes a broader range of guided and exclusive shore experiences.",
        },
        {
            q: "Which is better for first-time river cruisers?",
            a: "Both are excellent. Riverside offers a relaxed luxury introduction, while Tauck provides more structured guidance.",
        },
        {
            q: "Which cruise line is better for couples?",
            a: "Both appeal to couples, though Riverside's intimate atmosphere is especially popular for romantic vacations.",
        },
        {
            q: "Does Tauck include gratuities?",
            a: "Tauck includes many items that other cruise lines charge separately for, though inclusions vary by itinerary.",
        },
        {
            q: "Which cruise line offers better value?",
            a: "If you prioritize accommodations, Riverside offers outstanding value. If you value comprehensive experiences and guided travel, Tauck may provide greater overall value.",
        },
        {
            q: "Which has more personalized service?",
            a: "Both offer exceptional service, though Riverside's smaller fleet creates an especially intimate onboard atmosphere.",
        },
        {
            q: "Should I use a travel advisor?",
            a: "Yes. A luxury travel advisor can compare both brands, identify the best itinerary, and help you choose the cruise that fits your travel style.",
        },
        {
            q: "Do Riverside and Tauck sail the same rivers in Europe?",
            a: "Yes, both cruise lines sail major European rivers like the Danube and the Rhine. However, Tauck also has a broader presence across other global itineraries and destination packages, whereas Riverside focuses specifically on premium European riverways with its boutique ships.",
        },
        {
            q: "How do the dining packages compare between Riverside and Tauck?",
            a: "Tauck features fully all-inclusive dining and beverages included in the upfront cruise fare. Riverside offers a flexible approach, allowing guests to choose between all-inclusive packages or cruise-only rates where dining is included but premium alcoholic beverages and specific excursions can be purchased separately.",
        },
    ];

    return (
        <div className="Asc-faq-list">
            {faqData.map((item, i) => (
                <div
                    key={i}
                    className={`Asc-faq-item${open === i ? " Asc-open" : ""}`}
                    onClick={() => setOpen(open === i ? null : i)}
                >
                    <div className="Asc-faq-q">
                        <span>{item.q}</span>
                        <span className="Asc-faq-icon">
                            {open === i ? (
                                <Minus size={18} strokeWidth={1.5} />
                            ) : (
                                <Plus size={18} strokeWidth={1.5} />
                            )}
                        </span>
                    </div>
                    {open === i && (
                        <div className="Asc-faq-a">
                            <div className="Asc-faq-a-inner">{item.a}</div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

const RiversideVsTauck = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [ctaReadMore, setCtaReadMore] = useState(false);
    const [readMore, setReadMore] = useState(false);
    const images = [];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>
                    Riverside vs. Tauck River Cruises | Which Luxury River Cruise Is
                    Better?
                </title>
                <meta
                    name="title"
                    content="Riverside vs. Tauck | Luxury River Cruise Comparison"
                />
                <meta
                    name="description"
                    content="Compare Riverside and Tauck River Cruises. Discover differences in ships, suites, dining, service, itineraries, inclusions, pricing, excursions, and which luxury river cruise line is the best fit for your travel style."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>

            <Nav />

            {/* HERO */}
            <section className="Scenic_hero_section">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`Scenic_hero_bg ${index === currentSlide ? "active" : ""}`}
                        style={{ backgroundImage: `url(${img})` }}
                    ></div>
                ))}

                <div className="Scenic_hero_overlay"></div>

                <div className="Scenic_hero_content">
                    <h1>
                        Riverside vs. Tauck River Cruises: <br /> Which Luxury River
                        Cruise Is Better?
                    </h1>

                    <p>
                        Choosing between Riverside Luxury Cruises and Tauck River
                        Cruises comes down to one question: what kind of luxury
                        experience are you looking for? Both cruise lines deliver
                        exceptional European river cruises, outstanding dining, and
                        beautiful itineraries.
                    </p>

                    {/* READ MORE CONTENT */}
                    {readMore && (
                        <>
                            <p>
                                However, they appeal to different travelers. Riverside focuses
                                on boutique luxury, spacious suites, and a relaxed onboard
                                atmosphere, while Tauck is known for highly curated land
                                experiences, nearly all-inclusive pricing, and exclusive
                                cultural access that extends beyond the ship.
                            </p>

                            <p
                                style={{
                                    fontStyle: "italic",
                                    fontWeight: "600",
                                    margin: "10px 0",
                                }}
                            >
                                “The right choice depends less on which cruise line is better
                                and more on which travel style matches you.”
                            </p>

                            <p>
                                As CEO of Trips & Ships Luxury Travel, founder of Luxury
                                Travel University, and a global luxury travel authority with
                                more than 40 years in the industry and travel experience
                                across 121+ countries, Angela Hughes has helped luxury
                                travelers navigate premium river cruise decisions for
                                decades.
                            </p>

                            <p>
                                This guide breaks down everything from ships and suites to
                                dining, service, excursions, atmosphere, destinations, and
                                pricing — beyond the marketing brochures.
                            </p>
                        </>
                    )}

                    {/* READ MORE BUTTON */}
                    <div className="Scenic_readmore_wrapper">
                        <button
                            className="Scenic_readmore_btn"
                            onClick={() => setReadMore(!readMore)}
                        >
                            {readMore ? "Read Less" : "Read More"}
                        </button>
                    </div>
                    <div className="rlc-page-cta-container" style={{ marginTop: "24px" }}>
                        <Link to="/contact" className="rlc-page-cta-btn rlc-btn-light" style={{ textDecoration: "none" }}>
                            Start Planning Your Riverside Cruise
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* QUICK COMPARISON TABLE */}
            <section className="Asc-section Asc-bg-soft" id="Asc-fleet">
                <div className="Asc-container">
                    <div className="Asc-section-header">
                        <h2 className="Asc-h2">Riverside vs Tauck Quick Comparison</h2>
                        <div className="Asc-accent-line"></div>
                    </div>

                    <div className="Asc-table-wrapper">
                        <table className="Asc-fleet-table">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Riverside</th>
                                    <th>Tauck</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>
                                        <strong>Atmosphere</strong>
                                    </td>
                                    <td>Boutique &amp; relaxed</td>
                                    <td>Guided &amp; enriching</td>
                                </tr>

                                <tr>
                                    <td>
                                        <strong>Fleet Size</strong>
                                    </td>
                                    <td>3 ships</td>
                                    <td>European fleet</td>
                                </tr>

                                <tr>
                                    <td>
                                        <strong>Suites</strong>
                                    </td>
                                    <td>Large all-suite focus</td>
                                    <td>Elegant staterooms &amp; suites</td>
                                </tr>

                                <tr>
                                    <td>
                                        <strong>Dining</strong>
                                    </td>
                                    <td>Gourmet regional cuisine</td>
                                    <td>Fine dining with local influence</td>
                                </tr>

                                <tr>
                                    <td>
                                        <strong>Excursions</strong>
                                    </td>
                                    <td>Included highlights</td>
                                    <td>Extensive included experiences</td>
                                </tr>

                                <tr>
                                    <td>
                                        <strong>Transfers</strong>
                                    </td>
                                    <td>Varies by sailing</td>
                                    <td>Often included</td>
                                </tr>

                                <tr>
                                    <td>
                                        <strong>Best For</strong>
                                    </td>
                                    <td>Boutique luxury</td>
                                    <td>Guided cultural exploration</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── RIVERSIDE VS SCENIC COMPARISON SECTION ───────────────────── */}
            <section className="rlc-rvs-section" id="riverside-vs-tauck-comparison">
                <div className="rlc-rvs-container">
                    <div className="rlc-rvs-grid">
                        {/* Riverside Card */}
                        <div className="rlc-rvs-card">
                            <div className="rlc-rvs-image-wrap">
                                <img
                                    //   src={RiversideImage}
                                    alt="Boutique Luxury River Cruise Ship in Budapest"
                                    className="rlc-rvs-card-img"
                                />
                            </div>
                            <h2 className="rlc-rvs-card-title">About Riverside Luxury Cruises</h2>
                            <p className="rlc-rvs-card-intro">
                                Riverside was created for travelers seeking refined luxury with a boutique hotel feel.
                            </p>

                            <h3 className="rlc-rvs-list-title">Highlights include:</h3>
                            <ul className="rlc-rvs-list">
                                {[
                                    "Spacious all-suite accommodations",
                                    "Personalized hospitality",
                                    "Elegant contemporary design",
                                    "Relaxed pace",
                                    "Gourmet dining",
                                    "Scenic European itineraries",
                                ].map((item, i) => (
                                    <li key={i} className="rlc-rvs-item">
                                        <Check size={16} className="rlc-rvs-icon" />
                                        <span className="rlc-rvs-text">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="rlc-rvs-footer-quote">
                                The experience emphasizes comfort, privacy, and exceptional service.
                            </p>
                        </div>

                        {/* Tauck Card */}
                        <div className="rlc-rvs-card">
                            <div className="rlc-rvs-image-wrap">
                                <img
                                    //   src={TauckImage}
                                    alt="Tauck Luxury River Cruise Ship sailing in Germany"
                                    className="rlc-rvs-card-img"
                                />
                            </div>
                            <h2 className="rlc-rvs-card-title">About Tauck River Cruises</h2>
                            <p className="rlc-rvs-card-intro">
                                Tauck has been creating guided travel experiences for over a century and brings that expertise to its river cruises.
                            </p>

                            <h3 className="rlc-rvs-list-title">The cruise line is known for:</h3>
                            <ul className="rlc-rvs-list">
                                {[
                                    "Comprehensive itineraries",
                                    "Exclusive shore experiences",
                                    "Guided cultural immersion",
                                    "Premium hotels before and after select cruises",
                                    "Nearly all-inclusive pricing",
                                    "Exceptional tour directors",
                                ].map((item, i) => (
                                    <li key={i} className="rlc-rvs-item">
                                        <Check size={16} className="rlc-rvs-icon" />
                                        <span className="rlc-rvs-text">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="rlc-rvs-footer-quote">
                                Tauck blends luxury cruising with expertly guided travel.
                            </p>
                        </div>
                    </div>
                    <div className="rlc-cta-btn-wrapper" style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "40px" }}>
                        <Link to="/contact" className="rlc-page-cta-btn">
                            Start Planning Your Riverside Cruise
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── PRICING COMPARISON SECTION ───────────────────────────────── */}
            <section className="rlc-pricing-section" id="riverside-vs-tauck-pricing">
                <div className="rlc-pricing-container">
                    <div className="rlc-pricing-header">
                        <span className="rlc-pricing-eyebrow">Cost &amp; Value</span>
                        <h2 className="rlc-pricing-title">Pricing Comparison</h2>
                        <div className="rlc-pricing-accent"></div>
                        <p className="rlc-pricing-intro">
                            Both cruise lines compete in the premium luxury segment.
                        </p>
                    </div>

                    <div className="rlc-pricing-grid">
                        {/* Riverside Pricing Card */}
                        <div className="rlc-pricing-card">
                            <h3 className="rlc-pricing-brand">Riverside</h3>
                            <ul className="rlc-pricing-list">
                                {[
                                    "Luxury pricing",
                                    "Excellent value for spacious suites",
                                    "Boutique experience",
                                ].map((item, i) => (
                                    <li key={i} className="rlc-pricing-item">
                                        <Check size={18} className="rlc-pricing-icon" />
                                        <span className="rlc-pricing-text">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Tauck Pricing Card */}
                        <div className="rlc-pricing-card">
                            <h3 className="rlc-pricing-brand">Tauck</h3>
                            <ul className="rlc-pricing-list">
                                {[
                                    "Premium pricing",
                                    "Nearly all-inclusive",
                                    "Extensive excursions",
                                    "More land experiences included",
                                ].map((item, i) => (
                                    <li key={i} className="rlc-pricing-item">
                                        <Check size={18} className="rlc-pricing-icon" />
                                        <span className="rlc-pricing-text">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="rlc-pricing-conclusion">
                        <p>
                            While Tauck often costs more, many travelers appreciate the additional inclusions.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── SHIPS & FLEET SECTION ───────────────────────────────────── */}
            <section className="rlc-flt-section" id="riverside-vs-tauck-fleet">
                <div className="rlc-flt-container">
                    <div className="rlc-flt-header">
                        <span className="rlc-flt-eyebrow">Vessels &amp; Capacity</span>
                        <h2 className="rlc-flt-title">Ships &amp; Fleet</h2>
                        <div className="rlc-flt-accent"></div>
                    </div>

                    <div className="rlc-flt-grid">
                        {/* Riverside Card */}
                        <div className="rlc-flt-card">
                            <div className="rlc-rvs-image-wrap">
                                <img
                                    //   src={RiversideFleetImage}
                                    alt="Riverside Boutique River Cruise Fleet"
                                    className="rlc-rvs-card-img"
                                />
                            </div>
                            <h3 className="rlc-flt-brand">Riverside</h3>

                            <h4 className="rlc-flt-sub-title">Current Fleet:</h4>
                            <div className="rlc-flt-ship-tags">
                                {["Riverside Mozart", "Riverside Debussy", "Riverside Ravel"].map((ship, idx) => (
                                    <span key={idx} className="rlc-flt-tag">{ship}</span>
                                ))}
                            </div>

                            <p className="rlc-flt-desc">
                                Each ship offers an intimate atmosphere with fewer guests and spacious accommodations.
                            </p>

                            <div className="rlc-flt-best-for">
                                <div className="rlc-flt-best-icon-box">
                                    <Sparkles size={20} />
                                </div>
                                <div className="rlc-flt-best-content">
                                    <span className="rlc-flt-best-title">Best For:</span>
                                    <p className="rlc-flt-best-text">
                                        Travelers who appreciate intimate luxury and boutique experiences.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Tauck Card */}
                        <div className="rlc-flt-card">
                            <div className="rlc-rvs-image-wrap">
                                <img
                                    //   src={TauckFleetImage}
                                    alt="Tauck Luxury River Cruise Fleet"
                                    className="rlc-rvs-card-img"
                                />
                            </div>
                            <h3 className="rlc-flt-brand">Tauck</h3>

                            <p className="rlc-flt-desc" style={{ marginBottom: "20px" }}>
                                Tauck operates a fleet of elegant river ships throughout Europe.
                            </p>

                            <h4 className="rlc-flt-sub-title">Popular Itineraries Sail On:</h4>
                            <div className="rlc-flt-ship-tags">
                                {[
                                    "Danube",
                                    "Rhine",
                                    "Rhône",
                                    "Seine",
                                    "Douro",
                                ].map((ship, idx) => (
                                    <span key={idx} className="rlc-flt-tag">{ship}</span>
                                ))}
                            </div>

                            <p className="rlc-flt-desc">
                                Tauck's ships are intentionally designed with fewer passengers to maximize comfort.
                            </p>

                            <div className="rlc-flt-best-for">
                                <div className="rlc-flt-best-icon-box">
                                    <Compass size={20} />
                                </div>
                                <div className="rlc-flt-best-content">
                                    <span className="rlc-flt-best-title">Best For:</span>
                                    <p className="rlc-flt-best-text">
                                        Travelers who want an intimate ship paired with expertly guided journeys ashore.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p style={{ textAlign: "center", marginTop: "24px", fontStyle: "italic" }}>
                        Winner: Tie — both offer intimate ships with exceptional service.
                    </p>
                </div>
            </section>


            {/* DINING COMPARISON */}
            <section className="azs-dining-section" id="azs-dining">
                <div className="azs-container">
                    <div className="azs-section-header">
                        <h2 className="azs-section-title">Dining Experience</h2>
                        <div className="azs-section-accent"></div>
                        <p className="azs-section-subtitle">
                            Gourmet Regional Cuisine vs. Fine Dining with Local Influence
                        </p>
                    </div>

                    <div className="azs-dining-grid">
                        {/* Riverside Card */}
                        <div className="azs-dining-card azs-azamara-dining">
                            <div className="azs-dining-image-wrap">
                                <img
                                    //   src={RiversideDiningImage}
                                    alt="Riverside gourmet European dining"
                                    className="azs-dining-img"
                                />
                                <div className="azs-dining-badge-wrapper">
                                    <span className="azs-dining-badge azs-azamara-badge">
                                        Gourmet European Cuisine
                                    </span>
                                </div>
                            </div>
                            <div className="azs-dining-content">
                                <div className="azs-dining-header">
                                    <div className="azs-dining-icon-circle">
                                        <Utensils size={24} className="azs-dining-icon" />
                                    </div>
                                    <h3 className="azs-dining-title">Riverside Dining</h3>
                                </div>
                                <p className="azs-dining-intro">
                                    Dining emphasizes regional specialties, fresh seasonal
                                    ingredients, and elegant presentation in a relaxed
                                    atmosphere.
                                </p>
                                <div className="azs-dining-body">
                                    <h4 className="azs-dining-group-title">Highlights include:</h4>
                                    <ul className="azs-dining-list">
                                        {[
                                            "Regional specialties",
                                            "Fresh seasonal ingredients",
                                            "Elegant presentation",
                                            "Menus reflecting each destination visited",
                                        ].map((item, idx) => (
                                            <li key={idx} className="azs-dining-list-item">
                                                <div className="azs-dining-list-icon-wrapper">
                                                    <Check size={14} className="azs-dining-list-icon" />
                                                </div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="azs-dining-divider"></div>
                                    <div className="azs-dining-highlight-box azs-azamara-highlight">
                                        <p className="azs-dining-highlight-text">
                                            A relaxed, elegant dining experience true to Europe's
                                            classic river regions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tauck Card */}
                        <div className="azs-dining-card azs-seabourn-dining">
                            <div className="azs-dining-image-wrap">
                                <img
                                    //   src={TauckDiningImage}
                                    alt="Tauck multiple fine dining venues"
                                    className="azs-dining-img"
                                />

                                <div className="azs-dining-badge-wrapper">
                                    <span className="azs-dining-badge azs-azamara-badge">
                                        Fine Dining with Local Influence
                                    </span>
                                </div>
                            </div>
                            <div className="azs-dining-content">
                                <div className="azs-dining-header">
                                    <div className="azs-dining-icon-circle">
                                        <ChefHat size={24} className="azs-dining-icon" />
                                    </div>
                                    <h3 className="azs-dining-title">Tauck Dining</h3>
                                </div>
                                <p className="azs-dining-intro">
                                    Tauck's culinary program extends beyond the ship into
                                    local restaurants and unique venues, pairing fine dining
                                    with authentic regional flavor.
                                </p>
                                <div className="azs-dining-body">
                                    <h4 className="azs-dining-group-title">Tauck offers:</h4>
                                    <ul className="azs-dining-list">
                                        {[
                                            "Fine dining",
                                            "Regional specialties",
                                            "Local wines",
                                            "Carefully curated menus",
                                            "Special culinary experiences ashore",
                                        ].map((item, idx) => (
                                            <li key={idx} className="azs-dining-list-item">
                                                <div className="azs-dining-list-icon-wrapper">
                                                    <Star size={14} className="azs-dining-list-icon" />
                                                </div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="azs-dining-divider"></div>
                                    <div className="azs-dining-highlight-box azs-oceania-highlight">
                                        <p className="azs-dining-highlight-text">
                                            Tie — both cruise lines deliver exceptional culinary
                                            experiences.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── EDITORIAL PREMIUM COMPARISON ROWS (SERVICE & ATMOSPHERE) ───── */}
            <section className="rlc-prem-section" id="riverside-vs-tauck-service-atmosphere">
                <div className="rlc-prem-container">

                    {/* Row 1: Service */}
                    <div className="rlc-prem-row">
                        {/* Meta Column (Dark theme) */}
                        <div className="rlc-prem-meta">
                            <span className="rlc-prem-num">01</span>
                            <div className="rlc-prem-label-wrap">
                                <span className="rlc-prem-eyebrow">Attentiveness &amp; Crew</span>
                                <h3 className="rlc-prem-title">Service Comparison</h3>
                                <p className="rlc-prem-intro">
                                    Exceptional service defines both brands.
                                </p>
                            </div>
                            <div className="rlc-prem-winner-tag">
                                <Star size={14} fill="var(--bg-white)" />
                                <span>Winner: Tauck</span>
                            </div>
                        </div>

                        {/* Riverside Column */}
                        <div className="rlc-prem-card">
                            <div className="rlc-prem-card-header">
                                <HeartHandshake size={24} className="rlc-prem-brand-icon" />
                                <h4 className="rlc-prem-brand-name">Riverside</h4>
                            </div>
                            <h5 className="rlc-prem-list-title">Guests Enjoy:</h5>
                            <ul className="rlc-prem-list">
                                {[
                                    "Warm hospitality",
                                    "Personalized attention",
                                    "Friendly crew",
                                    "Boutique atmosphere",
                                ].map((item, idx) => (
                                    <li key={idx} className="rlc-prem-item">
                                        <Check size={16} className="rlc-prem-item-icon" />
                                        <span className="rlc-prem-item-text">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="rlc-prem-desc">
                                Crew members quickly learn guest preferences.
                            </p>
                        </div>

                        {/* Tauck Column */}
                        <div className="rlc-prem-card rlc-winner-card">
                            <div className="rlc-prem-card-header">
                                <Award size={24} className="rlc-prem-brand-icon" />
                                <h4 className="rlc-prem-brand-name">Tauck</h4>
                            </div>
                            <h5 className="rlc-prem-list-title">Tauck Offers:</h5>
                            <ul className="rlc-prem-list">
                                {[
                                    "Seamless logistics",
                                    "Personalized guidance",
                                    "Outstanding customer service",
                                    "Expert destination knowledge",
                                ].map((item, idx) => (
                                    <li key={idx} className="rlc-prem-item">
                                        <Check size={16} className="rlc-prem-item-icon" />
                                        <span className="rlc-prem-item-text">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="rlc-prem-desc">
                                Its combination of onboard hospitality and destination expertise is difficult to match.
                            </p>
                        </div>
                    </div>

                    {/* Row 2: Atmosphere */}
                    <div className="rlc-prem-row">
                        {/* Meta Column (Dark theme) */}
                        <div className="rlc-prem-meta">
                            <span className="rlc-prem-num">02</span>
                            <div className="rlc-prem-label-wrap">
                                <span className="rlc-prem-eyebrow">Onboard Design &amp; Atmosphere</span>
                                <h3 className="rlc-prem-title">Onboard Atmosphere</h3>
                                <p className="rlc-prem-intro">
                                    Comparing onboard style, mood, and relaxation spaces.
                                </p>
                            </div>
                            <div className="rlc-prem-winner-tag">
                                <Star size={14} fill="var(--bg-white)" />
                                <span>Depends on Personal Style</span>
                            </div>
                        </div>

                        {/* Riverside Column */}
                        <div className="rlc-prem-card">
                            <div className="rlc-prem-card-header">
                                <Waves size={24} className="rlc-prem-brand-icon" />
                                <h4 className="rlc-prem-brand-name">Riverside</h4>
                            </div>
                            <h5 className="rlc-prem-list-title">Atmosphere:</h5>
                            <ul className="rlc-prem-list">
                                {[
                                    "Quiet",
                                    "Relaxed",
                                    "Contemporary elegance",
                                    "Boutique luxury",
                                ].map((item, idx) => (
                                    <li key={idx} className="rlc-prem-item">
                                        <Check size={16} className="rlc-prem-item-icon" />
                                        <span className="rlc-prem-item-text">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="rlc-prem-desc">
                                Ideal for travelers seeking a peaceful vacation.
                            </p>
                        </div>

                        {/* Tauck Column */}
                        <div className="rlc-prem-card rlc-winner-card">
                            <div className="rlc-prem-card-header">
                                <Bike size={24} className="rlc-prem-brand-icon" />
                                <h4 className="rlc-prem-brand-name">Tauck</h4>
                            </div>
                            <h5 className="rlc-prem-list-title">Atmosphere:</h5>
                            <ul className="rlc-prem-list">
                                {[
                                    "Sophisticated",
                                    "Social",
                                    "Educational",
                                    "Destination-focused",
                                ].map((item, idx) => (
                                    <li key={idx} className="rlc-prem-item">
                                        <Check size={16} className="rlc-prem-item-icon" />
                                        <span className="rlc-prem-item-text">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="rlc-prem-desc">
                                Many guests enjoy learning from onboard lectures and destination experts.
                            </p>
                        </div>
                    </div>

                    {/* Row 3: Destinations */}
                    <div className="rlc-prem-row">
                        {/* Meta Column (Dark theme) */}
                        <div className="rlc-prem-meta">
                            <span className="rlc-prem-num">03</span>
                            <div className="rlc-prem-label-wrap">
                                <span className="rlc-prem-eyebrow">Rivers &amp; Waterways</span>
                                <h3 className="rlc-prem-title">Destinations</h3>
                                <p className="rlc-prem-intro">
                                    Comparing the itineraries and land experiences of both lines.
                                </p>
                            </div>
                            <div className="rlc-prem-winner-tag">
                                <Star size={14} fill="var(--bg-white)" />
                                <span>Winner: Tauck</span>
                            </div>
                        </div>

                        {/* Riverside Column */}
                        <div className="rlc-prem-card">
                            <div className="rlc-prem-card-header">
                                <Compass size={24} className="rlc-prem-brand-icon" />
                                <h4 className="rlc-prem-brand-name">Riverside</h4>
                            </div>
                            <h5 className="rlc-prem-list-title">Focuses Primarily On:</h5>
                            <ul className="rlc-prem-list">
                                {[
                                    "Danube",
                                    "Rhine",
                                    "Rhône",
                                    "Main",
                                    "Moselle",
                                ].map((item, idx) => (
                                    <li key={idx} className="rlc-prem-item">
                                        <Check size={16} className="rlc-prem-item-icon" />
                                        <span className="rlc-prem-item-text">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="rlc-prem-desc">
                                Ideal for travelers seeking Europe's classic river cruise experience.
                            </p>
                        </div>

                        {/* Tauck Column */}
                        <div className="rlc-prem-card rlc-winner-card">
                            <div className="rlc-prem-card-header">
                                <MapPinned size={24} className="rlc-prem-brand-icon" />
                                <h4 className="rlc-prem-brand-name">Tauck</h4>
                            </div>
                            <h5 className="rlc-prem-list-title">Offers Itineraries On:</h5>
                            <ul className="rlc-prem-list">
                                {[
                                    "Danube",
                                    "Rhine",
                                    "Rhône",
                                    "Seine",
                                    "Douro",
                                ].map((item, idx) => (
                                    <li key={idx} className="rlc-prem-item">
                                        <Check size={16} className="rlc-prem-item-icon" />
                                        <span className="rlc-prem-item-text">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="rlc-prem-desc">
                                Many journeys also include luxury land stays before or after the cruise.
                            </p>
                        </div>
                    </div>
                    <div className="rlc-cta-btn-wrapper" style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                        <Link to="/contact" className="rlc-page-cta-btn">
                            Start Planning Your Riverside Cruise
                        </Link>
                    </div>
                </div>
            </section>


            {/* SUITES & ACCOMMODATIONS */}
            <section className="azs-suites-section" id="azs-suites">
                <div className="azs-container">
                    <div className="azs-section-header">
                        <h2 className="azs-section-title">Suites &amp; Accommodations</h2>
                        <div className="azs-section-accent"></div>
                        <p className="azs-section-subtitle">
                            Some of the Largest Suites on European Rivers vs. Elegant,
                            Journey-Focused Staterooms
                        </p>
                    </div>

                    <div className="azs-suites-grid">
                        {/* Riverside Card */}
                        <div className="azs-suites-card azs-oceania-suites">
                            <div className="azs-suites-image-wrap">
                                <img
                                    //   src={RiversideSuiteImage}
                                    alt="Riverside spacious suite"
                                    className="azs-suites-img"
                                />
                                <span className="azs-suites-image-badge">
                                    Among the Largest on the Rivers
                                </span>
                            </div>

                            <div className="azs-suites-content">
                                <div className="azs-suites-card-header">
                                    <div className="azs-suites-icon-circle">
                                        <Award size={24} className="azs-suites-icon" />
                                    </div>
                                    <h3 className="azs-suites-title">Riverside Suites</h3>
                                </div>
                                <p className="azs-suites-intro">
                                    Riverside's biggest advantage is space, with many suites
                                    among the largest available on European rivers.
                                </p>
                                <div className="azs-suites-body">
                                    <h4 className="azs-suites-group-title">Guests enjoy:</h4>
                                    <ul className="azs-suites-list">
                                        {[
                                            "Large suites",
                                            "Marble bathrooms",
                                            "King-size beds",
                                            "Sitting areas",
                                            "Luxury linens",
                                            "Floor-to-ceiling windows",
                                        ].map((item, idx) => (
                                            <li key={idx} className="azs-suites-list-item">
                                                <div className="azs-suites-list-icon-wrapper">
                                                    <Check size={14} className="azs-suites-list-icon" />
                                                </div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="azs-suites-divider"></div>
                                    <div className="azs-suites-highlight-box azs-azamara-suites-highlight">
                                        <p className="azs-suites-highlight-text">
                                            Winner for suite size.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tauck Card */}
                        <div className="azs-suites-card azs-azamara-suites">
                            <div className="azs-suites-image-wrap">
                                <img
                                    //   src={TauckSuiteImage}
                                    alt="Tauck suite with butler service"
                                    className="azs-suites-img"
                                />
                                <span className="azs-suites-image-badge">Elegant, Well-Designed Comfort</span>
                            </div>

                            <div className="azs-suites-content">
                                <div className="azs-suites-card-header">
                                    <div className="azs-suites-icon-circle">
                                        <Ship size={24} className="azs-suites-icon" />
                                    </div>
                                    <h3 className="azs-suites-title">Tauck Suites</h3>
                                </div>
                                <p className="azs-suites-intro">
                                    While luxurious, Tauck generally focuses more on the
                                    overall journey than oversized accommodations.
                                </p>
                                <div className="azs-suites-body">
                                    <h4 className="azs-suites-group-title">Tauck offers:</h4>
                                    <ul className="azs-suites-list">
                                        {[
                                            "Comfortable suites",
                                            "Elegant décor",
                                            "Premium bedding",
                                            "Well-designed bathrooms",
                                            "Thoughtful storage",
                                            "Panoramic windows",
                                        ].map((item, idx) => (
                                            <li key={idx} className="azs-suites-list-item">
                                                <div className="azs-suites-list-icon-wrapper">
                                                    <Check size={14} className="azs-suites-list-icon" />
                                                </div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="azs-suites-divider"></div>
                                    <div className="azs-suites-highlight-box azs-azamara-suites-highlight">
                                        <p className="azs-suites-highlight-text">
                                            Travelers seeking spacious accommodations will likely prefer Riverside.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


            {/* SHORE EXCURSIONS */}
            <section className="azs-entertainment-section" id="azs-entertainment">
                <div className="azs-container">
                    <div className="azs-section-header">
                        <h2 className="azs-section-title">Shore Excursions</h2>
                        <div className="azs-section-accent"></div>
                        <p className="azs-section-subtitle">
                            Included Highlights vs. Exclusive Access You Can't Arrange on Your Own
                        </p>
                    </div>

                    <div className="azs-entertainment-grid">
                        {/* Riverside Card */}
                        <div className="azs-entertainment-card azs-azamara-ent">
                            <div className="azs-ent-header">
                                <div className="azs-ent-icon-circle">
                                    <Compass size={24} className="azs-ent-icon" />
                                </div>
                                <h3 className="azs-ent-title">Riverside Excursions</h3>
                            </div>
                            <p className="azs-ent-intro">
                                Included experiences focus on the essentials, with optional
                                premium excursions available for added flexibility.
                            </p>
                            <div className="azs-ent-body">
                                <h4 className="azs-ent-group-title">Included experiences:</h4>
                                <ul className="azs-ent-list">
                                    {[
                                        "Guided walking tours",
                                        "Historic landmarks",
                                        "Wine tastings",
                                        "Local cultural experiences",
                                    ].map((item, idx) => (
                                        <li key={idx} className="azs-ent-list-item">
                                            <div className="azs-ent-list-icon-wrapper">
                                                <Check size={14} className="azs-ent-list-icon" />
                                            </div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="azs-ent-divider"></div>
                                <div className="azs-ent-highlight-box azs-azamara-ent-highlight">
                                    <p className="azs-ent-highlight-text">
                                        Optional premium excursions are also available.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Tauck Card */}
                        <div className="azs-entertainment-card azs-seabourn-ent">
                            <div className="azs-ent-header">
                                <div className="azs-ent-icon-circle">
                                    <Bike size={24} className="azs-ent-icon" />
                                </div>
                                <h3 className="azs-ent-title">Tauck Excursions</h3>
                            </div>
                            <p className="azs-ent-intro">
                                Shore excursions are one of Tauck's greatest strengths,
                                widely recognized for exclusive access many travelers
                                cannot arrange independently.
                            </p>
                            <div className="azs-ent-body">
                                <h4 className="azs-ent-group-title">Included experiences often feature:</h4>
                                <ul className="azs-ent-list">
                                    {[
                                        "Private palace visits",
                                        "After-hours museum access",
                                        "Local cultural performances",
                                        "Castle tours",
                                        "Culinary experiences",
                                        "Expert local guides",
                                    ].map((item, idx) => (
                                        <li key={idx} className="azs-ent-list-item">
                                            <div className="azs-ent-list-icon-wrapper">
                                                <Star size={14} className="azs-ent-list-icon" />
                                            </div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="azs-ent-divider"></div>
                                <div className="azs-ent-highlight-box azs-oceania-ent-highlight">
                                    <p className="azs-ent-highlight-text">
                                        Winner for the wider variety of included, guided experiences.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== MODERN BENTO GRID GALLERY SHOWCASE ===== */}
            <section className="rvt-gallery-section" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="rvt-gallery-inner">
                    <div className="rvt-gallery-header">
                        <h2 className="rvt-gallery-h2">Global Explorations</h2>
                        <div className="rvt-gallery-divider"></div>
                        <p className="rvt-gallery-p">
                            From the Danube's imperial capitals to Portugal's Douro Valley, discover the classic European rivers where Riverside and Tauck sail.
                        </p>
                    </div>

                    <div className="rvt-gallery-bento-grid">
                        {/* 01: Large Featured Item - The Danube River */}
                        <div className="rvt-gallery-item rvt-gallery-feature">
                            <div className="rvt-gallery-image-box">
                                <img
                                    //   src={RiversideOverviewImage}
                                    alt="Danube River Budapest Parliament Tauck views"
                                    className="rvt-gallery-img"
                                />
                                <div className="rvt-gallery-overlay">

                                    <h3 className="rvt-gallery-h3">The Danube River</h3>
                                    <p className="rvt-gallery-item-p">
                                        Sailing through the heart of Europe past castles, vineyards, and historic capitals like Vienna and Budapest. Both Riverside and Tauck offer premier Danube itineraries.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 02: Vertical Item - The Seine River */}
                        <div className="rvt-gallery-item rvt-gallery-tall">
                            <div className="rvt-gallery-image-box">
                                <img
                                    //   src={TauckOverviewImage}
                                    alt="Tauck luxury ship on the Seine River France"
                                    className="rvt-gallery-img"
                                />
                                <div className="rvt-gallery-overlay">

                                    <h3 className="rvt-gallery-h3">The Seine River</h3>
                                    <p className="rvt-gallery-item-p">
                                        Sailing from Paris to the historical landing beaches of Normandy. Tauck operates active, fully-inclusive cruises along this scenic French waterway.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 03: Standard Item - The Douro Valley */}
                        <div className="rvt-gallery-item">
                            <div className="rvt-gallery-image-box">
                                <img
                                    //   src={TauckAtmosphereImage}
                                    alt="Douro River Portugal Tauck cruises vineyards"
                                    className="rvt-gallery-img"
                                />
                                <div className="rvt-gallery-overlay">

                                    <h3 className="rvt-gallery-h3">
                                        The Douro Valley
                                    </h3>
                                    <p className="rvt-gallery-item-p">
                                        Experiencing Portugal's stunning terraced vineyards and historic wine estates. Tauck offers exceptional Douro itineraries on dedicated vessels.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 04: Standard Item - The Rhine & Moselle */}
                        <div className="rvt-gallery-item">
                            <div className="rvt-gallery-image-box">
                                <img
                                    //   src={RiversideAtmosphereImage}
                                    alt="Rhine river castle medieval towns Riverside cruises"
                                    className="rvt-gallery-img"
                                />
                                <div className="rvt-gallery-overlay">

                                    <h3 className="rvt-gallery-h3">The Rhine &amp; Moselle</h3>
                                    <p className="rvt-gallery-item-p">
                                        Passing medieval castles, dramatic cliffs, and legendary vineyards. Both Riverside and Tauck offer diverse itineraries on the Rhine, Moselle, and Main.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 05: Wide Feature Item - The Rhône River */}
                        <div className="rvt-gallery-item rvt-gallery-feature">
                            <div className="rvt-gallery-image-box">
                                <img
                                    //   src={RiversideRavelImage}
                                    alt="Rhone River Southern France scenery"
                                    className="rvt-gallery-img"
                                />
                                <div className="rvt-gallery-overlay">

                                    <h3 className="rvt-gallery-h3">The Rhône River</h3>
                                    <p className="rvt-gallery-item-p">
                                        Exploring Avignon, Lyon, and the rich gastronomy of Southern France. Riverside Ravel and Tauck vessels sail these world-famous French wine regions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 06: Standard Item - The Moselle Valley */}
                        <div className="rvt-gallery-item">
                            <div className="rvt-gallery-image-box">
                                <img
                                    //   src={RiversideMoselleImage}
                                    alt="Moselle River vineyards and castles"
                                    className="rvt-gallery-img"
                                />
                                <div className="rvt-gallery-overlay">

                                    <h3 className="rvt-gallery-h3">The Moselle Valley</h3>
                                    <p className="rvt-gallery-item-p">
                                        Sailing past the steepest vineyards in Europe and fairytale villages. Both lines offer stunning cruises along this peaceful tributary of the Rhine.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* WHO SHOULD CHOOSE */}
            <section className="Asc-section Asc-bg-white" id="Asc-who">
                <div className="Asc-container">
                    <div className="Asc-section-header">
                        <h2 className="Asc-h2">Who Should Choose Which Cruise Line?</h2>
                        <div className="Asc-accent-line"></div>
                    </div>
                    <div className="Asc-who-grid">
                        {/* Riverside Card */}
                        <div className="Asc-who-card Asc-who-yes">
                            <h3 className="Asc-who-title">Who Should Choose Riverside?</h3>
                            <p className="Asc-who-card-intro">
                                Riverside is ideal if you value:
                            </p>
                            <ul className="Asc-who-list">
                                {[
                                    "Spacious luxury suites",
                                    "Relaxed cruising",
                                    "Boutique atmosphere",
                                    "Personalized service",
                                    "Contemporary ship design",
                                    "Quiet European vacations",
                                ].map((item, i) => (
                                    <li key={i} className="Asc-who-list-item">
                                        <Check
                                            size={16}
                                            className="Asc-icon-green Asc-who-list-icon"
                                        />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Tauck Card */}
                        <div className="Asc-who-card Asc-who-no">
                            <h3 className="Asc-who-title">Who Should Choose Tauck?</h3>
                            <p className="Asc-who-card-intro">
                                Tauck is perfect if you prefer:
                            </p>
                            <ul className="Asc-who-list">
                                {[
                                    "Guided cultural experiences",
                                    "Comprehensive itineraries",
                                    "More included excursions",
                                    "Exclusive destination access",
                                    "Educational travel",
                                    "Seamless logistics",
                                ].map((item, i) => (
                                    <li key={i} className="Asc-who-list-item">
                                        <Check
                                            size={16}
                                            className="Asc-icon-green Asc-who-list-icon"
                                        />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PROS & CONS SECTION ────────────────────────────────────── */}
            <section className="rlc-pc-section" id="riverside-vs-tauck-pros-cons">
                <div className="rlc-pc-container">
                    <div className="rlc-pc-header">
                        <h2 className="rlc-pc-title">Pros &amp; Cons</h2>
                        <div className="rlc-pc-accent"></div>
                    </div>

                    <div className="rlc-pc-grid">
                        {/* Riverside Card */}
                        <div className="rlc-pc-card">
                            <h3 className="rlc-pc-brand">Riverside</h3>

                            <div className="rlc-pc-lists-wrap">
                                {/* Pros */}
                                <div className="rlc-pc-list-col">
                                    <h4 className="rlc-pc-col-title rlc-pro">
                                        <Check size={16} className="rlc-pc-icon rlc-pro" /> Pros
                                    </h4>
                                    <ul className="rlc-pc-list">
                                        {[
                                            "Spacious suites",
                                            "Boutique atmosphere",
                                            "Exceptional personalized service",
                                            "Elegant dining",
                                            "Relaxed pace",
                                            "Modern luxury",
                                        ].map((item, idx) => (
                                            <li key={idx} className="rlc-pc-item">
                                                <Check size={14} className="rlc-pc-icon rlc-pro" />
                                                <span className="rlc-pc-text">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Cons */}
                                <div className="rlc-pc-list-col">
                                    <h4 className="rlc-pc-col-title rlc-con">
                                        <Minus size={16} className="rlc-pc-icon rlc-con" /> Cons
                                    </h4>
                                    <ul className="rlc-pc-list">
                                        {[
                                            "Smaller fleet",
                                            "Fewer itineraries",
                                            "Fewer included excursions",
                                        ].map((item, idx) => (
                                            <li key={idx} className="rlc-pc-item">
                                                <Minus size={14} className="rlc-pc-icon rlc-con" />
                                                <span className="rlc-pc-text">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Tauck Card */}
                        <div className="rlc-pc-card">
                            <h3 className="rlc-pc-brand">Tauck</h3>

                            <div className="rlc-pc-lists-wrap">
                                {/* Pros */}
                                <div className="rlc-pc-list-col">
                                    <h4 className="rlc-pc-col-title rlc-pro">
                                        <Check size={16} className="rlc-pc-icon rlc-pro" /> Pros
                                    </h4>
                                    <ul className="rlc-pc-list">
                                        {[
                                            "Excellent guided experiences",
                                            "Outstanding destination access",
                                            "Nearly all-inclusive pricing",
                                            "Expert tour directors",
                                            "High-quality excursions",
                                            "Exceptional planning",
                                        ].map((item, idx) => (
                                            <li key={idx} className="rlc-pc-item">
                                                <Check size={14} className="rlc-pc-icon rlc-pro" />
                                                <span className="rlc-pc-text">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Cons */}
                                <div className="rlc-pc-list-col">
                                    <h4 className="rlc-pc-col-title rlc-con">
                                        <Minus size={16} className="rlc-pc-icon rlc-con" /> Cons
                                    </h4>
                                    <ul className="rlc-pc-list">
                                        {[
                                            "Higher fares",
                                            "More structured daily schedules",
                                            "Smaller suite sizes compared to Riverside",
                                        ].map((item, idx) => (
                                            <li key={idx} className="rlc-pc-item">
                                                <Minus size={14} className="rlc-pc-icon rlc-con" />
                                                <span className="rlc-pc-text">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* FINAL VERDICT */}
            <section
                className="Asc-section Asc-bg-white"
                id="Asc-verdict"
                style={{ backgroundColor: "var(--bg-soft)" }}
            >
                <div className="Asc-container">
                    <div className="Asc-section-header margin-large">
                        <h2 className="Asc-h2">Which Cruise Line Offers Better Value?</h2>

                        <div className="Asc-accent-line"></div>

                        <p className="Asc-verdict-intro">
                            Value depends entirely on your personal travel priorities.
                        </p>
                    </div>

                    <div className="Asc-verdict-grid">
                        {/* Riverside Column */}
                        <div className="Asc-verdict-card Asc-verdict-azamara">
                            <h3 className="Asc-verdict-card-title">
                                Choose Riverside if you want:
                            </h3>

                            <ul className="Asc-verdict-list">
                                {[
                                    "Spacious accommodations",
                                    "Boutique hospitality",
                                    "Relaxation",
                                    "Elegant onboard living",
                                ].map((item, i) => (
                                    <li key={i} className="Asc-verdict-item">
                                        <Check size={18} className="Asc-verdict-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Tauck Column */}
                        <div className="Asc-verdict-card Asc-verdict-regent">
                            <h3 className="Asc-verdict-card-title">
                                Choose Tauck if you want:
                            </h3>

                            <ul className="Asc-verdict-list">
                                {[
                                    "Exclusive excursions",
                                    "Cultural immersion",
                                    "Guided experiences",
                                    "Comprehensive travel planning",
                                ].map((item, i) => (
                                    <li key={i} className="Asc-verdict-item">
                                        <Check size={18} className="Asc-verdict-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="Asc-verdict-footer-box">
                        <p className="Asc-verdict-footer-text">
                            No matter which cruise line you select, you'll enjoy exceptional
                            hospitality, world-class dining, and unforgettable journeys
                            through some of Europe's most scenic waterways.
                        </p>
                    </div>
                </div>
            </section>

            {/* WHY BOOK THROUGH A LUXURY TRAVEL ADVISOR? */}
            <section
                className="Avr-planning-section"
                id="Asc-luxury-travel-advisor"
                style={{ backgroundColor: "var(--bg-white)" }}
            >
                <div className="Asc-container">
                    {/* HEADING */}
                    <div className="Avr-planning-heading">
                        <span className="Avr-planning-eyebrow">
                            Personalized Cruise Planning
                        </span>

                        <h2 className="Avr-planning-title">
                            Why Book Through a <br /> Luxury Travel Advisor?
                        </h2>

                        <div className="Avr-planning-divider"></div>
                    </div>

                    {/* TWO-PANEL GRID */}
                    <div className="Avr-planning-grid">
                        {/* LEFT PANEL */}
                        <div className="Avr-planning-left">
                            <div className="Avr-planning-left-deco">&ldquo;</div>

                            <h3 className="Avr-planning-left-title">
                                Create Your Perfect River Journey
                            </h3>

                            <p className="Avr-planning-left-body">
                                Comparing luxury river cruise lines can be challenging.
                                Expert guidance ensures you book the cruise that best matches
                                your individual travel style.
                            </p>

                            <div className="Avr-planning-alert">
                                <ShieldCheck size={18} className="Avr-planning-alert-icon" />

                                <p className="Avr-planning-alert-text">
                                    Professional guidance ensures you book the river cruise that
                                    best matches your travel goals.
                                </p>
                            </div>
                        </div>

                        {/* RIGHT PANEL */}
                        <div className="Avr-planning-right">
                            <p className="Avr-planning-right-intro">
                                A luxury travel advisor can help you:
                            </p>

                            <div className="Avr-planning-benefits-grid">
                                {[
                                    {
                                        icon: <MapPinned size={18} />,
                                        label: "Compare cruise lines",
                                    },
                                    {
                                        icon: <Compass size={18} />,
                                        label: "Recommend the right itinerary",
                                    },
                                    {
                                        icon: <Ship size={18} />,
                                        label: "Select the best suite",
                                    },
                                    {
                                        icon: <Plane size={18} />,
                                        label: "Coordinate flights",
                                    },
                                    {
                                        icon: <Home size={18} />,
                                        label: "Arrange hotels",
                                    },
                                    {
                                        icon: <MapPin size={18} />,
                                        label: "Organize transfers",
                                    },
                                    {
                                        icon: <Sparkles size={18} />,
                                        label: "Explain inclusions",
                                    },
                                    {
                                        icon: <BadgePercent size={18} />,
                                        label: "Access available promotions",
                                    },
                                ].map((item, i) => (
                                    <div key={i} className="Avr-planning-benefit-card">
                                        <span className="Avr-planning-benefit-icon">
                                            {item.icon}
                                        </span>

                                        <span className="Avr-planning-benefit-label">
                                            {item.label}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <p
                                className="Avr-planning-right-intro"
                                style={{ marginTop: "24px" }}
                            >
                                Professional planning ensures you book the cruise that best
                                matches your travel goals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ANGELA HUGHES AUTHORITY BOX */}
            <section className="Adg-expert-section" id="Asc-expert-insight">
                <div className="Asc-container">
                    <div className="Adg-expert-heading">
                        <span className="Adg-expert-eyebrow">Luxury Travel Expertise</span>
                        <h2 className="Adg-expert-title">Angela Hughes Luxury Authority</h2>
                        <div className="Adg-expert-divider"></div>
                    </div>

                    <div className="Adg-expert-grid">
                        <div className="Adg-expert-image-col">
                            <div className="Adg-expert-portrait-wrap">
                                <img
                                    src={AboutImage}
                                    alt="Angela Hughes – Luxury Travel Expert"
                                    className="Adg-expert-portrait"
                                />
                                <div className="Adg-expert-portrait-badge">
                                    <Star size={14} />
                                    <span>40+ Years Experience</span>
                                </div>
                            </div>

                            <div className="Adg-expert-name-card">
                                <h3 className="Adg-expert-name">Angela Hughes</h3>
                                <p className="Adg-expert-role">
                                    CEO of Trips &amp; Ships Luxury Travel
                                </p>
                                <div className="Adg-expert-name-divider"></div>
                                <p className="Adg-expert-countries">
                                    <MapPin size={14} />
                                    Traveled to more than 121 countries
                                </p>
                            </div>
                        </div>

                        <div className="Adg-expert-content-col">
                            <div className="Adg-expert-credentials-box">
                                <h4 className="Adg-expert-credentials-title">
                                    <Award size={16} />
                                    Angela Hughes Authority Box
                                </h4>

                                <div className="Adg-expert-credentials-grid">
                                    {[
                                        {
                                            icon: <Award size={16} />,
                                            label: "CEO of Trips & Ships Luxury Travel",
                                        },
                                        {
                                            icon: <Star size={16} />,
                                            label: "Over 40 years in the travel industry",
                                        },
                                        {
                                            icon: <MapPin size={16} />,
                                            label: "Traveled to more than 121 countries",
                                        },
                                        {
                                            icon: <Award size={16} />,
                                            label: "Founder of Luxury Travel University",
                                        },
                                        {
                                            icon: <Users size={16} />,
                                            label: "Global luxury travel speaker and trainer",
                                        },
                                        {
                                            icon: <Users size={16} />,
                                            label: "Weekly industry columnist",
                                        },
                                        {
                                            icon: <Users size={16} />,
                                            label: "Travel Leaders Network Advisory Board member",
                                        },
                                        {
                                            icon: <Award size={16} />,
                                            label: "2024 Luxury Travel Influencer of the Year",
                                        },
                                        {
                                            icon: <Star size={16} />,
                                            label:
                                                "Named one of the Most Influential Women in Travel in 2026 by TravelPulse",
                                        },
                                        {
                                            icon: <Award size={16} />,
                                            label: "Featured in major travel publications globally",
                                        },
                                        {
                                            icon: <Ship size={16} />,
                                            label:
                                                "Expert in luxury cruises, safaris, expeditions, river cruising, and premium travel",
                                        },
                                    ].map((item, i) => (
                                        <div className="Adg-expert-list-item" key={i}>
                                            <span className="Adg-expert-list-icon">{item.icon}</span>
                                            <span className="Adg-expert-list-label">
                                                {item.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="Asc-section Asc-bg-white" id="Asc-faq">
                <div className="Asc-container">
                    <div className="Asc-section-header">
                        <h2 className="Asc-h2">Frequently Asked Questions</h2>
                        <div className="Asc-accent-line"></div>
                        <p className="Asc-faq-intro">
                            Everything you need to know about choosing between Riverside
                            and Tauck River Cruises.
                        </p>
                    </div>
                    <FAQ />
                </div>
            </section>

            {/* CTA */}
            <section className="Asc-help-section">
                <div className="Asc-help-bg-wrap">
                    <img
                        // src={RiversideVsTauckCtaImage}
                        alt="Riverside and Tauck river cruises sailing through Europe"
                        className="Asc-help-bg-img"
                    />
                    <div className="Asc-help-overlay"></div>
                </div>

                <div className="Asc-container">
                    <div className="Asc-help-card">
                        <div className="Asc-help-content">
                            <div className="Asc-help-header">
                                <span className="Asc-help-eyebrow">
                                    Personalized Luxury River Cruise Planning
                                </span>
                                <h2 className="Asc-help-h2">
                                    Final Thoughts: <br /> Riverside vs. Tauck River Cruises
                                </h2>
                                <div className="Asc-help-accent"></div>
                            </div>

                            <div className="Asc-help-grid">
                                <div className="Asc-help-info">
                                    <p className="Asc-help-intro">
                                        Both Riverside and Tauck rank among Europe's finest
                                        luxury river cruise experiences, but they excel in
                                        different areas.
                                        {!ctaReadMore && (
                                            <button
                                                onClick={() => setCtaReadMore(true)}
                                                style={{
                                                    background: "none",
                                                    border: "none",
                                                    color: "var(--bg-white)",
                                                    cursor: "pointer",
                                                    marginLeft: "8px",
                                                    fontWeight: "600",
                                                    padding: 0,
                                                }}
                                            >
                                                Read More
                                            </button>
                                        )}
                                    </p>

                                    {ctaReadMore && (
                                        <>
                                            <br />
                                            <p className="Asc-help-intro">
                                                Choose Riverside Luxury Cruises if you want spacious
                                                all-suite accommodations, boutique luxury,
                                                personalized hospitality, a relaxed onboard
                                                atmosphere, and elegant European cruising.
                                            </p>
                                            <br />
                                            <p className="Asc-help-intro">
                                                Choose Tauck River Cruises if you want
                                                exceptional guided experiences, exclusive
                                                cultural access, nearly all-inclusive travel,
                                                and seamless land-and-cruise journeys.
                                            </p>
                                            <br />
                                            <p className="Asc-help-intro">
                                                Whichever you choose, you'll enjoy exceptional
                                                hospitality, gourmet dining, and unforgettable
                                                journeys through Europe's most beautiful waterways.
                                                <button
                                                    onClick={() => setCtaReadMore(false)}
                                                    style={{
                                                        background: "none",
                                                        border: "none",
                                                        color: "var(--bg-white)",
                                                        cursor: "pointer",
                                                        marginLeft: "8px",
                                                        fontWeight: "600",
                                                        padding: 0,
                                                    }}
                                                >
                                                    Read Less
                                                </button>
                                            </p>
                                        </>
                                    )}

                                    <div className="Asc-help-btn-container">
                                        <Link
                                            to="/contact"
                                            className="Asc-help-cta-btn"
                                            style={{ textDecoration: "none" }}
                                        >
                                            Start Planning Your Luxury River Cruise
                                            <ArrowRight size={18} />
                                        </Link>
                                    </div>
                                </div>

                                <div className="Asc-help-list-box">
                                    <h3 className="Asc-help-list-title">
                                        Our luxury planning services include:
                                    </h3>

                                    <ul className="Asc-help-bullets">
                                        {[
                                            "Compare Riverside and Tauck itineraries side by side",
                                            "Recommend the ship and suite category that fits your travel style",
                                            "Coordinate pre- and post-cruise hotel stays",
                                            "Access exclusive promotions and amenities",
                                            "Arrange flights, transfers, and private shore experiences",
                                            "Provide ongoing support before and during your voyage",
                                        ].map((item, i) => (
                                            <li key={i}>
                                                <div className="Asc-bullet-icon">
                                                    <Check size={14} strokeWidth={3} />
                                                </div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RiversideVsTauck;