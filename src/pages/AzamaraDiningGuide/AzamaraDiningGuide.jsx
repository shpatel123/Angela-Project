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
    Utensils,
    Compass,
    Wine,
    Heart, UtensilsCrossed, User, Leaf, Coffee, Sunset, Flame
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/image.webp";
import HeroImage1 from "../../assets/AzamaraDiningGuide/AzamaraHero.webp";
import HeroImage2 from "../../assets/AzamaraDiningGuide/Azamara-night.webp";
import CTAImage from "../../assets/Azamarashipcomparison/Ctaimage.jpg";
import HeroImage4 from "../../assets/AzamaraDiningGuide/Small_Ship.webp";
import OverviewImage from "../../assets/AzamaraDiningGuide/Onboard_Dining.jpg";

import CouplesImage from "../../assets/AzamaraDiningGuide/AzamaraDining.webp";
import FoodiesImage from "../../assets/AzamaraDiningGuide/AzamaraBestFoodies.webp";
import SoloImage from "../../assets/AzamaraDiningGuide/AzamaraExperience.webp";
import FamilyImage from "../../assets/AzamaraDiningGuide/AzamaraWithFamiles.webp";
import AzamaraDietaryImage from "../../assets/AzamaraDiningGuide/BestAzamaraFood.webp";

import "../AzamaraShipComparison/Azamarashipcomparison.css";
import "./AzamaraDiningGuide.css";
import { Helmet } from "react-helmet-async";

const whyMatters = [
    "More personalized service",
    "Less crowded dining venues",
    "Better culinary consistency",
    "Stronger regional inspiration",
    "More meaningful wine experiences",
    "Relaxed luxury without formality overload",
];

const diningOverview = [
    { icon: <UtensilsCrossed size={18} />, label: "Complimentary main dining venues" },
    { icon: <Coffee size={18} />, label: "Casual cafes and buffets" },
    { icon: <Sunset size={18} />, label: "Poolside dining" },
    { icon: <Star size={18} />, label: "Specialty restaurants" },
    { icon: <Leaf size={18} />, label: "Room service" },
    { icon: <Wine size={18} />, label: "Destination-inspired cuisine" },
    { icon: <Flame size={18} />, label: "Wine-focused culinary experiences" },
];

const complimentaryVenues = [
    {
        id: "discoveries",
        eyebrow: "Main Dining Room",
        name: "Discoveries Restaurant",
        highlight: "Multi-course dinners with rotating regional menus",
        callout:
            "One standout aspect is how Azamara incorporates destination-inspired dishes tied to itineraries. Mediterranean cruises often feature authentic regional specialties that enhance cultural immersion.",
        items: [
            "Multi-course dinners",
            "Rotating regional menus",
            "Excellent seafood selections",
            "International cuisine",
            "Flexible seating",
            "High service standards",
        ],
    },
    {
        id: "windows",
        eyebrow: "Casual Dining",
        name: "Windows Café",
        highlight: "Freshly prepared stations with international cuisine",
        callout:
            "For many experienced luxury travelers, the relaxed atmosphere becomes preferable to overly formal dining rooms.",
        items: [
            "Freshly prepared stations",
            "International cuisine",
            "Outdoor dining options",
            "Excellent breakfast variety",
            "Less chaotic atmosphere than larger ships",
        ],
    },
    {
        id: "patio",
        eyebrow: "Poolside",
        name: "The Patio",
        highlight: "Casual poolside lunches and evening grill specialties",
        callout:
            "Many repeat Azamara guests consider The Patio one of the ship's hidden culinary gems.",
        items: [
            "Casual poolside lunches",
            "Gourmet burgers",
            "Fresh seafood",
            "Light Mediterranean options",
            "Evening grill specialties",
        ],
    },
];

const specialtyVenues = [
    {
        id: "aqualina",
        eyebrow: "Mediterranean Fine Dining",
        name: "Aqualina",
        tag: "Popular for Couples",
        desc: "Aqualina focuses on Mediterranean-inspired fine dining — especially popular for anniversaries and milestone celebrations.",
        items: [
            "Refined seafood dishes",
            "Elegant pasta courses",
            "Sophisticated wine pairings",
            "Romantic atmosphere",
        ],
    },
    {
        id: "primec",
        eyebrow: "Signature Steakhouse",
        name: "Prime C",
        tag: "Premium Cuts",
        desc: "Prime C is Azamara's signature steakhouse experience. Luxury travelers accustomed to premium steakhouses on land are often pleasantly surprised by the consistency and quality here.",
        items: [
            "Premium cuts of beef",
            "Exceptional lamb dishes",
            "Fresh seafood",
            "Elevated service",
            "Extensive wine selections",
        ],
    },
];

