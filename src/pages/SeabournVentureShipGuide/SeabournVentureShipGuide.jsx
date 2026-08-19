import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Check,
    X,
    Minus,
    Plus,
    ArrowRight,
    Ship,
    Anchor,
    Waves,
    Sun,
    Heart,
    Compass,
    Utensils,
    Landmark,
    Mountain,
    Snowflake,
    Home,
    Users,
    Award,
    Star,
    MapPin,
    Map,
    Layers,
    ShieldCheck,
    Eye,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

import { Helmet } from "react-helmet-async";
import "../SeabournCruises/SeabournCruises.css";
import "../Seabournships/Seabournships.css";
import "./SeabournVenture.css";

/* ── Schema ─────────────────────────────────────────────────────── */
const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-venture/#webpage",
            url: "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-venture/",
            name: "Seabourn Venture: Ship Guide, Suites & Expeditions",
            headline:
                "Seabourn Venture Ship Guide: Suites, Dining, Zodiacs, Submarine & Expeditions",
            description:
                "Explore Seabourn Venture, including suites, dining, Zodiacs, submarines, expedition capabilities, onboard amenities and destinations.",
            keywords: [
                "Seabourn Venture",
                "Seabourn Venture ship",
                "Seabourn Venture cruise",
                "Seabourn Venture review",
                "Seabourn Venture suites",
                "Seabourn Venture cabins",
                "Seabourn Venture dining",
                "Seabourn Venture submarine",
                "Seabourn Venture Zodiacs",
                "Seabourn Venture expedition ship",
                "Seabourn Venture Antarctica",
                "Seabourn Venture Arctic",
                "Seabourn Venture destinations",
                "Seabourn Venture amenities",
                "Seabourn Venture deck plan",
                "Seabourn Venture itinerary",
                "Seabourn Venture ship guide",
            ],
            isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.tripsandships.com/#website",
                url: "https://www.tripsandships.com/",
                name: "Trips & Ships Luxury Travel",
            },
            breadcrumb: {
                "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-venture/#breadcrumb",
            },
            mainEntity: {
                "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-venture/#ship",
            },
            inLanguage: "en-US",
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-venture/#breadcrumb",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tripsandships.com/" },
                { "@type": "ListItem", position: 2, name: "Seabourn Cruises", item: "https://www.tripsandships.com/seabourn-cruises/" },
                { "@type": "ListItem", position: 3, name: "Seabourn Ships", item: "https://www.tripsandships.com/seabourn-cruises/ships/" },
                { "@type": "ListItem", position: 4, name: "Seabourn Venture", item: "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-venture/" },
            ],
        },
        {
            "@type": "Thing",
            "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-venture/#ship",
            name: "Seabourn Venture",
            description:
                "A purpose-built luxury expedition ship designed for remote destinations, including Antarctica and Arctic regions, combining expedition capabilities with Seabourn's all-suite luxury experience.",
            url: "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-venture/",
            brand: { "@type": "Brand", name: "Seabourn" },
            additionalProperty: [
                { "@type": "PropertyValue", name: "Ship Type", value: "Luxury expedition ship" },
                { "@type": "PropertyValue", name: "Guest Capacity", value: "Approximately 264 guests" },
                { "@type": "PropertyValue", name: "Entered Service", value: "2022" },
                { "@type": "PropertyValue", name: "Polar Class", value: "PC6" },
                { "@type": "PropertyValue", name: "Length", value: "Approximately 557 feet" },
                { "@type": "PropertyValue", name: "Width", value: "Approximately 78 feet" },
                { "@type": "PropertyValue", name: "Zodiacs", value: "24" },
                { "@type": "PropertyValue", name: "Expedition Team", value: "Up to 19 members" },
                { "@type": "PropertyValue", name: "Kayaks", value: "Available for expedition activities" },
                { "@type": "PropertyValue", name: "Submarine", value: "Available for selected expedition experiences" },
                { "@type": "PropertyValue", name: "Primary Purpose", value: "Luxury expedition cruising" },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-venture/#features",
            name: "Seabourn Venture Expedition Features",
            description: "Key expedition capabilities and onboard features of Seabourn Venture.",
            numberOfItems: 8,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Zodiacs", description: "Seabourn Venture carries 24 Zodiacs for shore landings, wildlife viewing, scenic cruising and coastal exploration." },
                { "@type": "ListItem", position: 2, name: "Kayaking", description: "Kayaking provides opportunities to explore coastlines, ice, wildlife habitats, remote islands and sheltered bays on applicable expedition voyages." },
                { "@type": "ListItem", position: 3, name: "Submarine", description: "Seabourn Venture has submarine capability for selected underwater exploration experiences, subject to availability and operating conditions." },
                { "@type": "ListItem", position: 4, name: "Expedition Team", description: "A dedicated expedition team provides destination interpretation, lectures, guidance and support throughout the voyage." },
                { "@type": "ListItem", position: 5, name: "Polar Capability", description: "Seabourn Venture has a PC6 Polar Class rating supporting operation in appropriate polar environments." },
                { "@type": "ListItem", position: 6, name: "All-Suite Accommodations", description: "Seabourn Venture offers an all-suite luxury accommodation experience with multiple suite categories." },
                { "@type": "ListItem", position: 7, name: "Luxury Dining", description: "Dining options can include The Restaurant, The Colonnade, Earth & Ocean and in-suite dining." },
                { "@type": "ListItem", position: 8, name: "Remote Destinations", description: "Seabourn Venture is designed for expedition destinations including Antarctica, the Arctic, Greenland, Iceland and remote coastal regions." },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/seabourn-cruises/ships/seabourn-venture/#faq",
            mainEntity: [
                { "@type": "Question", name: "What is Seabourn Venture?", acceptedAnswer: { "@type": "Answer", text: "Seabourn Venture is a purpose-built luxury expedition ship designed for remote destinations, including polar regions. It combines expedition equipment with Seabourn's all-suite luxury experience." } },
                { "@type": "Question", name: "How many guests can Seabourn Venture accommodate?", acceptedAnswer: { "@type": "Answer", text: "Seabourn Venture accommodates approximately 264 guests." } },
                { "@type": "Question", name: "When did Seabourn Venture enter service?", acceptedAnswer: { "@type": "Answer", text: "Seabourn Venture entered service in 2022." } },
                { "@type": "Question", name: "Is Seabourn Venture an expedition ship?", acceptedAnswer: { "@type": "Answer", text: "Yes. Venture is specifically designed as a luxury expedition ship." } },
                { "@type": "Question", name: "Does Seabourn Venture have Zodiacs?", acceptedAnswer: { "@type": "Answer", text: "Yes. The ship carries 24 Zodiacs for expedition activities, landings and exploration." } },
                { "@type": "Question", name: "Does Seabourn Venture have a submarine?", acceptedAnswer: { "@type": "Answer", text: "Yes. Seabourn Venture has submarine capability for selected expedition experiences." } },
                { "@type": "Question", name: "Does Seabourn Venture offer kayaking?", acceptedAnswer: { "@type": "Answer", text: "Yes. Kayaking is available on applicable expedition voyages, subject to conditions and safety requirements." } },
                { "@type": "Question", name: "Does Seabourn Venture go to Antarctica?", acceptedAnswer: { "@type": "Answer", text: "Yes. Antarctica is one of the ship's key expedition destinations." } },
                { "@type": "Question", name: "Does Seabourn Venture go to the Arctic?", acceptedAnswer: { "@type": "Answer", text: "Yes. Selected itineraries explore Arctic destinations and regions." } },
                { "@type": "Question", name: "Are Seabourn Venture suites all-suite accommodations?", acceptedAnswer: { "@type": "Answer", text: "Yes. Venture is an all-suite ship." } },
                { "@type": "Question", name: "Do Seabourn Venture suites have balconies?", acceptedAnswer: { "@type": "Answer", text: "Many suites feature private verandas. The exact configuration depends on the suite category." } },
                { "@type": "Question", name: "Is food included on Seabourn Venture?", acceptedAnswer: { "@type": "Answer", text: "Yes. Dining is included as part of Seabourn's all-inclusive cruise experience." } },
                { "@type": "Question", name: "What restaurants are on Seabourn Venture?", acceptedAnswer: { "@type": "Answer", text: "Dining options can include The Restaurant, The Colonnade, Earth & Ocean and in-suite dining, with exact offerings subject to the ship and voyage." } },
                { "@type": "Question", name: "Is Seabourn Venture good for first-time expedition cruisers?", acceptedAnswer: { "@type": "Answer", text: "Yes. Venture can be a strong option for travelers who want to experience expedition cruising without giving up luxury accommodations, fine dining and personalized service." } },
                { "@type": "Question", name: "Is Seabourn Venture good for Antarctica?", acceptedAnswer: { "@type": "Answer", text: "Yes. Its expedition equipment, polar capability, Zodiacs, expedition team and luxury accommodations make it particularly well suited to Antarctica." } },
                { "@type": "Question", name: "What should I pack for Seabourn Venture?", acceptedAnswer: { "@type": "Answer", text: "Pack warm, waterproof layers and appropriate expedition footwear for outdoor activities. Also bring smart-casual clothing for time onboard." } },
                { "@type": "Question", name: "Are Seabourn Venture expedition activities guaranteed?", acceptedAnswer: { "@type": "Answer", text: "No. Activities depend on weather, sea conditions, wildlife, local regulations and operational considerations." } },
                { "@type": "Question", name: "Is Seabourn Venture worth the money?", acceptedAnswer: { "@type": "Answer", text: "For travelers who prioritize luxury, remote destinations and expedition experiences, Venture can offer strong value. It is less suitable for travelers who primarily want a large resort-style cruise ship." } },
            ],
        },
    ],
};

