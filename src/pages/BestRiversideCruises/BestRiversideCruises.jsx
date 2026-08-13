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
    Sparkles,
    Ship,
    Landmark,
    Mountain,
    Wine,
    Snowflake,
    Flower2,
    MapPinned,
    Home,
    Hotel,
    Plane,
    BadgePercent,
    ShieldCheck,
    Compass,
    Anchor,
    Globe,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

/* ── Placeholder image imports ────────────────────────────────────
   Replace these with real Riverside Luxury Cruises photography once
   available. Paths assume a new /assets/BestRiversideCruises folder. */
// import HeroImage1 from "../../assets/BestRiversideCruises/riverside-danube-vienna-hero.jpg";
// import HeroImage2 from "../../assets/BestRiversideCruises/riverside-rhine-castle-hero.jpg";

// import FleetMozart from "../../assets/BestRiversideCruises/riverside-mozart-danube.jpg";
// import FleetDebussy from "../../assets/BestRiversideCruises/riverside-debussy-rhone.jpg";
// import FleetRavel from "../../assets/BestRiversideCruises/riverside-ravel-rhine.jpg";

// import DanubeImage from "../../assets/BestRiversideCruises/riverside-danube-budapest.jpg";
// import RhineImage from "../../assets/BestRiversideCruises/riverside-rhine-vineyards.jpg";
// import RhoneImage from "../../assets/BestRiversideCruises/riverside-rhone-provence.jpg";

// import ChristmasMarketImage from "../../assets/BestRiversideCruises/riverside-christmas-market.jpg";
// import TulipImage from "../../assets/BestRiversideCruises/riverside-tulip-season-netherlands.jpg";

// import ShoreExcursionsImage from "../../assets/BestRiversideCruises/riverside-shore-excursion-tour.jpg";
// import WorthItImage from "../../assets/BestRiversideCruises/riverside-evening-lounge.jpg";
// import CTAImage from "../../assets/BestRiversideCruises/riverside-ship-exterior-river.jpg";

