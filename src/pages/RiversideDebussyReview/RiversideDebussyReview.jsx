import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    Users,
    MapPin,
    Award,
    Check,
    Minus,
    Plus,
    ArrowRight,
    Star,
    Compass,
    Sparkles,
    Ship,
    Plane,
    MapPinned,
    Home,
    ShieldCheck,
    HeartPulse,
    BedDouble,
    Waves,
    Wine,
    Music,
    Utensils,
    X,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

/* ── Placeholder image imports ────────────────────────────────────
   Replace these with real Riverside Debussy photography once
   available. Paths assume a new /assets/RiversideDebussyReview folder. */
// import HeroImage1 from "../../assets/RiversideDebussyReview/riverside-debussy-rhone-sunset.jpg";
// import HeroImage2 from "../../assets/RiversideDebussyReview/riverside-debussy-suite-balcony.jpg";
// import HeroImage3 from "../../assets/RiversideDebussyReview/riverside-debussy-avignon-view.jpg";
// import RiversideDebussySuite from "../../assets/RiversideDebussyReview/riverside-debussy-suite-living-area.jpg";
// import RiversideDebussyLounge from "../../assets/RiversideDebussyReview/riverside-debussy-observation-lounge.jpg";
// import RiversideDebussyEvening from "../../assets/RiversideDebussyReview/riverside-debussy-evening-lounge.jpg";
// import RiversideDebussyDining from "../../assets/RiversideDebussyReview/riverside-debussy-gourmet-dining.jpg";
// import RiversideDebussyRhone from "../../assets/RiversideDebussyReview/riverside-debussy-rhone-lyon.jpg";
// import RiversideDebussyArles from "../../assets/RiversideDebussyReview/riverside-debussy-arles.jpg";
// import RiversideDebussyCrew from "../../assets/RiversideDebussyReview/riverside-debussy-crew-service.jpg";
// import RiversideDebussyShip from "../../assets/RiversideDebussyReview/riverside-debussy-ship-exterior.jpg";

import { Helmet } from "react-helmet-async";
import "../RiversideLuxuryCruisesReviews/RiversideLuxuryCruisesReviews.css";

/* ── Schema ─────────────────────────────────────────────────────── */
const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": "https://tripsandships.com/#organization",
            name: "Trips & Ships Luxury Travel",
            url: "https://tripsandships.com",
            logo: "https://www.tripsandships.com/Copy-of-TRIPSSHIPS-e1592486640831.webp",
        },
        {
            "@type": "TravelAgency",
            "@id": "https://tripsandships.com/#travelagency",
            name: "Trips & Ships Luxury Travel",
            url: "https://tripsandships.com",
            description:
                "Luxury travel agency specializing in luxury cruises, river cruises, safaris, expeditions, and premium travel experiences.",
        },
        {
            "@type": "Person",
            "@id": "https://tripsandships.com/#person",
            name: "Angela Hughes",
            jobTitle: "CEO of Trips & Ships Luxury Travel",
            description:
                "Luxury travel expert with over 40 years of experience and travel to 121+ countries.",
        },
        {
            "@type": "WebPage",
            "@id": "https://tripsandships.com/riverside-debussy-review/#webpage",
            name: "Riverside Debussy Review | Is Europe's Largest Luxury River Ship Worth It?",
            url: "https://tripsandships.com/riverside-debussy-review",
            description:
                "Read our Riverside Debussy review covering suites, dining, service, itineraries, onboard experience, pricing, and who should sail this luxury Rhône river ship before you book.",
        },
        {
            "@type": "Article",
            "@id": "https://tripsandships.com/riverside-debussy-review/#article",
            headline: "Riverside Debussy Review | Luxury Rhône River Cruise Guide",
            description:
                "A complete guide to Riverside Debussy, covering spacious suites, gourmet dining, personalized service, Rhône itineraries, shore excursions, wellness, and more.",
            author: {
                "@type": "Person",
                name: "Angela Hughes",
            },
            publisher: {
                "@type": "Organization",
                name: "Trips & Ships Luxury Travel",
            },
            inLanguage: "en-US",
        },
        {
            "@type": "Review",
            "@id": "https://tripsandships.com/riverside-debussy-review/#review",
            itemReviewed: {
                "@type": "TouristTrip",
                name: "Riverside Debussy",
            },
            reviewRating: {
                "@type": "Rating",
                ratingValue: "4.8",
                bestRating: "5",
            },
            author: {
                "@type": "Person",
                name: "Angela Hughes",
            },
            publisher: {
                "@type": "Organization",
                name: "Trips & Ships Luxury Travel",
            },
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://tripsandships.com/riverside-debussy-review/#breadcrumb",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://tripsandships.com",
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "River Cruise Guides",
                    item: "https://tripsandships.com/river-cruise-guides",
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: "Riverside Luxury Cruises Reviews",
                    item: "https://tripsandships.com/riverside-luxury-cruises-review",
                },
                {
                    "@type": "ListItem",
                    position: 4,
                    name: "Riverside Debussy Review",
                    item: "https://tripsandships.com/riverside-debussy-review",
                },
            ],
        },
        {
            "@type": "TouristTrip",
            "@id": "https://tripsandships.com/riverside-debussy-review/#trip",
            name: "Riverside Debussy Rhône River Cruise Experience",
            description:
                "Boutique luxury river cruising aboard Riverside Debussy, an elegant and intimate ship featuring spacious accommodations, gourmet dining, personalized service, and immersive Rhône River itineraries through southern France.",
            provider: {
                "@type": "Organization",
                name: "Riverside Luxury Cruises",
            },
        },
        {
            "@type": "Service",
            "@id": "https://tripsandships.com/riverside-debussy-review/#service",
            serviceType: "Luxury River Cruise Vacation Planning",
            provider: {
                "@type": "TravelAgency",
                name: "Trips & Ships Luxury Travel",
            },
            areaServed: "Worldwide",
            description:
                "Personalized planning for Riverside Debussy sailings, including itinerary selection, suite recommendations, and exclusive promotions.",
        },
        {
            "@type": "ItemList",
            "@id": "https://tripsandships.com/riverside-debussy-review/#itemlist",
            name: "Riverside Debussy Review — What This Guide Covers",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Overview of Riverside Debussy" },
                { "@type": "ListItem", position: 2, name: "Suites & Accommodations" },
                { "@type": "ListItem", position: 3, name: "Dining Experience" },
                { "@type": "ListItem", position: 4, name: "Service & Hospitality" },
                { "@type": "ListItem", position: 5, name: "Rhône Itineraries" },
                { "@type": "ListItem", position: 6, name: "Life Onboard" },
                { "@type": "ListItem", position: 7, name: "Shore Excursions" },
                { "@type": "ListItem", position: 8, name: "Public Spaces" },
                { "@type": "ListItem", position: 9, name: "Fitness & Wellness" },
                { "@type": "ListItem", position: 10, name: "Who Should Sail Riverside Debussy?" },
                { "@type": "ListItem", position: 11, name: "Is Riverside Debussy Worth It?" },
                { "@type": "ListItem", position: 12, name: "Why Book Through a Luxury Travel Advisor?" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://tripsandships.com/riverside-debussy-review/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Is Riverside Debussy an all-suite ship?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The ship focuses on spacious luxury accommodations designed for comfort and relaxation.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Where does Riverside Debussy sail?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Riverside Debussy primarily sails the Rhône River through southern France.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What destinations does Riverside Debussy visit?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Popular ports include Lyon, Avignon, Arles, Viviers, Tournon-sur-Rhône, and Chalon-sur-Saône.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Riverside Debussy all-inclusive?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Most cruises include luxury accommodations, gourmet dining, beverages with meals, Wi-Fi, and selected excursions. Inclusions may vary by itinerary.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Riverside Debussy suitable for first-time river cruisers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Absolutely. Its relaxed atmosphere and exceptional service make it an excellent introduction to luxury river cruising.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the dress code onboard?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Smart casual during the day and elegant casual for dinner. Formal nights are generally not required.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Riverside Debussy have a spa?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The ship offers wellness facilities and spa treatments designed for relaxation during your voyage.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Wi-Fi included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, complimentary Wi-Fi is typically included for guests.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Who is Riverside Debussy best suited for?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The ship is ideal for couples, luxury travelers, food lovers, and anyone seeking a peaceful, refined European river cruise.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I book through a travel advisor?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. A luxury travel advisor can help you choose the best itinerary, suite, and available offers while coordinating all aspects of your vacation.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Riverside Debussy offer wine experiences?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Rhône River itineraries frequently include wine tastings and visits to renowned vineyards.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are excursions included in the price on Riverside Debussy?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Excursions can be included depending on the fare package you book. Riverside offers a 'Full Board with Excursions' option that includes daily guided excursions, as well as a 'Full Board' option if you prefer to explore independently or book excursions à la carte.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Riverside Debussy have a swimming pool?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, Riverside Debussy features an indoor swimming pool located in the wellness area at the stern of the ship, which is a rare and premium feature for European river cruise ships.",
                    },
                },
            ],
        },
    ],
};

