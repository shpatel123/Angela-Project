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
import AboutImage from "../../assets/AboutAngela.jpeg";

/* ── Placeholder image imports ────────────────────────────────────
   Replace these with real "Is Scenic Worth It" photography once
   available. Paths assume a new
   /assets/IsScenicWorthIt folder. */
// import HeroImage from "../../assets/IsScenicWorthIt/scenic-worth-hero.jpg";
// import SuiteImage from "../../assets/IsScenicWorthIt/scenic-worth-suite.jpg";
// import DiningImage from "../../assets/IsScenicWorthIt/scenic-worth-dining.jpg";
// import EveningImage from "../../assets/IsScenicWorthIt/scenic-worth-evening.jpg";
// import ShipImage from "../../assets/IsScenicWorthIt/scenic-worth-ship-exterior.jpg";

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
            "@id": "https://www.tripsandships.com/scenic-river-cruises/is-scenic-worth-it/#webpage",
            name: "Is a Scenic River Cruise Worth the Money? Honest Review (2026)",
            url: "https://www.tripsandships.com/scenic-river-cruises/is-scenic-worth-it",
            description:
                "Is Scenic River Cruises worth the premium price? Discover the pros, cons, value, what's included, hidden costs, and who should (or shouldn't) book a Scenic River Cruise.",
        },
        {
            "@type": "Article",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/is-scenic-worth-it/#article",
            headline: "Is Scenic River Cruises Worth It? | Honest Luxury Cruise Review",
            description:
                "An honest review of Scenic River Cruises covering value, pros and cons, what's included, and who gets the most out of booking a Scenic river cruise.",
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
            "@id": "https://www.tripsandships.com/scenic-river-cruises/is-scenic-worth-it/#breadcrumb",
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
                    name: "Riverside Luxury Cruises",
                    item: "https://www.tripsandships.com/riverside-luxury-cruises",
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: "Scenic River Cruises",
                    item: "https://www.tripsandships.com/scenic-river-cruises",
                },
                {
                    "@type": "ListItem",
                    position: 4,
                    name: "Is a Scenic River Cruise Worth the Money?",
                    item: "https://www.tripsandships.com/scenic-river-cruises/is-scenic-worth-it",
                },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/is-scenic-worth-it/#itemlist",
            name: "Is a Scenic River Cruise Worth the Money? — What This Guide Covers",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Is Scenic Worth the Money? The Quick Answer" },
                { "@type": "ListItem", position: 2, name: "Scenic at a Glance" },
                { "@type": "ListItem", position: 3, name: "Why Is Scenic More Expensive?" },
                { "@type": "ListItem", position: 4, name: "What Value Do You Actually Receive?" },
                { "@type": "ListItem", position: 5, name: "Real Value Example" },
                { "@type": "ListItem", position: 6, name: "Scenic Pros" },
                { "@type": "ListItem", position: 7, name: "Scenic Cons" },
                { "@type": "ListItem", position: 8, name: "Who Gets the Best Value?" },
                { "@type": "ListItem", position: 9, name: "Scenic vs. Other Luxury River Cruise Lines" },
                { "@type": "ListItem", position: 10, name: "Is Scenic Better Than Viking?" },
                { "@type": "ListItem", position: 11, name: "Why Booking Through a Luxury Travel Advisor Adds Value" },
                { "@type": "ListItem", position: 12, name: "Final Verdict" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/scenic-river-cruises/is-scenic-worth-it/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Is Scenic River Cruises worth the money?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Scenic offers excellent value for travelers who want a luxury, all-inclusive experience with butler service, premium dining, excursions, and drinks included.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Why is Scenic more expensive than other river cruise lines?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic includes many amenities—such as gratuities, premium beverages, butler service, airport transfers (on eligible itineraries), and guided excursions—that other cruise lines may charge extra for.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Scenic better than Viking River Cruises?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic generally offers more luxury inclusions and personalized service, while Viking often appeals to travelers seeking a lower starting price and destination-focused itineraries.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are drinks included on Scenic River Cruises?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Premium wines, beer, spirits, cocktails, soft drinks, coffee, tea, and bottled water are typically included.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are shore excursions included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Scenic Freechoice excursions and Scenic Enrich cultural experiences are included on most itineraries.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Scenic a good choice for first-time river cruisers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Absolutely. Its all-inclusive approach makes planning easier and reduces unexpected costs during the trip.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Scenic include gratuities?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Onboard gratuities are generally included in the cruise fare.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What costs extra on a Scenic River Cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Optional spa treatments, travel insurance, personal shopping, some premium experiences, and airfare (unless part of a package) may cost extra.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Scenic River Cruises good value compared with other luxury brands?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Many travelers believe so because Scenic combines luxury accommodations, personalized service, premium beverages, excursions, and gratuities into one comprehensive fare.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I book Scenic through a travel advisor?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. A luxury travel advisor can compare itineraries, explain promotions, recommend the best suite, and coordinate flights, hotels, and transfers.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the biggest advantage of Scenic River Cruises?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Its truly all-inclusive luxury experience. The combination of butler service, gourmet dining, premium beverages, included excursions, and exceptional service provides a seamless vacation with fewer unexpected expenses.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Who should book a Scenic River Cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic is ideal for couples, retirees, luxury travelers, food and wine enthusiasts, and anyone seeking a premium river cruise experience.",
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
            q: "Is Scenic River Cruises worth the money?",
            a: "Yes. Scenic offers excellent value for travelers who want a luxury, all-inclusive experience with butler service, premium dining, excursions, and drinks included.",
        },
        {
            q: "Why is Scenic more expensive than other river cruise lines?",
            a: "Scenic includes many amenities—such as gratuities, premium beverages, butler service, airport transfers (on eligible itineraries), and guided excursions—that other cruise lines may charge extra for.",
        },
        {
            q: "Is Scenic better than Viking River Cruises?",
            a: "Scenic generally offers more luxury inclusions and personalized service, while Viking often appeals to travelers seeking a lower starting price and destination-focused itineraries.",
        },
        {
            q: "Are drinks included on Scenic River Cruises?",
            a: "Yes. Premium wines, beer, spirits, cocktails, soft drinks, coffee, tea, and bottled water are typically included.",
        },
        {
            q: "Are shore excursions included?",
            a: "Yes. Scenic Freechoice excursions and Scenic Enrich cultural experiences are included on most itineraries.",
        },
        {
            q: "Is Scenic a good choice for first-time river cruisers?",
            a: "Absolutely. Its all-inclusive approach makes planning easier and reduces unexpected costs during the trip.",
        },
        {
            q: "Does Scenic include gratuities?",
            a: "Yes. Onboard gratuities are generally included in the cruise fare.",
        },
        {
            q: "What costs extra on a Scenic River Cruise?",
            a: "Optional spa treatments, travel insurance, personal shopping, some premium experiences, and airfare (unless part of a package) may cost extra.",
        },
        {
            q: "Is Scenic River Cruises good value compared with other luxury brands?",
            a: "Many travelers believe so because Scenic combines luxury accommodations, personalized service, premium beverages, excursions, and gratuities into one comprehensive fare.",
        },
        {
            q: "Should I book Scenic through a travel advisor?",
            a: "Yes. A luxury travel advisor can compare itineraries, explain promotions, recommend the best suite, and coordinate flights, hotels, and transfers.",
        },
        {
            q: "What is the biggest advantage of Scenic River Cruises?",
            a: "Its truly all-inclusive luxury experience. The combination of butler service, gourmet dining, premium beverages, included excursions, and exceptional service provides a seamless vacation with fewer unexpected expenses.",
        },
        {
            q: "Who should book a Scenic River Cruise?",
            a: "Scenic is ideal for couples, retirees, luxury travelers, food and wine enthusiasts, and anyone seeking a premium river cruise experience.",
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

/* ── Star Rating Helper ───────────────────────────────────────────── */
function StarRating({ rating }) {
    return (
        <span style={{ display: "inline-flex", gap: "2px" }}>
            {Array.from({ length: 5 }).map((_, i) => (
                <Star
                    key={i}
                    size={16}
                    strokeWidth={1.5}
                    fill={i < rating ? "currentColor" : "none"}
                    style={{ color: "var(--gold, #C9A227)" }}
                />
            ))}
        </span>
    );
}

/* ── Scenic at a Glance Data ───────────────────────────────────────── */
const glanceRatings = [
    { key: "luxury", category: "Luxury", rating: 5 },
    { key: "dining", category: "Dining", rating: 5 },
    { key: "suites", category: "Suites", rating: 5 },
    { key: "service", category: "Service", rating: 5 },
    { key: "excursions", category: "Excursions", rating: 5 },
    { key: "valueLuxury", category: "Value for Luxury Travelers", rating: 5 },
    { key: "valueBudget", category: "Value for Budget Travelers", rating: 3 },
    { key: "overall", category: "Overall Rating", rating: 5 },
];

/* ── Real Value Example Data ──────────────────────────────────────── */
const realValueData = [
    { key: "drinks", expense: "Premium drinks", value: "$350–$500" },
    { key: "excursions", expense: "Excursions", value: "$400–$800" },
    { key: "grat", expense: "Gratuities", value: "$150–$250" },
    { key: "transfers", expense: "Airport transfers", value: "$100–$250" },
    { key: "butler", expense: "Butler-level services", value: "Included with Scenic" },
];

/* ── Scenic vs Other Luxury River Cruise Lines Data ───────────────── */
const comparisonData = [
    { key: "scenic", line: "Scenic", bestFor: "Truly all-inclusive luxury" },
    { key: "riverside", line: "Riverside", bestFor: "Boutique luxury & spacious suites" },
    { key: "viking", line: "Viking", bestFor: "Destination-focused value" },
    { key: "ama", line: "AmaWaterways", bestFor: "Active travelers & wellness" },
    { key: "tauck", line: "Tauck", bestFor: "Inclusive guided journeys" },
    { key: "uniworld", line: "Uniworld", bestFor: "Boutique elegance & décor" },
];

/* ── What Value Do You Actually Receive? Data ─────────────────────── */
const valueFactors = [
    {
        id: "butler",
        title: "1. Butler Service in Every Suite",
        badge: "Butler Service",
        icon: Home,
        desc: "Unlike many river cruise lines where butler service is reserved for top-tier accommodations, Scenic provides personalized butler service across its suite categories. For travelers who appreciate attentive service, this adds meaningful value.",
        columns: [
            {
                label: "Services may include:",
                items: [
                    "Morning beverage delivery",
                    "In-suite breakfast",
                    "Laundry coordination",
                    "Dining reservations",
                    "Daily itinerary assistance",
                ],
            },
        ],
    },
    {
        id: "dining",
        title: "2. Gourmet Dining Without Extra Charges",
        badge: "Gourmet Dining",
        icon: Wine,
        desc: "Dining is one of Scenic's strongest features. Many comparable land vacations would incur additional dining costs, but on Scenic, gourmet dining is simply part of the fare.",
        columns: [
            {
                label: "Expect:",
                items: [
                    "Multi-course dinners",
                    "Regional specialties",
                    "Premium wines",
                    "Fresh local ingredients",
                    "Chef-prepared cuisine",
                    "Elegant service",
                ],
            },
        ],
    },
    {
        id: "excursions",
        title: "3. Excursions Are Included",
        badge: "Excursions",
        icon: MapPinned,
        desc: "Guided tours can quickly add hundreds of dollars to a European vacation. Scenic includes a wide range of excursions, reducing the need for separate tour bookings.",
        columns: [
            {
                label: "Included excursions:",
                items: [
                    "Walking tours",
                    "Cultural experiences",
                    "Wine tastings",
                    "Museum visits",
                    "Cycling excursions",
                    "Scenic Freechoice options",
                ],
            },
        ],
    },
    {
        id: "surprises",
        title: "4. Few Surprise Expenses",
        badge: "Few Surprises",
        icon: ShieldCheck,
        desc: "Many travelers appreciate knowing most of their vacation costs upfront. With Scenic, you typically don't need to budget separately for the items below.",
        columns: [
            {
                label: "You typically won't need to budget for:",
                items: [
                    "Drinks",
                    "Tips",
                    "Wi-Fi",
                    "Excursions",
                    "Butler service",
                    "Airport transfers (eligible itineraries)",
                ],
            },
        ],
    },
];

/* ── Scenic Pros Data ──────────────────────────────────────────────── */
const scenicPros = [
    {
        title: "Truly All-Inclusive Luxury",
        desc: "Scenic is among the most inclusive luxury river cruise lines available.",
    },
    {
        title: "Outstanding Service",
        desc: "Guests consistently praise the crew for professionalism and personalized attention.",
    },
    {
        title: "Spacious Suites",
        desc: "Modern accommodations with elegant design and Scenic's signature Sun Lounge.",
    },
    {
        title: "Exceptional Dining",
        desc: "High-quality cuisine inspired by the regions visited.",
    },
    {
        title: "Flexible Excursions",
        desc: "Scenic Freechoice allows travelers to personalize each port visit.",
    },
    {
        title: "Exclusive Cultural Experiences",
        desc: "Scenic Enrich events provide memorable experiences beyond traditional sightseeing.",
    },
];

/* ── Scenic Cons Data ──────────────────────────────────────────────── */
const scenicCons = [
    {
        title: "Premium Pricing",
        desc: "The upfront cost is higher than many competitors.",
    },
    {
        title: "Quiet Evenings",
        desc: "Entertainment focuses on relaxation rather than nightlife.",
    },
    {
        title: "Adult-Oriented Atmosphere",
        desc: "Families with young children may prefer another vacation style.",
    },
    {
        title: "Limited Dining Venues",
        desc: "River ships naturally offer fewer restaurants than large ocean cruise ships.",
    },
];

/* ── Main Component ──────────────────────────────────────────────── */
const IsScenicRiverCruiseWorthTheMoney = () => {
    const [readMore, setReadMore] = useState(false);
    const [readMoreVerdict, setReadMoreVerdict] = useState(false);
    const [activeFactor, setActiveFactor] = useState("butler");

    const currentFactor =
        valueFactors.find((f) => f.id === activeFactor) || valueFactors[0];

    const ActiveIcon = currentFactor.icon;

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Is a Scenic River Cruise Worth the Money? Honest Review</title>
                <meta name="title" content="Is Scenic River Cruises Worth It? | Honest Luxury Cruise Review" />
                <meta
                    name="description"
                    content="Is Scenic River Cruises worth the premium price? Discover the pros, cons, value, what's included, hidden costs, and who should (or shouldn't) book a Scenic River Cruise."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ───────────────────────────────────────────────────── */}
            <section className="Scenic_hero_section">
                <div className="Scenic_hero_overlay"></div>

                <div className="Scenic_hero_content">
                    <h1>Is a Scenic River Cruise <br /> Worth the Money?</h1>

                    <p>
                        If you're researching Scenic River Cruises, you've
                        probably noticed that it's one of the more expensive
                        luxury river cruise lines. A typical European sailing
                        can cost several thousand dollars per person, leading
                        many travelers to ask: is Scenic really worth the
                        extra money?
                    </p>

                    {readMore && (
                        <p>
                            The short answer is yes—for the right traveler.
                            Scenic delivers one of the most comprehensive
                            all-inclusive luxury river cruise experiences
                            available. Instead of paying separately for
                            drinks, gratuities, excursions, airport
                            transfers, and butler service, most of these
                            amenities are included in your cruise fare.
                            However, Scenic isn't the perfect choice for
                            everyone. This guide explains who gets the best
                            value from Scenic, where your money goes, and how
                            it compares with other luxury river cruise
                            brands.
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
            <section className="rlc-qa-section" id="quick-answer" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="rlc-qa-container">
                    <div className="rlc-qa-card-wrapper">
                        <h2 className="rlc-qa-title">Is Scenic Worth the Money? The Quick Answer</h2>
                        <div className="rlc-qa-accent"></div>

                        <p className="rlc-qa-intro">
                            Is Scenic River Cruises worth it? Yes—if you want
                            an all-inclusive luxury river cruise with premium
                            service, elegant ships, gourmet dining, and very
                            few onboard surprises. Scenic is particularly
                            worth considering if you:
                        </p>

                        <ul className="rlc-qa-list">
                            {[
                                "Prefer luxury over budget travel",
                                "Enjoy fine dining and premium beverages",
                                "Value included excursions",
                                "Want butler service",
                                "Prefer predictable vacation costs",
                                "Like personalized service",
                            ].map((item, i) => (
                                <li key={i} className="rlc-qa-item">
                                    <span className="rlc-qa-icon-wrap">
                                        <Check size={16} strokeWidth={2.5} className="rlc-qa-check-icon" />
                                    </span>
                                    <span className="rlc-qa-text">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="rlc-qa-outro">
                            If you're simply looking for the cheapest way to
                            cruise Europe's rivers, Scenic may not be the
                            best value for your travel style.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── SCENIC AT A GLANCE ────────────────────────────────────────── */}
            <section className="adg-section" id="scenic-at-a-glance" style={{ backgroundColor: "var(--bg-white)" }}>
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Scenic at a Glance</h2>
                        <div className="adg-accent-line"></div>
                    </div>

                    <div className="Asc-table-wrapper">
                        <table className="Asc-fleet-table">
                            <thead>
                                <tr>
                                    <th>Category</th>
                                    <th>Rating</th>
                                </tr>
                            </thead>
                            <tbody>
                                {glanceRatings.map((row) => (
                                    <tr key={row.key}>
                                        <td>
                                            <strong>{row.category}</strong>
                                        </td>
                                        <td>
                                            <StarRating rating={row.rating} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── WHY IS SCENIC MORE EXPENSIVE? ────────────────────────────── */}
            <section className="adg-c-section adg-c-bg-soft" id="why-more-expensive">
                <div className="adg-c-container">
                    <div className="adg-c-section-header">
                        <h2 className="adg-c-h2">Why Is Scenic More Expensive?</h2>

                        <div className="adg-c-accent-line"></div>

                        <p className="Asc-section-intro">
                            Many travelers compare only the advertised
                            cruise fare. That's a mistake. Scenic includes
                            many premium services that other cruise lines
                            may charge extra for. When comparing cruise
                            lines, it's important to compare the total
                            vacation cost, not just the initial fare.
                        </p>
                    </div>

                    <div className="adg-c-overview-layout">
                        <div className="adg-c-overview-icons">
                            {[
                                "Butler service",
                                "Gourmet dining",
                                "Premium alcoholic beverages",
                                "Specialty coffee",
                                "Scenic Freechoice excursions",
                                "Scenic Enrich experiences",
                                "Airport transfers (eligible itineraries)",
                                "Wi-Fi",
                                "Gratuities",
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
                                        Your fare generally includes butler
                                        service, gourmet dining, premium
                                        beverages, excursions, gratuities,
                                        and more. Comparing the total
                                        vacation cost—not just the sticker
                                        price—is the fairest way to judge
                                        whether Scenic is worth it.
                                    </p>
                                </div>
                            </div>

                            <div
                                className="adg-c-overview-image-wrap"
                                style={{ height: "390px" }}
                            >
                                <img
                                    // src={DiningImage}
                                    alt="Gourmet dining aboard a Scenic river cruise"
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

            {/* ── WHAT VALUE DO YOU ACTUALLY RECEIVE? ──────────────────────── */}
            <section className="luc-destinations-section" id="what-value-do-you-receive">
                <div className="luc-destinations-container">
                    <div className="luc-destinations-header">
                        <h2 className="luc-destinations-title">What Value Do You Actually Receive?</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="luc-destinations-intro">
                            Beyond the advertised fare, here's where Scenic's
                            pricing actually delivers for guests.
                        </p>
                    </div>

                    <div className="luc-dest-layout">
                        <nav className="luc-dest-nav">
                            {valueFactors.map((item) => {
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
                        <h3 className="scenic-inline-cta-title-dark">Wondering If Scenic Fits Your Travel Style?</h3>
                        <p className="scenic-inline-cta-text-dark">
                            Let us help you compare itineraries, suites, and inclusions to see if Scenic delivers the value you're looking for.
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

            {/* ── REAL VALUE EXAMPLE ────────────────────────────────────────── */}
            <section className="adg-section" style={{ backgroundColor: "var(--bg-soft)" }} id="real-value-example">
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Real Value Example: 7-Night Rhine River Cruise</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            If booked independently, here's what you might
                            pay separately for these same amenities.
                        </p>
                    </div>

                    <div className="Asc-table-wrapper">
                        <table className="Asc-fleet-table">
                            <thead>
                                <tr>
                                    <th>Expense</th>
                                    <th>Estimated Cost</th>
                                </tr>
                            </thead>
                            <tbody>
                                {realValueData.map((row) => (
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
                        The combined value of these inclusions can easily
                        exceed $1,000–$2,000 per couple, depending on your
                        itinerary and travel style.
                    </p>
                </div>
            </section>

                       {/* ── SCENIC WORTH GALLERY / IMAGES ─────────────────────────────── */}
            <section className="scenic-worth-gallery-section" id="scenic-gallery">
                <div className="scenic-worth-gallery-container">
                    <div className="scenic-worth-gallery-grid">
                        <div className="scenic-worth-gallery-item">
                            <img
                                // src={SuiteImage}
                                alt="Luxury suite onboard Scenic river cruise ship"
                                className="scenic-worth-gallery-image"
                            />
                            <div className="scenic-worth-gallery-overlay">
                                <span className="scenic-worth-gallery-caption">Luxury Suites</span>
                            </div>
                        </div>

                        <div className="scenic-worth-gallery-item">
                            <img
                                // src={DiningImage}
                                alt="Gourmet dining experience onboard Scenic river cruise"
                                className="scenic-worth-gallery-image"
                            />
                            <div className="scenic-worth-gallery-overlay">
                                <span className="scenic-worth-gallery-caption">All-Inclusive Dining</span>
                            </div>
                        </div>

                        <div className="scenic-worth-gallery-item">
                            <img
                                // src={ShipImage}
                                alt="Scenic river cruise ship cruising along the river"
                                className="scenic-worth-gallery-image"
                            />
                            <div className="scenic-worth-gallery-overlay">
                                <span className="scenic-worth-gallery-caption">Scenic River Ships</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SCENIC PROS ──────────────────────────────────────────────── */}
            <section className="Asc-section Asc-bg-soft" id="scenic-pros">
                <div className="Asc-container">
                    <div className="Asc-section-header">
                        <h2 className="Asc-h2">Scenic Pros</h2>
                        <div className="Asc-accent-line"></div>
                        <p className="Asc-section-intro">
                            No cruise line is ideal for every traveler, but
                            here's where Scenic consistently stands out.
                        </p>
                    </div>

                    <div className="adg-c-overview-icons" style={{ display: "grid", gap: "16px" }}>
                        {scenicPros.map((item, i) => (
                            <div key={i} className="adg-c-overview-item" style={{ alignItems: "flex-start" }}>
                                <span className="adg-c-overview-icon">
                                    <CheckCircle size={18} strokeWidth={2.5} />
                                </span>
                                <span className="adg-c-overview-label">
                                    <strong>{item.title}</strong>
                                    <br />
                                    {item.desc}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SCENIC CONS ──────────────────────────────────────────────── */}
            <section className="Asc-section" id="scenic-cons" style={{ backgroundColor: "var(--bg-white)" }}>
                <div className="Asc-container">
                    <div className="Asc-section-header">
                        <h2 className="Asc-h2">Scenic Cons</h2>
                        <div className="Asc-accent-line"></div>
                        <p className="Asc-section-intro">
                            Potential drawbacks worth considering before you book.
                        </p>
                    </div>

                    <div className="adg-c-overview-icons" style={{ display: "grid", gap: "16px" }}>
                        {scenicCons.map((item, i) => (
                            <div key={i} className="adg-c-overview-item" style={{ alignItems: "flex-start" }}>
                                <span className="adg-c-overview-icon" style={{ color: "var(--text-muted, #9a1c1c)" }}>
                                    <X size={18} strokeWidth={2.5} />
                                </span>
                                <span className="adg-c-overview-label">
                                    <strong>{item.title}</strong>
                                    <br />
                                    {item.desc}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

 

            {/* ── WHO GETS THE BEST VALUE? ──────────────────────────────────── */}
            <section className="Asc-section" id="who-gets-the-best-value" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="Asc-container">
                    <div className="Asc-section-header">
                        <h2 className="Asc-h2">Who Gets the Best Value?</h2>
                        <div className="Asc-accent-line"></div>

                        <p className="Asc-section-intro">
                            Scenic is an excellent choice for many travelers—
                            but not everyone. Here's how to tell if it's the
                            right fit for you.
                        </p>
                    </div>

                    <div className="Asc-who-grid">
                        <div className="Asc-who-card Asc-who-yes">
                            <h3 className="Asc-who-title">Scenic Is an Excellent Choice For...</h3>

                            <ul className="Asc-who-list">
                                {[
                                    "Couples",
                                    "Luxury travelers",
                                    "Retirees",
                                    "Anniversary celebrations",
                                    "Food and wine lovers",
                                    "First-time luxury river cruisers",
                                    "Travelers celebrating milestone occasions",
                                    "Guests who dislike unexpected onboard charges",
                                ].map((item, i) => (
                                    <li key={i}>
                                        <Check size={16} className="Asc-icon-green" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="Asc-who-card Asc-who-no">
                            <h3 className="Asc-who-title">You Might Prefer Another Cruise Line If You...</h3>

                            <ul className="Asc-who-list">
                                {[
                                    "Want the lowest possible cruise fare",
                                    "Prefer large-ship entertainment",
                                    "Need extensive family programming",
                                    "Plan to spend very little time onboard",
                                    "Prioritize budget over luxury",
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

            

            {/* ── SCENIC VS OTHER LUXURY RIVER CRUISE LINES ────────────────── */}
            <section className="adg-section" style={{ backgroundColor: "var(--bg-white)" }} id="cost-comparison">
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Scenic vs. Other Luxury River Cruise Lines</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            Each cruise line excels in different areas, so
                            the best choice depends on your travel
                            priorities.
                        </p>
                    </div>

                    <div className="Asc-table-wrapper">
                        <table className="Asc-fleet-table">
                            <thead>
                                <tr>
                                    <th>Cruise Line</th>
                                    <th>Best For</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonData.map((row) => (
                                    <tr key={row.key}>
                                        <td>
                                            <strong>{row.line}</strong>
                                        </td>
                                        <td>{row.bestFor}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── IMAGE SLIDER SECTION ───────────────────────────────────── */}
            <section className="adg-section" style={{ backgroundColor: "var(--bg-soft)" }} id="scenic-slider-section">
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Scenic Cruise Experiences</h2>
                        <div className="adg-accent-line"></div>
                    </div>

                    <div className="scenic-worth-slider-container">
                        <div className="scenic-worth-slider-track">
                            {[
                                { alt: "Scenic luxury dining interior" },
                                { alt: "Scenic suite private balcony" },
                                { alt: "Scenic ship sailing at sunset" },
                                { alt: "Guided excursion in historic European city" },
                                { alt: "Scenic lounge drinks service" },
                                { alt: "Breathtaking view from Scenic deck" },
                                /* Duplicate for infinite loop */
                                { alt: "Scenic luxury dining interior" },
                                { alt: "Scenic suite private balcony" },
                                { alt: "Scenic ship sailing at sunset" },
                                { alt: "Guided excursion in historic European city" },
                                { alt: "Scenic lounge drinks service" },
                                { alt: "Breathtaking view from Scenic deck" },
                            ].map((img, i) => (
                                <div key={i} className="scenic-worth-slider-item">
                                    <img
                                        // src={ShipImage}
                                        alt={img.alt}
                                        className="scenic-worth-slider-image"
                                    />
                                    <div className="scenic-worth-slider-overlay">
                                        <span className="scenic-worth-slider-label">{img.alt}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

                       {/* ── INLINE CTA 2 ────────────────────────────────────────────── */}
            <section className="scenic-inline-cta-section-light" style={{backgroundColor: 'var(--bg-white)'}}>
                <div className="scenic-inline-cta-container-light">
                    <div className="scenic-inline-cta-card-light">
                        <div className="scenic-inline-cta-content-light">
                            <span className="scenic-inline-cta-eyebrow-light">Exclusive Promotions</span>
                            <h3 className="scenic-inline-cta-title-light">Thinking About Booking Scenic?</h3>
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

            {/* ── IS SCENIC BETTER THAN VIKING? ────────────────────────────── */}
            <section className="scenic-viking-section" id="scenic-vs-viking">
                <div className="scenic-viking-container">
                    <div className="scenic-viking-header">
                        <h2 className="scenic-viking-title">Is Scenic Better Than Viking?</h2>
                        <div className="scenic-expensive-card-accent" style={{ margin: "0 auto 24px auto" }}></div>
                        <p className="scenic-viking-subtitle">
                            This is one of the most common questions travelers ask.
                        </p>
                    </div>

                    <div className="scenic-viking-grid">
                        {/* Card 1: Scenic */}
                        <div className="scenic-viking-card scenic-viking-card-accent">
                            <span className="scenic-viking-badge">Choose Scenic if you want:</span>
                            <div className="scenic-viking-list">
                                {[
                                    "Butler service",
                                    "More premium inclusions",
                                    "Luxury-focused experience",
                                    "Personalized service",
                                    "Premium beverages included",
                                ].map((item, i) => (
                                    <div key={i} className="scenic-viking-item">
                                        <span className="scenic-viking-icon-wrap">
                                            <Check size={16} strokeWidth={2.5} />
                                        </span>
                                        <span className="scenic-viking-item-text">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Card 2: Viking */}
                        <div className="scenic-viking-card">
                            <span className="scenic-viking-badge">Choose Viking if you want:</span>
                            <div className="scenic-viking-list">
                                {[
                                    "Lower starting prices",
                                    "Simple Scandinavian design",
                                    "Strong destination focus",
                                    "Excellent value",
                                ].map((item, i) => (
                                    <div key={i} className="scenic-viking-item">
                                        <span className="scenic-viking-icon-wrap">
                                            <CheckCircle size={16} strokeWidth={2.5} />
                                        </span>
                                        <span className="scenic-viking-item-text">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <p className="scenic-viking-conclusion">
                        Neither is objectively better—each caters to a different type of traveler.
                    </p>
                </div>
            </section>

 

            {/* ── WHY BOOKING THROUGH A LUXURY TRAVEL ADVISOR ADDS VALUE ───── */}
            <section
                className="Avr-planning-section"
                id="why-book-through-advisor"
                style={{ backgroundColor: "var(--bg-white)" }}
            >
                <div className="Asc-container">
                    <div className="Avr-planning-heading">
                        <span className="Avr-planning-eyebrow">Personalized Value Guidance</span>
                        <h2 className="Avr-planning-title">
                            Why Booking Through a <br /> Luxury Travel Advisor Adds Value
                        </h2>
                        <div className="Avr-planning-divider"></div>
                    </div>

                    <div className="Avr-planning-grid">
                        <div className="Avr-planning-left">
                            <div className="Avr-planning-left-deco">&ldquo;</div>
                            <h3 className="Avr-planning-left-title">
                                Make Sure You're Getting the Right Value
                            </h3>
                            <p className="Avr-planning-left-body">
                                Professional guidance helps ensure you
                                choose the itinerary that provides the best
                                overall value. A luxury travel advisor can
                                compare Scenic itineraries, recommend the
                                right suite category, explain promotions,
                                coordinate airfare and hotels, compare
                                Scenic with Riverside, Viking, AmaWaterways,
                                and Uniworld, and match the cruise to your
                                travel style and budget.
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
                                A luxury travel advisor can help you:
                            </p>

                            <div className="Avr-planning-benefits-grid">
                                {[
                                    { icon: <Wallet size={18} />, label: "Compare Scenic itineraries" },
                                    { icon: <Home size={18} />, label: "Recommend the right suite category" },
                                    { icon: <BadgePercent size={18} />, label: "Explain promotions" },
                                    { icon: <Plane size={18} />, label: "Coordinate airfare and hotels" },
                                    { icon: <Ship size={18} />, label: "Compare Scenic with Riverside, Viking, AmaWaterways, and Uniworld" },
                                    { icon: <Gem size={18} />, label: "Match the cruise to your travel style and budget" },
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
                            Everything travelers need to know before deciding
                            whether Scenic is worth the money.
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
                                    Effortless Luxury, <br /> Worth the Investment
                                </h2>
                                <div className="Asc-help-accent"></div>
                            </div>

                            <div className="Asc-help-grid">
                                <div className="Asc-help-info">
                                    <p className="Asc-help-intro">
                                        For travelers seeking a premium,
                                        all-inclusive river cruise with
                                        exceptional service, luxury
                                        accommodations, gourmet dining, and
                                        immersive cultural experiences, yes—
                                        Scenic is worth the investment.

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
                                                Rather than offering the
                                                lowest upfront price, Scenic
                                                focuses on delivering an
                                                effortless luxury experience
                                                where many of the expenses
                                                that typically add up during
                                                a vacation are already
                                                included.
                                            </p>
                                            <br />
                                            <p className="Asc-help-intro">
                                                If your goal is to enjoy
                                                Europe's rivers with
                                                personalized service, elegant
                                                surroundings, and minimal
                                                onboard surprises, Scenic
                                                remains one of the strongest
                                                choices in the luxury river
                                                cruise market.
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

export default IsScenicRiverCruiseWorthTheMoney;