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
   Replace these with real Riverside Luxury Cruises photography once
   available. Paths assume a new /assets/RiversideLuxuryCruises folder. */
// import HeroImage1 from "../../assets/RiversideLuxuryCruises/riverside-ship-danube-sunset.jpg";
// import HeroImage2 from "../../assets/RiversideLuxuryCruises/riverside-suite-balcony.jpg";
// import HeroImage3 from "../../assets/RiversideLuxuryCruises/riverside-rhine-castle-view.jpg";
// import RiversideSuite from "../../assets/RiversideLuxuryCruises/riverside-suite-living-area.jpg";
// import RiversideLounge from "../../assets/RiversideLuxuryCruises/riverside-lounge-deck.jpg";
// import RiversideEvening from "../../assets/RiversideLuxuryCruises/riverside-evening-lounge.jpg";
// import RiversideDining from "../../assets/RiversideLuxuryCruises/riverside-gourmet-dining.jpg";
// import RiversideDanube from "../../assets/RiversideLuxuryCruises/riverside-danube-vienna.jpg";
// import RiversideRhine from "../../assets/RiversideLuxuryCruises/riverside-rhine-vineyards.jpg";
// import RiversideCrew from "../../assets/RiversideLuxuryCruises/riverside-crew-service.jpg";
// import RiversideShip from "../../assets/RiversideLuxuryCruises/riverside-ship-exterior.jpg";

