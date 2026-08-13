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
    BedDouble,
    Wine,
    Music,
    Utensils,
    Wifi,
    Coffee,
    Dumbbell,
    X,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

/* ── Placeholder image imports ────────────────────────────────────
   Replace these with real Riverside Luxury Cruises photography once
   available. Paths assume a new /assets/WhatIsIncludedOnRiverside folder. */
// import HeroImage1 from "../../assets/WhatIsIncludedOnRiverside/riverside-ship-danube-sunset.jpg";
// import HeroImage2 from "../../assets/WhatIsIncludedOnRiverside/riverside-suite-balcony.jpg";
// import HeroImage3 from "../../assets/WhatIsIncludedOnRiverside/riverside-rhine-castle-view.jpg";
// import RiversideSuite from "../../assets/WhatIsIncludedOnRiverside/riverside-suite-living-area.jpg";
// import RiversideDining from "../../assets/WhatIsIncludedOnRiverside/riverside-gourmet-dining.jpg";
// import RiversideLounge from "../../assets/WhatIsIncludedOnRiverside/riverside-lounge-deck.jpg";
// import RiversideEvening from "../../assets/WhatIsIncludedOnRiverside/riverside-evening-lounge.jpg";
// import RiversideCrew from "../../assets/WhatIsIncludedOnRiverside/riverside-crew-service.jpg";
// import RiversideDanube from "../../assets/WhatIsIncludedOnRiverside/riverside-danube-vienna.jpg";
// import RiversideRhine from "../../assets/WhatIsIncludedOnRiverside/riverside-rhine-vineyards.jpg";
// import RiversideShip from "../../assets/WhatIsIncludedOnRiverside/riverside-ship-exterior.jpg";

import { Helmet } from "react-helmet-async";
import "../RiversideLuxuryCruisesReviews/RiversideLuxuryCruisesReviews.css";
import "../RiversideLuxuryCruises/RiversideLuxuryCruises.css";

