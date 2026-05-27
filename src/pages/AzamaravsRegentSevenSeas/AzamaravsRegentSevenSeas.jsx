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
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/image.webp";
import HeroImage1 from "../../assets/Azamarashipcomparison/hero1.webp";
import HeroImage2 from "../../assets/Azamarashipcomparison/hero2.jpg";
import CTAImage from "../../assets/Azamarashipcomparison/Ctaimage.jpg";
import HeroImage4 from "../../assets/Azamarashipcomparison/Regentsea.jpg";
import AzamaraOverviewImage from "../../assets/AzamaravsVikingOcean/azamara.webp";
import RegentOverviewImage from "../../assets/Azamarashipcomparison/Regent-Seven-Seas.webp";
import DiningImage from "../../assets/Azamarashipcomparison/Azamara-Dining-Experience.webp";
import BeveragesImage from "../../assets/Azamarashipcomparison/AzamaraValue.webp";
import "../AzamaraShipComparison/Azamarashipcomparison.css";
import { Helmet } from "react-helmet-async";

const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            name: "Trips & Ships Luxury Travel",
            url: "https://www.tripsandships.com",
            logo: "https://www.tripsandships.com/logo.png",
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
                "Luxury travel expert with over 40 years of experience and travel to more than 121 countries.",
            worksFor: {
                "@type": "Organization",
                name: "Trips & Ships Luxury Travel",
            },
        },
        {
            "@type": "WebPage",
            name: "Azamara vs Regent Seven Seas",
            url: "https://www.tripsandships.com/azamara-vs-regent-seven-seas",
            description:
                "Expert comparison of Azamara and Regent Seven Seas including luxury level, suites, dining, inclusions, pricing, and destination experiences for luxury travelers.",
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
                    name: "Azamara vs Regent Seven Seas",
                    item: "https://www.tripsandships.com/azamara-vs-regent-seven-seas",
                },
            ],
        },
        {
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Is Regent Seven Seas more luxurious than Azamara?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Regent Seven Seas is considered ultra-luxury, while Azamara is positioned as premium luxury.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Regent Seven Seas truly all-inclusive?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Regent includes excursions, beverages, dining, gratuities, Wi-Fi, and often airfare.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Azamara good for destination immersion?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Azamara is highly regarded for longer port stays and immersive itineraries.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which cruise line has better food?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Regent Seven Seas generally delivers a more elevated fine dining experience.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which cruise line is better for couples?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Both are excellent, but Regent is often preferred for milestone celebrations and luxury romance travel.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Azamara less expensive than Regent?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Azamara typically has a lower upfront cost.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Regent include excursions?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Unlimited shore excursions are included on most voyages.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which cruise line has larger suites?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Regent Seven Seas generally offers larger and more luxurious suite accommodations.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Azamara considered luxury?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Azamara is a luxury cruise line focused on boutique destination experiences.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which line is better for first-time luxury cruisers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Azamara can be an excellent introduction to luxury cruising due to its pricing and relaxed atmosphere.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which cruise line is better for food and wine lovers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Regent Seven Seas is often preferred by culinary-focused luxury travelers.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I use a luxury travel advisor for cruises?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Absolutely. Luxury cruise pricing, suite selection, and perks vary significantly.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What does a luxury cruise advisor help with?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "An advisor helps with cruise matching, suite selection, VIP amenities, and customized travel planning.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Trips & Ships Luxury Travel offer exclusive perks?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Exclusive amenities and luxury travel benefits may be available depending on the sailing and supplier partnerships.",
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
            q: "Is Regent Seven Seas more luxurious than Azamara?",
            a: "Yes. Regent Seven Seas is considered ultra-luxury, while Azamara is positioned as premium luxury.",
        },
        {
            q: "Is Regent Seven Seas truly all-inclusive?",
            a: "Regent includes excursions, beverages, dining, gratuities, Wi-Fi, and often airfare.",
        },
        {
            q: "Is Azamara good for destination immersion?",
            a: "Yes. Azamara is highly regarded for longer port stays and immersive itineraries.",
        },
        {
            q: "Which cruise line has better food?",
            a: "Regent Seven Seas generally delivers a more elevated fine dining experience.",
        },
        {
            q: "Which cruise line is better for couples?",
            a: "Both are excellent, but Regent is often preferred for milestone celebrations and luxury romance travel.",
        },
        {
            q: "Is Azamara less expensive than Regent?",
            a: "Yes. Azamara typically has a lower upfront cost.",
        },
        {
            q: "Does Regent include excursions?",
            a: "Yes. Unlimited shore excursions are included on most voyages.",
        },
        {
            q: "Which cruise line has larger suites?",
            a: "Regent Seven Seas generally offers larger and more luxurious suite accommodations.",
        },
        {
            q: "Is Azamara considered luxury?",
            a: "Yes. Azamara is a luxury cruise line focused on boutique destination experiences.",
        },
        {
            q: "Which line is better for first-time luxury cruisers?",
            a: "Azamara can be an excellent introduction to luxury cruising due to its pricing and relaxed atmosphere.",
        },
        {
            q: "Which cruise line is better for food and wine lovers?",
            a: "Regent Seven Seas is often preferred by culinary-focused luxury travelers.",
        },
        {
            q: "Should I use a luxury travel advisor for cruises?",
            a: "Absolutely. Luxury cruise pricing, suite selection, and perks vary significantly.",
        },
        {
            q: "What does a luxury cruise advisor help with?",
            a: "An advisor helps with cruise matching, suite selection, VIP amenities, and customized travel planning.",
        },
        {
            q: "Does Trips & Ships Luxury Travel offer exclusive perks?",
            a: "Yes. Exclusive amenities and luxury travel benefits may be available depending on the sailing and supplier partnerships.",
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
const AzamaravsRegentSevenSeas = () => {
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
                <title>Azamara vs Regent Seven Seas: Which Luxury Cruise Line Is Best in 2026?</title>
                <meta
                    name="title"
                    content="Azamara vs Regent Seven Seas | Luxury Cruise Comparison by Angela Hughes"
                />
                <meta
                    name="description"
                    content="Compare Azamara vs Regent Seven Seas with expert insights from Angela Hughes, award-winning luxury cruise specialist with 40+ years of experience. Discover which luxury cruise line fits your travel style, budget, and expectations."
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
                    <h1>Azamara vs Regent Seven Seas: Which Luxury Cruise Experience Is Right for You?</h1>

                    <p>
                        Choosing between Azamara Cruises and Regent Seven Seas Cruises is not simply about comparing cruise lines. It is about choosing the type of luxury travel experience you want to live.

                    </p>

                    {/* READ MORE CONTENT */}
                    {readMore && (
                        <>
                            <p>
                                Some travelers prioritize immersive destinations and boutique-style exploration. Others want uncompromising all-inclusive luxury with exceptional suites, fine dining, and personalized service at sea.

                            </p>

                            <p>That is where expert guidance matters.</p>

                            <p>
                                At Trips & Ships Luxury Travel, luxury cruise recommendations are never generic. Under the leadership of Angela Hughes — a globally recognized luxury travel authority with over 40 years of industry experience and travel across 121+ countries — clients receive highly personalized cruise matching based on travel style, expectations, and luxury preferences.

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

                </div>
            </section>

            {/* AZAMARA VS REGENT SEVEN SEAS */}
            <section className="Asc-section Asc-bg-white" id="Asc-comparison-regent">
                <div className="Asc-container">
                    <div className="Asc-section-header">
                        <h2 className="Asc-h2">Azamara vs Regent Seven Seas</h2>
                        <div className="Asc-accent-line"></div>
                    </div>

                    <div className="Asc-vs-cards-container">
                        {/* Azamara Card */}
                        <div className="Asc-vs-card Asc-vs-card-azamara">
                            <div className="Asc-vs-card-header">
                                <span className="Asc-vs-eyebrow">If you want:</span>
                                <h3 className="Asc-vs-title" style={{ textAlign: "left" }}>Boutique Immersion</h3>
                            </div>
                            <div className="Asc-vs-card-body">
                                <p className="Asc-vs-text">
                                    More affordable luxury with destination immersion
                                </p>
                            </div>
                            <div className="Asc-vs-card-footer">
                                <span className="Asc-vs-arrow">&rarr;</span>
                                <strong className="Asc-vs-brand">Azamara</strong>
                            </div>
                        </div>

                        {/* Divider Badge */}
                        <div className="Asc-vs-badge-divider">
                            <span>VS</span>
                        </div>

                        {/* Regent Card */}
                        <div className="Asc-vs-card Asc-vs-card-regent">
                            <div className="Asc-vs-card-header">
                                <span className="Asc-vs-eyebrow">If you want:</span>
                                <h3 className="Asc-vs-title" style={{ textAlign: "left" }}>All-Inclusive Elegance</h3>
                            </div>
                            <div className="Asc-vs-card-body">
                                <p className="Asc-vs-text">
                                    Ultra-luxury all-inclusive elegance
                                </p>
                            </div>
                            <div className="Asc-vs-card-footer">
                                <span className="Asc-vs-arrow">&rarr;</span>
                                <strong className="Asc-vs-brand">Regent Seven Seas</strong>
                            </div>
                        </div>
                    </div>

                    <div className="Asc-intro-wrapper" style={{ marginTop: "56px" }}>
                        <p className="Asc-verdict-intro-title">
                            However, the real answer depends on:
                        </p>

                        <div className="Asc-vs-features-grid">
                            {[
                                "Your luxury expectations",
                                "Preferred onboard atmosphere",
                                "Suite preferences",
                                "Dining priorities",
                                "Included amenities",
                                "Excursion style",
                                "Destination goals"
                            ].map((item, i) => (
                                <div key={i} className="Asc-vs-feature-pill">
                                    <div className="Asc-vs-feature-icon-wrap">
                                        <Check size={16} />
                                    </div>
                                    <span className="Asc-vs-feature-text">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* AZAMARA OVERVIEW */}
            <section className="Asc-overview-section" id="Asc-azamara-overview">
                <div className="Asc-container">
                    <div className="Asc-overview-grid">
                        {/* Image Column */}
                        <div className="Asc-overview-image-wrap">
                            <img src={AzamaraOverviewImage} alt="Azamara luxury cruise ship overview" className="Asc-overview-img" />
                            <div className="Asc-overview-image-overlay">
                                <span className="Asc-overview-badge">Boutique Luxury</span>
                                <h3 style={{ textAlign: "left" }}>Destination Immersion</h3>
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="Asc-overview-content">
                            <h2 className="Asc-overview-h2">Azamara Overview</h2>
                            <p className="Asc-overview-known-title">Azamara Cruises is known for:</p>

                            <ul className="Asc-overview-known-list">
                                {[
                                    "Small ship cruising",
                                    "Destination immersion",
                                    "Longer port stays",
                                    "Boutique hotel atmosphere",
                                    "Cultural experiences",
                                    "Relaxed luxury"
                                ].map((item, i) => (
                                    <li key={i} className="Asc-overview-known-item">
                                        <span className="Asc-overview-known-icon"><Check size={16} /></span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="Asc-overview-highlight-box">
                                <p>
                                    Azamara appeals strongly to travelers who care more about where they are going than extravagant onboard excess.
                                </p>
                            </div>

                            <div className="Asc-overview-suitability-grid">
                                <div className="Asc-suitability-card Asc-best-for-card">
                                    <h4 className="Asc-suitability-title">Best For</h4>
                                    <ul className="Asc-suitability-list">
                                        {[
                                            "Experienced travelers",
                                            "Cultural explorers",
                                            "Destination-focused couples",
                                            "Luxury travelers seeking value",
                                            "Guests preferring smaller ships"
                                        ].map((item, i) => (
                                            <li key={i}>
                                                <span className="Asc-suitability-icon check"><Check size={14} /></span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="Asc-suitability-card Asc-not-ideal-card">
                                    <h4 className="Asc-suitability-title">Not Ideal For</h4>
                                    <ul className="Asc-suitability-list">
                                        {[
                                            "Travelers expecting ultra-luxury inclusions",
                                            "Guests wanting lavish suites",
                                            "Travelers prioritizing butler service",
                                            "Those seeking a highly formal atmosphere"
                                        ].map((item, i) => (
                                            <li key={i}>
                                                <span className="Asc-suitability-icon minus"><Minus size={14} /></span>
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

            {/* REGENT SEVEN SEAS OVERVIEW */}
            <section className="Asc-overview-section Regent" id="Asc-regent-overview">
                <div className="Asc-container">
                    <div className="Asc-overview-grid flipped">
                        {/* Image Column */}
                        <div className="Asc-overview-image-wrap">
                            <img src={RegentOverviewImage} alt="Regent Seven Seas luxury cruise overview" className="Asc-overview-img" />
                            <div className="Asc-overview-image-overlay">
                                <span className="Asc-overview-badge">Ultra-Luxury</span>
                                <h3 style={{ textAlign: "left" }}>All-Inclusive Elegance</h3>
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="Asc-overview-content">
                            <h2 className="Asc-overview-h2">Regent Seven Seas Overview</h2>
                            <p className="Asc-overview-known-title">Regent focuses on:</p>

                            <ul className="Asc-overview-known-list">
                                {[
                                    "True all-inclusive luxury",
                                    "Spacious suites",
                                    "Fine dining",
                                    "Personalized service",
                                    "Included business-class airfare on many itineraries",
                                    "Unlimited shore excursions",
                                    "Premium beverages",
                                    "Butler service on higher suite categories"
                                ].map((item, i) => (
                                    <li key={i} className="Asc-overview-known-item">
                                        <span className="Asc-overview-known-icon"><Check size={16} /></span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="Asc-overview-highlight-box">
                                <p>
                                    Regent Seven Seas Cruises is considered one of the world’s premier ultra-luxury cruise brands.
                                </p>
                            </div>

                            <div className="Asc-overview-suitability-grid">
                                <div className="Asc-suitability-card Asc-best-for-card">
                                    <h4 className="Asc-suitability-title">Best For</h4>
                                    <ul className="Asc-suitability-list">
                                        {[
                                            "Ultra-luxury travelers",
                                            "Celebration travel",
                                            "Affluent couples",
                                            "Luxury food and wine enthusiasts",
                                            "Travelers wanting minimal onboard spending"
                                        ].map((item, i) => (
                                            <li key={i}>
                                                <span className="Asc-suitability-icon check"><Check size={14} /></span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="Asc-suitability-card Asc-not-ideal-card">
                                    <h4 className="Asc-suitability-title">Not Ideal For</h4>
                                    <ul className="Asc-suitability-list">
                                        {[
                                            "Travelers seeking a casual atmosphere",
                                            "Budget-conscious luxury travelers",
                                            "Guests prioritizing nightlife"
                                        ].map((item, i) => (
                                            <li key={i}>
                                                <span className="Asc-suitability-icon minus"><Minus size={14} /></span>
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


            {/* FLEET OVERVIEW TABLE */}
            <section className="Asc-section Asc-bg-soft" id="Asc-fleet">
                <div className="Asc-container">
                    <div className="Asc-section-header">
                        <h2 className="Asc-h2">Azamara vs Regent Seven Seas Comparison
                        </h2>
                        <div className="Asc-accent-line"></div>
                    </div>

                    <div className="Asc-table-wrapper">
                        <table className="Asc-fleet-table">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Azamara</th>
                                    <th>Regent Seven Seas</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Luxury Level</strong></td>
                                    <td>Premium Luxury</td>
                                    <td>Ultra Luxury</td>
                                </tr>

                                <tr>
                                    <td><strong>Atmosphere</strong></td>
                                    <td>Boutique & relaxed</td>
                                    <td>Elegant & refined</td>
                                </tr>

                                <tr>
                                    <td><strong>Included Excursions</strong></td>
                                    <td>Limited</td>
                                    <td>Unlimited</td>
                                </tr>

                                <tr>
                                    <td><strong>Dining</strong></td>
                                    <td>Excellent</td>
                                    <td>Exceptional gourmet</td>
                                </tr>

                                <tr>
                                    <td><strong>Suites</strong></td>
                                    <td>Comfortable</td>
                                    <td>Spacious luxury suites</td>
                                </tr>

                                <tr>
                                    <td><strong>Butler Service</strong></td>
                                    <td>Limited</td>
                                    <td>Extensive</td>
                                </tr>

                                <tr>
                                    <td><strong>Ship Size</strong></td>
                                    <td>Small ships</td>
                                    <td>Small-to-mid luxury ships</td>
                                </tr>

                                <tr>
                                    <td><strong>Best Strength</strong></td>
                                    <td>Destination immersion</td>
                                    <td>All-inclusive luxury</td>
                                </tr>

                                <tr>
                                    <td><strong>Price Point</strong></td>
                                    <td>Lower luxury pricing</td>
                                    <td>Higher ultra-luxury pricing</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* DINING COMPARISON */}
            <section className="Asc-overview-section Dining" id="Asc-dining-comparison">
                <div className="Asc-container">
                    <div className="Asc-overview-grid">
                        {/* Image Column */}
                        <div className="Asc-overview-image-wrap">
                            <img src={DiningImage} alt="Luxury cruise dining experience" className="Asc-overview-img" />
                            <div className="Asc-overview-image-overlay">
                                <span className="Asc-overview-badge">Fine Dining</span>
                                <h3 style={{ textAlign: "left" }}>Culinary Excellence</h3>
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="Asc-overview-content">
                            <h2 className="Asc-overview-h2">Which Cruise Line Has Better Dining?</h2>

                            <div className="Asc-overview-highlight-box" style={{ marginTop: "12px", marginBottom: "28px", width: "100%" }}>
                                <p>
                                    Both cruise lines perform well gastronomically, but Regent Seven Seas delivers a more elevated culinary experience overall.
                                </p>
                            </div>

                            <div className="Asc-overview-suitability-grid">
                                <div className="Asc-suitability-card Asc-best-for-card">
                                    <h4 className="Asc-suitability-title">Azamara Dining Experience</h4>
                                    <p style={{ fontSize: "14px", lineHeight: "1.6", color: "var(--navy)", margin: 0 }}>
                                        Azamara emphasizes approachable sophistication with destination-inspired cuisine and intimate venues.
                                    </p>
                                </div>

                                <div className="Asc-suitability-card Asc-not-ideal-card">
                                    <h4 className="Asc-suitability-title">Regent Dining Experience</h4>
                                    <p style={{ fontSize: "14px", fontWeight: "600", color: "var(--navy)", margin: "0 0 10px 0" }}>
                                        Regent offers:
                                    </p>
                                    <ul className="Asc-suitability-list">
                                        {[
                                            "Elevated gourmet cuisine",
                                            "Extensive wine programs",
                                            "Specialty restaurants",
                                            "Premium ingredients",
                                            "Highly personalized service"
                                        ].map((item, i) => (
                                            <li key={i}>
                                                <span className="Asc-suitability-icon check"><Check size={14} /></span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="Asc-overview-highlight-box" style={{ marginTop: "32px", width: "100%" }}>
                                <p style={{ fontWeight: "600", fontStyle: "normal" }}>
                                    Luxury travelers who prioritize fine dining usually prefer Regent.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* VALUE COMPARISON */}
            <section className="Asc-overview-section" id="Asc-value-comparison">
                <div className="Asc-container">
                    <div className="Asc-overview-grid flipped">
                        {/* Image Column */}
                        <div className="Asc-overview-image-wrap">
                            <img src={BeveragesImage} alt="Luxury cruise all-inclusive value" className="Asc-overview-img" />
                            <div className="Asc-overview-image-overlay">
                                <span className="Asc-overview-badge">All-Inclusive Value</span>
                                <h3 style={{ textAlign: "left" }}>Inclusions & Value</h3>
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="Asc-overview-content">
                            <h2 className="Asc-overview-h2">Which Cruise Line Offers Better Value?</h2>

                            <div className="Asc-overview-highlight-box" style={{ marginTop: "12px", marginBottom: "28px", width: "100%" }}>
                                <p>
                                    This depends entirely on how you define value.
                                </p>
                            </div>

                            <div className="Asc-overview-suitability-grid">
                                <div className="Asc-suitability-card Asc-best-for-card">
                                    <h4 className="Asc-suitability-title">Azamara Value</h4>
                                    <p style={{ fontSize: "14px", fontWeight: "600", color: "var(--navy)", margin: "0 0 10px 0" }}>
                                        Azamara often provides:
                                    </p>
                                    <ul className="Asc-suitability-list">
                                        {[
                                            "Lower upfront pricing",
                                            "Excellent itineraries",
                                            "Smaller ship intimacy",
                                            "Strong destination access"
                                        ].map((item, i) => (
                                            <li key={i}>
                                                <span className="Asc-suitability-icon check"><Check size={14} /></span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="Asc-suitability-card Asc-not-ideal-card">
                                    <h4 className="Asc-suitability-title">Regent Value</h4>
                                    <p style={{ fontSize: "14px", fontWeight: "600", color: "var(--navy)", margin: "0 0 10px 0" }}>
                                        Regent includes:
                                    </p>
                                    <ul className="Asc-suitability-list">
                                        {[
                                            "Excursions",
                                            "Premium beverages",
                                            "Specialty dining",
                                            "Wi-Fi",
                                            "Gratuities",
                                            "Often airfare"
                                        ].map((item, i) => (
                                            <li key={i}>
                                                <span className="Asc-suitability-icon check"><Check size={14} /></span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="Asc-overview-highlight-box" style={{ marginTop: "32px", width: "100%" }}>
                                <p style={{ fontWeight: "600", fontStyle: "normal" }}>
                                    For travelers who fully utilize inclusions, Regent can actually deliver strong overall value despite higher pricing.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* EXPERT INSIGHT FROM ANGELA HUGHES */}
            <section className="Avr-expert-section" id="Asc-expert-insight">
                <div className="Asc-container">

                    {/* TOP HEADING */}
                    <div className="Avr-expert-heading">
                        <span className="Avr-expert-eyebrow">Expert Insight</span>
                        <h2 className="Avr-expert-title">
                            Azamara vs Regent: Angela Hughes' Perspective
                        </h2>
                        <div className="Avr-expert-divider"></div>
                    </div>

                    {/* MAIN GRID */}
                    <div className="Avr-expert-grid">

                        {/* LEFT SIDE: Portrait + Name */}
                        <div className="Avr-expert-image-col">
                            <div className="Avr-expert-portrait-wrap">
                                <img
                                    src={AboutImage}
                                    alt="Angela Hughes – Luxury Travel Expert"
                                    className="Avr-expert-portrait"
                                />
                                <div className="Avr-expert-portrait-badge">
                                    <Star size={14} />
                                    <span>40+ Years Experience</span>
                                </div>
                            </div>
                            <div className="Avr-expert-name-card">
                                <h3 className="Avr-expert-name">Angela Hughes</h3>
                                <p className="Avr-expert-role">CEO · Trips &amp; Ships Luxury Travel</p>
                                <div className="Avr-expert-name-divider"></div>
                                <p className="Avr-expert-countries">
                                    <MapPin size={14} />
                                    121+ Countries Visited
                                </p>
                            </div>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="Avr-expert-content-col">

                            {/* Quote Block */}
                            <div className="Avr-expert-quote-box">
                                <div className="Avr-expert-quote-icon">
                                    <Quote size={36} />
                                </div>
                                <blockquote className="Avr-expert-quote-text">
                                    "Azamara and Regent Seven Seas attract very different luxury travelers. Azamara excels in immersive travel experiences and boutique-style cruising, while Regent delivers one of the most complete ultra-luxury cruise products at sea. Matching the traveler to the right experience is where true expertise matters."
                                </blockquote>
                            </div>

                            {/* Credentials Grid */}
                            <div className="Avr-expert-credentials-box">
                                <h4 className="Avr-expert-credentials-title">
                                    <Award size={16} />
                                    Angela Hughes' Credentials
                                </h4>
                                <div className="Avr-expert-credentials-grid">
                                    {[
                                        { icon: <Award size={16} />, label: "CEO of Trips & Ships Luxury Travel" },
                                        { icon: <Star size={16} />, label: "40+ Years in Luxury Travel" },
                                        { icon: <MapPin size={16} />, label: "Visited 121+ Countries" },
                                        { icon: <Award size={16} />, label: "Founder of Luxury Travel University" },
                                        { icon: <Users size={16} />, label: "Travel Leaders Network Advisory Board" },
                                        { icon: <Users size={16} />, label: "Global Luxury Travel Speaker & Trainer" },
                                        { icon: <Award size={16} />, label: "2024 Luxury Travel Influencer of the Year" },
                                        { icon: <Star size={16} />, label: "Most Influential Women in Travel 2026" },
                                    ].map((item, i) => (
                                        <div className="Avr-expert-list-item" key={i}>
                                            <span className="Avr-expert-list-icon">{item.icon}</span>
                                            <span className="Avr-expert-list-label">{item.label}</span>
                                        </div>
                                    ))}
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

            {/* WHO SHOULD CHOOSE */}
            <section className="Asc-section Asc-bg-white" id="Asc-who">
                <div className="Asc-container">
                    <div className="Asc-section-header">
                        <h2 className="Asc-h2">Who Should Choose Which Cruise Line?</h2>
                        <div className="Asc-accent-line"></div>
                    </div>
                    <div className="Asc-who-grid">
                        <div className="Asc-who-card Asc-who-yes">
                            <h3 className="Asc-who-title">Who Should Choose Azamara?</h3>
                            <p className="Asc-who-card-intro">
                                Choose Azamara if you:
                            </p>
                            <ul className="Asc-who-list">
                                {[
                                    "Love authentic cultural experiences",
                                    "Prefer smaller ships",
                                    "Want a relaxed luxury atmosphere",
                                    "Value destination immersion",
                                    "Prefer lower luxury pricing",
                                ].map((item, i) => (
                                    <li key={i} className="Asc-who-list-item">
                                        <Check size={16} className="Asc-icon-green Asc-who-list-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="Asc-who-card Asc-who-no">
                            <h3 className="Asc-who-title">Who Should Choose Regent Seven Seas?</h3>
                            <p className="Asc-who-card-intro">
                                Choose Regent if you:
                            </p>
                            <ul className="Asc-who-list">
                                {[
                                    "Want ultra-luxury inclusions",
                                    "Prefer spacious suites",
                                    "Enjoy gourmet dining",
                                    "Want premium service",
                                    "Prefer a highly polished luxury environment",
                                ].map((item, i) => (
                                    <li key={i} className="Asc-who-list-item">
                                        <Check size={16} className="Asc-icon-green Asc-who-list-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* VIDEO SECTION */}
            <section className="Asc-video-section" id="Asc-video"  style={{backgroundColor: "var(--navy-soft)"}}>
                <div className="Asc-container">
                    <div className="Asc-section-header">
                        <h2 className="Asc-h2">Regent Seven Seas Cruise</h2>
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
            </section>

            {/* PLANNING ADVICE */}
            <section className="Avr-planning-section" id="Asc-planning-advice">
                <div className="Asc-container">

                    {/* HEADING */}
                    <div className="Avr-planning-heading">
                        <span className="Avr-planning-eyebrow">Expert Planning Advice</span>
                        <h2 className="Avr-planning-title">Planning Advice From Trips &amp; Ships Luxury Travel</h2>
                        <div className="Avr-planning-divider"></div>
                    </div>

                    {/* TWO-PANEL GRID */}
                    <div className="Avr-planning-grid">

                        {/* LEFT PANEL — dark navy */}
                        <div className="Avr-planning-left">
                            <div className="Avr-planning-left-deco">&ldquo;</div>
                            <h3 className="Avr-planning-left-title">Booking Luxury Cruises Correctly Matters</h3>
                            <p className="Avr-planning-left-body">
                                The luxury cruise market is highly specialized. Unlike mass-market travel, securing the right combination of suite category, dining preferences, and onboard amenities requires foresight and direct supplier relationships.
                            </p>
                            <div className="Avr-planning-alert">
                                <AlertTriangle size={18} className="Avr-planning-alert-icon" />
                                <p className="Avr-planning-alert-text">
                                    The best suites, promotions, and exclusive amenities often disappear months in advance. Early booking is critical for securing prime inventory.
                                </p>
                            </div>
                        </div>

                        {/* RIGHT PANEL — white with benefit cards */}
                        <div className="Avr-planning-right">
                            <p className="Avr-planning-right-intro">
                                Working with Angela Hughes and the expert advisors at Trips &amp; Ships Luxury Travel provides:
                            </p>
                            <div className="Avr-planning-benefits-grid">
                                {[
                                    { icon: <Award size={18} />, label: "Exclusive luxury perks" },
                                    { icon: <Star size={18} />, label: "Personalized cruise matching" },
                                    { icon: <Ship size={18} />, label: "Suite selection guidance" },
                                    { icon: <Users size={18} />, label: "VIP planning support" },
                                    { icon: <MapPin size={18} />, label: "Destination expertise" },
                                    { icon: <ArrowRight size={18} />, label: "Pre- and post-cruise luxury planning" },
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


            {/* WHY TRIPS & SHIPS */}
            <section className="Asc-section Asc-bg-white" id="Asc-why">
                <div className="Asc-container">
                    <div className="Asc-section-header margin-large">
                        <h2 className="Asc-h2">Why Luxury Travelers Trust Trips & Ships <br /> Luxury Travel</h2>
                        <div className="Asc-accent-line"></div>
                    </div>

                    <div className="Asc-why-trust-grid">
                        {/* LEFT COLUMN: INTRO & HIGHLIGHT */}
                        <div>
                            <p className="Asc-why-trust-intro">
                                Unlike mass-market booking sites, Trips & Ships Luxury Travel delivers bespoke support and insider access. We ensure every aspect of your voyage is handled with expert care.
                            </p>

                            <div className="Asc-overview-highlight-box Asc-why-trust-quote-box">
                                <p className="Asc-why-trust-quote-text">
                                    “This expertise becomes especially valuable when comparing luxury cruise lines that appear similar online but deliver very different onboard experiences.”
                                </p>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: THE 5 DELIVERABLES */}
                        <div className="Asc-why-panel Asc-why-trust-panel">
                            <div className="Asc-why-panel-top Asc-why-trust-panel-top">
                                <div className="Asc-why-panel-icon">
                                    <Award size={20} />
                                </div>
                                <h3 className="Asc-why-panel-title Asc-why-trust-panel-title">
                                    Trips & Ships Luxury Travel Delivers:
                                </h3>
                            </div>
                            <ul className="Asc-why-panel-list Asc-why-trust-panel-list">
                                {[
                                    "Human expertise",
                                    "Deep luxury cruise knowledge",
                                    "Personalized recommendations",
                                    "Global destination expertise",
                                    "Industry-recognized leadership"
                                ].map((item, i) => (
                                    <li key={i} className="Asc-why-trust-item">
                                        <span className="Asc-why-panel-num Asc-why-trust-num">
                                            {i + 1}
                                        </span>
                                        <span className="Asc-why-trust-label">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL VERDICT */}
            <section className="Asc-section Asc-bg-soft" id="Asc-verdict">
                <div className="Asc-container">
                    <div className="Asc-section-header margin-large">
                        <h2 className="Asc-h2">Final Verdict: Azamara vs Regent Seven Seas</h2>
                        <div className="Asc-accent-line"></div>
                        <p className="Asc-verdict-intro">
                            There is no universal winner. The right choice depends entirely on the type of luxury traveler you are.
                        </p>
                    </div>

                    <div className="Asc-verdict-grid">
                        {/* Azamara Column */}
                        <div className="Asc-verdict-card Asc-verdict-azamara">
                            <h3 className="Asc-verdict-card-title">Choose Azamara for:</h3>
                            <ul className="Asc-verdict-list">
                                {[
                                    "Destination-focused travel",
                                    "Boutique luxury",
                                    "Cultural immersion",
                                    "Relaxed sophistication",
                                ].map((item, i) => (
                                    <li key={i} className="Asc-verdict-item">
                                        <Check size={18} className="Asc-verdict-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Regent Column */}
                        <div className="Asc-verdict-card Asc-verdict-regent">
                            <h3 className="Asc-verdict-card-title">Choose Regent Seven Seas for:</h3>
                            <ul className="Asc-verdict-list">
                                {[
                                    "Ultra-luxury indulgence",
                                    "Exceptional inclusions",
                                    "Fine dining",
                                    "Spacious suite experiences",
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
                            The best luxury cruise decisions come from expert matching — not generic online rankings.
                        </p>
                    </div>
                </div>
            </section>

            {/* VIDEO SECTION */}
<section className="Asc-video-section" id="Asc-video" style={{backgroundColor: "var(--bg-white)"}}>
    <div className="Asc-container">
        <div className="Asc-section-header">
            <h2 className="Asc-h2">Discover Europe with Azamara</h2>
            <div className="Asc-accent-line"></div>

            <p className="Asc-video-intro">
                Discover how Azamara Cruises brings travelers closer to Europe with immersive itineraries, longer stays, and destination-focused luxury experiences.
            </p>
        </div>

        <div className="Asc-video-wrapper">
            <div className="Asc-video-frame">
                <iframe
                    src="https://www.youtube.com/embed/LIkutVSgTGI"
                    title="Discover Europe with Azamara Cruises"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
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
                                <h2 className="Asc-help-h2">Ready to choose the luxury cruise experience that truly fits your travel style?</h2>
                                <div className="Asc-help-accent"></div>
                            </div>

                            <div className="Asc-help-grid">
                                <div className="Asc-help-info">
                                    <p className="Asc-help-intro">
                                        Connect with Angela Hughes and the expert team at Trips & Ships Luxury Travel for personalized luxury cruise guidance, VIP amenities, and expertly curated voyage recommendations.
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

export default AzamaravsRegentSevenSeas;