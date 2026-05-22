import { useState, useEffect, useRef } from "react";
import {
    Ship,
    Users,
    MapPin,
    Award,
    Check,
    Plus,
    Minus,
    ArrowRight,
    Star,
    Quote,
    AlertTriangle,
    Utensils,
    Compass,
    Wine,
    Heart,
    UtensilsCrossed,
    User,
    Leaf,
    Coffee,
    Sunset,
    Flame,
    Shield,
    Eye,
    Timer,
    Sparkles,
    Mountain,
    Train,
    TreePine
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/image.webp";
import HeroImage1 from "../../assets/AzamaraAlaskaCruisesGuide/AlaskImage.webp";
import HeroImage2 from "../../assets/AzamaraAlaskaCruisesGuide/AlaskImage2.webp";
import CTAImage from "../../assets/AzamaraAlaskaCruisesGuide/AlaskaGuide.jpeg";
import HeroImage4 from "../../assets/AzamaraAlaskaCruisesGuide/AlaskImage3.webp";
import AzamaraDietaryImage from "../../assets/AzamaraAlaskaCruisesGuide/AlaskaCabins.webp";
import AlaskaShore from "../../assets/AzamaraAlaskaCruisesGuide/AlaskaShore.webp";

import "../AzamaraShipComparison/Azamarashipcomparison.css";
import "../AzamaraDiningGuide/AzamaraDiningGuide.css";
import "./AzamaraAlaskCruises.css";
import { Helmet } from "react-helmet-async";

const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            name: "Trips & Ships Luxury Travel",
            url: "https://www.tripsandships.com",
            logo: "https://www.tripsandships.com/logo.png",
        },

        {
            "@type": "TravelAgency",
            name: "Trips & Ships Luxury Travel",
            url: "https://www.tripsandships.com",
            areaServed: "Worldwide",
        },

        {
            "@type": "Person",
            name: "Angela Hughes",
            jobTitle: "CEO of Trips & Ships Luxury Travel",
            description:
                "Luxury travel expert, global speaker, founder of Luxury Travel University, and luxury cruise specialist.",
        },

        {
            "@type": "WebPage",
            name: "Azamara Alaska Cruises",
            url: "https://www.tripsandships.com/azamara-alaska-cruises",
            description:
                "Luxury Azamara Alaska cruise planning guide by Angela Hughes.",
        },

        {
            "@type": "BreadcrumbList",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.tripsandships.com",
                },

                {
                    "@type": "ListItem",
                    position: 2,
                    name: "Luxury Cruises",
                    item: "https://www.tripsandships.com/luxury-cruises",
                },

                {
                    "@type": "ListItem",
                    position: 3,
                    name: "Azamara Alaska Cruises",
                    item: "https://www.tripsandships.com/azamara-alaska-cruises",
                },
            ],
        },

        {
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Are Azamara Alaska cruises all-inclusive?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Azamara includes many luxury amenities, though not everything is fully inclusive like some ultra-luxury lines.",
                    },
                },

                {
                    "@type": "Question",
                    name: "Does Azamara offer glacier viewing in Alaska?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Many itineraries include scenic glacier cruising opportunities.",
                    },
                },

                {
                    "@type": "Question",
                    name: "Is Azamara considered luxury?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Azamara is generally considered an upper-premium to luxury small-ship cruise line.",
                    },
                },

                {
                    "@type": "Question",
                    name: "What is the best month for an Alaska cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "July and August are most popular, though May and September offer excellent value and fewer crowds.",
                    },
                },

                {
                    "@type": "Question",
                    name: "Are balcony cabins worth it in Alaska?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Absolutely. Balcony cabins dramatically enhance wildlife and glacier viewing.",
                    },
                },

                {
                    "@type": "Question",
                    name: "Is Azamara better than large cruise ships for Alaska?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Many travelers prefer Azamara because smaller ships create more immersive and less crowded experiences.",
                    },
                },

                {
                    "@type": "Question",
                    name: "Does Azamara have formal nights?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Azamara maintains a more relaxed luxury atmosphere with less emphasis on formal attire.",
                    },
                },

                {
                    "@type": "Question",
                    name: "What wildlife can I see on an Alaska cruise?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Whales, bears, bald eagles, otters, seals, and more.",
                    },
                },

                {
                    "@type": "Question",
                    name: "Are Alaska cruises good for first-time luxury cruisers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Alaska is often an excellent entry point into luxury cruising.",
                    },
                },

                {
                    "@type": "Question",
                    name: "How far in advance should I book?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Luxury Alaska cruises should ideally be booked 9–18 months in advance.",
                    },
                },

                {
                    "@type": "Question",
                    name: "Is seasickness common in Alaska?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The Inside Passage is generally calmer than open ocean itineraries.",
                    },
                },

                {
                    "@type": "Question",
                    name: "What should I pack for Alaska?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Layers, waterproof outerwear, comfortable walking shoes, and binoculars are highly recommended.",
                    },
                },

                {
                    "@type": "Question",
                    name: "Can Trips & Ships Luxury Travel help with custom Alaska itineraries?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Customized luxury Alaska cruise planning is a core specialty.",
                    },
                },

                {
                    "@type": "Question",
                    name: "What makes Azamara different from expedition cruises?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Azamara offers immersive destination travel with greater onboard comfort and traditional luxury amenities.",
                    },
                },
            ],
        },
    ],
};

