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
    Quote,
    AlertTriangle,
} from "lucide-react";
import "./Azamarashipcomparison.css";
import "../BestAfricanSafariForFamilies/Bestafricasafariforfamilies.css"
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/image.webp";
import HeroImage1 from "../../assets/Azamarashipcomparison/hero1.webp";
import HeroImage2 from "../../assets/Azamarashipcomparison/Azamaraship2.webp";
import HeroImage3 from "../../assets/Azamarashipcomparison/Azamaraship.webp";
import CTAImage from "../../assets/AzamaravsVikingOcean/cta.webp";
import ImageGallery1 from "../../assets/Azamarashipcomparison/Onboard.webp";
import ImageGallery2 from "../../assets/Azamarashipcomparison/shipexperience.webp";
import OnwardImage from "../../assets/Azamarashipcomparison/Azamara-Onward-lux-urycruise-ship.webp";
import JourneyImage from "../../assets/Azamarashipcomparison/Azamara-Journey-suite-balcony.webp";
import QuestImage from "../../assets/Azamarashipcomparison/Azamara-Quest.webp";
import PursuitImage from "../../assets/Azamarashipcomparison/Azamara-night.webp";
import { Helmet } from "react-helmet-async";

const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            name: "Trips & Ships Luxury Travel",
            url: "https://www.tripsandships.com",
            logo: "https://www.tripsandships.com/PNG%20image.png",
            sameAs: [
                "https://www.facebook.com/tripsandships/",
                "https://www.instagram.com/tripsandshipsluxurytravel",
            ],
        },
        {
            "@type": "TravelAgency",
            name: "Trips & Ships Luxury Travel",
            url: "https://www.tripsandships.com",
            description:
                "Luxury travel agency specializing in cruises, expeditions, safaris, and premium travel experiences.",
        },
        {
            "@type": "Person",
            name: "Angela Hughes",
            jobTitle: "CEO of Trips & Ships Luxury Travel",
            description:
                "Luxury travel expert with more than 40 years in the travel industry and visits to over 121 countries.",
            worksFor: {
                "@type": "Organization",
                name: "Trips & Ships Luxury Travel",
            },
        },
        {
            "@type": "WebPage",
            name: "Azamara Ship Comparison",
            url: "https://www.tripsandships.com/azamara-ship-comparison",
            description: "Expert Azamara ship comparison guide for luxury travelers.",
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
                    name: "Azamara Ship Comparison",
                    item: "https://www.tripsandships.com/azamara-ship-comparison",
                },
            ],
        },
        {
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Which Azamara ship is newest?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Azamara Onward is the newest addition to the Azamara fleet.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Azamara considered luxury?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Azamara is considered an upper-premium boutique cruise line with many luxury-level features.",
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
            q: "Which Azamara ship is newest?",
            a: "Azamara Onward is the newest addition to the Azamara fleet and features refreshed modern interiors.",
        },
        {
            q: "Are all Azamara ships similar?",
            a: "Yes. The ships are similar in size and layout, but itineraries, ambiance, and updated design elements vary.",
        },
        {
            q: "Which Azamara ship is best for first-time cruisers?",
            a: "Azamara Journey is often recommended for first-time Azamara guests due to its balanced itineraries and welcoming atmosphere.",
        },
        {
            q: "Is Azamara considered luxury?",
            a: "Azamara is considered an upper-premium boutique cruise line with many luxury-level features.",
        },
        {
            q: "Which Azamara ship has the best suites?",
            a: "Azamara Onward currently offers the freshest suite experience after modernization updates.",
        },
        {
            q: "Are Azamara cruises all-inclusive?",
            a: "Azamara includes many amenities such as gratuities, select beverages, and cultural events.",
        },
        {
            q: "What is Azamara best known for?",
            a: "Azamara is best known for destination immersion and extended port stays.",
        },
        {
            q: "Which Azamara ship is best for world cruises?",
            a: "Azamara Quest has developed a strong reputation for extended world cruise itineraries.",
        },
        {
            q: "Does Azamara attract younger travelers?",
            a: "Azamara primarily attracts experienced luxury travelers, though younger affluent travelers are increasingly interested in immersive cruising.",
        },
        {
            q: "Is Azamara better than Oceania?",
            a: "Both appeal to luxury travelers, but Azamara emphasizes destination immersion while Oceania is especially known for culinary experiences.",
        },
        {
            q: "What destinations does Azamara do best?",
            a: "Mediterranean, South America, Africa, Asia, and immersive European itineraries are standout strengths.",
        },
        {
            q: "Is Azamara good for solo travelers?",
            a: "Yes. The intimate atmosphere and destination-focused experiences work well for solo luxury travelers.",
        },
        {
            q: "When should travelers book Azamara cruises?",
            a: "Luxury suites and premium itineraries should ideally be booked 9–18 months in advance.",
        },
        {
            q: "Why use a luxury cruise advisor for Azamara?",
            a: "Experienced advisors help travelers maximize value, secure preferred accommodations, and choose the best itineraries.",
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

const AzamaraShipComparison = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [readMore, setReadMore] = useState(false);
    const images = [HeroImage1, HeroImage2, HeroImage3];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Azamara Ship Comparison 2026 | Which Azamara Ship Is Best for Luxury Travelers?</title>
                <meta
                    name="title"
                    content="Azamara Ship Comparison Guide 2026 | Expert Luxury Cruise Insights"
                />
                <meta
                    name="description"
                    content="Compare all Azamara ships with expert luxury cruise insights from Angela Hughes, CEO of Trips & Ships Luxury Travel. Discover the best Azamara ship for suites, dining, destinations, and immersive luxury cruising in 2026."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>

            <Nav />

            {/* HERO */}
            <section className="Asc-hero-section">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`Asc-hero-bg ${index === currentSlide ? "active" : ""}`}
                        style={{ backgroundImage: `url(${img})` }}
                    ></div>
                ))}
                <div className="Asc-hero-overlay"></div>
                <div className="Asc-hero-content">
                    <span className="Asc-hero-eyebrow">Expert Luxury Cruise Guide · 2026</span>
                    <h1 className="Asc-hero-h1">
                        Azamara Ship Comparison: <br /> Which Azamara Ship Is Right for You?
                    </h1>
                    <p className="Asc-hero-sub">
                        Discover the Best Azamara Ship for Your Luxury Travel Style
                    </p>
                </div>
            </section>

            {/* INTRO */}
            <section className="Asc-section Asc-bg-white" id="Asc-overview">
                <div className="Asc-container">
                    <div className="Asc-intro-split">
                        <div className="Asc-intro-content">
                            <div className="Asc-section-header">
                                <h2 className="Asc-h2">Discover the Best Azamara Ship for Your Luxury Travel Style</h2>
                                <div className="Asc-accent-line"></div>
                            </div>

                            <div className="Asc-intro-wrapper">
                                <p className="Asc-intro-text Asc-intro-spacing">
                                    For luxury travelers seeking immersive destinations, boutique ship experiences, and personalized service, Azamara Cruises has become one of the most respected names in small-ship cruising.
                                </p>
                                <p className="Asc-intro-text Asc-intro-spacing">
                                    But many travelers ask:<br />
                                    <strong>Which Azamara ship is actually the best?</strong>
                                </p>
                                <p className="Asc-intro-text Asc-intro-spacing">
                                    The answer depends entirely on your travel style, destinations, suite preferences, and onboard priorities.
                                </p>

                                {readMore && (
                                    <>
                                        <p className="Asc-intro-text Asc-intro-spacing">
                                            At Trips &amp; Ships Luxury Travel, luxury cruise specialist Angela Hughes helps discerning travelers select the ideal Azamara experience based on decades of global luxury travel expertise.
                                        </p>
                                        <p className="Asc-intro-text">
                                            With over 40 years in the travel industry, visits to more than 121 countries, and recognition as the 2024 Luxury Travel Influencer of the Year by Travel Leaders Network, Angela Hughes brings a level of luxury cruise expertise few advisors worldwide can match.
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
                            </div>
                        </div>

                        <div className="Asc-intro-images">
                            <div
                                className="Asc-intro-img-main"
                                style={{ backgroundImage: `url(${ImageGallery1})` }}
                            />
                            <div
                                className="Asc-intro-img-accent"
                                style={{ backgroundImage: `url(${ImageGallery2})` }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* APPEALS */}
            <section className="Asc-section Asc-bg-soft" id="Asc-appeals">
                <div className="Asc-container">
                    <div className="Asc-section-header">
                        <h2 className="Asc-h2">Why Azamara Appeals to Luxury Travelers</h2>
                        <div className="Asc-accent-line"></div>
                    </div>

                    <div className="Asc-intro-wrapper">
                        <p className="Asc-intro-text Asc-intro-spacing">
                            Unlike mega cruise ships focused on entertainment volume, Azamara delivers:
                        </p>

                        <div className="Asc-appeals-feature-grid">
                            {[
                                { icon: <MapPin size={24} />, label: "Destination immersion" },
                                { icon: <Ship size={24} />, label: "Boutique luxury atmosphere" },
                                { icon: <Award size={24} />, label: "Longer port stays" },
                                { icon: <Star size={24} />, label: "Overnight experiences" },
                                { icon: <Users size={24} />, label: "Curated cultural programming" },
                                { icon: <Check size={24} />, label: "Smaller ship intimacy" },
                                { icon: <Check size={24} />, label: "Personalized service" },
                                { icon: <Check size={24} />, label: "Elevated culinary experiences" },
                            ].map((item, i) => (
                                <div key={i} className="Asc-appeals-feature-card">
                                    <div className="Asc-appeals-feature-icon">{item.icon}</div>
                                    <h4 className="Asc-appeals-feature-label">{item.label}</h4>
                                </div>
                            ))}
                        </div>

                        <p className="Asc-intro-text" style={{ marginTop: "32px" }}>
                            Azamara’s ships are intentionally smaller, allowing access to ports larger ships simply cannot reach.
                        </p>
                        <p className="Asc-intro-text Asc-intro-spacing" style={{ marginTop: "16px" }}>
                            For travelers who value meaningful exploration over crowds, Azamara occupies a unique position between premium and luxury cruising.
                        </p>
                    </div>
                </div>
            </section>

            {/* FLEET OVERVIEW TABLE */}
            <section className="Asc-section Asc-bg-white" id="Asc-fleet">
                <div className="Asc-container">
                    <div className="Asc-section-header">
                        <h2 className="Asc-h2">Quick Azamara Fleet Overview</h2>
                        <div className="Asc-accent-line"></div>
                    </div>

                    <div className="Asc-table-wrapper">
                        <table className="Asc-fleet-table">
                            <thead>
                                <tr>
                                    <th>Ship</th>
                                    <th>Guest Capacity</th>
                                    <th>Year Refurbished</th>
                                    <th>Best For</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Azamara Journey</strong></td>
                                    <td>~700</td>
                                    <td>Modernized</td>
                                    <td>Classic Mediterranean itineraries</td>
                                </tr>
                                <tr>
                                    <td><strong>Azamara Quest</strong></td>
                                    <td>~700</td>
                                    <td>Modernized</td>
                                    <td>World cruising & immersive itineraries</td>
                                </tr>
                                <tr>
                                    <td><strong>Azamara Pursuit</strong></td>
                                    <td>~700</td>
                                    <td>Modern luxury feel</td>
                                    <td>Adventure-focused routes</td>
                                </tr>
                                <tr>
                                    <td><strong>Azamara Onward</strong></td>
                                    <td>~700</td>
                                    <td>Newest addition</td>
                                    <td>Travelers wanting freshest design</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* SHIP DEEP DIVES */}
            <section className="Asc-section Asc-bg-soft" id="Asc-ships">
                <div className="Asc-container">
                    <div className="Asc-section-header">
                        <h2 className="Asc-h2">Azamara Journey vs Quest vs Pursuit vs Onward</h2>
                        <div className="Asc-accent-line"></div>
                    </div>

                    <div className="Asc-ships-grid">
                        {/* JOURNEY */}
                        <div className="Asc-ship-card">
                            <div className="Asc-ship-image-wrap">
                                <img src={JourneyImage} alt="Azamara Journey luxury cruise ship" className="Asc-ship-img" />
                                <div className="Asc-ship-badge">Azamara Journey</div>
                            </div>
                            <div className="Asc-ship-body">
                                <div className="Asc-ship-best-for">
                                    <span className="Asc-ship-label">Best For</span>
                                    <ul className="Asc-ship-bestfor-list">
                                        <li><Check size={14} /> First-time Azamara guests</li>
                                        <li><Check size={14} /> Mediterranean lovers</li>
                                        <li><Check size={14} /> Couples seeking classic luxury cruising</li>
                                    </ul>
                                </div>
                                <div className="Asc-ship-strengths">
                                    <span className="Asc-ship-label">Strengths</span>
                                    <ul className="Asc-ship-list">
                                        <li><Check size={14} className="Asc-icon-green" /> Warm onboard atmosphere</li>
                                        <li><Check size={14} className="Asc-icon-green" /> Excellent itineraries</li>
                                        <li><Check size={14} className="Asc-icon-green" /> Exceptional crew consistency</li>
                                        <li><Check size={14} className="Asc-icon-green" /> Strong culinary reputation</li>
                                    </ul>
                                </div>
                                <div className="Asc-ship-drawback">
                                    <AlertTriangle size={14} className="Asc-icon-warn" />
                                    <span>Slightly older aesthetic in some public spaces compared to Onward</span>
                                </div>
                            </div>
                        </div>

                        {/* QUEST */}
                        <div className="Asc-ship-card">
                            <div className="Asc-ship-image-wrap">
                                <img src={QuestImage} alt="Azamara Quest cruise ship" className="Asc-ship-img" />
                                <div className="Asc-ship-badge">Azamara Quest</div>
                            </div>
                            <div className="Asc-ship-body">
                                <div className="Asc-ship-best-for">
                                    <span className="Asc-ship-label">Best For</span>
                                    <ul className="Asc-ship-bestfor-list">
                                        <li><Check size={14} /> World cruisers</li>
                                        <li><Check size={14} /> Longer voyages</li>
                                        <li><Check size={14} /> Cultural immersion travelers</li>
                                    </ul>
                                </div>
                                <div className="Asc-ship-strengths">
                                    <span className="Asc-ship-label">Strengths</span>
                                    <ul className="Asc-ship-list">
                                        <li><Check size={14} className="Asc-icon-green" /> Excellent itinerary diversity</li>
                                        <li><Check size={14} className="Asc-icon-green" /> Strong enrichment programming</li>
                                        <li><Check size={14} className="Asc-icon-green" /> Relaxed sophisticated ambiance</li>
                                    </ul>
                                </div>
                                <div className="Asc-ship-drawback">
                                    <AlertTriangle size={14} className="Asc-icon-warn" />
                                    <span>Entertainment is quieter than mainstream luxury lines</span>
                                </div>
                            </div>
                        </div>

                        {/* PURSUIT */}
                        <div className="Asc-ship-card">
                            <div className="Asc-ship-image-wrap">
                                <img src={PursuitImage} alt="Azamara Pursuit cruise ship" className="Asc-ship-img" />
                                <div className="Asc-ship-badge">Azamara Pursuit</div>
                            </div>
                            <div className="Asc-ship-body">
                                <div className="Asc-ship-best-for">
                                    <span className="Asc-ship-label">Best For</span>
                                    <ul className="Asc-ship-bestfor-list">
                                        <li><Check size={14} /> Adventure-focused luxury travelers</li>
                                        <li><Check size={14} /> South America, Africa, and exotic itineraries</li>
                                    </ul>
                                </div>
                                <div className="Asc-ship-strengths">
                                    <span className="Asc-ship-label">Strengths</span>
                                    <ul className="Asc-ship-list">
                                        <li><Check size={14} className="Asc-icon-green" /> Expedition-style destination access</li>
                                        <li><Check size={14} className="Asc-icon-green" /> Intimate luxury atmosphere</li>
                                        <li><Check size={14} className="Asc-icon-green" /> Strong destination-focused programming</li>
                                    </ul>
                                </div>
                                <div className="Asc-ship-drawback">
                                    <AlertTriangle size={14} className="Asc-icon-warn" />
                                    <span>Fewer high-energy nightlife options</span>
                                </div>
                            </div>
                        </div>

                        {/* ONWARD */}
                        <div className="Asc-ship-card Asc-ship-card-featured">
                            <div className="Asc-ship-featured-tag">Newest Ship</div>
                            <div className="Asc-ship-image-wrap">
                                <img src={OnwardImage} alt="Azamara Onward luxury cruise ship" className="Asc-ship-img" />
                                <div className="Asc-ship-badge">Azamara Onward</div>
                            </div>
                            <div className="Asc-ship-body">
                                <div className="Asc-ship-best-for">
                                    <span className="Asc-ship-label">Best For</span>
                                    <ul className="Asc-ship-bestfor-list">
                                        <li><Check size={14} /> Travelers wanting the newest Azamara ship</li>
                                        <li><Check size={14} /> Modern luxury enthusiasts</li>
                                        <li><Check size={14} /> Suite-focused travelers</li>
                                    </ul>
                                </div>
                                <div className="Asc-ship-strengths">
                                    <span className="Asc-ship-label">Strengths</span>
                                    <ul className="Asc-ship-list">
                                        <li><Check size={14} className="Asc-icon-green" /> Updated interiors</li>
                                        <li><Check size={14} className="Asc-icon-green" /> Fresh design elements</li>
                                        <li><Check size={14} className="Asc-icon-green" /> Refined public spaces</li>
                                        <li><Check size={14} className="Asc-icon-green" /> Elevated suite experience</li>
                                    </ul>
                                </div>
                                <div className="Asc-ship-drawback">
                                    <AlertTriangle size={14} className="Asc-icon-warn" />
                                    <span>Some travelers still prefer the classic charm of Journey and Quest</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ───────── EXPERT INSIGHT SECTION ───────── */}
            <section className="Asc-expert-section" id="Asc-expert-insight">
                <div className="Asc-container">
                    <div className="Asc-expert-wrapper">

                        {/* TOP HEADING */}
                        <div className="Asc-expert-heading">
                            <span className="Asc-expert-label">
                                Expert Insight From Angela Hughes
                            </span>

                            <h2 className="Asc-expert-title">
                                Why Small-Ship Luxury Matters <br /> More Than Ever
                            </h2>

                            <div className="Asc-expert-divider"></div>
                        </div>

                        {/* MAIN GRID */}
                        <div className="Asc-expert-grid">

                            {/* LEFT SIDE */}
                            <div className="Asc-expert-left">

                                <div className="Asc-expert-card">
                                    <h3 className="Asc-expert-card-title">
                                        According to Angela Hughes, travelers are increasingly prioritizing:
                                    </h3>

                                    <div className="Asc-expert-list">
                                        {[
                                            { icon: <MapPin size={18} />, label: "Authentic destination immersion" },
                                            { icon: <Check size={18} />, label: "Personalized service" },
                                            { icon: <Users size={18} />, label: "Cultural connection" },
                                            { icon: <Minus size={18} />, label: "Fewer crowds" },
                                            { icon: <Award size={18} />, label: "Longer stays in port" },
                                        ].map((item, i) => (
                                            <div className="Asc-expert-list-item" key={i}>
                                                <span className="Asc-expert-list-icon">{item.icon}</span>
                                                <span className="Asc-expert-list-label">{item.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="Asc-quote-card">

                                    <div className="Asc-quote-icon">
                                        <Quote size={40} />
                                    </div>

                                    <blockquote className="Asc-quote-text">
                                        "After more than four decades in luxury travel and visiting over 121
                                        countries, Angela consistently sees sophisticated travelers moving
                                        away from mega-ship experiences toward boutique luxury lines like
                                        Azamara."
                                    </blockquote>

                                    <div className="Asc-signature">
                                        <div className="Asc-signature-line"></div>
                                        <div className="Asc-signature-info">
                                            <span className="Asc-signature-name">Angela Hughes</span>
                                            <span className="Asc-signature-title">CEO, Trips & Ships Luxury Travel</span>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            {/* RIGHT SIDE */}
                            <div className="Asc-expert-right">
                                <div className="Asc-expert-card">
                                    <h3 className="Asc-expert-card-title">
                                        Her expertise spans:
                                    </h3>

                                    <div className="Asc-expert-list">
                                        {[
                                            { icon: <Ship size={18} />, label: "Luxury cruising" },
                                            { icon: <Ship size={18} />, label: "River cruising" },
                                            { icon: <MapPin size={18} />, label: "Expedition travel" },
                                            { icon: <MapPin size={18} />, label: "African safaris" },
                                            { icon: <Star size={18} />, label: "Global premium travel planning" },
                                        ].map((item, i) => (
                                            <div className="Asc-expert-list-item" key={i}>
                                                <span className="Asc-expert-list-icon">{item.icon}</span>
                                                <span className="Asc-expert-list-label">{item.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>



                                <div className="Asc-expert-bio-box">
                                    <div className="Asc-expert-bio-badge">Global Speaker & Advisor</div>
                                    <p className="Asc-expert-bio-text">
                                        As founder of Luxury Travel University and a recognized global
                                        luxury travel speaker, Angela Hughes helps travelers navigate
                                        increasingly complex luxury cruise choices with real-world
                                        experience rather than generic online advice.
                                    </p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>

{/* VIDEO SECTION */}
<section className="Asc-video-section" id="Asc-video">
    <div className="Asc-container">
        <div className="Asc-section-header">
            <h2 className="Asc-h2">Azamara World Cruise</h2>
            <div className="Asc-accent-line"></div>

            <p className="Asc-video-intro">
                Discover what makes the Azamara World Cruise a truly immersive luxury experience as Angela Hughes shares expert insights, destination highlights, and what travelers can expect onboard.
            </p>
        </div>

        <div className="Asc-video-wrapper">
            <div className="Asc-video-frame">
                <iframe
                    src="https://www.youtube.com/embed/Y0dt7AYocos"
                    title="Azamara World Cruise – Angela Hughes"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    </div>
</section>

            {/* WHICH SHIP IS BEST */}
            <section className="Asc-section Asc-bg-soft" id="Asc-best">
                <div className="Asc-container">
                    <div className="Asc-section-header">
                        <h2 className="Asc-h2">Which Azamara Ship Is Best?</h2>
                        <div className="Asc-accent-line"></div>
                    </div>
                    <div className="Asc-best-grid">
                        <div className="Asc-best-card Asc-best-primary">
                            <div className="Asc-best-icon"><Award size={24} /></div>
                            <h3 className="Asc-best-ship">Azamara Onward</h3>
                            <span className="Asc-best-category">Best Overall</span>

                            <p className="Asc-best-desc">Ideal for travelers wanting the freshest onboard experience.</p>
                        </div>
                        <div className="Asc-best-card">
                            <div className="Asc-best-icon"><MapPin size={24} /></div>
                            <h3 className="Asc-best-ship">Azamara Pursuit</h3>
                            <span className="Asc-best-category">Best for Destination Immersion</span>

                            <p className="Asc-best-desc">Outstanding exotic itineraries and adventure-focused routes.</p>
                        </div>
                        <div className="Asc-best-card">
                            <div className="Asc-best-icon"><Users size={24} /></div>
                            <h3 className="Asc-best-ship">Azamara Journey</h3>
                            <span className="Asc-best-category">Best for First-Time Azamara Guests</span>

                            <p className="Asc-best-desc">Balanced, welcoming, and highly consistent.</p>
                        </div>
                        <div className="Asc-best-card">
                            <div className="Asc-best-icon"><Ship size={24} /></div>
                            <h3 className="Asc-best-ship">Azamara Quest</h3>
                            <span className="Asc-best-category">Best for Extended Voyages</span>

                            <p className="Asc-best-desc">Excellent world cruise and longer itinerary reputation.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* IS AZAMARA LUXURY */}
            <section className="Asc-section Asc-bg-white" id="Asc-luxury">
                <div className="Asc-container">
                    <div className="Asc-section-header">
                        <h2 className="Asc-h2">Is Azamara Truly Luxury?</h2>
                        <div className="Asc-accent-line"></div>
                    </div>
                    <div className="Asc-luxury-wrapper">
                        <div className="Asc-luxury-verdict">
                            <p className="Asc-luxury-quote">
                                "Upper premium boutique luxury."
                            </p>
                        </div>
                        <div className="Asc-luxury-split">
                            <div className="Asc-luxury-col Asc-luxury-card-delivers">
                                <h3 className="Asc-luxury-col-title">Azamara Delivers</h3>
                                <ul className="Asc-luxury-list">
                                    <li className="Asc-luxury-list-item">
                                        <div className="Asc-luxury-icon-box">
                                            <Check size={16} className="Asc-icon-green" />
                                        </div>
                                        <span className="Asc-luxury-item-text">Exceptional personalized service</span>
                                    </li>
                                    <li className="Asc-luxury-list-item">
                                        <div className="Asc-luxury-icon-box">
                                            <Check size={16} className="Asc-icon-green" />
                                        </div>
                                        <span className="Asc-luxury-item-text">Gourmet dining</span>
                                    </li>
                                    <li className="Asc-luxury-list-item">
                                        <div className="Asc-luxury-icon-box">
                                            <Check size={16} className="Asc-icon-green" />
                                        </div>
                                        <span className="Asc-luxury-item-text">Destination immersion</span>
                                    </li>
                                    <li className="Asc-luxury-list-item">
                                        <div className="Asc-luxury-icon-box">
                                            <Check size={16} className="Asc-icon-green" />
                                        </div>
                                        <span className="Asc-luxury-item-text">Small ship exclusivity</span>
                                    </li>
                                    <li className="Asc-luxury-list-item">
                                        <div className="Asc-luxury-icon-box">
                                            <Check size={16} className="Asc-icon-green" />
                                        </div>
                                        <span className="Asc-luxury-item-text">Longer port stays</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="Asc-luxury-col Asc-luxury-col-note Asc-luxury-card-note">
                                <h3 className="Asc-luxury-col-title">Compared To Ultra-Luxury</h3>
                                <p className="Asc-luxury-note-text">
                                    Travelers expecting ultra-luxury levels similar to Seabourn, Silversea Cruises,
                                    or Regent Seven Seas Cruises should understand Azamara offers a more relaxed,
                                    destination-centric style rather than ultra-formal luxury.
                                </p>
                                <p className="Asc-luxury-note-text" style={{ marginTop: "16px" }}>
                                    For many sophisticated travelers, that balance is precisely the appeal.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ── COMMON MISTAKES ───────────────────────────────────────── */}
            <section className="Lfsg-section Lfsg-bg-dark" id="Lfsg-mistakes">
                <div className="Lfsg-container">
                    <div className="Lfsg-section-header">
                        <h2 className="Lfsg-h2-white">
                            Common Mistakes Travelers Make When Choosing Azamara
                        </h2>
                        <div className="Lfsg-accent-line-white" />
                    </div>

                    <div className="Lfsg-mistakes-grid">
                        {[
                            {
                                title: "Choosing Based Only on the Ship",
                                desc: "With Azamara, itineraries often matter more than the ship itself.",
                            },
                            {
                                title: "Underestimating Port Intensity",
                                desc: "Azamara’s immersive itineraries can be active and culturally intensive.",
                            },
                            {
                                title: "Waiting Too Long for Suites",
                                desc: "Azamara suites sell out quickly on top itineraries.",
                            },
                            {
                                title: "Ignoring Destination Seasonality",
                                desc: "Mediterranean, Africa, and Asia sailings vary dramatically by season.",
                            },
                        ].map((item, i) => (
                            <div key={i} className="Lfsg-mistake-card">
                                <div className="Lfsg-mistake-number">
                                    {String(i + 1).padStart(2, "0")}
                                </div>
                                <h4 className="Lfsg-mistake-title">{item.title}</h4>
                                <p className="Lfsg-mistake-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHO SHOULD CHOOSE */}
            <section className="Asc-section Asc-bg-white" id="Asc-who">
                <div className="Asc-container">
                    <div className="Asc-section-header">
                        <h2 className="Asc-h2">Who Should Choose Azamara?</h2>
                        <div className="Asc-accent-line"></div>
                    </div>
                    <div className="Asc-who-grid">
                        <div className="Asc-who-card Asc-who-yes">
                            <h3 className="Asc-who-title">Best For</h3>
                            <ul className="Asc-who-list">
                                {[
                                    "Experienced travelers",
                                    "Destination-focused cruisers",
                                    "Couples",
                                    "Empty nesters",
                                    "Luxury travelers seeking intimacy",
                                    "Travelers avoiding mega ships",
                                ].map((item, i) => (
                                    <li key={i}><Check size={16} className="Asc-icon-green" />{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="Asc-who-card Asc-who-no">
                            <h3 className="Asc-who-title">Not Ideal For</h3>
                            <ul className="Asc-who-list">
                                {[
                                    "Families seeking large kids programs",
                                    "Travelers wanting constant nightlife",
                                    "Guests preferring mega-ship entertainment",
                                ].map((item, i) => (
                                    <li key={i}><Minus size={16} className="Asc-icon-muted" />{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* VIDEO SECTION */}
<section className="Asc-video-section" id="Asc-video">
    <div className="Asc-container">
        <div className="Asc-section-header">
            <h2 className="Asc-h2">Azamara Ashore Programs</h2>
            <div className="Asc-accent-line"></div>

            <p className="Asc-video-intro">
                Explore how Azamara Ashore land programs help travelers extend their journey with immersive pre- and post-cruise experiences in destinations around the world.
            </p>
        </div>

        <div className="Asc-video-wrapper">
            <div className="Asc-video-frame">
                <iframe
                    src="https://www.youtube.com/embed/2tt6_dNWXUk"
                    title="Azamara Ashore Programs"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    </div>
</section>


            {/* WHY TRIPS & SHIPS */}
            <section className="Asc-section Asc-bg-soft" id="Asc-why">
                <div className="Asc-container">
                    <div className="Asc-section-header">
                        <h2 className="Asc-h2">Why Travelers Work with Trips & Ships Luxury Travel</h2>
                        <div className="Asc-accent-line"></div>
                        <p className="Asc-body-text" style={{ marginTop: "20px" }}>
                            Luxury cruise planning has become increasingly complex. Working with
                            experienced luxury advisors helps travelers achieve better outcomes.
                        </p>
                    </div>

                    <div className="Asc-why-panel-grid">

                        <div className="Asc-why-panel">
                            <div className="Asc-why-panel-top">
                                <div className="Asc-why-panel-icon">
                                    <Check size={20} />
                                </div>
                                <h3 className="Asc-why-panel-title">
                                    Working with experienced luxury advisors helps travelers:
                                </h3>
                            </div>
                            <ul className="Asc-why-panel-list">
                                {[
                                    "Avoid costly mistakes",
                                    "Access exclusive amenities",
                                    "Choose the right suite category",
                                    "Match the best itinerary to travel goals",
                                    "Navigate luxury cruise promotions strategically",
                                ].map((item, i) => (
                                    <li key={i}>
                                        <span className="Asc-why-panel-num">{i + 1}</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="Asc-why-panel">
                            <div className="Asc-why-panel-top">
                                <div className="Asc-why-panel-icon">
                                    <Award size={20} />
                                </div>
                                <h3 className="Asc-why-panel-title">
                                    Angela Hughes is recognized globally for luxury travel expertise through:
                                </h3>
                            </div>
                            <ul className="Asc-why-panel-list">
                                {[
                                    "Travel industry speaking engagements",
                                    "Weekly travel columns",
                                    "Advisory board leadership",
                                    "International media recognition",
                                    "Luxury Travel University training programs",
                                ].map((item, i) => (
                                    <li key={i}>
                                        <span className="Asc-why-panel-num">{i + 1}</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="Asc-why-panel">
                            <div className="Asc-why-panel-top">
                                <div className="Asc-why-panel-icon">
                                    <Ship size={20} />
                                </div>
                                <h3 className="Asc-why-panel-title">
                                    Her team at Trips & Ships Luxury Travel specializes in:
                                </h3>
                            </div>
                            <ul className="Asc-why-panel-list">
                                {[
                                    "Luxury cruises",
                                    "River cruising",
                                    "Expedition voyages",
                                    "Safaris",
                                    "Premium global travel",
                                ].map((item, i) => (
                                    <li key={i}>
                                        <span className="Asc-why-panel-num">{i + 1}</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* ANGELA HUGHES AUTHORITY SECTION */}
            <section className="Asc-section Asc-authority-section Asc-bg-white" id="Asc-authority">
                <div className="Asc-container">
                    <div className="Asc-authority-split">
                        {/* LEFT COLUMN: CONTENT */}
                        <div className="Asc-authority-content">
                            <div className="Asc-authority-badge">Angela Hughes Authority Box</div>
                            <h2 className="Asc-authority-title">Meet Angela Hughes</h2>
                            <div className="Asc-authority-line"></div>

                            <ul className="Asc-authority-list">
                                {[
                                    "CEO of Trips & Ships Luxury Travel",
                                    "Founder of Luxury Travel University",
                                    "40+ years luxury travel expertise",
                                    "Traveled to 121+ countries",
                                    "Global luxury travel speaker",
                                    "Weekly travel columnist",
                                    "Travel Leaders Network Advisory Board member",
                                    "2024 Luxury Travel Influencer of the Year",
                                    "Named among the Most Influential Women in Travel in 2026",
                                    "Featured in global travel publications",
                                    "Luxury cruise and expedition specialist"
                                ].map((item, i) => (
                                    <li key={i} className="Asc-authority-item">
                                        <span className="Asc-authority-icon-wrap">
                                            <Check size={16} />
                                        </span>
                                        <span className="Asc-authority-text">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* RIGHT COLUMN: IMAGE */}
                        <div className="Asc-authority-image-wrapper">
                            <div
                                className="Asc-authority-image"
                                style={{ backgroundImage: `url(${AboutImage})` }}
                                role="img"
                                aria-label="Angela Hughes - Trips & Ships Luxury Travel"
                            />
                        </div>
                    </div>
                </div>
            </section>


            {/* FAQ */}
            <section className="Asc-section Asc-bg-soft" id="Asc-faq">
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
                    <img src={CTAImage} alt="Luxury Cruise background" className="Asc-help-bg-img" />
                    <div className="Asc-help-overlay"></div>
                </div>

                <div className="Asc-container">
                    <div className="Asc-help-card">
                        <div className="Asc-help-content">
                            <div className="Asc-help-header">
                                <span className="Asc-help-eyebrow">Personalized Planning</span>
                                <h2 className="Asc-help-h2">Ready to Choose the Right Azamara Ship?</h2>
                                <div className="Asc-help-accent"></div>
                            </div>

                            <div className="Asc-help-grid">
                                <div className="Asc-help-info">
                                    <p className="Asc-help-intro">
                                        Luxury cruising is no longer simply about the ship — it is about the experience,
                                        destination access, personalization, and seamless planning. With over four decades
                                        of expertise, Angela Hughes and the team at Trips & Ships Luxury Travel help
                                        travelers confidently select the ideal Azamara experience.
                                    </p>
                                    <div className="Asc-help-btn-container">
                                        <button className="Asc-help-cta-btn">
                                            Schedule a Luxury Cruise Consultation
                                            <ArrowRight size={18} />
                                        </button>
                                    </div>
                                </div>

                                <div className="Asc-help-list-box">
                                    <h3 className="Asc-help-list-title">We specialize in:</h3>
                                    <ul className="Asc-help-bullets">
                                        {[
                                            "Mediterranean luxury cruising",
                                            "Exotic immersive itineraries",
                                            "Extended world voyages",
                                            "Boutique luxury experiences",
                                            "River cruising & expedition voyages",
                                            "African safaris & premium global travel",
                                        ].map((item, i) => (
                                            <li key={i}>
                                                <div className="Asc-bullet-icon"><Check size={14} strokeWidth={3} /></div>
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

export default AzamaraShipComparison;