/* ── Schema ─────────────────────────────────────────────────────── */
const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": "https://www.tripsandships.com/#organization",
            name: "Trips & Ships Luxury Travel",
            url: "https://www.tripsandships.com/",
            logo: "https://www.tripsandships.com/Copy-of-TRIPSSHIPS-e1592486640831.webp",
        },
        {
            "@type": "TravelAgency",
            "@id": "https://www.tripsandships.com/#travelagency",
            name: "Trips & Ships Luxury Travel",
            url: "https://www.tripsandships.com/",
            description:
                "Luxury travel agency specializing in luxury cruises, river cruises, safaris, expeditions, and premium travel experiences.",
        },
        {
            "@type": "Person",
            "@id": "https://www.tripsandships.com/#person",
            name: "Angela Hughes",
            jobTitle: "CEO of Trips & Ships Luxury Travel",
            description:
                "Luxury travel expert with over 40 years of experience and travel to 121+ countries.",
        },
        {
            "@type": "WebPage",
            "@id": "https://www.tripsandships.com/what-is-included-on-riverside/#webpage",
            name: "What Is Included on Riverside Luxury Cruises? | Complete Guide",
            url: "https://www.tripsandships.com/what-is-included-on-riverside",
            description:
                "Discover what's included on Riverside Luxury Cruises, from spacious suites and gourmet dining to beverages, Wi-Fi, excursions, and personalized service. Learn exactly what to expect before you book.",
        },
        {
            "@type": "Article",
            "@id": "https://www.tripsandships.com/what-is-included-on-riverside/#article",
            headline: "What Is Included on Riverside Luxury Cruises?",
            description:
                "A complete guide to everything included on a Riverside Luxury Cruises vacation, covering accommodations, dining, beverages, Wi-Fi, excursions, service, amenities, and what typically costs extra.",
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
            "@type": "BreadcrumbList",
            "@id":
                "https://www.tripsandships.com/what-is-included-on-riverside/#breadcrumb",
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
                    name: "River Cruise Guides",
                    item: "https://www.tripsandships.com/river-cruise-guides",
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: "Riverside Luxury Cruises Reviews",
                    item: "https://www.tripsandships.com/riverside-luxury-cruises-reviewss",
                },
                {
                    "@type": "ListItem",
                    position: 4,
                    name: "What Is Included on Riverside",
                    item: "https://www.tripsandships.com/what-is-included-on-riverside",
                },
            ],
        },
        {
            "@type": "TouristTrip",
            "@id": "https://www.tripsandships.com/what-is-included-on-riverside/#trip",
            name: "Riverside Luxury Cruises European River Cruise Experience",
            description:
                "Boutique luxury river cruising with spacious suite accommodations, gourmet dining, beverages with meals, Wi-Fi, personalized service, and guided shore excursions on the Danube, Rhine, Rhône, Main, and Moselle Rivers.",
            provider: {
                "@type": "Organization",
                name: "Riverside Luxury Cruises",
            },
        },
        {
            "@type": "Service",
            "@id": "https://www.tripsandships.com/what-is-included-on-riverside/#service",
            serviceType: "Luxury River Cruise Vacation Planning",
            provider: {
                "@type": "TravelAgency",
                name: "Trips & Ships Luxury Travel",
            },
            areaServed: "Worldwide",
            description:
                "Personalized planning for Riverside Luxury Cruises sailings, including itinerary selection, suite recommendations, and exclusive promotions.",
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/what-is-included-on-riverside/#itemlist",
            name: "What Is Included on Riverside Luxury Cruises? — What This Guide Covers",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Quick Answer" },
                { "@type": "ListItem", position: 2, name: "Luxury Suite Accommodations" },
                { "@type": "ListItem", position: 3, name: "Gourmet Dining Throughout Your Cruise" },
                { "@type": "ListItem", position: 4, name: "Beverages Included" },
                { "@type": "ListItem", position: 5, name: "Complimentary Wi-Fi" },
                { "@type": "ListItem", position: 6, name: "Shore Excursions" },
                { "@type": "ListItem", position: 7, name: "Personalized Service" },
                { "@type": "ListItem", position: 8, name: "Onboard Amenities & Evening Entertainment" },
                { "@type": "ListItem", position: 9, name: "Wellness & Fitness" },
                { "@type": "ListItem", position: 10, name: "Destinations You'll Explore" },
                { "@type": "ListItem", position: 11, name: "What's Usually Not Included?" },
                { "@type": "ListItem", position: 12, name: "Is Riverside All-Inclusive?" },
                { "@type": "ListItem", position: 13, name: "Who Gets the Most Value?" },
                { "@type": "ListItem", position: 14, name: "Why Book Through a Luxury Travel Advisor?" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/what-is-included-on-riverside/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Are meals included on Riverside Luxury Cruises?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Breakfast, lunch, and dinner are typically included throughout your cruise.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are drinks included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Wine, beer, soft drinks, coffee, tea, and water are generally included with meals. Premium beverages may cost extra.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Riverside include shore excursions?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Most itineraries include selected guided excursions, while additional premium experiences may be available for purchase.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Wi-Fi included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Complimentary Wi-Fi is generally available throughout the cruise.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are gratuities included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Gratuity policies may vary by itinerary and booking package. Review your booking confirmation or consult your travel advisor for details.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is airfare included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "International airfare is usually not included unless purchased as part of a cruise package.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Riverside include airport transfers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Transfers may be included with certain packages or promotions. Confirm the details for your specific itinerary.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are fitness facilities included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Guests have access to onboard fitness facilities throughout the cruise.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Riverside suitable for first-time river cruisers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Absolutely. Its personalized service and relaxed atmosphere make it an excellent introduction to luxury river cruising.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I use a travel advisor when booking Riverside?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. A luxury travel advisor can explain inclusions, compare itineraries, recommend the best suite, and help coordinate every aspect of your trip.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is room service included in the cruise fare?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, 24-hour room service is included for all guests, allowing you to dine in the comfort of your suite.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are spa treatments and wellness services included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "No, while the fitness facilities and relaxation spaces are complimentary, spa treatments and massage services incur an additional fee.",
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
            q: "Are meals included on Riverside Luxury Cruises?",
            a: "Yes. Breakfast, lunch, and dinner are typically included throughout your cruise.",
        },
        {
            q: "Are drinks included?",
            a: "Wine, beer, soft drinks, coffee, tea, and water are generally included with meals. Premium beverages may cost extra.",
        },
        {
            q: "Does Riverside include shore excursions?",
            a: "Most itineraries include selected guided excursions, while additional premium experiences may be available for purchase.",
        },
        {
            q: "Is Wi-Fi included?",
            a: "Yes. Complimentary Wi-Fi is generally available throughout the cruise.",
        },
        {
            q: "Are gratuities included?",
            a: "Gratuity policies may vary by itinerary and booking package. Review your booking confirmation or consult your travel advisor for details.",
        },
        {
            q: "Is airfare included?",
            a: "International airfare is usually not included unless purchased as part of a cruise package.",
        },
        {
            q: "Does Riverside include airport transfers?",
            a: "Transfers may be included with certain packages or promotions. Confirm the details for your specific itinerary.",
        },
        {
            q: "Are fitness facilities included?",
            a: "Yes. Guests have access to onboard fitness facilities throughout the cruise.",
        },
        {
            q: "Is Riverside suitable for first-time river cruisers?",
            a: "Absolutely. Its personalized service and relaxed atmosphere make it an excellent introduction to luxury river cruising.",
        },
        {
            q: "Should I use a travel advisor when booking Riverside?",
            a: "Yes. A luxury travel advisor can explain inclusions, compare itineraries, recommend the best suite, and help coordinate every aspect of your trip.",
        },
        {
            q: "Is room service included in the cruise fare?",
            a: "Yes, 24-hour room service is included for all guests, allowing you to dine in the comfort of your suite.",
        },
        {
            q: "Are spa treatments and wellness services included?",
            a: "No, while the fitness facilities and relaxation spaces are complimentary, spa treatments and massage services incur an additional fee.",
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
const WhatIsIncludedOnRiverside = () => {
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
                    What Is Included on Riverside Luxury Cruises? | Complete Guide
                </title>
                <meta
                    name="title"
                    content="What Is Included on Riverside? | Luxury River Cruise Inclusions"
                />
                <meta
                    name="description"
                    content="Discover what's included on Riverside Luxury Cruises, from spacious suites and gourmet dining to beverages, Wi-Fi, excursions, and personalized service. Learn exactly what to expect before you book."
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
                    <h1>What Is Included on Riverside <br /> Luxury Cruises?</h1>

                    <p>
                        One of the most common questions travelers ask before booking is:
                        "What is actually included on a Riverside Luxury Cruises
                        vacation?"
                    </p>

                    <p>
                        Riverside Luxury Cruises is designed to deliver a premium,
                        boutique river cruise experience where many of the essentials are
                        already part of your fare. From elegant accommodations and
                        exceptional dining to personalized service and immersive European
                        itineraries, Riverside focuses on creating a seamless luxury
                        vacation.
                    </p>

                    {readMore && (
                        <>
                            <p>
                                While inclusions can vary slightly by itinerary, you'll find
                                that most cruises provide excellent value through a wide
                                range of amenities and services.
                            </p>

                            <p>
                                This guide walks through exactly what's included on a typical
                                Riverside sailing—from suites and dining to beverages, Wi-Fi,
                                excursions, and service—along with what's usually considered
                                an optional extra.
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

            {/* ── QUICK ANSWER ─────────────────────────────────────────────── */}
            <section
                className="rlc-qa-section"
                id="quick-answer" style={{ backgroundColor: 'var(--bg-white)' }}
            >
                <div className="rlc-qa-container">
                    <div className="rlc-qa-card-wrapper">
                        <h2 className="rlc-qa-title">Quick Answer</h2>
                        <div className="rlc-qa-accent"></div>

                        <p className="rlc-qa-intro">
                            Most Riverside Luxury Cruises include:
                        </p>

                        <ul className="rlc-qa-list">
                            {[
                                "Spacious luxury accommodations",
                                "Gourmet breakfast, lunch, and dinner",
                                "Wine, beer, and soft drinks with lunch and dinner",
                                "Complimentary Wi-Fi",
                                "Daily housekeeping",
                                "Personalized onboard service",
                                "Selected guided shore excursions",
                                "Fitness facilities",
                                "Evening entertainment",
                                "Port charges and taxes",
                            ].map((item, i) => (
                                <li key={i} className="rlc-qa-item">
                                    <span className="rlc-qa-icon-wrap">
                                        <Check size={16} strokeWidth={3} className="rlc-qa-check-icon" />
                                    </span>
                                    <span className="rlc-qa-text">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="rlc-qa-outro">
                            Some optional experiences, premium beverages, spa treatments,
                            and specialty excursions may have an additional cost.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── LUXURY SUITE ACCOMMODATIONS ─────────────────────────────── */}
            <section className="adg-c-section adg-c-bg-soft" id="luxury-suite-accommodations">
                <div className="adg-c-container">
                    <div className="adg-c-section-header">
                        <h2 className="adg-c-h2">Luxury Suite Accommodations</h2>

                        <div className="adg-c-accent-line"></div>

                        <p className="Asc-section-intro">
                            Every Riverside voyage begins with beautifully appointed
                            accommodations designed for comfort and relaxation. Many
                            Riverside suites are among the largest available on Europe's
                            rivers.
                        </p>
                    </div>

                    <div className="adg-c-overview-layout">
                        <div className="adg-c-overview-icons">
                            {[
                                "Spacious suites with king-size beds",
                                "Premium mattresses and luxury linens",
                                "Marble bathrooms",
                                "High-end bath amenities",
                                "Sitting areas and beautiful river views",
                                "Climate control, TV, safe, and hair dryer",
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
                                        If having extra space is important to you, Riverside's
                                        suites deliver exceptional value on the river.
                                    </p>
                                </div>
                            </div>

                            <div className="adg-c-overview-image-wrap" style={{ height: '' }}>
                                <img
                                    //   src={RiversideSuite}
                                    alt="Spacious suite aboard Riverside Luxury Cruises"
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

            {/* DESTINATIONS & SERVICE — SIDE BY SIDE */}
            <section className="azs-dining-section" style={{ background: "var(--bg-white)" }}>
                <div className="azs-container">
                    <div className="azs-section-header">
                        <h2 className="azs-section-title">What's Included Onboard</h2>

                        <div className="azs-section-accent"></div>

                        <p className="azs-section-subtitle">
                            Riverside Luxury Cruises includes thoughtful onboard amenities that help
                            guests stay connected while enjoying comfort, wellness, and relaxation
                            throughout their journey.
                        </p>
                    </div>

                    <div className="azs-dining-grid">
                        {/* Complimentary Wi-Fi */}
                        <div className="azs-dining-card azs-seabourn-dining">
                            <div className="azs-dining-content">
                                <div className="azs-dining-header">
                                    <div className="azs-dining-icon-circle">
                                        <Wifi size={24} className="azs-dining-icon" />
                                    </div>

                                    <h3 className="azs-dining-title">Complimentary Wi-Fi</h3>
                                </div>

                                <p className="azs-dining-intro">
                                    Guests receive complimentary onboard Wi-Fi, making it easy to stay
                                    connected throughout their river cruise.
                                </p>

                                <div className="azs-dining-body">
                                    <h4 className="azs-dining-group-title">
                                        Wi-Fi allows guests to:
                                    </h4>

                                    <ul className="azs-dining-list">
                                        {[
                                            "Stay connected with family",
                                            "Share travel photos",
                                            "Check email",
                                            "Browse the internet",
                                            "Plan independent sightseeing",
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

                                    <div className="azs-dining-highlight-box azs-seabourn-highlight">
                                        <p className="azs-dining-highlight-text">
                                            Internet quality may vary depending on the ship's location along
                                            the river and local network availability.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Wellness & Fitness */}
                        <div className="azs-dining-card azs-azamara-dining">
                            <div className="azs-dining-content">
                                <div className="azs-dining-header">
                                    <div className="azs-dining-icon-circle">
                                        <Dumbbell size={24} className="azs-dining-icon" />
                                    </div>

                                    <h3 className="azs-dining-title">Wellness & Fitness</h3>
                                </div>

                                <p className="azs-dining-intro">
                                    Riverside ships offer inviting wellness spaces where guests can stay
                                    active or simply relax between scenic destinations.
                                </p>

                                <div className="azs-dining-body">
                                    <h4 className="azs-dining-group-title">
                                        Guests can enjoy:
                                    </h4>

                                    <ul className="azs-dining-list">
                                        {[
                                            "Fitness equipment",
                                            "Wellness facilities",
                                            "Walking track or open deck (where available)",
                                            "Relaxation spaces",
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

                                    <div className="azs-dining-highlight-box azs-azamara-highlight">
                                        <p className="azs-dining-highlight-text">
                                            Spa treatments and massage services may be available on select
                                            ships for an additional fee.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BEVERAGES INCLUDED ───────────────────────────────────────── */}
            <section
                className="rlc-inc-section"
                id="beverages-included"
            >
                <div className="rlc-inc-container">
                    <div className="rlc-inc-grid-split">
                        <div className="rlc-inc-left">
                            <h2 className="rlc-inc-title">Beverages Included</h2>
                            <div className="rlc-inc-accent" style={{ marginLeft: '15px' }}></div>

                            <p className="rlc-inc-intro" style={{margin: '0px', marginBottom: '30px'}}>
                                Most Riverside cruises include:
                            </p>

                            <ul className="rlc-inc-list">
                                {[
                                    "Wine with lunch and dinner",
                                    "Beer with meals",
                                    "Soft drinks",
                                    "Coffee",
                                    "Tea",
                                    "Water",
                                ].map((item, i) => (
                                    <li key={i} className="rlc-inc-item">
                                        <span className="rlc-inc-icon-wrap">
                                            <Check size={16} strokeWidth={3} className="rlc-inc-check-icon" />
                                        </span>
                                        <span className="rlc-inc-item-text">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="rlc-inc-outro-box">
                                <p className="rlc-inc-outro-text">
                                    Premium spirits, specialty cocktails, and select premium
                                    wines may be available for an additional charge depending
                                    on the sailing.
                                </p>
                            </div>
                        </div>

                        <div className="rlc-inc-right">
                            <div className="rlc-inc-image-collage">
                                <div className="rlc-inc-img-main-wrap">
                                    <img
                                        // src={HeroImage1}
                                        alt="Riverside Ship"
                                        className="rlc-inc-collage-img"
                                    />
                                </div>
                                <div className="rlc-inc-img-sub-grid">
                                    <div className="rlc-inc-img-sub-wrap">
                                        <img
                                            // src={HeroImage2}
                                            alt="Wine served aboard Riverside Luxury Cruises"
                                            className="rlc-inc-collage-img"
                                        />
                                    </div>
                                    <div className="rlc-inc-img-sub-wrap">
                                        <img
                                            // src={HeroImage3}
                                            alt="Riverside onboard lounge"
                                            className="rlc-inc-collage-img"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* ── SHORE EXCURSIONS ─────────────────────────────────────────── */}
            <section className="luc-why-section" id="shore-excursions">
                <div className="luc-why-container">
                    <div className="luc-why-images">
                        <div className="luc-why-img-main-wrap" style={{ color: "#fff" }}>
                            <img
                                // src={RiversideDanube}
                                alt="Guided shore excursion on a Riverside Luxury Cruise"
                                className="luc-why-img-main"
                            />
                            <div className="luc-why-img-overlay"></div>
                        </div>

                        <div className="luc-why-img-accent-wrap" style={{ color: "#fff" }}>
                            <img
                                // src={RiversideRhine}
                                alt="Historic castle visited on a Riverside shore excursion"
                                className="luc-why-img-accent"
                            />

                            <div className="luc-why-img-badge">
                                <span className="luc-why-badge-num">1+</span>
                                <span className="luc-why-badge-text">Guided Excursion Per Port</span>
                            </div>
                        </div>
                    </div>

                    <div className="luc-why-content">
                        <h2 className="luc-why-title">Shore Excursions</h2>

                        <div className="aac-accent-line aac-accent-white"></div>

                        <p className="luc-why-intro">
                            Most itineraries include at least one guided excursion in many
                            ports, giving guests an easy way to explore each destination
                            without added planning.
                        </p>

                        <div className="luc-why-features">
                            {[
                                {
                                    num: "01",
                                    title: "Historic Walking Tours",
                                    desc: "Explore old towns and city centers with a knowledgeable local guide.",
                                },
                                {
                                    num: "02",
                                    title: "Castle & Cathedral Visits",
                                    desc: "Step inside some of Europe's most iconic landmarks and architecture.",
                                },
                                {
                                    num: "03",
                                    title: "Wine Tastings",
                                    desc: "Sample regional wines paired with insight into local winemaking traditions.",
                                },
                                {
                                    num: "04",
                                    title: "Museum & Local Market Visits",
                                    desc: "Discover regional art, history, and culture in every port.",
                                },
                                {
                                    num: "05",
                                    title: "Scenic Coach Tours",
                                    desc: "Take in the countryside and picturesque villages beyond the riverbank.",
                                },
                            ]
                                .slice(0, readMoreDestination ? 5 : 2)
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

                        <p className="luc-why-intro" style={{ marginTop: "16px" }}>
                            Some premium or small-group experiences may require an
                            additional fee.
                        </p>

                        <div className="rlc-page-cta-container rlc-align-left" style={{ marginTop: "20px" }}>
                            <Link to="/contact" className="rlc-page-cta-btn" style={{ textDecoration: "none" }}>
                                Start Planning Your Riverside Cruise
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DESTINATIONS YOU'LL EXPLORE ──────────────────────────────── */}
            <section
                className="rlc-dest-section"
                id="destinations-you-will-explore"
            >
                <div className="rlc-dest-container">
                    <h2 className="rlc-dest-title">Destinations You'll Explore</h2>
                    <div className="rlc-dest-accent"></div>

                    <p className="rlc-dest-intro">
                        Depending on your itinerary, Riverside sails through some of Europe's most beautiful regions, including:
                    </p>

                    <div className="rlc-dest-grid">
                        <div className="rlc-dest-card rlc-dest-rivers">
                            <h3 className="rlc-dest-card-title">Rivers &amp; Regions</h3>
                            <ul className="rlc-dest-list">
                                {[
                                    "Danube River",
                                    "Rhine River",
                                    "Rhône River",
                                    "Main River",
                                    "Moselle River",
                                ].map((river, i) => (
                                    <li key={i} className="rlc-dest-item">
                                        <span className="rlc-dest-icon-wrap">
                                            <Ship size={16} className="rlc-dest-ship-icon" />
                                        </span>
                                        <span className="rlc-dest-text">{river}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="rlc-dest-card rlc-dest-cities">
                            <h3 className="rlc-dest-card-title">Popular Destinations</h3>
                            <p className="rlc-dest-subtitle">Popular destinations include:</p>
                            <div className="rlc-dest-cities-grid">
                                {[
                                    "Budapest",
                                    "Vienna",
                                    "Amsterdam",
                                    "Cologne",
                                    "Strasbourg",
                                    "Basel",
                                    "Lyon",
                                    "Avignon",
                                    "Passau",
                                ].map((city, i) => (
                                    <div key={i} className="rlc-dest-city-tag">
                                        <MapPin size={14} className="rlc-dest-pin-icon" />
                                        <span>{city}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="rlc-page-cta-container" style={{ marginTop: "40px" }}>
                        <Link to="/contact" className="rlc-page-cta-btn" style={{ textDecoration: "none" }}>
                            Start Planning Your Riverside Cruise
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>


            {/* ── PERSONALIZED SERVICE ────────────────────────────────────── */}
            <section
                className="ugt-components-section"
                id="personalized-service"
                style={{ backgroundColor: "var(--bg-soft)" }}
            >
                <div className="ugt-components-container">
                    <div className="ugt-components-header">
                        <h2 className="ugt-components-title">Personalized Service</h2>
                        <div className="adg-c-accent-line"></div>
                    </div>

                    <div className="ugt-components-list">
                        <div className="ugt-component-row">
                            <div className="ugt-component-image-wrapper">
                                <div className="ugt-component-image-container">
                                    <img
                                        // src={RiversideCrew}
                                        alt="Attentive crew service aboard Riverside Luxury Cruises"
                                        className="ugt-component-image"
                                    />
                                </div>
                            </div>

                            <div className="ugt-component-content">
                                <p className="ugt-component-text">
                                    One of <strong>Riverside's</strong> greatest strengths is
                                    its exceptional hospitality. The crew's attention to detail
                                    creates an intimate boutique hotel atmosphere throughout
                                    your voyage.
                                </p>

                                <div className="ugt-questions-box">
                                    <span className="ugt-questions-title">
                                        Included throughout your voyage:
                                    </span>

                                    <ul className="ugt-questions-list">
                                        {[
                                            "Daily housekeeping",
                                            "Concierge assistance",
                                            "Friendly onboard staff",
                                            "Personalized guest service",
                                            "Luggage assistance",
                                            "Port information",
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
                                    The intimate size of the ships creates a welcoming
                                    environment where guests feel genuinely cared for.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ONBOARD AMENITIES & EVENING ENTERTAINMENT ───────────────── */}
            <section className="azs-entertainment-section" id="onboard-amenities-entertainment">
                <div className="azs-container">
                    <div className="azs-section-header">
                        <h2 className="azs-section-title">Onboard Amenities &amp; Evening Entertainment</h2>

                        <div className="azs-section-accent"></div>

                        <p className="azs-section-subtitle">
                            Entertainment aboard Riverside is elegant and understated,
                            focused on creating a relaxed and sophisticated atmosphere.
                        </p>
                    </div>

                    <div className="azs-entertainment-grid">
                        <div className="azs-entertainment-card azs-azamara-ent">
                            <div className="azs-ent-header">
                                <div className="azs-ent-icon-circle">
                                    <Home size={24} className="azs-ent-icon" />
                                </div>

                                <h3 className="azs-ent-title">Onboard Amenities</h3>
                            </div>

                            <p className="azs-ent-intro">
                                Guests also enjoy access to relaxing spaces designed for
                                unwinding while sailing through Europe's most picturesque
                                regions.
                            </p>

                            <div className="azs-ent-body">
                                <h4 className="azs-ent-group-title">Available Onboard:</h4>

                                <ul className="azs-ent-list">
                                    {[
                                        "Observation lounge",
                                        "Sun deck",
                                        "Fitness center",
                                        "Comfortable lounges",
                                        "Library or reading areas",
                                        "Outdoor seating and scenic viewing areas",
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
                                        These spaces are designed for relaxation, not nonstop
                                        activity.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="azs-entertainment-card azs-seabourn-ent">
                            <div className="azs-ent-header">
                                <div className="azs-ent-icon-circle">
                                    <Music size={24} className="azs-ent-icon" />
                                </div>

                                <h3 className="azs-ent-title">Evening Entertainment</h3>
                            </div>

                            <p className="azs-ent-intro">
                                Rather than large productions, the focus is on creating a
                                relaxed and sophisticated onboard evening atmosphere.
                            </p>

                            <div className="azs-ent-body">
                                <h4 className="azs-ent-group-title">Typical Offerings:</h4>

                                <ul className="azs-ent-list">
                                    {[
                                        "Live piano music",
                                        "Local musicians",
                                        "Cultural performances",
                                        "Destination presentations",
                                        "Wine tastings",
                                        "Cocktail hours",
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

                                <div className="azs-ent-highlight-box azs-seabourn-ent-highlight">
                                    <p className="azs-ent-highlight-text">
                                        Evenings are designed to feel refined and understated
                                        rather than loud or crowded.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── GOURMET DINING THROUGHOUT YOUR CRUISE ───────────────────── */}
            <section
                className="rlc-dine-section"
                id="gourmet-dining"
            >
                <div className="rlc-dine-container">
                    <h2 className="rlc-dine-title">Gourmet Dining Throughout Your Cruise</h2>
                    <div className="rlc-dine-accent"></div>

                    <p className="rlc-dine-lead">
                        Dining is one of Riverside's signature experiences.
                    </p>

                    <p className="rlc-dine-sub">
                        Included meals typically feature:
                    </p>

                    <div className="rlc-dine-grid">
                        <div className="rlc-dine-card">
                            <div className="rlc-dine-card-img-wrap">
                                <img
                                    // src={RiversideLounge}
                                    alt="Breakfast aboard Riverside Luxury Cruises"
                                    className="rlc-dine-card-img"
                                />
                            </div>
                            <div className="rlc-dine-card-content">
                                <h3 className="rlc-dine-card-title">Breakfast</h3>
                                <ul className="rlc-dine-list">
                                    {[
                                        "Fresh pastries",
                                        "Seasonal fruit",
                                        "Eggs made to order",
                                        "Yogurt",
                                        "European cheeses",
                                        "Specialty coffees",
                                        "Juices",
                                    ].map((item, i) => (
                                        <li key={i} className="rlc-dine-item">
                                            <span className="rlc-dine-bullet"></span>
                                            <span className="rlc-dine-text">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="rlc-dine-card">
                            <div className="rlc-dine-card-img-wrap">
                                <img
                                    // src={RiversideEvening}
                                    alt="Lunch aboard Riverside Luxury Cruises"
                                    className="rlc-dine-card-img"
                                />
                            </div>
                            <div className="rlc-dine-card-content">
                                <h3 className="rlc-dine-card-title">Lunch</h3>
                                <ul className="rlc-dine-list">
                                    {[
                                        "Regional specialties",
                                        "Fresh salads",
                                        "Soups",
                                        "Seafood",
                                        "Meat selections",
                                        "Vegetarian options",
                                        "Desserts",
                                    ].map((item, i) => (
                                        <li key={i} className="rlc-dine-item">
                                            <span className="rlc-dine-bullet"></span>
                                            <span className="rlc-dine-text">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="rlc-dine-card">
                            <div className="rlc-dine-card-img-wrap">
                                <img
                                    // src={RiversideDining}
                                    alt="Dinner aboard Riverside Luxury Cruises"
                                    className="rlc-dine-card-img"
                                />
                            </div>
                            <div className="rlc-dine-card-content">
                                <h3 className="rlc-dine-card-title">Dinner</h3>
                                <p className="rlc-dine-card-subtitle">Every evening features:</p>
                                <ul className="rlc-dine-list">
                                    {[
                                        "Multi-course gourmet menus",
                                        "Regional European cuisine",
                                        "Chef specialties",
                                        "Premium ingredients",
                                        "Fresh desserts",
                                        "Local culinary traditions",
                                    ].map((item, i) => (
                                        <li key={i} className="rlc-dine-item">
                                            <span className="rlc-dine-bullet"></span>
                                            <span className="rlc-dine-text">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="rlc-dine-outro-box">
                        <p className="rlc-dine-outro-text">
                            Menus change regularly to reflect the destinations visited during your cruise.
                        </p>
                    </div>
                </div>
            </section>



            {/* ── WHAT'S USUALLY NOT INCLUDED ──────────────────────────────── */}
            <section className="Asc-section" id="whats-not-included" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="Asc-container">
                    <div className="Asc-section-header">
                        <h2 className="Asc-h2">What's Usually Not Included?</h2>
                        <div className="Asc-accent-line"></div>

                        <p className="Asc-section-intro">
                            Although Riverside includes many amenities, some items are
                            generally additional. Always review your specific itinerary and
                            booking confirmation for exact inclusions.
                        </p>
                    </div>

                    <div className="Asc-who-grid">
                        <div className="Asc-who-card Asc-who-yes">
                            <h3 className="Asc-who-title">Generally Included</h3>

                            <ul className="Asc-who-list">
                                {[
                                    "Suite accommodations",
                                    "Gourmet meals",
                                    "Wine, beer, and soft drinks with meals",
                                    "Complimentary Wi-Fi",
                                    "Selected shore excursions",
                                    "Port charges and taxes",
                                ].map((item, i) => (
                                    <li key={i}>
                                        <Check size={16} className="Asc-icon-green" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="Asc-who-card Asc-who-no">
                            <h3 className="Asc-who-title">Usually an Additional Cost</h3>

                            <ul className="Asc-who-list">
                                {[
                                    "Premium alcoholic beverages",
                                    "Specialty wines and spirits",
                                    "Spa treatments",
                                    "Boutique purchases and personal shopping",
                                    "Optional premium excursions",
                                    "Travel insurance",
                                    "International airfare (unless part of a package)",
                                    "Pre- and post-cruise hotels (unless included in a package)",
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

            {/* ── IS RIVERSIDE ALL-INCLUSIVE? ──────────────────────────────── */}
            <section
                className="rlc-lc-worth-section"
                id="is-riverside-all-inclusive"
            >
                <div className="rlc-lc-worth-container">
                    <div className="rlc-lc-worth-grid">
                        <div className="rlc-lc-worth-content">
                            <h2 className="rlc-lc-worth-title">Is Riverside All-Inclusive?</h2>

                            <div className="rlc-lc-worth-accent"></div>

                            <p className="rlc-lc-worth-lead">
                                Riverside is often described as a luxury river cruise with
                                extensive inclusions rather than a fully all-inclusive
                                product. Most travelers find that the cruise fare already
                                covers the majority of their vacation expenses, with only a
                                few optional extras depending on personal preferences.
                            </p>

                            <h3 className="rlc-lc-worth-emphasis-title">Who gets the most value?</h3>

                            <div className="rlc-lc-worth-emphasis-grid">
                                {[
                                    "Spacious luxury suites",
                                    "Boutique service",
                                    "Gourmet cuisine",
                                    "European culture",
                                    "Scenic cruising",
                                    "Relaxed luxury",
                                ].map((item, idx) => (
                                    <div key={idx} className="rlc-lc-worth-emphasis-item">
                                        <span className="rlc-lc-worth-emphasis-icon">
                                            <Check size={16} strokeWidth={3} />
                                        </span>
                                        <span className="rlc-lc-worth-emphasis-label">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="rlc-lc-worth-conclusion-box">
                                <p className="rlc-lc-worth-conclusion-text">
                                    The more you value comfort, service, and personalized
                                    hospitality, the greater the overall value Riverside
                                    provides.
                                </p>
                            </div>

                            <div className="rlc-page-cta-container rlc-align-left" style={{ marginTop: "24px" }}>
                                <Link to="/contact" className="rlc-page-cta-btn" style={{ textDecoration: "none" }}>
                                    Start Planning Your Riverside Cruise
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>

                        <div className="rlc-lc-worth-media">
                            <div className="rlc-lc-worth-media-wrapper">
                                <img
                                    //   src={RiversideEvening}
                                    alt="Elegant evening lounge aboard Riverside Luxury Cruises"
                                    className="rlc-lc-worth-media-img"
                                />
                                <div className="rlc-lc-worth-media-overlay"></div>

                                <div className="rlc-lc-worth-media-badge">
                                    <span>Extensive Inclusions • Boutique Luxury</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHY BOOK THROUGH A LUXURY TRAVEL ADVISOR ────────────────── */}
            <section
                className="Avr-planning-section"
                id="Asc-luxury-travel-advisor"
                style={{ backgroundColor: "var(--bg-soft)" }}
            >
                <div className="Asc-container">
                    <div className="Avr-planning-heading">
                        <span className="Avr-planning-eyebrow">
                            Personalized Trip Planning
                        </span>

                        <h2 className="Avr-planning-title">
                            Why Book Through a <br /> Luxury Travel Advisor?
                        </h2>

                        <div className="Avr-planning-divider"></div>
                    </div>

                    <div className="Avr-planning-grid">
                        <div className="Avr-planning-left">
                            <div className="Avr-planning-left-deco">&ldquo;</div>

                            <h3 className="Avr-planning-left-title">
                                Know Exactly What's Included Before You Book
                            </h3>

                            <p className="Avr-planning-left-body">
                                A luxury travel advisor can help you understand exactly
                                what's included before you book, compare itineraries, explain
                                promotions, and recommend the best suite for your travel
                                style.
                            </p>

                            <div className="Avr-planning-alert">
                                <ShieldCheck size={18} className="Avr-planning-alert-icon" />

                                <p className="Avr-planning-alert-text">
                                    Professional guidance helps ensure there are no surprises
                                    before your vacation begins.
                                </p>
                            </div>
                        </div>

                        <div className="Avr-planning-right">
                            <p className="Avr-planning-right-intro">
                                A knowledgeable travel advisor can assist with:
                            </p>

                            <div className="Avr-planning-benefits-grid">
                                {[
                                    { icon: <Compass size={18} />, label: "Compare itineraries" },
                                    { icon: <Star size={18} />, label: "Explain promotions" },
                                    { icon: <Home size={18} />, label: "Recommend the best suite" },
                                    { icon: <Plane size={18} />, label: "Coordinate airfare" },
                                    { icon: <MapPinned size={18} />, label: "Arrange hotels & transfers" },
                                    { icon: <Sparkles size={18} />, label: "Recommend excursions" },
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
                                We also provide ongoing travel support, so guidance is
                                available before, during, and after your trip.
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
                            Everything travelers need to know about what's included on
                            Riverside Luxury Cruises before booking their next European
                            river cruise.
                        </p>
                    </div>
                    <FAQ />
                </div>
            </section>

            {/* ── CTA / FINAL VERDICT ─────────────────────────────────────── */}
            <section className="Asc-help-section">
                <div className="Asc-help-bg-wrap">
                    <img
                        // src={RiversideShip}
                        alt="Riverside Luxury Cruises ship sailing a European river"
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
                                    What Is Included on <br /> Riverside Luxury Cruises?
                                </h2>
                                <div className="Asc-help-accent"></div>
                            </div>

                            <div className="Asc-help-grid">
                                <div className="Asc-help-info">
                                    <p className="Asc-help-intro">
                                        Riverside Luxury Cruises includes many of the amenities
                                        travelers expect from a premium European river
                                        cruise—spacious accommodations, gourmet dining,
                                        beverages with meals, Wi-Fi, personalized service, and
                                        guided sightseeing. <br /><br />

                                        Rather than overwhelming guests with endless options,
                                        Riverside focuses on delivering exceptional quality in
                                        every aspect of the journey.
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
                                                The result is a refined, boutique luxury experience
                                                where comfort, hospitality, and destination
                                                immersion take center stage.
                                            </p>
                                            <br />
                                            <p className="Asc-help-intro">
                                                At Trips &amp; Ships Luxury Travel, we'll help you
                                                understand what's included, compare itineraries,
                                                choose the perfect suite, and plan a seamless
                                                Riverside Luxury Cruises vacation.
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
                                            "Explain exactly what's included",
                                            "Compare itineraries",
                                            "Recommend the right ship",
                                            "Select the best suite",
                                            "Coordinate flights",
                                            "Arrange hotels",
                                            "Organize transfers",
                                            "Recommend shore excursions",
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

export default WhatIsIncludedOnRiverside;