/* ── FAQ Accordion (reused Sbc-faq-* classes) ─────────────────── */
function FAQ() {
    const [open, setOpen] = useState(null);

    const faqData = [
        { q: "What is Seabourn Venture?", a: "Seabourn Venture is a purpose-built luxury expedition ship designed for remote destinations, including polar regions. It combines expedition equipment with Seabourn's all-suite luxury experience." },
        { q: "How many guests can Seabourn Venture accommodate?", a: "Seabourn Venture accommodates approximately 264 guests." },
        { q: "When did Seabourn Venture enter service?", a: "Seabourn Venture entered service in 2022." },
        { q: "Is Seabourn Venture an expedition ship?", a: "Yes. Venture is specifically designed as a luxury expedition ship." },
        { q: "Does Seabourn Venture have Zodiacs?", a: "Yes. The ship carries 24 Zodiacs for expedition activities, landings and exploration." },
        { q: "Does Seabourn Venture have a submarine?", a: "Yes. Seabourn Venture has submarine capability for selected expedition experiences." },
        { q: "Does Seabourn Venture offer kayaking?", a: "Yes. Kayaking is available on applicable expedition voyages, subject to conditions and safety requirements." },
        { q: "Does Seabourn Venture go to Antarctica?", a: "Yes. Antarctica is one of the ship's key expedition destinations." },
        { q: "Does Seabourn Venture go to the Arctic?", a: "Yes. Selected itineraries explore Arctic destinations and regions." },
        { q: "Are Seabourn Venture suites all-suite accommodations?", a: "Yes. Venture is an all-suite ship." },
        { q: "Do Seabourn Venture suites have balconies?", a: "Many suites feature private verandas. The exact configuration depends on the suite category." },
        { q: "Is food included on Seabourn Venture?", a: "Yes. Dining is included as part of Seabourn's all-inclusive cruise experience." },
        { q: "What restaurants are on Seabourn Venture?", a: "Dining options can include The Restaurant, The Colonnade, Earth & Ocean and in-suite dining, with exact offerings subject to the ship and voyage." },
        { q: "Is Seabourn Venture good for first-time expedition cruisers?", a: "Yes. Venture can be a strong option for travelers who want to experience expedition cruising without giving up luxury accommodations, fine dining and personalized service." },
        { q: "Is Seabourn Venture good for Antarctica?", a: "Yes. Its expedition equipment, polar capability, Zodiacs, expedition team and luxury accommodations make it particularly well suited to Antarctica." },
        { q: "What should I pack for Seabourn Venture?", a: "Pack warm, waterproof layers and appropriate expedition footwear for outdoor activities. Also bring smart-casual clothing for time onboard." },
        { q: "Are Seabourn Venture expedition activities guaranteed?", a: "No. Activities depend on weather, sea conditions, wildlife, local regulations and operational considerations." },
        { q: "Is Seabourn Venture worth the money?", a: "For travelers who prioritize luxury, remote destinations and expedition experiences, Venture can offer strong value. It is less suitable for travelers who primarily want a large resort-style cruise ship." },
    ];

    return (
        <div className="Sbc-faq-list">
            {faqData.map((item, i) => (
                <div
                    key={i}
                    className={`Sbc-faq-item${open === i ? " Sbc-open" : ""}`}
                    onClick={() => setOpen(open === i ? null : i)}
                >
                    <div className="Sbc-faq-q">
                        <span>{item.q}</span>
                        <span className="Sbc-faq-icon">
                            {open === i ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
                        </span>
                    </div>
                    {open === i && (
                        <div className="Sbc-faq-a">
                            <div className="Sbc-faq-a-inner">{item.a}</div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

/* ── Data ──────────────────────────────────────────────────────── */
const glanceData = [
    { feature: "Ship type", value: "Luxury expedition ship" },
    { feature: "Guests", value: "Approximately 264" },
    { feature: "Entered service", value: "2022" },
    { feature: "Polar Class", value: "PC6" },
    { feature: "Length", value: "Approximately 557 feet" },
    { feature: "Width", value: "Approximately 78 feet" },
    { feature: "Zodiacs", value: "24" },
    { feature: "Expedition team", value: "Up to 19 members" },
    { feature: "Kayaks", value: "Available for expedition activities" },
    { feature: "Submarine", value: "Available for selected expedition experiences" },
    { feature: "Primary purpose", value: "Luxury expedition cruising" },
    { feature: "Best for", value: "Antarctica, Arctic and remote destinations" },
    { feature: "Atmosphere", value: "Intimate, sophisticated and adventurous" },
];

const capabilityCards = [
    { icon: Anchor, title: "Zodiacs", text: "The ship carries a fleet of Zodiacs for shore landings, wildlife viewing and coastal exploration." },
    { icon: Waves, title: "Kayaks", text: "Kayaking provides a quieter and more personal way to experience the surrounding environment." },
    { icon: Compass, title: "Submarine", text: "Seabourn Venture carries a submarine for selected underwater exploration experiences." },
    { icon: Users, title: "Expedition Team", text: "A dedicated expedition team provides destination interpretation, lectures, guidance and support throughout the voyage." },
    { icon: Snowflake, title: "Polar Capability", text: "The ship's PC6 Polar Class rating supports its operation in appropriate polar environments." },
];

const zodiacUses = ["Shore landings", "Wildlife viewing", "Scenic cruising", "Photography", "Coastal exploration", "Transportation to landing sites", "Expedition activities"];

const submarineSights = ["Marine life", "Underwater rock formations", "Seabed landscapes", "Kelp or other marine vegetation", "Geological features"];

const kayakNear = ["Ice", "Coastlines", "Wildlife habitats", "Remote islands", "Sheltered bays"];

const suiteFeatures = ["Ocean views", "Private veranda", "Living area", "Bedroom", "Bathroom", "In-suite bar", "Luxury amenities", "Suite host service"];

const bestSuiteList = [
    "For value: consider a standard veranda suite",
    "For more space: look at Penthouse-level accommodations",
    "For maximum luxury: consider the ship's largest premium suites",
    "For wildlife viewing: prioritize a good outdoor viewing area and convenient location",
];

const diningVenues = ["The Restaurant", "The Colonnade", "Earth & Ocean", "In-suite dining", "Casual dining"];

const diningCards = [
    { icon: Utensils, title: "The Restaurant", text: "The Restaurant provides a more traditional fine-dining environment, with multi-course meals, changing menus, table service, wine, destination-inspired dishes and dessert selections. It provides a contrast to the active nature of the expedition experience." },
    { icon: Sun, title: "The Colonnade", text: "The Colonnade offers a more casual alternative, particularly convenient after an active morning or before an afternoon expedition activity. Depending on the meal period, guests may find breakfast, lunch, dinner, casual selections and regional dishes." },
    { icon: Waves, title: "Earth & Ocean", text: "Earth & Ocean provides another dining option with a more relaxed atmosphere and globally inspired cuisine — a useful alternative when guests want variety without a traditional fine-dining setting." },
    { icon: Home, title: "In-Suite Dining", text: "Guests can also enjoy meals in their suites, which is particularly appealing after a long expedition day. Imagine returning from a Zodiac landing, taking a shower and enjoying dinner while watching the landscape pass outside your veranda." },
    { icon: ShieldCheck, title: "Is Food Included on Seabourn Venture?", text: "Yes. Dining is part of Seabourn's all-inclusive luxury cruise experience. A broad selection of beverages is also included. Additional charges may apply to selected optional services or experiences depending on the voyage." },
];

const destinations = [
    {
        icon: Snowflake,
        title: "Antarctica",
        subtitle: "Seabourn Venture Antarctica Cruises",
        desc: "Antarctica is one of the most natural destinations for Seabourn Venture. The ship's combination of polar capability, Zodiacs, kayaks, expedition team, submarine, luxury suites and fine dining creates an experience designed around the Antarctic environment.",
        listLabel: "Wildlife sightings can include:",
        listItems: ["Penguins", "Seals", "Whales", "Seabirds", "Icebergs", "Glaciers", "Mountains", "Dramatic coastal landscapes"],
        best: "Wildlife encounters are never guaranteed.",
    },
    {
        icon: Compass,
        title: "Arctic",
        subtitle: "Seabourn Venture in the Arctic",
        desc: "The Arctic offers a very different expedition experience. Depending on the itinerary, travelers may encounter dramatic coastlines, Arctic wildlife, remote settlements, ice, fjords, glaciers and historic exploration sites.",
        listLabel: "The Arctic can be particularly appealing to travelers who:",
        listItems: ["Have already experienced Antarctica", "Want a different polar environment", "Enjoy remote settlements", "Enjoy historic exploration sites"],
        best: "",
    },
    {
        icon: Mountain,
        title: "Greenland",
        subtitle: "Seabourn Venture and Greenland",
        desc: "Greenland can combine spectacular scenery with cultural and historical experiences. The expedition approach allows guests to experience locations that may be difficult to reach through conventional tourism.",
        listLabel: "Possible highlights include:",
        listItems: ["Glaciers", "Icebergs", "Fjords", "Remote communities", "Wildlife", "Local culture"],
        best: "",
    },
];

const packForExpedition = ["Waterproof outerwear", "Warm layers", "Comfortable expedition clothing", "Waterproof footwear", "Gloves", "Hat", "Sunglasses"];

const bestForCards = [
    { icon: Heart, title: "Couples", items: ["Remote destinations", "Luxury suites", "Fine dining", "Private balconies", "Expedition activities", "Wildlife", "Romantic scenery"] },
    { icon: Compass, title: "Solo Travelers", items: ["An intimate environment", "Shared Zodiac excursions", "Natural opportunities to meet other guests", "A more personal feel than a large expedition vessel"] },
    { icon: Users, title: "Families", items: ["Wildlife", "Adventure", "Education", "Photography", "Outdoor experiences", "Remote destinations"] },
];

const shipComparison = [
    { feature: "Primary purpose", venture: "Expedition", traditional: "Luxury ocean cruising" },
    { feature: "Zodiacs", venture: "Yes", traditional: "No expedition fleet" },
    { feature: "Kayaks", venture: "Yes", traditional: "Not a core feature" },
    { feature: "Submarine", venture: "Yes", traditional: "No" },
    { feature: "Expedition team", venture: "Dedicated", traditional: "Standard onboard enrichment" },
    { feature: "Polar destinations", venture: "Strong focus", traditional: "Limited" },
    { feature: "Remote landings", venture: "Yes", traditional: "Less central" },
    { feature: "Luxury suites", venture: "Yes", traditional: "Yes" },
    { feature: "Fine dining", venture: "Yes", traditional: "Yes" },
    { feature: "Small-ship atmosphere", venture: "Yes", traditional: "Yes" },
];

const rightForVenture = ["Luxury suites", "Fine dining", "Personalized service", "Zodiacs", "Kayaking", "Submarine experiences", "Remote destinations", "A sophisticated onboard environment"];

const prosList = ["Purpose-built expedition ship", "Small passenger capacity", "PC6 Polar Class", "Zodiacs", "Kayaks", "Submarine capability", "Dedicated expedition team", "Luxury all-suite accommodations", "Fine dining", "Premium beverages", "Remote destinations", "Strong Antarctica experience"];

const consList = ["Expedition pricing is premium", "Outdoor activities depend heavily on weather", "Wildlife encounters aren't guaranteed", "Some expedition activities have participation requirements", "Not designed for travelers seeking large-ship entertainment", "Remote itineraries require more travel planning"];

const whoShouldSail = ["Luxury adventure travelers", "Antarctica travelers", "Arctic explorers", "Wildlife enthusiasts", "Photographers", "Couples", "Experienced cruisers", "Expedition newcomers who want a softer introduction", "Multigenerational adventure travelers"];

const notFitList = ["Large swimming pools", "Dozens of restaurants", "Major entertainment venues", "Nightclubs", "Extensive onboard attractions", "Large shopping areas", "A resort-style cruise experience"];

const bookingTips = [
    { title: "Choose the destination first", text: "Don't choose Venture simply because of the ship. Start with where you want to go." },
    { title: "Consider the season", text: "Polar destinations have limited seasonal windows." },
    { title: "Compare itineraries carefully", text: "Two Antarctica itineraries can provide very different experiences." },
    { title: "Choose your suite strategically", text: "A veranda can be especially valuable on an expedition voyage." },
    { title: "Pack for the destination", text: "Your expedition clothing matters more than your formalwear." },
    { title: "Leave flexibility in your expectations", text: "Expedition cruising is inherently unpredictable — the weather may change, wildlife may appear unexpectedly and landing sites can change. That unpredictability is part of the adventure." },
];



/* ── Main Component ──────────────────────────────────────────────── */
const SeabournVentureGuide = () => {
    const [readMore, setReadMore] = useState(false);
    const [activeDestTab, setActiveDestTab] = useState(0);

    const ActiveDestIcon = destinations[activeDestTab].icon;

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Seabourn Venture: Ship Guide, Suites & Expeditions</title>
                <meta name="title" content="Seabourn Venture Ship Guide: Suites, Zodiacs & Submarine" />
                <meta
                    name="description"
                    content="Explore Seabourn Venture, including suites, dining, Zodiacs, submarines, expedition capabilities, onboard amenities and destinations."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ─────────────────────────────────────────────────── */}
            <section className="Sbc-hero-section">
                <div className="Sbc-hero-overlay"></div>
                <div className="Sbc-hero-content">
                    <h1>Seabourn Venture <br /> Ship Guide</h1>
                    <p>
                        Seabourn Venture is Seabourn's purpose-built luxury expedition ship, designed for travelers who want to explore remote destinations without giving up the comfort, service and dining associated with an ultra-luxury cruise.
                    </p>

                    {readMore && (
                        <>
                            <p>
                                The ship combines a relatively intimate passenger capacity with serious expedition capabilities, including Zodiacs, kayaks, expedition equipment and a submarine. That combination is what makes Seabourn Venture different from Seabourn's traditional ocean ships.
                            </p>
                            <p>
                                Instead of choosing between luxury and adventure, guests can experience both on the same voyage. This guide covers the Seabourn Venture suites, dining, expedition capabilities, Zodiacs, submarine, onboard experience and destinations to help you decide whether Venture is the right Seabourn ship for your next expedition.
                            </p>
                        </>
                    )}

                    <div className="Sbc-hero-readmore-wrapper">
                        <button className="Sbc-hero-readmore-btn" onClick={() => setReadMore(!readMore)}>
                            {readMore ? "Read Less" : "Read More"}
                        </button>
                    </div>

                    <div className="rlc-page-cta-container" style={{ marginTop: "24px" }}>
                        <Link to="/contact" className="rlc-page-cta-btn rlc-btn-light" style={{ textDecoration: "none" }}>
                            Start Planning Your Seabourn Venture Voyage
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── AT A GLANCE ──────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Vtr-glance">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Essentials</span>
                        <h2 className="Sbc-h2">Seabourn Venture at a Glance</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Ssf-table-wrap">
                        <table className="Ssf-table">
                            <thead>
                                <tr>
                                    <th>Ship Feature</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {glanceData.map((row, i) => (
                                    <tr key={i}>
                                        <td data-label="Ship Feature">{row.feature}</td>
                                        <td data-label="Details">{row.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="Sbc-p" style={{ marginTop: '20px' }}>
                        Note: Shipboard activities and expedition equipment are subject to itinerary, weather, local regulations, safety requirements and operational conditions.
                    </p>
                </div>
            </section>

            {/* ── WHAT IS SEABOURN VENTURE? ────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-what-is">
                <div className="Sbc-container">
                    <div className="Sbc-what-grid">
                        <div className="Sbc-what-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">The Short Version</span>
                                <h2 className="Sbc-h2">What Is Seabourn Venture?</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p">
                                Seabourn Venture is a purpose-built expedition ship created for Seabourn's growing expedition program. The ship combines the characteristics of a luxury yacht with the capabilities required to operate in challenging environments.
                            </p>
                            <p className="Sbc-p Sbc-what-conclusion">
                                It was designed to explore destinations where conventional cruise ships may not be able to travel — including remote polar regions and other expedition destinations where access, weather and sea conditions can be unpredictable.
                            </p>
                        </div>

                        <div className="Sbc-what-image-container">
                            <div className="Sbc-what-image-placeholder">
                                <div className="Sbc-what-placeholder-icon-wrapper">
                                    <Ship size={40} className="Sbc-what-placeholder-icon" />
                                </div>
                                <span className="Sbc-what-placeholder-text">Seabourn Venture Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHY IS VENTURE DIFFERENT ─────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-why-choose">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">The Difference</span>
                                <h2 className="Sbc-h2">Why Is Seabourn Venture Different From Other Seabourn Ships?</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p">
                                The biggest difference is simple: Seabourn Venture is designed specifically for expedition travel. Seabourn's traditional ocean ships focus primarily on luxury cruising between established ports.
                            </p>
                            <div className="Sbc-brand-highlights" style={{ marginTop: '30px' }}>
                                <h4 className="Sbc-highlights-title">Venture adds:</h4>
                                <ul className="Sbc-highlights-list">
                                    {["Expedition equipment", "Zodiacs", "Kayaks", "Submarine exploration", "A dedicated expedition team", "Polar capabilities", "Remote destination itineraries"].map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={22} strokeWidth={2.5} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="Sbc-p Sbc-what-conclusion">
                                The result is a cruise that feels more adventurous while maintaining Seabourn's luxury standards.
                            </p>
                        </div>

                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Compass size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Venture vs Ocean Ships Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── EXPEDITION CAPABILITIES ──────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-capabilities">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Built For Exploration</span>
                        <h2 className="Sbc-h2">Seabourn Venture's Expedition Capabilities</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            The ship was designed around the idea that the destination should be experienced rather than simply viewed from the ship. Its expedition capabilities allow guests to leave the vessel and explore places that would otherwise be difficult to reach.
                        </p>
                    </div>

                    <div className="Sbc-card-grid">
                        {capabilityCards.map((card, i) => {
                            const Icon = card.icon;
                            return (
                                <div className="Sbc-card" key={i}>
                                    <div className="Sbc-card-icon">
                                        <Icon size={22} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="Sbc-card-title">{card.title}</h3>
                                    <p className="Sbc-card-text">{card.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── CTA 1 ─────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Expedition Planning</span>
                    <h3 className="Sbc-cta-title">Ready to Explore Antarctica or the Arctic?</h3>
                    <p className="Sbc-cta-text">
                        Let's compare Seabourn Venture departure dates, suite categories and expedition itineraries to find the right voyage for you.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Plan My Expedition
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>


            {/* ── ZODIACS ───────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-zodiacs">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Shore Access</span>
                                <h2 className="Sbc-h2">Seabourn Venture Zodiacs</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p">
                                Zodiac boats are an essential part of the expedition experience. They allow guests to travel from the ship toward remote beaches, wildlife areas, ice formations, coastal landscapes and small landing sites inaccessible to larger ships. Zodiac excursions can be one of the most exciting parts of an expedition cruise because they put guests much closer to the destination.
                            </p>
                            <div className="Sbc-qa-card">
                                <h4 className="Sbc-qa-card-title">What are Zodiacs used for on Seabourn Venture?</h4>
                                <ul className="Sbc-highlights-list">
                                    {zodiacUses.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={22} strokeWidth={2.5} />                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="Sbc-qa-card-footer">The exact experience depends heavily on the destination.</div>
                            </div>
                            <p className="Sbc-p">
                                In Antarctica, for example, a Zodiac may transport guests from the ship to a penguin colony or another landing location.
                            </p>
                        </div>

                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Anchor size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Venture Zodiacs Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SUBMARINE ─────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-submarine">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split Sbc-image-left">
                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Compass size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Venture Submarine Image Placeholder</span>
                            </div>
                        </div>

                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Beneath The Surface</span>
                                <h2 className="Sbc-h2">Seabourn Venture Submarine</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p">
                                One of the most distinctive features of Seabourn Venture is its submarine capability. The submarine provides guests with an opportunity to experience a destination from an entirely different perspective. Instead of observing a polar or remote environment only from the surface, guests may have the opportunity to explore beneath the water.
                            </p>
                            <div className="Sbc-qa-card">
                                <h4 className="Sbc-qa-card-title">What can you see from the submarine?</h4>
                                <ul className="Sbc-highlights-list">
                                    {submarineSights.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={22} strokeWidth={2.5} />                                               <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="Sbc-qa-card-footer">Underwater visibility and wildlife vary significantly by destination.</div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* ── KAYAKING ──────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-kayaking">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">A Quieter Pace</span>
                                <h2 className="Sbc-h2">Seabourn Venture Kayaking</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p">
                                Kayaking provides another way to explore the destination. Compared with traveling by Zodiac, kayaking can create a quieter and more immersive experience.
                            </p>
                            <div className="Sbc-qa-card">
                                <h4 className="Sbc-qa-card-title">Guests may have opportunities to paddle near:</h4>
                                <ul className="Sbc-highlights-list">
                                    {kayakNear.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={20} strokeWidth={2.5} style={{ color: "#10b981" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="Sbc-qa-card-footer">Weather and water conditions permitting.</div>
                            </div>
                            <p className="Sbc-p">
                                Kayaking requires appropriate weather and water conditions, and participation may be subject to experience, fitness and safety requirements.
                            </p>
                        </div>

                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Waves size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Venture Kayaking Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── EXPEDITION TEAM & LECTURES ───────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-expedition-team">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Expert Guidance</span>
                        <h2 className="Sbc-h2">Seabourn Venture Expedition Team</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            The expedition team is an important part of the ship's experience. Their role extends beyond simply guiding excursions — they can help guests understand what they are seeing throughout the voyage.
                        </p>
                    </div>

                    <div className="Vtr-team-grid">
                        {/* Card 1 — Areas of Expertise */}
                        <div className="Vtr-team-card">
                            <div className="Vtr-team-card-header">
                                <div className="Vtr-team-icon-wrap">
                                    <Users size={26} strokeWidth={1.5} />
                                </div>
                                <h3 className="Vtr-team-card-title">Areas of Expertise</h3>
                            </div>
                            <p className="Vtr-team-card-desc">
                                The team can include specialists with expertise in areas such as:
                            </p>
                            <div className="Vtr-team-tags">
                                {["Marine biology", "Wildlife", "History", "Geography", "Photography", "Geology", "Polar environments"].map((item, idx) => (
                                    <span className="Vtr-team-tag" key={idx}>{item}</span>
                                ))}
                            </div>
                            <p className="Vtr-team-card-note">
                                Their role extends beyond simply guiding excursions — they can help guests understand what they are seeing throughout the voyage.
                            </p>
                        </div>

                        {/* Card 2 — Lectures & Enrichment */}
                        <div className="Vtr-team-card">
                            <div className="Vtr-team-card-header">
                                <div className="Vtr-team-icon-wrap">
                                    <Star size={26} strokeWidth={1.5} />
                                </div>
                                <h3 className="Vtr-team-card-title">Expedition Lectures & Enrichment</h3>
                            </div>
                            <p className="Vtr-team-card-desc">
                                Between landings and excursions, the expedition team can provide educational programming. Topics may include:
                            </p>
                            <div className="Vtr-team-tags">
                                {["Wildlife", "Local history", "Geography", "Conservation", "Polar science", "Marine ecosystems", "Destination culture", "Photography"].map((item, idx) => (
                                    <span className="Vtr-team-tag" key={idx}>{item}</span>
                                ))}
                            </div>
                            <p className="Vtr-team-card-note">
                                This educational component is particularly valuable for travelers who want their expedition to be more than a sightseeing trip.
                            </p>
                        </div>
                    </div>
                </div>
            </section>



            {/* ── SUITES ────────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-suites">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Accommodations &amp; Luxury</span>
                        <h2 className="Sbc-h2">Seabourn Venture Suites</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Like other Seabourn ships, Venture offers an all-suite accommodation experience. Suites provide a comfortable base between expedition activities.
                        </p>
                    </div>

                    {/* Suite Features & Suite Categories Grid */}
                    <div className="Vtr-suite-main-grid">
                        {/* Card 1: Features */}
                        <div className="Vtr-suite-card">
                            <div className="Vtr-suite-card-badge">
                                <Home size={18} />
                                <span>Suite Highlights</span>
                            </div>
                            <h3 className="Vtr-suite-card-title">In-Suite Features &amp; Amenities</h3>
                            <p className="Vtr-suite-card-intro">
                                Depending on the category, guests can find features such as:
                            </p>
                            <div className="Vtr-suite-features-grid">
                                {[
                                    "Ocean views",
                                    "Private veranda",
                                    "Living area",
                                    "Bedroom",
                                    "Bathroom",
                                    "In-suite bar",
                                    "Luxury amenities",
                                    "Suite host service",
                                ].map((feature, idx) => (
                                    <div key={idx} className="Vtr-suite-feature-item">
                                        <Check size={16} className="Vtr-suite-check-icon" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="Vtr-suite-card-note">
                                The exact layout and amenities vary by suite category.
                            </div>
                        </div>

                        {/* Card 2: Suite Categories */}
                        <div className="Vtr-suite-card">
                            <div className="Vtr-suite-card-badge">
                                <Layers size={18} />
                                <span>Accommodation Options</span>
                            </div>
                            <h3 className="Vtr-suite-card-title">Seabourn Venture Suite Categories</h3>
                            <p className="Vtr-suite-card-intro">
                                The ship offers multiple accommodation categories designed for different levels of space and luxury.
                            </p>
                            <p className="Vtr-suite-choose-label">Travelers can generally choose among:</p>
                            <div className="Vtr-suite-categories-list">
                                {[
                                    "Veranda suites",
                                    "Penthouse suites",
                                    "Premium suites",
                                    "Larger top-tier suites",
                                ].map((cat, idx) => (
                                    <div key={idx} className="Vtr-suite-cat-box">
                                        <div className="Vtr-suite-cat-title-wrap">
                                            <Star size={15} className="Vtr-suite-star-icon" />
                                            <span className="Vtr-suite-cat-name">{cat}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="Vtr-suite-strategy-box">
                                <strong>Before selecting a suite:</strong> Compare the actual deck plan and location rather than relying solely on the category name.
                            </div>
                        </div>
                    </div>

                    {/* Q&A Cards (All-Suite & Balconies) */}
                    <div className="Vtr-suite-qa-grid">
                        <div className="Vtr-suite-qa-card">
                            <div className="Vtr-suite-qa-header">
                                <div className="Vtr-suite-qa-icon">
                                    <ShieldCheck size={22} />
                                </div>
                                <div>
                                    <span className="Vtr-suite-qa-tag">All-Suite Experience</span>
                                    <h4 className="Vtr-suite-qa-q">Are Seabourn Venture Suites All-Suite?</h4>
                                </div>
                            </div>
                            <div className="Vtr-suite-qa-body">
                                <span className="Vtr-suite-qa-answer-badge">Yes</span>
                                <p className="Vtr-suite-qa-p">
                                    Seabourn Venture is an all-suite luxury expedition ship.
                                </p>
                                <p className="Vtr-suite-qa-p">
                                    This is an important distinction from many expedition vessels, where accommodations can be significantly more compact.
                                </p>
                                <p className="Vtr-suite-qa-p highlight">
                                    On Venture, the suite remains an important part of the overall luxury experience.
                                </p>
                            </div>
                        </div>

                        <div className="Vtr-suite-qa-card">
                            <div className="Vtr-suite-qa-header">
                                <div className="Vtr-suite-qa-icon">
                                    <Eye size={22} />
                                </div>
                                <div>
                                    <span className="Vtr-suite-qa-tag">Private Verandas</span>
                                    <h4 className="Vtr-suite-qa-q">Do Seabourn Venture Suites Have Balconies?</h4>
                                </div>
                            </div>
                            <div className="Vtr-suite-qa-body">
                                <p className="Vtr-suite-qa-p">
                                    Many Seabourn Venture suites feature private verandas.
                                </p>
                                <p className="Vtr-suite-qa-p">
                                    A private veranda can be especially valuable on an expedition voyage because it gives you another place to watch:
                                </p>
                                <div className="Vtr-suite-veranda-tags">
                                    {["Icebergs", "Whales", "Seabirds", "Coastlines", "Mountains", "Scenic landscapes"].map((item, idx) => (
                                        <span key={idx} className="Vtr-suite-vtag">{item}</span>
                                    ))}
                                </div>
                                <div className="Vtr-suite-veranda-note">
                                    For wildlife-focused travelers, choosing a good suite location can significantly enhance the experience.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Best Suite Section */}
                    <div className="Vtr-suite-best-wrapper">
                        <div className="Vtr-suite-best-header">
                            <span className="Vtr-suite-best-eyebrow">Expedition Guidance</span>
                            <h3 className="Vtr-suite-best-title">Best Seabourn Venture Suite for an Expedition</h3>
                            <p className="Vtr-suite-best-subtitle">
                                There isn't one universally best suite. Your priorities should determine the choice.
                            </p>
                        </div>

                        <div className="Vtr-suite-best-grid">
                            <div className="Vtr-suite-best-card">
                                <div className="Vtr-suite-best-priority">For value</div>
                                <div className="Vtr-suite-best-recommendation">
                                    Consider a standard veranda suite.
                                </div>
                            </div>

                            <div className="Vtr-suite-best-card">
                                <div className="Vtr-suite-best-priority">For more space</div>
                                <div className="Vtr-suite-best-recommendation">
                                    Look at Penthouse-level accommodations.
                                </div>
                            </div>

                            <div className="Vtr-suite-best-card">
                                <div className="Vtr-suite-best-priority">For maximum luxury</div>
                                <div className="Vtr-suite-best-recommendation">
                                    Consider the ship's largest premium suites.
                                </div>
                            </div>

                            <div className="Vtr-suite-best-card">
                                <div className="Vtr-suite-best-priority">For wildlife viewing</div>
                                <div className="Vtr-suite-best-recommendation">
                                    Prioritize a suite with a good outdoor viewing area and convenient location.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA 2 ─────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Luxury Accommodations</span>
                    <h3 className="Sbc-cta-title">Find Your Ideal Venture Suite</h3>
                    <p className="Sbc-cta-text">
                        From value-focused veranda suites to the ship's largest premium categories, let us help you choose the right suite for your expedition.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Explore Suite Availability
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── DINING ────────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-dining">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Culinary Program</span>
                        <h2 className="Sbc-h2">Seabourn Venture Dining</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Luxury dining remains an important part of the Venture experience. After spending several hours exploring a remote destination, returning to a refined dining environment is one of the major advantages of expedition cruising with Seabourn. Dining is included as part of Seabourn's all-inclusive luxury cruise experience, along with a broad selection of beverages.
                        </p>
                        <ul className="Sbc-dining-venues">
                            {diningVenues.map((v, i) => (
                                <li key={i}>{v}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="Sbc-dining-grid">
                        {diningCards.map((card, i) => {
                            const Icon = card.icon;
                            return (
                                <div className="Sbc-dining-card" key={i}>
                                    <div className="Sbc-dining-image-placeholder">
                                        <div className="Sbc-dining-placeholder-icon-wrapper">
                                            <Icon size={24} className="Sbc-dining-placeholder-icon" />
                                        </div>
                                        <span className="Sbc-dining-placeholder-text">{card.title} Image Placeholder</span>
                                    </div>
                                    <h3 className="Sbc-card-title">{card.title}</h3>
                                    <p className="Sbc-card-text">{card.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── DESTINATIONS ──────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-destinations">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Where Venture Sails</span>
                        <h2 className="Sbc-h2">Seabourn Venture Destinations</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Seabourn Venture is designed for remote and expedition destinations. Its itineraries can include Antarctica, the Arctic, Greenland, Iceland, Northern Europe and other remote coastal regions. Itineraries can change over time, so travelers should check current sailing schedules when planning.
                        </p>
                    </div>

                    <div className="Sbc-dest-tabs-container">
                        <div className="Sbc-dest-tabs-nav" style={{ justifyContent: "center" }}>
                            {destinations.map((dest, i) => {
                                const Icon = dest.icon;
                                return (
                                    <button
                                        key={i}
                                        className={`Sbc-dest-tab-btn ${activeDestTab === i ? "active" : ""}`}
                                        onClick={() => setActiveDestTab(i)}
                                    >
                                        <Icon size={18} />
                                        <span>{dest.title}</span>
                                    </button>
                                );
                            })}
                        </div>

                        <div className="Sbc-dest-tab-content">
                            <div className="Sbc-dest-image-placeholder">
                                <div className="Sbc-dest-placeholder-icon-wrapper">
                                    <ActiveDestIcon size={36} className="Sbc-dest-placeholder-icon" />
                                </div>
                                <span className="Sbc-dest-placeholder-text">{destinations[activeDestTab].title} Travel Image</span>
                            </div>
                            <div className="Sbc-dest-details">
                                <span className="Sbc-dest-meta-badge">Featured Destination</span>
                                <h3 className="Sbc-dest-tab-title">{destinations[activeDestTab].subtitle}</h3>
                                <p className="Sbc-dest-tab-desc">{destinations[activeDestTab].desc}</p>

                                <div className="Sbc-dest-highlights">
                                    <h4 className="Sbc-dest-highlights-title">{destinations[activeDestTab].listLabel}</h4>
                                    <ul className="Sbc-dest-highlights-list">
                                        {destinations[activeDestTab].listItems.map((item, j) => (
                                            <li key={j}>
                                                <Check size={14} strokeWidth={2.5} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {destinations[activeDestTab].best && (
                                    <div className="Sbc-dest-best-strategy">
                                        <p>{destinations[activeDestTab].best}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ONBOARD ATMOSPHERE & DRESS CODE ──────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-atmosphere">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Onboard Feel</span>
                        <h2 className="Sbc-h2">Seabourn Venture <br /> Onboard Atmosphere</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Despite its expedition capabilities, Venture does not feel like a rugged research vessel. Guests can spend the morning in expedition gear and return later to a luxury suite, fine dining and a sophisticated lounge. That contrast is central to the Seabourn Venture concept.
                        </p>
                    </div>

                    <div className="Sbc-atmos-words">
                        {["Elegant", "Relaxed", "Intimate", "Adventurous", "Sophisticated"].map((w, i) => (
                            <span key={i}>{w}</span>
                        ))}
                    </div>

                    <div className="Sbc-atmos-grid">
                        <div className="Sbc-atmos-card">
                            <div className="Sbc-atmos-card-title">What to Pack for Expedition Activities</div>
                            <ul>
                                {packForExpedition.map((item, i) => (
                                    <li key={i}>
                                        <Check size={16} strokeWidth={2} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="Sbc-atmos-card">
                            <div className="Sbc-atmos-card-title">Onboard Dress Code</div>
                            <ul>
                                {["Smart-casual clothing for dining", "Relaxed atmosphere for evening activities", "No formal dress requirement most nights", "Comfortable footwear between activities"].map((item, i) => (
                                    <li key={i}>
                                        <Check size={16} strokeWidth={2} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA 3 ─────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Plan With Confidence</span>
                    <h3 className="Sbc-cta-title">Is Seabourn Venture Your Next Voyage?</h3>
                    <p className="Sbc-cta-text">
                        Let's compare Antarctica, Arctic and Greenland itineraries, suite categories and current promotions to find the best value for your expedition.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Speak with a Specialist
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── WHO IS VENTURE FOR: COUPLES / SOLO / FAMILIES ────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-best-for">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Right Fit</span>
                        <h2 className="Sbc-h2">Who Is Seabourn Venture Best For?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Venture is not a conventional family cruise ship with extensive children's entertainment, but adventurous multigenerational families, couples and solo travelers alike can find plenty to love.
                        </p>
                    </div>

                    <div className="Sbc-fit-grid">
                        {bestForCards.map((card, i) => {
                            const Icon = card.icon;
                            return (
                                <div className="Sbc-fit-card" key={i}>
                                    <div className="Sbc-card-icon">
                                        <Icon size={22} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="Sbc-card-title">{card.title}</h3>
                                    <ul>
                                        {card.items.map((item, j) => (
                                            <li key={j}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── VENTURE VS TRADITIONAL SEABOURN SHIPS (new table) ────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-ocean-vs-expedition">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Making Comparisons</span>
                        <h2 className="Sbc-h2">Seabourn Venture vs. Traditional Seabourn Ships</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Ssf-table-wrap">
                        <table className="Ssf-table">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Seabourn Venture</th>
                                    <th>Traditional Seabourn Ocean Ship</th>
                                </tr>
                            </thead>
                            <tbody>
                                {shipComparison.map((row, i) => (
                                    <tr key={i}>
                                        <td data-label="Feature">{row.feature}</td>
                                        <td data-label="Seabourn Venture">{row.venture}</td>
                                        <td data-label="Traditional Seabourn Ocean Ship">{row.traditional}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── VENTURE VS OTHER EXPEDITION SHIPS ────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-vs-others">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Standing Apart</span>
                                <h2 className="Sbc-h2">Seabourn Venture vs. Other Expedition Ships</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p">
                                Seabourn Venture is particularly attractive to travelers who don't want to compromise between expedition capability and luxury. Some expedition ships emphasize adventure first; others emphasize luxury first. Venture attempts to combine both.
                            </p>
                            <div className="Sbc-brand-highlights" style={{ marginTop: '24px' }}>
                                <h4 className="Sbc-highlights-title">Venture may be right for you if you want:</h4>
                                <ul className="Sbc-highlights-list">
                                    {rightForVenture.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={22} strokeWidth={3} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Compass size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Venture vs. Other Expedition Ships Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── IS SEABOURN VENTURE WORTH IT ─────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sbc-worth-it">
                <div className="Sbc-container">
                    <div className="Vtr-worth-wrapper">
                        <div className="Sbc-section-header">
                            <span className="Sbc-eyebrow">The Value Proposition</span>
                            <h2 className="Sbc-h2">Is Seabourn Venture Worth It?</h2>
                            <div className="Sbc-accent-line"></div>
                        </div>

                        <div className="Vtr-worth-verdict-card">
                            <span className="Vtr-worth-verdict-badge">The Verdict</span>
                            <h3 className="Vtr-worth-verdict-title">For the right traveler, yes.</h3>
                            <p className="Vtr-worth-verdict-desc">
                                Venture makes the most sense if your priority is exploring remote destinations while maintaining an ultra-luxury standard.
                            </p>
                        </div>

                        <div className="Vtr-worth-compelling-block">
                            <h3 className="Vtr-worth-compelling-title">It is especially compelling for travelers who want:</h3>
                            <div className="Vtr-worth-grid">
                                {[
                                    { icon: Compass, title: "Adventure", text: "without sacrificing comfort." },
                                    { icon: Utensils, title: "Remote destinations", text: "without giving up fine dining." },
                                    { icon: Home, title: "Expedition activities", text: "without giving up spacious suites." },
                                    { icon: Award, title: "Wildlife encounters", text: "followed by luxury onboard service." },
                                ].map((item, idx) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={idx} className="Vtr-worth-card">
                                            <div className="Vtr-worth-card-icon">
                                                <Icon size={22} />
                                            </div>
                                            <div className="Vtr-worth-card-content">
                                                <span className="Vtr-worth-item-title">{item.title}</span>
                                                <span className="Vtr-worth-item-text">{item.text}</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA 4 ─────────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Expert Advice</span>
                    <h3 className="Sbc-cta-title">Compare Expedition Options With an Expert</h3>
                    <p className="Sbc-cta-text">
                        Get personalized guidance on Seabourn Venture suite selection, departure dates, and special amenities from our expedition cruise specialists.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Get Expert Guidance
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* ── PROS AND CONS ─────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-pros-cons">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Weighing It Up</span>
                        <h2 className="Sbc-h2">Pros and Cons of Seabourn Venture</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-proscons-grid">
                        <div className="Sbc-proscons-card Sbc-pros">
                            <h3 className="Sbc-proscons-title">Pros</h3>
                            <ul>
                                {prosList.map((item, i) => (
                                    <li key={i}>
                                        <Check size={16} strokeWidth={2} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="Sbc-proscons-card Sbc-cons">
                            <h3 className="Sbc-proscons-title">Cons</h3>
                            <ul>
                                {consList.map((item, i) => (
                                    <li key={i}>
                                        <X size={16} strokeWidth={2} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHO SHOULD SAIL / SHOULD NOT CHOOSE ──────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Vtr-who-should-sail">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Ideal Match</span>
                        <h2 className="Sbc-h2">Who Should Sail Seabourn Venture?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Seabourn Venture is particularly well suited to travelers who say:
                        </p>
                        <blockquote className="Vtr-fit-quote">
                            "I want to see the world, but I don't want to sacrifice luxury to do it."
                        </blockquote>
                    </div>

                    <div className="Vtr-fit-match-card">
                        <div className="Vtr-fit-card-header">
                            <div className="Vtr-fit-card-icon-wrap Vtr-fit-icon-green">
                                <Check size={24} strokeWidth={2.5} />
                            </div>
                            <div>
                                <h3 className="Vtr-fit-card-title">It Is an Excellent Match For</h3>
                                <p className="Vtr-fit-card-subtitle">Travelers seeking a refined luxury expedition experience</p>
                            </div>
                        </div>
                        <div className="Vtr-fit-match-grid">
                            {[
                                "Luxury adventure travelers",
                                "Antarctica travelers",
                                "Arctic explorers",
                                "Wildlife enthusiasts",
                                "Photographers",
                                "Couples",
                                "Experienced cruisers",
                                "Expedition newcomers who want a softer introduction",
                                "Multigenerational adventure travelers",
                            ].map((item, idx) => (
                                <div key={idx} className="Vtr-fit-match-item">
                                    <Check size={16} className="Vtr-fit-check-icon" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="Vtr-fit-not-card">
                        <div className="Vtr-fit-card-header">
                            <div className="Vtr-fit-card-icon-wrap Vtr-fit-icon-navy">
                                <X size={24} strokeWidth={2.5} />
                            </div>
                            <div>
                                <h3 className="Vtr-fit-card-title">Who Should Not Choose Seabourn Venture?</h3>
                                <p className="Vtr-fit-card-subtitle">Venture may not be the best choice if your ideal vacation requires:</p>
                            </div>
                        </div>
                        <div className="Vtr-fit-not-grid">
                            {[
                                "Large swimming pools",
                                "Dozens of restaurants",
                                "Major entertainment venues",
                                "Nightclubs",
                                "Extensive onboard attractions",
                                "Large shopping areas",
                                "A resort-style cruise experience",
                            ].map((item, idx) => (
                                <div key={idx} className="Vtr-fit-not-item">
                                    <X size={16} className="Vtr-fit-x-icon" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="Vtr-fit-conclusion-box">
                            <p>
                                If you prefer relaxing by a pool in the Mediterranean rather than traveling by Zodiac to a remote landing site, one of Seabourn's traditional ocean ships may be a better fit.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TIPS FOR BOOKING (new Vtr-tips classes) ──────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Vtr-tips">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Before You Book</span>
                        <h2 className="Sbc-h2">Tips for Booking Seabourn Venture</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Vtr-tips-grid">
                        {bookingTips.map((tip, i) => (
                            <div className="Vtr-tip-card" key={i}>
                                <div className="Vtr-tip-number">{i + 1}</div>
                                <h3 className="Vtr-tip-title">{tip.title}</h3>
                                <p className="Vtr-tip-text">{tip.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ANGELA HUGHES AUTHORITY BOX ──────────────────────────── */}
            <section className="Sbc-expert-section" id="Vtr-expert-insight">
                <div className="Sbc-container">
                    <div className="Sbc-expert-heading">
                        <span className="Sbc-expert-eyebrow">Luxury Travel Expertise</span>
                        <h2 className="Sbc-expert-title">Angela Hughes Luxury Authority</h2>
                        <div className="Sbc-expert-divider"></div>
                    </div>

                    <div className="Sbc-expert-grid">
                        <div className="Sbc-expert-image-col">
                            <div className="Sbc-expert-portrait-wrap">
                                <img src={AboutImage} alt="Angela Hughes – Luxury Travel Expert" className="Sbc-expert-portrait" />
                                <div className="Sbc-expert-portrait-badge">
                                    <Star size={14} />
                                    <span>40+ Years Experience</span>
                                </div>
                            </div>

                            <div className="Sbc-expert-name-card">
                                <h3 className="Sbc-expert-name">Angela Hughes</h3>
                                <p className="Sbc-expert-role">CEO of Trips &amp; Ships Luxury Travel</p>
                                <div className="Sbc-expert-name-divider"></div>
                                <p className="Sbc-expert-countries">
                                    <MapPin size={14} />
                                    Traveled to more than 121 countries
                                </p>
                            </div>
                        </div>

                        <div className="Sbc-expert-content-col">
                            <div className="Sbc-expert-credentials-box">
                                <h4 className="Sbc-expert-credentials-title">
                                    <Award size={16} />
                                    Angela Hughes Authority Box
                                </h4>

                                <div className="Sbc-expert-credentials-grid">
                                    {[
                                        { icon: <Award size={16} />, label: "CEO of Trips & Ships Luxury Travel" },
                                        { icon: <Star size={16} />, label: "Over 40 years in the travel industry" },
                                        { icon: <MapPin size={16} />, label: "Traveled to more than 121 countries" },
                                        { icon: <Award size={16} />, label: "Founder of Luxury Travel University" },
                                        { icon: <Users size={16} />, label: "Global luxury travel speaker and trainer" },
                                        { icon: <Users size={16} />, label: "Weekly industry columnist" },
                                        { icon: <Users size={16} />, label: "Travel Leaders Network Advisory Board member" },
                                        { icon: <Award size={16} />, label: "2024 Luxury Travel Influencer of the Year" },
                                        { icon: <Star size={16} />, label: "Named one of the Most Influential Women in Travel in 2026 by TravelPulse" },
                                        { icon: <Award size={16} />, label: "Featured in major travel publications globally" },
                                        { icon: <Ship size={16} />, label: "Expert in luxury cruises, safaris, expeditions, river cruising, and premium travel" },
                                    ].map((item, i) => (
                                        <div className="Sbc-expert-list-item" key={i}>
                                            <span className="Sbc-expert-list-icon">{item.icon}</span>
                                            <span className="Sbc-expert-list-label">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FAQ ───────────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sbc-faq">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <h2 className="Sbc-h2">Frequently Asked Questions</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-faq-intro">
                            Everything travelers need to know before booking Seabourn Venture.
                        </p>
                    </div>
                    <FAQ />
                </div>
            </section>

            {/* ── FINAL VERDICT ─────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-dark" id="Sbc-verdict">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Our Seabourn Venture Verdict</span>
                        <h2 className="Sbc-h2">Is Seabourn Venture a Good Expedition Ship?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-verdict-copy">
                        <p className="Sbc-p">
                            Seabourn Venture is one of the strongest choices for travelers who want to combine ultra-luxury cruising with genuine expedition travel. Its small size, expedition equipment, Zodiacs, kayaks, submarine capability and dedicated expedition team make it significantly different from a traditional luxury cruise ship.
                        </p>
                        <p className="Sbc-p">
                            At the same time, guests return from the day's adventures to spacious suites, refined dining, premium beverages and Seabourn's personalized service. That combination is the real appeal. Seabourn Venture is not simply a luxury ship that happens to visit remote destinations — it is a luxury expedition ship designed around the idea of exploring them.
                        </p>

                        <div className="Sbc-verdict-recommend">
                            <p>
                                <strong>Our recommendation:</strong> Choose Seabourn Venture if your priority is exploring Antarctica, the Arctic or other remote destinations without sacrificing spacious suites, fine dining and personalized service.
                            </p>
                        </div>

                        <div className="Sbc-btn-row">
                            <Link to="/contact" className="Sbc-btn Sbc-btn-light" style={{ textDecoration: "none" }}>
                                Start Planning Your Seabourn Venture Voyage
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default SeabournVentureGuide;