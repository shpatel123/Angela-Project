import { useState, useEffect } from "react";
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
    HeartPulse,
    BedDouble,
    Waves,
    Wine,
    Music,
    Utensils,
    X,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

// import FleetMozart from "../../assets/RiversideLuxuryCruises/riverside-mozart-danube.jpg";
// import FleetDebussy from "../../assets/RiversideLuxuryCruises/riverside-debussy-rhine.jpg";
// import FleetRavel from "../../assets/RiversideLuxuryCruises/riverside-ravel-rhone.jpg";

/* ── Placeholder image imports ────────────────────────────────────
   Replace these with real Riverside Luxury Cruises photography once
   available. Paths assume a new /assets/IsRiversideWorthIt folder. */
// import HeroImage1 from "../../assets/IsRiversideWorthIt/riverside-ship-danube-sunset.jpg";
// import HeroImage2 from "../../assets/IsRiversideWorthIt/riverside-suite-balcony.jpg";
// import HeroImage3 from "../../assets/IsRiversideWorthIt/riverside-rhine-castle-view.jpg";
// import RiversideSuite from "../../assets/IsRiversideWorthIt/riverside-suite-living-area.jpg";
// import RiversideLounge from "../../assets/IsRiversideWorthIt/riverside-lounge-deck.jpg";
// import RiversideEvening from "../../assets/IsRiversideWorthIt/riverside-evening-lounge.jpg";
// import RiversideDining from "../../assets/IsRiversideWorthIt/riverside-gourmet-dining.jpg";
// import RiversideDanube from "../../assets/IsRiversideWorthIt/riverside-danube-vienna.jpg";
// import RiversideRhine from "../../assets/IsRiversideWorthIt/riverside-rhine-vineyards.jpg";
// import RiversideCrew from "../../assets/IsRiversideWorthIt/riverside-crew-service.jpg";
// import RiversideShip from "../../assets/IsRiversideWorthIt/riverside-ship-exterior.jpg";

