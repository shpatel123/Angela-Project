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
    ChefHat,
    Utensils,
    Sparkles,
    Music
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/image.webp";
import HeroImage1 from "../../assets/Azamarashipcomparison/hero1.webp";
import HeroImage2 from "../../assets/Azamarashipcomparison/azamara.webp";
import HeroImage3 from "../../assets/AzamaravsVikingOcean/hero3.webp";
import CTAImage from "../../assets/AzamaravsVikingOcean/cta.webp";
import HeroImage4 from "../../assets/Azamarashipcomparison/Small_Ship.webp";
import AzamaraOverviewImage from "../../assets/AzamaravsVikingOcean/azamara.webp";
import RegentOverviewImage from "../../assets/Azamarashipcomparison/Regent-Seven-Seas.webp";

import AzamaraAtmosphereImage from "../../assets/Azamarashipcomparison/Azamara-Quest.webp";
import SeabournAtmosphereImage from "../../assets/Azamarashipcomparison/Regentsea.jpg";
import SeabournSuiteImage from "../../assets/Azamarashipcomparison/seabourn-suite.webp";
import AzamaraCabinImage from "../../assets/Azamarashipcomparison/azamara-cabin.webp";
import "./AzamaraVsSeabourn.css";
import "../AzamaraShipComparison/Azamarashipcomparison.css";
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
            q: "Which is more luxurious, Azamara or Seabourn?",
            a: "Seabourn is generally considered more luxurious due to its all-suite ships, higher staff-to-guest ratio, and ultra-premium inclusions.",
        },
        {
            q: "Is Azamara considered a luxury cruise line?",
            a: "Yes. Azamara is considered a boutique luxury cruise line focused heavily on destination immersion and longer stays.",
        },
        {
            q: "Is Seabourn worth the higher price?",
            a: "For travelers prioritizing elevated service, spacious suites, gourmet dining, and ultra-luxury ambiance, many find Seabourn well worth the premium.",
        },
        {
            q: "Which cruise line is better for couples?",
            a: "Seabourn is often preferred for romantic luxury experiences, while Azamara appeals to couples who prioritize exploration and social interaction.",
        },
        {
            q: "Which cruise line has better food?",
            a: "Seabourn is widely regarded as having superior culinary experiences and more refined dining overall.",
        },
        {
            q: "Does Azamara include alcohol?",
            a: "Azamara includes select standard beverages, but Seabourn offers more premium inclusive beverage programs.",
        },
        {
            q: "Which cruise line has larger cabins?",
            a: "Seabourn offers significantly larger suite accommodations.",
        },
        {
            q: "Is Azamara more social than Seabourn?",
            a: "Yes. Azamara tends to have a more social and interactive onboard culture.",
        },
        {
            q: "Which luxury cruise line is best for destination immersion?",
            a: "Azamara is particularly known for destination immersion, overnight stays, and longer port visits.",
        },
        {
            q: "Does Seabourn include gratuities?",
            a: "Yes. Gratuities are included with Seabourn cruises.",
        },
        {
            q: "Which cruise line is better for first-time luxury cruisers?",
            a: "Azamara is often easier for first-time luxury cruisers due to its approachable atmosphere and pricing.",
        },
        {
            q: "Which cruise line is quieter onboard?",
            a: "Seabourn generally offers a quieter, more refined ambiance.",
        },
        {
            q: "Is Seabourn formal?",
            a: "Seabourn maintains elegant standards but is less rigidly formal than traditional luxury cruising.",
        },
        {
            q: "Which cruise line is better for solo luxury travelers?",
            a: "Azamara often appeals more to solo travelers due to its social atmosphere and destination focus.",
        },
        {
            q: "Should I use a luxury cruise advisor?",
            a: "Yes. Luxury cruise advisors can secure better value, perks, suite selection guidance, and personalized recommendations.",
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
const AzamaraVsSeabourn = () => {
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
                <title>Azamara vs Seabourn: Which Luxury Cruise Line Is Right for You in 2026?</title>
                <meta
                    name="title"
                    content="Azamara vs Seabourn Comparison | Luxury Cruise Expert Guide by Angela Hughes"
                />
                <meta
                    name="description"
                    content="Compare Azamara vs Seabourn with expert insights from luxury travel authority Angela Hughes. Discover which luxury cruise line best fits your travel style, budget, destinations, inclusions, dining, and onboard experience."
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
                    <h1>Azamara vs Seabourn: Which Luxury Cruise Line Fits Your Travel Style?</h1>

                    <p>Luxury cruising has evolved dramatically over the last decade. Today’s affluent travelers are no longer simply looking for beautiful ships — they want immersive experiences, elevated service, meaningful destinations, and exceptional value.</p>

                    {/* READ MORE CONTENT */}
                    {readMore && (
                        <>
                            <p>Two cruise lines that frequently appear on luxury travelers’ shortlists are Azamara and Seabourn.</p>

                            <p>But while both offer intimate ships and upscale experiences, they deliver very different styles of luxury.</p>

                            <p>According to luxury travel expert Angela Hughes, the right choice depends less on “which cruise line is better” and more on:</p>

                            <p style={{ fontStyle: "italic", fontWeight: "600", margin: "10px 0" }}>
                                “Which cruise line matches how you personally define luxury travel.”
                            </p>

                            <p>As CEO of Trips & Ships Luxury Travel, founder of Luxury Travel University, and a global luxury travel authority with more than 40 years in the industry and travel experience across 121+ countries, Angela Hughes has helped luxury travelers navigate premium cruise decisions for decades.</p>

                            <p>This guide breaks down the real differences between Azamara and Seabourn — beyond the marketing brochures.</p>
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

                </div>
            </section>

            {/* QUICK VERDICT SECTION */}
            <section className="Avs-verdict-section">
                <div className="Avs-verdict-container">
                    <div className="Avs-verdict-header">
                        <h2 className="Avs-verdict-title">Quick Verdict: Azamara vs Seabourn</h2>
                        <p className="Avs-verdict-subtitle">A side-by-side comparison of who wins in each key travel category</p>
                        <div className="Avs-verdict-accent"></div>
                    </div>

                    <div className="Avs-verdict-table-wrap">
                        <div className="Avs-verdict-grid">
                            <div className="Avs-verdict-row Avs-verdict-row-header">
                                <div className="Avs-verdict-col-name">Category</div>
                                <div className="Avs-verdict-col-winner">Winner</div>
                            </div>

                            {[
                                { category: "Ultra-Luxury Experience", winner: "Seabourn" },
                                { category: "Destination Immersion", winner: "Azamara" },
                                { category: "Included Amenities", winner: "Seabourn" },
                                { category: "Value for Luxury Travelers", winner: "Azamara" },
                                { category: "Dining Excellence", winner: "Seabourn" },
                                { category: "Social Atmosphere", winner: "Azamara" },
                                { category: "Spacious Suites", winner: "Seabourn" },
                                { category: "Solo Luxury Travelers", winner: "Azamara" },
                                { category: "Affluent Couples Seeking Elegance", winner: "Seabourn" },
                                { category: "Longer Port Stays", winner: "Azamara" }
                            ].map((item, index) => (
                                <div key={index} className="Avs-verdict-row">
                                    <div className="Avs-verdict-col-name">{item.category}</div>
                                    <div className="Avs-verdict-col-winner">
                                        <span className={`Avs-verdict-badge ${item.winner === "Azamara" ? "Avs-verdict-badge-azamara" : "Avs-verdict-badge-seabourn"}`}>
                                            {item.winner}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* AZAMARA OVERVIEW */}
            <section className="azs-overview-section" id="azs-azamara-overview">
                <div className="azs-container">
                    <div className="azs-overview-grid">

                        {/* Left Side: Image */}
                        <div className="azs-image-col">
                            <img src={AzamaraOverviewImage} alt="Azamara luxury cruise ship overview" className="azs-overview-img" />
                            <div className="azs-image-overlay">
                                <span className="azs-image-badge">Boutique Luxury</span>
                                <h3 className="azs-image-title">Destination Immersion</h3>
                            </div>
                        </div>

                        {/* Right Side: Content */}
                        <div className="azs-content-col">
                            <h2 className="azs-title">Azamara: Destination-Focused Boutique Cruising</h2>
                            <p className="azs-intro">Azamara specializes in immersive destination experiences.</p>

                            <div className="azs-sub-grid">
                                {/* Group 1: Known For */}
                                <div className="azs-info-card">
                                    <h4 className="azs-group-title">The cruise line is known for:</h4>
                                    <ul className="azs-list">
                                        {[
                                            "Longer port stays",
                                            "Overnight experiences",
                                            "Smaller boutique ships",
                                            "Relaxed luxury",
                                            "Cultural enrichment",
                                            "More approachable pricing"
                                        ].map((item, i) => (
                                            <li key={i} className="azs-list-item">
                                                <Check size={16} className="azs-list-icon" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Group 2: Traveler Priorities */}
                                <div className="azs-info-card">
                                    <h4 className="azs-group-title">Azamara travelers often prioritize:</h4>
                                    <ul className="azs-list">
                                        {[
                                            "Exploring destinations deeply",
                                            "Spending more time ashore",
                                            "Social onboard environments",
                                            "Casual upscale experiences"
                                        ].map((item, i) => (
                                            <li key={i} className="azs-list-item">
                                                <ArrowRight size={16} className="azs-list-icon" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Group 3: Angela Hughes Recommendations */}
                                <div className="azs-info-card azs-recommend-card">
                                    <h4 className="azs-group-title">Angela Hughes frequently recommends Azamara for:</h4>
                                    <ul className="azs-list">
                                        {[
                                            "Experienced travelers",
                                            "Active retirees",
                                            "Destination-focused couples",
                                            "Luxury travelers who dislike overly formal environments"
                                        ].map((item, i) => (
                                            <li key={i} className="azs-list-item">
                                                <Star size={16} className="azs-list-icon azs-star-icon" />
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

            {/* Seabourn*/}
            <section className="azs-overview-section" id="azs-seabourn-overview">
                <div className="azs-container">
                    <div className="azs-overview-grid">
                        {/* Right Side: Content */}
                        <div className="azs-content-col">
                            <h2 className="azs-title">Seabourn: Ultra-Luxury Yacht-Style Cruising</h2>
                            <p className="azs-intro">
                                Seabourn delivers a far more elevated ultra-luxury atmosphere.
                            </p>

                            <div className="azs-sub-grid">

                                {/* Group 1: Known For */}
                                <div className="azs-info-card">
                                    <h4 className="azs-group-title">Seabourn is known for:</h4>
                                    <ul className="azs-list">
                                        {[
                                            "Highly personalized service",
                                            "Spacious all-suite accommodations",
                                            "Gourmet dining",
                                            "Premium inclusions",
                                            "Sophisticated elegance",
                                            "Exceptional staff-to-guest ratios"
                                        ].map((item, i) => (
                                            <li key={i} className="azs-list-item">
                                                <Check size={16} className="azs-list-icon" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Group 2: Traveler Priorities */}
                                <div className="azs-info-card">
                                    <h4 className="azs-group-title">
                                        Travelers who choose Seabourn typically value:
                                    </h4>
                                    <ul className="azs-list">
                                        {[
                                            "Refined luxury",
                                            "Quiet sophistication",
                                            "Elevated culinary experiences",
                                            "Exceptional suite comfort",
                                            "Personalized service"
                                        ].map((item, i) => (
                                            <li key={i} className="azs-list-item">
                                                <ArrowRight size={16} className="azs-list-icon" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Group 3: Angela Hughes Quote */}
                                <div className="azs-info-card azs-recommend-card">
                                    <h4 className="azs-group-title">
                                        Angela Hughes often describes Seabourn as:
                                    </h4>

                                    <div className="azs-quote-box">
                                        <Star size={18} className="azs-list-icon azs-star-icon" />
                                        <p className="azs-quote-text">
                                            “One of the closest experiences to a private luxury yacht available in mainstream ultra-luxury cruising.”
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>


                        {/* Left Side: Image */}
                        <div className="azs-image-col">
                            <img src={AzamaraOverviewImage} alt="Seabourn ultra luxury cruise ship overview" className="azs-overview-img" />
                            <div className="azs-image-overlay">
                                <span className="azs-image-badge">Ultra-Luxury Cruising</span>
                                <h3 className="azs-image-title">Yacht-Style Elegance</h3>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* EXPERIENCE COMPARISON */}
            <section className="azs-experience-section" id="azs-experience">
                <div className="azs-container">
                    <div className="azs-section-header">
                        <h2 className="azs-section-title">Ship Experience Comparison</h2>
                        <div className="azs-section-accent"></div>
                    </div>

                    <div className="azs-experience-grid">
                        {/* Azamara Card */}
                        <div className="azs-experience-card azs-azamara-exp">
                            <div className="azs-exp-image-wrap">
                                <img src={AzamaraAtmosphereImage} alt="Azamara boutique ship atmosphere" className="azs-exp-img" />
                                <div className="azs-exp-image-badge">Boutique & Social</div>
                            </div>

                            <div className="azs-exp-content">
                                <div className="azs-exp-header">
                                    <Ship size={24} className="azs-exp-icon" />
                                    <h3 className="azs-exp-title">Azamara Atmosphere</h3>
                                </div>

                                <div className="azs-exp-body">
                                    <div className="azs-exp-group">
                                        <h4 className="azs-exp-group-title">Azamara ships feel:</h4>
                                        <ul className="azs-exp-list">
                                            {[
                                                "Boutique",
                                                "Social",
                                                "Casual elegant",
                                                "Destination-oriented",
                                                "Relaxed"
                                            ].map((item, idx) => (
                                                <li key={idx} className="azs-exp-list-item">
                                                    <Check size={16} className="azs-exp-list-icon" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="azs-exp-divider"></div>

                                    <p className="azs-exp-highlight">
                                        Guests tend to mingle more easily onboard.
                                    </p>

                                    <div className="azs-exp-divider"></div>

                                    <div className="azs-exp-group">
                                        <h4 className="azs-exp-group-title">The atmosphere is ideal for:</h4>
                                        <ul className="azs-exp-list">
                                            {[
                                                "Travelers who enjoy conversation",
                                                "Guests who prioritize shore experiences",
                                                "Travelers who prefer understated luxury"
                                            ].map((item, idx) => (
                                                <li key={idx} className="azs-exp-list-item">
                                                    <ArrowRight size={16} className="azs-exp-list-icon" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Seabourn Card */}
                        <div className="azs-experience-card azs-seabourn-exp">
                            <div className="azs-exp-image-wrap">
                                <img src={SeabournAtmosphereImage} alt="Seabourn ultra luxury yacht-like atmosphere" className="azs-exp-img" />
                                <div className="azs-exp-image-badge">Refined & Quiet</div>
                            </div>

                            <div className="azs-exp-content">
                                <div className="azs-exp-header">
                                    <Ship size={24} className="azs-exp-icon" />
                                    <h3 className="azs-exp-title">Seabourn Atmosphere</h3>
                                </div>

                                <div className="azs-exp-body">
                                    <div className="azs-exp-group">
                                        <h4 className="azs-exp-group-title">Seabourn offers:</h4>
                                        <ul className="azs-exp-list">
                                            {[
                                                "Quiet sophistication",
                                                "Refined luxury",
                                                "Elevated privacy",
                                                "White-glove service",
                                                "Yacht-inspired elegance"
                                            ].map((item, idx) => (
                                                <li key={idx} className="azs-exp-list-item">
                                                    <Check size={16} className="azs-exp-list-icon" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="azs-exp-divider"></div>

                                    <p className="azs-exp-highlight">
                                        The experience feels more exclusive and premium.
                                    </p>

                                    <div className="azs-exp-divider"></div>

                                    <div className="azs-exp-group">
                                        <h4 className="azs-exp-group-title">The atmosphere is ideal for:</h4>
                                        <ul className="azs-exp-list">
                                            {[
                                                "Travelers who prioritize quiet luxury",
                                                "Discerning couples seeking elegance",
                                                "Guests expecting highly personalized service"
                                            ].map((item, idx) => (
                                                <li key={idx} className="azs-exp-list-item">
                                                    <ArrowRight size={16} className="azs-exp-list-icon" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DINING COMPARISON */}
            <section className="azs-dining-section" id="azs-dining">
                <div className="azs-container">
                    <div className="azs-section-header">
                        <h2 className="azs-section-title">Dining Comparison</h2>
                        <p className="azs-section-subtitle">Gastronomy at Sea: Ultra-Luxury Fine Dining vs. Destination-Inspired Casual Elegance</p>
                        <div className="azs-section-accent"></div>
                    </div>

                    <div className="azs-dining-grid">
                        {/* Seabourn Card */}
                        <div className="azs-dining-card azs-seabourn-dining">

                            <div className="azs-dining-header">
                                <div className="azs-dining-icon-circle">
                                    <ChefHat size={24} className="azs-dining-icon" />
                                </div>
                                <h3 className="azs-dining-title">Seabourn Culinary Excellence</h3>
                            </div>
                            <p className="azs-dining-intro">
                                Dining aboard Seabourn is widely considered among the best in luxury cruising.
                            </p>
                            <div className="azs-dining-body">
                                <h4 className="azs-dining-group-title">Highlights include:</h4>
                                <ul className="azs-dining-list">
                                    {[
                                        "Fine dining caliber cuisine",
                                        "Caviar service",
                                        "Michelin-level partnerships",
                                        "Elegant presentation",
                                        "Premium wine selections"
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
                                <div className="azs-dining-highlight-box azs-seabourn-highlight">
                                    <p className="azs-dining-highlight-text">
                                        Luxury travelers focused on gastronomy usually prefer Seabourn.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Azamara Card */}
                        <div className="azs-dining-card azs-azamara-dining">

                            <div className="azs-dining-header">
                                <div className="azs-dining-icon-circle">
                                    <Utensils size={24} className="azs-dining-icon" />
                                </div>
                                <h3 className="azs-dining-title">Azamara Dining Strengths</h3>
                            </div>
                            <p className="azs-dining-intro">
                                While excellent, it is generally considered a step below Seabourn in ultra-luxury culinary execution.
                            </p>
                            <div className="azs-dining-body">
                                <h4 className="azs-dining-group-title">Azamara offers:</h4>
                                <ul className="azs-dining-list">
                                    {[
                                        "Strong international cuisine",
                                        "Destination-inspired menus",
                                        "Relaxed dining environments",
                                        "Excellent specialty restaurants"
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
                                        Approachable, high-quality dining without formal pressure.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ENTERTAINMENT & ENRICHMENT */}
            <section className="azs-entertainment-section" id="azs-entertainment">
                <div className="azs-container">
                    <div className="azs-section-header">
                        <h2 className="azs-section-title">Entertainment & Enrichment</h2>
                        <p className="azs-section-subtitle">Onboard Vibrancy: From Immersive Cultural Evenings to Sophisticated Performances</p>
                        <div className="azs-section-accent"></div>
                    </div>

                    <div className="azs-entertainment-grid">
                        {/* Azamara Card */}
                        <div className="azs-entertainment-card azs-azamara-ent">
                            <div className="azs-ent-header">
                                <div className="azs-ent-icon-circle">
                                    <Sparkles size={24} className="azs-ent-icon" />
                                </div>
                                <h3 className="azs-ent-title">Azamara Enrichment</h3>
                            </div>
                            <p className="azs-ent-intro">
                                Azamara excels in destination-centric enrichment and immersive local celebrations.
                            </p>
                            <div className="azs-ent-body">
                                <h4 className="azs-ent-group-title">Best for:</h4>
                                <ul className="azs-ent-list">
                                    {[
                                        "Cultural immersion",
                                        "Local performances",
                                        "Destination enrichment",
                                        "Authentic experiences"
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
                                        AzAmazing Evenings are particularly popular.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Seabourn Card */}
                        <div className="azs-entertainment-card azs-seabourn-ent">
                            <div className="azs-ent-header">
                                <div className="azs-ent-icon-circle">
                                    <Music size={24} className="azs-ent-icon" />
                                </div>
                                <h3 className="azs-ent-title">Seabourn Entertainment</h3>
                            </div>
                            <p className="azs-ent-intro">
                                Seabourn focuses on elegant, intimate evenings and sophisticated social atmosphere.
                            </p>
                            <div className="azs-ent-body">
                                <h4 className="azs-ent-group-title">Best for:</h4>
                                <ul className="azs-ent-list">
                                    {[
                                        "Elegant evening entertainment",
                                        "Sophisticated enrichment",
                                        "Intimate performances",
                                        "Luxury social experiences"
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
                                        Refined evening lounges with world-class performers.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SUITES & ACCOMMODATIONS */}
            <section className="azs-suites-section" id="azs-suites">
                <div className="azs-container">
                    <div className="azs-section-header">
                        <h2 className="azs-section-title">Suites & Accommodations</h2>
                        <p className="azs-section-subtitle">Floating Sanctuaries: Spacious All-Suite Retreats vs. Upscale Boutique Cabins</p>
                        <div className="azs-section-accent"></div>
                    </div>

                    <div className="azs-suites-grid">
                        {/* Seabourn Card */}
                        <div className="azs-suites-card azs-seabourn-suites">
                            <div className="azs-suites-image-wrap">
                                <img src={SeabournSuiteImage} alt="Seabourn ultra-luxury suite" className="azs-suites-img" />
                                <span className="azs-suites-image-badge">All-Suite Cruise Line</span>
                            </div>

                            <div className="azs-suites-content">
                                <div className="azs-suites-card-header">
                                    <div className="azs-suites-icon-circle">
                                        <Award size={24} className="azs-suites-icon" />
                                    </div>
                                    <h3 className="azs-suites-title">Seabourn Suites</h3>
                                </div>
                                <p className="azs-suites-intro">
                                    Seabourn is an all-suite cruise line, providing one of the most spacious and luxurious settings at sea.
                                </p>
                                <div className="azs-suites-body">
                                    <h4 className="azs-suites-group-title">Expect:</h4>
                                    <ul className="azs-suites-list">
                                        {[
                                            "Spacious accommodations",
                                            "Marble bathrooms",
                                            "Walk-in closets",
                                            "Premium bedding",
                                            "Butler-style service"
                                        ].map((item, idx) => (
                                            <li key={idx} className="azs-suites-list-item">
                                                <div className="azs-suites-list-icon-wrapper">
                                                    <Star size={14} className="azs-suites-list-icon" />
                                                </div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="azs-suites-divider"></div>
                                    <div className="azs-suites-highlight-box azs-seabourn-suites-highlight">
                                        <p className="azs-suites-highlight-text">
                                            This is a major differentiator.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Azamara Card */}
                        <div className="azs-suites-card azs-azamara-suites">
                            <div className="azs-suites-image-wrap">
                                <img src={AzamaraCabinImage} alt="Azamara boutique cabin" className="azs-suites-img" />
                                <span className="azs-suites-image-badge">Boutique & Cozy</span>
                            </div>

                            <div className="azs-suites-content">
                                <div className="azs-suites-card-header">
                                    <div className="azs-suites-icon-circle">
                                        <Ship size={24} className="azs-suites-icon" />
                                    </div>
                                    <h3 className="azs-suites-title">Azamara Cabins</h3>
                                </div>
                                <p className="azs-suites-intro">
                                    Azamara cabins are smaller overall but still comfortable, highly functional, and upscale.
                                </p>
                                <div className="azs-suites-body">
                                    <h4 className="azs-suites-group-title">The tradeoff:</h4>
                                    <ul className="azs-suites-list">
                                        {[
                                            "Lower pricing",
                                            "More destination value",
                                            "Less suite-focused luxury"
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
                                            Ideal for active, destination-focused cruisers.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* FLEET OVERVIEW TABLE */}
            <section className="Asc-section Asc-bg-soft" id="Asc-fleet">
                <div className="Asc-container">
                    <div className="Asc-section-header">
                        <h2 className="Asc-h2">Azamara vs Seabourn Comparison
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
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td><strong>Specialty Dining</strong></td>
                                    <td>Partial</td>
                                    <td>Included</td>
                                </tr>

                                <tr>
                                    <td><strong>Premium Alcohol</strong></td>
                                    <td>Limited</td>
                                    <td>Included</td>
                                </tr>

                                <tr>
                                    <td><strong>Gratuities</strong></td>
                                    <td>Included</td>
                                    <td>Included</td>
                                </tr>

                                <tr>
                                    <td><strong>Butler Service</strong></td>
                                    <td>Select Suites</td>
                                    <td>Included</td>
                                </tr>

                                <tr>
                                    <td><strong>Shore Excursions</strong></td>
                                    <td>Extra</td>
                                    <td>Mostly Extra</td>
                                </tr>

                                <tr>
                                    <td><strong>Wi-Fi</strong></td>
                                    <td>Included</td>
                                    <td>Included</td>
                                </tr>

                                <tr>
                                    <td><strong>Fine Wines</strong></td>
                                    <td>Limited</td>
                                    <td>Included</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>


            {/* LUXURY COMPARISON VERDICT */}
            <section className="azs-verdict-section" id="azs-comparison-verdict">
                <div className="azs-container">
                    <div className="azs-section-header">
                        <h2 className="azs-section-title">Which Cruise Line Is More Luxurious?</h2>
                        <div className="azs-section-accent"></div>
                    </div>

                    {/* Verdict Highlights */}
                    <div className="azs-verdict-highlights">
                        <div className="azs-verdict-highlight-card azs-seabourn-win">
                            <div className="azs-verdict-badge-icon">
                                <Award size={24} />
                            </div>
                            <div className="azs-verdict-highlight-content">
                                <h3 className="azs-verdict-winner-title">Pure Luxury Winner</h3>
                                <p className="azs-verdict-winner-name">Seabourn Wins</p>
                                <p className="azs-verdict-winner-desc">
                                    Offers an all-suite yacht experience, highly personalized service, and elite inclusions.
                                </p>
                            </div>
                        </div>

                        <div className="azs-verdict-highlight-card azs-azamara-win">
                            <div className="azs-verdict-badge-icon">
                                <Ship size={24} />
                            </div>
                            <div className="azs-verdict-highlight-content">
                                <h3 className="azs-verdict-winner-title">Upscale Travel Value Winner</h3>
                                <p className="azs-verdict-winner-name">Azamara Wins</p>
                                <p className="azs-verdict-winner-desc">
                                    Delivers extensive destination immersion, longer port stays, and exceptional value.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Priority Quote Box */}
                    <div className="azs-verdict-quote-box">
                        <p className="azs-verdict-quote-text">
                            “The better choice depends entirely on your luxury travel priorities.”
                        </p>
                    </div>

                    {/* Suitability Side-by-Side Cards */}
                    <div className="azs-suitability-grid">

                        {/* Azamara Card */}
                        <div className="azs-suitability-card azs-suitability-azamara">
                            <div className="azs-suitability-card-header">
                                <h3 className="azs-suitability-card-title">Azamara Suitability</h3>
                            </div>
                            <div className="azs-suitability-card-body">
                                <div className="azs-suitability-group">
                                    <h4 className="azs-suitability-group-title positive">Azamara Is Best For</h4>
                                    <ul className="azs-suitability-list">
                                        {[
                                            "Destination-focused travelers",
                                            "Travelers seeking value in luxury cruising",
                                            "Active travelers",
                                            "Social cruisers",
                                            "Travelers wanting longer port stays"
                                        ].map((item, idx) => (
                                            <li key={idx} className="azs-suitability-list-item">
                                                <div className="azs-suitability-icon-wrapper check">
                                                    <Check size={14} />
                                                </div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="azs-suitability-divider"></div>

                                <div className="azs-suitability-group">
                                    <h4 className="azs-suitability-group-title negative">Azamara May Not Be Ideal For</h4>
                                    <ul className="azs-suitability-list">
                                        {[
                                            "Travelers wanting ultra-luxury pampering",
                                            "Guests prioritizing suite luxury",
                                            "Travelers expecting highly formal luxury service"
                                        ].map((item, idx) => (
                                            <li key={idx} className="azs-suitability-list-item">
                                                <div className="azs-suitability-icon-wrapper minus">
                                                    <Minus size={14} />
                                                </div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Seabourn Card */}
                        <div className="azs-suitability-card azs-suitability-seabourn">
                            <div className="azs-suitability-card-header">
                                <h3 className="azs-suitability-card-title">Seabourn Suitability</h3>
                            </div>
                            <div className="azs-suitability-card-body">
                                <div className="azs-suitability-group">
                                    <h4 className="azs-suitability-group-title positive">Seabourn Is Best For</h4>
                                    <ul className="azs-suitability-list">
                                        {[
                                            "Affluent luxury travelers",
                                            "Couples celebrating milestone trips",
                                            "Travelers prioritizing service",
                                            "Luxury food and wine enthusiasts",
                                            "Guests seeking quieter elegance"
                                        ].map((item, idx) => (
                                            <li key={idx} className="azs-suitability-list-item">
                                                <div className="azs-suitability-icon-wrapper check">
                                                    <Check size={14} />
                                                </div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="azs-suitability-divider"></div>

                                <div className="azs-suitability-group">
                                    <h4 className="azs-suitability-group-title negative">Seabourn May Not Be Ideal For</h4>
                                    <ul className="azs-suitability-list">
                                        {[
                                            "Budget-conscious luxury travelers",
                                            "Travelers wanting highly active nightlife",
                                            "Guests prioritizing long destination stays over onboard luxury"
                                        ].map((item, idx) => (
                                            <li key={idx} className="azs-suitability-list-item">
                                                <div className="azs-suitability-icon-wrapper minus">
                                                    <Minus size={14} />
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


            {/* EXPERT INSIGHT FROM ANGELA HUGHES */}
            <section className="Asc-expert-section1" id="Asc-expert-insight">
                <div className="Asc-container">
                    <div className="Asc-expert-wrapper">

                        {/* TOP HEADING */}
                        <div className="Asc-expert-heading">
                            <span className="Asc-expert-label">
                                Expert Insight from Angela Hughes
                            </span>

                            <h2 className="Asc-expert-title">
                                Why Expert Cruise Guidance Matters
                            </h2>

                            <div className="Asc-expert-divider"></div>
                        </div>

                        {/* MAIN GRID */}
                        <div className="Avr-expert-grid">

                            {/* LEFT SIDE: Portrait Image */}
                            <div className="Avr-expert-image-col">
                                <img
                                    src={AboutImage}
                                    alt="Angela Hughes"
                                    className="Avr-expert-portrait"
                                />
                            </div>

                            {/* RIGHT SIDE: Unified Content Box */}
                            <div className="Avr-expert-content-col">
                                <div className="Avr-expert-profile">
                                    <div className="Avr-expert-profile-info">
                                        <h3 className="Avr-expert-profile-name">
                                            Angela Hughes
                                        </h3>
                                        <p className="Avr-expert-profile-title">
                                            CEO of Trips & Ships Luxury Travel
                                        </p>
                                    </div>
                                </div>

                                <div className="Avr-expert-quote-box">
                                    <div className="Avr-expert-quote-icon">
                                        <Quote size={32} />
                                    </div>
                                    <blockquote className="Avr-expert-quote-text">
                                        “Luxury cruise planning has become increasingly complex. With so many choices in cabin categories, ship sizes, and itinerary details, finding the perfect match requires expert insights. My goal is to guide travelers to the experience that truly matches their style.”
                                    </blockquote>
                                </div>

                                <div className="Avr-expert-bio-intro-box" style={{ padding: "0 10px" }}>
                                    <p style={{ fontSize: "15px", lineHeight: "1.65", color: "var(--text-body)", margin: "0" }}>
                                        As a globally recognized luxury travel advisor, travel industry speaker, columnist, and 2024 Luxury Travel Influencer of the Year by Travel Leaders Network, Angela Hughes helps travelers identify which luxury experiences genuinely match their lifestyle and expectations. She was also named one of the Most Influential Women in Travel in 2026 by TravelPulse.
                                    </p>
                                </div>

                                <div className="Avr-expert-subgrid">
                                    <div className="Avr-expert-subgrid-col">
                                        <h4 className="Avr-expert-subgrid-title">
                                            Choosing between cruise lines involves:
                                        </h4>
                                        <ul className="Avr-expert-subgrid-list">
                                            {[
                                                "Cabin categories",
                                                "Ship differences",
                                                "Itinerary nuance",
                                                "Included amenities",
                                                "VIP perks",
                                                "Seasonal considerations"
                                            ].map((item, idx) => (
                                                <li key={idx} className="Avr-expert-subgrid-item">
                                                    <div className="Avr-expert-list-icon" style={{ width: "20px", height: "20px" }}>
                                                        <Check size={12} />
                                                    </div>
                                                    <span className="Avr-expert-list-label">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="Avr-expert-subgrid-col">
                                        <h4 className="Avr-expert-subgrid-title">
                                            Her expertise spans:
                                        </h4>
                                        <ul className="Avr-expert-subgrid-list">
                                            {[
                                                "Luxury ocean cruising",
                                                "Expedition travel",
                                                "River cruising",
                                                "Safaris",
                                                "Global premium travel planning"
                                            ].map((item, idx) => (
                                                <li key={idx} className="Avr-expert-subgrid-item">
                                                    <div className="Avr-expert-list-icon" style={{ width: "20px", height: "20px" }}>
                                                        <Star size={12} />
                                                    </div>
                                                    <span className="Avr-expert-list-label">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* WHY TRAVELERS TRUST TRIPS & SHIPS */}
            <section className="azs-trust-section" id="azs-trust">
                <div className="azs-container">
                    <div className="azs-trust-inner">

                        {/* Left: Header & Intro */}
                        <div className="azs-trust-left">
                            <span className="azs-trust-eyebrow">Trusted Experts</span>
                            <h2 className="azs-trust-heading">
                                Why Travelers Trust Trips &amp; Ships Luxury Travel
                            </h2>
                            <div className="azs-trust-divider"></div>
                            <p className="azs-trust-intro">
                                Trips &amp; Ships Luxury Travel provides personalized luxury cruise experiences backed by decades of global travel expertise combined with insider luxury cruise knowledge. Clients benefit from concierge-level attention at every stage of their journey.
                            </p>

                            <div className="azs-trust-services-grid">
                                {[
                                    { icon: <Star size={18} />, label: "Personalized luxury cruise matching" },
                                    { icon: <Award size={18} />, label: "VIP amenities" },
                                    { icon: <Sparkles size={18} />, label: "Exclusive cruise partnerships" },
                                    { icon: <MapPin size={18} />, label: "Concierge-level planning" },
                                    { icon: <Ship size={18} />, label: "Destination expertise" },
                                    { icon: <Users size={18} />, label: "Custom luxury itineraries" },
                                ].map((item, idx) => (
                                    <div key={idx} className="azs-trust-service-pill">
                                        <div className="azs-trust-service-icon">{item.icon}</div>
                                        <span className="azs-trust-service-label">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Benefit Cards */}
                        <div className="azs-trust-right">
                            <div className="azs-trust-card azs-trust-card-top">
                                <div className="azs-trust-card-icon">
                                    <Award size={22} />
                                </div>
                                <div>
                                    <h4 className="azs-trust-card-title">Decades of Expertise</h4>
                                    <p className="azs-trust-card-desc">
                                        Clients benefit from decades of global travel expertise combined with insider luxury cruise knowledge.
                                    </p>
                                </div>
                            </div>
                            <div className="azs-trust-card azs-trust-card-mid">
                                <div className="azs-trust-card-icon">
                                    <Sparkles size={22} />
                                </div>
                                <div>
                                    <h4 className="azs-trust-card-title">VIP Access &amp; Partnerships</h4>
                                    <p className="azs-trust-card-desc">
                                        Access to exclusive cruise amenities and partnerships unavailable through standard booking channels.
                                    </p>
                                </div>
                            </div>
                            <div className="azs-trust-card azs-trust-card-bot">
                                <div className="azs-trust-card-icon">
                                    <Users size={22} />
                                </div>
                                <div>
                                    <h4 className="azs-trust-card-title">White-Glove Concierge</h4>
                                    <p className="azs-trust-card-desc">
                                        From initial planning to on-board, every detail is curated to match your unique luxury travel priorities.
                                    </p>
                                </div>
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
                            Common Mistakes Travelers Make
                        </h2>
                        <div className="Lfsg-accent-line-white" />
                    </div>

                    <div className="Lfsg-mistakes-grid">
                        {[
                            {
                                title: "Comparing Only Price",
                                desc: "Luxury cruise value depends heavily on inclusions.",
                            },
                            {
                                title: "Ignoring Destination Style",
                                desc: "Azamara focuses heavily on port immersion.",
                            },
                            {
                                title: "Overlooking Suite Expectations",
                                desc: "Regent suites are significantly more luxurious overall."
                            },
                            {
                                title: "Choosing Without Expert Guidance",
                                desc: "Luxury cruise experiences vary dramatically based on itinerary, suite category, and ship.",
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


            {/* PLANNING ADVICE */}
            <section className="Asc-section Asc-bg-soft" id="Asc-planning-advice">
                <div className="Asc-container">

                    <div className="Asc-section-header margin-large">
                        <h2 className="Asc-h2">
                            Plan Your Luxury Cruise with Angela Hughes
                        </h2>

                        <div className="Asc-accent-line"></div>
                    </div>

                    <div className="Asc-why-trust-grid">

                        {/* LEFT COLUMN */}
                        <div>
                            <h3
                                className="Asc-planning-intro-title"
                                style={{ textAlign: "left" }}
                            >
                                Choosing the Right Luxury Cruise Matters
                            </h3>

                            <p className="Asc-planning-intro-text">
                                Choosing the right luxury cruise line can dramatically shape
                                your travel experience.
                            </p>

                            <div className="Asc-overview-highlight-box Asc-planning-alert-box">
                                <p className="Asc-planning-alert-text">
                                    Working with an experienced luxury travel advisor ensures
                                    your voyage aligns perfectly with your expectations,
                                    travel style, and goals.
                                </p>
                            </div>
                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="Asc-who-card Asc-who-yes Asc-planning-card">

                            <h4 className="Asc-planning-card-title">
                                Whether you are considering:
                            </h4>

                            <ul className="Asc-who-list planning-list">
                                {[
                                    "Azamara",
                                    "Seabourn",
                                    "Silversea",
                                    "Regent Seven Seas",
                                    "Explora Journeys",
                                    "Scenic Eclipse"
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

                            <div className="Asc-planning-footer">
                                <p className="Asc-planning-intro-text">
                                    Connect with Angela Hughes and the team at Trips & Ships
                                    Luxury Travel to design your ideal luxury cruise
                                    experience.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            {/* FINAL VERDICT */}
            <section className="Asc-section Asc-bg-white" id="Asc-verdict">
                <div className="Asc-container">

                    <div className="Asc-section-header margin-large">
                        <h2 className="Asc-h2">Final Verdict: Azamara vs Seabourn</h2>

                        <div className="Asc-accent-line"></div>

                        <p className="Asc-verdict-intro">
                            The right luxury cruise depends on the type of experience you value most.
                        </p>
                    </div>

                    <div className="Asc-verdict-grid">

                        {/* Azamara Column */}
                        <div className="Asc-verdict-card Asc-verdict-azamara">
                            <h3 className="Asc-verdict-card-title">
                                Choose Azamara if you value:
                            </h3>

                            <ul className="Asc-verdict-list">
                                {[
                                    "Destination immersion",
                                    "Longer port stays",
                                    "Social atmosphere",
                                    "Boutique cruising",
                                    "Better overall luxury value",
                                ].map((item, i) => (
                                    <li key={i} className="Asc-verdict-item">
                                        <Check size={18} className="Asc-verdict-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Seabourn Column */}
                        <div className="Asc-verdict-card Asc-verdict-regent">
                            <h3 className="Asc-verdict-card-title">
                                Choose Seabourn if you value:
                            </h3>

                            <ul className="Asc-verdict-list">
                                {[
                                    "Ultra-luxury service",
                                    "Elegant suites",
                                    "Gourmet dining",
                                    "Elevated inclusions",
                                    "Quiet sophistication",
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
                            For many luxury travelers, the ideal answer comes down to:


                            “What type of luxury experience do you want to remember most?”

                        </p>
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

        </div>
    );
};

export default AzamaraVsSeabourn;