import { useState, useEffect } from "react";
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
    ChefHat,
    Utensils,
    Sparkles,
    Compass,
    HeartHandshake,
    Plane,
    BadgePercent,
    Home,
    MapPinned,
    ShieldCheck,
    DollarSign,
    Waves,
    Bike,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

// NOTE: Replace these with your own Riverside vs. Avalon images once available.
// Folder suggestion: src/assets/RiversidevsAvalon/
// import HeroImage1 from "../../assets/RiversidevsAvalon/riverside-ship.jpg";
// import HeroImage2 from "../../assets/RiversidevsAvalon/avalon-ship.jpg";
// import HeroImage3 from "../../assets/RiversidevsAvalon/riverside-ship2.jpg";
// import RiversideOverviewImage from "../../assets/RiversidevsAvalon/riverside-overview.jpg";
// import AvalonOverviewImage from "../../assets/RiversidevsAvalon/avalon-overview.jpg";
// import RiversideAtmosphereImage from "../../assets/RiversidevsAvalon/riverside-atmosphere.jpg";
// import AvalonAtmosphereImage from "../../assets/RiversidevsAvalon/avalon-atmosphere.jpg";
// import RiversideFleetImage from "../../assets/RiversidevsAvalon/riverside-fleet.jpg";
// import AvalonFleetImage from "../../assets/RiversidevsAvalon/avalon-fleet.jpg";
// import RiversideDiningImage from "../../assets/RiversidevsAvalon/riverside-dining.jpg";
// import AvalonDiningImage from "../../assets/RiversidevsAvalon/avalon-dining.jpg";
// import RiversideSuiteImage from "../../assets/RiversidevsAvalon/riverside-suite.jpg";
// import AvalonSuiteImage from "../../assets/RiversidevsAvalon/avalon-suite.jpg";
// import RiversideVsAvalonCtaImage from "../../assets/RiversidevsAvalon/riverside-avalon-cta.jpg";

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../RiversideLuxuryCruisesReviews/RiversideLuxuryCruisesReviews.css";

import DanubeImage from "../../assets/VikingDanubeRiverCruises/budapest-hungary-river-cruise-danube.jpg";
import SeineImage from "../../assets/VikingRiverCruises/Seine-River.jpg";
import MekongImage from "../../assets/VikingRiverCruises/Nile-Mekong.jpg";
import RhineImage from "../../assets/VikingRiverCruises/Rhine-River.jpg";
import DouroImage from "../../assets/VikingRiverCruises/AmaDouro_ships.jpg";
import RhoneImage from "../../assets/VikingRiverCruises/avignon-france-river-cruise-view.jpg";

// Commented out images for comparison sections
// import RiversideImage from "../../assets/VikingDanubeRiverCruises/AmaSonata_Budapest_Parliment_building.webp";
// import AvalonImage from "../../assets/VikingRiverCruises/DE_Passau_Danube.webp";

const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            name: "Trips & Ships Luxury Travel",
            url: "https://www.tripsandships.com",
            logo: "https://www.tripsandships.com/Copy-of-TRIPSSHIPS-e1592486640831.webp",
            sameAs: [
                "https://www.facebook.com/tripsandships/",
                "https://www.instagram.com/tripsandshipsluxurytravel",
            ],
            contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-603-860-3274",
                email: "sales@tripsandships.com",
                contactType: "customer service",
            },
        },
        {
            "@type": "TravelAgency",
            name: "Trips & Ships Luxury Travel",
            url: "https://www.tripsandships.com",
            logo: "https://www.tripsandships.com/Copy-of-TRIPSSHIPS-e1592486640831.webp",
            image: "https://www.tripsandships.com/Copy-of-TRIPSSHIPS-e1592486640831.webp",
            founder: { "@type": "Person", name: "Angela Hughes" },
            areaServed: "Worldwide",
            priceRange: "$$$$",
            telephone: "+1-603-860-3274",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Orlando",
                addressRegion: "FL",
                addressCountry: "US",
            },
        },
        {
            "@type": "Person",
            name: "Angela Hughes",
            jobTitle:
                "CEO, Trips & Ships Luxury Travel; Founder, Luxury Travel University",
            worksFor: {
                "@type": "Organization",
                name: "Trips & Ships Luxury Travel",
            },
            description:
                "Luxury travel expert with 40+ years in the travel industry and personal travel to 121+ countries. Global luxury travel speaker and trainer, weekly industry columnist, Travel Leaders Network Advisory Board member, 2024 Luxury Travel Influencer of the Year, and named one of the Most Influential Women in Travel in 2026 by TravelPulse.",
            award: [
                "2024 Luxury Travel Influencer of the Year — Travel Leaders Network",
                "2026 Most Influential Women in Travel — TravelPulse",
            ],
        },
        {
            "@type": "WebPage",
            name: "Riverside vs. Avalon Waterways | Which Luxury River Cruise Is Better?",
            description:
                "Compare Riverside Luxury Cruises and Avalon Waterways. Learn the differences in suites, dining, service, itineraries, pricing, excursions, and onboard experience to choose the best luxury river cruise for your European vacation.",
            url: "https://www.tripsandships.com/riverside-vs-avalon-waterways",
            author: { "@type": "Person", name: "Angela Hughes" },
            publisher: {
                "@type": "Organization",
                name: "Trips & Ships Luxury Travel",
            },
            datePublished: "2026-08-01",
            dateModified: "2026-08-01",
        },
        {
            "@type": "BreadcrumbList",
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
                    name: "River Cruises",
                    item: "https://www.tripsandships.com/river-cruises",
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
                    name: "Riverside vs. Avalon Waterways",
                    item: "https://www.tripsandships.com/riverside-vs-avalon-waterways",
                },
            ],
        },
        {
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Is Riverside more luxurious than Avalon?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Riverside generally offers a more upscale boutique luxury experience with larger suites and more personalized service.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which cruise line has larger suites?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Riverside offers significantly larger suite accommodations.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which has better excursions?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Avalon provides more flexibility with active, classic, and discovery excursion options.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which is better for first-time river cruisers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Both are excellent. Riverside is ideal for luxury-focused travelers, while Avalon appeals to those seeking flexibility and value.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which cruise line is better for active travelers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Avalon is known for its active excursion program, including hiking and cycling experiences.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which cruise line offers better dining?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Both provide high-quality cuisine, but Riverside delivers a more refined gourmet dining experience.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Avalon less expensive than Riverside?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "In many cases, yes. Avalon generally offers a lower entry price while maintaining a high standard of service.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which offers more destinations?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Avalon operates a larger fleet with more itinerary choices across Europe and beyond.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I book through a travel advisor?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. A luxury travel advisor can compare cruise lines, explain promotions, recommend the best itinerary, and coordinate every aspect of your vacation.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What makes Avalon's Panorama Suites® unique compared to Riverside's suites?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Avalon's Panorama Suites® feature wall-to-wall, floor-to-ceiling windows that open to turn the entire suite into an Open-Air Balcony, with beds facing the windows. Riverside's suites focus on expansive layouts, luxury walk-in closets, marble bathrooms, and dedicated butler service in all suite categories, offering a traditional ultra-luxury hotel feel.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is alcohol included on Riverside and Avalon Waterways?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Avalon includes regional wine and beer with lunch and dinner, plus a complimentary happy hour daily. Riverside offers flexible fares: their premium all-inclusive rate covers all premium spirits, wines, beers, and sodas throughout the day, while their choice rate allows guests to pay for alcoholic beverages separately.",
                    },
                },
            ],
        },
    ],
};

