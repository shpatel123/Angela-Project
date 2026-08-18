import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Plus,
    Minus,
    Check,
    ArrowRight,
    Ship,
    Wine,
    Wifi,
    Compass,
    Sun,
    Gem,
    Award,
    Snowflake,
    Utensils,
    BedDouble,
    Map,
    Sparkles,
    Star,
    MapPin,
    Users,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";
import { Helmet } from "react-helmet-async";
import "../SeabournCruises/SeabournCruises.css";
import "../Seabournships/Seabournships.css";
import "./SeabournFAQs.css";

/* ── Data: Quick FAQ (7 items, shown as an answer-card grid) ─────── */
const quickFaqs = [
    {
        icon: <Gem size={22} />,
        q: "Is Seabourn all-inclusive?",
        a: "Seabourn operates an all-inclusive ultra-luxury cruise experience. Dining, premium beverages, Wi-Fi and gratuities are among the benefits generally included, while certain specialty experiences or optional services may carry additional charges.",
    },
    {
        icon: <Award size={22} />,
        q: "What is Seabourn best known for?",
        a: "Seabourn is particularly known for small-ship luxury, oceanfront suites, personalized service, fine dining, premium beverages, complimentary caviar and a relaxed, yacht-like atmosphere.",
    },
    {
        icon: <Wine size={22} />,
        q: "Does Seabourn include drinks?",
        a: "Yes. Seabourn includes a broad selection of premium wines, spirits, beer and Champagne as part of its onboard experience.",
    },
    {
        icon: <Compass size={22} />,
        q: "Are Seabourn shore excursions included?",
        a: "Seabourn includes selected experiences depending on the itinerary. Its expedition ships also include a broad range of expedition activities. Optional premium experiences may cost extra.",
    },
    {
        icon: <Sun size={22} />,
        q: "Does Seabourn have formal nights?",
        a: "Seabourn generally follows a more relaxed luxury dress philosophy rather than requiring traditional formalwear throughout the cruise.",
    },
    {
        icon: <Wifi size={22} />,
        q: "Does Seabourn have Wi-Fi?",
        a: "Yes. Wi-Fi is included in Seabourn's current onboard offering, with the exact package depending on the voyage and suite.",
    },
    {
        icon: <Snowflake size={22} />,
        q: "Does Seabourn have expedition cruises?",
        a: "Yes. Seabourn operates dedicated expedition ships, including Seabourn Venture and Seabourn Pursuit.",
    },
];