/* ── FAQ Component ─────────────────────────────────────────────── */
function FAQ() {
    const [open, setOpen] = useState(null);

    const faqData = [
        {
            q: "Where does Riverside Debussy sail?",
            a: "Riverside Debussy primarily sails the Rhône River through southern France.",
        },
        {
            q: "Is Riverside Debussy an all-suite ship?",
            a: "The ship focuses on spacious luxury accommodations designed for comfort and relaxation.",
        },
        {
            q: "What destinations does Riverside Debussy visit?",
            a: "Popular ports include Lyon, Avignon, Arles, Viviers, Tournon-sur-Rhône, and Chalon-sur-Saône.",
        },
        {
            q: "Is Riverside Debussy all-inclusive?",
            a: "Most cruises include luxury accommodations, gourmet dining, beverages with meals, Wi-Fi, and selected excursions. Specific inclusions vary by itinerary.",
        },
        {
            q: "Is Riverside Debussy suitable for first-time river cruisers?",
            a: "Yes. Its relaxed atmosphere and attentive service make it an excellent introduction to luxury river cruising.",
        },
        {
            q: "What is the dress code onboard?",
            a: "Smart casual during the day and elegant casual in the evenings.",
        },
        {
            q: "Does Riverside Debussy offer wine experiences?",
            a: "Yes. Rhône River itineraries frequently include wine tastings and visits to renowned vineyards.",
        },
        {
            q: "Is Wi-Fi included?",
            a: "Complimentary Wi-Fi is typically included throughout the voyage.",
        },
        {
            q: "Who is Riverside Debussy best suited for?",
            a: "Couples, food and wine enthusiasts, luxury travelers, and guests seeking a peaceful European vacation.",
        },
        {
            q: "Should I book through a travel advisor?",
            a: "Yes. A luxury travel advisor can recommend the best itinerary, help you select the right suite, and coordinate every aspect of your Rhône River cruise.",
        },
        {
            q: "Are excursions included in the price on Riverside Debussy?",
            a: "Excursions can be included depending on the fare package you book. Riverside offers a 'Full Board with Excursions' option that includes daily guided excursions, as well as a 'Full Board' option if you prefer to explore independently or book excursions à la carte.",
        },
        {
            q: "Does Riverside Debussy have a swimming pool?",
            a: "Yes, Riverside Debussy features an indoor swimming pool located in the wellness area at the stern of the ship, which is a rare and premium feature for European river cruise ships.",
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

/* ── Main Component ──────────────────────────────────────────────── */
const RiversideDebussyReview = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [readMore, setReadMore] = useState(false);
    const [readMoreDestination, setReadMoreDestination] = useState(false);

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
                    Riverside Debussy Review | Is Riverside Debussy Worth It?
                </title>
                <meta
                    name="title"
                    content="Riverside Debussy Review | Luxury Rhône River Cruise Guide"
                />
                <meta
                    name="description"
                    content="Read our Riverside Debussy review covering suites, dining, service, itineraries, onboard experience, pricing, and who should sail this luxury Rhône river ship before you book."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ───────────────────────────────────────────────────── */}
            <section className="Scenic_hero_section">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`Scenic_hero_bg ${index === currentSlide ? "active" : ""
                            }`}
                        style={{ backgroundImage: `url(${img})` }}
                    ></div>
                ))}

                <div className="Scenic_hero_overlay"></div>

                <div className="Scenic_hero_content">
                    <h1>Riverside Debussy Review</h1>

                    <p>
                        Elegant, intimate, and beautifully designed, Riverside Debussy
                        delivers one of the finest luxury river cruise experiences on
                        the Rhône River. Combining spacious accommodations, attentive
                        service, gourmet cuisine, and immersive itineraries through
                        southern France, this boutique ship is an excellent choice for
                        travelers seeking a relaxed and sophisticated European vacation.
                    </p>

                    {readMore && (
                        <>
                            <p>
                                Unlike larger cruise ships, Riverside Debussy focuses on
                                personalized hospitality and destination-rich travel.
                                Guests can spend their days exploring historic villages,
                                renowned wine regions, and cultural landmarks before
                                returning to an elegant floating boutique hotel.
                            </p>

                            <p>
                                If you're considering a luxury Rhône River cruise, this
                                review covers everything you need to know before booking,
                                including accommodations, dining, service, onboard
                                amenities, itineraries, and who will enjoy Riverside
                                Debussy the most.
                            </p>
                        </>
                    )}

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

            {/* ── QUICK REVIEW ─────────────────────────────────────────────── */}
            <section
                className="Asc-section"
                id="quick-review"
                style={{ backgroundColor: "var(--bg-soft)" }}
            >
                <div className="Asc-container">
                    <div className="Asc-section-header">
                        <h2 className="Asc-h2">Quick Review</h2>
                        <div className="Asc-accent-line"></div>

                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "8px",
                                margin: "20px 0 20px",
                            }}
                        >
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={22}
                                    fill="var(--accent, #c9a45c)"
                                    color="var(--accent, #c9a45c)"
                                />
                            ))}
                            <span style={{ fontWeight: 600, marginLeft: "6px" }}>
                                4.8 / 5 Overall Rating
                            </span>
                        </div>

                        <div className="Asc-table-wrapper" style={{ marginTop: "10px" }}>
                            <table className="Asc-fleet-table">
                                <thead>
                                    <tr>
                                        <th>Category</th>
                                        <th>Rating</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Overall Luxury</strong></td>
                                        <td>⭐⭐⭐⭐⭐</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Suites</strong></td>
                                        <td>⭐⭐⭐⭐⭐</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Dining</strong></td>
                                        <td>⭐⭐⭐⭐⭐</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Service</strong></td>
                                        <td>⭐⭐⭐⭐⭐</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Public Spaces</strong></td>
                                        <td>⭐⭐⭐⭐⭐</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Excursions</strong></td>
                                        <td>⭐⭐⭐⭐☆</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Value</strong></td>
                                        <td>⭐⭐⭐⭐☆</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </section>

            {/* ── OVERVIEW OF RIVERSIDE DEBUSSY ─────────────────────────────── */}
            <section
                className="ugt-components-section"
                id="what-is-riverside-debussy"
                style={{ backgroundColor: "var(--bg-white)" }}
            >
                <div className="ugt-components-container">
                    <div className="ugt-components-header">
                        <h2 className="ugt-components-title">
                            Overview of Riverside Debussy
                        </h2>
                        <div className="adg-c-accent-line"></div>
                    </div>

                    <div className="ugt-components-list">
                        <div className="ugt-component-row">
                            <div className="ugt-component-image-wrapper">
                                <div className="ugt-component-image-container">
                                    <img
                                        // src={RiversideDebussyLounge}
                                        alt="Riverside Debussy sailing the Rhône River"
                                        className="ugt-component-image"
                                    />
                                </div>
                            </div>

                            <div className="ugt-component-content">
                                <p className="ugt-component-text">
                                    <strong>Riverside Debussy</strong> was designed for
                                    travelers who appreciate understated luxury, personalized
                                    service, and immersive European travel. Unlike larger
                                    cruise ships, it focuses on personalized hospitality and
                                    destination-rich travel, with an intimate size that
                                    creates a peaceful environment for guests to fully enjoy
                                    the journey.
                                </p>

                                <div className="ugt-questions-box">
                                    <span className="ugt-questions-title">
                                        Ship highlights include:
                                    </span>

                                    <ul className="ugt-questions-list">
                                        {[
                                            "Spacious suites",
                                            "Beautiful observation lounge",
                                            "Gourmet regional cuisine",
                                            "Personalized hospitality",
                                            "Elegant contemporary décor",
                                            "Relaxed onboard atmosphere",
                                            "Rhône River wine country itineraries",
                                            "Boutique luxury experience",
                                        ].map((item, idx) => (
                                            <li key={idx} className="ugt-question-item">
                                                <Check size={16} className="ugt-question-icon" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <p
                                    className="ugt-component-footer"
                                    style={{
                                        backgroundColor: "var(--bg-white)",
                                        padding: "12px",
                                        borderRadius: "6px",
                                    }}
                                >
                                    The ship balances understated luxury with a warm,
                                    welcoming environment—guests enjoy a slower pace of
                                    travel, scenic cruising, and personalized service from a
                                    dedicated crew.
                                </p>

                                <div className="rlc-page-cta-container rlc-align-left">
                                    <Link to="/contact" className="rlc-page-cta-btn" style={{ textDecoration: "none" }}>
                                        Start Planning Your Riverside Cruise
                                        <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ── LIFE ONBOARD & SHORE EXCURSIONS ─────────────────────────── */}
            <section
                className="Ejvs-pricing-section"
                id="life-onboard-shore-excursions"
                style={{ backgroundColor: "var(--bg-soft)" }}
            >
                <div className="Ejvs-container">
                    <div className="Ejvs-section-header">
                        <h2 className="Ejvs-section-title">
                            Life Onboard &amp; <br /> Shore Excursions
                        </h2>
                        <div className="Asc-accent-line"></div>
                        <p className="Ejvs-section-subtitle">
                            Unlike large ocean ships, Riverside Debussy emphasizes a
                            peaceful and intimate atmosphere, while included excursions
                            bring each destination to life.
                        </p>
                    </div>

                    <div className="Ejvs-pricing-grid">
                        {/* Life Onboard */}
                        <div className="Ejvs-pricing-card Ejvs-explora-card">
                            <div className="Ejvs-card-header">
                                <div className="Ejvs-card-icon-wrap">
                                    <Sparkles size={24} className="Ejvs-card-icon" />
                                </div>

                                <h3 className="Ejvs-card-title">Life Onboard</h3>
                            </div>

                            <p className="Ejvs-card-intro">
                                The focus remains on enjoying the journey rather than
                                nonstop entertainment.
                            </p>

                            <ul className="Ejvs-feature-list">
                                {[
                                    "Wine tastings",
                                    "Live music",
                                    "Destination presentations",
                                    "Cooking demonstrations",
                                    "Scenic cruising",
                                    "Social gatherings & deck relaxation",
                                ].map((item, i) => (
                                    <li key={i} className="Ejvs-feature-item">
                                        <div className="Ejvs-feature-icon">
                                            <Check size={14} />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="Ejvs-card-highlight">
                                <p>
                                    The intimate ship size creates space to relax and connect
                                    rather than compete for a quiet corner.
                                </p>
                            </div>
                        </div>

                        {/* Shore Excursions */}
                        <div className="Ejvs-pricing-card Ejvs-seabourn-card">
                            <div className="Ejvs-card-header">
                                <div className="Ejvs-card-icon-wrap">
                                    <Compass size={24} className="Ejvs-card-icon" />
                                </div>

                                <h3 className="Ejvs-card-title">Shore Excursions</h3>
                            </div>

                            <p className="Ejvs-card-intro">
                                Most itineraries include guided excursions designed to
                                introduce guests to each destination.
                            </p>

                            <ul className="Ejvs-feature-list">
                                {[
                                    "Walking tours",
                                    "Historic landmarks",
                                    "Wine tastings",
                                    "Roman archaeological sites",
                                    "Culinary experiences",
                                    "Local markets & museum visits",
                                ].map((item, i) => (
                                    <li key={i} className="Ejvs-feature-item">
                                        <div className="Ejvs-feature-icon">
                                            <Star size={14} />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="Ejvs-card-highlight">
                                <p>
                                    Additional optional excursions provide opportunities for
                                    deeper exploration.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DINING EXPERIENCE ────────────────────────────────────────── */}
            <section className="rdd-dining-section" id="dining-experience">
                <div className="rdd-dining-container">

                    {/* Header Image */}
                    <div className="rdd-dining-image-wrap">
                        <img
                            //   src={RiversideDebussyDining}
                            alt="Gourmet dining aboard Riverside Debussy"
                            className="rdd-dining-img"
                        />
                        <div className="rdd-dining-image-overlay"></div>
                        <div className="rdd-dining-image-badge">
                            <span>Fresh Seasonal Ingredients • Regional Specialties</span>
                        </div>
                    </div>

                    {/* Columns Grid */}
                    <div className="rdd-dining-grid">

                        {/* Column 1: Dining Experience */}
                        <div className="rdd-dining-card">
                            <h2 className="rdd-dining-title">Dining Experience</h2>

                            <p className="rdd-dining-lead">
                                Southern France is celebrated for its culinary traditions,
                                and Riverside Debussy reflects that heritage in every meal.
                            </p>

                            <h3 className="rdd-dining-list-title">Guests can expect:</h3>
                            <ul className="rdd-dining-list">
                                {[
                                    "Fresh seasonal ingredients",
                                    "French regional specialties",
                                    "Multi-course dinners",
                                    "Artisan cheeses",
                                    "Fresh pastries",
                                    "Local wines",
                                    "Gourmet desserts",
                                    "Elegant presentation",
                                ].map((item, idx) => (
                                    <li key={idx} className="rdd-dining-item">
                                        <div className="rdd-dining-icon-box">
                                            <Utensils size={14} />
                                        </div>
                                        <span className="rdd-dining-item-text">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="rdd-dining-footer-box">
                                <p className="rdd-dining-footer-text">
                                    Menus change throughout the cruise to highlight the
                                    destinations visited.
                                </p>
                            </div>
                        </div>

                        {/* Column 2: Dining & Wine Experience */}
                        <div className="rdd-dining-card">
                            <h2 className="rdd-dining-title">Dining &amp; Wine Experience</h2>

                            <p className="rdd-dining-lead">
                                The Rhône Valley is one of France's premier wine regions,
                                making food and wine an important part of every itinerary.
                            </p>

                            <h3 className="rdd-dining-list-title">Guests enjoy:</h3>
                            <ul className="rdd-dining-list">
                                {[
                                    "Regional French cuisine",
                                    "Rhône Valley wines",
                                    "Local cheeses",
                                    "Seasonal produce",
                                    "Gourmet desserts",
                                    "Elegant dining service",
                                ].map((item, idx) => (
                                    <li key={idx} className="rdd-dining-item">
                                        <div className="rdd-dining-icon-box">
                                            <Wine size={14} />
                                        </div>
                                        <span className="rdd-dining-item-text">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="rdd-dining-footer-box">
                                <p className="rdd-dining-footer-text">
                                    Meals frequently showcase ingredients sourced from the
                                    regions visited.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="rlc-page-cta-container" style={{ marginTop: "40px", justifyContent: "center" }}>
                        <Link to="/contact" className="rlc-page-cta-btn" style={{ textDecoration: "none" }}>
                            Start Planning Your Riverside Cruise
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── SERVICE & HOSPITALITY ────────────────────────────────────── */}
            <section
                className="ugt-components-section"
                id="service-hospitality"
                style={{ backgroundColor: "var(--bg-soft)" }}
            >
                <div className="ugt-components-container">
                    <div className="ugt-components-header">
                        <h2 className="ugt-components-title">Service &amp; Hospitality</h2>
                        <div className="adg-c-accent-line"></div>
                    </div>

                    <div className="ugt-components-list">
                        <div className="ugt-component-row">
                            <div className="ugt-component-image-wrapper">
                                <div className="ugt-component-image-container">
                                    <img
                                        // src={RiversideDebussyCrew}
                                        alt="Attentive crew service aboard Riverside Debussy"
                                        className="ugt-component-image"
                                    />
                                </div>
                            </div>

                            <div className="ugt-component-content">
                                <p className="ugt-component-text">
                                    Exceptional hospitality is one of{" "}
                                    <strong>Riverside's</strong> defining characteristics.
                                    Crew members quickly learn guest preferences and provide
                                    attentive, friendly service throughout the voyage.
                                </p>

                                <div className="ugt-questions-box">
                                    <span className="ugt-questions-title">
                                        Crew members are known for:
                                    </span>

                                    <ul className="ugt-questions-list">
                                        {[
                                            "Warm, attentive service",
                                            "Learning guest preferences quickly",
                                            "Friendly interactions",
                                            "Attention to detail",
                                            "Professionalism",
                                        ].map((item, idx) => (
                                            <li key={idx} className="ugt-question-item">
                                                <Check size={16} className="ugt-question-icon" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <p
                                    className="ugt-component-footer"
                                    style={{
                                        backgroundColor: "var(--bg-white)",
                                        padding: "12px",
                                        borderRadius: "6px",
                                    }}
                                >
                                    The intimate guest-to-crew ratio allows for a highly
                                    personalized experience throughout the voyage.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* ── RHÔNE ITINERARIES ──────────────────────────────────────── */}
            <section className="luc-why-section" id="rhone-itineraries">
                <div className="luc-why-container">
                    <div className="luc-why-images">
                        <div className="luc-why-img-main-wrap" style={{ color: "#fff" }}>
                            <img
                                // src={RiversideDebussyRhone}
                                alt="Riverside Debussy sailing the Rhône River past Avignon"
                                className="luc-why-img-main"
                            />
                            <div className="luc-why-img-overlay"></div>
                        </div>

                        <div className="luc-why-img-accent-wrap" style={{ color: "#fff" }}>
                            <img
                                // src={RiversideDebussyArles}
                                alt="Arles France along the Rhône River"
                                className="luc-why-img-accent"
                            />

                            <div className="luc-why-img-badge">
                                <span className="luc-why-badge-num">6</span>
                                <span className="luc-why-badge-text">Iconic Ports</span>
                            </div>
                        </div>
                    </div>

                    <div className="luc-why-content">
                        <h2 className="luc-why-title">Rhône River Itineraries</h2>

                        <div className="aac-accent-line aac-accent-white"></div>

                        <p className="luc-why-intro">
                            Riverside Debussy primarily sails through southern France on
                            the Rhône River. Guests experience medieval towns, Roman ruins,
                            Provençal villages, vineyards, and world-famous culinary
                            regions.
                        </p>

                        <div className="luc-why-features">
                            {[
                                {
                                    num: "01",
                                    title: "Lyon",
                                    desc: "Discover France's culinary capital, with its Renaissance old town and celebrated gastronomy.",
                                },
                                {
                                    num: "02",
                                    title: "Avignon",
                                    desc: "Explore the medieval Palace of the Popes and the storied ramparts of this Provençal city.",
                                },
                                {
                                    num: "03",
                                    title: "Arles",
                                    desc: "Wander Roman ruins and the sunlit streets that once inspired Van Gogh.",
                                },
                                {
                                    num: "04",
                                    title: "Viviers",
                                    desc: "Stroll a beautifully preserved medieval village overlooking the Rhône Valley.",
                                },
                                {
                                    num: "05",
                                    title: "Tournon-sur-Rhône",
                                    desc: "Visit the heart of Rhône Valley wine country, framed by terraced vineyards.",
                                },
                                {
                                    num: "06",
                                    title: "Chalon-sur-Saône",
                                    desc: "Experience a charming riverside town rich in history and local markets.",
                                },
                            ]
                                .slice(0, readMoreDestination ? 6 : 2)
                                .map((feat, i) => (
                                    <div key={i} className="luc-why-feature">
                                        <div className="luc-why-feature-num">{feat.num}</div>

                                        <div className="luc-why-feature-body">
                                            <h3 className="luc-why-feature-title">{feat.title}</h3>
                                            <p className="luc-why-feature-desc">{feat.desc}</p>
                                        </div>
                                    </div>
                                ))}
                        </div>

                        <div
                            className="Scenic_readmore_wrapper"
                            style={{ marginTop: "25px", textAlign: "left" }}
                        >
                            <button
                                className="Scenic_readmore_btn"
                                onClick={() => setReadMoreDestination(!readMoreDestination)}
                            >
                                {readMoreDestination ? "Read Less" : "Read More"}
                            </button>
                        </div>

                        <div className="rlc-page-cta-container rlc-align-left" style={{ marginTop: "20px" }}>
                            <Link to="/contact" className="rlc-page-cta-btn" style={{ textDecoration: "none" }}>
                                Start Planning Your Riverside Cruise
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PUBLIC SPACES ───────────────────────────────────────────── */}
            <section
                className="rlc-compare-section"
                id="public-spaces"
            >
                <div className="rlc-compare-container">
                    <div className="rlc-compare-header">
                        <span className="rlc-compare-eyebrow">Onboard Design</span>

                        <h2 className="rlc-compare-title">
                            Public Spaces
                        </h2>

                        <div className="rlc-compare-accent"></div>

                        <p className="rlc-compare-intro">
                            Riverside Debussy offers beautifully designed spaces for
                            relaxation throughout the ship.
                        </p>
                    </div>

                    <div className="rlc-compare-grid">
                        {[
                            {
                                title: "Observation Lounge",
                                text: "A comfortable gathering place with panoramic windows, perfect for enjoying the passing scenery.",
                            },
                            {
                                title: "Sun Deck",
                                text: "Relax outdoors while sailing through picturesque river valleys, vineyards, and historic towns.",
                            },
                            {
                                title: "Library & Quiet Spaces",
                                text: "Ideal for reading, conversation, or simply unwinding between excursions.",
                            },
                            {
                                title: "Fitness & Wellness",
                                text: "Guests can maintain their wellness routines with fitness equipment and optional spa treatments.",
                            },
                        ].map((item, i) => (
                            <div key={i} className="rlc-compare-card">
                                <div className="rlc-compare-card-header">
                                    <div className="rlc-compare-badge-wrap">
                                        <span className="rlc-compare-ship-icon">
                                            <Ship size={18} strokeWidth={2} />
                                        </span>
                                    </div>
                                    <h3 className="rlc-compare-card-title">
                                        <span className="rlc-compare-brand-primary">{item.title}</span>
                                    </h3>
                                </div>
                                <div className="rlc-compare-card-body">
                                    <p className="rlc-compare-card-text">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SUITES & ACCOMMODATIONS ──────────────────────────────────── */}
            <section className="adg-c-section adg-c-bg-soft" id="suites-accommodations">
                <div className="adg-c-container">
                    <div className="adg-c-section-header">
                        <h2 className="adg-c-h2">Suites &amp; Accommodations</h2>

                        <div className="adg-c-accent-line"></div>

                        <p className="Asc-section-intro">
                            Accommodations aboard Riverside Debussy are among the ship's
                            greatest strengths. The generous suite sizes make longer
                            European journeys especially comfortable.
                        </p>
                    </div>

                    <div className="adg-c-overview-layout">
                        <div className="adg-c-overview-icons">
                            {[
                                "Spacious suite layouts",
                                "King-size beds",
                                "Comfortable sitting areas",
                                "Marble bathrooms",
                                "Premium bath amenities",
                                "Luxury linens",
                                "Ample storage space",
                                "Beautiful river views",
                            ].map((label, i) => (
                                <div key={i} className="adg-c-overview-item">
                                    <span className="adg-c-overview-icon">
                                        <BedDouble size={16} strokeWidth={2.5} />
                                    </span>

                                    <span className="adg-c-overview-label">{label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="adg-c-overview-right">
                            <div className="adg-c-overview-callout">
                                <div className="adg-c-overview-callout-inner">
                                    <Star size={28} className="adg-c-callout-star" />

                                    <p className="adg-c-callout-text">
                                        The generous suite sizes make longer European
                                        journeys especially comfortable.
                                    </p>
                                </div>
                            </div>

                            <div className="adg-c-overview-image-wrap" style={{ height: '350px' }}>
                                <img
                                    //   src={RiversideDebussySuite}
                                    alt="Spacious suite aboard Riverside Debussy"
                                    className="adg-c-overview-img"
                                />

                                <div className="adg-c-overview-img-overlay">
                                    <span className="adg-c-overview-img-label">
                                        Spacious Living • Elegant Comfort
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHO SHOULD SAIL RIVERSIDE DEBUSSY ─────────────────────────── */}
            <section className="Asc-section" id="who-should-sail" style={{ backgroundColor: "var(--bg-white)" }}>
                <div className="Asc-container">
                    <div className="Asc-section-header">
                        <h2 className="Asc-h2">Who Should Sail Riverside Debussy?</h2>
                        <div className="Asc-accent-line"></div>

                        <p className="Asc-section-intro">
                            Its spacious accommodations and relaxed atmosphere make
                            Riverside Debussy particularly appealing to guests who
                            prioritize comfort over onboard entertainment.
                        </p>
                    </div>

                    <div className="Asc-who-grid">
                        <div className="Asc-who-card Asc-who-yes">
                            <h3 className="Asc-who-title">Riverside Debussy Is an Excellent Choice For:</h3>

                            <ul className="Asc-who-list">
                                {[
                                    "Couples",
                                    "Luxury travelers",
                                    "Retired travelers",
                                    "Food and wine enthusiasts",
                                    "Anniversary celebrations",
                                    "Honeymooners",
                                    "Experienced river cruisers",
                                    "Travelers seeking a quieter luxury experience",
                                ].map((item, i) => (
                                    <li key={i}>
                                        <Check size={16} className="Asc-icon-green" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="Asc-who-card Asc-who-no">
                            <h3 className="Asc-who-title">Who Might Prefer Another Ship?</h3>

                            <ul className="Asc-who-list">
                                {[
                                    "Prefer highly active vacations",
                                    "Want family-focused entertainment",
                                    "Need extensive nightlife",
                                    "Are traveling with young children",
                                    "Prefer budget-friendly river cruises",
                                ].map((item, i) => (
                                    <li key={i}>
                                        <X size={16} className="Asc-icon-red" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── IS RIVERSIDE DEBUSSY WORTH IT ─────────────────────────────── */}
            <section
                className="rlc-worth-section"
                id="is-riverside-debussy-worth-it"
            >
                <div className="rlc-worth-container">
                    {/* Header Block */}
                    <div className="rlc-worth-header">
                        <span className="rlc-worth-eyebrow">Expert Verdict</span>
                        <h2 className="rlc-worth-title">Is Riverside Debussy Worth It?</h2>
                        <div className="rlc-worth-accent"></div>
                    </div>

                    {/* Top Intro Layout: Lead paragraph next to the image */}
                    <div className="rlc-worth-intro-grid">
                        <div className="rlc-worth-lead-box">
                            <p className="rlc-worth-lead">
                                Absolutely. Travelers seeking an elegant Rhône River
                                cruise with spacious accommodations, refined cuisine, and
                                highly personalized service will find Riverside Debussy to
                                be an outstanding choice. Its intimate atmosphere,
                                exceptional hospitality, and thoughtfully designed
                                itineraries make it one of the finest boutique luxury
                                river cruise experiences in France.
                            </p>
                        </div>
                        <div className="rlc-worth-media-new">
                            <div className="rlc-worth-media-wrapper-new">
                                <img
                                    //   src={RiversideDebussyEvening}
                                    alt="Elegant evening lounge aboard Riverside Debussy"
                                    className="rlc-worth-media-img-new"
                                />
                                <div className="rlc-worth-media-overlay-new"></div>
                                <div className="rlc-worth-media-badge-new">
                                    <span>Understated • Elegant</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pros and Cons Split Cards */}
                    <div className="rlc-worth-cards-grid">
                        {/* Pros Card */}
                        <div className="rlc-worth-card rlc-worth-pros-card">
                            <div className="rlc-worth-card-header">
                                <div className="rlc-worth-card-icon-box rlc-pro">
                                    <Check size={20} strokeWidth={3} />
                                </div>
                                <h3 className="rlc-worth-card-title">What Makes It Worth It (Pros)</h3>
                            </div>
                            <ul className="rlc-worth-list-new">
                                {[
                                    "Spacious luxury suites",
                                    "Elegant contemporary interiors",
                                    "Outstanding personalized service",
                                    "Gourmet dining",
                                    "Beautiful Rhône itineraries",
                                    "Relaxed onboard atmosphere",
                                    "Excellent public spaces",
                                    "Boutique luxury experience",
                                ].map((item, idx) => (
                                    <li key={idx} className="rlc-worth-list-item-new">
                                        <Check size={14} className="rlc-worth-item-icon rlc-pro" />
                                        <span className="rlc-worth-item-text">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Cons Card */}
                        <div className="rlc-worth-card rlc-worth-cons-card">
                            <div className="rlc-worth-card-header">
                                <div className="rlc-worth-card-icon-box rlc-con">
                                    <Minus size={20} strokeWidth={3} />
                                </div>
                                <h3 className="rlc-worth-card-title">Considerations (Cons)</h3>
                            </div>
                            <ul className="rlc-worth-list-new">
                                {[
                                    "Premium pricing",
                                    "Limited nightlife",
                                    "Smaller entertainment program",
                                    "Fewer itinerary options than larger cruise lines",
                                ].map((item, idx) => (
                                    <li key={idx} className="rlc-worth-list-item-new">
                                        <Minus size={14} className="rlc-worth-item-icon rlc-con" />
                                        <span className="rlc-worth-item-text">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Final Verdict Callout Box */}
                    <div className="rlc-worth-verdict-box">
                        <div className="rlc-worth-verdict-inner">
                            <div className="rlc-worth-verdict-content">
                                <div className="rlc-worth-verdict-badge">Final Verdict</div>
                                <p className="rlc-worth-conclusion-text-new">
                                    If your priorities include relaxation, gourmet cuisine,
                                    and beautifully curated itineraries, Riverside Debussy is
                                    well worth considering.
                                </p>
                            </div>
                            <div className="rlc-worth-verdict-cta">
                                <Link to="/contact" className="rlc-worth-cta-button" style={{ textDecoration: "none" }}>
                                    Start Planning Your Riverside Cruise
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHY BOOK THROUGH A LUXURY TRAVEL ADVISOR ────────────────── */}
            <section
                className="Avr-planning-section"
                id="Asc-luxury-travel-advisor"
                style={{ backgroundColor: "var(--bg-white)" }}
            >
                <div className="Asc-container">
                    <div className="Avr-planning-heading">
                        <span className="Avr-planning-eyebrow">
                            Personalized Trip Planning
                        </span>

                        <h2 className="Avr-planning-title">
                            Why Book Through a Luxury Travel Advisor?
                        </h2>

                        <div className="Avr-planning-divider"></div>
                    </div>

                    <div className="Avr-planning-grid">
                        <div className="Avr-planning-left">
                            <div className="Avr-planning-left-deco">&ldquo;</div>

                            <h3 className="Avr-planning-left-title">
                                Choose the Riverside Debussy Suite That Fits You
                            </h3>

                            <p className="Avr-planning-left-body">
                                Booking through an experienced luxury travel advisor
                                offers several advantages, from guidance choosing the right
                                suite to help comparing itineraries and coordinating every
                                detail of your journey.
                            </p>

                            <div className="Avr-planning-alert">
                                <ShieldCheck size={18} className="Avr-planning-alert-icon" />

                                <p className="Avr-planning-alert-text">
                                    An advisor can help ensure every aspect of your luxury
                                    river cruise is carefully planned.
                                </p>
                            </div>
                        </div>

                        <div className="Avr-planning-right">
                            <p className="Avr-planning-right-intro">
                                A knowledgeable travel advisor can assist with:
                            </p>

                            <div className="Avr-planning-benefits-grid">
                                {[
                                    { icon: <Home size={18} />, label: "Guidance choosing the right suite" },
                                    { icon: <Compass size={18} />, label: "Help comparing itineraries" },
                                    { icon: <Plane size={18} />, label: "Coordination of flights and hotels" },
                                    { icon: <MapPinned size={18} />, label: "Private transfers" },
                                    { icon: <Sparkles size={18} />, label: "Advice on shore excursions" },
                                    { icon: <Star size={18} />, label: "Assistance with promotions and special offers" },
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
                                Ongoing support before and during your trip ensures every
                                aspect of your luxury river cruise is carefully planned.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ANGELA HUGHES AUTHORITY BOX ────────────────────────────── */}
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

            {/* ── FAQ ────────────────────────────────────────────────────── */}
            <section className="Asc-section Asc-bg-white" id="Asc-faq">
                <div className="Asc-container">
                    <div className="Asc-section-header">
                        <h2 className="Asc-h2">Frequently Asked Questions</h2>
                        <div className="Asc-accent-line"></div>
                        <p className="Asc-faq-intro">
                            Everything travelers need to know about Riverside Debussy
                            before booking their next European river cruise.
                        </p>
                    </div>
                    <FAQ />
                </div>
            </section>

            {/* ── CTA / FINAL THOUGHTS ─────────────────────────────────────── */}
            <section className="Asc-help-section">
                <div className="Asc-help-bg-wrap">
                    <img
                        // src={RiversideDebussyShip}
                        alt="Riverside Debussy sailing the Rhône River"
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
                                    Final Verdict: Riverside Debussy
                                </h2>
                                <div className="Asc-help-accent"></div>
                            </div>

                            <div className="Asc-help-grid">
                                <div className="Asc-help-info">
                                    <p className="Asc-help-intro">
                                        Riverside Debussy combines elegant accommodations,
                                        exceptional cuisine, attentive service, and immersive
                                        Rhône River itineraries into one refined luxury
                                        experience.
                                        {!readMore && (
                                            <button
                                                onClick={() => setReadMore(true)}
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

                                    {readMore && (
                                        <>
                                            <br />
                                            <p className="Asc-help-intro">
                                                For travelers who value boutique hospitality,
                                                gourmet dining, French wine culture, and relaxed
                                                European travel, Riverside Debussy offers an
                                                unforgettable journey through one of France's most
                                                beautiful regions.
                                            </p>
                                            <br />
                                            <p className="Asc-help-intro">
                                                At Trips &amp; Ships Luxury Travel, we'll help you
                                                compare itineraries, select the ideal suite, and
                                                create a personalized Riverside Debussy vacation
                                                tailored to your travel style.
                                                <button
                                                    onClick={() => setReadMore(false)}
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
                                            Start Planning Your Riverside Cruise
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
                                            "Compare itineraries",
                                            "Choose the ideal suite",
                                            "Explain fare options",
                                            "Arrange flights and hotels",
                                            "Coordinate transfers and shore experiences",
                                            "Secure exclusive promotions",
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

                            {/* Continue Exploring Riverside Luxury Cruises */}
                            <div
                                className="Asc-internal-links-section"
                                style={{
                                    marginTop: "60px",
                                    borderTop: "1px solid rgba(255, 255, 255, 0.2)",
                                    paddingTop: "40px",
                                }}
                            >
                                <h3
                                    style={{
                                        color: "#fff",
                                        fontFamily: "var(--font-display)",
                                        fontSize: "24px",
                                        fontWeight: "400",
                                        marginBottom: "20px",
                                    }}
                                >
                                    Continue Exploring Riverside Luxury Cruises
                                </h3>
                                <div
                                    className="Asc-internal-links-grid"
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns:
                                            "repeat(auto-fill, minmax(280px, 1fr))",
                                        gap: "15px",
                                    }}
                                >
                                    {[
                                        {
                                            label: "Riverside Luxury Cruises",
                                            path: "/riverside-luxury-cruises",
                                        },
                                        {
                                            label: "Riverside Luxury Cruises Reviews",
                                            path: "/riverside-luxury-cruises-reviews",
                                        },
                                        {
                                            label: "Is Riverside Worth It?",
                                            path: "/is-riverside-worth-it",
                                        },
                                        {
                                            label: "Riverside Luxury Cruises Pros and Cons",
                                            path: "/riverside-luxury-cruises-pros-and-cons",
                                        },
                                        {
                                            label: "Honest Riverside Cruise Review",
                                            path: "/honest-riverside-cruise-review",
                                        },
                                        {
                                            label: "What Is Included on Riverside?",
                                            path: "/what-is-included-on-riverside",
                                        },
                                        {
                                            label: "Riverside Mozart Review",
                                            path: "/riverside-mozart-review",
                                        },
                                        {
                                            label: "Riverside Ravel Review",
                                            path: "/riverside-ravel-review",
                                        },
                                        {
                                            label: "Riverside Danube Cruises",
                                            path: "/riverside-danube-cruises",
                                        },
                                        {
                                            label: "Riverside Rhine Cruises",
                                            path: "/riverside-rhine-cruises",
                                        },
                                        {
                                            label: "Riverside Rhône Cruises",
                                            path: "/riverside-rhone-cruises",
                                        },
                                        {
                                            label: "Riverside Christmas Market Cruises",
                                            path: "/riverside-christmas-market-cruises",
                                        },
                                        {
                                            label: "Riverside Tulip Cruises",
                                            path: "/riverside-tulip-cruises",
                                        },
                                        {
                                            label: "Riverside vs. Scenic",
                                            path: "/riverside-vs-scenic-river-cruises",
                                        },
                                        {
                                            label: "Riverside vs. Uniworld",
                                            path: "/riverside-vs-uniworld-river-cruises",
                                        },
                                        {
                                            label: "Riverside vs. Tauck",
                                            path: "/riverside-vs-tauck-river-cruises",
                                        },
                                        {
                                            label: "Riverside vs. AmaWaterways",
                                            path: "/riverside-vs-amawaterways",
                                        },
                                        {
                                            label: "Riverside vs. Avalon",
                                            path: "/riverside-vs-avalon-waterways",
                                        },
                                    ].map((link, idx) => (
                                        <Link
                                            key={idx}
                                            to={link.path}
                                            style={{
                                                color: "rgba(255, 255, 255, 0.8)",
                                                fontSize: "16px",
                                                textDecoration: "none",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "8px",
                                                transition: "color 0.2s ease",
                                            }}
                                            onMouseEnter={(e) => (e.target.style.color = "#fff")}
                                            onMouseLeave={(e) =>
                                                (e.target.style.color = "rgba(255, 255, 255, 0.8)")
                                            }
                                        >
                                            <ArrowRight size={14} style={{ flexShrink: 0 }} />
                                            <span>{link.label}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RiversideDebussyReview;