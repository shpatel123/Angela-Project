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
    Luggage,
    Backpack,
    Plug,
    FileText,
    Wallet,
    Clock,
    Briefcase,
    CheckCircle,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

/* ── Placeholder image imports ────────────────────────────────────
   Replace these with real Scenic airfare / transfer / arrival
   photography once available. Paths assume a new
   /assets/ScenicAirfareTransfers folder. */
// import HeroImage from "../../assets/ScenicAirfareTransfers/scenic-airfare-hero.jpg";
// import TransferImage from "../../assets/ScenicAirfareTransfers/scenic-airport-transfer.jpg";
// import EmbarkationImage from "../../assets/ScenicAirfareTransfers/scenic-embarkation.jpg";
// import LuggageImage from "../../assets/ScenicAirfareTransfers/scenic-luggage-assist.jpg";

import { Helmet } from "react-helmet-async";
import "../RiversideLuxuryCruisesReviews/RiversideLuxuryCruisesReviews.css";
import "../RiversideLuxuryCruises/RiversideLuxuryCruises.css";
import "../ScenicRiverCruises/ScenicRiverCruises.css";
import "../UniversityGroupTravelPlanning/UniversityGroupTravelPlanning.css";
import "../VikingCruises/VikingCruises.css";
import "../AzamaraDiningGuide/AzamaraDiningGuide.css";

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
            "@id": "https://tripsandships.com/scenic-river-cruises/airfare-transfers/#webpage",
            name: "Scenic River Cruise Airfare, Transfers & Arrival Guide (2026) | Flights & Transportation",
            url: "https://tripsandships.com/scenic-river-cruises/airfare-transfers",
            description:
                "Planning your Scenic River Cruise? Learn about airfare, airport transfers, arrival times, pre-cruise hotels, embarkation, luggage, and expert travel tips for a stress-free vacation.",
        },
        {
            "@type": "Article",
            "@id": "https://tripsandships.com/scenic-river-cruises/airfare-transfers/#article",
            headline: "Scenic River Cruise Airfare, Transfers & Arrival Guide",
            description:
                "A complete guide to Scenic River Cruise airfare, airport transfers, embarkation, and arrival planning, including whether flights are included, when to arrive, and what to expect on embarkation and departure day.",
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
            "@id": "https://tripsandships.com/scenic-river-cruises/airfare-transfers/#breadcrumb",
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
                    name: "Scenic River Cruise Airfare, Transfers & Arrival Guide",
                    item: "https://tripsandships.com/scenic-river-cruises/airfare-transfers",
                },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://tripsandships.com/scenic-river-cruises/airfare-transfers/#itemlist",
            name: "Scenic River Cruise Airfare, Transfers & Arrival Guide — What This Guide Covers",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "60-Second Answer" },
                { "@type": "ListItem", position: 2, name: "Scenic Airfare & Transfers at a Glance" },
                { "@type": "ListItem", position: 3, name: "Are Airport Transfers Included?" },
                { "@type": "ListItem", position: 4, name: "Should You Book Flights Through Scenic?" },
                { "@type": "ListItem", position: 5, name: "When Should You Arrive?" },
                { "@type": "ListItem", position: 6, name: "Popular Embarkation Cities" },
                { "@type": "ListItem", position: 7, name: "Pre-Cruise Hotels & Embarkation Day" },
                { "@type": "ListItem", position: 8, name: "Transportation During Your Cruise" },
                { "@type": "ListItem", position: 9, name: "Embarkation Day vs. Departure Day" },
                { "@type": "ListItem", position: 10, name: "Common Travel Mistakes" },
                { "@type": "ListItem", position: 11, name: "Why Book Through a Luxury Travel Advisor?" },
                { "@type": "ListItem", position: 12, name: "Final Verdict" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://tripsandships.com/scenic-river-cruises/airfare-transfers/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Is airfare included with Scenic River Cruises?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Usually no. Airfare is generally separate unless included in a special promotion or customized vacation package.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are airport transfers included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Many Scenic itineraries include airport transfers under certain booking conditions. Check your confirmation documents for eligibility.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I arrive the day before my cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Arriving one day before embarkation helps avoid stress caused by flight delays or missed connections.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can Scenic book my flights?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scenic may assist with air arrangements as part of selected packages or promotions. Your travel advisor can also help coordinate flights.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What happens if my flight is delayed?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Contact Scenic or your travel advisor immediately. Travel insurance and arriving early are the best ways to minimize disruption.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are luggage transfers included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Scenic staff typically assist with luggage during embarkation and disembarkation.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I stay in a hotel before my cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Most experienced travelers recommend staying at least one night before embarkation, particularly after international flights.",
                    },
                },
                {
                    "@type": "Question",
                    name: "When should I book my flights?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Booking several months in advance often provides the best combination of pricing and flight availability.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can I book my own airfare?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Many guests choose to book independently using airline loyalty programs or preferred carriers.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I purchase travel insurance?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Travel insurance is strongly recommended to protect against unexpected delays, cancellations, medical emergencies, and lost luggage.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How early should I book my return flight?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Avoid scheduling very early departures. Allow sufficient time after disembarkation for transfers, airport security, and check-in.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I use a travel advisor for flights and transfers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. A luxury travel advisor can coordinate flights, hotels, airport transfers, and your Scenic cruise into one seamless itinerary.",
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
            q: "Is airfare included with Scenic River Cruises?",
            a: "Usually no. Airfare is generally separate unless included in a special promotion or customized vacation package.",
        },
        {
            q: "Are airport transfers included?",
            a: "Many Scenic itineraries include airport transfers under certain booking conditions. Check your confirmation documents for eligibility.",
        },
        {
            q: "Should I arrive the day before my cruise?",
            a: "Yes. Arriving one day before embarkation helps avoid stress caused by flight delays or missed connections.",
        },
        {
            q: "Can Scenic book my flights?",
            a: "Scenic may assist with air arrangements as part of selected packages or promotions. Your travel advisor can also help coordinate flights.",
        },
        {
            q: "What happens if my flight is delayed?",
            a: "Contact Scenic or your travel advisor immediately. Travel insurance and arriving early are the best ways to minimize disruption.",
        },
        {
            q: "Are luggage transfers included?",
            a: "Yes. Scenic staff typically assist with luggage during embarkation and disembarkation.",
        },
        {
            q: "Should I stay in a hotel before my cruise?",
            a: "Most experienced travelers recommend staying at least one night before embarkation, particularly after international flights.",
        },
        {
            q: "When should I book my flights?",
            a: "Booking several months in advance often provides the best combination of pricing and flight availability.",
        },
        {
            q: "Can I book my own airfare?",
            a: "Yes. Many guests choose to book independently using airline loyalty programs or preferred carriers.",
        },
        {
            q: "Should I purchase travel insurance?",
            a: "Yes. Travel insurance is strongly recommended to protect against unexpected delays, cancellations, medical emergencies, and lost luggage.",
        },
        {
            q: "How early should I book my return flight?",
            a: "Avoid scheduling very early departures. Allow sufficient time after disembarkation for transfers, airport security, and check-in.",
        },
        {
            q: "Should I use a travel advisor for flights and transfers?",
            a: "Yes. A luxury travel advisor can coordinate flights, hotels, airport transfers, and your Scenic cruise into one seamless itinerary.",
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

/* ── 60-Second Answer Emphasis Data ────────────────────────────────── */
const quickAnswerEmphasis = [
    "Airfare usually isn't included in the cruise fare",
    "Airport transfers are often included on eligible itineraries",
    "Arrive at least one day before embarkation",
    "Scenic staff assist with luggage at embarkation",
    "Book flights early for the best fares",
    "Travel insurance is strongly recommended",
];


/* ── What Transfers Cover Data ─────────────────────────────────────── */
const transferInclusions = [
    "Between the airport and your ship",
    "Between the airport and your hotel (if arranged through Scenic)",
    "At the beginning and end of your cruise",
];

/* ── Flight Delay Risk Data ────────────────────────────────────────── */
const delayRisks = ["Weather delays", "Airline disruptions", "Missed connections", "Immigration queues", "Lost luggage"];

/* ── Booking Options Tabs Data ─────────────────────────────────────── */
const bookingFactors = [
    {
        id: "through-scenic",
        title: "Booking Through Scenic",
        badge: "Through Scenic",
        icon: Plane,
        desc: "Booking your flights through Scenic can simplify the entire trip, especially for guests who prefer a single point of contact for their travel arrangements.",
        columns: [
            {
                label: "Benefits may include:",
                items: [
                    "Coordinated flight schedules",
                    "Easier transfer arrangements",
                    "One point of contact",
                    "Simplified travel planning",
                ],
            },
        ],
    },
    {
        id: "independently",
        title: "Booking Flights Independently",
        badge: "Independently",
        icon: Compass,
        desc: "Some guests prefer to book their own flights for more control over airline choice and loyalty benefits. If booking independently, allow plenty of time between your flight and embarkation.",
        columns: [
            {
                label: "Advantages include:",
                items: [
                    "Greater airline choice",
                    "Loyalty program benefits",
                    "Flexible schedules",
                    "Opportunity to use reward points",
                ],
            },
        ],
    },
];



/* ── Popular Embarkation Cities Data ───────────────────────────────── */
const embarkationCities = [
    { key: "amsterdam", title: "Amsterdam", items: ["Canal-lined streets", "World-class museums"] },
    { key: "basel", title: "Basel", items: ["Gateway to the Swiss Alps", "Vibrant art scene"] },
    { key: "budapest", title: "Budapest", items: ["Historic thermal baths", "Stunning Danube views"] },
    { key: "vienna", title: "Vienna", items: ["Imperial palaces", "Rich musical heritage"] },
    { key: "paris", title: "Paris", items: ["Iconic landmarks", "World-renowned cuisine"] },
    { key: "porto", title: "Porto", items: ["Riverside Ribeira district", "Home of Port wine"] },
    { key: "lyon", title: "Lyon", items: ["UNESCO World Heritage center", "Renowned culinary capital"] },
];

/* ── Common Travel Mistakes Data ───────────────────────────────────── */
const commonMistakes = [
    "Flying in on embarkation day",
    "Booking the cheapest flight with multiple connections",
    "Forgetting travel insurance",
    "Assuming transfers are always included",
    "Packing passports in checked luggage",
    "Booking very early return flights",
];

/* ── Embarkation Day vs. Departure Day Data ────────────────────────── */
const dayComparisonData = [
    { key: "step1", scenic: "Arrive at the ship or designated meeting point", ocean: "Breakfast is typically served" },
    { key: "step2", scenic: "Check in with Scenic staff", ocean: "Luggage assistance is provided" },
    { key: "step3", scenic: "Luggage is collected and delivered to your suite", ocean: "Included transfers operate according to your itinerary" },
    { key: "step4", scenic: "Receive your cruise information and ship orientation", ocean: "Guests continue to the airport or post-cruise accommodations" },
    { key: "step5", scenic: "Relax before departure", ocean: "Avoid booking flights too early in the morning" },
];

/* ── Main Component ──────────────────────────────────────────────── */
const ScenicRiverCruiseAirfareTransfers = () => {
    const [readMore, setReadMore] = useState(false);
    const [readMoreVerdict, setReadMoreVerdict] = useState(false);
    const [activeBooking, setActiveBooking] = useState("through-scenic");

    const currentBooking =
        bookingFactors.find((f) => f.id === activeBooking) || bookingFactors[0];
    const ActiveBookingIcon = currentBooking.icon;

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Scenic River Cruise Airfare, Transfers & Arrival Guide  | Flights & Transportation</title>
                <meta name="title" content="Scenic River Cruise Flights & Transfers | Complete Arrival Guide" />
                <meta
                    name="description"
                    content="Planning your Scenic River Cruise? Learn about airfare, airport transfers, arrival times, pre-cruise hotels, embarkation, luggage, and expert travel tips for a stress-free vacation."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ───────────────────────────────────────────────────── */}
            <section className="Scenic_hero_section">
                <div className="Scenic_hero_overlay"></div>

                <div className="Scenic_hero_content">
                    <h1>Scenic River Cruise <br /> Airfare, Transfers &amp; Arrival Guide</h1>

                    <p>
                        Planning your flights and arrival is one of the most
                        important parts of a successful Scenic River Cruise.
                        While Scenic handles many aspects of your luxury
                        vacation, understanding what's included—and what
                        you'll need to arrange yourself—can help you avoid
                        unnecessary stress before your cruise even begins.
                    </p>

                    {readMore && (
                        <p>
                            Many first-time guests ask whether Scenic
                            includes airfare, whether airport transfers are
                            included, whether they should arrive a day
                            early, how embarkation works, and what happens
                            if their flight is delayed. This guide answers
                            those questions and walks you through every
                            stage of your journey, from booking flights to
                            stepping aboard your Scenic Space-Ship.
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

            {/* ── 60-SECOND ANSWER ──────────────────────────────────────── */}
            <section className="rlc-qa-section" id="quick-answer" style={{ backgroundColor: "var(--bg-white)" }}>
                <div className="rlc-qa-container">
                    <div className="rlc-qa-card-wrapper">
                        <h2 className="rlc-qa-title">Airfare &amp; Transfers: The 60-Second Answer</h2>
                        <div className="rlc-qa-accent"></div>

                        <p className="rlc-qa-intro">
                            If you're short on time — here's what to know before you book
                        </p>

                        <ul className="rlc-qa-list">
                            {quickAnswerEmphasis.map((item, i) => (
                                <li key={i} className="rlc-qa-item">
                                    <span className="rlc-qa-icon-wrap">
                                        <Plane size={16} strokeWidth={2.5} className="rlc-qa-check-icon" />
                                    </span>
                                    <span className="rlc-qa-text">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="rlc-qa-outro">
                            Our Recommendation: Book your flights early,
                            arrive the day before your cruise, and consider
                            working with a luxury travel advisor to
                            coordinate flights, hotels, and transfers.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── DOES SCENIC INCLUDE AIRFARE? ─────────────────────────────── */}
            <section className="adg-c-section adg-c-bg-soft" id="does-scenic-include-airfare">
                <div className="adg-c-container">
                    <div className="adg-c-section-header">
                        <h2 className="adg-c-h2">Does Scenic Include Airfare?</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="Asc-section-intro">
                            In most cases, airfare is not automatically included in the standard Scenic River Cruise fare.
                        </p>
                    </div>

                    <div className="adg-c-overview-layout">
                        <div className="adg-c-overview-icons">
                            {[
                                "Promotional airfare offers",
                                "Reduced airfare packages",
                                "Business-class upgrade promotions",
                                "Customized vacation packages that include flights",
                                "Fly Free promotions on select itineraries",
                                "Flexible routing options with major airlines",
                                "Convenient pre- and post-cruise flight connections"
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
                                        Because offers change throughout the year, it's worth comparing current promotions before booking.
                                    </p>
                                </div>
                            </div>

                            <div className="adg-c-overview-image-wrap" style={{ background: "radial-gradient(circle at center, var(--bg-dark2) 0%, var(--bg-dark) 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", border: "1px solid var(--navy-border)", borderRadius: "var(--radius-lg)", height: '300px', }}>
                                <Plane size={48} style={{ color: "rgba(255, 255, 255, 0.4)", marginBottom: "16px" }} strokeWidth={1.2} />
                                <div className="adg-c-overview-img-overlay">
                                    <span className="adg-c-overview-img-label">
                                        Scenic Promotional Airfare
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ARE AIRPORT TRANSFERS INCLUDED? ───────────────────────────── */}
            <section className="rlc-lc-worth-section" id="airport-transfers">
                <div className="rlc-lc-worth-container">
                    <div className="rlc-lc-worth-grid">
                        <div className="rlc-lc-worth-content">
                            <h2 className="rlc-lc-worth-title">Are Airport Transfers Included?</h2>

                            <div className="rlc-lc-worth-accent"></div>

                            <p className="rlc-lc-worth-lead">
                                One of Scenic's luxury benefits is that
                                airport transfers are often included on
                                eligible itineraries. Transfers may be
                                available:
                            </p>

                            <div className="rlc-lc-worth-emphasis-grid">
                                {transferInclusions.map((item, idx) => (
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
                                    Eligibility depends on your booking
                                    conditions, itinerary, and how your
                                    flights were arranged. Always review
                                    your confirmation documents for exact
                                    details.
                                </p>
                            </div>
                        </div>

                        <div className="rlc-lc-worth-media">
                            <div className="rlc-lc-worth-media-wrapper">
                                <img
                                    // src={TransferImage}
                                    alt="Guests being greeted for an airport transfer on a Scenic river cruise"
                                    className="rlc-lc-worth-media-img"
                                />
                                <div className="rlc-lc-worth-media-overlay"></div>

                                <div className="rlc-lc-worth-media-badge">
                                    <span>Seamless Arrivals • Door to Ship</span>
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
                        <h3 className="scenic-inline-cta-title-dark">Not Sure How to Book Your Flights?</h3>
                        <p className="scenic-inline-cta-text-dark">
                            Let us help you compare airfare options, confirm transfer eligibility, and plan your ideal arrival for your Scenic itinerary.
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

            {/* ── SHOULD YOU BOOK FLIGHTS THROUGH SCENIC? ──────────────────── */}
            <section className="luc-destinations-section" id="booking-flights">
                <div className="luc-destinations-container">
                    <div className="luc-destinations-header">
                        <span className="scenic-drinks-eyebrow" style={{ display: "block", textAlign: "center", marginBottom: "8px" }}>Should You Book Flights Through Scenic?</span>
                        <h2 className="luc-destinations-title">Should You Book Flights Through Scenic?</h2>
                        <div className="adg-c-accent-line"></div>
                        <p className="luc-destinations-intro">
                            There are advantages to both options—here's how they compare.
                        </p>
                    </div>

                    <div className="luc-dest-layout">
                        <nav className="luc-dest-nav">
                            {bookingFactors.map((item) => {
                                const NavIcon = item.icon;
                                const isActive = activeBooking === item.id;

                                return (
                                    <button
                                        key={item.id}
                                        className={`luc-dest-nav-btn ${isActive ? "luc-dest-nav-btn--active" : ""}`}
                                        onClick={() => setActiveBooking(item.id)}
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

                        <div className="luc-dest-panel" key={activeBooking}>
                            <div className="luc-dest-img-wrap" style={{ background: "radial-gradient(circle at center, var(--bg-dark2) 0%, var(--bg-dark) 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                <ActiveBookingIcon size={48} style={{ color: "rgba(255, 255, 255, 0.4)", marginBottom: "40px" }} strokeWidth={1.2} />
                                <div className="luc-dest-img-overlay">
                                    <div className="luc-dest-img-icon">
                                        <ActiveBookingIcon size={22} strokeWidth={1.6} />
                                    </div>
                                    <span className="luc-dest-img-title">{currentBooking.title}</span>
                                </div>
                            </div>

                            {currentBooking.desc && (
                                <p className="luc-dest-panel-desc">{currentBooking.desc}</p>
                            )}

                            <div className="luc-dest-columns">
                                {currentBooking.columns.map((col, cIdx) => (
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


            {/* ── HOTEL STAYS & LUGGAGE HANDLING ─────────────────────────────── */}
            <section className="scenic-prep-section" id="prep-guide" style={{ backgroundColor: 'var(--bg-soft)' }}>
                <div className="scenic-prep-container">
                    <div className="scenic-prep-grid">
                        {/* Hotel Stays */}
                        <div className="scenic-prep-card">
                            <div className="scenic-prep-card-header">
                                <Home size={22} className="scenic-prep-card-icon" />
                                <h3>Should You Stay in a Hotel Before Your Cruise?</h3>
                            </div>
                            <p className="scenic-prep-card-lead">
                                Yes—especially for long-haul international travel.
                            </p>
                            <span className="scenic-prep-card-subtitle">Benefits include:</span>
                            <ul className="scenic-prep-list">
                                {[
                                    "Recovering from jet lag",
                                    "Reduced travel stress",
                                    "Time to explore",
                                    "Extra flexibility if flights are delayed"
                                ].map((item, idx) => (
                                    <li key={idx}>
                                        <Check size={16} className="scenic-prep-list-check" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="scenic-prep-card-footer">
                                <p>Many travelers also extend their vacation with post-cruise hotel stays.</p>
                            </div>
                        </div>

                        {/* Luggage Handling */}
                        <div className="scenic-prep-card">
                            <div className="scenic-prep-card-header">
                                <Luggage size={22} className="scenic-prep-card-icon" />
                                <h3>Luggage Handling</h3>
                            </div>
                            <p className="scenic-prep-card-lead">
                                Scenic staff assist with luggage during embarkation and disembarkation.
                            </p>
                            <span className="scenic-prep-card-subtitle">This means:</span>
                            <ul className="scenic-prep-list">
                                {[
                                    "Less lifting",
                                    "Smooth transfers",
                                    "Convenient arrival experience"
                                ].map((item, idx) => (
                                    <li key={idx}>
                                        <Check size={16} className="scenic-prep-list-check" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="scenic-prep-card-footer accent-footer">
                                <p>Carry valuables, medications, passports, and travel documents with you rather than placing them in checked luggage.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHEN SHOULD YOU ARRIVE? ───────────────────────────────────── */}
            <section className="rlc-lc-worth-section" id="when-to-arrive">
                <div className="rlc-lc-worth-container">
                    <div className="rlc-lc-worth-grid">
                        <div className="rlc-lc-worth-content">
                            <h2 className="rlc-lc-worth-title">When Should You Arrive?</h2>

                            <div className="rlc-lc-worth-accent"></div>

                            <p className="rlc-lc-worth-lead">
                                Our recommendation: Arrive at least one day
                                before embarkation. International flights
                                can be affected by:
                            </p>

                            <div className="rlc-lc-worth-emphasis-grid">
                                {delayRisks.map((item, idx) => (
                                    <div key={idx} className="rlc-lc-worth-emphasis-item">
                                        <span className="rlc-lc-worth-emphasis-icon">
                                            <X size={16} strokeWidth={3} />
                                        </span>
                                        <span className="rlc-lc-worth-emphasis-label">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="rlc-lc-worth-conclusion-box">
                                <p className="rlc-lc-worth-conclusion-text">
                                    Arriving early reduces stress and gives
                                    you time to explore your embarkation
                                    city. To minimize the impact of delays,
                                    book nonstop flights when possible,
                                    purchase comprehensive travel insurance,
                                    and keep Scenic's emergency contact
                                    information accessible.
                                </p>
                            </div>
                        </div>

                        <div className="rlc-lc-worth-media">
                            <div className="rlc-lc-worth-media-wrapper">
                                <img
                                    // src={EmbarkationImage}
                                    alt="Travelers arriving early in a Scenic embarkation city"
                                    className="rlc-lc-worth-media-img"
                                />
                                <div className="rlc-lc-worth-media-overlay"></div>

                                <div className="rlc-lc-worth-media-badge">
                                    <span>Arrive a Day Early • Travel Stress-Free</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

                      
            {/* ── EMBARKATION DAY VS. DEPARTURE DAY ─────────────────────────── */}
            <section className="adg-section" style={{ backgroundColor: "var(--bg-soft)" }} id="embarkation-vs-departure">
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Embarkation Day vs. <br /> Departure Day</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            Here's what to expect at the start and end of your Scenic River Cruise.
                        </p>
                    </div>

                    <div className="Asc-table-wrapper">
                        <table className="Asc-fleet-table">
                            <thead>
                                <tr>
                                    <th>Embarkation Day</th>
                                    <th>Departure Day</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dayComparisonData.map((row) => (
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



            {/* ── POPULAR EMBARKATION CITIES ────────────────────────────────── */}
            <section
                className="adg-section"
                id="embarkation-cities"
                style={{ backgroundColor: "var(--bg-white)" }}
            >
                <div className="adg-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Popular Embarkation Cities</h2>

                        <div className="adg-accent-line"></div>

                        <p className="adg-intro">
                            Depending on your itinerary, Scenic cruises
                            often begin or end in these cities—destinations
                            worth exploring in their own right.
                        </p>
                    </div>

                    <div className="adgs-grid">
                        {embarkationCities.map((item) => (
                            <div key={item.key} className="adg-card">
                                <div
                                    className="adg-card-image-wrap"
                                    style={{
                                        background: "radial-gradient(circle at center, var(--bg-dark2) 0%, var(--bg-dark) 100%)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        minHeight: "120px",
                                    }}
                                >
                                    <div className="adg-card-eyebrow-wrap">
                                        <span className="adg-card-eyebrow-icon">
                                            <Landmark size={20} strokeWidth={1.6} />
                                        </span>
                                        <span className="adg-card-eyebrow-label">Embarkation City</span>
                                    </div>
                                </div>

                                <div className="adg-card-body">
                                    <h3 className="adg-card-title">{item.title}</h3>

                                    <ul className="adg-card-list">
                                        {item.items.map((point, idx) => (
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

            
            {/* ── INLINE CTA 2 ────────────────────────────────────────────── */}
            <section className="scenic-inline-cta-section-light" style={{ backgroundColor: 'var(--bg-soft)' }}>
                <div className="scenic-inline-cta-container-light">
                    <div className="scenic-inline-cta-card-light">
                        <div className="scenic-inline-cta-content-light">
                            <span className="scenic-inline-cta-eyebrow-light">Onboard Excursions</span>
                            <h3 className="scenic-inline-cta-title-light">Getting Around During Your Cruise</h3>
                            <p className="scenic-inline-cta-text-light">
                                Most included excursions use luxury motor coaches, comfortable minibuses, walking tours, and Scenic's private transportation where applicable—coordinated to match your daily itinerary.
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


            {/* ── ONBOARD TRANSPORTATION & DELAY RISK ────────────────────────── */}
            <section className="scenic-prep-section bg-white" id="transit-delays">
                <div className="scenic-prep-container">
                    <div className="scenic-prep-grid">
                        {/* Transportation */}
                        <div className="scenic-prep-card">
                            <div className="scenic-prep-card-header">
                                <Ship size={22} className="scenic-prep-card-icon" />
                                <h3>Transportation During Your Cruise</h3>
                            </div>
                            <p className="scenic-prep-card-lead">
                                Most included excursions use:
                            </p>
                            <ul className="scenic-prep-list">
                                {[
                                    "Luxury motor coaches",
                                    "Comfortable minibuses",
                                    "Walking tours",
                                    "Scenic's private transportation where applicable"
                                ].map((item, idx) => (
                                    <li key={idx}>
                                        <Check size={16} className="scenic-prep-list-check" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="scenic-prep-card-footer">
                                <p>Transfers are coordinated to match your daily itinerary.</p>
                            </div>
                        </div>

                        {/* Flight Delays */}
                        <div className="scenic-prep-card">
                            <div className="scenic-prep-card-header">
                                <Clock size={22} className="scenic-prep-card-icon" />
                                <h3>What Happens if Your Flight Is Delayed?</h3>
                            </div>
                            <p className="scenic-prep-card-lead">
                                Flight delays happen, particularly on international journeys. To minimize the impact:
                            </p>
                            <ul className="scenic-prep-list">
                                {[
                                    "Book nonstop flights when possible.",
                                    "Arrive a day early.",
                                    "Purchase comprehensive travel insurance.",
                                    "Keep Scenic's emergency contact information accessible.",
                                    "Inform Scenic or your travel advisor immediately if delays occur."
                                ].map((item, idx) => (
                                    <li key={idx}>
                                        <Check size={16} className="scenic-prep-list-check" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="scenic-prep-card-footer accent-footer">
                                <p>Planning ahead is the best way to protect your vacation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ── AIRFARE & TRANSFER TIPS ───────────────────────────────────── */}
            <section className="scenic-tips-section" id="airfare-transfer-tips">
                <div className="scenic-tips-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Airfare &amp; Transfer Tips</h2>
                        <div className="adg-accent-line"></div>
                    </div>

                    <div className="scenic-tips-grid">
                        {[
                            "Book flights early for the best fares.",
                            "Compare Scenic promotions before purchasing airfare.",
                            "Arrive one day early.",
                            "Keep important documents in your carry-on.",
                            "Label all luggage clearly.",
                            "Confirm transfer details before departure.",
                            "Consider travel insurance for added peace of mind."
                        ].map((item, idx) => (
                            <div key={idx} className="scenic-tips-item">
                                <div className="scenic-tips-icon-wrap">
                                    <CheckCircle size={18} strokeWidth={2.5} />
                                </div>
                                <span className="scenic-tips-text">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

  

            {/* ── COMMON TRAVEL MISTAKES ────────────────────────────────────── */}
            <section className="scenic-exclusions-section" id="common-mistakes" style={{ backgroundColor: 'var(--bg-white)' }}>
                <div className="scenic-exclusions-container">
                    <div className="adg-header">
                        <h2 className="adg-h2">Common Travel <br /> Mistakes</h2>
                        <div className="adg-accent-line"></div>
                        <p className="Asc-section-intro">
                            Many first-time Scenic guests make these
                            mistakes. Working with a luxury travel advisor
                            can help you avoid them.
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


            {/* ── WHY BOOK THROUGH A LUXURY TRAVEL ADVISOR? ────────────────── */}
            <section
                className="Avr-planning-section"
                id="why-book-through-advisor"
                style={{ backgroundColor: "var(--bg-soft)" }}
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
                                Coordinating Every Detail Before Departure
                            </h3>
                            <p className="Avr-planning-left-body">
                                Coordinating flights, hotels, transfers, and
                                cruise details can quickly become
                                complicated. A luxury travel advisor can
                                compare airfare options, explain Scenic
                                transfer policies, arrange pre- and
                                post-cruise hotels, coordinate airport
                                transfers, recommend ideal flight schedules,
                                monitor promotions, and provide assistance
                                if travel plans change.
                            </p>

                            <div className="Avr-planning-alert">
                                <ShieldCheck size={18} className="Avr-planning-alert-icon" />
                                <p className="Avr-planning-alert-text">
                                    Having one point of contact before and
                                    during your trip offers valuable peace
                                    of mind.
                                </p>
                            </div>
                        </div>

                        <div className="Avr-planning-right">
                            <p className="Avr-planning-right-intro">
                                A luxury travel advisor can help you:
                            </p>

                            <div className="Avr-planning-benefits-grid">
                                {[
                                    { icon: <Wallet size={18} />, label: "Compare airfare options" },
                                    { icon: <FileText size={18} />, label: "Explain Scenic transfer policies" },
                                    { icon: <Home size={18} />, label: "Arrange pre- and post-cruise hotels" },
                                    { icon: <Plane size={18} />, label: "Coordinate airport transfers" },
                                    { icon: <Calendar size={18} />, label: "Recommend ideal flight schedules" },
                                    { icon: <Sparkles size={18} />, label: "Monitor promotions" },
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
                            Everything travelers need to know about airfare,
                            transfers, and arrival before their Scenic River
                            Cruise.
                        </p>
                    </div>
                    <FAQ />
                </div>
            </section>

            {/* ── FINAL VERDICT / CTA ──────────────────────────────────────── */}
            <section className="Asc-help-section">
                <div className="Asc-help-bg-wrap">
                    <img
                        // src={LuggageImage}
                        alt="Scenic ship docked in a European embarkation city at dusk"
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
                                    Plan Your Arrival <br /> for a Smooth Start
                                </h2>
                                <div className="Asc-help-accent"></div>
                            </div>

                            <div className="Asc-help-grid">
                                <div className="Asc-help-info">
                                    <p className="Asc-help-intro">
                                        Planning your airfare and arrival
                                        carefully is one of the easiest ways
                                        to ensure your Scenic River Cruise
                                        begins smoothly. While airfare is
                                        generally booked separately, Scenic
                                        often includes airport transfers on
                                        eligible bookings and provides
                                        excellent support throughout the
                                        embarkation process.

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
                                                For the most relaxed
                                                experience, arrive at least
                                                one day before your cruise
                                                and confirm your transfer
                                                arrangements in advance.
                                            </p>
                                            <br />
                                            <p className="Asc-help-intro">
                                                At Trips &amp; Ships Luxury
                                                Travel, we'll work with you
                                                as a trusted advisor who can
                                                coordinate every detail of
                                                your journey, from flights
                                                and transfers to hotels and
                                                embarkation.
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
                                            "Compare airfare options",
                                            "Explain Scenic transfer policies",
                                            "Arrange pre- and post-cruise hotels",
                                            "Coordinate airport transfers",
                                            "Recommend ideal flight schedules",
                                            "Monitor promotions",
                                            "Compare Scenic with other luxury lines",
                                            "Provide assistance if travel plans change",
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

export default ScenicRiverCruiseAirfareTransfers;