import { Helmet } from "react-helmet-async";
import "../RiversideLuxuryCruisesReviews/RiversideLuxuryCruisesReviews.css";
import "../RiversideLuxuryCruises/RiversideLuxuryCruises.css";

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
            "@id": "https://www.tripsandships.com/is-riverside-worth-it/#webpage",
            name: "Is Riverside Luxury Cruises Worth It? | Honest Luxury River Cruise Review",
            url: "https://www.tripsandships.com/is-riverside-worth-it",
            description:
                "Is Riverside Luxury Cruises worth the price? Discover what makes Riverside different, what's included, who should sail, pricing, pros and cons, and whether it's the right luxury river cruise for you.",
        },
        {
            "@type": "Article",
            "@id": "https://www.tripsandships.com/is-riverside-worth-it/#article",
            headline: "Is Riverside Luxury Cruises Worth It? | Riverside Luxury Cruises Review",
            description:
                "An honest look at Riverside Luxury Cruises, covering spacious suites, gourmet dining, personalized service, European itineraries, pros and cons, and how it compares to other luxury river cruise lines.",
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
            "@type": "Review",
            "@id": "https://www.tripsandships.com/is-riverside-worth-it/#review",
            itemReviewed: {
                "@type": "TouristTrip",
                name: "Riverside Luxury Cruises",
            },
            reviewRating: {
                "@type": "Rating",
                ratingValue: "4.9",
                bestRating: "5",
            },
            author: {
                "@type": "Person",
                name: "Angela Hughes",
            },
            publisher: {
                "@type": "Organization",
                name: "Trips & Ships Luxury Travel",
            },
        },
        {
            "@type": "BreadcrumbList",
            "@id":
                "https://www.tripsandships.com/is-riverside-worth-it/#breadcrumb",
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
                    name: "River Cruise Guides",
                    item: "https://www.tripsandships.com/river-cruise-guides",
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: "Riverside Luxury Cruises Reviews",
                    item: "https://www.tripsandships.com/riverside-luxury-cruises-reviewss",
                },
                {
                    "@type": "ListItem",
                    position: 4,
                    name: "Is Riverside Worth It?",
                    item: "https://www.tripsandships.com/is-riverside-worth-it",
                },
            ],
        },
        {
            "@type": "TouristTrip",
            "@id": "https://www.tripsandships.com/is-riverside-worth-it/#trip",
            name: "Riverside Luxury Cruises European River Cruise Experience",
            description:
                "Boutique luxury river cruising with spacious suite accommodations, gourmet dining, personalized service, and immersive European itineraries on the Danube, Rhine, Rhône, Main, and Moselle Rivers.",
            provider: {
                "@type": "Organization",
                name: "Riverside Luxury Cruises",
            },
        },
        {
            "@type": "Service",
            "@id": "https://www.tripsandships.com/is-riverside-worth-it/#service",
            serviceType: "Luxury River Cruise Vacation Planning",
            provider: {
                "@type": "TravelAgency",
                name: "Trips & Ships Luxury Travel",
            },
            areaServed: "Worldwide",
            description:
                "Personalized planning for Riverside Luxury Cruises sailings, including itinerary selection, suite recommendations, and exclusive promotions.",
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/is-riverside-worth-it/#itemlist",
            name: "Is Riverside Luxury Cruises Worth It? — What This Guide Covers",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Quick Answer" },
                { "@type": "ListItem", position: 2, name: "What Makes Riverside Different?" },
                { "@type": "ListItem", position: 3, name: "What Is Included?" },
                { "@type": "ListItem", position: 4, name: "Exceptional Dining" },
                { "@type": "ListItem", position: 5, name: "Personalized Service" },
                { "@type": "ListItem", position: 6, name: "Beautiful European Itineraries" },
                { "@type": "ListItem", position: 7, name: "Pros & Cons of Riverside Luxury Cruises" },
                { "@type": "ListItem", position: 8, name: "Spacious Suites That Stand Out" },
                { "@type": "ListItem", position: 9, name: "Who Should Sail Riverside?" },
                { "@type": "ListItem", position: 10, name: "Riverside vs. Other Luxury River Cruise Lines" },
                { "@type": "ListItem", position: 11, name: "Is Riverside Worth the Price?" },
                { "@type": "ListItem", position: 12, name: "Why Book Through a Luxury Travel Advisor?" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/is-riverside-worth-it/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Is Riverside Luxury Cruises really worth the money?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, particularly for travelers who value spacious accommodations, personalized service, and boutique luxury over large-scale entertainment.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What makes Riverside different from other river cruise lines?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Its focus on spacious suites, boutique hospitality, and a highly personalized guest experience across a small fleet of three ships.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Riverside include excursions?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Most itineraries include selected guided shore excursions, with additional optional experiences available.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Riverside all-inclusive?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Most cruises include accommodations, gourmet dining, beverages with meals, Wi-Fi, and selected excursions. Specific inclusions vary by itinerary.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which rivers does Riverside sail?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The cruise line primarily sails the Danube, Rhine, Rhône, Main, and Moselle rivers.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Riverside good for first-time river cruisers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Its relaxed atmosphere and exceptional service make it an excellent introduction to luxury river cruising.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is Riverside suitable for families?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "While families are welcome, Riverside is designed primarily for adult travelers seeking a peaceful luxury experience.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which Riverside ship is best?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Each ship offers a similar luxury standard. The best choice depends on the itinerary and destinations you want to explore.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does Riverside compare with Scenic or Uniworld?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Riverside offers a more boutique experience with larger suites, while Scenic and Uniworld provide larger fleets and different all-inclusive features.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should I book through a travel advisor?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. A luxury travel advisor can help compare itineraries, recommend the right ship, coordinate travel arrangements, and identify available promotions.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Riverside offer butler service in all suites?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, Riverside Luxury Cruises provides butler service for all guests across every suite category, ensuring personalized attention, packing assistance, and customized room service.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the dress code onboard Riverside Luxury Cruises?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The onboard dress code is resort casual by day and elegant casual in the evening (no formal wear required). This fits the relaxed yet upscale boutique hotel atmosphere.",
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
            q: "Is Riverside Luxury Cruises really worth the money?",
            a: "Yes, particularly for travelers who value spacious accommodations, personalized service, and boutique luxury over large-scale entertainment.",
        },
        {
            q: "What makes Riverside different from other river cruise lines?",
            a: "Its focus on spacious suites, boutique hospitality, and a highly personalized guest experience across a small fleet of three ships.",
        },
        {
            q: "Does Riverside include excursions?",
            a: "Most itineraries include selected guided shore excursions, with additional optional experiences available.",
        },
        {
            q: "Is Riverside all-inclusive?",
            a: "Most cruises include accommodations, gourmet dining, beverages with meals, Wi-Fi, and selected excursions. Specific inclusions vary by itinerary.",
        },
        {
            q: "Which rivers does Riverside sail?",
            a: "The cruise line primarily sails the Danube, Rhine, Rhône, Main, and Moselle rivers.",
        },
        {
            q: "Is Riverside good for first-time river cruisers?",
            a: "Yes. Its relaxed atmosphere and exceptional service make it an excellent introduction to luxury river cruising.",
        },
        {
            q: "Is Riverside suitable for families?",
            a: "While families are welcome, Riverside is designed primarily for adult travelers seeking a peaceful luxury experience.",
        },
        {
            q: "Which Riverside ship is best?",
            a: "Each ship offers a similar luxury standard. The best choice depends on the itinerary and destinations you want to explore.",
        },
        {
            q: "How does Riverside compare with Scenic or Uniworld?",
            a: "Riverside offers a more boutique experience with larger suites, while Scenic and Uniworld provide larger fleets and different all-inclusive features.",
        },
        {
            q: "Should I book through a travel advisor?",
            a: "Yes. A luxury travel advisor can help compare itineraries, recommend the right ship, coordinate travel arrangements, and identify available promotions.",
        },
        {
            q: "Does Riverside offer butler service in all suites?",
            a: "Yes, Riverside Luxury Cruises provides butler service for all guests across every suite category, ensuring personalized attention, packing assistance, and customized room service.",
        },
        {
            q: "What is the dress code onboard Riverside Luxury Cruises?",
            a: "The onboard dress code is resort casual by day and elegant casual in the evening (no formal wear required). This fits the relaxed yet upscale boutique hotel atmosphere.",
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

/* ── Main Component ──────────────────────────────────────────────── */
const IsRiversideWorthIt = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [readMore, setReadMore] = useState(false);
    const [readMoreDestination, setReadMoreDestination] = useState(false);

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
                    Is Riverside Luxury Cruises Worth It? | Honest Luxury River Cruise Review
                </title>
                <meta
                    name="title"
                    content="Is Riverside Worth It? | Riverside Luxury Cruises Review"
                />
                <meta
                    name="description"
                    content="Is Riverside Luxury Cruises worth the price? Discover what makes Riverside different, what's included, who should sail, pricing, pros and cons, and whether it's the right luxury river cruise for you."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ───────────────────────────────────────────────────── */}
            <section className="Scenic_hero_section">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`Scenic_hero_bg ${index === currentSlide ? "active" : ""
                            }`}
                        style={{ backgroundImage: `url(${img})` }}
                    ></div>
                ))}

                <div className="Scenic_hero_overlay"></div>

                <div className="Scenic_hero_content">
                    <h1>Is Riverside Luxury Cruises Worth It?</h1>

                    <p>
                        If you're considering a luxury European river cruise, one of the
                        biggest questions you'll ask is: is Riverside Luxury Cruises
                        really worth the premium price?
                    </p>

                    <p>
                        For many travelers, the answer is yes—especially if you value
                        spacious suites, personalized service, exceptional dining, and an
                        intimate onboard atmosphere over large ships and nonstop
                        entertainment.
                    </p>

                    {readMore && (
                        <>
                            <p>
                                Riverside has quickly established itself as one of Europe's
                                premier luxury river cruise brands by offering boutique
                                hospitality aboard beautifully restored ships. Rather than
                                focusing on quantity, Riverside emphasizes comfort, elegance,
                                and unforgettable experiences along the continent's most
                                iconic rivers.
                            </p>

                            <p>
                                This guide explores who Riverside is best suited for, what's
                                included, how it compares with other luxury river cruise
                                lines, and whether it's the right investment for your next
                                vacation.
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

                    <div className="rlc-page-cta-container" style={{ marginTop: "24px" }}>
                        <Link to="/contact" className="rlc-page-cta-btn rlc-btn-light" style={{ textDecoration: "none" }}>
                            Start Planning Your Riverside Cruise
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── QUICK REVIEW ─────────────────────────────────────────────── */}
            <section
                className="rlc-qa-section"
                id="quick-review"
            >
                <div className="rlc-qa-container">
                    <div className="rlc-qa-card-wrapper">
                        <h2 className="rlc-qa-title">Quick Answer</h2>
                        <div className="rlc-qa-accent"></div>

                        <p className="rlc-qa-intro">
                            Yes—Riverside Luxury Cruises is worth it if you prioritize:
                        </p>

                        <ul className="rlc-qa-list">
                            {[
                                "Spacious luxury suites",
                                "Boutique hotel-style service",
                                "Gourmet dining",
                                "Elegant ship design",
                                "Personalized hospitality",
                                "Relaxed European travel",
                            ].map((item, i) => (
                                <li key={i} className="rlc-qa-item">
                                    <span className="rlc-qa-icon-wrap">
                                        <Check size={16} strokeWidth={3} className="rlc-qa-check-icon" />
                                    </span>
                                    <span className="rlc-qa-text">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="rlc-qa-outro">
                            It may not be the best choice if you're looking for family entertainment, budget pricing, or action-packed onboard activities.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── WHAT MAKES RIVERSIDE DIFFERENT ───────────────────────── */}
            <section
                className="rlc-diff-section"
                id="what-is-riverside"
            >
                <div className="rlc-diff-container">
                    <h2 className="rlc-diff-title">
                        What Makes Riverside Different?
                    </h2>
                    <div className="rlc-diff-accent"></div>

                    <p className="rlc-diff-intro">
                        Unlike many river cruise companies that operate large fleets, Riverside currently focuses on just three luxury ships:
                    </p>

                    <div className="rlc-diff-ships-grid">
                        <div className="rlc-diff-ship-card">
                            <div className="rlc-diff-ship-img-wrap">
                                <img
                                    // src={FleetMozart}
                                    alt="Riverside Mozart"
                                    className="rlc-diff-ship-img"
                                />
                            </div>
                            <h3 className="rlc-diff-ship-name">Riverside Mozart</h3>
                        </div>

                        <div className="rlc-diff-ship-card">
                            <div className="rlc-diff-ship-img-wrap">
                                <img
                                    // src={FleetDebussy}
                                    alt="Riverside Debussy"
                                    className="rlc-diff-ship-img"
                                />
                            </div>
                            <h3 className="rlc-diff-ship-name">Riverside Debussy</h3>
                        </div>

                        <div className="rlc-diff-ship-card">
                            <div className="rlc-diff-ship-img-wrap">
                                <img
                                    // src={FleetRavel}
                                    alt="Riverside Ravel"
                                    className="rlc-diff-ship-img"
                                />
                            </div>
                            <h3 className="rlc-diff-ship-name">Riverside Ravel</h3>
                        </div>
                    </div>

                    <p className="rlc-diff-mid">
                        This smaller fleet allows the company to deliver a highly personalized guest experience with exceptional attention to detail.
                    </p>

                    <div className="rlc-diff-outro">
                        <p className="rlc-diff-outro-text">
                            Instead of feeling like a traditional cruise ship, Riverside feels more like staying at a luxury boutique hotel that happens to travel through Europe's most beautiful waterways.
                        </p>
                    </div>
                </div>
            </section>


            {/* ── WHAT IS INCLUDED ─────────────────────────────────────────── */}
            <section
                className="rlc-inc-section"
                id="what-is-included"
            >
                <div className="rlc-inc-container">
                    <div className="rlc-inc-grid-split">
                        <div className="rlc-inc-left">
                            <h2 className="rlc-inc-title">What Is Included?</h2>
                            <div className="rlc-inc-accent" style={{marginLeft: '15px'}}></div>

                            <p className="rlc-inc-intro">
                                Depending on your itinerary, Riverside cruises typically include:
                            </p>

                            <ul className="rlc-inc-list">
                                {[
                                    "Luxury suite accommodations",
                                    "Gourmet breakfast, lunch, and dinner",
                                    "Wine, beer, and soft drinks with meals",
                                    "Complimentary Wi-Fi",
                                    "Selected guided shore excursions",
                                    "Onboard entertainment",
                                    "Fitness facilities",
                                    "Personalized concierge service",
                                ].map((item, i) => (
                                    <li key={i} className="rlc-inc-item">
                                        <span className="rlc-inc-icon-wrap">
                                            <Check size={16} strokeWidth={3} className="rlc-inc-check-icon" />
                                        </span>
                                        <span className="rlc-inc-item-text">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="rlc-inc-outro-box">
                                <p className="rlc-inc-outro-text">
                                    Some premium experiences and specialty excursions may be available for an additional cost.
                                </p>
                            </div>
                        </div>

                        <div className="rlc-inc-right">
                            <div className="rlc-inc-image-collage">
                                <div className="rlc-inc-img-main-wrap">
                                    <img
                                        // src={HeroImage1}
                                        alt="Riverside Ship"
                                        className="rlc-inc-collage-img"
                                    />
                                </div>
                                <div className="rlc-inc-img-sub-grid">
                                    <div className="rlc-inc-img-sub-wrap">
                                        <img
                                            // src={HeroImage2}
                                            alt="Riverside Suite Balcony"
                                            className="rlc-inc-collage-img"
                                        />
                                    </div>
                                    <div className="rlc-inc-img-sub-wrap">
                                        <img
                                            // src={HeroImage3}
                                            alt="Rhine Castle View"
                                            className="rlc-inc-collage-img"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DINING EXPERIENCE ────────────────────────────────────────── */}
            <section className="dmg-info-section dmg-bg-white" id="dining-experience">
                <div className="dmg-info-container">
                    <div className="dmg-info-grid">
                        <div className="dmg-info-media">
                            <div className="dmg-media-wrapper">
                                <img
                                    //   src={RiversideDining}
                                    alt="Gourmet dining aboard Riverside Luxury Cruises"
                                    className="dmg-media-img"
                                    style={{ height: "73vh" }}
                                />

                                <div className="dmg-media-overlay"></div>

                                <div className="dmg-media-badge">
                                    <span>Fresh Regional Ingredients • Flexible Dining</span>
                                </div>
                            </div>
                        </div>

                        <div className="dmg-info-content">
                            <h2 className="dmg-info-title">Exceptional Dining</h2>

                            <div className="dmg-info-accent"></div>

                            <p className="dmg-info-lead">
                                Dining is consistently one of Riverside's highest-rated
                                experiences. Meals reflect the destinations visited during
                                the cruise, creating an authentic culinary journey through
                                Europe.
                            </p>

                            <div className="dmg-info-features dmg-info-features-scrollable">
                                <div className="dmg-info-feature-item">
                                    <div className="dmg-info-icon-box">
                                        <Utensils size={16} />
                                    </div>

                                    <div className="dmg-info-feature-texts">
                                        <h3 className="dmg-info-feature-title">
                                            Gourmet Multi-Course Dinners
                                        </h3>

                                        <p className="dmg-info-feature-desc">
                                            Regional specialties and fresh seasonal ingredients
                                            served with premium wines.
                                        </p>
                                    </div>
                                </div>

                                <div className="dmg-info-feature-item">
                                    <div className="dmg-info-icon-box">
                                        <Wine size={16} />
                                    </div>

                                    <div className="dmg-info-feature-texts">
                                        <h3 className="dmg-info-feature-title">Local Wines</h3>

                                        <p className="dmg-info-feature-desc">
                                            Thoughtfully selected local wines complement each
                                            destination's culinary traditions.
                                        </p>
                                    </div>
                                </div>

                                <div className="dmg-info-feature-item">
                                    <div className="dmg-info-icon-box">
                                        <Check size={16} />
                                    </div>

                                    <div className="dmg-info-feature-texts">
                                        <h3 className="dmg-info-feature-title">
                                            Fresh Pastries &amp; Artisan Desserts
                                        </h3>

                                        <p className="dmg-info-feature-desc">
                                            Seasonal ingredients and a flexible dining atmosphere
                                            throughout the day.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="rlc-page-cta-container rlc-align-left" style={{ marginTop: "24px" }}>
                                <Link to="/contact" className="rlc-page-cta-btn" style={{ textDecoration: "none" }}>
                                    Start Planning Your Riverside Cruise
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PERSONALIZED SERVICE ────────────────────────────────────── */}
            <section
                className="ugt-components-section"
                id="personalized-service"
                style={{ backgroundColor: "var(--bg-soft)" }}
            >
                <div className="ugt-components-container">
                    <div className="ugt-components-header">
                        <h2 className="ugt-components-title">Personalized Service</h2>
                        <div className="adg-c-accent-line"></div>
                    </div>

                    <div className="ugt-components-list">
                        <div className="ugt-component-row">
                            <div className="ugt-component-image-wrapper">
                                <div className="ugt-component-image-container">
                                    <img
                                        // src={RiversideCrew}
                                        alt="Attentive crew service aboard Riverside Luxury Cruises"
                                        className="ugt-component-image"
                                    />
                                </div>
                            </div>

                            <div className="ugt-component-content">
                                <p className="ugt-component-text">
                                    Luxury isn't just about beautiful ships—it's about how
                                    you're treated. <strong>Riverside's</strong> crew-to-guest
                                    ratio allows staff to provide individualized attention
                                    throughout the voyage.
                                </p>

                                <div className="ugt-questions-box">
                                    <span className="ugt-questions-title">
                                        Riverside excels at:
                                    </span>

                                    <ul className="ugt-questions-list">
                                        {[
                                            "Learning guest preferences",
                                            "Providing attentive service",
                                            "Creating a relaxed atmosphere",
                                            "Offering thoughtful personal touches",
                                            "Delivering boutique hospitality",
                                        ].map((item, idx) => (
                                            <li key={idx} className="ugt-question-item">
                                                <Check size={16} className="ugt-question-icon" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <p
                                    className="ugt-component-footer"
                                    style={{
                                        backgroundColor: "var(--bg-white)",
                                        padding: "12px",
                                        borderRadius: "6px",
                                    }}
                                >
                                    The intimate size of the ships creates a welcoming
                                    environment where guests feel genuinely cared for.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* ── DESTINATIONS & ITINERARIES ──────────────────────────────── */}
            <section className="luc-why-section" id="destinations-itineraries">
                <div className="luc-why-container">
                    <div className="luc-why-images">
                        <div className="luc-why-img-main-wrap" style={{ color: "#fff" }}>
                            <img
                                // src={RiversideDanube}
                                alt="Riverside Luxury Cruises sailing the Danube River"
                                className="luc-why-img-main"
                            />
                            <div className="luc-why-img-overlay"></div>
                        </div>

                        <div className="luc-why-img-accent-wrap" style={{ color: "#fff" }}>
                            <img
                                // src={RiversideRhine}
                                alt="Vineyards and castles along the Rhine River"
                                className="luc-why-img-accent"
                            />

                            <div className="luc-why-img-badge">
                                <span className="luc-why-badge-num">5</span>
                                <span className="luc-why-badge-text">European Rivers</span>
                            </div>
                        </div>
                    </div>

                    <div className="luc-why-content">
                        <h2 className="luc-why-title">Beautiful European Itineraries</h2>

                        <div className="aac-accent-line aac-accent-white"></div>

                        <p className="luc-why-intro">
                            Riverside focuses on Europe's most iconic rivers. Guests visit
                            destinations such as Budapest, Vienna, Amsterdam, Strasbourg,
                            Cologne, Lyon, Avignon, Basel, and Passau, combining scenic
                            cruising with rich history, culture, architecture, and regional
                            cuisine.
                        </p>

                        <div className="luc-why-features">
                            {[
                                {
                                    num: "01",
                                    title: "Danube River",
                                    desc: "Explore Vienna, Budapest, Bratislava, and charming riverside villages.",
                                },
                                {
                                    num: "02",
                                    title: "Rhine River",
                                    desc: "Visit castles, vineyards, medieval towns, and picturesque landscapes.",
                                },
                                {
                                    num: "03",
                                    title: "Rhône River",
                                    desc: "Sail through southern France, from Lyon's gastronomy to the Provençal charm of Avignon.",
                                },
                                {
                                    num: "04",
                                    title: "Main River",
                                    desc: "Experience historic cities and scenic countryside.",
                                },
                                {
                                    num: "05",
                                    title: "Moselle River",
                                    desc: "Discover wine villages, rolling vineyards, and peaceful river scenery.",
                                },
                            ]
                                .slice(0, readMoreDestination ? 5 : 2)
                                .map((feat, i) => (
                                    <div key={i} className="luc-why-feature">
                                        <div className="luc-why-feature-num">{feat.num}</div>

                                        <div className="luc-why-feature-body">
                                            <h3 className="luc-why-feature-title">{feat.title}</h3>
                                            <p className="luc-why-feature-desc">{feat.desc}</p>
                                        </div>
                                    </div>
                                ))}
                        </div>

                        <div
                            className="Scenic_readmore_wrapper"
                            style={{ marginTop: "25px", textAlign: "left" }}
                        >
                            <button
                                className="Scenic_readmore_btn"
                                onClick={() => setReadMoreDestination(!readMoreDestination)}
                            >
                                {readMoreDestination ? "Read Less" : "Read More"}
                            </button>
                        </div>

                        <div className="rlc-page-cta-container rlc-align-left" style={{ marginTop: "20px" }}>
                            <Link to="/contact" className="rlc-page-cta-btn" style={{ textDecoration: "none" }}>
                                Start Planning Your Riverside Cruise
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── RIVERSIDE VS. OTHER LUXURY RIVER CRUISE LINES ───────────── */}
            <section
                className="rlc-compare-section"
                id="riverside-vs-other-lines"
            >
                <div className="rlc-compare-container">
                    <div className="rlc-compare-header">
                        <span className="rlc-compare-eyebrow">How Riverside Compares</span>

                        <h2 className="rlc-compare-title">
                            Riverside vs. Other Luxury River Cruise Lines
                        </h2>

                        <div className="rlc-compare-accent"></div>

                        <p className="rlc-compare-intro">
                            Choosing the right river cruise line depends on what matters
                            most to you. Here's how Riverside compares to some of Europe's
                            other well-known luxury river cruise brands.
                        </p>
                    </div>

                    <div className="rlc-compare-grid">
                        {[
                            {
                                title: "Riverside vs. Scenic",
                                text: "Scenic includes more all-inclusive amenities and extensive excursions, while Riverside focuses on spacious accommodations and boutique hospitality.",
                            },
                            {
                                title: "Riverside vs. Uniworld",
                                text: "Uniworld features distinctive ship décor and a larger fleet, while Riverside emphasizes contemporary elegance and larger suites.",
                            },
                            {
                                title: "Riverside vs. Tauck",
                                text: "Tauck excels in guided cultural experiences and exclusive land programs. Riverside prioritizes onboard comfort and relaxation.",
                            },
                            {
                                title: "Riverside vs. Avalon Waterways",
                                text: "Avalon is known for active excursions and Panorama Suites®, while Riverside offers a more premium boutique luxury experience.",
                            },
                        ].map((item, i) => {
                            const [brand1, brand2] = item.title.split(" vs. ");
                            return (
                                <div key={i} className="rlc-compare-card">
                                    <div className="rlc-compare-card-header">
                                        <div className="rlc-compare-badge-wrap">
                                            <span className="rlc-compare-ship-icon">
                                                <Ship size={18} strokeWidth={2} />
                                            </span>
                                        </div>
                                        <h3 className="rlc-compare-card-title">
                                            <span className="rlc-compare-brand-primary">{brand1}</span>
                                            <span className="rlc-compare-vs-badge">vs</span>
                                            <span className="rlc-compare-brand-secondary">{brand2}</span>
                                        </h3>
                                    </div>
                                    <div className="rlc-compare-card-body">
                                        <p className="rlc-compare-card-text">{item.text}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── SPACIOUS SUITES THAT STAND OUT ────────────────────────── */}
            <section className="adg-c-section adg-c-bg-soft" id="all-suite-accommodations">
                <div className="adg-c-container">
                    <div className="adg-c-section-header">
                        <h2 className="adg-c-h2">Spacious Suites That Stand Out</h2>

                        <div className="adg-c-accent-line"></div>

                        <p className="Asc-section-intro">
                            One of Riverside's biggest advantages is its accommodations.
                            Compared with many other river cruise lines, Riverside offers
                            some of the largest suites available on European waterways.
                        </p>
                    </div>

                    <div className="adg-c-overview-layout">
                        <div className="adg-c-overview-icons">
                            {[
                                "King-size beds",
                                "Marble bathrooms",
                                "Spacious living areas",
                                "Luxury linens",
                                "Premium bath amenities",
                                "Beautiful river views",
                            ].map((label, i) => (
                                <div key={i} className="adg-c-overview-item">
                                    <span className="adg-c-overview-icon">
                                        <BedDouble size={16} strokeWidth={2.5} />
                                    </span>

                                    <span className="adg-c-overview-label">{label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="adg-c-overview-right">
                            <div className="adg-c-overview-callout">
                                <div className="adg-c-overview-callout-inner">
                                    <Star size={28} className="adg-c-callout-star" />

                                    <p className="adg-c-callout-text">
                                        If having extra space is important to you, Riverside
                                        delivers exceptional value on the river.
                                    </p>
                                </div>
                            </div>

                            <div className="adg-c-overview-image-wrap" style={{height: ''}}>
                                <img
                                    //   src={RiversideSuite}
                                    alt="Spacious suite aboard Riverside Luxury Cruises"
                                    className="adg-c-overview-img"
                                />

                                <div className="adg-c-overview-img-overlay">
                                    <span className="adg-c-overview-img-label">
                                        Spacious Living • Elegant Comfort
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            {/* ── PROS & CONS OF RIVERSIDE LUXURY CRUISES ──────────────────── */}
            <section className="azs-entertainment-section" id="pros-and-cons">
                <div className="azs-container">
                    <div className="azs-section-header">
                        <h2 className="azs-section-title">Pros &amp; Cons of Riverside Luxury Cruises</h2>

                        <div className="azs-section-accent"></div>

                        <p className="azs-section-subtitle">
                            While Riverside offers exceptional luxury, it may not be ideal
                            for everyone. Here's an honest look at both sides.
                        </p>
                    </div>

                    <div className="azs-entertainment-grid">
                        <div className="azs-entertainment-card azs-azamara-ent">
                            <div className="azs-ent-header">
                                <div className="azs-ent-icon-circle">
                                    <Check size={24} className="azs-ent-icon" />
                                </div>

                                <h3 className="azs-ent-title">Pros</h3>
                            </div>

                            <p className="azs-ent-intro">
                                Riverside earns strong marks for the fundamentals that
                                matter most in luxury river cruising.
                            </p>

                            <div className="azs-ent-body">
                                <h4 className="azs-ent-group-title">What Guests Love:</h4>

                                <ul className="azs-ent-list">
                                    {[
                                        "Spacious Accommodations — among the largest suites in European river cruising",
                                        "Boutique Atmosphere — smaller guest numbers create a more intimate experience",
                                        "Outstanding Service — highly personalized hospitality from a dedicated crew",
                                        "Excellent Cuisine — fresh regional menus paired with local wines",
                                        "Elegant Ships — beautiful contemporary interiors designed for comfort",
                                        "Relaxed Pace — perfect for enjoying the scenery rather than nonstop activities",
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
                                        Rather than focusing on quantity, Riverside emphasizes
                                        comfort, elegance, and unforgettable experiences.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="azs-entertainment-card azs-seabourn-ent">
                            <div className="azs-ent-header">
                                <div className="azs-ent-icon-circle">
                                    <X size={24} className="azs-ent-icon" />
                                </div>

                                <h3 className="azs-ent-title">Cons</h3>
                            </div>

                            <p className="azs-ent-intro">
                                These are not necessarily negatives—they simply reflect
                                Riverside's boutique luxury philosophy.
                            </p>

                            <div className="azs-ent-body">
                                <h4 className="azs-ent-group-title">Potential Drawbacks:</h4>

                                <ul className="azs-ent-list">
                                    {[
                                        "Premium pricing",
                                        "Smaller fleet with fewer itinerary options",
                                        "Limited nightlife",
                                        "Less onboard entertainment than ocean cruises",
                                        "Not designed for young families",
                                    ].map((item, idx) => (
                                        <li key={idx} className="azs-ent-list-item">
                                            <div className="azs-ent-list-icon-wrapper">
                                                <X size={14} className="azs-ent-list-icon" />
                                            </div>

                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="azs-ent-divider"></div>

                                <div className="azs-ent-highlight-box azs-seabourn-ent-highlight">
                                    <p className="azs-ent-highlight-text">
                                        Travelers who prioritize these factors may prefer a
                                        different cruise line.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHO SHOULD SAIL RIVERSIDE ───────────────────────────────── */}
            <section className="Asc-section" id="who-should-sail" style={{ backgroundColor: "var(--bg-soft)" }}>
                <div className="Asc-container">
                    <div className="Asc-section-header">
                        <h2 className="Asc-h2">Who Will Love Riverside?</h2>
                        <div className="Asc-accent-line"></div>

                        <p className="Asc-section-intro">
                            Choosing the right cruise line depends on your travel style and
                            expectations. If you appreciate personalized service and
                            spacious accommodations, Riverside is likely an excellent fit.
                        </p>
                    </div>

                    <div className="Asc-who-grid">
                        <div className="Asc-who-card Asc-who-yes">
                            <h3 className="Asc-who-title">Riverside Is an Excellent Choice For:</h3>

                            <ul className="Asc-who-list">
                                {[
                                    "Couples",
                                    "Luxury travelers",
                                    "Food and wine enthusiasts",
                                    "Retired travelers",
                                    "Honeymooners",
                                    "Anniversary celebrations",
                                    "Experienced cruisers",
                                    "Travelers seeking relaxation",
                                ].map((item, i) => (
                                    <li key={i}>
                                        <Check size={16} className="Asc-icon-green" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="Asc-who-card Asc-who-no">
                            <h3 className="Asc-who-title">Who Might Prefer Another Cruise Line?</h3>

                            <ul className="Asc-who-list">
                                {[
                                    "Prefer highly active vacations",
                                    "Need extensive family entertainment",
                                    "Want the widest range of destinations",
                                    "Are focused primarily on finding the lowest fare",
                                    "Enjoy large-scale onboard productions",
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



            {/* ── IS RIVERSIDE WORTH THE PRICE ─────────────────────────────── */}
            <section
                className="rlc-lc-worth-section"
                id="is-riverside-worth-the-price"
            >
                <div className="rlc-lc-worth-container">
                    <div className="rlc-lc-worth-grid">
                        <div className="rlc-lc-worth-content">
                            <h2 className="rlc-lc-worth-title">Is Riverside Worth the Price?</h2>

                            <div className="rlc-lc-worth-accent"></div>

                            <p className="rlc-lc-worth-lead">
                                If your definition of luxury includes personalized service,
                                spacious accommodations, fine dining, elegant surroundings,
                                quiet relaxation, and scenic European travel, then Riverside
                                offers excellent value.
                            </p>

                            <h3 className="rlc-lc-worth-emphasis-title">The experience emphasizes:</h3>

                            <div className="rlc-lc-worth-emphasis-grid">
                                {[
                                    "Spacious luxury",
                                    "Outstanding cuisine",
                                    "Relaxed travel",
                                    "Exceptional service",
                                    "Beautiful destinations",
                                    "Boutique atmosphere",
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
                                    Rather than packing ships with entertainment venues, Riverside invests in guest comfort, attentive service, and thoughtfully designed experiences.
                                </p>
                            </div>

                            <div className="rlc-page-cta-container rlc-align-left" style={{ marginTop: "24px" }}>
                                <Link to="/contact" className="rlc-page-cta-btn" style={{ textDecoration: "none" }}>
                                    Start Planning Your Riverside Cruise
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>

                        <div className="rlc-lc-worth-media">
                            <div className="rlc-lc-worth-media-wrapper">
                                <img
                                    //   src={RiversideEvening}
                                    alt="Elegant evening lounge aboard Riverside Luxury Cruises"
                                    className="rlc-lc-worth-media-img"
                                />
                                <div className="rlc-lc-worth-media-overlay"></div>

                                <div className="rlc-lc-worth-media-badge">
                                    <span>Understated • Elegant</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHY BOOK THROUGH A LUXURY TRAVEL ADVISOR ────────────────── */}
            <section
                className="Avr-planning-section"
                id="Asc-luxury-travel-advisor"
                style={{ backgroundColor: "var(--bg-soft)" }}
            >
                <div className="Asc-container">
                    <div className="Avr-planning-heading">
                        <span className="Avr-planning-eyebrow">
                            Personalized Trip Planning
                        </span>

                        <h2 className="Avr-planning-title">
                            Why Book Through a <br /> Luxury Travel Advisor?
                        </h2>

                        <div className="Avr-planning-divider"></div>
                    </div>

                    <div className="Avr-planning-grid">
                        <div className="Avr-planning-left">
                            <div className="Avr-planning-left-deco">&ldquo;</div>

                            <h3 className="Avr-planning-left-title">
                                Choose the Riverside Itinerary That Fits You
                            </h3>

                            <p className="Avr-planning-left-body">
                                Booking a luxury river cruise involves more than selecting a
                                departure date. A luxury travel advisor can help you compare
                                itineraries, recommend the right ship, select the best suite,
                                and coordinate every detail of your trip.
                            </p>

                            <div className="Avr-planning-alert">
                                <ShieldCheck size={18} className="Avr-planning-alert-icon" />

                                <p className="Avr-planning-alert-text">
                                    Professional guidance ensures every aspect of your vacation
                                    is tailored to your travel style.
                                </p>
                            </div>
                        </div>

                        <div className="Avr-planning-right">
                            <p className="Avr-planning-right-intro">
                                A knowledgeable travel advisor can assist with:
                            </p>

                            <div className="Avr-planning-benefits-grid">
                                {[
                                    { icon: <Compass size={18} />, label: "Compare itineraries" },
                                    { icon: <Home size={18} />, label: "Recommend the best suite" },
                                    { icon: <Star size={18} />, label: "Explain promotions" },
                                    { icon: <Plane size={18} />, label: "Coordinate flights and hotels" },
                                    { icon: <MapPinned size={18} />, label: "Arrange private transfers" },
                                    { icon: <Sparkles size={18} />, label: "Recommend pre- and post-cruise stays" },
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
                                Professional guidance ensures every aspect of your vacation is
                                tailored to your travel style.
                            </p>
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

            {/* ── FAQ ────────────────────────────────────────────────────── */}
            <section className="Asc-section Asc-bg-white" id="Asc-faq">
                <div className="Asc-container">
                    <div className="Asc-section-header">
                        <h2 className="Asc-h2">Frequently Asked Questions</h2>
                        <div className="Asc-accent-line"></div>
                        <p className="Asc-faq-intro">
                            Everything travelers need to know about Riverside Luxury
                            Cruises before booking their next European river cruise.
                        </p>
                    </div>
                    <FAQ />
                </div>
            </section>

            {/* ── CTA / FINAL THOUGHTS ─────────────────────────────────────── */}
            <section className="Asc-help-section">
                <div className="Asc-help-bg-wrap">
                    <img
                        // src={RiversideShip}
                        alt="Riverside Luxury Cruises ship sailing a European river"
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
                                    Is Riverside Luxury Cruises <br /> Worth It?
                                </h2>
                                <div className="Asc-help-accent"></div>
                            </div>

                            <div className="Asc-help-grid">
                                <div className="Asc-help-info">
                                    <p className="Asc-help-intro">
                                        Riverside Luxury Cruises is absolutely worth
                                        considering for travelers seeking an elegant, boutique
                                        river cruise experience. <br /><br />

                                         Its spacious accommodations, attentive service,
                                                gourmet dining, and thoughtfully designed European
                                                itineraries create a luxury vacation focused on
                                                comfort rather than crowds.
                                        {!readMore && (
                                            <button
                                                onClick={() => setReadMore(true)}
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

                                    {readMore && (
                                        <>
                                            <br />
                                            <p className="Asc-help-intro">
                                                If you're looking for an
                                                intimate river cruise where exceptional hospitality
                                                and beautiful destinations take center stage,
                                                Riverside delivers outstanding value.
                                            </p>
                                            <br />
                                            <p className="Asc-help-intro">
                                                At Trips &amp; Ships Luxury Travel, we'll help you
                                                compare Riverside itineraries, choose the ideal
                                                suite, and create a personalized luxury river cruise
                                                tailored to your travel style.
                                                <button
                                                    onClick={() => setReadMore(false)}
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
                                            Start Planning Your Riverside Cruise
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
                                            "Compare itineraries",
                                            "Recommend the right ship",
                                            "Select the best suite",
                                            "Coordinate flights",
                                            "Arrange hotels",
                                            "Organize transfers",
                                            "Recommend shore excursions",
                                            "Explain promotions and special offers",
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

export default IsRiversideWorthIt;