/* ── Data: grouped FAQ sections (57 questions, exact source copy) ── */
const faqCategories = [
    {
        chip: "Cruise Basics",
        title: "Seabourn Cruise Basics",
        bg: "Sbc-bg-white",
        items: [
            { q: "What is Seabourn?", a: "Seabourn is an ultra-luxury cruise line focused on small-ship cruising, personalized service, fine dining, destination experiences and all-inclusive luxury. Its fleet includes traditional ocean ships as well as dedicated expedition ships." },
            { q: "Is Seabourn a luxury cruise line?", a: "Yes. Seabourn operates at the ultra-luxury end of the cruise market. Its experience emphasizes small ships, oceanfront suites, personalized service, fine dining, premium beverages, complimentary caviar, destination-focused experiences and relaxed luxury." },
            { q: "What is Seabourn known for?", a: "Seabourn is especially known for its yacht-like atmosphere, intimate ships, spacious suites, personalized service, premium wines and spirits, fine dining, complimentary caviar, expedition cruising and destination experiences. The overall experience is designed to feel more intimate and personal than a large cruise ship." },
            { q: "Is Seabourn good for first-time luxury cruisers?", a: "Yes. Seabourn can be an excellent introduction to luxury cruising because many of the services that first-time luxury travelers may otherwise need to organize separately are incorporated into the experience. The smaller ships can also make the cruise feel easier to navigate than a very large resort-style vessel." },
            { q: "Is Seabourn good for couples?", a: "Yes. Seabourn is particularly well suited to couples looking for romantic escapes, anniversary trips, honeymoons, quiet luxury, fine dining, small-ship cruising and destination-focused travel." },
        ],
    },
    {
        chip: "Cost & Value",
        title: "Seabourn Cost and Value FAQs",
        bg: "Sbc-bg-soft",
        items: [
            { q: "How much does a Seabourn cruise cost?", a: "There is no single Seabourn cruise price. Fares depend on the ship, suite, destination, sailing date, cruise length, season, demand and promotions. The best way to compare prices is to evaluate the total value of the cruise, not just the advertised fare." },
            { q: "Is Seabourn expensive?", a: "Seabourn is a premium ultra-luxury cruise line, so its fares are generally higher than mainstream and premium cruise lines. However, the fare includes many services and amenities that would be additional expenses on other cruise lines." },
            { q: "Is Seabourn worth the money?", a: "For the right traveler, yes. Seabourn can be particularly valuable if you appreciate personalized service, small ships, premium beverages, fine dining, included Wi-Fi, complimentary caviar, spacious suites and destination experiences. Travelers who don't value these benefits may find the premium less compelling." },
            { q: "Does Seabourn charge extra for gratuities?", a: "Seabourn includes gratuities in its cruise experience. This is one of the benefits of choosing an all-inclusive luxury cruise rather than a cruise where service charges are added throughout the voyage." },
            { q: "Are Seabourn excursions included in the cruise fare?", a: "Some experiences are included, while optional excursions can carry an additional charge. The exact inclusions depend on the itinerary. On expedition voyages, Seabourn includes many expedition experiences as part of the expedition program." },
        ],
    },
    {
        chip: "Inclusions",
        title: "Seabourn Inclusions FAQs",
        bg: "Sbc-bg-white",
        items: [
            { q: "What is included on a Seabourn cruise?", a: "Depending on the voyage, Seabourn's all-inclusive experience generally includes dining, premium wines, spirits, beer, Champagne, Wi-Fi, gratuities, in-suite dining, entertainment, selected shore experiences and expedition activities on applicable expedition voyages. Optional premium experiences may cost extra." },
            { q: "Are alcoholic drinks included on Seabourn?", a: "Yes. Seabourn includes a broad selection of alcoholic beverages, including wine, Champagne, beer, spirits and cocktails. The line is particularly attractive to travelers who enjoy premium beverages without constantly adding drinks to their onboard account." },
            { q: "Is Champagne included on Seabourn?", a: "Yes. Champagne is included as part of Seabourn's beverage offering. Specific brands and availability can vary." },
            { q: "Is caviar included on Seabourn?", a: "Yes. Complimentary caviar is one of the experiences associated with Seabourn's luxury offering. This is a distinctive feature of the brand and one reason food-focused travelers often consider Seabourn." },
            { q: "Is Wi-Fi free on Seabourn?", a: "Seabourn includes Wi-Fi as part of its current onboard offering. The exact internet package and limitations can vary according to the sailing and suite category." },
            { q: "Is room service included on Seabourn?", a: "Yes. Seabourn offers in-suite dining, including the ability to enjoy meals in your suite. This is particularly appealing when you want a quiet breakfast or dinner without visiting a restaurant." },
        ],
    },
    {
        chip: "Ships",
        title: "Seabourn Ships FAQs",
        bg: "Sbc-bg-soft",
        items: [
            { q: "How many ships does Seabourn have?", a: "Seabourn operates a small fleet of luxury ocean and expedition ships. Because the fleet is relatively intimate compared with mainstream cruise companies, the individual ship can have a major impact on the experience." },
            { q: "Which are Seabourn's expedition ships?", a: "Seabourn's dedicated expedition ships include Seabourn Venture and Seabourn Pursuit. These ships are designed for remote destinations and expedition-style travel." },
            { q: "Are Seabourn ships small?", a: "Yes. Small-ship cruising is a major part of Seabourn's identity. Smaller ships generally mean fewer passengers, more intimate public spaces, easier navigation, more personalized interactions and access to smaller ports on selected itineraries." },
            { q: "Which Seabourn ship is best?", a: "There is no single best Seabourn ship. The right ship depends on the itinerary and experience you want. For traditional luxury cruising, compare the ocean ships. For Antarctica and other remote destinations, compare Seabourn Venture and Seabourn Pursuit." },
        ],
    },
    {
        chip: "Suites",
        title: "Seabourn Suites FAQs",
        bg: "Sbc-bg-white",
        items: [
            { q: "Does Seabourn have suites?", a: "Yes. Seabourn is an all-suite cruise line. Its accommodations range from entry-level suites to substantially larger premium suites." },
            { q: "Do Seabourn suites have balconies?", a: "Many Seabourn suites feature private verandas. The exact configuration depends on the ship and suite category. Always check the deck plan before booking if a balcony is essential." },
            { q: "Which Seabourn suite is best?", a: "The best suite depends on your priorities. For value, consider an entry-level oceanview or veranda suite. For more space, consider a Penthouse-level suite. For maximum luxury, look at the largest premium suites, including Owner's Suite categories where available." },
            { q: "Do Seabourn suites have a minibar?", a: "Yes. Seabourn suites include an in-suite bar that can be stocked according to guest preferences, subject to the line's current policies." },
            { q: "Does Seabourn offer suite service?", a: "Yes. Each suite receives personalized service from a suite host and attendant." },
            { q: "Does Seabourn have butler service?", a: "Seabourn's service model centers on suite hosts and attendants rather than providing a dedicated butler in every suite. This creates a highly personalized but generally relaxed service style." },
        ],
    },
    {
        chip: "Dining",
        title: "Seabourn Dining FAQs",
        bg: "Sbc-bg-soft",
        items: [
            { q: "Is food included on Seabourn?", a: "Yes. Dining is included across Seabourn's main dining venues." },
            { q: "Does Seabourn have specialty restaurants?", a: "Yes. Depending on the ship, dining options can include venues such as The Restaurant, The Colonnade, Earth & Ocean, Solis, Sushi and The Patio. The exact restaurants vary by ship." },
            { q: "Does Seabourn have open seating?", a: "Yes. Seabourn is known for flexible dining rather than forcing guests into a traditional fixed dining schedule. This allows travelers to decide when and with whom they want to dine." },
            { q: "Can I eat dinner in my Seabourn suite?", a: "Yes. In-suite dining is available, allowing guests to enjoy meals privately." },
            { q: "Is Seabourn good for foodies?", a: "Yes. Seabourn is particularly appealing to travelers who value fine dining, premium wines, caviar, destination-inspired cuisine, flexible dining and in-suite dining." },
        ],
    },
    {
        chip: "Shore Excursions",
        title: "Seabourn Shore Excursion FAQs",
        bg: "Sbc-bg-white",
        items: [
            { q: "What types of excursions does Seabourn offer?", a: "Excursions can include sightseeing, cultural tours, food and wine, historical experiences, nature, hiking, wildlife, photography, adventure, private experiences and expedition activities." },
            { q: "What are Ventures by Seabourn?", a: "Ventures by Seabourn are more immersive and active experiences designed to take travelers deeper into destinations. Depending on the itinerary, they can involve hiking, wildlife, nature, adventure, active exploration and remote environments. Some Ventures experiences may carry an additional charge." },
            { q: "Does Seabourn offer private excursions?", a: "Private touring options may be available depending on the destination and itinerary. Private excursions can be especially useful for couples, families, multigenerational groups, special celebrations and travelers with specific interests." },
            { q: "Can I explore ports independently on Seabourn?", a: "Yes. Independent exploration can work particularly well in ports that are easy to navigate. However, always leave enough time to return to the ship before its scheduled departure." },
        ],
    },
    {
        chip: "Expedition",
        title: "Seabourn Expedition FAQs",
        bg: "Sbc-bg-soft",
        items: [
            { q: "Does Seabourn offer expedition cruises?", a: "Yes. Seabourn operates dedicated expedition ships and expedition itineraries to remote destinations." },
            { q: "Does Seabourn go to Antarctica?", a: "Yes. Seabourn offers Antarctica expedition itineraries aboard its dedicated expedition ships." },
            { q: "Does Seabourn offer Zodiac excursions?", a: "Yes. Zodiac exploration is an important part of the expedition experience aboard Seabourn's expedition ships." },
            { q: "Does Seabourn offer kayaking?", a: "Yes. Kayaking is available on applicable expedition itineraries and is subject to weather, safety and local conditions." },
            { q: "What wildlife can I see on a Seabourn expedition?", a: "Wildlife depends on the destination. Possible sightings include penguins, whales, seals, sea birds, bears and marine wildlife. Wildlife encounters are never guaranteed." },
            { q: "Are Seabourn expedition activities included?", a: "Many expedition activities are included as part of Seabourn's expedition experience. The exact activities and conditions depend on the voyage." },
        ],
    },
    {
        chip: "Dress Code",
        title: "Seabourn Dress Code FAQs",
        bg: "Sbc-bg-white",
        items: [
            { q: "What is the dress code on Seabourn?", a: "Seabourn generally follows a polished but relaxed approach to evening attire. You should pack smart casual clothing, resort wear, comfortable daytime clothing and a more polished outfit for evenings." },
            { q: "Does Seabourn have formal nights?", a: "Seabourn does not operate like traditional cruise lines that require frequent formal nights. Some evenings may call for more elegant attire, but the overall atmosphere is sophisticated and relaxed." },
            { q: "What should I wear on a Seabourn cruise?", a: "For daytime, resort casual clothing, comfortable shoes, swimwear around the pool and activewear for excursions work well. For evening, pack smart casual clothing, dresses or elegant separates, trousers and collared shirts, and jackets where appropriate." },
        ],
    },
    {
        chip: "Family & Solo Travel",
        title: "Seabourn Family and Solo Travel FAQs",
        bg: "Sbc-bg-soft",
        items: [
            { q: "Is Seabourn good for families?", a: "Seabourn is not primarily a family-focused cruise line. However, it can work very well for affluent multigenerational families, especially on expedition itineraries." },
            { q: "Is Seabourn good for solo travelers?", a: "Yes. The small-ship atmosphere can make Seabourn comfortable for solo travelers who enjoy social interaction but prefer an upscale environment. Always compare the single supplement and available solo promotions." },
            { q: "Is Seabourn good for older travelers?", a: "Yes. Seabourn can be particularly appealing to mature travelers who value comfort, quiet luxury, personalized service, fine dining, small ships and destination experiences. Travelers should check mobility requirements before booking active excursions." },
        ],
    },
    {
        chip: "Service & Atmosphere",
        title: "Seabourn Service and Atmosphere FAQs",
        bg: "Sbc-bg-white",
        items: [
            { q: "What is the atmosphere like on Seabourn?", a: "Seabourn has a relaxed, sophisticated and intimate atmosphere. The brand often compares its experience to private-yacht cruising." },
            { q: "Is Seabourn formal?", a: "Seabourn is luxurious without being excessively formal. You can expect elegant surroundings and polished service without the constant formalwear associated with some traditional luxury cruises." },
            { q: "Does Seabourn feel crowded?", a: "Because Seabourn ships are relatively small, they generally feel much less crowded than mainstream cruise ships. This is one of the primary advantages of small-ship luxury cruising." },
            { q: "Is Seabourn quiet?", a: "Generally, yes. Seabourn is better suited to travelers looking for relaxation, conversation, fine dining, destination experiences, wellness and a small-ship atmosphere. It is not designed around nonstop entertainment." },
        ],
    },
    {
        chip: "Booking & Planning",
        title: "Seabourn Booking and Planning FAQs",
        bg: "Sbc-bg-soft",
        items: [
            { q: "How far in advance should I book Seabourn?", a: "For popular itineraries, suites and peak travel periods, booking well in advance can provide the best selection. This is particularly important for Antarctica, expedition voyages, holiday sailings, world cruises, popular Mediterranean itineraries and premium suites." },
            { q: "What is the best time to take a Seabourn cruise?", a: "It depends on the destination. For example, the Mediterranean is generally best from spring through fall, Northern Europe in summer, Antarctica during the Southern Hemisphere summer, and the Caribbean in winter and spring. Always consider weather, destination conditions and itinerary goals." },
            { q: "What should first-time Seabourn cruisers know?", a: "First-time guests should understand that Seabourn is fundamentally different from a large resort-style cruise. Expect fewer passengers, personalized service, relaxed luxury, flexible dining, extensive inclusions and destination-focused travel. Don't expect large-scale entertainment, huge pools or dozens of restaurants." },
            { q: "Is Seabourn better than Silversea?", a: "This depends on your priorities. Seabourn may be better for travelers who want relaxed yacht-style luxury. Silversea may be better for travelers who prioritize butler service and a broad expedition and destination portfolio." },
            { q: "Is Seabourn better than Regent Seven Seas?", a: "Again, it depends. Seabourn emphasizes intimacy and yacht-like atmosphere. Regent Seven Seas emphasizes space and an extensive included shore-excursion program." },
            { q: "Is Seabourn better than Scenic?", a: "The two brands have different strengths. Seabourn is particularly focused on ocean and expedition luxury, while Scenic is especially known for luxury river cruising and its Scenic Eclipse yacht experience." },
        ],
    },
];

