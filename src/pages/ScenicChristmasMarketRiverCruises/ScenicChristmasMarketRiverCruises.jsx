import { useState } from "react";
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
    Calendar,
    Landmark,
    X,
    FileText,
    Wallet,
    BadgePercent,
    Leaf,
    Wine,
    Utensils,
    CheckCircle,
    Heart,
    Snowflake,
    Gift,
    Music,
    Thermometer,
    ShoppingBag,
    Umbrella,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

/* ── Placeholder image imports ────────────────────────────────────
   Replace these with real Scenic Christmas Market photography once
   available. Paths assume a new /assets/ScenicChristmasMarkets folder. */
// import HeroImage from "../../assets/ScenicChristmasMarkets/scenic-christmas-hero.jpg";
// import DiningImage from "../../assets/ScenicChristmasMarkets/scenic-christmas-dining.jpg";
// import MarketImage from "../../assets/ScenicChristmasMarkets/scenic-christmas-market.jpg";
// import ExcursionImage from "../../assets/ScenicChristmasMarkets/scenic-christmas-excursion.jpg";

import { Helmet } from "react-helmet-async";
import "../RiversideLuxuryCruisesReviews/RiversideLuxuryCruisesReviews.css";
import "../RiversideLuxuryCruises/RiversideLuxuryCruises.css";
import "../ScenicRiverCruises/ScenicRiverCruises.css";
import "../UniversityGroupTravelPlanning/UniversityGroupTravelPlanning.css";
import "../VikingCruises/VikingCruises.css";
import "../AzamaraDiningGuide/AzamaraDiningGuide.css";
import "../DisneyCruisevsVikingOcean/DisneyCruisevsVikingOcean.css";

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
            "@id": "https://tripsandships.com/scenic-river-cruises/christmas-markets/#webpage",
            name: "Scenic Christmas Market River Cruises (2026)",
            url: "https://tripsandships.com/scenic-river-cruises/christmas-markets",
            description:
                "Experience Europe's magical Christmas markets on a Scenic River Cruise. Discover the best itineraries, destinations, costs, what's included, and expert tips for planning your holiday river cruise.",
        },
        {
            "@type": "Article",
            "@id": "https://tripsandships.com/scenic-river-cruises/christmas-markets/#article",
            headline: "Scenic Christmas Market River Cruises",
            description:
                "A complete guide to Scenic Christmas Market River Cruises, including the best Rhine and Danube itineraries, what's included, packing tips, and how to plan your holiday river cruise.",
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
            "@id": "https://tripsandships.com/scenic-river-cruises/christmas-markets/#breadcrumb",
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
                    name: "Riverside Luxury Cruises",
                    item: "https://tripsandships.com/riverside-luxury-cruises",
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: "Scenic River Cruises",
                    item: "https://tripsandships.com/scenic-river-cruises",
                },
                {
                    "@type": "ListItem",
                    position: 4,
                    name: "Scenic Christmas Market River Cruises",
                    item: "https://tripsandships.com/scenic-river-cruises/christmas-markets",
                },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://tripsandships.com/scenic-river-cruises/christmas-markets/#itemlist",
            name: "Scenic Christmas Market River Cruises — What This Guide Covers",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Quick Answer" },
                { "@type": "ListItem", position: 2, name: "Why Choose a Scenic Christmas Market Cruise?" },
                { "@type": "ListItem", position: 3, name: "Best Scenic Christmas Market Itineraries" },
                { "@type": "ListItem", position: 4, name: "What Makes European Christmas Markets Special?" },
                { "@type": "ListItem", position: 5, name: "Scenic Enrich & Scenic Freechoice Experiences" },
                { "@type": "ListItem", position: 6, name: "Christmas Dining Onboard" },
                { "@type": "ListItem", position: 7, name: "What Should You Pack? Is It Cold?" },
                { "@type": "ListItem", position: 8, name: "Who Should Take a Scenic Christmas Market Cruise?" },
                { "@type": "ListItem", position: 9, name: "Common Booking Mistakes" },
                { "@type": "ListItem", position: 10, name: "Scenic vs Other Christmas Market River Cruises" },
                { "@type": "ListItem", position: 11, name: "Why Book Through a Luxury Travel Advisor?" },
                { "@type": "ListItem", position: 12, name: "Final Verdict" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://tripsandships.com/scenic-river-cruises/christmas-markets/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Are Scenic Christmas Market cruises worth it?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. They combine luxury accommodations, multiple European Christmas markets, included excursions, and all-inclusive amenities into one seamless vacation.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which Scenic Christmas Market itinerary is best?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The Rhine River is generally considered the best option for first-time visitors thanks to its famous German Christmas markets and picturesque towns.",
                    },
                },
                {
                    "@type": "Question",
                    name: "When do Scenic Christmas Market cruises operate?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Most departures take place from late November through December during the European Christmas Market season.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are Christmas Market excursions included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Many guided tours and Scenic Freechoice excursions are included, though optional activities may also be available.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What should I wear?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Pack warm winter clothing including a heavy coat, gloves, hat, waterproof footwear, and thermal layers.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are drinks included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Scenic includes premium wines, beer, spirits, soft drinks, coffee, tea, and bottled water on most sailings.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Christmas dinner included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Scenic typically offers festive seasonal menus and special holiday dining experiences during Christmas Market cruises.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is the cruise suitable for families?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, especially for multigenerational families with teenagers and adult children. The cultural focus is generally less suitable for very young children.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How far in advance should I book?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Booking 9–15 months in advance is recommended because Christmas Market sailings often sell out early.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can I extend my vacation before or after the cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Many travelers add hotel stays in cities such as Amsterdam, Basel, Budapest, or Vienna before or after their cruise.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is travel insurance recommended?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Winter weather and international travel make comprehensive travel insurance a smart investment.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I book through a travel advisor?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. A luxury travel advisor can help you compare itineraries, secure preferred suites, coordinate flights and transfers, and access current Scenic promotions.",
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
            q: "Are Scenic Christmas Market cruises worth it?",
            a: "Yes. They combine luxury accommodations, multiple European Christmas markets, included excursions, and all-inclusive amenities into one seamless vacation.",
        },
        {
            q: "Which Scenic Christmas Market itinerary is best?",
            a: "The Rhine River is generally considered the best option for first-time visitors thanks to its famous German Christmas markets and picturesque towns.",
        },
        {
            q: "When do Scenic Christmas Market cruises operate?",
            a: "Most departures take place from late November through December during the European Christmas Market season.",
        },
        {
            q: "Are Christmas Market excursions included?",
            a: "Many guided tours and Scenic Freechoice excursions are included, though optional activities may also be available.",
        },
        {
            q: "What should I wear?",
            a: "Pack warm winter clothing including a heavy coat, gloves, hat, waterproof footwear, and thermal layers.",
        },
        {
            q: "Are drinks included?",
            a: "Yes. Scenic includes premium wines, beer, spirits, soft drinks, coffee, tea, and bottled water on most sailings.",
        },
        {
            q: "Is Christmas dinner included?",
            a: "Yes. Scenic typically offers festive seasonal menus and special holiday dining experiences during Christmas Market cruises.",
        },
        {
            q: "Is the cruise suitable for families?",
            a: "Yes, especially for multigenerational families with teenagers and adult children. The cultural focus is generally less suitable for very young children.",
        },
        {
            q: "How far in advance should I book?",
            a: "Booking 9–15 months in advance is recommended because Christmas Market sailings often sell out early.",
        },
        {
            q: "Can I extend my vacation before or after the cruise?",
            a: "Yes. Many travelers add hotel stays in cities such as Amsterdam, Basel, Budapest, or Vienna before or after their cruise.",
        },
        {
            q: "Is travel insurance recommended?",
            a: "Yes. Winter weather and international travel make comprehensive travel insurance a smart investment.",
        },
        {
            q: "Should I book through a travel advisor?",
            a: "Yes. A luxury travel advisor can help you compare itineraries, secure preferred suites, coordinate flights and transfers, and access current Scenic promotions.",
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

/* ── Quick Answer Emphasis Data ────────────────────────────────────── */
const quickAnswerEmphasis = [
    "Christmas Markets included in daily itineraries",
    "Scenic Freechoice excursions",
    "Gourmet holiday dining",
    "Premium beverages included",
    "Butler service",
    "Luxury accommodations",
];

/* ── Best Scenic Christmas Market Itineraries Data ─────────────────── */
const christmasItineraries = [
    {
        id: "rhine-river",
        title: "Rhine Christmas Market Cruise — Best Overall",
        badge: "Rhine River",
        icon: Compass,
        desc: "The Rhine is Scenic's most popular Christmas Market itinerary, offering the classic European Christmas experience for first-time visitors.",
        columns: [
            {
                label: "Highlights often include:",
                items: [
                    "Amsterdam",
                    "Cologne",
                    "Koblenz",
                    "Rüdesheim",
                    "Strasbourg",
                    "Basel"
                ],
            },
            {
                label: "Expect:",
                items: [
                    "Medieval squares",
                    "Gothic cathedrals",
                    "Historic castles",
                    "Germany's famous Christmas markets",
                    "Alsatian holiday traditions"
                ],
            },
        ],
    },
    {
        id: "danube-river",
        title: "Danube Christmas Market Cruise",
        badge: "Danube River",
        icon: Ship,
        desc: "The Danube combines festive traditions with imperial cities, and is ideal for travelers interested in history, music, and architecture.",
        columns: [
            {
                label: "Typical highlights include:",
                items: [
                    "Budapest",
                    "Bratislava",
                    "Vienna",
                    "Melk",
                    "Passau"
                ],
            },
            {
                label: "Visitors can enjoy:",
                items: [
                    "Austrian Christmas villages",
                    "Classical concerts",
                    "Handmade ornaments",
                    "Traditional pastries",
                    "Elegant holiday decorations"
                ],
            },
        ],
    },
];

/* ── What Makes European Christmas Markets Special Data ────────────── */
const marketHighlights = [
    "Handmade ornaments",
    "Local crafts",
    "Wooden toys",
    "Artisan gifts",
    "Gingerbread",
    "Mulled wine (Glühwein)",
    "Holiday concerts",
    "Regional foods",
    "Christmas lights",
    "Historic town squares",
];

/* ── Packing List Data ──────────────────────────────────────────────── */
const packingList = [
    "Winter coat",
    "Gloves",
    "Warm hat",
    "Waterproof boots",
    "Thermal layers",
    "Scarf",
    "Comfortable walking shoes",
    "Umbrella",
];

/* ── Common Booking Mistakes Data ──────────────────────────────────── */
const commonMistakes = [
    "Waiting too long to book",
    "Arriving on embarkation day after an international flight",
    "Packing light jackets instead of winter clothing",
    "Underestimating walking distances",
    "Forgetting travel insurance",
    "Missing Christmas Market closing dates in late December",
];

/* ── Scenic vs Other Christmas Market Cruise Lines Data ─────────────── */
const comparisonData = [
    { key: "scenic", scenic: "Scenic", ocean: "Ultra-luxury, butler service, premium drinks included" },
    { key: "viking", scenic: "Viking", ocean: "Destination-focused with Scandinavian style" },
    { key: "amawaterways", scenic: "AmaWaterways", ocean: "Festive onboard atmosphere and active excursions" },
    { key: "uniworld", scenic: "Uniworld", ocean: "Boutique luxury and beautifully decorated ships" },
    { key: "riverside", scenic: "Riverside", ocean: "Residential-style luxury with spacious suites" },
    { key: "tauck", scenic: "Tauck", ocean: "Highly inclusive guided holiday experiences" },
];

/* ── Who Should Take a Scenic Christmas Market Cruise Data ─────────── */
const whoShouldGo = [
    { title: "Couples", icon: <Heart size={20} /> },
    { title: "Empty nesters", icon: <Home size={20} /> },
    { title: "Retirees", icon: <Users size={20} /> },
    { title: "Luxury travelers", icon: <Sparkles size={20} /> },
    { title: "First-time river cruisers", icon: <Compass size={20} /> },
    { title: "Holiday enthusiasts", icon: <Gift size={20} /> },
    { title: "Food and wine lovers", icon: <Wine size={20} /> },
    { title: "Multigenerational families with older children", icon: <Award size={20} /> },
];

/* ── Main Component ──────────────────────────────────────────────── */
const ScenicChristmasMarketRiverCruises = () => {
    const [readMore, setReadMore] = useState(false);
    const [readMoreVerdict, setReadMoreVerdict] = useState(false);
    const [activeItinerary, setActiveItinerary] = useState("rhine-river");

    const currentItinerary =
        christmasItineraries.find((f) => f.id === activeItinerary) || christmasItineraries[0];
    const ActiveItineraryIcon = currentItinerary.icon;

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Scenic Christmas Market River Cruises  | Best European Holiday Cruises</title>
                <meta name="title" content="Scenic Christmas Market River Cruises | Complete Guide" />
                <meta
                    name="description"
                    content="Experience Europe's magical Christmas markets on a Scenic River Cruise. Discover the best itineraries, destinations, costs, what's included, and expert tips for planning your holiday river cruise."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ───────────────────────────────────────────────────── */}
            <section className="Scenic_hero_section">
                <div className="Scenic_hero_overlay"></div>

                <div className="Scenic_hero_content">
                    <h1>Scenic Christmas Market <br /> River Cruises</h1>

                    <p>
                        There's something unforgettable about Europe during
                        the holiday season. Medieval town squares glow
                        beneath thousands of twinkling lights, the aroma of
                        roasted chestnuts and mulled wine fills the air, and
                        centuries-old Christmas traditions come alive in
                        castles, cathedrals, and charming riverside
                        villages.
                    </p>

                    {readMore && (
                        <p>
                            A Scenic Christmas Market River Cruise combines
                            these magical experiences with the comfort of an
                            all-inclusive luxury ship. Instead of changing
                            hotels and navigating busy train stations,
                            you'll unpack once and wake up each morning in a
                            new festive destination. Whether you're dreaming
                            of Germany's famous Christmas markets, Austria's
                            elegant holiday traditions, or the fairytale
                            villages along the Rhine and Danube, Scenic
                            offers one of the most relaxing and luxurious
                            ways to experience Europe's most enchanting
                            season.
                        </p>
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
                            Start Planning Your Christmas Market Cruise
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── QUICK ANSWER ───────────────────────────────────────────── */}
            <section className="rlc-qa-section" id="quick-answer" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="rlc-qa-container">
                    <div className="rlc-qa-card-wrapper">
                        <h2 className="rlc-qa-title">Christmas Market Cruises: The Quick Answer</h2>
                        <div className="rlc-qa-accent"></div>

                        <p className="rlc-qa-intro">
                            If you're short on time — best for couples,
                            retirees, luxury travelers, and multigenerational
                            families, sailing the Rhine or Danube:
                        </p>

                        <ul className="rlc-qa-list">
                            {quickAnswerEmphasis.map((item, i) => (
                                <li key={i} className="rlc-qa-item">
                                    <span className="rlc-qa-icon-wrap">
                                        <Check size={16} strokeWidth={2.5} className="rlc-qa-check-icon" />
                                    </span>
                                    <span className="rlc-qa-text">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="rlc-qa-outro">
                            Our Recommendation: Book 9–15 months in advance.
                            Christmas Market sailings are among Scenic's
                            most popular departures and often sell out
                            early.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── WHY CHOOSE A SCENIC CHRISTMAS MARKET CRUISE? ──────────────── */}
            <section className="rlc-lc-worth-section" id="why-choose-christmas-cruise">
                <div className="rlc-lc-worth-container">
                    <div className="rlc-lc-worth-grid">
                        <div className="rlc-lc-worth-content">
                            <h2 className="rlc-lc-worth-title">Why Choose a Scenic Christmas Market Cruise?</h2>

                            <div className="rlc-lc-worth-accent"></div>

                            <p className="rlc-lc-worth-lead">
                                Instead of spending hours traveling between
                                cities, Scenic allows you to experience
                                multiple Christmas markets while enjoying
                                the comfort of your floating luxury hotel.
                                Benefits include:
                            </p>

                            <div className="rlc-lc-worth-emphasis-grid">
                                {[
                                    "Visit several countries in one vacation",
                                    "Unpack only once",
                                    "Luxury all-inclusive experience",
                                    "Smaller ships with fewer guests",
                                    "Included guided excursions",
                                    "Butler service",
                                    "Gourmet holiday dining",
                                    "Premium drinks included",
                                    "Stress-free transportation",
                                ].map((item, idx) => (
                                    <div key={idx} className="rlc-lc-worth-emphasis-item">
                                        <span className="rlc-lc-worth-emphasis-icon">
                                            <Check size={16} strokeWidth={2.5} />
                                        </span>
                                        <span className="rlc-lc-worth-emphasis-label">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="rlc-lc-worth-conclusion-box">
                                <p className="rlc-lc-worth-conclusion-text">
                                    Everything is designed so you can focus
                                    on enjoying the festive atmosphere
                                    rather than worrying about logistics.
                                </p>
                            </div>
                        </div>

                        <div className="rlc-lc-worth-media">
                            <div className="rlc-lc-worth-media-wrapper">
                                <img
                                    // src={MarketImage}
                                    alt="Illuminated European Christmas market visited on a Scenic river cruise"
                                    className="rlc-lc-worth-media-img"
                                />
                                <div className="rlc-lc-worth-media-overlay"></div>

                                <div className="rlc-lc-worth-media-badge">
                                    <span>Holiday Travel • Made Effortless</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
 
            {/* ── INLINE CTA 1 ────────────────────────────────────────────── */}
            <section className="scenic-inline-cta-section-dark">
                <div className="scenic-inline-cta-container-dark">
                    <div className="scenic-inline-cta-content-dark">
                        <h3 className="scenic-inline-cta-title-dark">Dreaming of Europe's Christmas Markets?</h3>
                        <p className="scenic-inline-cta-text-dark">
                            Christmas Market sailings sell out early — let us help you secure the best suite and departure date.
                        </p>
                    </div>
                    <div className="scenic-inline-cta-action-dark">
                        <Link to="/contact" className="scenic-inline-cta-btn-dark" style={{ textDecoration: "none" }}>
                            Get a Custom Quote
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── BEST SCENIC CHRISTMAS MARKET ITINERARIES ──────────────────── */}
            <section className="luc-destinations-section" id="christmas-itineraries">
                <div className="luc-destinations-container">
                    <div className="luc-destinations-header">
                        <h2 className="luc-destinations-title">Best Scenic Christmas Market Itineraries</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="luc-destinations-intro">
                            Scenic's two signature Christmas Market
                            itineraries each offer a distinct holiday
                            experience along the Rhine and Danube rivers.
                        </p>
                    </div>

                    <div className="luc-dest-layout">
                        <nav className="luc-dest-nav">
                            {christmasItineraries.map((item) => {
                                const NavIcon = item.icon;
                                const isActive = activeItinerary === item.id;

                                return (
                                    <button
                                        key={item.id}
                                        className={`luc-dest-nav-btn ${isActive ? "luc-dest-nav-btn--active" : ""}`}
                                        onClick={() => setActiveItinerary(item.id)}
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

                        <div className="luc-dest-panel" key={activeItinerary}>
                            <div className="luc-dest-img-wrap" style={{ background: "radial-gradient(circle at center, var(--bg-dark2) 0%, var(--bg-dark) 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                <ActiveItineraryIcon size={48} style={{ color: "rgba(255, 255, 255, 0.4)", marginBottom: "40px" }} strokeWidth={1.2} />
                                <div className="luc-dest-img-overlay">
                                    <div className="luc-dest-img-icon">
                                        <ActiveItineraryIcon size={22} strokeWidth={1.6} />
                                    </div>
                                    <span className="luc-dest-img-title">{currentItinerary.title}</span>
                                </div>
                            </div>

                            {currentItinerary.desc && (
                                <p className="luc-dest-panel-desc">{currentItinerary.desc}</p>
                            )}

                            <div className="luc-dest-columns">
                                {currentItinerary.columns.map((col, cIdx) => (
                                    <div key={cIdx} className="luc-dest-info-col">
                                        <span className="luc-dest-info-label">{col.label}</span>
                                        <div className="luc-dest-items-grid">
                                            {col.items.map((bullet, bIdx) => (
                                                <div key={bIdx} className="luc-dest-item">
                                                    <div className="luc-dest-item-dot"></div>
                                                    <span className="luc-dest-item-text">{bullet}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHAT MAKES EUROPEAN CHRISTMAS MARKETS SPECIAL? ────────────── */}
            <section className="adg-c-section adg-c-bg-white" id="christmas-market-highlights" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="adg-c-container">
                    <div className="adg-c-section-header">
                        <h2 className="adg-c-h2">What Makes European Christmas Markets Special?</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="Asc-section-intro">
                            Each market has its own unique character, but
                            you'll often discover the same beloved holiday
                            traditions. Rather than modern shopping
                            centers, these markets celebrate centuries-old
                            holiday traditions.
                        </p>
                    </div>

                    <div className="adg-c-overview-layout">
                        <div className="adg-c-overview-icons">
                            {marketHighlights.map((label, i) => (
                                <div key={i} className="adg-c-overview-item">
                                    <span className="adg-c-overview-icon">
                                        <Snowflake size={16} strokeWidth={2.5} />
                                    </span>
                                    <span className="adg-c-overview-label">
                                        {label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="adg-c-overview-right">
                            <div className="adg-c-overview-callout">
                                <div className="adg-c-overview-callout-inner">
                                    <Gift
                                        size={28}
                                        className="adg-c-callout-star"
                                    />
                                    <p className="adg-c-callout-text">
                                        From gingerbread and Glühwein to
                                        handcrafted gifts, each town square
                                        offers its own festive charm.
                                    </p>
                                </div>
                            </div>

                            <div className="adg-c-overview-image-wrap" style={{ background: "radial-gradient(circle at center, var(--bg-dark2) 0%, var(--bg-dark) 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", border: "1px solid var(--navy-border)", borderRadius: "var(--radius-lg)", height: '60vh' }}>
                                <Landmark size={48} style={{ color: "rgba(255, 255, 255, 0.4)", marginBottom: "16px" }} strokeWidth={1.2} />
                                <div className="adg-c-overview-img-overlay">
                                    <span className="adg-c-overview-img-label">
                                        Historic Town Squares
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SCENIC ENRICH & SCENIC FREECHOICE EXPERIENCES ──────────────── */}
            <section
                className="dve-winner-section"
                id="freechoice-enrich-dining"
                style={{ backgroundColor: "var(--bg-white)" }}
            >
                <div className="dve-container">
                    <div className="dve-section-header">
                        <h2 className="dve-section-title">
                            Scenic Enrich &amp; Scenic Freechoice Experiences
                        </h2>
                        <div className="dve-section-accent"></div>
                        <p className="dve-section-subtitle">
                            Many Christmas Market itineraries include Scenic's signature experiences.
                        </p>
                    </div>

                    <div className="dve-winner-grid">
                        {/* Scenic Freechoice */}
                        <div className="dve-winner-card dve-disney-winner">
                            <div className="dve-winner-image-wrap" style={{ background: "radial-gradient(circle at center, var(--bg-dark2) 0%, var(--bg-dark) 100%)", display: "flex", alignItems: "center", justifyContent: "center", height: "200px" }}>
                                <Compass size={40} style={{ color: "rgba(255, 255, 255, 0.4)" }} strokeWidth={1.2} />
                                <span className="dve-winner-badge">
                                    Scenic Freechoice
                                </span>
                            </div>

                            <div className="dve-winner-content">
                                <h3 className="dve-winner-title">
                                    Scenic Freechoice
                                </h3>

                                <p className="dve-winner-intro">
                                    Choose from activities such as:
                                </p>

                                <div className="dve-winner-divider"></div>

                                <ul className="dve-advantages-list" style={{ marginTop: "20px" }}>
                                    {[
                                        "Guided city walks",
                                        "Museum visits",
                                        "Castle tours",
                                        "Culinary experiences",
                                        "Christmas market tours",
                                    ].map((item, i) => (
                                        <li key={i}>
                                            <CheckCircle size={16} strokeWidth={2.5} className="dve-advantage-icon" style={{ color: "var(--navy)" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Scenic Enrich */}
                        <div className="dve-winner-card dve-viking-winner">
                            <div className="dve-winner-image-wrap" style={{ background: "radial-gradient(circle at center, var(--bg-dark2) 0%, var(--bg-dark) 100%)", display: "flex", alignItems: "center", justifyContent: "center", height: "200px" }}>
                                <Sparkles size={40} style={{ color: "rgba(255, 255, 255, 0.4)" }} strokeWidth={1.2} />
                                <span className="dve-winner-badge">
                                    Scenic Enrich
                                </span>
                            </div>

                            <div className="dve-winner-content">
                                <h3 className="dve-winner-title">
                                    Scenic Enrich
                                </h3>

                                <p className="dve-winner-intro">
                                    Depending on your itinerary, you may enjoy exclusive events such as:
                                </p>

                                <div className="dve-winner-divider"></div>

                                <ul className="dve-advantages-list" style={{ marginTop: "20px" }}>
                                    {[
                                        "Private classical concerts",
                                        "Historic venue experiences",
                                        "Cultural performances",
                                        "Evening holiday celebrations",
                                    ].map((item, i) => (
                                        <li key={i}>
                                            <CheckCircle size={16} strokeWidth={2.5} className="dve-advantage-icon" style={{ color: "var(--navy)" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                    
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
            {/* ── INLINE CTA 2 ────────────────────────────────────────────── */}
            <section className="scenic-inline-cta-section-light" style={{ backgroundColor: 'var(--bg-soft)' }}>
                <div className="scenic-inline-cta-container-light">
                    <div className="scenic-inline-cta-card-light">
                        <div className="scenic-inline-cta-content-light">
                            <span className="scenic-inline-cta-eyebrow-light">Pack Smart, Travel Warm</span>
                            <h3 className="scenic-inline-cta-title-light">Prepare for the European Winter</h3>
                            <p className="scenic-inline-cta-text-light">
                                European Christmas Market cruises are cold, particularly in December. Most markets involve walking on cobblestone streets, so comfortable footwear is essential.
                            </p>
                            <Link to="/contact" className="scenic-inline-cta-btn-light" style={{ textDecoration: "none" }}>
                                Contact Angela Hughes
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                        <div className="scenic-inline-cta-visual-light">
                            <div className="scenic-inline-cta-badge-light">40+ Years Experience</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CHRISTMAS DINING ONBOARD ─────────────────────────────────── */}
            <section className="scenic-dining-section" id="christmas-dining" style={{ backgroundColor: 'var(--bg-white)' }}>
                <div className="scenic-dining-container">
                    <div className="scenic-dining-grid">
                        <div className="scenic-dining-content">
                            <h2 className="scenic-dining-title">Christmas Dining Onboard</h2>
                            <div className="scenic-dining-accent"></div>
                            
                            <p className="scenic-dining-intro">
                                Scenic embraces the festive season throughout the voyage.
                            </p>

                            <div className="scenic-dining-highlights">
                                <h3>Expect:</h3>
                                <ul className="scenic-dining-list">
                                    {[
                                        "Seasonal menus",
                                        "Holiday desserts",
                                        "Regional specialties",
                                        "Festive decorations",
                                        "Premium wines",
                                        "Elegant dinners",
                                        "Traditional Christmas flavors",
                                    ].map((item, index) => (
                                        <li key={index} className="scenic-dining-item">
                                            <CheckCircle size={18} className="scenic-dining-item-icon" style={{ color: "var(--navy)" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <p className="scenic-dining-outro">
                                Meals become an extension of the destinations you're visiting.
                            </p>
                        </div>

                        <div className="scenic-dining-image-wrap">
                            <div className="scenic-dining-image-frame" style={{ background: "radial-gradient(circle at center, var(--bg-dark2) 0%, var(--bg-dark) 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "360px", border: "1px solid var(--navy-border)", borderRadius: "var(--radius-lg)" }}>
                                <Utensils size={64} style={{ color: "rgba(255, 255, 255, 0.4)", marginBottom: "20px" }} strokeWidth={1.2} />
                                <span style={{ fontFamily: "var(--font-display)", color: "rgba(255, 255, 255, 0.6)", fontSize: "14px", textTransform: "uppercase", letterSpacing: "2px" }}>
                                    Festive Holiday Dining
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

                    {/* ── WHO SHOULD TAKE A SCENIC CHRISTMAS MARKET CRUISE? ──────────── */}
            <section className="adg-section" style={{ backgroundColor: 'var(--bg-soft)' }} id="who-should-go">
                <div className="adg-container">
                    <div className="adg-section-header" style={{ marginBottom: "60px" }}>
                        <h2 className="adg-h2">Who Should Take a Scenic Christmas Market Cruise?</h2>
                        <div className="Asc-accent-line"></div>
                    </div>

                    <div
                        className="adg-split-layout"
                        style={{ alignItems: "flex-start" }}
                    >
                        <div className="adg-content-card-side">
                            <div className="adg-side-image" style={{ background: "radial-gradient(circle at center, var(--bg-dark2) 0%, var(--bg-dark) 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "560px", border: '1px solid var(--navy-border)', borderRadius: 'var(--radius-lg)', marginBottom: "20px" }}>
                                <Snowflake size={56} style={{ color: "rgba(255, 255, 255, 0.4)" }} strokeWidth={1.2} />
                            </div>

                            <div className="adg-info-card">
                                <div className="adg-card-meta">
                                    <Gift size={28} style={{ color: "var(--navy)" }} />
                                    <span className="adg-meta-label">
                                        Holiday Luxury River Cruising
                                    </span>
                                </div>

                                <p className="adg-card-lead">
                                    These itineraries are generally better suited to adults and teenagers than young children.
                                </p>
                            </div>
                        </div>

                        <div className="adg-list-side">
                            {whoShouldGo.map((item, i) => (
                                <div key={i} className="adg-list-item-card">
                                    <div className="adg-list-item-icon">{item.icon}</div>
                                    <h4 className="adg-list-item-label">{item.title}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* ── WHAT SHOULD YOU PACK? / IS IT COLD? ────────────────────────── */}
            <section
                className="ugt-components-section"
                id="packing-and-weather"
                style={{ backgroundColor: "var(--bg-white)" }}
            >
                <div className="ugt-components-container">
                    <div className="ugt-components-header">
                        <h2 className="ugt-components-title">What Should You Pack? Is It Cold?</h2>
                        <div className="adg-c-accent-line"></div>
                    </div>

                    <div className="ugt-components-list">
                        <div className="ugt-component-row">
                            <div className="ugt-component-image-wrapper">
                                <div className="ugt-component-image-container" style={{ background: "radial-gradient(circle at center, var(--bg-dark2) 0%, var(--bg-dark) 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "340px", border: "1px solid var(--navy-border)", borderRadius: "var(--radius-lg)" }}>
                                    <Thermometer size={64} style={{ color: "rgba(255, 255, 255, 0.4)", marginBottom: "20px" }} strokeWidth={1.2} />
                                    <span style={{ fontFamily: "var(--font-display)", color: "rgba(255, 255, 255, 0.6)", fontSize: "14px", textTransform: "uppercase", letterSpacing: "2px" }}>
                                        25–45°F (-4°C to 7°C)
                                    </span>
                                </div>
                            </div>

                            <div className="ugt-component-content">
                                <p className="ugt-component-text">
                                    Yes, it's cold. Typical daytime
                                    temperatures range between 25–45°F
                                    (-4°C to 7°C) depending on the
                                    destination and time of year. Snow is
                                    possible—but never guaranteed—which adds
                                    even more charm when it happens.
                                </p>

                                <div className="ugt-questions-box">
                                    <span className="ugt-questions-title">Recommended packing list:</span>

                                    <ul className="ugt-questions-list">
                                        {packingList.map((item, idx) => (
                                            <li key={idx} className="ugt-question-item">
                                                <CheckCircle size={16} className="ugt-question-icon" style={{ color: "var(--navy)" }} />
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

    

            {/* ── COMMON BOOKING MISTAKES ───────────────────────────────────── */}
            <section className="scenic-exclusions-section" id="common-mistakes" style={{ backgroundColor: 'var(--bg-soft)' }}>
                <div className="scenic-exclusions-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Common Booking Mistakes</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            Planning ahead helps ensure the best experience.
                            Avoid these common errors.
                        </p>
                    </div>

                    <div className="scenic-exclusions-grid">
                        {commonMistakes.map((item, i) => (
                            <div key={i} className="scenic-exclusion-card">
                                <div className="scenic-exclusion-icon-wrap">
                                    <X size={16} strokeWidth={2.5} className="scenic-exclusion-icon" />
                                </div>
                                <span className="scenic-exclusion-text">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── INLINE CTA 3 ────────────────────────────────────────────── */}
            <section className="scenic-inline-cta-section-light" style={{ backgroundColor: 'var(--bg-white)' }}>
                <div className="scenic-inline-cta-container-light">
                    <div className="scenic-inline-cta-card-light">
                        <div className="scenic-inline-cta-content-light">
                            <span className="scenic-inline-cta-eyebrow-light">Holiday Travel, Elevated</span>
                            <h3 className="scenic-inline-cta-title-light">Ready to Experience Europe's Christmas Markets?</h3>
                            <p className="scenic-inline-cta-text-light">
                                Let us help you compare the Rhine and Danube itineraries and secure the best suite for your holiday river cruise.
                            </p>
                            <Link to="/contact" className="scenic-inline-cta-btn-light" style={{ textDecoration: "none" }}>
                                Plan Your Christmas Market Cruise
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                        <div className="scenic-inline-cta-visual-light">
                            <div className="scenic-inline-cta-badge-light">Holiday Cruise Expert</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SCENIC VS OTHER CHRISTMAS MARKET RIVER CRUISES ────────────── */}
            <section className="adg-section" style={{ backgroundColor: "var(--bg-soft)" }} id="cruise-line-comparison">
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Scenic vs. Other Christmas <br /> Market River Cruises</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            Scenic stands out for combining luxurious
                            accommodations, personalized service, and
                            immersive holiday experiences.
                        </p>
                    </div>

                    <div className="Asc-table-wrapper">
                        <table className="Asc-fleet-table">
                            <thead>
                                <tr>
                                    <th>Cruise Line</th>
                                    <th>Christmas Market Experience</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonData.map((row) => (
                                    <tr key={row.key}>
                                        <td>
                                            <strong>{row.scenic}</strong>
                                        </td>
                                        <td>{row.ocean}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── WHY BOOK THROUGH A LUXURY TRAVEL ADVISOR? ────────────────── */}
            <section
                className="Avr-planning-section"
                id="why-book-through-advisor"
                style={{ backgroundColor: "var(--bg-white)" }}
            >
                <div className="Asc-container">
                    <div className="Avr-planning-heading">
                        <span className="Avr-planning-eyebrow">Personalized Trip Preparation</span>
                        <h2 className="Avr-planning-title">
                            Why Book Through a <br /> Luxury Travel Advisor?
                        </h2>

                        <div className="Avr-planning-divider"></div>
                    </div>

                    <div className="Avr-planning-grid">
                        <div className="Avr-planning-left">
                            <div className="Avr-planning-left-deco">&ldquo;</div>
                            <h3 className="Avr-planning-left-title">
                                Christmas Market Cruises Sell Out Well in Advance
                            </h3>
                            <p className="Avr-planning-left-body">
                                Christmas Market cruises are among the most
                                popular river cruise departures and often
                                sell out well in advance. A luxury travel
                                advisor can help you compare Rhine vs Danube
                                itineraries, secure preferred suite
                                categories, coordinate airfare and
                                transfers, arrange pre- and post-cruise
                                hotel stays, recommend the best departure
                                dates, explain Scenic promotions, and handle
                                travel logistics from start to finish.
                            </p>

                            <div className="Avr-planning-alert">
                                <ShieldCheck size={18} className="Avr-planning-alert-icon" />
                                <p className="Avr-planning-alert-text">
                                    Booking early through an advisor can
                                    help maximize both availability and
                                    value.
                                </p>
                            </div>
                        </div>

                        <div className="Avr-planning-right">
                            <p className="Avr-planning-right-intro">
                                A luxury travel advisor can help you:
                            </p>

                            <div className="Avr-planning-benefits-grid">
                                {[
                                    { icon: <Compass size={18} />, label: "Compare Rhine vs Danube itineraries" },
                                    { icon: <Ship size={18} />, label: "Secure preferred suite categories" },
                                    { icon: <Plane size={18} />, label: "Coordinate airfare and transfers" },
                                    { icon: <Home size={18} />, label: "Arrange pre- and post-cruise hotel stays" },
                                    { icon: <Calendar size={18} />, label: "Recommend the best departure dates" },
                                    { icon: <BadgePercent size={18} />, label: "Explain Scenic promotions" },
                                    { icon: <FileText size={18} />, label: "Handle travel logistics from start to finish" },
                                ].map((item, i) => (
                                    <div key={i} className="Avr-planning-benefit-card">
                                        <span className="Avr-planning-benefit-icon">{item.icon}</span>
                                        <span className="Avr-planning-benefit-label">{item.label}</span>
                                    </div>
                                ))}
                            </div>
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
                                <p className="Adg-expert-role">CEO of Trips &amp; Ships Luxury Travel</p>
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
                                        { icon: <Award size={16} />, label: "CEO of Trips & Ships Luxury Travel" },
                                        { icon: <Star size={16} />, label: "Over 40 years in the travel industry" },
                                        { icon: <MapPin size={16} />, label: "Traveled to more than 121 countries" },
                                        { icon: <Award size={16} />, label: "Founder of Luxury Travel University" },
                                        { icon: <Users size={16} />, label: "Global luxury travel speaker and trainer" },
                                        { icon: <Users size={16} />, label: "Weekly industry columnist" },
                                        { icon: <Users size={16} />, label: "Travel Leaders Network Advisory Board member" },
                                        { icon: <Award size={16} />, label: "2024 Luxury Travel Influencer of the Year" },
                                        {
                                            icon: <Star size={16} />,
                                            label: "Named one of the Most Influential Women in Travel in 2026 by TravelPulse",
                                        },
                                        { icon: <Award size={16} />, label: "Featured in major travel publications globally" },
                                        {
                                            icon: <Ship size={16} />,
                                            label: "Expert in luxury cruises, safaris, expeditions, river cruising, and premium travel",
                                        },
                                    ].map((item, i) => (
                                        <div className="Adg-expert-list-item" key={i}>
                                            <span className="Adg-expert-list-icon">{item.icon}</span>
                                            <span className="Adg-expert-list-label">{item.label}</span>
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
                            Everything you need to know before booking a
                            Scenic Christmas Market River Cruise.
                        </p>
                    </div>
                    <FAQ />
                </div>
            </section>

            {/* ── FINAL VERDICT / CTA ──────────────────────────────────────── */}
            <section className="Asc-help-section">
                <div className="Asc-help-bg-wrap">
                    <img
                        // src={ExcursionImage}
                        alt="Illuminated Christmas market square visited on a Scenic river cruise excursion"
                        className="Asc-help-bg-img"
                    />
                    <div className="Asc-help-overlay"></div>
                </div>

                <div className="Asc-container">
                    <div className="Asc-help-card">
                        <div className="Asc-help-content">
                            <div className="Asc-help-header">
                                <span className="Asc-help-eyebrow">Final Verdict</span>
                                <h2 className="Asc-help-h2">
                                    An Unforgettable Way to <br /> Experience Europe's Holiday Season
                                </h2>
                                <div className="Asc-help-accent"></div>
                            </div>

                            <div className="Asc-help-grid">
                                <div className="Asc-help-info">
                                    <p className="Asc-help-intro">
                                        A Scenic Christmas Market River
                                        Cruise is one of the most memorable
                                        ways to experience Europe's holiday
                                        traditions. With luxurious
                                        accommodations, exceptional dining,
                                        festive onboard celebrations, and
                                        visits to some of the continent's
                                        most iconic Christmas markets,
                                        Scenic transforms an already magical
                                        season into an unforgettable
                                        vacation.

                                        {!readMoreVerdict && (
                                            <button
                                                onClick={() => setReadMoreVerdict(true)}
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

                                    {readMoreVerdict && (
                                        <>
                                            <br />
                                            <p className="Asc-help-intro">
                                                If you've always dreamed of
                                                wandering through illuminated
                                                medieval squares while
                                                sipping mulled wine and
                                                discovering handcrafted
                                                gifts, Scenic's Rhine and
                                                Danube Christmas Market
                                                cruises belong at the top of
                                                your travel list.
                                            </p>
                                            <br />
                                            <p className="Asc-help-intro">
                                                Booking early and working
                                                with a knowledgeable travel
                                                advisor can also help you
                                                secure the best suite
                                                availability. At Trips &amp;
                                                Ships Luxury Travel, we'll
                                                help you plan every detail of
                                                your holiday Scenic cruise.
                                                <button
                                                    onClick={() => setReadMoreVerdict(false)}
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
                                            Start Planning Your Christmas Market Cruise
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
                                            "Compare Rhine vs Danube itineraries",
                                            "Secure preferred suite categories",
                                            "Coordinate airfare and transfers",
                                            "Arrange pre- and post-cruise hotel stays",
                                            "Recommend the best departure dates",
                                            "Explain Scenic promotions",
                                            "Handle travel logistics from start to finish",
                                            "Compare Scenic with other luxury lines",
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

export default ScenicChristmasMarketRiverCruises;