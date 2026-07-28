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
import AboutImage from "../../assets/AboutAngela3.jpeg";

/* ── Placeholder image imports ────────────────────────────────────
   Replace these with real Riverside Mozart photography once
   available. Paths assume a new /assets/RiversideMozartReview folder. */
// import HeroImage1 from "../../assets/RiversideMozartReview/riverside-mozart-danube-sunset.jpg";
// import HeroImage2 from "../../assets/RiversideMozartReview/riverside-mozart-suite-balcony.jpg";
// import HeroImage3 from "../../assets/RiversideMozartReview/riverside-mozart-vienna-view.jpg";
// import RiversideMozartSuite from "../../assets/RiversideMozartReview/riverside-mozart-suite-living-area.jpg";
// import RiversideMozartLounge from "../../assets/RiversideMozartReview/riverside-mozart-observation-lounge.jpg";
// import RiversideMozartEvening from "../../assets/RiversideMozartReview/riverside-mozart-evening-lounge.jpg";
// import RiversideMozartDining from "../../assets/RiversideMozartReview/riverside-mozart-gourmet-dining.jpg";
// import RiversideMozartDanube from "../../assets/RiversideMozartReview/riverside-mozart-danube-budapest.jpg";
// import RiversideMozartPassau from "../../assets/RiversideMozartReview/riverside-mozart-passau.jpg";
// import RiversideMozartCrew from "../../assets/RiversideMozartReview/riverside-mozart-crew-service.jpg";
// import RiversideMozartShip from "../../assets/RiversideMozartReview/riverside-mozart-ship-exterior.jpg";

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
            "@id": "https://tripsandships.com/riverside-mozart-review/#webpage",
            name: "Riverside Mozart Review | Is Europe's Largest Luxury River Ship Worth It?",
            url: "https://tripsandships.com/riverside-mozart-review",
            description:
                "Read our Riverside Mozart review covering suites, dining, service, itineraries, onboard experience, pricing, and who should sail this luxury Danube river ship before you book.",
        },
        {
            "@type": "Article",
            "@id": "https://tripsandships.com/riverside-mozart-review/#article",
            headline: "Riverside Mozart Review | Luxury Danube River Cruise Guide",
            description:
                "A complete guide to Riverside Mozart, covering spacious all-suite accommodations, gourmet dining, personalized service, Danube itineraries, shore excursions, wellness, and more.",
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
            "@id": "https://tripsandships.com/riverside-mozart-review/#review",
            itemReviewed: {
                "@type": "TouristTrip",
                name: "Riverside Mozart",
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
            "@id": "https://tripsandships.com/riverside-mozart-review/#breadcrumb",
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
                    name: "Riverside Mozart Review",
                    item: "https://tripsandships.com/riverside-mozart-review",
                },
            ],
        },
        {
            "@type": "TouristTrip",
            "@id": "https://tripsandships.com/riverside-mozart-review/#trip",
            name: "Riverside Mozart Danube River Cruise Experience",
            description:
                "Boutique luxury river cruising aboard Riverside Mozart, one of Europe's largest luxury river ships, featuring spacious all-suite accommodations, gourmet dining, personalized service, and immersive Danube River itineraries.",
            provider: {
                "@type": "Organization",
                name: "Riverside Luxury Cruises",
            },
        },
        {
            "@type": "Service",
            "@id": "https://tripsandships.com/riverside-mozart-review/#service",
            serviceType: "Luxury River Cruise Vacation Planning",
            provider: {
                "@type": "TravelAgency",
                name: "Trips & Ships Luxury Travel",
            },
            areaServed: "Worldwide",
            description:
                "Personalized planning for Riverside Mozart sailings, including itinerary selection, suite recommendations, and exclusive promotions.",
        },
        {
            "@type": "ItemList",
            "@id": "https://tripsandships.com/riverside-mozart-review/#itemlist",
            name: "Riverside Mozart Review — What This Guide Covers",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Overview of Riverside Mozart" },
                { "@type": "ListItem", position: 2, name: "Suites & Accommodations" },
                { "@type": "ListItem", position: 3, name: "Dining Experience" },
                { "@type": "ListItem", position: 4, name: "Service & Hospitality" },
                { "@type": "ListItem", position: 5, name: "Danube Itineraries" },
                { "@type": "ListItem", position: 6, name: "Life Onboard" },
                { "@type": "ListItem", position: 7, name: "Shore Excursions" },
                { "@type": "ListItem", position: 8, name: "Public Spaces" },
                { "@type": "ListItem", position: 9, name: "Fitness & Wellness" },
                { "@type": "ListItem", position: 10, name: "Who Should Sail Riverside Mozart?" },
                { "@type": "ListItem", position: 11, name: "Is Riverside Mozart Worth It?" },
                { "@type": "ListItem", position: 12, name: "Why Book Through a Luxury Travel Advisor?" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://tripsandships.com/riverside-mozart-review/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Is Riverside Mozart an all-suite ship?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Riverside Mozart focuses on spacious suite accommodations designed for luxury and comfort.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which river does Riverside Mozart sail?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The ship primarily sails the Danube River through Central Europe.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What destinations does Riverside Mozart visit?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Common ports include Budapest, Vienna, Bratislava, Linz, Melk, and Passau.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Riverside Mozart all-inclusive?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Most cruises include luxury accommodations, gourmet dining, beverages with meals, Wi-Fi, and selected excursions. Inclusions may vary by itinerary.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Riverside Mozart suitable for first-time river cruisers?",
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
                    name: "Does Riverside Mozart have a spa?",
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
                    name: "Who is Riverside Mozart best suited for?",
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
                    name: "How large are the suites on Riverside Mozart?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Riverside Mozart features exceptionally spacious suites. They range from the Harmony Suite at 215 square feet up to the magnificent Owner's Suite which spans an impressive 883 square feet, making them some of the largest suites on any European river cruise ship.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Riverside Mozart have butler service?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, every suite aboard the Riverside Mozart includes butler service. Butlers assist with tasks ranging from unpacking bags and shoe shining to making dining reservations and arranging customized excursions.",
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
            q: "Is Riverside Mozart an all-suite ship?",
            a: "Yes. Riverside Mozart focuses on spacious suite accommodations designed for luxury and comfort.",
        },
        {
            q: "Which river does Riverside Mozart sail?",
            a: "The ship primarily sails the Danube River through Central Europe.",
        },
        {
            q: "What destinations does Riverside Mozart visit?",
            a: "Common ports include Budapest, Vienna, Bratislava, Linz, Melk, and Passau.",
        },
        {
            q: "Is Riverside Mozart all-inclusive?",
            a: "Most cruises include luxury accommodations, gourmet dining, beverages with meals, Wi-Fi, and selected excursions. Inclusions may vary by itinerary.",
        },
        {
            q: "Is Riverside Mozart suitable for first-time river cruisers?",
            a: "Absolutely. Its relaxed atmosphere and exceptional service make it an excellent introduction to luxury river cruising.",
        },
        {
            q: "What is the dress code onboard?",
            a: "Smart casual during the day and elegant casual for dinner. Formal nights are generally not required.",
        },
        {
            q: "Does Riverside Mozart have a spa?",
            a: "The ship offers wellness facilities and spa treatments designed for relaxation during your voyage.",
        },
        {
            q: "Is Wi-Fi included?",
            a: "Yes, complimentary Wi-Fi is typically included for guests.",
        },
        {
            q: "Who is Riverside Mozart best suited for?",
            a: "The ship is ideal for couples, luxury travelers, food lovers, and anyone seeking a peaceful, refined European river cruise.",
        },
        {
            q: "Should I book through a travel advisor?",
            a: "Yes. A luxury travel advisor can help you choose the best itinerary, suite, and available offers while coordinating all aspects of your vacation.",
        },
        {
            q: "How large are the suites on Riverside Mozart?",
            a: "Riverside Mozart features exceptionally spacious suites. They range from the Harmony Suite at 215 square feet up to the magnificent Owner's Suite which spans an impressive 883 square feet, making them some of the largest suites on any European river cruise ship.",
        },
        {
            q: "Does Riverside Mozart have butler service?",
            a: "Yes, every suite aboard the Riverside Mozart includes butler service. Butlers assist with tasks ranging from unpacking bags and shoe shining to making dining reservations and arranging customized excursions.",
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
const RiversideMozartReview = () => {
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
                    Riverside Mozart Review | Is Europe's Largest Luxury River Ship
                    Worth It?
                </title>
                <meta
                    name="title"
                    content="Riverside Mozart Review | Luxury Danube River Cruise Guide"
                />
                <meta
                    name="description"
                    content="Read our Riverside Mozart review covering suites, dining, service, itineraries, onboard experience, pricing, and who should sail this luxury Danube river ship before you book."
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
                    <h1>Riverside Mozart Review</h1>

                    <p>
                        If you're looking for one of the most spacious and luxurious
                        river cruise experiences in Europe, Riverside Mozart deserves
                        serious consideration. As the flagship of the Riverside Luxury
                        Cruises fleet, it offers elegant suites, personalized service,
                        exceptional dining, and unforgettable voyages along the Danube
                        River.
                    </p>

                    {readMore && (
                        <>
                            <p>
                                Unlike many traditional river ships that maximize passenger
                                capacity, Riverside Mozart emphasizes space, comfort, and a
                                boutique luxury atmosphere. From oversized suites to
                                inviting public lounges, every detail is designed to create
                                a refined and relaxing experience.
                            </p>

                            <p>
                                This review explores everything you need to know before
                                booking, including accommodations, dining, service, onboard
                                amenities, itineraries, and who will enjoy Riverside Mozart
                                the most.
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

            {/* ── OVERVIEW OF RIVERSIDE MOZART ─────────────────────────────── */}
            <section
                className="ugt-components-section"
                id="what-is-riverside-mozart"
                style={{ backgroundColor: "var(--bg-white)" }}
            >
                <div className="ugt-components-container">
                    <div className="ugt-components-header">
                        <h2 className="ugt-components-title">
                            Overview of Riverside Mozart
                        </h2>
                        <div className="adg-c-accent-line"></div>
                    </div>

                    <div className="ugt-components-list">
                        <div className="ugt-component-row">
                            <div className="ugt-component-image-wrapper">
                                <div className="ugt-component-image-container">
                                    <img
                                        // src={RiversideMozartLounge}
                                        alt="Riverside Mozart sailing the Danube River"
                                        className="ugt-component-image"
                                    />
                                </div>
                            </div>

                            <div className="ugt-component-content">
                                <p className="ugt-component-text">
                                    <strong>Riverside Mozart</strong> is one of the largest
                                    luxury river ships sailing the Danube. Its unique size
                                    allows for larger suites, multiple dining venues, generous
                                    public areas, and an atmosphere that feels more like an
                                    elegant boutique hotel than a traditional river cruise.
                                </p>

                                <div className="ugt-questions-box">
                                    <span className="ugt-questions-title">
                                        Ship highlights include:
                                    </span>

                                    <ul className="ugt-questions-list">
                                        {[
                                            "Spacious all-suite accommodations",
                                            "Elegant contemporary interiors",
                                            "Multiple dining venues",
                                            "Observation lounge with panoramic views",
                                            "Outdoor sun deck",
                                            "Wellness and fitness facilities",
                                            "Boutique atmosphere",
                                            "Personalized guest service",
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
                            Unlike large ocean ships, Riverside Mozart emphasizes a
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
                                    "Abbey visits",
                                    "Castle tours",
                                    "Local markets & cultural performances",
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
                            //   src={RiversideMozartDining}
                            alt="Gourmet dining aboard Riverside Mozart"
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
                                Dining aboard Riverside Mozart celebrates the regions you visit.
                            </p>
                            
                            <h3 className="rdd-dining-list-title">Menus feature:</h3>
                            <ul className="rdd-dining-list">
                                {[
                                    "Fresh seasonal ingredients",
                                    "Regional European specialties",
                                    "Multi-course dinners",
                                    "Gourmet breakfasts",
                                    "Elegant lunches",
                                    "Fresh pastries",
                                    "Fine desserts",
                                    "Carefully selected wines",
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
                                    Meals are thoughtfully prepared and presented, creating a dining experience that is both sophisticated and relaxed.
                                </p>
                            </div>
                        </div>

                        {/* Column 2: Dining & Beverage Experience */}
                        <div className="rdd-dining-card">
                            <h2 className="rdd-dining-title">Dining &amp; Beverage Experience</h2>
                            
                            <p className="rdd-dining-lead">
                                Dining is one of the highlights of every Riverside Mozart voyage.
                            </p>
                            
                            <h3 className="rdd-dining-list-title">Guests enjoy:</h3>
                            <ul className="rdd-dining-list">
                                {[
                                    "Open seating",
                                    "Fresh regional cuisine",
                                    "Local wines with meals",
                                    "Elegant desserts",
                                    "Specialty coffees",
                                    "Relaxed service",
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
                                    Menus frequently change to reflect the destinations visited during the cruise.
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
                                        // src={RiversideMozartCrew}
                                        alt="Attentive crew service aboard Riverside Mozart"
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



            {/* ── DANUBE ITINERARIES ──────────────────────────────────────── */}
            <section className="luc-why-section" id="danube-itineraries">
                <div className="luc-why-container">
                    <div className="luc-why-images">
                        <div className="luc-why-img-main-wrap" style={{ color: "#fff" }}>
                            <img
                                // src={RiversideMozartDanube}
                                alt="Riverside Mozart sailing the Danube River past Budapest"
                                className="luc-why-img-main"
                            />
                            <div className="luc-why-img-overlay"></div>
                        </div>

                        <div className="luc-why-img-accent-wrap" style={{ color: "#fff" }}>
                            <img
                                // src={RiversideMozartPassau}
                                alt="Passau Germany along the Danube River"
                                className="luc-why-img-accent"
                            />

                            <div className="luc-why-img-badge">
                                <span className="luc-why-badge-num">6</span>
                                <span className="luc-why-badge-text">Iconic Ports</span>
                            </div>
                        </div>
                    </div>

                    <div className="luc-why-content">
                        <h2 className="luc-why-title">Danube Itineraries</h2>

                        <div className="aac-accent-line aac-accent-white"></div>

                        <p className="luc-why-intro">
                            Riverside Mozart primarily sails along the Danube, visiting
                            many of Europe's most iconic cities and charming riverside
                            villages, combining history, architecture, music, culture, and
                            breathtaking scenery.
                        </p>

                        <div className="luc-why-features">
                            {[
                                {
                                    num: "01",
                                    title: "Budapest, Hungary",
                                    desc: "Admire the illuminated Parliament building and grand riverfront architecture.",
                                },
                                {
                                    num: "02",
                                    title: "Vienna, Austria",
                                    desc: "Explore imperial palaces, classical music heritage, and elegant boulevards.",
                                },
                                {
                                    num: "03",
                                    title: "Bratislava, Slovakia",
                                    desc: "Discover a charming, walkable Old Town along the river.",
                                },
                                {
                                    num: "04",
                                    title: "Melk, Austria",
                                    desc: "Visit the magnificent Melk Abbey overlooking the Danube Valley.",
                                },
                                {
                                    num: "05",
                                    title: "Linz, Austria",
                                    desc: "Experience a blend of historic architecture and modern culture.",
                                },
                                {
                                    num: "06",
                                    title: "Passau, Germany",
                                    desc: "Wander the cobblestone streets where three rivers meet.",
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
                            Riverside Mozart offers beautifully designed spaces for
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
                            One of Riverside Mozart's greatest strengths is its
                            accommodations—many suites are significantly larger than
                            those found on other European river cruise ships, making
                            longer journeys especially comfortable.
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
                                        Many suites are significantly larger than those found
                                        on other European river cruise ships, making longer
                                        journeys especially comfortable.
                                    </p>
                                </div>
                            </div>

                            <div className="adg-c-overview-image-wrap" style={{height: '350px'}}>
                                <img
                                    //   src={RiversideMozartSuite}
                                    alt="Spacious suite aboard Riverside Mozart"
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

            {/* ── WHO SHOULD SAIL RIVERSIDE MOZART ─────────────────────────── */}
            <section className="Asc-section" id="who-should-sail" style={{ backgroundColor: "var(--bg-white)" }}>
                <div className="Asc-container">
                    <div className="Asc-section-header">
                        <h2 className="Asc-h2">Who Should Sail Riverside Mozart?</h2>
                        <div className="Asc-accent-line"></div>

                        <p className="Asc-section-intro">
                            Its spacious accommodations and relaxed atmosphere make
                            Riverside Mozart particularly appealing to guests who
                            prioritize comfort over onboard entertainment.
                        </p>
                    </div>

                    <div className="Asc-who-grid">
                        <div className="Asc-who-card Asc-who-yes">
                            <h3 className="Asc-who-title">Riverside Mozart Is an Excellent Choice For:</h3>

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

            {/* ── IS RIVERSIDE MOZART WORTH IT ─────────────────────────────── */}
            <section
                className="rlc-worth-section"
                id="is-riverside-mozart-worth-it"
            >
                <div className="rlc-worth-container">
                    {/* Header Block */}
                    <div className="rlc-worth-header">
                        <span className="rlc-worth-eyebrow">Expert Verdict</span>
                        <h2 className="rlc-worth-title">Is Riverside Mozart Worth It?</h2>
                        <div className="rlc-worth-accent"></div>
                    </div>

                    {/* Top Intro Layout: Lead paragraph next to the image */}
                    <div className="rlc-worth-intro-grid">
                        <div className="rlc-worth-lead-box">
                            <p className="rlc-worth-lead">
                                For travelers seeking luxury, comfort, and exceptional
                                service on the Danube, Riverside Mozart offers outstanding
                                value. Its spacious suites, refined dining, personalized
                                hospitality, and elegant design create a sophisticated
                                river cruise experience that rivals many of Europe's finest
                                luxury cruise lines.
                            </p>
                        </div>
                        <div className="rlc-worth-media-new">
                            <div className="rlc-worth-media-wrapper-new">
                                <img
                                    //   src={RiversideMozartEvening}
                                    alt="Elegant evening lounge aboard Riverside Mozart"
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
                                    "Beautiful Danube itineraries",
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
                                    "Limited onboard entertainment",
                                    "Smaller fleet means fewer itinerary choices",
                                    "Not designed for families with young children",
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
                                    and beautifully curated itineraries, Riverside Mozart is
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
                            Why Book Through a <br /> Luxury Travel Advisor?
                        </h2>

                        <div className="Avr-planning-divider"></div>
                    </div>

                    <div className="Avr-planning-grid">
                        <div className="Avr-planning-left">
                            <div className="Avr-planning-left-deco">&ldquo;</div>

                            <h3 className="Avr-planning-left-title">
                                Choose the Riverside Mozart Suite That Fits You
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
                            Everything travelers need to know about Riverside Mozart
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
                        // src={RiversideMozartShip}
                        alt="Riverside Mozart sailing the Danube River"
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
                                    Final Verdict: Riverside Mozart
                                </h2>
                                <div className="Asc-help-accent"></div>
                            </div>

                            <div className="Asc-help-grid">
                                <div className="Asc-help-info">
                                    <p className="Asc-help-intro">
                                        Riverside Mozart stands out as one of Europe's premier
                                        luxury river ships, offering spacious suites, attentive
                                        service, exceptional cuisine, and unforgettable Danube
                                        itineraries.
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
                                                For travelers who appreciate boutique luxury over
                                                large-scale entertainment, it delivers an elegant
                                                and highly personalized cruising experience.
                                                Whether you're celebrating a milestone, exploring
                                                Europe for the first time, or returning to
                                                favorite destinations, Riverside Mozart provides a
                                                refined way to discover the heart of the Danube.
                                            </p>
                                            <br />
                                            <p className="Asc-help-intro">
                                                At Trips &amp; Ships Luxury Travel, we can help you
                                                compare itineraries, select the perfect suite, and
                                                create a seamless Riverside Mozart vacation
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

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RiversideMozartReview;