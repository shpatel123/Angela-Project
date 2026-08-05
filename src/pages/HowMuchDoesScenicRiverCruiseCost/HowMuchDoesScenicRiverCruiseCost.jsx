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
    Wine,
    Calendar,
    Wallet,
    Gem,
    BadgePercent,
    Landmark,
    X,
    CheckCircle,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

/* ── Placeholder image imports ────────────────────────────────────
   Replace these with real Scenic River Cruise Cost Guide photography
   once available. Paths assume a new
   /assets/ScenicRiverCruiseCostGuide folder. */
// import HeroImage from "../../assets/ScenicRiverCruiseCostGuide/scenic-cost-hero.jpg";
// import SuiteImage from "../../assets/ScenicRiverCruiseCostGuide/scenic-cost-suite.jpg";
// import DanubeImage from "../../assets/ScenicRiverCruiseCostGuide/scenic-cost-danube.jpg";
// import EveningImage from "../../assets/ScenicRiverCruiseCostGuide/scenic-cost-evening.jpg";
// import ShipImage from "../../assets/ScenicRiverCruiseCostGuide/scenic-cost-ship-exterior.jpg";

import { Helmet } from "react-helmet-async";
import "../RiversideLuxuryCruisesReviews/RiversideLuxuryCruisesReviews.css";
import "../RiversideLuxuryCruises/RiversideLuxuryCruises.css";
import "../ScenicRiverCruises/ScenicRiverCruises.css";
import "../UniversityGroupTravelPlanning/UniversityGroupTravelPlanning.css";

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
            "@id": "https://tripsandships.com/scenic-river-cruises/cost/#webpage",
            name: "How Much Does a Scenic River Cruise Cost? (2026 Pricing Guide)",
            url: "https://tripsandships.com/scenic-river-cruises/cost",
            description:
                "Wondering how much a Scenic River Cruise costs? Discover average prices by itinerary, suite type, season, and destination, plus what's included and how to save on your luxury river cruise.",
        },
        {
            "@type": "Article",
            "@id": "https://tripsandships.com/scenic-river-cruises/cost/#article",
            headline: "Scenic River Cruise Cost | Prices, What's Included & Value Guide",
            description:
                "A complete pricing guide to Scenic River Cruises covering average costs by itinerary, suite category, and season, what's included, what's not, and whether Scenic is worth the price.",
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
            "@id": "https://tripsandships.com/scenic-river-cruises/cost/#breadcrumb",
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
                    name: "How Much Does a Scenic River Cruise Cost?",
                    item: "https://tripsandships.com/scenic-river-cruises/cost",
                },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://tripsandships.com/scenic-river-cruises/cost/#itemlist",
            name: "How Much Does a Scenic River Cruise Cost? — What This Guide Covers",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Scenic River Cruise Prices: The Quick Answer" },
                { "@type": "ListItem", position: 2, name: "Scenic River Cruise Prices at a Glance" },
                { "@type": "ListItem", position: 3, name: "What Affects the Cost?" },
                { "@type": "ListItem", position: 4, name: "What's Included in the Price?" },
                { "@type": "ListItem", position: 5, name: "What's Usually NOT Included?" },
                { "@type": "ListItem", position: 6, name: "Example Budget: 7-Night Danube Cruise" },
                { "@type": "ListItem", position: 7, name: "Is Scenic Expensive?" },
                { "@type": "ListItem", position: 8, name: "Scenic vs. Other River Cruise Lines" },
                { "@type": "ListItem", position: 9, name: "When Can You Save Money?" },
                { "@type": "ListItem", position: 10, name: "Is Scenic Worth the Price?" },
                { "@type": "ListItem", position: 11, name: "Why Book Through a Luxury Travel Advisor?" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://tripsandships.com/scenic-river-cruises/cost/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "How much does a Scenic River Cruise cost?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Most 7-night cruises range from approximately $4,500 to $7,500 per person, depending on itinerary, suite category, and travel season.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are Scenic River Cruises all-inclusive?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Scenic includes luxury accommodations, butler service, premium beverages, excursions, gratuities, Wi-Fi, and many other amenities.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Why is Scenic more expensive than some other river cruise lines?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic bundles many premium services into the cruise fare, reducing the number of additional expenses during your vacation.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are drinks included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Premium wines, spirits, cocktails, beer, coffee, tea, and soft drinks are generally included.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are excursions included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Scenic Freechoice excursions and Scenic Enrich experiences are included on most itineraries.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is airfare included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "International airfare is not always included but may be available through select promotions or vacation packages.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Scenic include gratuities?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Onboard gratuities are generally included.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the cheapest time to book a Scenic River Cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Shoulder-season departures and early booking promotions often provide the best value.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Scenic worth the money?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "For travelers seeking an all-inclusive luxury river cruise with exceptional service, many guests believe Scenic offers excellent overall value.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I book through a travel advisor?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. A luxury travel advisor can help compare itineraries, explain pricing, recommend the right suite, and identify available promotions.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are laundry services included on Scenic River Cruises?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, laundry concierge services are included for all guests, with the number of complimentary pieces washed depending on your suite category (unlimited for top-tier Royal Suites).",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Scenic offer a single supplement discount for solo travelers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic occasionally runs promotions offering reduced or waived single supplements on select itineraries, though standard bookings typically include a supplement fee for solo occupancy.",
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
            q: "How much does a Scenic River Cruise cost?",
            a: "Most 7-night cruises range from approximately $4,500 to $7,500 per person, depending on itinerary, suite category, and travel season.",
        },
        {
            q: "Are Scenic River Cruises all-inclusive?",
            a: "Yes. Scenic includes luxury accommodations, butler service, premium beverages, excursions, gratuities, Wi-Fi, and many other amenities.",
        },
        {
            q: "Why is Scenic more expensive than some other river cruise lines?",
            a: "Scenic bundles many premium services into the cruise fare, reducing the number of additional expenses during your vacation.",
        },
        {
            q: "Are drinks included?",
            a: "Yes. Premium wines, spirits, cocktails, beer, coffee, tea, and soft drinks are generally included.",
        },
        {
            q: "Are excursions included?",
            a: "Yes. Scenic Freechoice excursions and Scenic Enrich experiences are included on most itineraries.",
        },
        {
            q: "Is airfare included?",
            a: "International airfare is not always included but may be available through select promotions or vacation packages.",
        },
        {
            q: "Does Scenic include gratuities?",
            a: "Yes. Onboard gratuities are generally included.",
        },
        {
            q: "What is the cheapest time to book a Scenic River Cruise?",
            a: "Shoulder-season departures and early booking promotions often provide the best value.",
        },
        {
            q: "Is Scenic worth the money?",
            a: "For travelers seeking an all-inclusive luxury river cruise with exceptional service, many guests believe Scenic offers excellent overall value.",
        },
        {
            q: "Should I book through a travel advisor?",
            a: "Yes. A luxury travel advisor can help compare itineraries, explain pricing, recommend the right suite, and identify available promotions.",
        },
        {
            q: "Are laundry services included on Scenic River Cruises?",
            a: "Yes, laundry concierge services are included for all guests, with the number of complimentary pieces washed depending on your suite category (unlimited for top-tier Royal Suites).",
        },
        {
            q: "Does Scenic offer a single supplement discount for solo travelers?",
            a: "Scenic occasionally runs promotions offering reduced or waived single supplements on select itineraries, though standard bookings typically include a supplement fee for solo occupancy.",
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

/* ── Prices at a Glance Data ──────────────────────────────────────── */
const glancePricing = [
    { key: "7night", type: "7-Night Europe Cruise", price: "$4,500–$7,500" },
    { key: "10night", type: "10-Night Cruise", price: "$6,000–$9,500" },
    { key: "14night", type: "14-Night Grand Cruise", price: "$8,500–$15,000+" },
    { key: "xmas", type: "Christmas Market Cruise", price: "$5,000–$8,500" },
    { key: "douro", type: "Douro River Cruise", price: "$4,800–$7,800" },
    { key: "rhine", type: "Rhine River Cruise", price: "$4,900–$8,200" },
    { key: "danube", type: "Danube River Cruise", price: "$4,700–$8,000" },
    { key: "mekong", type: "Mekong River Cruise", price: "$6,500–$12,000+" },
];

/* ── Example Budget Data ──────────────────────────────────────────── */
const budgetData = [
    { key: "fare", expense: "Cruise Fare", value: "Included" },
    { key: "butler", expense: "Butler Service", value: "Included" },
    { key: "drinks", expense: "Premium Drinks", value: "Included" },
    { key: "excursions", expense: "Excursions", value: "Included" },
    { key: "grat", expense: "Gratuities", value: "Included" },
    { key: "transfers", expense: "Airport Transfers", value: "Included (eligible itineraries)" },
    { key: "wifi", expense: "Wi-Fi", value: "Included" },
];

/* ── Cost Comparison Data ─────────────────────────────────────────── */
const comparisonData = [
    { key: "scenic", line: "Scenic", price: "Higher", inclusions: "Extensive all-inclusive luxury" },
    { key: "viking", line: "Viking", price: "Moderate", inclusions: "Fewer premium inclusions" },
    { key: "ama", line: "AmaWaterways", price: "Moderate–Luxury", inclusions: "Many inclusions, active excursions" },
    { key: "riverside", line: "Riverside", price: "Luxury", inclusions: "Boutique luxury experience" },
    { key: "uniworld", line: "Uniworld", price: "Luxury", inclusions: "High-end all-inclusive amenities" },
];

/* ── Cost Factors Data ───────────────────────────────────────────── */
const costFactors = [
    {
        id: "length",
        title: "1. Cruise Length",
        badge: "Cruise Length",
        icon: Calendar,
        desc: "Generally, longer cruises cost more, though they often provide better value per day. When budgeting, consider the nightly rate rather than just the total fare.",
        columns: [
            {
                label: "Typical pricing tiers:",
                items: [
                    "7 nights (Standard entry level)",
                    "8–10 nights (Moderate length)",
                    "11–15 nights (Longer duration)",
                    "Grand journeys of 20+ nights (Ultimate value)",
                ],
            },
        ],
    },
    {
        id: "destination",
        title: "2. Destination & River",
        badge: "Destination",
        icon: MapPinned,
        desc: "Some rivers are naturally more expensive due to local demand, docking fees, and lock charges. Choosing less-traveled rivers or classic routes can affect your cost.",
        columns: [
            {
                label: "Typically more affordable:",
                items: ["Danube River", "Rhine River", "Douro River (Portugal)"],
            },
            {
                label: "Premium pricing:",
                items: [
                    "Mekong River (Vietnam & Cambodia)",
                    "Rhône & Seine Rivers (France)",
                    "Christmas Market cruises",
                    "Tulip Time cruises (Netherlands)",
                ],
            },
        ],
    },
    {
        id: "suite",
        title: "3. Suite Category",
        badge: "Suite Category",
        icon: Home,
        desc: "Suite selection significantly impacts the final cost. Larger suites offer more living space, better views, premium deck locations, enhanced butler services, and luxury in-suite amenities.",
        columns: [
            {
                label: "Typical categories:",
                items: [
                    "Standard Suite (Lower deck, window only)",
                    "Deluxe Balcony Suite (Middle/upper deck, sun lounge)",
                    "Junior Suite (Spacious layout, enhanced service)",
                    "Royal Owner's Suite (Ultimate size, maximum butler privileges)",
                ],
            },
        ],
    },
    {
        id: "season",
        title: "4. Travel Season",
        badge: "Travel Season",
        icon: Sparkles,
        desc: "Travel dates can make a substantial difference in price. Booking outside peak periods (shoulder season) can result in significant savings.",
        columns: [
            {
                label: "Lower prices (Shoulder season):",
                items: ["Early Spring (March/April)", "Late Autumn (October/November)"],
            },
            {
                label: "Highest prices (Peak season):",
                items: [
                    "Tulip Season (Mid-April to May)",
                    "Summer (June to August)",
                    "Christmas Markets (December)",
                    "Peak Holiday Departures",
                ],
            },
        ],
    },
];

/* ── Main Component ──────────────────────────────────────────────── */
const ScenicRiverCruiseCost = () => {
    const [readMore, setReadMore] = useState(false);
    const [readMoreVerdict, setReadMoreVerdict] = useState(false);
    const [activeFactor, setActiveFactor] = useState("length");

    const currentFactor =
        costFactors.find((f) => f.id === activeFactor) || costFactors[0];

    const ActiveIcon = currentFactor.icon;

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>How Much Does a Scenic River Cruise Cost?</title>
                <meta name="title" content="Scenic River Cruise Cost | Prices, What's Included & Value Guide" />
                <meta
                    name="description"
                    content="Wondering how much a Scenic River Cruise costs? Discover average prices by itinerary, suite type, season, and destination, plus what's included and how to save on your luxury river cruise."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ───────────────────────────────────────────────────── */}
            <section className="Scenic_hero_section">
                <div className="Scenic_hero_overlay"></div>

                <div className="Scenic_hero_content">
                    <h1>How Much Does a <br /> Scenic River Cruise Cost?</h1>

                    <p>
                        Planning a Scenic River Cruise is exciting — but one
                        of the first questions most travelers ask is how
                        much it actually costs. The answer depends on
                        several factors, including your destination, cruise
                        length, suite category, travel season, and current
                        promotions.
                    </p>

                    {readMore && (
                        <p>
                            While Scenic is one of the most luxurious
                            all-inclusive river cruise lines, the upfront
                            fare includes many services that other cruise
                            lines charge separately for. This guide breaks
                            down average Scenic River Cruise prices, explains
                            what affects the cost, highlights what's
                            included, and helps you determine whether Scenic
                            offers good value for your travel budget.
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
                            Start Planning Your Scenic Cruise
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── 60-SECOND ANSWER ─────────────────────────────────────────── */}
            <section className="rlc-qa-section" id="quick-answer" style={{ backgroundColor: "var(--bg-white)" }}>
                <div className="rlc-qa-container">
                    <div className="rlc-qa-card-wrapper">
                        <h2 className="rlc-qa-title">Scenic River Cruise Prices: The Quick Answer</h2>
                        <div className="rlc-qa-accent"></div>

                        <p className="rlc-qa-intro">
                            If you're short on time, here's the quick answer:
                        </p>

                        <ul className="rlc-qa-list">
                            {[
                                "Average 7-night Scenic River Cruise: $4,500–$7,500 per person",
                                "Luxury Balcony Suites: $6,000–$9,500+ per person",
                                "Longer 10–15 night itineraries: $7,000–$15,000+ per person",
                                "Christmas Market Cruises: Often $5,000–$8,500+ per person",
                                "Grand European journeys: Can exceed $12,000–$20,000+ per person",
                            ].map((item, i) => (
                                <li key={i} className="rlc-qa-item">
                                    <span className="rlc-qa-icon-wrap">
                                        <Wallet size={16} strokeWidth={2.5} className="rlc-qa-check-icon" />
                                    </span>
                                    <span className="rlc-qa-text">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="rlc-qa-outro">
                            Unlike many cruise lines, Scenic includes butler
                            service, premium beverages, gratuities,
                            excursions, airport transfers (on eligible
                            itineraries), and luxury dining, making the total
                            vacation cost more predictable.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── PRICES AT A GLANCE ────────────────────────────────────────── */}
            <section className="adg-section" id="prices-at-a-glance" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Scenic River Cruise Prices <br /> at a Glance</h2>
                        <div className="adg-accent-line"></div>
                    </div>

                    <div className="Asc-table-wrapper">
                        <table className="Asc-fleet-table">
                            <thead>
                                <tr>
                                    <th>Cruise Type</th>
                                    <th>Average Price (Per Person)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {glancePricing.map((row) => (
                                    <tr key={row.key}>
                                        <td>
                                            <strong>{row.type}</strong>
                                        </td>
                                        <td>{row.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <p className="Asc-section-intro" style={{ marginTop: "24px", textAlign: "center" }}>
                        Prices vary by departure date, suite category,
                        promotions, and availability.
                    </p>
                </div>
            </section>

            {/* ── WHAT AFFECTS THE COST ────────────────────────────────────── */}
            <section className="luc-destinations-section" id="what-affects-the-cost">
                <div className="luc-destinations-container">
                    <div className="luc-destinations-header">
                        <h2 className="luc-destinations-title">What Affects the Cost of a Scenic River Cruise?</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="luc-destinations-intro">
                            Several factors influence the final price of your vacation.
                            Understanding these elements makes budgeting easier.
                        </p>
                    </div>

                    <div className="luc-dest-layout">
                        <nav className="luc-dest-nav">
                            {costFactors.map((item) => {
                                const NavIcon = item.icon;
                                const isActive = activeFactor === item.id;

                                return (
                                    <button
                                        key={item.id}
                                        className={`luc-dest-nav-btn ${isActive ? "luc-dest-nav-btn--active" : ""}`}
                                        onClick={() => setActiveFactor(item.id)}
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

                        <div className="luc-dest-panel" key={activeFactor}>
                            <div className="luc-dest-img-wrap">
                                <div className="luc-dest-img-overlay">
                                    <div className="luc-dest-img-icon">
                                        <ActiveIcon size={22} strokeWidth={1.6} />
                                    </div>
                                    <span className="luc-dest-img-title">{currentFactor.title}</span>
                                </div>
                            </div>

                            <p className="luc-dest-panel-desc">{currentFactor.desc}</p>

                            <div className="luc-dest-columns">
                                {currentFactor.columns.map((col, cIdx) => (
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
                        </div>
                    </div>
                </div>
            </section>

            {/* ── INLINE CTA 1 ────────────────────────────────────────────── */}
            <section className="scenic-inline-cta-section-dark">
                <div className="scenic-inline-cta-container-dark">
                    <div className="scenic-inline-cta-content-dark">
                        <h3 className="scenic-inline-cta-title-dark">Ready to Compare Scenic Pricing?</h3>
                        <p className="scenic-inline-cta-text-dark">
                            Let us help you find the best promotions, select the ideal suite, and maximize your value on a Scenic river cruise.
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

            {/* ── WHAT'S INCLUDED IN THE PRICE? ─────────────────────────── */}
            <section className="adg-c-section adg-c-bg-soft" id="whats-included-price">
                <div className="adg-c-container">
                    <div className="adg-c-section-header">
                        <h2 className="adg-c-h2">What's Included in the Price?</h2>

                        <div className="adg-c-accent-line"></div>

                        <p className="Asc-section-intro">
                            One reason Scenic's fares appear higher than some competitors is
                            because so much is already included, providing exceptional value
                            with very few additional expenses during your journey.
                        </p>
                    </div>

                    <div className="adg-c-overview-layout">
                        <div className="adg-c-overview-icons">
                            {[
                                "Luxury accommodations",
                                "Butler service",
                                "Breakfast, lunch, and dinner",
                                "Premium wines, beer, cocktails, and spirits",
                                "Scenic Freechoice excursions",
                                "Scenic Enrich exclusive experiences",
                                "Wi-Fi",
                                "Airport transfers (eligible itineraries)",
                                "Gratuities",
                                "Onboard entertainment",
                            ].map((label, i) => (
                                <div key={i} className="adg-c-overview-item">
                                    <span className="adg-c-overview-icon">
                                        <CheckCircle size={16} strokeWidth={2.5} />
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
                                    <Star
                                        size={28}
                                        className="adg-c-callout-star"
                                    />

                                    <p className="adg-c-callout-text">
                                        When comparing cruise prices, it's important to look
                                        beyond the base fare. Scenic includes many premium
                                        services and experiences that other cruise lines may
                                        charge extra for, making its all-inclusive pricing an
                                        excellent overall value.
                                    </p>
                                </div>
                            </div>

                            <div
                                className="adg-c-overview-image-wrap"
                                style={{ height: "460px" }}
                            >
                                <img
                                    // src={ScenicIncludedImage}
                                    alt="Luxury accommodations and all-inclusive amenities aboard a Scenic river cruise"
                                    className="adg-c-overview-img"
                                />

                                <div className="adg-c-overview-img-overlay">
                                    <span className="adg-c-overview-img-label">
                                        Luxury Included • Exceptional Value
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHAT'S USUALLY NOT INCLUDED ──────────────────────────────── */}
            <section className="scenic-exclusions-section" id="whats-not-included">
                <div className="scenic-exclusions-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">What's Usually NOT Included?</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            While Scenic is highly inclusive, some costs may
                            still apply. A travel advisor can help clarify
                            exactly what applies to your chosen itinerary.
                        </p>
                    </div>

                    <div className="scenic-exclusions-grid">
                        {[
                            "International airfare (unless part of a promotional package)",
                            "Travel insurance",
                            "Spa treatments",
                            "Personal shopping",
                            "Optional premium experiences",
                            "Passport and visa fees",
                            "Independent sightseeing expenses",
                        ].map((item, i) => (
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



            {/* ── EXAMPLE BUDGET ────────────────────────────────────────────── */}
            <section className="adg-section" style={{ backgroundColor: "var(--bg-soft)" }} id="example-budget">
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Example Budget: 7-Night Scenic Danube Cruise</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            Here's an example of what a luxury Scenic
                            vacation might include.
                        </p>
                    </div>

                    <div className="Asc-table-wrapper">
                        <table className="Asc-fleet-table">
                            <thead>
                                <tr>
                                    <th>Expense</th>
                                    <th>Typical Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {budgetData.map((row) => (
                                    <tr key={row.key}>
                                        <td>
                                            <strong>{row.expense}</strong>
                                        </td>
                                        <td>{row.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <p className="Asc-section-intro" style={{ marginTop: "24px", textAlign: "center" }}>
                        Estimated value of included amenities:
                        $1,200–$2,000+ per couple, depending on itinerary
                        and travel style.
                    </p>
                </div>
            </section>

            {/* ── IS SCENIC WORTH THE PRICE? ───────────────────────────────── */}
            <section className="rlc-lc-worth-section" id="is-scenic-worth-the-price">
                <div className="rlc-lc-worth-container">
                    <div className="rlc-lc-worth-grid">
                        <div className="rlc-lc-worth-content">
                            <h2 className="rlc-lc-worth-title">Is Scenic Worth the Price?</h2>

                            <div className="rlc-lc-worth-accent"></div>

                            <p className="rlc-lc-worth-lead">
                                For many travelers, the answer is yes.
                                Rather than focusing on the lowest upfront
                                price, Scenic emphasizes delivering a
                                seamless luxury experience for guests who
                                value:
                            </p>

                            <div className="rlc-lc-worth-emphasis-grid">
                                {[
                                    "Personalized service",
                                    "Butler service",
                                    "Gourmet dining",
                                    "Luxury accommodations",
                                    "Premium beverages",
                                    "Cultural experiences",
                                    "Minimal onboard extra charges",
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
                                    Scenic's all-inclusive approach removes
                                    the guesswork from budgeting, making it a
                                    strong option for travelers who prefer a
                                    seamless, worry-free vacation.
                                </p>
                            </div>

                            <div className="rlc-page-cta-container rlc-align-left" style={{ marginTop: "24px" }}>
                                <Link to="/contact" className="rlc-page-cta-btn" style={{ textDecoration: "none" }}>
                                    Start Planning Your Scenic Cruise
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>

                        <div className="rlc-lc-worth-media">
                            <div className="rlc-lc-worth-media-wrapper">
                                <img
                                    // src={EveningImage}
                                    alt="Elegant evening lounge aboard a Scenic river ship"
                                    className="rlc-lc-worth-media-img"
                                />
                                <div className="rlc-lc-worth-media-overlay"></div>

                                <div className="rlc-lc-worth-media-badge">
                                    <span>All-Inclusive • Predictable Value</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── IS SCENIC EXPENSIVE? ──────────────────────────────────────── */}
            <section className="scenic-expensive-comparison-section" id="is-scenic-expensive">
                <div className="scenic-expensive-comparison-container">
                    <div className="scenic-expensive-card-wrapper">
                        <div className="scenic-expensive-card-content">
                            <h2 className="scenic-expensive-card-title">Is Scenic Expensive?</h2>
                            <div className="scenic-expensive-card-accent"></div>

                            <p className="scenic-expensive-card-intro">
                                Compared to premium river cruise lines, yes—Scenic sits in the luxury category.
                            </p>

                            <p className="scenic-expensive-card-desc">
                                However, comparing Scenic to lower-priced cruise lines isn't always accurate because many competitors charge extra for:
                            </p>

                            <p className="scenic-expensive-card-desc" style={{ fontStyle: "italic", marginTop: "12px" }}>
                                When these costs are added separately, the total vacation price may be closer than it initially appears.
                            </p>
                        </div>

                        <div className="scenic-expensive-card-sidebar">
                            <div className="scenic-expensive-list">
                                {[
                                    "Alcohol",
                                    "Excursions",
                                    "Butler service",
                                    "Gratuities",
                                    "Airport transfers",
                                ].map((item, i) => (
                                    <div key={i} className="scenic-expensive-list-item">
                                        <X size={14} className="scenic-expensive-item-icon" />
                                        <span className="scenic-expensive-item-text">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="scenic-expensive-image-wrap">
                        <img
                            // src={ShipImage}
                            alt="Scenic River Cruise"
                            className="scenic-expensive-image"
                        />
                        <div className="scenic-expensive-image-overlay">
                            <span className="scenic-expensive-image-label">Scenic River Cruise</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SCENIC VS OTHER RIVER CRUISE LINES (COST COMPARISON) ─────── */}
            <section className="adg-section" style={{ backgroundColor: "var(--bg-white)" }} id="cost-comparison">
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Scenic vs. Other River Cruise Lines </h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            The best value depends on your travel style and
                            which inclusions matter most to you.
                        </p>
                    </div>

                    <div className="Asc-table-wrapper">
                        <table className="Asc-fleet-table">
                            <thead>
                                <tr>
                                    <th>Cruise Line</th>
                                    <th>Typical Price</th>
                                    <th>Inclusions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonData.map((row) => (
                                    <tr key={row.key}>
                                        <td>
                                            <strong>{row.line}</strong>
                                        </td>
                                        <td>{row.price}</td>
                                        <td>{row.inclusions}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── WHEN CAN YOU SAVE MONEY? ──────────────────────────────────── */}
            <section className="rlc-inc-section" id="when-can-you-save" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="rlc-inc-container">
                    <div className="rlc-inc-grid-split">
                        <div className="rlc-inc-left">
                            <h2 className="rlc-inc-title">When Can You Save Money?</h2>
                            <div className="rlc-inc-accent" style={{ marginLeft: "15px" }}></div>

                            <p
                                className="rlc-inc-intro"
                                style={{ margin: "0px", marginBottom: "30px" }}
                            >
                                You don't always have to pay full brochure
                                price. Potential ways to save include:
                            </p>

                            <ul className="rlc-inc-list">
                                {[
                                    "Booking early for the widest suite selection",
                                    "Taking advantage of seasonal promotions",
                                    "Choosing shoulder-season departures",
                                    "Being flexible with travel dates",
                                    "Working with a luxury travel advisor who can identify available offers",
                                ].map((item, i) => (
                                    <li key={i} className="rlc-inc-item">
                                        <span className="rlc-inc-icon-wrap">
                                            <BadgePercent
                                                size={16}
                                                strokeWidth={3}
                                                className="rlc-inc-check-icon"
                                            />
                                        </span>
                                        <span className="rlc-inc-item-text">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="rlc-inc-right">
                            <div className="rlc-inc-image-collage">
                                <div className="rlc-inc-img-main-wrap">
                                    <img
                                        // src={SuiteImage}
                                        alt="Luxury Scenic river cruise suite"
                                        className="rlc-inc-collage-img"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* ── WHO GETS THE BEST VALUE? ──────────────────────────────────── */}
            <section className="Asc-section" id="who-gets-the-best-value" style={{ backgroundColor: "var(--bg-white)" }}>
                <div className="Asc-container">
                    <div className="Asc-section-header">
                        <h2 className="Asc-h2">Who Gets the Best Value?</h2>
                        <div className="Asc-accent-line"></div>

                        <p className="Asc-section-intro">
                            Scenic's pricing model isn't the best fit for
                            every traveler. If most of the items below
                            describe your travel style, Scenic is likely an
                            excellent value.
                        </p>
                    </div>

                    <div className="Asc-who-grid">
                        <div className="Asc-who-card Asc-who-yes">
                            <h3 className="Asc-who-title">Scenic Is an Excellent Fit If You're...</h3>

                            <ul className="Asc-who-list">
                                {[
                                    "Couples celebrating anniversaries",
                                    "Luxury travelers",
                                    "First-time river cruisers seeking an all-inclusive experience",
                                    "Food and wine enthusiasts",
                                    "Retirees",
                                    "Travelers who prefer fewer surprise expenses",
                                ].map((item, i) => (
                                    <li key={i}>
                                        <Check size={16} className="Asc-icon-green" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="Asc-who-card Asc-who-no">
                            <h3 className="Asc-who-title">You May Prefer Another Option If You...</h3>

                            <ul className="Asc-who-list">
                                {[
                                    "Are primarily looking for the lowest possible fare",
                                    "Don't need luxury inclusions",
                                    "Prefer a more budget-focused cruise",
                                    "Plan to spend little time onboard",
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

            {/* ── INLINE CTA 2 ────────────────────────────────────────────── */}
            <section className="scenic-inline-cta-section-light">
                <div className="scenic-inline-cta-container-light">
                    <div className="scenic-inline-cta-card-light">
                        <div className="scenic-inline-cta-content-light">
                            <span className="scenic-inline-cta-eyebrow-light">Exclusive Promotions</span>
                            <h3 className="scenic-inline-cta-title-light">Planning a Scenic River Cruise?</h3>
                            <p className="scenic-inline-cta-text-light">
                                Take advantage of exclusive travel advisor promotions, complimentary cabin upgrades, and expert itinerary advice today.
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

            {/* ── WHY BOOK THROUGH A LUXURY TRAVEL ADVISOR ─────────────────── */}
            <section
                className="Avr-planning-section"
                id="why-book-through-advisor"
                style={{ backgroundColor: "var(--bg-white)" }}
            >
                <div className="Asc-container">
                    <div className="Avr-planning-heading">
                        <span className="Avr-planning-eyebrow">Personalized Pricing Guidance</span>
                        <h2 className="Avr-planning-title">
                            Why Book Through a <br /> Luxury Travel Advisor?
                        </h2>
                        <div className="Avr-planning-divider"></div>
                    </div>

                    <div className="Avr-planning-grid">
                        <div className="Avr-planning-left">
                            <div className="Avr-planning-left-deco">&ldquo;</div>
                            <h3 className="Avr-planning-left-title">
                                Maximize the Value of Your Investment
                            </h3>
                            <p className="Avr-planning-left-body">
                                Booking through a travel advisor can help you
                                maximize the value of your investment. A
                                luxury advisor can compare Scenic itineraries
                                and pricing, recommend the best suite for
                                your budget, explain promotions and
                                limited-time offers, coordinate flights,
                                hotels, and transfers, compare Scenic with
                                Riverside, Viking, AmaWaterways, and
                                Uniworld, and help you avoid paying for
                                features you may not need.
                            </p>

                            <div className="Avr-planning-alert">
                                <ShieldCheck size={18} className="Avr-planning-alert-icon" />
                                <p className="Avr-planning-alert-text">
                                    Professional guidance often saves both
                                    time and money.
                                </p>
                            </div>
                        </div>

                        <div className="Avr-planning-right">
                            <p className="Avr-planning-right-intro">
                                A luxury advisor can help you:
                            </p>

                            <div className="Avr-planning-benefits-grid">
                                {[
                                    { icon: <Wallet size={18} />, label: "Compare Scenic itineraries and pricing" },
                                    { icon: <Home size={18} />, label: "Recommend the best suite for your budget" },
                                    { icon: <BadgePercent size={18} />, label: "Explain promotions and limited-time offers" },
                                    { icon: <Plane size={18} />, label: "Coordinate flights, hotels, and transfers" },
                                    { icon: <Ship size={18} />, label: "Compare Scenic with Riverside, Viking, AmaWaterways, and Uniworld" },
                                    { icon: <Gem size={18} />, label: "Help you avoid paying for features you may not need" },
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
                            Everything travelers need to know about Scenic
                            River Cruise pricing before booking.
                        </p>
                    </div>
                    <FAQ />
                </div>
            </section>

            {/* ── FINAL VERDICT / CTA ──────────────────────────────────────── */}
            <section className="Asc-help-section">
                <div className="Asc-help-bg-wrap">
                    <img
                        // src={ShipImage}
                        alt="Scenic ship sailing along a European river at dusk"
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
                                    Luxury Pricing, <br /> Predictable Value
                                </h2>
                                <div className="Asc-help-accent"></div>
                            </div>

                            <div className="Asc-help-grid">
                                <div className="Asc-help-info">
                                    <p className="Asc-help-intro">
                                        Scenic River Cruises sits firmly in
                                        the luxury river cruise market, with
                                        pricing that reflects its extensive
                                        all-inclusive experience.

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
                                                While the upfront fare may be
                                                higher than some competitors,
                                                the inclusion of butler
                                                service, premium beverages,
                                                guided excursions,
                                                gratuities, and other
                                                amenities can make the
                                                overall value compelling for
                                                travelers who want a
                                                seamless, worry-free
                                                vacation.
                                            </p>
                                            <br />
                                            <p className="Asc-help-intro">
                                                At Trips &amp; Ships Luxury
                                                Travel, we'll help you
                                                compare itineraries, travel
                                                seasons, and suite categories
                                                to find the best option for
                                                your budget and travel
                                                goals.
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
                                            Start Planning Your Scenic Cruise
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
                                            "Compare Scenic itineraries and pricing",
                                            "Recommend the best suite for your budget",
                                            "Explain promotions and limited-time offers",
                                            "Arrange flights and hotels",
                                            "Coordinate private transfers",
                                            "Compare Scenic with other luxury lines",
                                            "Identify available promotions",
                                            "Help you avoid paying for features you don't need",
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

export default ScenicRiverCruiseCost;