const worthItPoints = [
    "Higher-end menu complexity",
    "More intimate settings",
    "Enhanced wine experiences",
    "Personalized service",
    "Quiet romantic ambiance",
];


const diningData = [
    {
        key: "couples",
        icon: <Heart size={22} strokeWidth={1.6} />,
        eyebrow: "Romantic Dining",
        title: "Best for Couples",
        image: CouplesImage,
        imageAlt: "Azamara romantic dining experience for couples",
        items: [
            "Aqualina",
            "Wine-pairing dinners",
            "Sunset dining on the patio",
        ],
        accent: "adg-accent-rose",
    },
    {
        key: "foodies",
        icon: <UtensilsCrossed size={22} strokeWidth={1.6} />,
        eyebrow: "Culinary Excellence",
        title: "Best for Foodies",
        image: FoodiesImage,
        imageAlt: "Azamara destination-inspired dining experience",
        items: [
            "Destination-inspired menus",
            "Mediterranean itineraries",
            "Chef's Table experiences",
        ],
        accent: "adg-accent-gold",
    },
    {
        key: "solo",
        icon: <User size={22} strokeWidth={1.6} />,
        eyebrow: "Solo Adventure",
        title: "Best for Solo Travelers",
        image: SoloImage,
        imageAlt: "Azamara solo traveler dining atmosphere",
        items: [
            "Flexible seating",
            "Friendly social atmosphere",
            "Smaller ship interaction",
        ],
        accent: "adg-accent-teal",
    },
    {
        key: "family",
        icon: <Users size={22} strokeWidth={1.6} />,
        eyebrow: "Family Gatherings",
        title: "Best for Multi-Generational Families",
        image: FamilyImage,
        imageAlt: "Azamara multi-generational family dining",
        items: [
            "Casual dining flexibility",
            "Less rigid dining structure",
            "Broad menu variety",
        ],
        accent: "adg-accent-navy",
    },
];