import { Helmet } from "react-helmet-async";
import "../RiversideLuxuryCruisesReviews/RiversideLuxuryCruisesReviews.css";
import "../../pages/RiversideLuxuryCruises/RiversideLuxuryCruises.css";

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
            "@id": "https://www.tripsandships.com/best-riverside-cruises/#webpage",
            name: "Best Riverside Cruises | Top Luxury River Cruise Itineraries in Europe",
            url: "https://www.tripsandships.com/best-riverside-cruises",
            description:
                "Discover the best Riverside Luxury Cruises on the Danube, Rhine, and Rhône Rivers. Compare itineraries, destinations, ships, and find the perfect luxury European river cruise.",
        },
        {
            "@type": "Article",
            "@id": "https://www.tripsandships.com/best-riverside-cruises/#article",
            headline: "Best Riverside Cruises | Luxury European River Cruise Guide",
            description:
                "A complete guide to the best Riverside Luxury Cruises itineraries, covering the Danube, Rhine, and Rhône Rivers, Christmas Market and Tulip season sailings, recommended ships, and which cruise is best for your travel style.",
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
            "@id": "https://www.tripsandships.com/best-riverside-cruises/#breadcrumb",
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
                    name: "Riverside Luxury Cruises",
                    item: "https://www.tripsandships.com/riverside-luxury-cruises",
                },
                {
                    "@type": "ListItem",
                    position: 4,
                    name: "Best Riverside Cruises",
                    item: "https://www.tripsandships.com/best-riverside-cruises",
                },
            ],
        },
        {
            "@type": "TouristTrip",
            "@id": "https://www.tripsandships.com/best-riverside-cruises/#touristtrip",
            name: "Best Riverside Luxury Cruises Itineraries",
            touristType: "Luxury travelers, couples, retirees, food & wine enthusiasts, first-time river cruisers",
            itinerary: {
                "@type": "ItemList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Danube River Cruises" },
                    { "@type": "ListItem", position: 2, name: "Rhine River Cruises" },
                    { "@type": "ListItem", position: 3, name: "Rhône River Cruises" },
                    { "@type": "ListItem", position: 4, name: "Christmas Market Cruises" },
                    { "@type": "ListItem", position: 5, name: "Tulip Cruises" },
                ],
            },
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/best-riverside-cruises/#destinations",
            name: "Best Riverside Cruises Destinations",
            itemListElement: [
                { "@type": "Place", position: 1, name: "Danube River" },
                { "@type": "Place", position: 2, name: "Rhine River" },
                { "@type": "Place", position: 3, name: "Rhône River" },
            ],
        },
        {
            "@type": "Service",
            "@id": "https://www.tripsandships.com/best-riverside-cruises/#service",
            serviceType: "Luxury River Cruise Itinerary Planning & Booking Support",
            provider: {
                "@type": "TravelAgency",
                name: "Trips & Ships Luxury Travel",
            },
            areaServed: "Worldwide",
            description:
                "Personalized planning support to help travelers compare Riverside Luxury Cruises itineraries and choose the best sailing, ship, and suite for their trip.",
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/best-riverside-cruises/#itemlist",
            name: "What This Best Riverside Cruises Guide Covers",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Quick Overview" },
                { "@type": "ListItem", position: 2, name: "Why Choose Riverside Luxury Cruises?" },
                { "@type": "ListItem", position: 3, name: "Best Danube Cruises" },
                { "@type": "ListItem", position: 4, name: "Best Rhine Cruises" },
                { "@type": "ListItem", position: 5, name: "Best Rhône Cruises" },
                { "@type": "ListItem", position: 6, name: "Best Christmas Market Cruises" },
                { "@type": "ListItem", position: 7, name: "Best Tulip Cruises" },
                { "@type": "ListItem", position: 8, name: "Which Riverside Cruise Is Best for You?" },
                { "@type": "ListItem", position: 9, name: "Which Ship Should You Choose?" },
                { "@type": "ListItem", position: 10, name: "What Makes Riverside Different?" },
                { "@type": "ListItem", position: 11, name: "Is Riverside Worth the Price?" },
                { "@type": "ListItem", position: 12, name: "Why Book Through a Luxury Travel Advisor?" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/best-riverside-cruises/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Which Riverside cruise is best for first-time travelers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The Danube itinerary is widely considered the best introduction to luxury river cruising.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which Riverside cruise has the best scenery?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The Rhine is famous for its dramatic castles, vineyards, and the UNESCO-listed Rhine Gorge.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which Riverside itinerary is best for food lovers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The Rhône River offers exceptional culinary and wine experiences throughout southern France.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which ship sails the Danube?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Riverside Mozart primarily sails Danube itineraries.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which Riverside cruise is best during Christmas?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Christmas Market cruises through Germany, Austria, and Hungary are among the most popular seasonal sailings.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which cruise is best for spring?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Tulip Cruises through the Netherlands and Belgium showcase spectacular spring blooms.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are Riverside cruises all-inclusive?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Most cruises include luxury accommodations, gourmet dining, beverages with meals, Wi-Fi, and selected excursions. Exact inclusions vary by itinerary.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Riverside suitable for experienced luxury travelers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Absolutely. Riverside's boutique atmosphere, spacious suites, and personalized service appeal to seasoned luxury travelers.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How many ships does Riverside operate?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Riverside currently operates a boutique fleet of three luxury river ships.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I use a travel advisor when booking Riverside?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. A luxury travel advisor can compare itineraries, explain promotions, recommend the best suite, and coordinate every aspect of your vacation.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Riverside Luxury Cruises provide butler service?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Riverside Luxury Cruises offers butler service in all suites across their entire fleet, providing guests with an exceptional level of personalized assistance.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the dress code onboard Riverside ships?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The dress code onboard is casual/smart-casual during the day and elegant-casual in the evening. Formal nights are generally not required.",
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
            q: "Which Riverside cruise is best for first-time travelers?",
            a: "The Danube itinerary is widely considered the best introduction to luxury river cruising.",
        },
        {
            q: "Which Riverside cruise has the best scenery?",
            a: "The Rhine is famous for its dramatic castles, vineyards, and the UNESCO-listed Rhine Gorge.",
        },
        {
            q: "Which Riverside itinerary is best for food lovers?",
            a: "The Rhône River offers exceptional culinary and wine experiences throughout southern France.",
        },
        {
            q: "Which ship sails the Danube?",
            a: "Riverside Mozart primarily sails Danube itineraries.",
        },
        {
            q: "Which Riverside cruise is best during Christmas?",
            a: "Christmas Market cruises through Germany, Austria, and Hungary are among the most popular seasonal sailings.",
        },
        {
            q: "Which cruise is best for spring?",
            a: "Tulip Cruises through the Netherlands and Belgium showcase spectacular spring blooms.",
        },
        {
            q: "Are Riverside cruises all-inclusive?",
            a: "Most cruises include luxury accommodations, gourmet dining, beverages with meals, Wi-Fi, and selected excursions. Exact inclusions vary by itinerary.",
        },
        {
            q: "Is Riverside suitable for experienced luxury travelers?",
            a: "Absolutely. Riverside's boutique atmosphere, spacious suites, and personalized service appeal to seasoned luxury travelers.",
        },
        {
            q: "How many ships does Riverside operate?",
            a: "Riverside currently operates a boutique fleet of three luxury river ships.",
        },
        {
            q: "Should I use a travel advisor when booking Riverside?",
            a: "Yes. A luxury travel advisor can compare itineraries, explain promotions, recommend the best suite, and coordinate every aspect of your vacation.",
        },
        {
            q: "Does Riverside Luxury Cruises provide butler service?",
            a: "Yes. Riverside Luxury Cruises offers butler service in all suites across their entire fleet, providing guests with an exceptional level of personalized assistance.",
        },
        {
            q: "What is the dress code onboard Riverside ships?",
            a: "The dress code onboard is casual/smart-casual during the day and elegant-casual in the evening. Formal nights are generally not required.",
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

/* ── Quick Overview Data ──────────────────────────────────────── */
const quickOverviewData = [
    {
        key: "danube",
        name: "Danube Cruises",
        tagline: "First-Time River Cruisers",
        // image: DanubeImage,
        imageAlt: "Riverside Danube River cruise",
        desc: "Vienna, Budapest, and the Wachau Valley combine imperial history with stunning river scenery.",
        items: ["Vienna", "Budapest", "Wachau Valley"],
    },
    {
        key: "rhine",
        name: "Rhine Cruises",
        tagline: "Castles & Scenic Landscapes",
        // image: RhineImage,
        imageAlt: "Riverside Rhine River cruise",
        desc: "The Rhine Gorge, Cologne, and Strasbourg make this one of Europe's most photogenic itineraries.",
        items: ["Rhine Gorge", "Cologne", "Strasbourg"],
    },
    {
        key: "rhone",
        name: "Rhône Cruises",
        tagline: "Food & Wine Lovers",
        // image: RhoneImage,
        imageAlt: "Riverside Rhône River cruise",
        desc: "Provence, Lyon, and Avignon deliver one of Europe's finest gastronomic river journeys.",
        items: ["Provence", "Lyon", "Avignon"],
    },
    {
        key: "christmas",
        name: "Christmas Market Cruises",
        tagline: "Holiday Travelers",
        // image: ChristmasMarketImage,
        imageAlt: "Riverside Christmas Market river cruise",
        desc: "Europe's festive Christmas markets come to life with mulled wine, lights, and holiday traditions.",
        items: ["Europe's festive Christmas markets"],
    },
    {
        key: "tulip",
        name: "Tulip Cruises",
        tagline: "Spring Travel",
        // image: TulipImage,
        imageAlt: "Riverside Tulip season cruise",
        desc: "Dutch gardens and blooming tulip fields create one of Riverside's most colorful sailings.",
        items: ["Dutch gardens and blooming tulips"],
    },
];

/* ── Fleet Data ────────────────────────────────────────────────── */
const fleetData = [
    {
        key: "mozart",
        name: "Riverside Mozart",
        tagline: "Best for the Danube",
        // image: FleetMozart,
        imageAlt: "Riverside Mozart sailing the Danube River",
        desc: "Riverside's recommended ship for Danube itineraries, ideal for first-time guests and couples seeking spacious suites.",
        items: [
            "Danube itineraries",
            "Spacious suites",
            "First-time guests",
            "Couples",
        ],
    },
    {
        key: "ravel",
        name: "Riverside Ravel",
        tagline: "Best for the Rhine",
        // image: FleetRavel,
        imageAlt: "Riverside Ravel sailing the Rhine River",
        desc: "Riverside's recommended ship for Rhine itineraries, sailing past castles and some of Europe's most scenic river landscapes.",
        items: [
            "Rhine itineraries",
            "Castles",
            "Scenic cruising",
            "Romantic vacations",
        ],
    },
    {
        key: "debussy",
        name: "Riverside Debussy",
        tagline: "Best for the Rhône",
        // image: FleetDebussy,
        imageAlt: "Riverside Debussy sailing the Rhône River",
        desc: "Riverside's recommended ship for the Rhône River, built around French wine country and gourmet cuisine.",
        items: [
            "Rhône River",
            "French wine country",
            "Gourmet cuisine",
            "Provence",
        ],
    },
];

/* ── River Destinations ───────────────────────────────────────── */
const riverDestinations = [
    {
        id: "danube",
        title: "Best Danube Cruises",
        badge: "Danube",
        icon: Landmark,
        // image: DanubeImage,

        desc: "The Danube is one of Europe's most iconic rivers and an excellent introduction to luxury river cruising, with imperial history, magnificent architecture, classical music, charming villages, and stunning river scenery.",

        columns: [
            {
                label: "Highlights:",
                items: ["Budapest", "Vienna", "Bratislava", "Melk Abbey", "Wachau Valley", "Passau"],
            },
            {
                label: "Best For:",
                items: ["First-time river cruisers", "History lovers", "Couples", "Luxury travelers"],
            },
        ],

        themeLabel: "Recommended Ship: Riverside Mozart",
        themeText:
            "Guests experience imperial history, magnificent architecture, classical music, charming villages, and stunning river scenery — ideal for first-time river cruisers and history lovers alike.",
    },
    {
        id: "rhine",
        title: "Best Rhine Cruises",
        badge: "Rhine",
        icon: Mountain,
        // image: RhineImage,

        desc: "The Rhine is famous for its romantic landscapes, medieval castles, vineyards, and picturesque towns, with scenic cruising through the UNESCO-listed Upper Middle Rhine Valley.",

        columns: [
            {
                label: "Highlights:",
                items: ["Amsterdam", "Cologne", "Koblenz", "Rhine Gorge", "Rüdesheim", "Strasbourg", "Basel"],
            },
            {
                label: "Best For:",
                items: ["Scenic photography", "Wine enthusiasts", "Couples", "European first-time visitors"],
            },
        ],

        themeLabel: "Recommended Ship: Riverside Ravel",
        themeText:
            "Scenic cruising through the UNESCO-listed Upper Middle Rhine Valley is often considered one of Europe's most beautiful river experiences.",
    },
    {
        id: "rhone",
        title: "Best Rhône Cruises",
        badge: "Rhône",
        icon: Wine,
        // image: RhoneImage,

        desc: "Southern France offers an entirely different river cruise experience centered around food, wine, history, and Provençal culture.",

        columns: [
            {
                label: "Highlights:",
                items: ["Lyon", "Avignon", "Arles", "Viviers", "Chalon-sur-Saône", "Tournon-sur-Rhône"],
            },
            {
                label: "Best For:",
                items: ["Food lovers", "Wine enthusiasts", "Art lovers", "Slow travel"],
            },
        ],

        themeLabel: "Recommended Ship: Riverside Debussy",
        themeText:
            "Travelers enjoy Roman ruins, lavender landscapes, vineyards, charming villages, and exceptional cuisine throughout Provence.",
    },
    {
        id: "christmas",
        title: "Best Christmas Market Cruises",
        badge: "Christmas Markets",
        icon: Snowflake,
        // image: ChristmasMarketImage,

        desc: "During the holiday season, Riverside transforms its ships into festive retreats while visiting some of Europe's most famous Christmas markets.",

        columns: [
            {
                label: "Popular Destinations:",
                items: ["Vienna", "Budapest", "Cologne", "Strasbourg", "Nuremberg", "Passau"],
            },
            {
                label: "Best For:",
                items: ["Holiday travel", "Couples", "Family celebrations", "Festive vacations"],
            },
        ],

        themeLabel: "Festive Onboard Experience",
        themeText:
            "Guests can browse traditional holiday markets, enjoy seasonal cuisine, sip mulled wine, and experience centuries-old Christmas traditions.",
    },
    {
        id: "tulip",
        title: "Best Tulip Cruises",
        badge: "Tulip Cruises",
        icon: Flower2,
        // image: TulipImage,

        desc: "Spring is one of the most beautiful times to cruise through the Netherlands and Belgium.",

        columns: [
            {
                label: "Highlights Include:",
                items: ["Amsterdam", "Keukenhof Gardens", "Rotterdam", "Kinderdijk", "Antwerp", "Historic canals"],
            },
            {
                label: "Best For:",
                items: ["Spring vacations", "Garden lovers", "Photography enthusiasts", "First-time European travelers"],
            },
        ],

        themeLabel: "Photogenic Itineraries",
        themeText:
            "Colorful tulip fields, blooming gardens, and charming Dutch towns make this one of Riverside's most photogenic itineraries.",
    },
];

/* ── Main Component ──────────────────────────────────────────────── */
const BestRiversideCruises = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [readMore, setReadMore] = useState(false);
    const [readMoreStyles, setReadMoreStyles] = useState(false);
    const [activeRiver, setActiveRiver] = useState("danube");
    const currentRiver =
        riverDestinations.find((d) => d.id === activeRiver) || riverDestinations[0];

    const ActiveIcon = currentRiver.icon;

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
                    Best Riverside Cruises | Top Luxury River Cruise Itineraries in Europe
                </title>
                <meta name="title" content="Best Riverside Cruises | Luxury European River Cruise Guide" />
                <meta
                    name="description"
                    content="Discover the best Riverside Luxury Cruises on the Danube, Rhine, and Rhône Rivers. Compare itineraries, destinations, ships, and find the perfect luxury European river cruise."
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
                    <h1>Best Riverside Cruises</h1>

                    <p>
                        Europe's rivers are home to some of the world's most spectacular
                        destinations, and Riverside Luxury Cruises offers an elegant way
                        to experience them. From fairy-tale castles along the Rhine to
                        the vineyards of southern France and the imperial cities of the
                        Danube, Riverside combines boutique luxury with immersive
                        cultural exploration.
                    </p>

                    <p>
                        With a small fleet of beautifully appointed ships, Riverside
                        focuses on spacious suites, exceptional dining, personalized
                        service, and thoughtfully designed itineraries. Choosing the
                        right itinerary is one of the most important decisions you'll
                        make.
                    </p>

                    {readMore && (
                        <>
                            <p>
                                This guide highlights the best Riverside cruises, what
                                makes each route unique, and which itinerary is best for
                                your travel style—whether you're planning your first river
                                cruise or returning to Europe for another unforgettable
                                journey.
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

            {/* ── QUICK OVERVIEW ───────────────────────────────────────────── */}
            <section className="adg-section" id="quick-overview" style={{ backgroundColor: "var(--bg-white)" }}>
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Quick Overview</h2>

                        <div className="adg-accent-line"></div>

                        <p className="adg-intro">
                            A fast look at each Riverside itinerary, who it's best for, and
                            the highlights that make it stand out.
                        </p>
                    </div>

                    <div className="Asc-table-wrapper">
                        <table className="Asc-fleet-table">
                            <thead>
                                <tr>
                                    <th>Cruise</th>
                                    <th>Best For</th>
                                    <th>Highlights</th>
                                </tr>
                            </thead>
                            <tbody>
                                {quickOverviewData.map((cruise) => (
                                    <tr key={cruise.key}>
                                        <td>
                                            <strong>{cruise.name}</strong>
                                        </td>
                                        <td>{cruise.tagline}</td>
                                        <td>{cruise.items.join(", ")}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── WHY CHOOSE RIVERSIDE LUXURY CRUISES ─────────────────────── */}
            <section
                className="ugt-components-section"
                id="why-choose-riverside"
                style={{ backgroundColor: "var(--bg-soft)" }}
            >
                <div className="ugt-components-container">
                    <div className="ugt-components-header">
                        <h2 className="ugt-components-title">
                            Why Choose Riverside <br /> Luxury Cruises?
                        </h2>

                        <div className="adg-c-accent-line"></div>
                    </div>

                    <div className="ugt-components-list">
                        <div className="ugt-component-row">
                            <div className="ugt-component-image-wrapper">
                                <div className="ugt-component-image-container">
                                    <img
                                        // src={HeroImage1}
                                        alt="Riverside Luxury Cruises sailing a European river"
                                        className="ugt-component-image"
                                    />
                                </div>
                            </div>

                            <div className="ugt-component-content">
                                <p className="ugt-component-text">
                                    Unlike larger cruise companies, <strong>Riverside</strong>{" "}
                                    focuses on delivering an intimate experience where comfort
                                    and service come first.
                                </p>

                                <div className="ugt-questions-box">
                                    <span className="ugt-questions-title">
                                        Riverside Offers a Boutique Approach With:
                                    </span>

                                    <ul className="ugt-questions-list">
                                        {[
                                            "Spacious luxury suites",
                                            "Gourmet dining",
                                            "Personalized service",
                                            "Elegant contemporary ships",
                                            "Scenic European itineraries",
                                            "Relaxed onboard atmosphere",
                                            "Exceptional hospitality",
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
                                    Every voyage is designed to help guests slow down and fully
                                    enjoy Europe's most beautiful waterways.
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

            {/* ── BEST DANUBE / RHINE / RHÔNE CRUISES ─────────────────────── */}
            <section className="luc-destinations-section" id="luc-destinations">
                <div className="luc-destinations-container">
                    <div className="luc-destinations-header">
                        <h2 className="luc-destinations-title">
                            Best Riverside Cruise Itineraries
                        </h2>

                        <div className="adg-c-accent-line"></div>

                        <p className="luc-destinations-intro">
                            Riverside sails through some of Europe's most spectacular
                            regions. Each itinerary reflects the unique culture, history,
                            cuisine, and landscapes of the river it follows.
                        </p>
                    </div>

                    <div className="luc-dest-layout">
                        <nav className="luc-dest-nav">
                            {riverDestinations.map((item) => {
                                const NavIcon = item.icon;
                                const isActive = activeRiver === item.id;

                                return (
                                    <button
                                        key={item.id}
                                        className={`luc-dest-nav-btn ${isActive ? "luc-dest-nav-btn--active" : ""
                                            }`}
                                        onClick={() => setActiveRiver(item.id)}
                                    >
                                        <div className="luc-dest-nav-icon-wrap">
                                            <NavIcon size={16} strokeWidth={1.8} />
                                        </div>

                                        <span className="luc-dest-nav-label">{item.badge}</span>

                                        {isActive && <div className="luc-dest-nav-pip"></div>}
                                    </button>
                                );
                            })}
                        </nav>

                        <div className="luc-dest-panel" key={activeRiver}>
                            <div className="luc-dest-img-wrap">
                                <img
                                    src={currentRiver.image}
                                    alt={currentRiver.title}
                                    className="luc-dest-img"
                                />
                                <div className="luc-dest-img-overlay">
                                    <div className="luc-dest-img-icon">
                                        <ActiveIcon size={22} strokeWidth={1.6} />
                                    </div>

                                    <span className="luc-dest-img-title">
                                        {currentRiver.title}
                                    </span>
                                </div>
                            </div>

                            <p className="luc-dest-panel-desc">{currentRiver.desc}</p>

                            <div className="luc-dest-columns">
                                {currentRiver.columns.map((col, cIdx) => (
                                    <div key={cIdx} className="luc-dest-info-col">
                                        <span className="luc-dest-info-label">{col.label}</span>

                                        <div className="luc-dest-items-grid">
                                            {col.items.map((item) => (
                                                <div key={item} className="luc-dest-item">
                                                    <div className="luc-dest-item-dot"></div>

                                                    <span className="luc-dest-item-text">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="luc-dest-theme-box-note">
                                <div className="luc-dest-theme-note-bar"></div>

                                <div className="luc-dest-theme-note-content">
                                    <span className="luc-dest-theme-note-label">
                                        {currentRiver.themeLabel}
                                    </span>

                                    <p className="luc-dest-theme-note-text">
                                        {currentRiver.themeText}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

      

            {/* ── WHICH RIVERSIDE CRUISE IS BEST FOR YOU ──────────────────── */}
            <section className="luc-why-section" id="which-cruise-is-best-for-you">
                <div className="luc-why-container">
                    <div className="luc-why-images">
                        <div className="luc-why-img-main-wrap" style={{ color: "#fff" }}>
                            <img
                                // src={HeroImage2}
                                alt="Choosing the best Riverside Luxury Cruises itinerary"
                                className="luc-why-img-main"
                            />
                            <div className="luc-why-img-overlay"></div>
                        </div>

                        <div className="luc-why-img-accent-wrap" style={{ color: "#fff" }}>
                            <img
                                // src={WorthItImage}
                                alt="Scenic view from a luxury river cruise ship"
                                className="luc-why-img-accent"
                            />

                            <div className="luc-why-img-badge">
                                <span className="luc-why-badge-num">5</span>
                                <span className="luc-why-badge-text">Cruise Styles</span>
                            </div>
                        </div>
                    </div>

                    <div className="luc-why-content">
                        <h2 className="luc-why-title">Which Riverside Cruise Is Best for You?</h2>

                        <div className="aac-accent-line aac-accent-white"></div>

                        <p className="luc-why-intro">
                            The best Riverside cruise depends on the travel style and
                            experiences you value most. Match your interests to the perfect itinerary:
                        </p>

                        <div className="luc-why-features">
                            {[
                                {
                                    num: "01",
                                    title: "First-Time River Cruisers",
                                    boldText: "Choose the Danube.",
                                    desc: "It offers iconic cities, stunning scenery, and an excellent introduction to European river cruising.",
                                },
                                {
                                    num: "02",
                                    title: "Food & Wine Enthusiasts",
                                    boldText: "Choose the Rhône.",
                                    desc: "The culinary traditions, vineyards, and regional specialties make it one of Europe's finest gastronomic journeys.",
                                },
                                {
                                    num: "03",
                                    title: "Castle & History Lovers",
                                    boldText: "Choose the Rhine.",
                                    desc: "The legendary castles, medieval villages, and historic cities create unforgettable scenery.",
                                },
                                {
                                    num: "04",
                                    title: "Holiday Travelers",
                                    boldText: "Choose a Christmas Market Cruise.",
                                    desc: "These seasonal sailings combine festive traditions with Riverside's luxury experience.",
                                },
                                {
                                    num: "05",
                                    title: "Spring Travelers",
                                    boldText: "Choose a Tulip Cruise.",
                                    desc: "The blooming flowers and charming Dutch landscapes create an unforgettable seasonal vacation.",
                                },
                            ]
                                .slice(0, readMoreStyles ? 5 : 2)
                                .map((feat, i) => (
                                    <div key={i} className="luc-why-feature">
                                        <div className="luc-why-feature-num">{feat.num}</div>

                                        <div className="luc-why-feature-body">
                                            <h3 className="luc-why-feature-title">{feat.title}</h3>
                                            <p className="luc-why-feature-desc">
                                                <strong>{feat.boldText}</strong> {feat.desc}
                                            </p>
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
                                onClick={() => setReadMoreStyles(!readMoreStyles)}
                            >
                                {readMoreStyles ? "Read Less" : "Read More"}
                            </button>
                        </div>

                        <div className="rlc-page-cta-container rlc-align-left" style={{ marginTop: "30px" }}>
                            <Link to="/contact" className="rlc-page-cta-btn" style={{ textDecoration: "none" }}>
                                Start Planning Your Riverside Cruise
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

                        {/* ── WHAT MAKES RIVERSIDE DIFFERENT ───────────────────────────── */}
            <section className="adg-c-section adg-c-bg-white" id="what-makes-riverside-different">
                <div className="adg-c-container">
                    <div className="adg-c-section-header">
                        <h2 className="adg-c-h2">What Makes Riverside Different?</h2>

                        <div className="adg-c-accent-line"></div>

                        <p className="Asc-section-intro">
                            Compared with many other luxury river cruise lines, Riverside
                            emphasizes a different set of priorities.
                        </p>
                    </div>

                    <div className="adg-c-overview-layout">
                        <div className="adg-c-overview-icons">
                            {[
                                "Larger accommodations",
                                "Boutique atmosphere",
                                "Personalized service",
                                "Elegant interiors",
                                "Relaxed luxury",
                                "Fewer guests",
                                "Exceptional cuisine",
                            ].map((label, i) => (
                                <div key={i} className="adg-c-overview-item">
                                    <span className="adg-c-overview-icon">
                                        <Sparkles size={16} strokeWidth={2.5} />
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
                                        The result is an experience that feels more like staying
                                        at a luxury boutique hotel than a traditional cruise.
                                    </p>
                                </div>
                            </div>

                            <div className="adg-c-overview-image-wrap" style={{ height: '310px' }}>
                                <img
                                    //   src={HeroImage1}
                                    alt="Boutique atmosphere aboard Riverside Luxury Cruises"
                                    className="adg-c-overview-img"
                                />

                                <div className="adg-c-overview-img-overlay">
                                    <span className="adg-c-overview-img-label">
                                        Boutique • Personalized • Elegant
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHICH SHIP SHOULD YOU CHOOSE ────────────────────────────── */}
            <section className="adg-section" id="riverside-fleet" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Which Ship Should You Choose?</h2>

                        <div className="adg-accent-line"></div>

                        <p className="adg-intro">
                            Riverside's boutique fleet of three ships is closely matched to
                            its signature rivers, each offering the same commitment to
                            luxury.
                        </p>
                    </div>

                    <div className="adgs-grid">
                        {fleetData.map((ship) => (
                            <div key={ship.key} className="adg-card">
                                <div className="adg-card-image-wrap">
                                    <img
                                        src={ship.image}
                                        alt={ship.imageAlt}
                                        className="adg-card-img"
                                    />

                                    <div className="adg-card-image-overlay"></div>

                                    <div className="adg-card-eyebrow-wrap">
                                        <span className="adg-card-eyebrow-icon">
                                            <Ship size={20} strokeWidth={1.6} />
                                        </span>
                                        <span className="adg-card-eyebrow-label">
                                            {ship.tagline}
                                        </span>
                                    </div>
                                </div>

                                <div className="adg-card-body">
                                    <h3 className="adg-card-title">{ship.name}</h3>

                                    <p style={{ marginBottom: "12px", color: 'var(--navy)' }}>{ship.desc}</p>

                                    <span
                                        style={{
                                            fontSize: "13px",
                                            fontWeight: 600,
                                            textTransform: "uppercase",
                                            letterSpacing: "0.03em",
                                            opacity: 0.7,
                                        }}
                                    >
                                        Best For:
                                    </span>

                                    <ul className="adg-card-list">
                                        {ship.items.map((point, idx) => (
                                            <li key={idx} className="adg-card-list-item">
                                                <span className="adg-card-list-dot"></span>
                                                <span className="adg-card-list-text">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="adg-card-bar"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* ── IS RIVERSIDE WORTH THE PRICE ─────────────────────────────── */}
            <section
                className="rlc-lc-worth-section"
                id="is-riverside-worth-the-price"
            >
                <div className="rlc-lc-worth-container">
                    <div className="rlc-lc-worth-grid">
                        <div className="rlc-lc-worth-content">
                            <h2 className="rlc-lc-worth-title">
                                Is Riverside Worth the Price?
                            </h2>

                            <div className="rlc-lc-worth-accent"></div>

                            <p className="rlc-lc-worth-lead">
                                For travelers who appreciate luxury accommodations, fine
                                dining, boutique hospitality, scenic European travel, and
                                personalized service, Riverside offers excellent value.
                            </p>

                            <h3 className="rlc-lc-worth-emphasis-title">
                                Guests consistently praise:
                            </h3>

                            <div className="rlc-lc-worth-emphasis-grid">
                                {[
                                    "Luxury accommodations",
                                    "Fine dining",
                                    "Boutique hospitality",
                                    "Scenic European travel",
                                    "Personalized service",
                                ].map((item, idx) => (
                                    <div key={idx} className="rlc-lc-worth-emphasis-item">
                                        <span className="rlc-lc-worth-emphasis-icon">
                                            <Check size={16} strokeWidth={3} />
                                        </span>
                                        <span className="rlc-lc-worth-emphasis-label">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="rlc-lc-worth-conclusion-box">
                                <p className="rlc-lc-worth-conclusion-text">
                                    Rather than focusing on onboard entertainment, Riverside
                                    invests in spacious suites, exceptional cuisine, and
                                    unforgettable destinations.
                                </p>
                            </div>

                            <div
                                className="rlc-page-cta-container rlc-align-left"
                                style={{ marginTop: "24px" }}
                            >
                                <Link
                                    to="/contact"
                                    className="rlc-page-cta-btn"
                                    style={{ textDecoration: "none" }}
                                >
                                    Start Planning Your Riverside Cruise
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>

                        <div className="rlc-lc-worth-media">
                            <div className="rlc-lc-worth-media-wrapper">
                                <img
                                    // src={WorthItImage}
                                    alt="Elegant evening lounge aboard Riverside Luxury Cruises"
                                    className="rlc-lc-worth-media-img"
                                />
                                <div className="rlc-lc-worth-media-overlay"></div>

                                <div className="rlc-lc-worth-media-badge">
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
                            Personalized Itinerary Planning
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
                                Choose the Right Itinerary the First Time
                            </h3>

                            <p className="Avr-planning-left-body">
                                A luxury travel advisor can help you compare itineraries,
                                choose the right ship, and select the best suite, while
                                coordinating flights, hotels, transfers, and excursions—so
                                the itinerary you choose fits your interests and travel
                                style.
                            </p>

                            <div className="Avr-planning-alert">
                                <ShieldCheck size={18} className="Avr-planning-alert-icon" />

                                <p className="Avr-planning-alert-text">
                                    Expert guidance helps ensure you choose the itinerary
                                    that best fits your interests and travel style.
                                </p>
                            </div>
                        </div>

                        <div className="Avr-planning-right">
                            <p className="Avr-planning-right-intro">
                                A luxury travel advisor can help you:
                            </p>

                            <div className="Avr-planning-benefits-grid">
                                {[
                                    { icon: <MapPinned size={18} />, label: "Compare itineraries" },
                                    { icon: <Ship size={18} />, label: "Choose the right ship" },
                                    { icon: <Home size={18} />, label: "Select the best suite" },
                                    { icon: <Plane size={18} />, label: "Coordinate flights" },
                                    { icon: <Hotel size={18} />, label: "Arrange hotels" },
                                    { icon: <Anchor size={18} />, label: "Plan private transfers" },
                                    { icon: <Compass size={18} />, label: "Recommend excursions" },
                                    { icon: <BadgePercent size={18} />, label: "Explain promotions" },
                                    { icon: <Globe size={18} />, label: "Provide ongoing travel support" },
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
                                Expert guidance helps ensure you choose the itinerary that
                                best fits your interests and travel style.
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
                            Everything travelers need to know about choosing the best
                            Riverside Luxury Cruises itinerary.
                        </p>
                    </div>
                    <FAQ />
                </div>
            </section>

            {/* ── CTA / FINAL VERDICT ────────────────────────────────────────── */}
            <section className="Asc-help-section">
                <div className="Asc-help-bg-wrap">
                    <img
                        // src={CTAImage}
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
                                    Which Riverside Cruise is Best?
                                </h2>
                                <div className="Asc-help-accent"></div>
                            </div>

                            <div className="Asc-help-grid">
                                <div className="Asc-help-info">
                                    <p className="Asc-help-intro">
                                        The best Riverside cruise depends on the experience
                                        you're looking for. Choose the Danube for iconic
                                        cities, imperial history, and a perfect first river
                                        cruise. Choose the Rhine for castles, vineyards, and
                                        breathtaking scenery.
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
                                                Choose the Rhône for gourmet cuisine, wine, and
                                                the charm of southern France. Choose a Christmas
                                                Market Cruise for festive traditions and seasonal
                                                magic, or a Tulip Cruise for colorful spring
                                                landscapes and Dutch culture. No matter which
                                                itinerary you select, Riverside delivers spacious
                                                accommodations, refined dining, and personalized
                                                service in an elegant boutique setting.
                                            </p>
                                            <br />
                                            <p className="Asc-help-intro">
                                                At Trips &amp; Ships Luxury Travel, we'll help you
                                                compare itineraries, choose the ideal ship and
                                                suite, and create a customized Riverside Luxury
                                                Cruises vacation tailored to your travel goals.
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
                                            "Choose the ideal ship and suite",
                                            "Explain promotions",
                                            "Coordinate flights",
                                            "Arrange hotel stays",
                                            "Organize private transfers",
                                            "Recommend excursions",
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

export default BestRiversideCruises;