/* ── aac: Data ───────────────────────────────────────────────────── */
const aacFeelItems = [
    { icon: <Wine size={22} strokeWidth={1.5} />, title: "Glaciers & Champagne", text: "Sipping champagne while glaciers calve into icy waters from your intimate ship deck." },
    { icon: <Eye size={22} strokeWidth={1.5} />, title: "Private Veranda Views", text: "Watching humpback whales breach from your private veranda in the open Pacific." },
    { icon: <Timer size={22} strokeWidth={1.5} />, title: "Arrive Before the Crowds", text: "Arriving in charming coastal towns before larger ships — a genuine Azamara advantage." },
    { icon: <Utensils size={22} strokeWidth={1.5} />, title: "Destination Cuisine", text: "Destination-focused cuisine inspired by Pacific Northwest and Alaskan regional flavors." },
    { icon: <Sparkles size={22} strokeWidth={1.5} />, title: "Personalized Luxury", text: "Returning from wilderness adventures to genuinely personalized luxury service every evening." },
    { icon: <Mountain size={22} strokeWidth={1.5} />, title: "Curated, Not Commercial", text: "An Alaska experience that feels curated and intimate rather than commercialized." },
];

const aacInsightPoints = [
    { num: "01", text: "Ship size matters enormously for the feeling onboard and in port" },
    { num: "02", text: "Itinerary design determines what you actually get to experience" },
    { num: "03", text: "Glacier access varies significantly between vessels and routes" },
    { num: "04", text: "Port timing shapes whether you experience a town or a crowd" },
    { num: "05", text: "Onboard atmosphere defines the overall quality of the journey" },
];

const aacMonths = [
    { name: "May", peak: false, highlights: ["Fewer crowds", "Snow-covered scenery", "Value pricing", "Cooler temperatures"] },
    { name: "June", peak: false, highlights: ["Long daylight hours", "Wildlife activity", "Comfortable weather"] },
    { name: "July", peak: true, highlights: ["Peak wildlife viewing", "Warmer temperatures", "Active excursions"] },
    { name: "Aug", peak: false, highlights: ["Whale watching", "Lush scenery", "Prime photography"] },
    { name: "Sept", peak: false, highlights: ["Fall colors", "Fewer tourists", "Northern lights potential", "Lower pricing"] },
];

const aacPorts = ["Inside Passage", "Hubbard Glacier", "Icy Strait Point", "Ketchikan", "Sitka", "Juneau", "Skagway", "Vancouver", "Seward"];

const aacExtensions = [
    { icon: <Train size={20} strokeWidth={1.5} />, label: "Luxury rail journeys", sub: "Through the Alaskan wilderness" },
    { icon: <TreePine size={20} strokeWidth={1.5} />, label: "Wilderness lodges", sub: "For deeper nature immersion" },
    { icon: <Compass size={20} strokeWidth={1.5} />, label: "Private guided land tours", sub: "Before or after sailing" },
    { icon: <Mountain size={20} strokeWidth={1.5} />, label: "Canadian Rockies extensions", sub: "Via Banff or Jasper" },
];

/* ── aac: IntersectionObserver Hook ─────────────────────────────── */
function useAacInView(threshold = 0.15) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setInView(true); },
            { threshold }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [threshold]);
    return [ref, inView];
}

/* ── aac: Section 1 — What Alaska Feels Like ────────────────────── */
function AacFeelSection() {
    const [ref, inView] = useAacInView();
    return (
        <section className="aac-section aac-section-feel" ref={ref}>
            <div className="aac-container">
                <div className="aac-section-header">
                    <p className="aac-eyebrow">Azamara Alaska 2026</p>
                    <h2 className="aac-h2">What Alaska Feels Like on Azamara</h2>
                    <div className="aac-accent-line" style={{ margin: "auto", marginTop: "15px" }}></div>
                </div>
                <div className={`aac-feel-grid${inView ? " aac-animate-in" : ""}`}>
                    {aacFeelItems.map((item, i) => (
                        <div key={i} className="aac-feel-card" style={{ animationDelay: `${i * 0.08}s` }}>
                            <div className="aac-feel-icon" aria-hidden="true">{item.icon}</div>
                            <h3 className="aac-feel-card-title">{item.title}</h3>
                            <p className="aac-feel-card-text">{item.text}</p>
                        </div>
                    ))}
                </div>
                <div className="aac-feel-footer">
                    <button className="aac-cta-btn">
                        Plan Your Alaska Voyage
                        <span className="aac-cta-arrow">→</span>
                    </button>
                </div>
            </div>
        </section>
    );
}