/* ── Data: Quick Comparison table ─────────────────────────────────── */
const comparisonRows = [
    ["Is Seabourn luxury?", "Yes"],
    ["Is Seabourn all-inclusive?", "Yes, with some exclusions"],
    ["Are drinks included?", "Yes"],
    ["Is Champagne included?", "Yes"],
    ["Is caviar included?", "Yes"],
    ["Is Wi-Fi included?", "Yes"],
    ["Are gratuities included?", "Yes"],
    ["Are meals included?", "Yes"],
    ["Is room service included?", "Yes"],
    ["Does Seabourn have suites?", "Yes, all-suite"],
    ["Do suites have balconies?", "Many do"],
    ["Does Seabourn have butlers?", "Suite hosts/attendants rather than butlers in every suite"],
    ["Does Seabourn offer excursions?", "Yes"],
    ["Does Seabourn offer private excursions?", "Available on selected itineraries"],
    ["Does Seabourn offer expedition cruises?", "Yes"],
    ["Does Seabourn go to Antarctica?", "Yes"],
    ["Does Seabourn use Zodiacs?", "Yes, on expedition voyages"],
    ["Does Seabourn offer kayaking?", "Yes, on applicable expedition voyages"],
    ["Is Seabourn good for couples?", "Yes"],
    ["Is Seabourn good for solo travelers?", "Yes"],
    ["Is Seabourn good for families?", "Better suited to mature/multigenerational travelers"],
    ["Does Seabourn have formal nights?", "Generally relaxed"],
    ["Is Seabourn good for first-time luxury cruisers?", "Yes"],
];