import { Helmet } from "react-helmet-async";
import "./RiversideLuxuryCruisesReviews.css";

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
            "@id": "https://tripsandships.com/riverside-luxury-cruises-review/#webpage",
            name: "Riverside Luxury Cruises Review (2026) | Is Riverside Worth It?",
            url: "https://tripsandships.com/riverside-luxury-cruises-review",
            description:
                "Read our Riverside Luxury Cruises review covering ships, suites, dining, itineraries, service, inclusions, pricing, and who should sail. Discover if Riverside Luxury Cruises is the right luxury river cruise for your next European vacation.",
        },
        {
            "@type": "Article",
            "@id": "https://tripsandships.com/riverside-luxury-cruises-review/#article",
            headline: "Riverside Luxury Cruises Review | Luxury River Cruise Guide",
            description:
                "A complete guide to Riverside Luxury Cruises, covering spacious all-suite accommodations, gourmet dining, personalized service, European itineraries, shore excursions, wellness, and more.",
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
            "@id": "https://tripsandships.com/riverside-luxury-cruises-review/#review",
            itemReviewed: {
                "@type": "TouristTrip",
                name: "Riverside Luxury Cruises",
            },
            reviewRating: {
                "@type": "Rating",
                ratingValue: "4.9",
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
            "@id":
                "https://tripsandships.com/riverside-luxury-cruises-review/#breadcrumb",
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
            ],
        },
        {
            "@type": "TouristTrip",
            "@id": "https://tripsandships.com/riverside-luxury-cruises-review/#trip",
            name: "Riverside Luxury Cruises European River Cruise Experience",
            description:
                "Boutique luxury river cruising with spacious all-suite accommodations, gourmet dining, personalized service, and immersive European itineraries on the Danube, Rhine, Main, and Moselle Rivers.",
            provider: {
                "@type": "Organization",
                name: "Riverside Luxury Cruises",
            },
        },
        {
            "@type": "Service",
            "@id": "https://tripsandships.com/riverside-luxury-cruises-review/#service",
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
            "@id": "https://tripsandships.com/riverside-luxury-cruises-review/#itemlist",
            name: "Riverside Luxury Cruises Review — What This Guide Covers",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "What Is Riverside Luxury Cruises?" },
                { "@type": "ListItem", position: 2, name: "Elegant All-Suite Accommodations" },
                { "@type": "ListItem", position: 3, name: "Dining Experience" },
                { "@type": "ListItem", position: 4, name: "Personalized Service" },
                { "@type": "ListItem", position: 5, name: "Destinations & Itineraries" },
                { "@type": "ListItem", position: 6, name: "Life Onboard" },
                { "@type": "ListItem", position: 7, name: "Shore Excursions" },
                { "@type": "ListItem", position: 8, name: "Wellness & Relaxation" },
                { "@type": "ListItem", position: 9, name: "Who Should Sail Riverside?" },
                { "@type": "ListItem", position: 10, name: "Riverside vs. Other Luxury River Cruise Lines" },
                { "@type": "ListItem", position: 11, name: "Is Riverside Worth the Price?" },
                { "@type": "ListItem", position: 12, name: "Why Book Through a Luxury Travel Advisor?" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://tripsandships.com/riverside-luxury-cruises-review/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Is Riverside Luxury Cruises truly luxury?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Riverside offers spacious suites, exceptional service, gourmet dining, and elegant ships designed for travelers seeking a premium river cruise experience.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What rivers does Riverside sail?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Riverside primarily operates on the Danube, Rhine, Main, and Moselle Rivers throughout Europe.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are all accommodations suites?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Most accommodations are spacious suites featuring premium furnishings and luxury amenities.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Riverside all-inclusive?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Most sailings include accommodations, gourmet dining, beverages with meals, Wi-Fi, and selected shore excursions. Specific inclusions vary by itinerary.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Riverside good for first-time river cruisers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Absolutely. Its relaxed atmosphere, attentive service, and thoughtfully planned itineraries make it an excellent introduction to luxury river cruising.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is there a dress code?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The atmosphere is elegant but relaxed. Smart casual attire is appropriate throughout most of the voyage.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are children allowed?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "While families are welcome, Riverside is primarily designed for adults seeking a peaceful luxury travel experience.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How far in advance should I book?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Luxury suites on popular European itineraries often sell out 9-18 months in advance, especially during spring, summer, and Christmas Market sailings.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I book through a travel advisor?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. A luxury travel advisor can help you compare itineraries, select the best suite, coordinate flights, and identify exclusive offers.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Riverside Luxury Cruises worth it?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "If you value spacious accommodations, exceptional dining, personalized service, and immersive European travel, Riverside is one of the finest luxury river cruise experiences available.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What dining options are available onboard Riverside, and are dietary restrictions accommodated?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Riverside offers gourmet multi-course dinners, breakfast and lunch buffets, and premium regional wine pairings. Culinary teams are highly trained to accommodate various dietary requirements, including vegetarian, vegan, gluten-free, and allergies, when notified in advance.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Riverside Luxury Cruises provide butler service for all suites?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Riverside offers personalized butler service for all guests, regardless of the suite category booked, to assist with unpacking, dining reservations, custom excursions, and daily needs.",
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
            q: "Is Riverside Luxury Cruises truly luxury?",
            a: "Yes. Riverside offers spacious suites, exceptional service, gourmet dining, and elegant ships designed for travelers seeking a premium river cruise experience.",
        },
        {
            q: "What rivers does Riverside sail?",
            a: "Riverside primarily operates on the Danube, Rhine, Main, and Moselle Rivers throughout Europe.",
        },
        {
            q: "Are all accommodations suites?",
            a: "Most accommodations are spacious suites featuring premium furnishings and luxury amenities.",
        },
        {
            q: "Is Riverside all-inclusive?",
            a: "Most sailings include accommodations, gourmet dining, beverages with meals, Wi-Fi, and selected shore excursions. Specific inclusions vary by itinerary.",
        },
        {
            q: "Is Riverside good for first-time river cruisers?",
            a: "Absolutely. Its relaxed atmosphere, attentive service, and thoughtfully planned itineraries make it an excellent introduction to luxury river cruising.",
        },
        {
            q: "Is there a dress code?",
            a: "The atmosphere is elegant but relaxed. Smart casual attire is appropriate throughout most of the voyage.",
        },
        {
            q: "Are children allowed?",
            a: "While families are welcome, Riverside is primarily designed for adults seeking a peaceful luxury travel experience.",
        },
        {
            q: "How far in advance should I book?",
            a: "Luxury suites on popular European itineraries often sell out 9-18 months in advance, especially during spring, summer, and Christmas Market sailings.",
        },
        {
            q: "Should I book through a travel advisor?",
            a: "Yes. A luxury travel advisor can help you compare itineraries, select the best suite, coordinate flights, and identify exclusive offers.",
        },
        {
            q: "Is Riverside Luxury Cruises worth it?",
            a: "If you value spacious accommodations, exceptional dining, personalized service, and immersive European travel, Riverside is one of the finest luxury river cruise experiences available.",
        },
        {
            q: "What dining options are available onboard Riverside, and are dietary restrictions accommodated?",
            a: "Riverside offers gourmet multi-course dinners, breakfast and lunch buffets, and premium regional wine pairings. Culinary teams are highly trained to accommodate various dietary requirements, including vegetarian, vegan, gluten-free, and allergies, when notified in advance.",
        },
        {
            q: "Does Riverside Luxury Cruises provide butler service for all suites?",
            a: "Yes. Riverside offers personalized butler service for all guests, regardless of the suite category booked, to assist with unpacking, dining reservations, custom excursions, and daily needs.",
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
const RiversideLuxuryCruisesReviews = () => {
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
                    Riverside Luxury Cruises Review (2026) | Is Riverside Worth It?
                </title>
                <meta
                    name="title"
                    content="Riverside Luxury Cruises Review | Luxury River Cruise Guide"
                />
                <meta
                    name="description"
                    content="Read our Riverside Luxury Cruises review covering ships, suites, dining, itineraries, service, inclusions, pricing, and who should sail. Discover if Riverside Luxury Cruises is the right luxury river cruise for your next European vacation."
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
                    <h1>Riverside Luxury Cruises Reviews</h1>

                    <p>
                        Riverside Luxury Cruises has quickly become one of Europe's most
                        talked-about luxury river cruise lines, offering spacious
                        all-suite accommodations, personalized service, and exceptional
                        dining.
                    </p>

                    <p>
                        Unlike larger river cruise brands that emphasize active
                        excursions and busy daily schedules, Riverside focuses on
                        spacious living, fine hospitality, and a boutique hotel
                        atmosphere while sailing Europe's most iconic rivers.
                    </p>

                    {readMore && (
                        <>
                            <p>
                                The experience feels more like staying at an elegant European
                                hotel than taking a traditional cruise—every detail, from the
                                oversized suites to the destination-driven itineraries, is
                                designed around comfort and quality rather than crowded
                                schedules.
                            </p>

                            <p>
                                If you're considering a luxury river cruise, here's everything
                                you should know about Riverside Luxury Cruises.
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
                                4.9 / 5 Overall Rating
                            </span>
                        </div>
                    </div>

                    <div className="Asc-who-grid">
                        <div className="Asc-who-card Asc-who-yes">
                            <h3 className="Asc-who-title">Best For</h3>

                            <ul className="Asc-who-list">
                                {[
                                    "Luxury travelers",
                                    "Couples",
                                    "Food & wine enthusiasts",
                                    "Experienced river cruisers",
                                    "Celebrations and anniversaries",
                                    "Travelers seeking spacious suites",
                                ].map((item, i) => (
                                    <li key={i}>
                                        <Check size={16} className="Asc-icon-green" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="Asc-who-card Asc-who-no">
                            <h3 className="Asc-who-title">May Not Be Ideal For</h3>

                            <ul className="Asc-who-list">
                                {[
                                    "Families with young children",
                                    "Travelers seeking large onboard entertainment",
                                    "Budget-conscious travelers",
                                    "Guests looking for highly active itineraries",
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

            {/* ── WHAT IS RIVERSIDE LUXURY CRUISES ───────────────────────── */}
            <section
                className="ugt-components-section"
                id="what-is-riverside"
                style={{ backgroundColor: "var(--bg-white)" }}
            >
                <div className="ugt-components-container">
                    <div className="ugt-components-header">
                        <h2 className="ugt-components-title">
                            What Is Riverside Luxury Cruises?
                        </h2>
                        <div className="adg-c-accent-line"></div>
                    </div>

                    <div className="ugt-components-list">
                        <div className="ugt-component-row">
                            <div className="ugt-component-image-wrapper">
                                <div className="ugt-component-image-container">
                                    <img
                                        // src={RiversideLounge}
                                        alt="Riverside Luxury Cruises ship sailing a European river"
                                        className="ugt-component-image"
                                    />
                                </div>
                            </div>

                            <div className="ugt-component-content">
                                <p className="ugt-component-text">
                                    <strong>Riverside Luxury Cruises</strong> is a premium
                                    European river cruise line operating elegant ships on some
                                    of Europe's most famous waterways. The experience feels more
                                    like staying at an elegant European hotel than taking a
                                    traditional cruise.
                                </p>

                                <div className="ugt-questions-box">
                                    <span className="ugt-questions-title">
                                        The brand combines:
                                    </span>

                                    <ul className="ugt-questions-list">
                                        {[
                                            "Spacious all-suite accommodations",
                                            "Gourmet dining",
                                            "Personalized service",
                                            "Relaxed luxury",
                                            "Destination immersion",
                                            "Boutique hotel ambiance",
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
                                    Every voyage emphasizes comfort rather than crowded
                                    schedules—luxury travelers increasingly appreciate quality
                                    over quantity.
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
                            The onboard atmosphere is peaceful and sophisticated, while
                            included excursions bring each destination to life.
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
                                Unlike ocean cruises, river cruises emphasize conversation,
                                culture, and relaxation in elegant, intimate surroundings.
                            </p>

                            <ul className="Ejvs-feature-list">
                                {[
                                    "Elegant lounges",
                                    "Panoramic observation areas",
                                    "Sun deck",
                                    "Fitness room",
                                    "Library",
                                    "Live music & wine tastings",
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
                                Included excursions provide an authentic look at each port,
                                with optional experiences for even deeper exploration.
                            </p>

                            <ul className="Ejvs-feature-list">
                                {[
                                    "Guided walking tours",
                                    "Historic landmarks",
                                    "Museums",
                                    "Wine tastings",
                                    "Local culinary experiences",
                                    "Scenic countryside tours",
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
                                    Optional excursions offer even deeper exploration of each
                                    destination visited.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DINING EXPERIENCE ────────────────────────────────────────── */}
            <section className="dmg-info-section dmg-bg-white" id="dining-experience">
                <div className="dmg-info-container">
                    <div className="dmg-info-grid">
                        <div className="dmg-info-media">
                            <div className="dmg-media-wrapper">
                                <img
                                    //   src={RiversideDining}
                                    alt="Gourmet dining aboard Riverside Luxury Cruises"
                                    className="dmg-media-img"
                                    style={{ height: "73vh" }}
                                />

                                <div className="dmg-media-overlay"></div>

                                <div className="dmg-media-badge">
                                    <span>Fresh Regional Ingredients • Flexible Dining</span>
                                </div>
                            </div>
                        </div>

                        <div className="dmg-info-content">
                            <h2 className="dmg-info-title">Dining Experience</h2>

                            <div className="dmg-info-accent"></div>

                            <p className="dmg-info-lead">
                                Dining aboard Riverside emphasizes fresh regional ingredients
                                and sophisticated European cuisine. Menus often reflect the
                                destinations visited during the cruise.
                            </p>

                            <div className="dmg-info-features dmg-info-features-scrollable">
                                <div className="dmg-info-feature-item">
                                    <div className="dmg-info-icon-box">
                                        <Utensils size={16} />
                                    </div>

                                    <div className="dmg-info-feature-texts">
                                        <h3 className="dmg-info-feature-title">
                                            Gourmet Multi-Course Dinners
                                        </h3>

                                        <p className="dmg-info-feature-desc">
                                            Regional specialties and fresh seasonal ingredients
                                            served with premium wines.
                                        </p>
                                    </div>
                                </div>

                                <div className="dmg-info-feature-item">
                                    <div className="dmg-info-icon-box">
                                        <Wine size={16} />
                                    </div>

                                    <div className="dmg-info-feature-texts">
                                        <h3 className="dmg-info-feature-title">Premium Wines</h3>

                                        <p className="dmg-info-feature-desc">
                                            Thoughtfully paired wines complement each destination's
                                            culinary traditions.
                                        </p>
                                    </div>
                                </div>

                                <div className="dmg-info-feature-item">
                                    <div className="dmg-info-icon-box">
                                        <Check size={16} />
                                    </div>

                                    <div className="dmg-info-feature-texts">
                                        <h3 className="dmg-info-feature-title">
                                            Breakfast &amp; Lunch Buffets
                                        </h3>

                                        <p className="dmg-info-feature-desc">
                                            Elegant desserts and a flexible dining atmosphere
                                            throughout the day.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="rlc-page-cta-container rlc-align-left" style={{ marginTop: "24px" }}>
                                <Link to="/contact" className="rlc-page-cta-btn" style={{ textDecoration: "none" }}>
                                    Start Planning Your Riverside Cruise
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
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
                                    Exceptional hospitality is one of <strong>Riverside's</strong>{" "}
                                    greatest strengths. Crew members quickly learn guest
                                    preferences and provide attentive, friendly service
                                    throughout the voyage.
                                </p>

                                <div className="ugt-questions-box">
                                    <span className="ugt-questions-title">
                                        Guests often praise:
                                    </span>

                                    <ul className="ugt-questions-list">
                                        {[
                                            "Personalized attention",
                                            "Warm hospitality",
                                            "Professional staff",
                                            "Efficient service",
                                            "Attention to detail",
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



            {/* ── DESTINATIONS & ITINERARIES ──────────────────────────────── */}
            <section className="luc-why-section" id="destinations-itineraries">
                <div className="luc-why-container">
                    <div className="luc-why-images">
                        <div className="luc-why-img-main-wrap" style={{ color: "#fff" }}>
                            <img
                                // src={RiversideDanube}
                                alt="Riverside Luxury Cruises sailing the Danube River"
                                className="luc-why-img-main"
                            />
                            <div className="luc-why-img-overlay"></div>
                        </div>

                        <div className="luc-why-img-accent-wrap" style={{ color: "#fff" }}>
                            <img
                                // src={RiversideRhine}
                                alt="Vineyards and castles along the Rhine River"
                                className="luc-why-img-accent"
                            />

                            <div className="luc-why-img-badge">
                                <span className="luc-why-badge-num">4</span>
                                <span className="luc-why-badge-text">European Rivers</span>
                            </div>
                        </div>
                    </div>

                    <div className="luc-why-content">
                        <h2 className="luc-why-title">Destinations &amp; Itineraries</h2>

                        <div className="aac-accent-line aac-accent-white"></div>

                        <p className="luc-why-intro">
                            Riverside sails some of Europe's most beautiful rivers. Many
                            itineraries include overnight stays and extended time in port
                            for a more immersive experience.
                        </p>

                        <div className="luc-why-features">
                            {[
                                {
                                    num: "01",
                                    title: "Danube River",
                                    desc: "Explore Vienna, Budapest, Bratislava, and charming riverside villages.",
                                },
                                {
                                    num: "02",
                                    title: "Rhine River",
                                    desc: "Visit castles, vineyards, medieval towns, and picturesque landscapes.",
                                },
                                {
                                    num: "03",
                                    title: "Main River",
                                    desc: "Experience historic cities and scenic countryside.",
                                },
                                {
                                    num: "04",
                                    title: "Moselle River",
                                    desc: "Discover wine villages, rolling vineyards, and peaceful river scenery.",
                                },
                            ]
                                .slice(0, readMoreDestination ? 4 : 2)
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

            {/* ── RIVERSIDE VS. OTHER LUXURY RIVER CRUISE LINES ───────────── */}
            <section
                className="rlc-compare-section"
                id="riverside-vs-other-lines"
            >
                <div className="rlc-compare-container">
                    <div className="rlc-compare-header">
                        <span className="rlc-compare-eyebrow">How Riverside Compares</span>

                        <h2 className="rlc-compare-title">
                            Riverside vs. Other Luxury River Cruise Lines
                        </h2>

                        <div className="rlc-compare-accent"></div>

                        <p className="rlc-compare-intro">
                            Choosing the right river cruise line depends on what matters
                            most to you. Here's how Riverside compares to some of Europe's
                            other well-known luxury river cruise brands.
                        </p>
                    </div>

                    <div className="rlc-compare-grid">
                        {[
                            {
                                title: "Riverside vs. Viking",
                                text: "Riverside generally offers larger suites and a more boutique luxury atmosphere, while Viking provides a broader selection of itineraries and a more contemporary Scandinavian design.",
                            },
                            {
                                title: "Riverside vs. AmaWaterways",
                                text: "AmaWaterways appeals to active travelers with biking and wellness programs, while Riverside emphasizes spacious accommodations and relaxed elegance.",
                            },
                            {
                                title: "Riverside vs. Uniworld",
                                text: "Uniworld is known for its highly decorative interiors and all-inclusive luxury, whereas Riverside offers understated European sophistication.",
                            },
                            {
                                title: "Riverside vs. Scenic",
                                text: "Scenic includes more luxury amenities and excursions, while Riverside focuses on intimate hospitality and exceptional accommodations.",
                            },
                        ].map((item, i) => {
                            const [brand1, brand2] = item.title.split(" vs. ");
                            return (
                                <div key={i} className="rlc-compare-card">
                                    <div className="rlc-compare-card-header">
                                        <div className="rlc-compare-badge-wrap">
                                            <span className="rlc-compare-ship-icon">
                                                <Ship size={18} strokeWidth={2} />
                                            </span>
                                        </div>
                                        <h3 className="rlc-compare-card-title">
                                            <span className="rlc-compare-brand-primary">{brand1}</span>
                                            <span className="rlc-compare-vs-badge">vs</span>
                                            <span className="rlc-compare-brand-secondary">{brand2}</span>
                                        </h3>
                                    </div>
                                    <div className="rlc-compare-card-body">
                                        <p className="rlc-compare-card-text">{item.text}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── ELEGANT ALL-SUITE ACCOMMODATIONS ────────────────────────── */}
            <section className="adg-c-section adg-c-bg-soft" id="all-suite-accommodations">
                <div className="adg-c-container">
                    <div className="adg-c-section-header">
                        <h2 className="adg-c-h2">Elegant All-Suite Accommodations</h2>

                        <div className="adg-c-accent-line"></div>

                        <p className="Asc-section-intro">
                            One of Riverside's defining features is its spacious suite
                            accommodations—many are significantly larger than those found
                            on many traditional river cruise ships.
                        </p>
                    </div>

                    <div className="adg-c-overview-layout">
                        <div className="adg-c-overview-icons">
                            {[
                                "Floor-to-ceiling windows",
                                "French balconies or full balconies",
                                "King-size beds",
                                "Marble bathrooms",
                                "Walk-in closets (select suites)",
                                "Luxury linens",
                                "Premium bath amenities",
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
                                        Many suites feature sitting areas and walk-in closets,
                                        creating a true home-away-from-home experience on the
                                        river.
                                    </p>
                                </div>
                            </div>

                            <div className="adg-c-overview-image-wrap">
                                <img
                                    //   src={RiversideSuite}
                                    alt="Spacious all-suite accommodation aboard Riverside Luxury Cruises"
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




            {/* ── WELLNESS & RELAXATION ────────────────────────────────────── */}
            <section className="azs-entertainment-section" id="wellness-relaxation">
                <div className="azs-container">
                    <div className="azs-section-header">
                        <h2 className="azs-section-title">Wellness &amp; Relaxation</h2>

                        <div className="azs-section-accent"></div>

                        <p className="azs-section-subtitle">
                            Riverside recognizes that luxury travel should also be
                            restorative—the slower pace of river cruising makes wellness a
                            natural part of the experience.
                        </p>
                    </div>

                    <div className="azs-entertainment-grid">
                        <div className="azs-entertainment-card azs-azamara-ent">
                            <div className="azs-ent-header">
                                <div className="azs-ent-icon-circle">
                                    <HeartPulse size={24} className="azs-ent-icon" />
                                </div>

                                <h3 className="azs-ent-title">Spa &amp; Fitness</h3>
                            </div>

                            <p className="azs-ent-intro">
                                Spa treatments, massage services, and fitness equipment help
                                guests stay refreshed throughout the voyage.
                            </p>

                            <div className="azs-ent-body">
                                <h4 className="azs-ent-group-title">Guests Can Enjoy:</h4>

                                <ul className="azs-ent-list">
                                    {[
                                        "Spa treatments",
                                        "Massage services",
                                        "Fitness equipment",
                                        "Healthy dining choices",
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
                                        Wellness is woven throughout the journey rather than
                                        confined to a single space.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="azs-entertainment-card azs-seabourn-ent">
                            <div className="azs-ent-header">
                                <div className="azs-ent-icon-circle">
                                    <Waves size={24} className="azs-ent-icon" />
                                </div>

                                <h3 className="azs-ent-title">Scenic Relaxation</h3>
                            </div>

                            <p className="azs-ent-intro">
                                Walking tracks on the sun deck and scenic relaxation spaces
                                make the most of river cruising's slower pace.
                            </p>

                            <div className="azs-ent-body">
                                <h4 className="azs-ent-group-title">Also Available:</h4>

                                <ul className="azs-ent-list">
                                    {[
                                        "Walking tracks (sun deck)",
                                        "Scenic relaxation spaces",
                                        "Quiet reading areas",
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

                                <div className="azs-ent-highlight-box azs-seabourn-ent-highlight">
                                    <p className="azs-ent-highlight-text">
                                        The slower pace of river cruising makes wellness a
                                        natural part of every day.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHO SHOULD SAIL RIVERSIDE ───────────────────────────────── */}
            <section className="Asc-section" id="who-should-sail" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="Asc-container">
                    <div className="Asc-section-header">
                        <h2 className="Asc-h2">Who Should Sail Riverside?</h2>
                        <div className="Asc-accent-line"></div>

                        <p className="Asc-section-intro">
                            Choosing the right cruise line depends on your travel style and
                            expectations. If you appreciate personalized service and
                            spacious accommodations, Riverside is likely an excellent fit.
                        </p>
                    </div>

                    <div className="Asc-who-grid">
                        <div className="Asc-who-card Asc-who-yes">
                            <h3 className="Asc-who-title">Riverside Is an Excellent Choice For:</h3>

                            <ul className="Asc-who-list">
                                {[
                                    "Couples",
                                    "Luxury travelers",
                                    "Retired travelers",
                                    "Anniversary celebrations",
                                    "Honeymooners",
                                    "Food and wine lovers",
                                    "Experienced cruisers",
                                    "Travelers seeking European culture",
                                ].map((item, i) => (
                                    <li key={i}>
                                        <Check size={16} className="Asc-icon-green" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="Asc-who-card Asc-who-no">
                            <h3 className="Asc-who-title">Who Might Prefer Another Cruise Line?</h3>

                            <ul className="Asc-who-list">
                                {[
                                    "Want lower pricing",
                                    "Prefer family-focused activities",
                                    "Desire larger onboard entertainment venues",
                                    "Want extensive active excursion programs",
                                    "Travel primarily with young children",
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



            {/* ── IS RIVERSIDE WORTH THE PRICE ─────────────────────────────── */}
            <section
                className="rlc-worth-section"
                id="is-riverside-worth-the-price"
            >
                <div className="rlc-worth-container">
                    <div className="rlc-worth-grid">
                        <div className="rlc-worth-content">
                            <h2 className="rlc-worth-title">Is Riverside Worth the Price?</h2>

                            <div className="rlc-worth-accent"></div>

                            <p className="rlc-worth-lead">
                                For travelers seeking premium accommodations, personalized
                                service, and a refined onboard experience, many guests
                                consider Riverside to offer excellent value.
                            </p>

                            <h3 className="rlc-worth-emphasis-title">The experience emphasizes:</h3>

                            <div className="rlc-worth-emphasis-grid">
                                {[
                                    "Spacious luxury",
                                    "Outstanding cuisine",
                                    "Relaxed travel",
                                    "Exceptional service",
                                    "Beautiful destinations",
                                    "Boutique atmosphere",
                                ].map((item, idx) => (
                                    <div key={idx} className="rlc-worth-emphasis-item">
                                        <span className="rlc-worth-emphasis-icon">
                                            <Check size={16} strokeWidth={3} />
                                        </span>
                                        <span className="rlc-worth-emphasis-label">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="rlc-worth-conclusion-box">
                                <p className="rlc-worth-conclusion-text">
                                    Rather than offering endless onboard activities, Riverside invests in the quality of the guest experience.
                                </p>
                            </div>

                            <div className="rlc-page-cta-container rlc-align-left" style={{ marginTop: "24px" }}>
                                <Link to="/contact" className="rlc-page-cta-btn" style={{ textDecoration: "none" }}>
                                    Start Planning Your Riverside Cruise
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>

                        <div className="rlc-worth-media">
                            <div className="rlc-worth-media-wrapper">
                                <img
                                    //   src={RiversideEvening}
                                    alt="Elegant evening lounge aboard Riverside Luxury Cruises"
                                    className="rlc-worth-media-img"
                                />
                                <div className="rlc-worth-media-overlay"></div>

                                <div className="rlc-worth-media-badge">
                                    <span>Understated • Elegant</span>
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
                            Why Book Through a Luxury Travel Advisor?
                        </h2>

                        <div className="Avr-planning-divider"></div>
                    </div>

                    <div className="Avr-planning-grid">
                        <div className="Avr-planning-left">
                            <div className="Avr-planning-left-deco">&ldquo;</div>

                            <h3 className="Avr-planning-left-title">
                                Choose the Riverside Itinerary That Fits You
                            </h3>

                            <p className="Avr-planning-left-body">
                                Choosing the right itinerary, suite, and sailing date can
                                significantly enhance your river cruise experience. A luxury
                                travel advisor can help you compare itineraries, recommend
                                the best suite, and explain current promotions.
                            </p>

                            <div className="Avr-planning-alert">
                                <ShieldCheck size={18} className="Avr-planning-alert-icon" />

                                <p className="Avr-planning-alert-text">
                                    Professional guidance ensures every aspect of your vacation
                                    is tailored to your travel style.
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
                                    { icon: <Home size={18} />, label: "Recommend the best suite" },
                                    { icon: <Star size={18} />, label: "Explain promotions" },
                                    { icon: <Plane size={18} />, label: "Coordinate flights and hotels" },
                                    { icon: <MapPinned size={18} />, label: "Arrange private transfers" },
                                    { icon: <Sparkles size={18} />, label: "Recommend pre- and post-cruise stays" },
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
                                Professional guidance ensures every aspect of your vacation is
                                tailored to your travel style.
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
                            Everything travelers need to know about Riverside Luxury
                            Cruises before booking their next European river cruise.
                        </p>
                    </div>
                    <FAQ />
                </div>
            </section>

            {/* ── CTA / FINAL THOUGHTS ─────────────────────────────────────── */}
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
                                    Begin Your Riverside Journey Today
                                </h2>
                                <div className="Asc-help-accent"></div>
                            </div>

                            <div className="Asc-help-grid">
                                <div className="Asc-help-info">
                                    <p className="Asc-help-intro">
                                        Riverside Luxury Cruises offers a sophisticated
                                        alternative for travelers seeking an intimate and refined
                                        river cruise experience.
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
                                                With elegant all-suite accommodations, attentive
                                                service, outstanding cuisine, and thoughtfully
                                                curated European itineraries, the cruise line appeals
                                                to those who value quality, comfort, and personalized
                                                hospitality over large-scale entertainment.
                                            </p>
                                            <br />
                                            <p className="Asc-help-intro">
                                                Whether you're exploring the castles of the Rhine, the
                                                vineyards of the Moselle, or the grand capitals along
                                                the Danube, Riverside provides a luxurious way to
                                                discover Europe at a relaxed pace.
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

export default RiversideLuxuryCruisesReviews;