const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            name: "Trips & Ships Luxury Travel",
            url: "https://www.tripsandships.com",
            logo: "https://www.tripsandships.com/logo.png",
            sameAs: [
                "https://www.facebook.com/",
                "https://www.instagram.com/",
            ],
        },
        {
            "@type": "TravelAgency",
            name: "Trips & Ships Luxury Travel",
            url: "https://www.tripsandships.com",
            description:
                "Luxury travel agency specializing in luxury cruises, expeditions, safaris, and premium travel experiences.",
        },
        {
            "@type": "Person",
            name: "Angela Hughes",
            jobTitle: "CEO of Trips & Ships Luxury Travel",
            description:
                "Luxury travel expert, global speaker, and founder of Luxury Travel University.",
            worksFor: {
                "@type": "Organization",
                name: "Trips & Ships Luxury Travel",
            },
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
                    name: "Azamara Dining Guide",
                    item: "https://www.tripsandships.com/azamara-dining-guide",
                },
            ],
        },
        {
            "@type": "WebPage",
            name: "Azamara Dining Guide",
            url: "https://www.tripsandships.com/azamara-dining-guide",
            description:
                "Expert luxury cruise dining guide for Azamara Cruises.",
        },
        {
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Is food included on Azamara cruises?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Most dining venues onboard Azamara are complimentary and included in your cruise fare.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Azamara have specialty restaurants?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Prime C and Aqualina are Azamara’s signature specialty dining venues.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Azamara dining good?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Azamara is widely praised for its high-quality cuisine, destination-inspired menus, and personalized service.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is specialty dining worth it on Azamara?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "For many luxury travelers, yes — especially for romantic evenings and elevated culinary experiences.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the dress code for Azamara dining?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Azamara follows a resort casual dress code with no overly formal requirements.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Azamara accommodate dietary restrictions?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Azamara accommodates many dietary preferences and allergies with advance notice.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which Azamara ship has the best dining?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Dining experiences are relatively consistent across the fleet due to ship similarity.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are drinks included on Azamara?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Select standard beverages, wine, beer, and spirits are included.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can I make dining reservations before sailing?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Specialty dining reservations can often be made before embarkation.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Azamara offer room service?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Complimentary room service is available.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Azamara better than Oceania for dining?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Oceania is often considered slightly more culinary-focused, while Azamara emphasizes destination immersion and relaxed luxury.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What cuisine does Azamara specialize in?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Azamara emphasizes international and destination-inspired cuisine.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are there vegetarian options on Azamara?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Vegetarian and plant-based options are available throughout the fleet.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Azamara offer wine-focused experiences?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Wine pairings and curated wine selections are part of the onboard culinary experience.",
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
            q: "Is food included on Azamara cruises?",
            a: "Yes. Most dining venues onboard Azamara are complimentary and included in your cruise fare.",
        },
        {
            q: "Does Azamara have specialty restaurants?",
            a: "Yes. Prime C and Aqualina are Azamara’s signature specialty dining venues.",
        },
        {
            q: "Is Azamara dining good?",
            a: "Azamara is widely praised for its high-quality cuisine, destination-inspired menus, and personalized service.",
        },
        {
            q: "Is specialty dining worth it on Azamara?",
            a: "For many luxury travelers, yes — especially for romantic evenings and elevated culinary experiences.",
        },
        {
            q: "What is the dress code for Azamara dining?",
            a: "Azamara follows a resort casual dress code with no overly formal requirements.",
        },
        {
            q: "Does Azamara accommodate dietary restrictions?",
            a: "Yes. Azamara accommodates many dietary preferences and allergies with advance notice.",
        },
        {
            q: "Which Azamara ship has the best dining?",
            a: "Dining experiences are relatively consistent across the fleet due to ship similarity.",
        },
        {
            q: "Are drinks included on Azamara?",
            a: "Select standard beverages, wine, beer, and spirits are included.",
        },
        {
            q: "Can I make dining reservations before sailing?",
            a: "Yes. Specialty dining reservations can often be made before embarkation.",
        },
        {
            q: "Does Azamara offer room service?",
            a: "Yes. Complimentary room service is available.",
        },
        {
            q: "Is Azamara better than Oceania for dining?",
            a: "Oceania is often considered slightly more culinary-focused, while Azamara emphasizes destination immersion and relaxed luxury.",
        },
        {
            q: "What cuisine does Azamara specialize in?",
            a: "Azamara emphasizes international and destination-inspired cuisine.",
        },
        {
            q: "Are there vegetarian options on Azamara?",
            a: "Yes. Vegetarian and plant-based options are available throughout the fleet.",
        },
        {
            q: "Does Azamara offer wine-focused experiences?",
            a: "Yes. Wine pairings and curated wine selections are part of the onboard culinary experience.",
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
const AzamaraDiningGuide = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [readMore, setReadMore] = useState(false);
    const images = [HeroImage1, HeroImage4, HeroImage2];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Azamara Dining Guide 2026 | Best Restaurants, Specialty Dining & Expert Cruise Tips</title>
                <meta
                    name="title"
                    content="Azamara Dining Guide | Luxury Cruise Dining Insights by Trips & Ships Luxury Travel"
                />
                <meta
                    name="description"
                    content="Discover the ultimate Azamara dining guide with expert luxury cruise insights from Angela Hughes of Trips & Ships Luxury Travel. Learn about specialty dining, complimentary restaurants, dining tips, reservations, wine experiences, and the best Azamara culinary experiences."
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
                    <h1>Azamara Dining Guide</h1>

                    <p>
                        Discover Why Azamara Dining Is One of Luxury Cruising’s Best Kept Secrets
                    </p>
                    <p>
                        For travelers who believe exceptional cuisine is one of the defining elements of luxury travel, Azamara Cruises offers a surprisingly refined culinary experience that consistently exceeds expectations.
                    </p>


                    {/* READ MORE CONTENT */}
                    {readMore && (
                        <>

                            <p>
                                Unlike mega-ships that focus on quantity and spectacle, Azamara delivers a more intimate, destination-inspired dining philosophy centered around quality, regional authenticity, and relaxed sophistication.
                            </p>

                            <p>
                                At Trips & Ships Luxury Travel, luxury cruise expert Angela Hughes has spent decades helping travelers identify which cruise experiences truly align with their lifestyle and expectations. With more than 40 years in the travel industry and visits to over 121 countries, Angela’s expertise helps travelers navigate the luxury cruise landscape with confidence.
                            </p>

                            <p>
                                As CEO of Trips & Ships Luxury Travel, founder of Luxury Travel University, Travel Leaders Network Advisory Board member, and recipient of the 2024 Luxury Travel Influencer of the Year award, Angela brings unmatched industry perspective to luxury cruise planning.
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

            {/* ════════════════════════════════════════
          1. WHY DINING MATTERS
      ════════════════════════════════════════ */}
            <section className="adg-c-section adg-c-bg-dark" id="adg-why-dining">
                <div className="adg-c-container">

                    <div className="adg-c-why-grid">

                        {/* LEFT — text */}
                        <div className="adg-c-why-left">
                            <span className="adg-c-eyebrow adg-c-eyebrow-light">Onboard Philosophy</span>
                            <h2 className="adg-c-h2 adg-c-h2-light">
                                Why Dining Matters on Azamara Cruises
                            </h2>
                            <div className="adg-c-accent-line adg-c-accent-light"></div>
                            <p className="adg-c-lead adg-c-lead-light">
                                Dining is not simply about meals onboard Azamara — it is central
                                to the overall travel experience.
                            </p>
                            <p className="adg-c-body adg-c-body-light">
                                Azamara's smaller ships create an environment unlike any other.
                                For sophisticated travelers seeking immersive luxury travel rather
                                than flashy mega-ship entertainment, Azamara's culinary approach
                                often becomes one of the cruise's most memorable highlights.
                            </p>
                        </div>

                        {/* RIGHT — pill grid */}
                        <div className="adg-c-why-right">
                            <div className="adg-c-why-card">
                                <span className="adg-c-why-card-label">Azamara's smaller ships create:</span>
                                <div className="adg-c-pill-grid">
                                    {whyMatters.map((item, i) => (
                                        <div key={i} className="adg-c-pill">
                                            <span className="adg-c-pill-check"><Check size={13} strokeWidth={3} /></span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════
    2. DINING OVERVIEW
════════════════════════════════════════ */}
            <section className="adg-c-section adg-c-bg-soft" id="adg-overview">
                <div className="adg-c-container">

                    <div className="adg-c-section-header">
                        <span className="adg-c-eyebrow">What's Available</span>
                        <h2 className="adg-c-h2">Azamara Dining Overview</h2>
                        <div className="adg-c-accent-line"></div>
                    </div>

                    <div className="adg-c-overview-layout">

                        {/* LEFT — list */}
                        <div className="adg-c-overview-icons">
                            {diningOverview.map((item, i) => (
                                <div key={i} className="adg-c-overview-item">
                                    <span className="adg-c-overview-icon">{item.icon}</span>
                                    <span className="adg-c-overview-label">{item.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* RIGHT — callout card + image */}
                        <div className="adg-c-overview-right">

                            <div className="adg-c-overview-callout">
                                <div className="adg-c-overview-callout-inner">
                                    <Star size={28} className="adg-c-callout-star" />
                                    <p className="adg-c-callout-text">
                                        The onboard culinary experience balances elegance with
                                        accessibility, making it particularly appealing to travelers
                                        who appreciate luxury without excessive pretension.
                                    </p>
                                </div>
                            </div>

                            <div className="adg-c-overview-image-wrap">
                                <img
                                    src={OverviewImage}
                                    alt="Azamara dining experience"
                                    className="adg-c-overview-img"
                                />
                                <div className="adg-c-overview-img-overlay">
                                    <span className="adg-c-overview-img-label">Azamara Dining</span>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════
          3. COMPLIMENTARY DINING
      ════════════════════════════════════════ */}
            <section className="adg-c-section adg-c-bg-white" id="adg-complimentary">
                <div className="adg-c-container">

                    <div className="adg-c-section-header">
                        <span className="adg-c-eyebrow">Included Onboard</span>
                        <h2 className="adg-c-h2">Complimentary Dining on Azamara</h2>
                        <div className="adg-c-accent-line"></div>
                    </div>

                    <div className="adg-c-venues-grid">
                        {complimentaryVenues.map((venue, i) => (
                            <div key={venue.id} className={`adg-c-venue-card adg-c-venue-${i + 1}`}>

                                <div className="adg-c-venue-top">
                                    <span className="adg-c-venue-eyebrow">{venue.eyebrow}</span>
                                    <h3 className="adg-c-venue-name">{venue.name}</h3>
                                    <p className="adg-c-venue-highlight">{venue.highlight}</p>
                                </div>

                                <ul className="adg-c-venue-list">
                                    {venue.items.map((item, j) => (
                                        <li key={j}>
                                            <span className="adg-c-venue-dot"></span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="adg-c-venue-callout">
                                    <span className="adg-c-venue-callout-bar"></span>
                                    <p>{venue.callout}</p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════
          4. SPECIALTY DINING
      ════════════════════════════════════════ */}
            <section className="adg-c-section adg-c-bg-soft" id="adg-specialty">
                <div className="adg-c-container">

                    <div className="adg-c-section-header">
                        <span className="adg-c-eyebrow">Premium Experiences</span>
                        <h2 className="adg-c-h2">Azamara Specialty Dining Restaurants</h2>
                        <div className="adg-c-accent-line"></div>
                    </div>

                    <div className="adg-c-specialty-grid">
                        {specialtyVenues.map((venue) => (
                            <div key={venue.id} className="adg-c-specialty-card">

                                <div className="adg-c-specialty-header">
                                    <div className="adg-c-specialty-header-top">
                                        <span className="adg-c-specialty-eyebrow">{venue.eyebrow}</span>
                                        <span className="adg-c-specialty-tag">{venue.tag}</span>
                                    </div>
                                    <h3 className="adg-c-specialty-name">{venue.name}</h3>
                                    <p className="adg-c-specialty-desc">{venue.desc}</p>
                                </div>

                                <div className="adg-c-specialty-divider"></div>

                                <ul className="adg-c-specialty-list">
                                    {venue.items.map((item, j) => (
                                        <li key={j}>
                                            <Check size={15} strokeWidth={2.5} className="adg-c-specialty-check" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════
          5. IS IT WORTH IT
      ════════════════════════════════════════ */}
            <section className="adg-c-section adg-c-bg-white" id="adg-worth-it">
                <div className="adg-c-container">

                    <div className="adg-c-section-header">
                        <span className="adg-c-eyebrow">Expert Verdict</span>
                        <h2 className="adg-c-h2">Is Azamara Specialty Dining Worth It?</h2>
                        <div className="adg-c-accent-line"></div>
                    </div>

                    <div className="adg-c-worth-layout">

                        {/* VERDICT BANNER */}
                        <div className="adg-c-verdict-banner">
                            <div className="adg-c-verdict-badge">For most luxury travelers: yes.</div>
                            <p className="adg-c-verdict-sub">
                                Azamara's specialty dining venues provide an elevated experience
                                in every sense.
                            </p>
                        </div>

                        {/* SPLIT */}
                        <div className="adg-c-worth-split">

                            <div className="adg-c-worth-left">
                                <h4 className="adg-c-worth-col-title">Specialty Dining Provides</h4>
                                <ul className="adg-c-worth-list">
                                    {worthItPoints.map((pt, i) => (
                                        <li key={i}>
                                            <span className="adg-c-worth-num">{i + 1}</span>
                                            <span>{pt}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="adg-c-worth-right">
                                <div className="adg-c-worth-note">
                                    <div className="adg-c-worth-note-bar"></div>
                                    <div className="adg-c-worth-note-content">
                                        <p className="adg-c-worth-note-text">
                                            However, unlike some cruise lines where specialty dining
                                            feels mandatory to escape mediocre included food, Azamara's
                                            complimentary dining is already very strong.
                                        </p>
                                        <p className="adg-c-worth-note-emphasis">
                                            That distinction matters.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            <section className="adg-section" id="adg-dining">
                <div className="adg-container">

                    {/* HEADER */}
                    <div className="adg-header">
                        <span className="adg-eyebrow">Onboard Dining</span>
                        <h2 className="adg-h2">Best Azamara Dining Experiences by Traveler Type</h2>
                        <div className="adg-accent-line"></div>
                        <p className="adg-intro">
                            Azamara's dining philosophy adapts to every travel style — from intimate
                            couples' evenings to flexible family meals. Discover which experience
                            suits your journey.
                        </p>
                    </div>

                    {/* CARDS GRID */}
                    <div className="adg-grid">
                        {diningData.map((item) => (
                            <div key={item.key} className={`adg-card ${item.accent}`}>

                                {/* IMAGE */}
                                <div className="adg-card-image-wrap">
                                    <img
                                        src={item.image}
                                        alt={item.imageAlt}
                                        className="adg-card-img"
                                    />
                                    <div className="adg-card-image-overlay"></div>

                                    {/* FLOATING EYEBROW ON IMAGE */}
                                    <div className="adg-card-eyebrow-wrap">
                                        <span className="adg-card-eyebrow-icon">{item.icon}</span>
                                        <span className="adg-card-eyebrow-label">{item.eyebrow}</span>
                                    </div>
                                </div>

                                {/* BODY */}
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

                                {/* BOTTOM ACCENT BAR */}
                                <div className="adg-card-bar"></div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>


            {/* FLEET OVERVIEW TABLE */}
            <section className="Asc-section Asc-bg-white" id="Asc-fleet">

                <div className="Asc-container">

                    <div className="Asc-section-header">
                        <h2 className="Asc-h2">
                            Azamara Dining Compared to Other Luxury Cruise Lines
                        </h2>

                        <div className="Asc-accent-line"></div>

                        <p className="Asc-section-intro">
                            Azamara occupies an appealing middle ground between premium and ultra-luxury cruising.
                        </p>
                    </div>

                    <div className="Asc-table-wrapper">

                        <table className="Asc-fleet-table">

                            <thead>
                                <tr>
                                    <th>Cruise Line</th>
                                    <th>Dining Style</th>
                                    <th>Strengths</th>
                                    <th>Best For</th>
                                </tr>
                            </thead>

                            <tbody>

                                <tr>
                                    <td><strong>Azamara</strong></td>
                                    <td>Destination-focused luxury</td>
                                    <td>Relaxed sophistication</td>
                                    <td>Cultural travelers</td>
                                </tr>

                                <tr>
                                    <td><strong>Oceania</strong></td>
                                    <td>Culinary-focused luxury</td>
                                    <td>Gourmet excellence</td>
                                    <td>Serious foodies</td>
                                </tr>

                                <tr>
                                    <td><strong>Seabourn</strong></td>
                                    <td>Ultra-luxury fine dining</td>
                                    <td>Elevated service</td>
                                    <td>Luxury purists</td>
                                </tr>

                                <tr>
                                    <td><strong>Viking</strong></td>
                                    <td>Scandinavian simplicity</td>
                                    <td>Regional cuisine</td>
                                    <td>Mature travelers</td>
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

            {/* PLANNING ADVICE */}
            <section className="Avr-planning-section" id="Asc-planning-advice">

                <div className="Asc-container">

                    {/* HEADING */}
                    <div className="Avr-planning-heading">

                        <span className="Avr-planning-eyebrow">
                            Expert Insights
                        </span>

                        <h2 className="Avr-planning-title">
                            Expert Insights from Angela Hughes
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
                                Azamara’s Culinary Experience Is Often Underrated
                            </h3>

                            <p className="Avr-planning-left-body">
                                According to Angela Hughes, one of the biggest misconceptions about Azamara is that travelers underestimate the culinary sophistication onboard.
                            </p>

                            <div className="Avr-planning-alert">

                                <AlertTriangle
                                    size={18}
                                    className="Avr-planning-alert-icon"
                                />

                                <p className="Avr-planning-alert-text">
                                    After decades of luxury cruise experience and extensive global travel, Angela frequently recommends Azamara to travelers seeking authentic, destination-inspired luxury cruising.
                                </p>

                            </div>

                        </div>

                        {/* RIGHT PANEL */}
                        <div className="Avr-planning-right">

                            <p className="Avr-planning-right-intro">
                                Angela often recommends Azamara to travelers who:
                            </p>

                            <div className="Avr-planning-benefits-grid">

                                {[
                                    { icon: <MapPin size={18} />, label: "Want destination immersion" },
                                    { icon: <Ship size={18} />, label: "Prefer smaller ships" },
                                    { icon: <Award size={18} />, label: "Value authentic cuisine" },
                                    { icon: <Users size={18} />, label: "Dislike overcrowded mega-ships" },
                                    { icon: <Star size={18} />, label: "Appreciate relaxed luxury" },
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

                            <p
                                className="Avr-planning-right-intro"
                                style={{ marginTop: "28px" }}
                            >
                                Her clients frequently report that Azamara’s dining experience feels more intimate and authentic than many larger luxury cruise competitors.
                            </p>

                        </div>

                    </div>
                </div>
            </section>


            {/* ── COMMON MISTAKES ───────────────────────────────────────── */}
            <section className="Lfsg-section Lfsg-bg-dark" id="Lfsg-mistakes">

                <div className="Lfsg-container">

                    <div className="Lfsg-section-header">
                        <h2 className="Lfsg-h2-white">
                            Common Azamara Dining Mistakes to Avoid
                        </h2>

                        <div className="Lfsg-accent-line-white" />
                    </div>

                    <div className="Lfsg-mistakes-grid">

                        {[
                            {
                                title: "Waiting Too Long for Specialty Reservations",
                                desc: "Popular dining times book quickly.",
                            },

                            {
                                title: "Assuming the Buffet Is Generic",
                                desc: "Windows Café is significantly better than most mainstream cruise buffets.",
                            },

                            {
                                title: "Overlooking Regional Menus",
                                desc: "Destination-focused cuisine is one of Azamara’s strengths.",
                            },

                            {
                                title: "Not Communicating Dietary Needs Early",
                                desc: "Azamara accommodates many dietary preferences very well when informed ahead of time.",
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

            {/* AZAMARA DIETARY ACCOMMODATIONS */}
            <section className="adg-section" id="adg-dietary-accommodations" style={{ backgroundColor: "var(--bg-white)" }}>
                <div className="adg-container">
                    <div className="adg-section-header">
                        <h2 className="adg-h2">Azamara Dietary Accommodations</h2>
                        <div className="adg-accent-line"></div>
                    </div>

                    <div className="adg-intro-wrapper" style={{ marginBottom: '40px' }}>
                        <p className="adg-intro-text">
                            Azamara performs well with:
                        </p>
                    </div>

                    <div className="adg-appeals-feature-grid" style={{ marginBottom: '40px' }}>
                        {[
                            "Gluten-free dining",
                            "Vegetarian cuisine",
                            "Vegan meals",
                            "Food allergies",
                            "Low-sodium requests"
                        ].map((item, i) => (
                            <div key={i} className="adg-appeals-feature-card">
                                <div className="adg-appeals-feature-icon">
                                    <Check size={24} />
                                </div>
                                <h4 className="adg-appeals-feature-label">{item}</h4>
                            </div>
                        ))}
                    </div>

                    <div className="adg-intro-wrapper">
                        <p className="adg-intro-text">
                            Advance communication improves customization significantly.
                        </p>
                    </div>
                </div>
            </section>


            {/* BEST AZAMARA ITINERARIES FOR FOOD LOVERS */}
            <section className="adg-section adg-bg-soft" id="adg-food-itineraries">
                <div className="adg-container">
                    <div className="adg-section-header">
                        <h2 className="adg-h2">Best Azamara Itineraries for Food Lovers</h2>
                        <div className="adg-accent-line"></div>
                    </div>

                    <div className="adg-split-layout">

                        {/* Left Content Column */}
                        {/* Left Content Column */}
                        <div className="adg-content-card-side">
                            <img
                                src={AzamaraDietaryImage}
                                alt="Culinary dining experience"
                                className="adg-side-image"
                            />
                            <div className="adg-info-card">
                                <div className="adg-card-meta">
                                    <Utensils size={28} />
                                    <span className="adg-meta-label">Culinary Focus</span>
                                </div>
                                <p className="adg-card-lead">
                                    Top culinary-focused Azamara itineraries include:
                                </p>
                                <div className="adg-card-divider"></div>
                                <p className="adg-card-subtext">
                                    These itineraries allow regional cuisine onboard to align beautifully with destinations visited.
                                </p>
                            </div>
                        </div>
                        {/* Right Destinations Grid Column */}
                        <div className="adg-list-side">
                            {[
                                { title: "Mediterranean voyages", icon: <Compass size={20} /> },
                                { title: "Spain & Portugal sailings", icon: <MapPin size={20} /> },
                                { title: "Greek Isles cruises", icon: <Ship size={20} /> },
                                { title: "Italy-focused itineraries", icon: <Star size={20} /> },
                                { title: "South American wine-region cruises", icon: <Wine size={20} /> }
                            ].map((item, i) => (
                                <div key={i} className="adg-list-item-card">
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



            {/* ANGELA HUGHES AUTHORITY BOX */}
            <section className="Adg-expert-section" id="Asc-expert-insight">
                <div className="Asc-container">

                    {/* TOP HEADING */}
                    <div className="Adg-expert-heading">
                        <span className="Adg-expert-eyebrow">Luxury Travel Authority</span>

                        <h2 className="Adg-expert-title">
                            Meet Angela Hughes
                        </h2>

                        <div className="Adg-expert-divider"></div>
                    </div>

                    {/* MAIN GRID */}
                    <div className="Adg-expert-grid">

                        {/* LEFT SIDE: Portrait + Name */}
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
                                    "Angela Hughes is one of the travel industry’s most respected luxury travel advisors and cruise experts."
                                </blockquote>

                            </div>

                            {/* CREDENTIALS */}
                            <div className="Adg-expert-credentials-box">

                                <h4 className="Adg-expert-credentials-title">
                                    <Award size={16} />
                                    Angela Hughes' Credentials
                                </h4>

                                <div className="Adg-expert-credentials-grid">

                                    {[
                                        { icon: <Award size={16} />, label: "CEO of Trips & Ships Luxury Travel" },
                                        { icon: <Award size={16} />, label: "Founder of Luxury Travel University" },
                                        { icon: <Star size={16} />, label: "Over 40 Years in the Travel Industry" },
                                        { icon: <MapPin size={16} />, label: "Traveled to More Than 121 Countries" },
                                        { icon: <Users size={16} />, label: "Global Luxury Travel Speaker and Trainer" },
                                        { icon: <Users size={16} />, label: "Weekly Travel Industry Columnist" },
                                        { icon: <Award size={16} />, label: "Travel Leaders Network Advisory Board Member" },
                                        { icon: <Award size={16} />, label: "2024 Luxury Travel Influencer of the Year" },
                                        { icon: <Star size={16} />, label: "Most Influential Women in Travel 2026 by TravelPulse" },
                                        { icon: <Award size={16} />, label: "Featured in Major Travel Publications Globally" },
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

                            {/* SPECIALTIES */}
                            <div
                                className="Adg-expert-credentials-box"
                                style={{ marginTop: "24px" }}
                            >

                                <h4 className="Adg-expert-credentials-title">
                                    <Star size={16} />
                                    Angela Specializes In
                                </h4>

                                <div className="Adg-expert-credentials-grid">

                                    {[
                                        "Luxury cruises",
                                        "Expedition travel",
                                        "Safaris",
                                        "River cruises",
                                        "Premium customized travel experiences",
                                    ].map((item, i) => (

                                        <div className="Adg-expert-list-item" key={i}>

                                            <span className="Adg-expert-list-icon">
                                                <Star size={16} />
                                            </span>

                                            <span className="Adg-expert-list-label">
                                                {item}
                                            </span>

                                        </div>

                                    ))}

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
                        <h2 className="Asc-h2">Is Azamara Right for You?</h2>
                        <div className="Asc-accent-line"></div>
                    </div>

                    <div className="Asc-who-grid">

                        {/* BEST FOR */}
                        <div className="Asc-who-card Asc-who-yes">

                            <h3 className="Asc-who-title">
                                Best For Travelers Who:
                            </h3>

                            <ul className="Asc-who-list">
                                {[
                                    "Love destination immersion",
                                    "Prefer smaller luxury ships",
                                    "Value cuisine and wine",
                                    "Want relaxed elegance",
                                    "Appreciate cultural experiences",
                                ].map((item, i) => (
                                    <li key={i}>
                                        <Check size={16} className="Asc-icon-green" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                        </div>

                        {/* NOT IDEAL FOR */}
                        <div className="Asc-who-card Asc-who-no">

                            <h3 className="Asc-who-title">
                                Not Ideal For Travelers Who:
                            </h3>

                            <ul className="Asc-who-list">
                                {[
                                    "Want massive entertainment venues",
                                    "Prefer high-energy nightlife",
                                    "Need waterparks and mega-ship attractions",
                                    "Want extremely formal ultra-luxury environments",
                                ].map((item, i) => (
                                    <li key={i}>
                                        <Minus size={16} className="Asc-icon-muted" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

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
                                <h2 className="Asc-help-h2">Plan Your Perfect Azamara Cruise</h2>
                                <div className="Asc-help-accent"></div>
                            </div>

                            <div className="Asc-help-grid">
                                <div className="Asc-help-info">
                                    <p className="Asc-help-intro">
                                        Choosing the right Azamara itinerary, ship, suite category, and dining strategy can dramatically shape your cruise experience.
                                    </p>

                                    <p className="Asc-help-intro">
                                        At Trips & Ships Luxury Travel, Angela Hughes and her team provide personalized luxury cruise planning tailored to your travel style, culinary preferences, and destination goals.
                                    </p>

                                    <div className="Asc-help-btn-container">
                                        <button className="Asc-help-cta-btn">
                                            Start Planning Your Azamara Cruise
                                            <ArrowRight size={18} />
                                        </button>
                                    </div>
                                </div>

                                <div className="Asc-help-list-box">
                                    <h3 className="Asc-help-list-title">Whether you are seeking:</h3>

                                    <ul className="Asc-help-bullets">
                                        {[
                                            "Romantic Mediterranean sailings",
                                            "Culinary-focused voyages",
                                            "Luxury small-ship cruising",
                                            "Extended destination immersion",
                                            "Premium suite experiences",
                                        ].map((item, i) => (
                                            <li key={i}>
                                                <div className="Asc-bullet-icon">
                                                    <Check size={14} strokeWidth={3} />
                                                </div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <p className="Asc-help-intro" style={{ marginTop: "20px" }}>
                                        Trips & Ships Luxury Travel can help create a seamless luxury journey from beginning to end.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AzamaraDiningGuide;