/* ── Data: "Is Seabourn Right for You" highlights ─────────────────── */
const fitHighlights = [
    "Intimacy over scale",
    "Service over spectacle",
    "Destination experiences over onboard attractions",
    "Fine dining over casual buffet culture",
    "Relaxation over nonstop entertainment",
];

/* ── Reusable FAQ accordion (matches reference Sbc-faq classes) ──── */
function FaqAccordion({ items, groupId }) {
    const [open, setOpen] = useState(null);

    return (
        <div className="Sbc-faq-list">
            {items.map((item, i) => (
                <div
                    key={`${groupId}-${i}`}
                    className={`Sbc-faq-item${open === i ? " Sbc-open" : ""}`}
                    onClick={() => setOpen(open === i ? null : i)}
                >
                    <div className="Sbc-faq-q">
                        <span>{item.q}</span>
                        <span className="Sbc-faq-icon">
                            {open === i ? (
                                <Minus size={18} strokeWidth={1.5} />
                            ) : (
                                <Plus size={18} strokeWidth={1.5} />
                            )}
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

/* ── Schema (FAQPage + WebPage + BreadcrumbList) ──────────────────── */
const allFaqItems = [
    ...quickFaqs.map(({ q, a }) => ({ q, a })),
    ...faqCategories.flatMap((c) => c.items),
];

const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": "https://www.tripsandships.com/seabourn-cruises/faqs/#webpage",
            url: "https://www.tripsandships.com/seabourn-cruises/faqs/",
            name: "Seabourn Cruise FAQs: Ships, Suites, Costs & Inclusions",
            description:
                "Get answers to frequently asked questions about Seabourn cruises, including costs, ships, suites, dining, drinks, excursions, dress code, Wi-Fi, gratuities and expedition cruises.",
            isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.tripsandships.com/#website",
                url: "https://www.tripsandships.com/",
                name: "Trips & Ships Luxury Travel",
            },
            about: { "@type": "Thing", name: "Seabourn Cruises" },
            breadcrumb: { "@id": "https://www.tripsandships.com/seabourn-cruises/faqs/#breadcrumb" },
            mainEntity: { "@id": "https://www.tripsandships.com/seabourn-cruises/faqs/#faq" },
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/seabourn-cruises/faqs/#faq",
            url: "https://www.tripsandships.com/seabourn-cruises/faqs/",
            name: "Seabourn Frequently Asked Questions",
            mainEntity: allFaqItems.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/faqs/#breadcrumb",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tripsandships.com/" },
                { "@type": "ListItem", position: 2, name: "Seabourn Cruises", item: "https://www.tripsandships.com/seabourn-cruises/" },
                { "@type": "ListItem", position: 3, name: "Seabourn Frequently Asked Questions", item: "https://www.tripsandships.com/seabourn-cruises/faqs/" },
            ],
        },
    ],
};