/* ── aac: Section 2 — Expert Insight ────────────────────────────── */
function AacExpertSection() {
    const [ref, inView] = useAacInView();
    return (
        <section className="aac-section aac-section-expert" ref={ref}>
            <div className="aac-container">
                <div className={`aac-expert-grid${inView ? " aac-animate-in" : ""}`}>
                    <div className="aac-expert-left">
                        <p className="aac-eyebrow aac-eyebrow-light">Expert Insight — Angela Hughes</p>
                        <h2 className="aac-h2 aac-h2-white">What Luxury Travelers Often Misunderstand About Alaska Cruises</h2>
                        <div className="aac-accent-line aac-accent-white" />
                        <blockquote className="aac-expert-quote">
                            One of the biggest misconceptions is that all Alaska cruises feel similar. Alaska is one destination where smaller ships often create dramatically better experiences.
                        </blockquote>
                        <div className="aac-expert-byline">
                            <div className="aac-expert-avatar">AH</div>
                            <div>
                                <p className="aac-expert-name">Angela Hughes</p>
                                <p className="aac-expert-role">CEO, Trips &amp; Ships Luxury Travel</p>
                            </div>
                        </div>
                    </div>
                    <div className="aac-expert-right">
                        <p className="aac-insight-label">What actually differs between sailings</p>
                        <div className="aac-insight-list">
                            {aacInsightPoints.map((pt, i) => (
                                <div key={i} className="aac-insight-item" style={{ animationDelay: `${i * 0.1}s` }}>
                                    <span className="aac-insight-num">{pt.num}</span>
                                    <p className="aac-insight-text">{pt.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ── aac: Section 3 — Best Time ─────────────────────────────────── */
function AacTimingSection() {
    const [active, setActive] = useState(2);
    const [ref, inView] = useAacInView();
    return (
        <section className="aac-section aac-section-timing" ref={ref}>
            <div className="aac-container">
                <div className="aac-section-header aac-centered">
                    <p className="aac-eyebrow">When to sail</p>
                    <h2 className="aac-h2">Best Time for Azamara Alaska Cruises</h2>
                    <div className="aac-accent-line" />
                </div>
                <div className="aac-month-tabs">
                    {aacMonths.map((m, i) => (
                        <button
                            key={i}
                            className={`aac-month-tab${active === i ? " aac-month-tab-active" : ""}${m.peak ? " aac-month-tab-peak" : ""}`}
                            onClick={() => setActive(i)}
                        >
                            {m.name}
                            {m.peak && <span className="aac-peak-badge">Peak</span>}
                        </button>
                    ))}
                </div>
                <div className="aac-month-detail">
                    {aacMonths[active].highlights.map((h, i) => (
                        <div key={i} className="aac-month-highlight">
                            <span className="aac-month-dot" />
                            {h}
                        </div>
                    ))}
                </div>
                <div className={`aac-months-full-grid${inView ? " aac-animate-in" : ""}`}>
                    {aacMonths.map((m, i) => (
                        <div key={i} className={`aac-month-card${m.peak ? " aac-month-card-peak" : ""}`} style={{ animationDelay: `${i * 0.07}s` }}>
                            <div className="aac-month-card-top">
                                <span className="aac-month-name">{m.name}</span>
                                {m.peak && <span className="aac-peak-pill">Peak</span>}
                            </div>
                            <ul className="aac-month-list">
                                {m.highlights.map((h, j) => (
                                    <li key={j} className="aac-month-li">
                                        <span className="aac-li-dot" />
                                        {h}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ── aac: Section 4 — Itineraries ───────────────────────────────── */
function AacItinSection() {
    const [ref, inView] = useAacInView();
    return (
        <section className="aac-section aac-section-itin" ref={ref}>
            <div className="aac-container">
                <div className="aac-section-header">
                    <p className="aac-eyebrow aac-eyebrow-light">Routes &amp; Pairings</p>
                    <h2 className="aac-h2 aac-h2-white">Azamara Alaska Itineraries</h2>
                    <div className="aac-accent-line" style={{ margin: "auto", marginTop: "15px", backgroundColor: "white" }}></div>
                </div>
                <div className={`aac-itin-layout${inView ? " aac-animate-in" : ""}`}>
                    <div className="aac-itin-left">
                        <div className="aac-itin-image-wrap">
                            <img
                                src={HeroImage1}
                                alt="Azamara Alaska Itineraries"
                                className="aac-itin-image"
                            />
                        </div>
                        <p className="aac-itin-col-label">Popular ports &amp; routes</p>
                        <div className="aac-ports-cloud">
                            {aacPorts.map((p, i) => (
                                <span key={i} className="aac-port-tag">{p}</span>
                            ))}
                        </div>
                    </div>
                    <div className="aac-itin-right">
                        <p className="aac-itin-col-label">Popular pre &amp; post extensions</p>
                        <div className="aac-extensions-list">
                            {aacExtensions.map((e, i) => (
                                <div key={i} className="aac-extension-item" style={{ animationDelay: `${i * 0.09}s` }}>
                                    <span className="aac-extension-icon" aria-hidden="true">{e.icon}</span>
                                    <div>
                                        <p className="aac-extension-label">{e.label}</p>
                                        <p className="aac-extension-sub">{e.sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function FAQ() {
    const [open, setOpen] = useState(null);

    const faqData = [
        {
            q: "Are Azamara Alaska cruises all-inclusive?",
            a: "Azamara includes many luxury amenities, though not everything is fully inclusive like some ultra-luxury lines.",
        },
        {
            q: "Does Azamara offer glacier viewing in Alaska?",
            a: "Yes. Many itineraries include scenic glacier cruising opportunities.",
        },
        {
            q: "Is Azamara considered luxury?",
            a: "Azamara is generally considered an upper-premium to luxury small-ship cruise line.",
        },
        {
            q: "What is the best month for an Alaska cruise?",
            a: "July and August are most popular, though May and September offer excellent value and fewer crowds.",
        },
        {
            q: "Are balcony cabins worth it in Alaska?",
            a: "Absolutely. Balcony cabins dramatically enhance wildlife and glacier viewing.",
        },
        {
            q: "Is Azamara better than large cruise ships for Alaska?",
            a: "Many travelers prefer Azamara because smaller ships create more immersive and less crowded experiences.",
        },
        {
            q: "Does Azamara have formal nights?",
            a: "Azamara maintains a more relaxed luxury atmosphere with less emphasis on formal attire.",
        },
        {
            q: "What wildlife can I see on an Alaska cruise?",
            a: "Whales, bears, bald eagles, otters, seals, and more.",
        },
        {
            q: "Are Alaska cruises good for first-time luxury cruisers?",
            a: "Yes. Alaska is often an excellent entry point into luxury cruising.",
        },
        {
            q: "How far in advance should I book?",
            a: "Luxury Alaska cruises should ideally be booked 9–18 months in advance.",
        },
        {
            q: "Is seasickness common in Alaska?",
            a: "The Inside Passage is generally calmer than open ocean itineraries.",
        },
        {
            q: "What should I pack for Alaska?",
            a: "Layers, waterproof outerwear, comfortable walking shoes, and binoculars are highly recommended.",
        },
        {
            q: "Can Trips & Ships Luxury Travel help with custom Alaska itineraries?",
            a: "Yes. Customized luxury Alaska cruise planning is a core specialty.",
        },
        {
            q: "What makes Azamara different from expedition cruises?",
            a: "Azamara offers immersive destination travel with greater onboard comfort and traditional luxury amenities.",
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
const AzamaraAlaskCruises = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [readMore, setReadMore] = useState(false);
    const images = [HeroImage4, HeroImage1, HeroImage2];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title></title>Azamara Alaska Cruises | Luxury Alaska Small Ship Cruises With Expert Guidance
                <meta
                    name="title"
                    content="Azamara Alaska Cruises 2026 | Luxury Alaska Cruise Experts | Trips & Ships Luxury Travel"
                />
                <meta
                    name="description"
                    content="Discover the best Azamara Alaska Cruises with expert guidance from Angela Hughes, CEO of Trips & Ships Luxury Travel. Learn itineraries, luxury insights, best cabins, excursions, comparisons, and Alaska cruise planning tips."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>

            <Nav />

            {/* HERO */}
            <section className="aac_hero_section">

                {images.map((img, index) => (

                    <div
                        key={index}
                        className={`aac_hero_bg ${index === currentSlide ? "active" : ""}`}
                        style={{ backgroundImage: `url(${img})` }}
                    ></div>

                ))}

                <div className="aac_hero_overlay"></div>

                <div className="aac_hero_content">

                    <span className="aac_hero_eyebrow">
                        Luxury Alaska Cruises
                    </span>

                    <h1>
                        Azamara Alaska Cruises
                    </h1>

                    <div className="aac_hero_line"></div>

                    <p className="aac_hero_subtitle">
                        Experience Alaska Through The Lens Of Luxury Discovery
                    </p>

                    <p className="aac_hero_text">
                        Alaska is not simply a cruise destination. For luxury travelers, it is one of the world’s last truly immersive frontiers — a place where towering glaciers, remote wilderness, whale-filled waters, and untouched landscapes create experiences that feel profoundly rare.
                    </p>

                    {readMore && (
                        <>

                            <p className="aac_hero_text">
                                An Azamara Alaska cruise offers something many larger cruise lines cannot: intimacy, destination immersion, personalized service, and a more refined way to experience Alaska’s dramatic beauty.
                            </p>

                            <p className="aac_hero_text">
                                At Trips & Ships Luxury Travel, luxury cruise expert Angela Hughes helps discerning travelers navigate Alaska cruise options with firsthand expertise shaped by more than 40 years in the travel industry and travel experiences spanning over 121 countries.
                            </p>

                            <ul className="aac_hero_list">

                                <li>CEO of Trips &amp; Ships Luxury Travel</li>

                                <li>Founder of Luxury Travel University</li>

                                <li>Global luxury travel speaker</li>

                                <li>Travel Leaders Network Advisory Board member</li>

                                <li>2024 Luxury Travel Influencer of the Year</li>

                            </ul>

                        </>
                    )}

                    <div className="aac_readmore_wrapper">

                        <button
                            className="aac_readmore_btn"
                            onClick={() => setReadMore(!readMore)}
                        >
                            {readMore ? "Read Less" : "Read More"}
                        </button>

                    </div>

                </div>

            </section>

            {/* ════════════════════════════════════════
    1. WHY LUXURY TRAVELERS CHOOSE AZAMARA FOR ALASKA
════════════════════════════════════════ */}
            <section className="adg-c-section adg-c-bg-dark" id="adg-why-dining">
                <div className="adg-c-container">

                    <div className="adg-c-why-grid">

                        {/* LEFT — text */}
                        <div className="adg-c-why-left">
                            <span className="adg-c-eyebrow adg-c-eyebrow-light">Alaska Expedition</span>
                            <h2 className="adg-c-h2 adg-c-h2-light">
                                Why Luxury Travelers Choose Azamara For Alaska
                            </h2>
                            <div className="adg-c-accent-line adg-c-accent-light"></div>
                            <p className="adg-c-lead adg-c-lead-light">
                                Unlike mega-ships carrying thousands of passengers, Azamara's
                                smaller ships create a more elegant and destination-focused
                                Alaska experience.
                            </p>

                            <div className="adg-c-why-features">

                                <div className="adg-c-why-feature">
                                    <div className="adg-c-why-feature-icon">
                                        <Ship size={18} strokeWidth={1.6} />
                                    </div>
                                    <div className="adg-c-why-feature-text">
                                        <h4 className="adg-c-why-feature-title">Smaller Ships, Better Access</h4>
                                        <p className="adg-c-why-feature-desc">
                                            Azamara ships can access ports and scenic areas larger
                                            vessels often cannot reach comfortably.
                                        </p>
                                    </div>
                                </div>

                                <div className="adg-c-why-feature">
                                    <div className="adg-c-why-feature-icon">
                                        <MapPin size={18} strokeWidth={1.6} />
                                    </div>
                                    <div className="adg-c-why-feature-text">
                                        <h4 className="adg-c-why-feature-title">Longer Destination Time</h4>
                                        <p className="adg-c-why-feature-desc">
                                            Azamara emphasizes immersive travel with more time in port
                                            and fewer rushed experiences.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* RIGHT — two pill cards */}
                        <div className="adg-c-why-right">

                            <div className="adg-c-why-card">
                                <span className="adg-c-why-card-label">Elevated Culinary Experience</span>
                                <p className="adg-c-why-card-desc">
                                    Luxury travelers appreciate what Azamara brings to the table:
                                </p>
                                <div className="adg-c-pill-grid">
                                    {[
                                        "Refined dining",
                                        "Globally inspired cuisine",
                                        "Specialty restaurants",
                                        "Premium wine offerings",
                                        "Attentive service",
                                    ].map((item, i) => (
                                        <div key={i} className="adg-c-pill">
                                            <span className="adg-c-pill-check">
                                                <Check size={13} strokeWidth={3} />
                                            </span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="adg-c-why-card adg-c-why-card-alt">
                                <span className="adg-c-why-card-label">Relaxed Luxury Atmosphere</span>
                                <p className="adg-c-why-card-desc">
                                    Azamara delivers sophisticated luxury without excessive formality.
                                    This appeals strongly to travelers who want:
                                </p>
                                <div className="adg-c-pill-grid">
                                    {[
                                        "Elegance without pretension",
                                        "Meaningful experiences",
                                        "Culturally immersive travel",
                                    ].map((item, i) => (
                                        <div key={i} className="adg-c-pill">
                                            <span className="adg-c-pill-check">
                                                <Check size={13} strokeWidth={3} />
                                            </span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* WHO SHOULD CHOOSE */}
            <section className="Asc-section Asc-bg-soft" id="Asc-who">

                <div className="Asc-container">

                    <div className="Asc-section-header">

                        <h2 className="Asc-h2">
                            Is Azamara Good For Alaska Cruises?
                        </h2>

                        <div className="Asc-accent-line"></div>

                        <p className="Asc-section-intro">
                            For many affluent travelers, yes — particularly those seeking  <br /> immersive luxury experiences with smaller ships and deeper destination exploration.
                        </p>

                    </div>

                    <div className="Asc-who-grid">

                        {/* BEST FOR */}
                        <div className="Asc-who-card Asc-who-yes">

                            <h3 className="Asc-who-title">
                                Best For
                            </h3>

                            <ul className="Asc-who-list">

                                {[
                                    "Couples",
                                    "Empty nesters",
                                    "Experienced cruisers",
                                    "Luxury travelers who dislike mega-ships",
                                    "Travelers wanting immersive itineraries",
                                    "Guests prioritizing service and destination depth",
                                ].map((item, i) => (

                                    <li key={i}>
                                        <Check
                                            size={16}
                                            className="Asc-icon-green"
                                        />

                                        {item}
                                    </li>

                                ))}

                            </ul>

                        </div>

                        {/* NOT IDEAL FOR */}
                        <div className="Asc-who-card Asc-who-no">

                            <h3 className="Asc-who-title">
                                May Not Be Ideal For
                            </h3>

                            <ul className="Asc-who-list">

                                {[
                                    "Families needing extensive kids programming",
                                    "Travelers seeking massive onboard entertainment complexes",
                                    "Travelers wanting highly formal luxury environments",
                                    "Expedition-focused adventure travelers requiring Zodiac landings",
                                ].map((item, i) => (

                                    <li key={i}>

                                        <Minus
                                            size={16}
                                            className="Asc-icon-muted"
                                        />

                                        {item}

                                    </li>

                                ))}

                            </ul>

                        </div>

                    </div>

                </div>

            </section>

            {/* WHAT ALASKA FEELS LIKE */}
            <AacFeelSection />

            {/* EXPERT INSIGHT */}
            <AacExpertSection />

            {/* BEST TIME */}
            <AacTimingSection />

            {/* ITINERARIES */}
            <AacItinSection />


            {/* FLEET OVERVIEW TABLE */}
            <section className="Asc-section Asc-bg-white" id="Asc-fleet">

                <div className="Asc-container">

                    <div className="Asc-section-header">

                        <h2 className="Asc-h2">
                            Azamara Vs Other Luxury Alaska Cruise Lines
                        </h2>

                        <div className="Asc-accent-line"></div>

                    </div>

                    <div className="Asc-table-wrapper">

                        <table className="Asc-fleet-table">

                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Azamara</th>
                                    <th>Seabourn</th>
                                    <th>Regent</th>
                                    <th>Silversea</th>
                                </tr>
                            </thead>

                            <tbody>

                                <tr>
                                    <td><strong>Atmosphere</strong></td>
                                    <td>Relaxed luxury</td>
                                    <td>Ultra-luxury</td>
                                    <td>Inclusive luxury</td>
                                    <td>Expedition luxury</td>
                                </tr>

                                <tr>
                                    <td><strong>Ship Size</strong></td>
                                    <td>Small</td>
                                    <td>Small</td>
                                    <td>Medium</td>
                                    <td>Small</td>
                                </tr>

                                <tr>
                                    <td><strong>Alaska Immersion</strong></td>
                                    <td>Excellent</td>
                                    <td>Excellent</td>
                                    <td>Very good</td>
                                    <td>Excellent</td>
                                </tr>

                                <tr>
                                    <td><strong>Formality</strong></td>
                                    <td>Low</td>
                                    <td>Moderate</td>
                                    <td>Moderate</td>
                                    <td>Moderate</td>
                                </tr>

                                <tr>
                                    <td><strong>Included Excursions</strong></td>
                                    <td>Limited</td>
                                    <td>Moderate</td>
                                    <td>Extensive</td>
                                    <td>Extensive</td>
                                </tr>

                                <tr>
                                    <td><strong>Best For</strong></td>
                                    <td>Destination immersion</td>
                                    <td>Refined luxury</td>
                                    <td>Inclusive luxury</td>
                                    <td>Adventure luxury</td>
                                </tr>

                            </tbody>

                        </table>

                    </div>

                </div>

            </section>

            {/* VIDEO SECTION */}
            {/* <section className="Asc-video-section" id="Asc-video">
                <div className="Asc-container">
                    <div className="Asc-section-header">
                        <h2 className="Asc-h2">Watch: Regent Seven Seas Cruise</h2>
                        <div className="Asc-accent-line"></div>
                        <p className="Asc-video-intro">
                            Hear directly from luxury cruise expert Angela Hughes as she shares her firsthand insights on choosing between Azamara and Regent Seven Seas.
                        </p>
                    </div>
                    <div className="Asc-video-wrapper">
                        <div className="Asc-video-frame">
                            <iframe
                                src="https://www.youtube.com/embed/yoKE5YG3CYI"
                                title="Azamara vs Regent Seven Seas – Angela Hughes"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section> */}



            {/* ── COMMON MISTAKES ───────────────────────────────────────── */}
            <section className="Lfsg-section Lfsg-bg-dark" id="Lfsg-mistakes">

                <div className="Lfsg-container">

                    <div className="Lfsg-section-header">
                        <h2 className="Lfsg-h2-white">
                            Common Mistakes Travelers Make Booking Alaska Cruises
                        </h2>

                        <div className="Lfsg-accent-line-white" />
                    </div>

                    <div className="Lfsg-mistakes-grid">

                        {[
                            {
                                title: "Booking Too Late",
                                desc: "The best suites and balconies sell out early.",
                            },

                            {
                                title: "Choosing Price Over Itinerary",
                                desc: "Not all Alaska itineraries provide equal scenic access.",
                            },

                            {
                                title: "Ignoring Ship Size",
                                desc: "Larger ships can create crowded Alaska experiences.",
                            },

                            {
                                title: "Underestimating Excursion Demand",
                                desc: "Premium excursions often sell out months in advance.",
                            },

                            {
                                title: "Not Using A Luxury Cruise Specialist",
                                desc: "Luxury Alaska cruise planning requires nuanced expertise.",
                            },

                        ].map((item, i) => (

                            <div key={i} className="Lfsg-mistake-card">

                                <div className="Lfsg-mistake-number">
                                    {String(i + 1).padStart(2, "0")}
                                </div>

                                <h4 className="Lfsg-mistake-title">
                                    {item.title}
                                </h4>

                                <p className="Lfsg-mistake-desc">
                                    {item.desc}
                                </p>

                            </div>

                        ))}

                    </div>
                </div>
            </section>


            {/* BEST CABINS FOR AZAMARA ALASKA CRUISES */}
            <section className="adg-section adg-bg-soft" id="adg-best-cabins">

                <div className="adg-container">

                    <div className="adg-section-header">

                        <h2 className="adg-h2">
                            Best Cabins For Azamara Alaska Cruises
                        </h2>

                        <div className="adg-accent-line"></div>

                    </div>

                    <div className="adg-split-layout">

                        {/* LEFT CONTENT COLUMN */}
                        <div className="adg-content-card-side">

                            <img
                                src={AzamaraDietaryImage}
                                alt="Azamara Alaska balcony suite"
                                className="adg-side-image"
                            />

                            <div className="adg-info-card">

                                <div className="adg-card-meta">
                                    <Ship size={28} />
                                    <span className="adg-meta-label">
                                        Luxury Cabin Guidance
                                    </span>
                                </div>

                                <p className="adg-card-lead">
                                    Choosing the right cabin can dramatically improve your Alaska cruise experience.
                                </p>

                                <div className="adg-card-divider"></div>

                                <p className="adg-card-subtext">
                                    Angela Hughes often recommends balcony accommodations for Alaska because the scenery itself becomes part of the experience.
                                </p>

                            </div>

                        </div>

                        {/* RIGHT CABIN GRID COLUMN */}
                        <div className="adg-list-side">

                            {[
                                {
                                    title: "Veranda Cabins",
                                    icon: <Compass size={20} />
                                },

                                {
                                    title: "Highly recommended for glacier viewing and wildlife spotting",
                                    icon: <MapPin size={20} />
                                },

                                {
                                    title: "Suites",
                                    icon: <Star size={20} />
                                },

                                {
                                    title: "Enhanced service",
                                    icon: <Award size={20} />
                                },

                                {
                                    title: "Larger living space",
                                    icon: <Users size={20} />
                                },

                                {
                                    title: "Premium amenities",
                                    icon: <Wine size={20} />
                                },

                                {
                                    title: "More private relaxation",
                                    icon: <Ship size={20} />
                                },

                            ].map((item, i) => (

                                <div
                                    key={i}
                                    className="adg-list-item-card"
                                >

                                    <div className="adg-list-item-icon">
                                        {item.icon}
                                    </div>

                                    <h4 className="adg-list-item-label">
                                        {item.title}
                                    </h4>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </section>

            {/* ALASKA SHORE EXCURSIONS WORTH SPLURGING ON */}
            <section className="aac-excursions-section" id="aac-excursions">
                <div className="aac-container">
                    <div className="aac-excursions-grid">

                        {/* LEFT COLUMN: CONTENT */}
                        <div className="aac-excursions-content">
                            <p className="aac-eyebrow">Luxury Splurges</p>
                            <h2 className="aac-h2">Alaska Shore Excursions Worth Splurging On</h2>
                            <div className="aac-accent-line" style={{ marginTop: "15px", marginBottom: "25px" }}></div>

                            <p className="aac-excursions-lead">
                                Luxury travelers frequently prioritize immersive, high-end excursions to truly connect with the vast Alaskan wilderness.
                            </p>

                            <div className="aac-excursions-list">
                                {[
                                    { text: "Helicopter glacier landings", desc: "Soar over massive ice fields before landing directly on a glacier for an unforgettable walking tour." },
                                    { text: "Private whale watching", desc: "Charter a private vessel to get up close with humpback whales and orcas, guided by marine biologists." },
                                    { text: "Bear viewing by floatplane", desc: "Fly deep into remote national parks to watch brown bears fishing for wild salmon in pristine rivers." },
                                    { text: "Luxury wilderness lodges", desc: "Extend your land experience with exclusive overnight stays in isolated ultra-luxury retreats." },
                                    { text: "Fishing charters", desc: "Embark on a fully equipped private boat for world-class salmon or halibut fishing in calm coastal waters." },
                                    { text: "Dog sledding experiences", desc: "Fly to a high-altitude glacier camp to run a team of energetic Alaskan huskies on real snow." },
                                    { text: "Private photography tours", desc: "Gain professional guidance and private transport to capture perfect shots of dramatic landscapes and wildlife." }
                                ].map((item, i) => (
                                    <div key={i} className="aac-excursion-item-card">
                                        <div className="aac-excursion-check">
                                            <Check size={18} strokeWidth={2.5} />
                                        </div>
                                        <div className="aac-excursion-text-group">
                                            <h4 className="aac-excursion-title">{item.text}</h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT COLUMN: IMAGE */}
                        <div
                            className="aac-excursions-image-col">
                            <div className="aac-excursions-img-wrapper">
                                <img
                                    src={AlaskaShore}
                                    alt="Luxury Alaska helicopter glacier tour"
                                    className="aac-excursions-img"
                                />
                                <div className="aac-image-overlay-card">
                                    <span className="aac-overlay-badge">Advisor Tip</span>
                                    <p className="aac-overlay-text">
                                        "Splurge-worthy excursions in Alaska sell out up to 8 months in advance. Book early to secure helicopter and private charters."
                                    </p>
                                    <span className="aac-overlay-author">— Angela Hughes</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ANGELA HUGHES AUTHORITY BOX */}
            <section className="Adg-expert-section" id="Asc-expert-insight">
                <div className="Asc-container">

                    {/* TOP HEADING */}
                    <div className="Adg-expert-heading">

                        <span className="Adg-expert-eyebrow">
                            Luxury Travel Authority
                        </span>

                        <h2 className="Adg-expert-title">
                            Meet Angela Hughes
                        </h2>

                        <div className="Adg-expert-divider"></div>

                    </div>

                    {/* MAIN GRID */}
                    <div className="Adg-expert-grid">

                        {/* LEFT SIDE */}
                        <div className="Adg-expert-image-col">

                            <div className="Adg-expert-portrait-wrap">

                                <img
                                    src={AboutImage}
                                    alt="Angela Hughes – Luxury Travel Advisor"
                                    className="Adg-expert-portrait"
                                />

                                <div className="Adg-expert-portrait-badge">
                                    <Star size={14} />
                                    <span>40+ Years Experience</span>
                                </div>

                            </div>

                            <div className="Adg-expert-name-card">

                                <h3 className="Adg-expert-name">
                                    Angela Hughes
                                </h3>

                                <p className="Adg-expert-role">
                                    CEO · Trips &amp; Ships Luxury Travel
                                </p>

                                <div className="Adg-expert-name-divider"></div>

                                <p className="Adg-expert-countries">
                                    <MapPin size={14} />
                                    121+ Countries Visited
                                </p>

                            </div>

                        </div>

                        {/* RIGHT SIDE */}
                        <div className="Adg-expert-content-col">

                            {/* INTRO */}
                            <div className="Adg-expert-quote-box">

                                <div className="Adg-expert-quote-icon">
                                    <Quote size={36} />
                                </div>

                                <blockquote className="Adg-expert-quote-text">
                                    "Angela Hughes is one of the travel industry’s most respected luxury travel advisors."
                                </blockquote>

                            </div>

                            {/* CREDENTIALS */}
                            <div className="Adg-expert-credentials-box">

                                <h4 className="Adg-expert-credentials-title">
                                    <Award size={16} />
                                    Credentials &amp; Recognition
                                </h4>

                                <div className="Adg-expert-credentials-grid">

                                    {[
                                        { icon: <Award size={16} />, label: "CEO of Trips & Ships Luxury Travel" },
                                        { icon: <Award size={16} />, label: "Founder of Luxury Travel University" },
                                        { icon: <Star size={16} />, label: "40+ Years in Luxury Travel" },
                                        { icon: <MapPin size={16} />, label: "Visited 121+ Countries" },
                                        { icon: <Ship size={16} />, label: "Luxury Cruise and Expedition Specialist" },
                                        { icon: <Users size={16} />, label: "Travel Leaders Network Advisory Board Member" },
                                        { icon: <Award size={16} />, label: "2024 Luxury Travel Influencer of the Year" },
                                        { icon: <Star size={16} />, label: "Named Among the Most Influential Women in Travel in 2026" },
                                        { icon: <Award size={16} />, label: "Featured in Leading Global Travel Publications" },
                                        { icon: <Users size={16} />, label: "International Luxury Travel Speaker and Trainer" },
                                    ].map((item, i) => (

                                        <div className="Adg-expert-list-item" key={i}>

                                            <span className="Adg-expert-list-icon">
                                                {item.icon}
                                            </span>

                                            <span className="Adg-expert-list-label">
                                                {item.label}
                                            </span>

                                        </div>

                                    ))}

                                </div>

                            </div>

                            {/* EXPERTISE TEXT */}
                            <div
                                className="Adg-expert-credentials-box"
                                style={{ marginTop: "24px" }}
                            >

                                <h4 className="Adg-expert-credentials-title">
                                    <Star size={16} />
                                    Luxury Travel Expertise
                                </h4>

                                <p
                                    style={{
                                        fontSize: "15px",
                                        lineHeight: "1.9",
                                        color: "var(--text-body)",
                                        margin: 0,
                                    }}
                                >
                                    Her expertise helps clients move beyond generic cruise booking toward curated luxury travel experiences designed around personal preferences and elevated expectations.
                                </p>

                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* PLANNING ADVICE */}
            <section className="Avr-planning-section" id="Asc-planning-advice">

                <div className="Asc-container">

                    {/* HEADING */}
                    <div className="Avr-planning-heading">

                        <span className="Avr-planning-eyebrow">
                            Luxury Cruise Planning
                        </span>

                        <h2 className="Avr-planning-title">
                            Why Work With Trips &amp; Ships Luxury Travel
                        </h2>

                        <div className="Avr-planning-divider"></div>

                    </div>

                    {/* TWO-PANEL GRID */}
                    <div className="Avr-planning-grid">

                        {/* LEFT PANEL */}
                        <div className="Avr-planning-left">

                            <div className="Avr-planning-left-deco">
                                &ldquo;
                            </div>

                            <h3 className="Avr-planning-left-title">
                                Luxury Alaska Cruises Require Expert Planning
                            </h3>

                            <p className="Avr-planning-left-body">
                                Luxury Alaska cruises involve far more than selecting a cabin.
                            </p>

                            <div className="Avr-planning-alert">

                                <AlertTriangle
                                    size={18}
                                    className="Avr-planning-alert-icon"
                                />

                                <p className="Avr-planning-alert-text">
                                    Trips &amp; Ships Luxury Travel delivers concierge-level planning tailored specifically to affluent travelers.
                                </p>

                            </div>

                        </div>

                        {/* RIGHT PANEL */}
                        <div className="Avr-planning-right">

                            <p className="Avr-planning-right-intro">
                                The right advisor can help with:
                            </p>

                            <div className="Avr-planning-benefits-grid">

                                {[
                                    { icon: <MapPin size={18} />, label: "Optimal itinerary selection" },
                                    { icon: <Ship size={18} />, label: "Suite recommendations" },
                                    { icon: <Award size={18} />, label: "VIP amenities" },
                                    { icon: <Users size={18} />, label: "Private shore experiences" },
                                    { icon: <Star size={18} />, label: "Pre/post cruise planning" },
                                    { icon: <Shield size={18} />, label: "Travel protection" },
                                    { icon: <Compass size={18} />, label: "Insider cruise insights" },
                                ].map((item, i) => (

                                    <div
                                        key={i}
                                        className="Avr-planning-benefit-card"
                                    >

                                        <span className="Avr-planning-benefit-icon">
                                            {item.icon}
                                        </span>

                                        <span className="Avr-planning-benefit-label">
                                            {item.label}
                                        </span>

                                    </div>

                                ))}

                            </div>

                        </div>

                    </div>
                </div>
            </section>




            {/* FAQ */}
            <section className="Asc-section Asc-bg-white" id="Asc-faq">
                <div className="Asc-container">
                    <div className="Asc-section-header">
                        <h2 className="Asc-h2">Frequently Asked Questions</h2>
                        <div className="Asc-accent-line"></div>
                        <p className="Asc-faq-intro">
                            Everything you need to know about choosing the right Azamara ship.
                        </p>
                    </div>
                    <FAQ />
                </div>
            </section>

            {/* CTA */}
            <section className="Asc-help-section">
                <div className="Asc-help-bg-wrap">
                    <img
                        src={CTAImage}
                        alt="Luxury Alaska Cruise"
                        className="Asc-help-bg-img"
                    />
                    <div className="Asc-help-overlay"></div>
                </div>

                <div className="Asc-container">
                    <div className="Asc-help-card">

                        <div className="Asc-help-content">

                            <div className="Asc-help-header">
                                <span className="Asc-help-eyebrow">
                                    Luxury Alaska Cruise Planning
                                </span>

                                <h2 className="Asc-help-h2">
                                    Conversion-Focused Closing
                                </h2>

                                <div className="Asc-help-accent"></div>
                            </div>

                            <div className="Asc-help-grid">

                                {/* LEFT SIDE */}
                                <div className="Asc-help-info">

                                    <p className="Asc-help-intro">
                                        Alaska deserves more than a generic cruise booking.
                                    </p>

                                    <p className="Asc-help-intro">
                                        It deserves thoughtful planning, expert guidance, and a luxury travel advisor who understands how to transform a cruise into an unforgettable journey.
                                    </p>

                                    <p className="Asc-help-intro">
                                        With decades of luxury travel expertise, global destination knowledge, and deep cruise industry insight, Angela Hughes and Trips &amp; Ships Luxury Travel help travelers experience Alaska at a far more elevated level.
                                    </p>

                                    <div className="Asc-help-btn-container">
                                        <button className="Asc-help-cta-btn">
                                            Plan Your Luxury Alaska Cruise
                                            <ArrowRight size={18} />
                                        </button>
                                    </div>

                                </div>

                                {/* RIGHT SIDE */}
                                <div className="Asc-help-list-box">

                                    <h3 className="Asc-help-list-title">
                                        Ready To Plan Your Luxury Alaska Cruise?
                                    </h3>

                                    <p className="Asc-help-intro">
                                        Connect with Trips &amp; Ships Luxury Travel for:
                                    </p>

                                    <ul className="Asc-help-bullets">
                                        {[
                                            "Personalized Azamara Alaska cruise recommendations",
                                            "Luxury suite guidance",
                                            "Curated Alaska experiences",
                                            "Destination-focused itinerary planning",
                                            "Tailored travel experiences based on your travel style",
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

export default AzamaraAlaskCruises;