function FAQ() {
    const [open, setOpen] = useState(null);

    const faqData = [
        {
            q: "Is Riverside more luxurious than Avalon?",
            a: "Yes. Riverside generally offers a more upscale boutique luxury experience with larger suites and more personalized service.",
        },
        {
            q: "Which cruise line has larger suites?",
            a: "Riverside offers significantly larger suite accommodations.",
        },
        {
            q: "Which has better excursions?",
            a: "Avalon provides more flexibility with active, classic, and discovery excursion options.",
        },
        {
            q: "Which is better for first-time river cruisers?",
            a: "Both are excellent. Riverside is ideal for luxury-focused travelers, while Avalon appeals to those seeking flexibility and value.",
        },
        {
            q: "Which cruise line is better for active travelers?",
            a: "Avalon is known for its active excursion program, including hiking and cycling experiences.",
        },
        {
            q: "Which cruise line offers better dining?",
            a: "Both provide high-quality cuisine, but Riverside delivers a more refined gourmet dining experience.",
        },
        {
            q: "Is Avalon less expensive than Riverside?",
            a: "In many cases, yes. Avalon generally offers a lower entry price while maintaining a high standard of service.",
        },
        {
            q: "Which offers more destinations?",
            a: "Avalon operates a larger fleet with more itinerary choices across Europe and beyond.",
        },
        {
            q: "Should I book through a travel advisor?",
            a: "Yes. A luxury travel advisor can compare cruise lines, explain promotions, recommend the best itinerary, and coordinate every aspect of your vacation.",
        },
        {
            q: "What makes Avalon's Panorama Suites® unique compared to Riverside's suites?",
            a: "Avalon's Panorama Suites® feature wall-to-wall, floor-to-ceiling windows that open to turn the entire suite into an Open-Air Balcony, with beds facing the windows. Riverside's suites focus on expansive layouts, luxury walk-in closets, marble bathrooms, and dedicated butler service in all suite categories, offering a traditional ultra-luxury hotel feel.",
        },
        {
            q: "Is alcohol included on Riverside and Avalon Waterways?",
            a: "Avalon includes regional wine and beer with lunch and dinner, plus a complimentary happy hour daily. Riverside offers flexible fares: their premium all-inclusive rate covers all premium spirits, wines, beers, and sodas throughout the day, while their choice rate allows guests to pay for alcoholic beverages separately.",
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

const RiversideVsAvalon = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [ctaReadMore, setCtaReadMore] = useState(false);
    const [readMore, setReadMore] = useState(false);
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
                    Riverside vs. Avalon Waterways | Which Luxury River Cruise Is
                    Better?
                </title>
                <meta
                    name="title"
                    content="Riverside vs. Avalon | Luxury River Cruise Comparison"
                />
                <meta
                    name="description"
                    content="Compare Riverside Luxury Cruises and Avalon Waterways. Learn the differences in suites, dining, service, itineraries, pricing, excursions, and onboard experience to choose the best luxury river cruise for your European vacation."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>

            <Nav />

            {/* HERO */}
            <section className="Scenic_hero_section">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`Scenic_hero_bg ${index === currentSlide ? "active" : ""}`}
                        style={{ backgroundImage: `url(${img})` }}
                    ></div>
                ))}

                <div className="Scenic_hero_overlay"></div>

                <div className="Scenic_hero_content">
                    <h1>
                        Riverside vs. Avalon Waterways: <br /> Which Luxury River
                        Cruise Is Better?
                    </h1>

                    <p>
                        Choosing between Riverside Luxury Cruises and Avalon Waterways
                        depends on what matters most to you during a European river
                        cruise. Both cruise lines offer beautiful itineraries, attentive
                        service, and comfortable accommodations, but they cater to
                        different travel styles.
                    </p>

                    {/* READ MORE CONTENT */}
                    {readMore && (
                        <>
                            <p>
                                Riverside focuses on boutique luxury with spacious suites,
                                personalized service, and an elegant onboard atmosphere.
                                Avalon Waterways is known for its innovative Panorama
                                Suites®, active excursions, and exceptional value for
                                travelers who want a relaxed yet immersive river cruise
                                experience.
                            </p>

                            <p
                                style={{
                                    fontStyle: "italic",
                                    fontWeight: "600",
                                    margin: "10px 0",
                                }}
                            >
                                “The right choice depends less on which cruise line is better
                                and more on which travel style matches you.”
                            </p>

                            <p>
                                As CEO of Trips & Ships Luxury Travel, founder of Luxury
                                Travel University, and a global luxury travel authority with
                                more than 40 years in the industry and travel experience
                                across 121+ countries, Angela Hughes has helped luxury
                                travelers navigate premium river cruise decisions for
                                decades.
                            </p>

                            <p>
                                This guide compares Riverside and Avalon Waterways across
                                accommodations, dining, service, excursions, pricing, and
                                destinations to help you determine which cruise line is the
                                best fit.
                            </p>
                        </>
                    )}

                    {/* READ MORE BUTTON */}
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

            {/* QUICK COMPARISON TABLE */}
            <section className="Asc-section Asc-bg-soft" id="Asc-fleet">
                <div className="Asc-container">
                    <div className="Asc-section-header">
                        <h2 className="Asc-h2">Riverside vs Avalon Quick Comparison</h2>
                        <div className="Asc-accent-line"></div>
                    </div>

                    <div className="Asc-table-wrapper">
                        <table className="Asc-fleet-table">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Riverside</th>
                                    <th>Avalon Waterways</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>
                                        <strong>Luxury Level</strong>
                                    </td>
                                    <td>★★★★★</td>
                                    <td>★★★★½</td>
                                </tr>

                                <tr>
                                    <td>
                                        <strong>Atmosphere</strong>
                                    </td>
                                    <td>Boutique &amp; elegant</td>
                                    <td>Relaxed &amp; contemporary</td>
                                </tr>

                                <tr>
                                    <td>
                                        <strong>Fleet Size</strong>
                                    </td>
                                    <td>3 ships</td>
                                    <td>15+ ships</td>
                                </tr>

                                <tr>
                                    <td>
                                        <strong>Suites</strong>
                                    </td>
                                    <td>Spacious luxury suites</td>
                                    <td>Panorama Suites®</td>
                                </tr>

                                <tr>
                                    <td>
                                        <strong>Dining</strong>
                                    </td>
                                    <td>Gourmet regional cuisine</td>
                                    <td>Fresh local cuisine</td>
                                </tr>

                                <tr>
                                    <td>
                                        <strong>Excursions</strong>
                                    </td>
                                    <td>Included highlights</td>
                                    <td>Active &amp; classic excursions</td>
                                </tr>

                                <tr>
                                    <td>
                                        <strong>Best For</strong>
                                    </td>
                                    <td>Boutique luxury travelers</td>
                                    <td>Active luxury travelers</td>
                                </tr>

                                <tr>
                                    <td>
                                        <strong>Value</strong>
                                    </td>
                                    <td>Premium</td>
                                    <td>Excellent</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── RIVERSIDE VS AVALON COMPARISON SECTION ───────────────────── */}
            <section className="rlc-rvs-section" id="riverside-vs-avalon-comparison">
                <div className="rlc-rvs-container">
                    <div className="rlc-rvs-grid">
                        {/* Riverside Card */}
                        <div className="rlc-rvs-card">
                            <div className="rlc-rvs-image-wrap">
                                <img
                                    //   src={RiversideImage}
                                    alt="Boutique Luxury River Cruise Ship in Budapest"
                                    className="rlc-rvs-card-img"
                                />
                            </div>
                            <h2 className="rlc-rvs-card-title">About Riverside Luxury Cruises</h2>
                            <p className="rlc-rvs-card-intro">
                                Riverside is designed for travelers seeking refined luxury and personalized service.
                            </p>

                            <h3 className="rlc-rvs-list-title">Highlights include:</h3>
                            <ul className="rlc-rvs-list">
                                {[
                                    "Spacious all-suite accommodations",
                                    "Boutique atmosphere",
                                    "Gourmet dining",
                                    "Personalized hospitality",
                                    "Elegant interiors",
                                    "Relaxed European itineraries",
                                ].map((item, i) => (
                                    <li key={i} className="rlc-rvs-item">
                                        <Check size={16} className="rlc-rvs-icon" />
                                        <span className="rlc-rvs-text">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="rlc-rvs-footer-quote">
                                Every voyage emphasizes comfort, privacy, and exceptional attention to detail.
                            </p>
                        </div>

                        {/* Avalon Card */}
                        <div className="rlc-rvs-card">
                            <div className="rlc-rvs-image-wrap">
                                <img
                                    //   src={AvalonImage}
                                    alt="Avalon Waterways Luxury River Cruise Ship sailing in Europe"
                                    className="rlc-rvs-card-img"
                                />
                            </div>
                            <h2 className="rlc-rvs-card-title">About Avalon Waterways</h2>
                            <p className="rlc-rvs-card-intro">
                                Avalon Waterways has earned an excellent reputation for combining luxury, comfort, and flexibility.
                            </p>

                            <h3 className="rlc-rvs-list-title">Known for:</h3>
                            <ul className="rlc-rvs-list">
                                {[
                                    "Signature Panorama Suites®",
                                    "Wall-to-wall panoramic windows",
                                    "Active excursion options",
                                    "Contemporary ship design",
                                    "Flexible sightseeing choices",
                                    "Relaxed onboard environment",
                                ].map((item, i) => (
                                    <li key={i} className="rlc-rvs-item">
                                        <Check size={16} className="rlc-rvs-icon" />
                                        <span className="rlc-rvs-text">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="rlc-rvs-footer-quote">
                                Avalon appeals to travelers who enjoy exploring destinations while maintaining a casual luxury experience.
                            </p>
                        </div>
                    </div>
                    <div className="rlc-cta-btn-wrapper" style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "40px" }}>
                        <Link to="/contact" className="rlc-page-cta-btn">
                            Start Planning Your Riverside Cruise
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── PRICING COMPARISON SECTION ───────────────────────────────── */}
            <section className="rlc-pricing-section" id="riverside-vs-avalon-pricing">
                <div className="rlc-pricing-container">
                    <div className="rlc-pricing-header">
                        <span className="rlc-pricing-eyebrow">Cost &amp; Value</span>
                        <h2 className="rlc-pricing-title">Pricing Comparison</h2>
                        <div className="rlc-pricing-accent"></div>
                        <p className="rlc-pricing-intro">
                            Both cruise lines offer excellent value within their respective markets.
                        </p>
                    </div>

                    <div className="rlc-pricing-grid">
                        {/* Riverside Pricing Card */}
                        <div className="rlc-pricing-card">
                            <h3 className="rlc-pricing-brand">Riverside</h3>
                            <ul className="rlc-pricing-list">
                                {[
                                    "Premium luxury pricing",
                                    "Spacious suites",
                                    "Boutique experience",
                                    "Personalized service",
                                ].map((item, i) => (
                                    <li key={i} className="rlc-pricing-item">
                                        <Check size={18} className="rlc-pricing-icon" />
                                        <span className="rlc-pricing-text">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Avalon Pricing Card */}
                        <div className="rlc-pricing-card">
                            <h3 className="rlc-pricing-brand">Avalon Waterways</h3>
                            <ul className="rlc-pricing-list">
                                {[
                                    "Slightly lower pricing",
                                    "Flexible excursion program",
                                    "Excellent inclusions",
                                    "Strong overall value",
                                ].map((item, i) => (
                                    <li key={i} className="rlc-pricing-item">
                                        <Check size={18} className="rlc-pricing-icon" />
                                        <span className="rlc-pricing-text">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="rlc-pricing-conclusion">
                        <p>
                            Avalon is often the better choice for travelers seeking luxury at a more accessible price point.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── SHIPS & FLEET SECTION ───────────────────────────────────── */}
            <section className="rlc-flt-section" id="riverside-vs-avalon-fleet">
                <div className="rlc-flt-container">
                    <div className="rlc-flt-header">
                        <span className="rlc-flt-eyebrow">Vessels &amp; Capacity</span>
                        <h2 className="rlc-flt-title">Ships &amp; Fleet</h2>
                        <div className="rlc-flt-accent"></div>
                    </div>

                    <div className="rlc-flt-grid">
                        {/* Riverside Card */}
                        <div className="rlc-flt-card">
                            <div className="rlc-rvs-image-wrap">
                                <img
                                    //   src={RiversideFleetImage}
                                    alt="Riverside Boutique River Cruise Fleet"
                                    className="rlc-rvs-card-img"
                                />
                            </div>
                            <h3 className="rlc-flt-brand">Riverside</h3>

                            <h4 className="rlc-flt-sub-title">Current Fleet:</h4>
                            <div className="rlc-flt-ship-tags">
                                {["Riverside Mozart", "Riverside Debussy", "Riverside Ravel"].map((ship, idx) => (
                                    <span key={idx} className="rlc-flt-tag">{ship}</span>
                                ))}
                            </div>

                            <p className="rlc-flt-desc">
                                The smaller fleet allows Riverside to deliver highly personalized service with an intimate atmosphere.
                            </p>

                            <div className="rlc-flt-best-for">
                                <div className="rlc-flt-best-icon-box">
                                    <Sparkles size={20} />
                                </div>
                                <div className="rlc-flt-best-content">
                                    <span className="rlc-flt-best-title">Best For:</span>
                                    <p className="rlc-flt-best-text">
                                        Travelers who appreciate intimate luxury and boutique experiences.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Avalon Card */}
                        <div className="rlc-flt-card">
                            <div className="rlc-rvs-image-wrap">
                                <img
                                    //   src={AvalonFleetImage}
                                    alt="Avalon Waterways Luxury River Cruise Fleet"
                                    className="rlc-rvs-card-img"
                                />
                            </div>
                            <h3 className="rlc-flt-brand">Avalon Waterways</h3>

                            <p className="rlc-flt-desc" style={{ marginBottom: "20px" }}>
                                Avalon operates a modern fleet throughout Europe and parts of Asia.
                            </p>

                            <h4 className="rlc-flt-sub-title">Popular Ships Include:</h4>
                            <div className="rlc-flt-ship-tags">
                                {[
                                    "Avalon View",
                                    "Avalon Imagery II",
                                    "Avalon Illumination",
                                    "Avalon Passion",
                                    "Avalon Poetry II",
                                    "Avalon Envision",
                                ].map((ship, idx) => (
                                    <span key={idx} className="rlc-flt-tag">{ship}</span>
                                ))}
                            </div>

                            <p className="rlc-flt-desc">
                                Avalon's larger fleet provides more sailing dates and destination choices.
                            </p>

                            <div className="rlc-flt-best-for">
                                <div className="rlc-flt-best-icon-box">
                                    <Compass size={20} />
                                </div>
                                <div className="rlc-flt-best-content">
                                    <span className="rlc-flt-best-title">Best For:</span>
                                    <p className="rlc-flt-best-text">
                                        Travelers who want more sailing dates and a wider variety of destinations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p style={{ textAlign: "center", marginTop: "24px", fontStyle: "italic" }}>
                        Winner: Avalon for destination variety.
                    </p>
                </div>
            </section>


            {/* DINING COMPARISON */}
            <section className="azs-dining-section" id="azs-dining">
                <div className="azs-container">
                    <div className="azs-section-header">
                        <h2 className="azs-section-title">Dining Experience</h2>
                        <div className="azs-section-accent"></div>
                        <p className="azs-section-subtitle">
                            Gourmet Regional Cuisine vs. Fresh Local Cuisine
                        </p>
                    </div>

                    <div className="azs-dining-grid">
                        {/* Riverside Card */}
                        <div className="azs-dining-card azs-azamara-dining">
                            <div className="azs-dining-image-wrap">
                                <img
                                    //   src={RiversideDiningImage}
                                    alt="Riverside gourmet European dining"
                                    className="azs-dining-img"
                                />
                                <div className="azs-dining-badge-wrapper">
                                    <span className="azs-dining-badge azs-azamara-badge">
                                        Gourmet European Cuisine
                                    </span>
                                </div>
                            </div>
                            <div className="azs-dining-content">
                                <div className="azs-dining-header">
                                    <div className="azs-dining-icon-circle">
                                        <Utensils size={24} className="azs-dining-icon" />
                                    </div>
                                    <h3 className="azs-dining-title">Riverside Dining</h3>
                                </div>
                                <p className="azs-dining-intro">
                                    Dining focuses on seasonal European cuisine, regional
                                    specialties, and elegant multi-course meals carefully
                                    crafted to reflect the regions visited.
                                </p>
                                <div className="azs-dining-body">
                                    <h4 className="azs-dining-group-title">Highlights include:</h4>
                                    <ul className="azs-dining-list">
                                        {[
                                            "Seasonal European cuisine",
                                            "Regional specialties",
                                            "Fine wines",
                                            "Elegant multi-course meals",
                                            "Locally inspired menus",
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
                                    <div className="azs-dining-highlight-box azs-azamara-highlight">
                                        <p className="azs-dining-highlight-text">
                                            Winner for a more refined dining experience.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Avalon Card */}
                        <div className="azs-dining-card azs-seabourn-dining">
                            <div className="azs-dining-image-wrap">
                                <img
                                    //   src={AvalonDiningImage}
                                    alt="Avalon Waterways fresh local dining"
                                    className="azs-dining-img"
                                />

                                <div className="azs-dining-badge-wrapper">
                                    <span className="azs-dining-badge azs-azamara-badge">
                                        Fresh Local Cuisine
                                    </span>
                                </div>
                            </div>
                            <div className="azs-dining-content">
                                <div className="azs-dining-header">
                                    <div className="azs-dining-icon-circle">
                                        <ChefHat size={24} className="azs-dining-icon" />
                                    </div>
                                    <h3 className="azs-dining-title">Avalon Dining</h3>
                                </div>
                                <p className="azs-dining-intro">
                                    Avalon offers a slightly more relaxed dining style while
                                    maintaining high culinary standards, with flexible dining
                                    times and healthy menu options.
                                </p>
                                <div className="azs-dining-body">
                                    <h4 className="azs-dining-group-title">Avalon offers:</h4>
                                    <ul className="azs-dining-list">
                                        {[
                                            "Fresh local ingredients",
                                            "Regional specialties",
                                            "Flexible dining times",
                                            "Healthy menu options",
                                            "Casual lunch alternatives",
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
                                    <div className="azs-dining-highlight-box azs-oceania-highlight">
                                        <p className="azs-dining-highlight-text">
                                            A relaxed dining style with excellent local flavor.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── EDITORIAL PREMIUM COMPARISON ROWS (SERVICE & ATMOSPHERE) ───── */}
            <section className="rlc-prem-section" id="riverside-vs-avalon-service-atmosphere">
                <div className="rlc-prem-container">

                    {/* Row 1: Service */}
                    <div className="rlc-prem-row">
                        {/* Meta Column (Dark theme) */}
                        <div className="rlc-prem-meta">
                            <span className="rlc-prem-num">01</span>
                            <div className="rlc-prem-label-wrap">
                                <span className="rlc-prem-eyebrow">Attentiveness &amp; Crew</span>
                                <h3 className="rlc-prem-title">Service Comparison</h3>
                                <p className="rlc-prem-intro">
                                    Both cruise lines are praised for their crews.
                                </p>
                            </div>
                            <div className="rlc-prem-winner-tag">
                                <Star size={14} fill="var(--bg-white)" />
                                <span>Winner: Riverside</span>
                            </div>
                        </div>

                        {/* Riverside Column */}
                        <div className="rlc-prem-card rlc-winner-card">
                            <div className="rlc-prem-card-header">
                                <HeartHandshake size={24} className="rlc-prem-brand-icon" />
                                <h4 className="rlc-prem-brand-name">Riverside</h4>
                            </div>
                            <h5 className="rlc-prem-list-title">Guests Appreciate:</h5>
                            <ul className="rlc-prem-list">
                                {[
                                    "Boutique hospitality",
                                    "Personalized attention",
                                    "Friendly crew",
                                    "Relaxed luxury atmosphere",
                                ].map((item, idx) => (
                                    <li key={idx} className="rlc-prem-item">
                                        <Check size={16} className="rlc-prem-item-icon" />
                                        <span className="rlc-prem-item-text">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="rlc-prem-desc">
                                The smaller number of guests allows crew members to quickly learn personal preferences.
                            </p>
                        </div>

                        {/* Avalon Column */}
                        <div className="rlc-prem-card">
                            <div className="rlc-prem-card-header">
                                <Award size={24} className="rlc-prem-brand-icon" />
                                <h4 className="rlc-prem-brand-name">Avalon Waterways</h4>
                            </div>
                            <h5 className="rlc-prem-list-title">Avalon Offers:</h5>
                            <ul className="rlc-prem-list">
                                {[
                                    "Professional service",
                                    "Friendly staff",
                                    "Efficient operations",
                                    "Relaxed atmosphere",
                                ].map((item, idx) => (
                                    <li key={idx} className="rlc-prem-item">
                                        <Check size={16} className="rlc-prem-item-icon" />
                                        <span className="rlc-prem-item-text">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="rlc-prem-desc">
                                Service is consistently praised, though it is generally less personalized than Riverside's boutique approach.
                            </p>
                        </div>
                    </div>

                    {/* Row 2: Wellness & Amenities */}
                    <div className="rlc-prem-row">
                        {/* Meta Column (Dark theme) */}
                        <div className="rlc-prem-meta">
                            <span className="rlc-prem-num">02</span>
                            <div className="rlc-prem-label-wrap">
                                <span className="rlc-prem-eyebrow">Onboard Design &amp; Wellness</span>
                                <h3 className="rlc-prem-title">Wellness &amp; Onboard Amenities</h3>
                                <p className="rlc-prem-intro">
                                    Comparing onboard style, relaxation spaces, and active facilities.
                                </p>
                            </div>
                            <div className="rlc-prem-winner-tag">
                                <Star size={14} fill="var(--bg-white)" />
                                <span>Winner: Avalon</span>
                            </div>
                        </div>

                        {/* Riverside Column */}
                        <div className="rlc-prem-card">
                            <div className="rlc-prem-card-header">
                                <Waves size={24} className="rlc-prem-brand-icon" />
                                <h4 className="rlc-prem-brand-name">Riverside</h4>
                            </div>
                            <h5 className="rlc-prem-list-title">Amenities Include:</h5>
                            <ul className="rlc-prem-list">
                                {[
                                    "Observation lounge",
                                    "Spa treatments",
                                    "Fitness center",
                                    "Sun deck",
                                ].map((item, idx) => (
                                    <li key={idx} className="rlc-prem-item">
                                        <Check size={16} className="rlc-prem-item-icon" />
                                        <span className="rlc-prem-item-text">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="rlc-prem-desc">
                                The atmosphere encourages relaxation.
                            </p>
                        </div>

                        {/* Avalon Column */}
                        <div className="rlc-prem-card rlc-winner-card">
                            <div className="rlc-prem-card-header">
                                <Bike size={24} className="rlc-prem-brand-icon" />
                                <h4 className="rlc-prem-brand-name">Avalon Waterways</h4>
                            </div>
                            <h5 className="rlc-prem-list-title">Facilities Include:</h5>
                            <ul className="rlc-prem-list">
                                {[
                                    "Fitness center",
                                    "Sky Deck",
                                    "Outdoor whirlpool",
                                    "Panorama Lounge",
                                ].map((item, idx) => (
                                    <li key={idx} className="rlc-prem-item">
                                        <Check size={16} className="rlc-prem-item-icon" />
                                        <span className="rlc-prem-item-text">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="rlc-prem-desc">
                                Avalon places greater emphasis on active lifestyles and wellness programs.
                            </p>
                        </div>
                    </div>

                    {/* Row 3: Destinations */}
                    <div className="rlc-prem-row">
                        {/* Meta Column (Dark theme) */}
                        <div className="rlc-prem-meta">
                            <span className="rlc-prem-num">03</span>
                            <div className="rlc-prem-label-wrap">
                                <span className="rlc-prem-eyebrow">Rivers &amp; Waterways</span>
                                <h3 className="rlc-prem-title">Destinations</h3>
                                <p className="rlc-prem-intro">
                                    Comparing the itineraries and rivers sailed by both lines.
                                </p>
                            </div>
                            <div className="rlc-prem-winner-tag">
                                <Star size={14} fill="var(--bg-white)" />
                                <span>Winner: Avalon</span>
                            </div>
                        </div>

                        {/* Riverside Column */}
                        <div className="rlc-prem-card">
                            <div className="rlc-prem-card-header">
                                <Compass size={24} className="rlc-prem-brand-icon" />
                                <h4 className="rlc-prem-brand-name">Riverside</h4>
                            </div>
                            <h5 className="rlc-prem-list-title">Focuses Primarily On:</h5>
                            <ul className="rlc-prem-list">
                                {[
                                    "Danube",
                                    "Rhine",
                                    "Rhône",
                                    "Main",
                                    "Moselle",
                                ].map((item, idx) => (
                                    <li key={idx} className="rlc-prem-item">
                                        <Check size={16} className="rlc-prem-item-icon" />
                                        <span className="rlc-prem-item-text">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="rlc-prem-desc">
                                Ideal for travelers seeking Europe's classic river cruise experience.
                            </p>
                        </div>

                        {/* Avalon Column */}
                        <div className="rlc-prem-card rlc-winner-card">
                            <div className="rlc-prem-card-header">
                                <MapPinned size={24} className="rlc-prem-brand-icon" />
                                <h4 className="rlc-prem-brand-name">Avalon Waterways</h4>
                            </div>
                            <h5 className="rlc-prem-list-title">Sails Throughout:</h5>
                            <ul className="rlc-prem-list">
                                {[
                                    "Danube",
                                    "Rhine",
                                    "Rhône",
                                    "Seine",
                                    "Douro",
                                    "Moselle",
                                    "Mekong",
                                    "Galápagos extensions",
                                ].map((item, idx) => (
                                    <li key={idx} className="rlc-prem-item">
                                        <Check size={16} className="rlc-prem-item-icon" />
                                        <span className="rlc-prem-item-text">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="rlc-prem-desc">
                                Avalon operates a larger fleet with more itinerary choices across Europe and beyond.
                            </p>
                        </div>
                    </div>
                    <div className="rlc-cta-btn-wrapper" style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                        <Link to="/contact" className="rlc-page-cta-btn">
                            Start Planning Your Riverside Cruise
                        </Link>
                    </div>
                </div>
            </section>


            {/* SUITES & ACCOMMODATIONS */}
            <section className="azs-suites-section" id="azs-suites">
                <div className="azs-container">
                    <div className="azs-section-header">
                        <h2 className="azs-section-title">Suites &amp; Accommodations</h2>
                        <div className="azs-section-accent"></div>
                        <p className="azs-section-subtitle">
                            Some of the Largest Suites on European Rivers vs. Innovative
                            Panorama Suites®
                        </p>
                    </div>

                    <div className="azs-suites-grid">
                        {/* Riverside Card */}
                        <div className="azs-suites-card azs-oceania-suites">
                            <div className="azs-suites-image-wrap">
                                <img
                                    //   src={RiversideSuiteImage}
                                    alt="Riverside spacious suite"
                                    className="azs-suites-img"
                                />
                                <span className="azs-suites-image-badge">
                                    Among the Largest on the Rivers
                                </span>
                            </div>

                            <div className="azs-suites-content">
                                <div className="azs-suites-card-header">
                                    <div className="azs-suites-icon-circle">
                                        <Award size={24} className="azs-suites-icon" />
                                    </div>
                                    <h3 className="azs-suites-title">Riverside Suites</h3>
                                </div>
                                <p className="azs-suites-intro">
                                    One of Riverside's biggest strengths is its spacious
                                    accommodations, with many suites among the largest
                                    available on Europe's rivers.
                                </p>
                                <div className="azs-suites-body">
                                    <h4 className="azs-suites-group-title">Guests enjoy:</h4>
                                    <ul className="azs-suites-list">
                                        {[
                                            "Large luxury suites",
                                            "King-size beds",
                                            "Marble bathrooms",
                                            "Sitting areas",
                                            "Luxury linens",
                                            "Elegant décor",
                                        ].map((item, idx) => (
                                            <li key={idx} className="azs-suites-list-item">
                                                <div className="azs-suites-list-icon-wrapper">
                                                    <Check size={14} className="azs-suites-list-icon" />
                                                </div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="azs-suites-divider"></div>
                                    <div className="azs-suites-highlight-box azs-azamara-suites-highlight">
                                        <p className="azs-suites-highlight-text">
                                            Winner for overall space and luxury.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Avalon Card */}
                        <div className="azs-suites-card azs-azamara-suites">
                            <div className="azs-suites-image-wrap">
                                <img
                                    //   src={AvalonSuiteImage}
                                    alt="Avalon Waterways Panorama Suite with open-air balcony"
                                    className="azs-suites-img"
                                />
                                <span className="azs-suites-image-badge">Panoramic River Views</span>
                            </div>

                            <div className="azs-suites-content">
                                <div className="azs-suites-card-header">
                                    <div className="azs-suites-icon-circle">
                                        <Ship size={24} className="azs-suites-icon" />
                                    </div>
                                    <h3 className="azs-suites-title">Avalon Panorama Suites®</h3>
                                </div>
                                <p className="azs-suites-intro">
                                    Avalon's Panorama Suites® are unique within the industry,
                                    offering an innovative room design that maximizes the
                                    scenery.
                                </p>
                                <div className="azs-suites-body">
                                    <h4 className="azs-suites-group-title">Features include:</h4>
                                    <ul className="azs-suites-list">
                                        {[
                                            "Wall-to-wall panoramic windows",
                                            "Open-air balcony design",
                                            "Comfortable seating area",
                                            "Modern bathrooms",
                                            "Premium bedding",
                                            "Excellent river views",
                                        ].map((item, idx) => (
                                            <li key={idx} className="azs-suites-list-item">
                                                <div className="azs-suites-list-icon-wrapper">
                                                    <Check size={14} className="azs-suites-list-icon" />
                                                </div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="azs-suites-divider"></div>
                                    <div className="azs-suites-highlight-box azs-azamara-suites-highlight">
                                        <p className="azs-suites-highlight-text">
                                            Winner for panoramic river views.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


            {/* SHORE EXCURSIONS */}
            <section className="azs-entertainment-section" id="azs-entertainment">
                <div className="azs-container">
                    <div className="azs-section-header">
                        <h2 className="azs-section-title">Shore Excursions</h2>
                        <div className="azs-section-accent"></div>
                        <p className="azs-section-subtitle">
                            Included Highlights vs. Active &amp; Flexible Excursion Choices
                        </p>
                    </div>

                    <div className="azs-entertainment-grid">
                        {/* Riverside Card */}
                        <div className="azs-entertainment-card azs-azamara-ent">
                            <div className="azs-ent-header">
                                <div className="azs-ent-icon-circle">
                                    <Compass size={24} className="azs-ent-icon" />
                                </div>
                                <h3 className="azs-ent-title">Riverside Excursions</h3>
                            </div>
                            <p className="azs-ent-intro">
                                Included experiences focus on the essentials, with optional
                                premium excursions available for travelers wanting
                                additional experiences.
                            </p>
                            <div className="azs-ent-body">
                                <h4 className="azs-ent-group-title">Included experiences:</h4>
                                <ul className="azs-ent-list">
                                    {[
                                        "Guided walking tours",
                                        "Historic landmarks",
                                        "Wine tastings",
                                        "Cultural experiences",
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
                                        Optional premium excursions are also available.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Avalon Card */}
                        <div className="azs-entertainment-card azs-seabourn-ent">
                            <div className="azs-ent-header">
                                <div className="azs-ent-icon-circle">
                                    <Bike size={24} className="azs-ent-icon" />
                                </div>
                                <h3 className="azs-ent-title">Avalon Excursions</h3>
                            </div>
                            <p className="azs-ent-intro">
                                Avalon stands out for its excursion flexibility, making it
                                particularly appealing to active travelers.
                            </p>
                            <div className="azs-ent-body">
                                <h4 className="azs-ent-group-title">Guests can often choose from:</h4>
                                <ul className="azs-ent-list">
                                    {[
                                        "Classic sightseeing tours",
                                        "Active hiking excursions",
                                        "Cycling experiences",
                                        "Discovery tours",
                                        "Culinary excursions",
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
                                <div className="azs-ent-highlight-box azs-oceania-ent-highlight">
                                    <p className="azs-ent-highlight-text">
                                        Winner for the wider variety of flexible, active excursions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== MODERN BENTO GRID GALLERY SHOWCASE ===== */}
            <section className="rva-gallery-section" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="rva-gallery-inner">
                    <div className="rva-gallery-header">
                        <h2 className="rva-gallery-h2">Global Explorations</h2>
                        <div className="rva-gallery-divider"></div>
                        <p className="rva-gallery-p">
                            From the Danube's imperial capitals to the Mekong's floating markets, discover the rivers where Riverside and Avalon Waterways sail.
                        </p>
                    </div>

                    <div className="rva-gallery-bento-grid">
                        {/* 01: Large Featured Item - The Danube River */}
                        <div className="rva-gallery-item rva-gallery-feature">
                            <div className="rva-gallery-image-box">
                                <img
                                    // src={DanubeImage}
                                    alt="Danube River Budapest Parliament views"
                                    className="rva-gallery-img"
                                />
                                <div className="rva-gallery-overlay">
                                    <h3 className="rva-gallery-h3">The Danube River</h3>
                                    <p className="rva-gallery-item-p">
                                        Sailing through the heart of Europe past castles, vineyards, and historic capitals like Vienna and Budapest. Both Riverside and Avalon offer premier Danube itineraries.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 02: Vertical Item - The Seine River */}
                        <div className="rva-gallery-item rva-gallery-tall">
                            <div className="rva-gallery-image-box">
                                <img
                                    // src={SeineImage}
                                    alt="Avalon Waterways luxury ship on the Seine River France"
                                    className="rva-gallery-img"
                                />
                                <div className="rva-gallery-overlay">
                             
                                    <h3 className="rva-gallery-h3">The Seine River</h3>
                                    <p className="rva-gallery-item-p">
                                        Sailing from Paris to the historical landing beaches of Normandy. Avalon operates their award-winning active cruises along this scenic French waterway.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 03: Standard Item - The Mekong */}
                        <div className="rva-gallery-item">
                            <div className="rva-gallery-image-box">
                                <img
                                    // src={MekongImage}
                                    alt="Mekong River Avalon Waterways cruises"
                                    className="rva-gallery-img"
                                />
                                <div className="rva-gallery-overlay">
                                   
                                    <h3 className="rva-gallery-h3">
                                        The Mekong River
                                    </h3>
                                    <p className="rva-gallery-item-p">
                                        Experiencing the ancient cultures of Vietnam and Cambodia. Avalon Waterways offers exotic sailings along the Mekong with their uniquely built Suite Ships.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 04: Standard Item - The Rhine & Moselle */}
                        <div className="rva-gallery-item">
                            <div className="rva-gallery-image-box">
                                <img
                                    // src={RhineImage}
                                    alt="Rhine river castle medieval towns Riverside cruises"
                                    className="rva-gallery-img"
                                />
                                <div className="rva-gallery-overlay">
                                    
                                    <h3 className="rva-gallery-h3">The Rhine &amp; Moselle</h3>
                                    <p className="rva-gallery-item-p">
                                        Passing medieval castles, dramatic cliffs, and legendary vineyards. Both Riverside and Avalon offer diverse itineraries on the Rhine, Moselle, and Main.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 05: Wide Feature Item - The Douro River */}
                        <div className="rva-gallery-item rva-gallery-feature">
                            <div className="rva-gallery-image-box">
                                <img
                                    // src={DouroImage}
                                    alt="Douro River Portugal cruises"
                                    className="rva-gallery-img"
                                />
                                <div className="rva-gallery-overlay">
                                   
                                    <h3 className="rva-gallery-h3">The Douro River</h3>
                                    <p className="rva-gallery-item-p">
                                        Sailing through Portugal's stunning terraced vineyards and historic wine estates. Avalon Waterways offers exceptional Douro itineraries on dedicated vessels.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 06: Standard Item - The Rhône River */}
                        <div className="rva-gallery-item">
                            <div className="rva-gallery-image-box">
                                <img
                                    // src={RhoneImage}
                                    alt="Rhone River Southern France scenery"
                                    className="rva-gallery-img"
                                />
                                <div className="rva-gallery-overlay">
                                   
                                    <h3 className="rva-gallery-h3">The Rhône River</h3>
                                    <p className="rva-gallery-item-p">
                                        Exploring Avignon, Lyon, and the rich gastronomy of Southern France. Riverside Ravel and Avalon ships sail these world-famous French vineyards.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* WHO SHOULD CHOOSE */}
            <section className="Asc-section Asc-bg-white" id="Asc-who">
                <div className="Asc-container">
                    <div className="Asc-section-header">
                        <h2 className="Asc-h2">Who Should Choose Which Cruise Line?</h2>
                        <div className="Asc-accent-line"></div>
                    </div>
                    <div className="Asc-who-grid">
                        {/* Riverside Card */}
                        <div className="Asc-who-card Asc-who-yes">
                            <h3 className="Asc-who-title">Who Should Choose Riverside?</h3>
                            <p className="Asc-who-card-intro">
                                Riverside is ideal if you value:
                            </p>
                            <ul className="Asc-who-list">
                                {[
                                    "Spacious luxury suites",
                                    "Boutique atmosphere",
                                    "Personalized service",
                                    "Elegant surroundings",
                                    "Quiet relaxation",
                                    "Luxury accommodations",
                                ].map((item, i) => (
                                    <li key={i} className="Asc-who-list-item">
                                        <Check
                                            size={16}
                                            className="Asc-icon-green Asc-who-list-icon"
                                        />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Avalon Card */}
                        <div className="Asc-who-card Asc-who-no">
                            <h3 className="Asc-who-title">Who Should Choose Avalon?</h3>
                            <p className="Asc-who-card-intro">
                                Avalon is an excellent choice if you prefer:
                            </p>
                            <ul className="Asc-who-list">
                                {[
                                    "Active excursions",
                                    "Contemporary ship design",
                                    "Panoramic river views",
                                    "Flexible sightseeing",
                                    "Excellent value",
                                    "Relaxed luxury",
                                ].map((item, i) => (
                                    <li key={i} className="Asc-who-list-item">
                                        <Check
                                            size={16}
                                            className="Asc-icon-green Asc-who-list-icon"
                                        />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PROS & CONS SECTION ────────────────────────────────────── */}
            <section className="rlc-pc-section" id="riverside-vs-avalon-pros-cons">
                <div className="rlc-pc-container">
                    <div className="rlc-pc-header">
                        <h2 className="rlc-pc-title">Pros &amp; Cons</h2>
                        <div className="rlc-pc-accent"></div>
                    </div>

                    <div className="rlc-pc-grid">
                        {/* Riverside Card */}
                        <div className="rlc-pc-card">
                            <h3 className="rlc-pc-brand">Riverside</h3>

                            <div className="rlc-pc-lists-wrap">
                                {/* Pros */}
                                <div className="rlc-pc-list-col">
                                    <h4 className="rlc-pc-col-title rlc-pro">
                                        <Check size={16} className="rlc-pc-icon rlc-pro" /> Pros
                                    </h4>
                                    <ul className="rlc-pc-list">
                                        {[
                                            "Spacious accommodations",
                                            "Boutique luxury",
                                            "Personalized hospitality",
                                            "Outstanding cuisine",
                                            "Elegant interiors",
                                            "Quiet atmosphere",
                                        ].map((item, idx) => (
                                            <li key={idx} className="rlc-pc-item">
                                                <Check size={14} className="rlc-pc-icon rlc-pro" />
                                                <span className="rlc-pc-text">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Cons */}
                                <div className="rlc-pc-list-col">
                                    <h4 className="rlc-pc-col-title rlc-con">
                                        <Minus size={16} className="rlc-pc-icon rlc-con" /> Cons
                                    </h4>
                                    <ul className="rlc-pc-list">
                                        {[
                                            "Smaller fleet",
                                            "Fewer itineraries",
                                            "Higher pricing",
                                            "Fewer active excursions",
                                        ].map((item, idx) => (
                                            <li key={idx} className="rlc-pc-item">
                                                <Minus size={14} className="rlc-pc-icon rlc-con" />
                                                <span className="rlc-pc-text">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Avalon Card */}
                        <div className="rlc-pc-card">
                            <h3 className="rlc-pc-brand">Avalon Waterways</h3>

                            <div className="rlc-pc-lists-wrap">
                                {/* Pros */}
                                <div className="rlc-pc-list-col">
                                    <h4 className="rlc-pc-col-title rlc-pro">
                                        <Check size={16} className="rlc-pc-icon rlc-pro" /> Pros
                                    </h4>
                                    <ul className="rlc-pc-list">
                                        {[
                                            "Panorama Suites®",
                                            "Active excursion options",
                                            "Flexible touring",
                                            "Modern ships",
                                            "Strong value",
                                            "Wide destination selection",
                                        ].map((item, idx) => (
                                            <li key={idx} className="rlc-pc-item">
                                                <Check size={14} className="rlc-pc-icon rlc-pro" />
                                                <span className="rlc-pc-text">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Cons */}
                                <div className="rlc-pc-list-col">
                                    <h4 className="rlc-pc-col-title rlc-con">
                                        <Minus size={16} className="rlc-pc-icon rlc-con" /> Cons
                                    </h4>
                                    <ul className="rlc-pc-list">
                                        {[
                                            "Smaller suites than Riverside",
                                            "Less personalized service",
                                            "More casual atmosphere",
                                            "Fewer luxury amenities",
                                        ].map((item, idx) => (
                                            <li key={idx} className="rlc-pc-item">
                                                <Minus size={14} className="rlc-pc-icon rlc-con" />
                                                <span className="rlc-pc-text">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* FINAL VERDICT */}
            <section
                className="Asc-section Asc-bg-white"
                id="Asc-verdict"
                style={{ backgroundColor: "var(--bg-soft)" }}
            >
                <div className="Asc-container">
                    <div className="Asc-section-header margin-large">
                        <h2 className="Asc-h2">Which Cruise Line Offers Better Value?</h2>

                        <div className="Asc-accent-line"></div>

                        <p className="Asc-verdict-intro">
                            Both cruise lines provide excellent experiences, but they appeal to different travelers.
                        </p>
                    </div>

                    <div className="Asc-verdict-grid">
                        {/* Riverside Column */}
                        <div className="Asc-verdict-card Asc-verdict-azamara">
                            <h3 className="Asc-verdict-card-title">
                                Choose Riverside if you want:
                            </h3>

                            <ul className="Asc-verdict-list">
                                {[
                                    "Spacious suites",
                                    "Boutique luxury",
                                    "Personalized hospitality",
                                    "Elegant dining",
                                    "Relaxed travel",
                                ].map((item, i) => (
                                    <li key={i} className="Asc-verdict-item">
                                        <Check size={18} className="Asc-verdict-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Avalon Column */}
                        <div className="Asc-verdict-card Asc-verdict-regent">
                            <h3 className="Asc-verdict-card-title">
                                Choose Avalon Waterways if you want:
                            </h3>

                            <ul className="Asc-verdict-list">
                                {[
                                    "Active adventures",
                                    "Flexible excursions",
                                    "Contemporary design",
                                    "Scenic Panorama Suites®",
                                    "Excellent overall value",
                                ].map((item, i) => (
                                    <li key={i} className="Asc-verdict-item">
                                        <Check size={18} className="Asc-verdict-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="Asc-verdict-footer-box">
                        <p className="Asc-verdict-footer-text">
                            No matter which cruise line you choose, you'll enjoy breathtaking
                            scenery, exceptional hospitality, and unforgettable journeys
                            through Europe's most iconic rivers.
                        </p>
                    </div>
                </div>
            </section>

            {/* WHY BOOK THROUGH A LUXURY TRAVEL ADVISOR? */}
            <section
                className="Avr-planning-section"
                id="Asc-luxury-travel-advisor"
                style={{ backgroundColor: "var(--bg-white)" }}
            >
                <div className="Asc-container">
                    {/* HEADING */}
                    <div className="Avr-planning-heading">
                        <span className="Avr-planning-eyebrow">
                            Personalized Cruise Planning
                        </span>

                        <h2 className="Avr-planning-title">
                            Why Book Through a Luxury Travel Advisor?
                        </h2>

                        <div className="Avr-planning-divider"></div>
                    </div>

                    {/* TWO-PANEL GRID */}
                    <div className="Avr-planning-grid">
                        {/* LEFT PANEL */}
                        <div className="Avr-planning-left">
                            <div className="Avr-planning-left-deco">&ldquo;</div>

                            <h3 className="Avr-planning-left-title">
                                Create Your Perfect River Journey
                            </h3>

                            <p className="Avr-planning-left-body">
                                Choosing the right river cruise involves much more than
                                comparing prices. Expert guidance ensures you select the
                                cruise that best fits your travel goals and budget.
                            </p>

                            <div className="Avr-planning-alert">
                                <ShieldCheck size={18} className="Avr-planning-alert-icon" />

                                <p className="Avr-planning-alert-text">
                                    Professional guidance helps ensure you select the cruise
                                    that best fits your travel goals and budget.
                                </p>
                            </div>
                        </div>

                        {/* RIGHT PANEL */}
                        <div className="Avr-planning-right">
                            <p className="Avr-planning-right-intro">
                                A luxury travel advisor can help you:
                            </p>

                            <div className="Avr-planning-benefits-grid">
                                {[
                                    {
                                        icon: <MapPinned size={18} />,
                                        label: "Compare cruise lines",
                                    },
                                    {
                                        icon: <Compass size={18} />,
                                        label: "Choose the right itinerary",
                                    },
                                    {
                                        icon: <Ship size={18} />,
                                        label: "Select the best suite",
                                    },
                                    {
                                        icon: <Plane size={18} />,
                                        label: "Coordinate flights",
                                    },
                                    {
                                        icon: <Home size={18} />,
                                        label: "Arrange hotels",
                                    },
                                    {
                                        icon: <MapPin size={18} />,
                                        label: "Plan transfers",
                                    },
                                    {
                                        icon: <Sparkles size={18} />,
                                        label: "Recommend excursions",
                                    },
                                    {
                                        icon: <BadgePercent size={18} />,
                                        label: "Access exclusive offers and promotions",
                                    },
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
                                Professional guidance helps ensure you select the cruise that
                                best fits your travel goals and budget.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ANGELA HUGHES AUTHORITY BOX */}
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

            {/* FAQ */}
            <section className="Asc-section Asc-bg-white" id="Asc-faq">
                <div className="Asc-container">
                    <div className="Asc-section-header">
                        <h2 className="Asc-h2">Frequently Asked Questions</h2>
                        <div className="Asc-accent-line"></div>
                        <p className="Asc-faq-intro">
                            Everything you need to know about choosing between Riverside
                            and Avalon Waterways.
                        </p>
                    </div>
                    <FAQ />
                </div>
            </section>

            {/* CTA */}
            <section className="Asc-help-section">
                <div className="Asc-help-bg-wrap">
                    <img
                        // src={RiversideVsAvalonCtaImage}
                        alt="Riverside and Avalon Waterways river cruises sailing through Europe"
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
                                    Final Thoughts: <br /> Riverside vs. Avalon Waterways
                                </h2>
                                <div className="Asc-help-accent"></div>
                            </div>

                            <div className="Asc-help-grid">
                                <div className="Asc-help-info">
                                    <p className="Asc-help-intro">
                                        Riverside Luxury Cruises and Avalon Waterways both offer
                                        memorable European river cruises, but they are designed
                                        for different types of travelers.
                                        {!ctaReadMore && (
                                            <button
                                                onClick={() => setCtaReadMore(true)}
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

                                    {ctaReadMore && (
                                        <>
                                            <br />
                                            <p className="Asc-help-intro">
                                                Choose Riverside Luxury Cruises if you want boutique
                                                luxury, spacious suites, personalized service,
                                                gourmet dining, and elegant, relaxed cruising.
                                            </p>
                                            <br />
                                            <p className="Asc-help-intro">
                                                Choose Avalon Waterways if you want flexible
                                                sightseeing, active excursions, Panorama Suites®,
                                                contemporary ships, and excellent value.
                                            </p>
                                            <br />
                                            <p className="Asc-help-intro">
                                                No matter which cruise line you choose, you'll enjoy
                                                breathtaking scenery, exceptional
                                                hospitality, gourmet dining, and unforgettable
                                                journeys through Europe's most beautiful waterways.
                                                <button
                                                    onClick={() => setCtaReadMore(false)}
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
                                            Start Planning Your Luxury River Cruise
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
                                            "Compare Riverside and Avalon itineraries side by side",
                                            "Recommend the ship and suite category that fits your travel style",
                                            "Coordinate pre- and post-cruise hotel stays",
                                            "Access exclusive promotions and amenities",
                                            "Arrange flights, transfers, and private shore experiences",
                                            "Provide ongoing support before and during your voyage",
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

                            {/* Suggested Internal Links */}
                            <div
                                className="Asc-internal-links-section"
                                style={{
                                    marginTop: "60px",
                                    borderTop: "1px solid rgba(255, 255, 255, 0.2)",
                                    paddingTop: "40px",
                                }}
                            >
                                <h3
                                    style={{
                                        color: "#fff",
                                        fontFamily: "var(--font-display)",
                                        fontSize: "24px",
                                        fontWeight: "400",
                                        marginBottom: "20px",
                                    }}
                                >
                                    Explore More Luxury River Cruise Guides
                                </h3>
                                <div
                                    className="Asc-internal-links-grid"
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns:
                                            "repeat(auto-fill, minmax(280px, 1fr))",
                                        gap: "15px",
                                    }}
                                >
                                    {[
                                        {
                                            label: "Riverside Luxury Cruises",
                                            path: "/riverside-luxury-cruises",
                                        },
                                        {
                                            label: "Riverside Luxury Cruises Reviews",
                                            path: "/riverside-luxury-cruises-reviews",
                                        },
                                        {
                                            label: "Is Riverside Worth It?",
                                            path: "/is-riverside-worth-it",
                                        },
                                        {
                                            label: "What Is Included on Riverside?",
                                            path: "/what-is-included-on-riverside",
                                        },
                                        {
                                            label: "Best Riverside Cruises",
                                            path: "/best-riverside-cruises",
                                        },
                                        {
                                            label: "Riverside Debussy Review",
                                            path: "/riverside-debussy-review",
                                        },
                                        {
                                            label: "Riverside Rhine Cruises",
                                            path: "/riverside-rhine-cruises",
                                        },
                                        {
                                            label: "Riverside vs. Scenic",
                                            path: "/riverside-vs-scenic-river-cruises",
                                        },
                                        {
                                            label: "Riverside vs. Uniworld",
                                            path: "/riverside-vs-uniworld-river-cruises",
                                        },
                                        {
                                            label: "Riverside vs. Tauck",
                                            path: "/riverside-vs-tauck-river-cruises",
                                        },
                                        {
                                            label: "Riverside vs. AmaWaterways",
                                            path: "/riverside-vs-amawaterways",
                                        },
                                    ].map((link, idx) => (
                                        <Link
                                            key={idx}
                                            to={link.path}
                                            style={{
                                                color: "rgba(255, 255, 255, 0.8)",
                                                fontSize: "16px",
                                                textDecoration: "none",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "8px",
                                                transition: "color 0.2s ease",
                                            }}
                                            onMouseEnter={(e) => (e.target.style.color = "#fff")}
                                            onMouseLeave={(e) =>
                                                (e.target.style.color = "rgba(255, 255, 255, 0.8)")
                                            }
                                        >
                                            <ArrowRight size={14} style={{ flexShrink: 0 }} />
                                            <span>{link.label}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RiversideVsAvalon;