/* ── Page ──────────────────────────────────────────────────────── */
const SeabournFAQs = () => {
    const [readMore, setReadMore] = useState(false);

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Seabourn FAQs: Cruise Questions Answered</title>
                <meta name="title" content="Seabourn Cruise FAQs: Ships, Suites, Costs & Inclusions" />
                <meta
                    name="description"
                    content="Get answers to frequently asked questions about Seabourn cruises, including costs, ships, suites, dining, drinks, excursions, dress code, Wi-Fi, gratuities and expedition cruises."
                />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO ──────────────────────────────────────────────── */}
            <section className="Sbc-hero-section">
                <div className="Sbc-hero-overlay"></div>
                <div className="Sbc-hero-content">
                    <h1>Seabourn Frequently Asked Questions: Your Complete Cruise Guide</h1>
                    <p>
                        Planning a Seabourn cruise often raises more questions than simply choosing an itinerary.
                    </p>

                    {readMore && (
                        <>
                            <p>
                                Is Seabourn truly all-inclusive? What is included in the fare? Are drinks included? Does Seabourn have formal nights? Which suites are best? Are excursions included? Does Seabourn offer expedition cruises? Is Seabourn a good choice for first-time luxury cruisers?
                            </p>
                            <p>
                                This Seabourn FAQ guide answers the questions travelers are most likely to ask before booking.
                            </p>
                            <p>
                                Whether you're comparing Seabourn with another luxury cruise line, researching your first Seabourn voyage, choosing a suite or planning an expedition to Antarctica, use this page as a quick reference.
                            </p>
                            <p style={{ fontWeight: "600" }}>
                                Planning tip: Seabourn's inclusions, itineraries, suite categories and excursion offerings can vary by ship and voyage. Always check the details of your specific sailing before booking.
                            </p>
                        </>
                    )}

                    <div className="Sbc-hero-readmore-wrapper">
                        <button
                            className="Sbc-hero-readmore-btn"
                            onClick={() => setReadMore(!readMore)}
                        >
                            {readMore ? "Read Less" : "Read More"}
                        </button>
                    </div>

                    <div className="rlc-page-cta-container" style={{ marginTop: "24px" }}>
                        <Link to="/contact" className="rlc-page-cta-btn rlc-btn-light" style={{ textDecoration: "none" }}>
                            Start Planning Your Seabourn Cruise
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── QUICK SEABOURN FAQ (card grid) ─────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sfq-quick">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Quick Answers</span>
                        <h2 className="Sbc-h2">Quick Seabourn FAQ</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <p className="Sbc-intro Sfq-quick-note">
                        Whether you're comparing Seabourn with another luxury cruise
                        line, researching your first Seabourn voyage, choosing a suite
                        or planning an expedition to Antarctica, use this page as a
                        quick reference. Inclusions, itineraries, suite categories and
                        excursion offerings can vary by ship and voyage, so always
                        check the details of your specific sailing before booking.
                    </p>

                    <div className="Sbc-card-grid">
                        {quickFaqs.map((item, i) => (
                            <div className="Sbc-card" key={i}>
                                <div className="Sbc-card-icon">{item.icon}</div>
                                <h3 className="Sbc-card-title">{item.q}</h3>
                                <p className="Sbc-card-text">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── GROUPED FAQ CATEGORIES (57 questions, reused accordion) ── */}
            {faqCategories.map((cat, i) => (
                <section className={`Sbc-section ${cat.bg}`} id={`Sfq-cat-${i}`} key={cat.title}>
                    <div className="Sbc-container">
                        <div className="Sbc-section-header">
                            <span className="Sfq-category-chip">
                                <Sparkles size={13} /> {cat.chip}
                            </span>
                            <h2 className="Sbc-h2">{cat.title}</h2>
                            <div className="Sbc-accent-line"></div>
                        </div>
                        <FaqAccordion items={cat.items} groupId={`Sfq-cat-${i}`} />
                    </div>
                </section>
            ))}

                        {/* ── IS SEABOURN RIGHT FOR YOU ──────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sfq-fit">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">One Last Question</span>
                        <h2 className="Sbc-h2">Is Seabourn Right for You?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Seabourn is likely a strong fit if you want a cruise that
                            prioritizes the following.
                        </p>
                    </div>

                    <div className="Sbc-brand-highlights" style={{ maxWidth: "780px", margin: "0 auto" }}>
                        <h4 className="Sbc-highlights-title">You'll Love Seabourn If You Want</h4>
                        <ul className="Sbc-highlights-list" style={{ gridTemplateColumns: "1fr" }}>
                            {fitHighlights.map((item) => (
                                <li key={item}>
                                    <Check size={22} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="Sfq-fit-note">
                        <p>
                            If you want waterslides, huge entertainment venues, hundreds
                            of onboard activities and thousands of passengers, a
                            mainstream cruise line may be a better fit.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── QUICK COMPARISON TABLE ─────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sfq-comparison">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">At A Glance</span>
                        <h2 className="Sbc-h2">Seabourn Cruise FAQs: Quick Comparison</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Ssf-table-wrap">
                        <table className="Ssf-table">
                            <thead>
                                <tr>
                                    <th>Question</th>
                                    <th>Short Answer</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonRows.map(([q, a], i) => (
                                    <tr key={i}>
                                        <td>{q}</td>
                                        <td>{a}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>



            {/* ── ANGELA HUGHES AUTHORITY BOX ────────────────────────────── */}
            <section className="Sbc-expert-section" id="Asc-expert-insight">
                <div className="Sbc-container">
                    <div className="Sbc-expert-heading">
                        <span className="Sbc-expert-eyebrow">Luxury Travel Expertise</span>
                        <h2 className="Sbc-expert-title">Angela Hughes Luxury Authority</h2>
                        <div className="Sbc-expert-divider"></div>
                    </div>

                    <div className="Sbc-expert-grid">
                        <div className="Sbc-expert-image-col">
                            <div className="Sbc-expert-portrait-wrap">
                                <img
                                    src={AboutImage}
                                    alt="Angela Hughes – Luxury Travel Expert"
                                    className="Sbc-expert-portrait"
                                />
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

            {/* ── FINAL VERDICT (reused Sbc-verdict classes) ─────────── */}
            <section className="Sbc-section Sbc-bg-dark" id="Sfq-verdict">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Final Verdict</span>
                        <h2 className="Sbc-h2">Your Complete Seabourn Cruise Guide</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-verdict-copy">
                        <p className="Sbc-p">
                            Seabourn is one of the strongest choices for travelers who
                            want small-ship, ultra-luxury cruising without excessive
                            formality. Its combination of oceanfront suites,
                            personalized service, premium beverages, fine dining,
                            complimentary caviar, included Wi-Fi and destination
                            experiences creates a distinctive proposition.
                        </p>
                        <p className="Sbc-p">
                            The dedicated expedition ships also make Seabourn
                            particularly interesting for travelers who want to combine
                            luxury with remote destinations such as Antarctica.
                        </p>
                        <p className="Sbc-p">
                            The most important thing to remember is that Seabourn is
                            not simply a more expensive version of a mainstream
                            cruise. It is a different style of travel. The ships are
                            smaller, the atmosphere is quieter, the service is more
                            personal and the experience places greater emphasis on the
                            destination and the quality of the onboard environment.
                        </p>

                        <div className="Sbc-verdict-recommend">
                            <p>
                                <strong>Our recommendation:</strong> Choose Seabourn if
                                you value intimacy over scale, service over spectacle,
                                destination experiences over onboard attractions, fine
                                dining over casual buffet culture, and relaxation over
                                nonstop entertainment.
                            </p>
                        </div>

                        <div className="Sbc-btn-row">
                            <Link to="/contact" className="Sbc-btn Sbc-btn-light" style={{ textDecoration: "none" }}>
                                Start Planning Your Seabourn Cruise
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SeabournFAQs;