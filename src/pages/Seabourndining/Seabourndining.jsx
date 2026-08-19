import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Check,
    X,
    Minus,
    Plus,
    ArrowRight,
    Utensils,
    Sun,
    Home,
    Wine,
    Gem,
    Users,
    Heart,
    Compass,
    Sparkles,
    Ship,
    Coffee,
    Sunrise,
    ClipboardList,
    Wand2,
    Star,
    MapPin,
    Award,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

import { Helmet } from "react-helmet-async";
/* Shared design system from the Seabourn Cruises guide — reused so every
   matching content block below renders with identical classes/styles.
   Adjust the relative path below if this file lives elsewhere. */
import "../SeabournCruises/SeabournCruises.css";
import "../Seabournships/Seabournships.css";
import "./SeabournDining.css";

/* ── Schema ─────────────────────────────────────────────────────── */
const seabournDiningSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": "https://www.tripsandships.com/seabourn-cruises/dining/#webpage",
            url: "https://www.tripsandships.com/seabourn-cruises/dining/",
            name: "Seabourn Dining Guide: Restaurants, Food, Menus & Room Service",
            headline: "Seabourn Dining Guide: Restaurants, Food, Menus & Room Service",
            description:
                "Explore Seabourn dining, including restaurants, complimentary meals, open seating, room service, specialty dining, drinks, dietary needs and what to expect onboard.",
            keywords: [
                "Seabourn dining",
                "Seabourn restaurants",
                "Seabourn dining guide",
                "Seabourn food",
                "Seabourn dining options",
                "Seabourn complimentary dining",
                "Seabourn room service",
                "Seabourn open seating",
                "Seabourn specialty restaurants",
                "Seabourn dinner",
                "Seabourn breakfast",
                "Seabourn lunch",
                "Seabourn dietary restrictions",
                "Seabourn food review",
                "Seabourn dining experience",
                "Seabourn caviar",
                "Seabourn restaurants and menus",
            ],
            isPartOf: { "@id": "https://www.tripsandships.com/#website" },
            about: { "@type": "Thing", name: "Seabourn dining" },
            breadcrumb: { "@id": "https://www.tripsandships.com/seabourn-cruises/dining/#breadcrumb" },
            mainEntity: { "@id": "https://www.tripsandships.com/seabourn-cruises/dining/#faq" },
            inLanguage: "en-US",
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/dining/#breadcrumb",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tripsandships.com/" },
                { "@type": "ListItem", position: 2, name: "Seabourn Cruises", item: "https://www.tripsandships.com/seabourn-cruises/" },
                { "@type": "ListItem", position: 3, name: "Seabourn Dining Guide", item: "https://www.tripsandships.com/seabourn-cruises/dining/" },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://www.tripsandships.com/seabourn-cruises/dining/#restaurants",
            name: "Seabourn Dining Options",
            description:
                "Dining venues and culinary experiences available across Seabourn ships, with exact offerings varying by ship and sailing.",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "The Restaurant" },
                { "@type": "ListItem", position: 2, name: "The Colonnade" },
                { "@type": "ListItem", position: 3, name: "Earth & Ocean" },
                { "@type": "ListItem", position: 4, name: "Solis" },
                { "@type": "ListItem", position: 5, name: "Sushi and Specialty Dining" },
                { "@type": "ListItem", position: 6, name: "The Patio" },
                { "@type": "ListItem", position: 7, name: "In-Suite Dining" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.tripsandships.com/seabourn-cruises/dining/#faq",
            name: "Seabourn Dining Frequently Asked Questions",
            mainEntity: [
                { "@type": "Question", name: "Is dining included on Seabourn?", acceptedAnswer: { "@type": "Answer", text: "Yes. Meals in Seabourn's primary dining venues are included in the cruise fare." } },
                { "@type": "Question", name: "How many restaurants does Seabourn have?", acceptedAnswer: { "@type": "Answer", text: "The number and names of dining venues vary by ship. Options can include The Restaurant, The Colonnade, Earth & Ocean, Solis and other ship-specific venues." } },
                { "@type": "Question", name: "Does Seabourn have a buffet?", acceptedAnswer: { "@type": "Answer", text: "The Colonnade can offer buffet-style dining for selected meals, depending on the ship and meal period." } },
                { "@type": "Question", name: "Is Seabourn open seating?", acceptedAnswer: { "@type": "Answer", text: "Yes. Seabourn generally offers flexible dining rather than traditional fixed seating." } },
                { "@type": "Question", name: "Can I choose who I dine with on Seabourn?", acceptedAnswer: { "@type": "Answer", text: "Yes. Guests can generally request private dining or choose to socialize and share meals with other travelers." } },
                { "@type": "Question", name: "Is room service free on Seabourn?", acceptedAnswer: { "@type": "Answer", text: "In-suite dining is part of Seabourn's onboard service. Exact menus and availability vary by ship and sailing." } },
                { "@type": "Question", name: "Does Seabourn have specialty restaurants?", acceptedAnswer: { "@type": "Answer", text: "Yes. Selected ships feature specialty dining venues. The restaurant lineup varies across the fleet." } },
                { "@type": "Question", name: "Does Seabourn include wine?", acceptedAnswer: { "@type": "Answer", text: "Yes. A selection of wines is included as part of the onboard beverage offering." } },
                { "@type": "Question", name: "Does Seabourn include Champagne?", acceptedAnswer: { "@type": "Answer", text: "Yes. Champagne is included, although specific brands and availability can vary." } },
                { "@type": "Question", name: "Does Seabourn serve caviar?", acceptedAnswer: { "@type": "Answer", text: "Yes. Caviar is one of Seabourn's signature luxury dining touches." } },
                { "@type": "Question", name: "Can Seabourn accommodate food allergies?", acceptedAnswer: { "@type": "Answer", text: "Many dietary requirements and allergies can be accommodated, particularly when communicated in advance. Guests with severe allergies should discuss their requirements directly with the culinary team." } },
                { "@type": "Question", name: "Does Seabourn have vegan food?", acceptedAnswer: { "@type": "Answer", text: "Vegan dining can be accommodated. Advance notice is recommended so the culinary team can prepare appropriately." } },
                { "@type": "Question", name: "Does Seabourn have vegetarian food?", acceptedAnswer: { "@type": "Answer", text: "Yes. Vegetarian options are available, and guests can communicate their preferences before and during the voyage." } },
                { "@type": "Question", name: "Do I need reservations for Seabourn restaurants?", acceptedAnswer: { "@type": "Answer", text: "Some specialty restaurants may require reservations, while the main dining venues generally offer greater flexibility." } },
                { "@type": "Question", name: "Can I eat dinner in my suite?", acceptedAnswer: { "@type": "Answer", text: "Yes. In-suite dining allows guests to enjoy meals privately in their suite." } },
                { "@type": "Question", name: "Can I eat breakfast on my Seabourn balcony?", acceptedAnswer: { "@type": "Answer", text: "If your suite has a private veranda, in-suite dining can allow you to enjoy breakfast outdoors." } },
                { "@type": "Question", name: "Does Seabourn have formal nights?", acceptedAnswer: { "@type": "Answer", text: "Seabourn generally maintains a more relaxed luxury approach to evening dress rather than requiring traditional formalwear." } },
                { "@type": "Question", name: "Is Seabourn good for foodies?", acceptedAnswer: { "@type": "Answer", text: "Yes. Seabourn is particularly suited to travelers who value fine dining, premium beverages, caviar and destination-inspired cuisine." } },
            ],
        },
    ],
};

/* ── Data ──────────────────────────────────────────────────────── */
const diningVenueNames = ["The Restaurant", "The Colonnade", "Earth & Ocean", "Solis", "Sushi", "The Patio", "In-suite dining"];

const glanceRows = [
    { name: "Main dining", text: "Included" },
    { name: "Casual dining", text: "Included" },
    { name: "Breakfast", text: "Included" },
    { name: "Lunch", text: "Included" },
    { name: "Dinner", text: "Included" },
    { name: "In-suite dining", text: "Available" },
    { name: "Open seating", text: "Yes" },
    { name: "Premium beverages", text: "Included" },
    { name: "Caviar", text: "Available as part of Seabourn's luxury experience" },
    { name: "Specialty dining", text: "Varies by venue and ship" },
    { name: "Dietary requests", text: "Can generally be accommodated with advance notice" },
    { name: "Room service", text: "Available" },
    { name: "Reservations", text: "Required for some venues" },
    { name: "Formal dining", text: "Relaxed luxury atmosphere" },
];

const diningVenueCards = [
    {
        icon: Utensils,
        title: "1. The Restaurant",
        text: "The Restaurant is Seabourn's principal dining venue and one of the most important places to experience the line's cuisine. It provides a more traditional restaurant setting while maintaining Seabourn's relaxed approach to dining.",
        points: ["Multi-course meals", "Changing menus", "Appetizers", "Main courses", "Desserts", "Wine pairings", "Table service"],
        note: "The Restaurant is a good choice when you want a more leisurely dinner rather than a casual meal.",
    },
    {
        icon: Sun,
        title: "2. The Colonnade",
        text: "The Colonnade offers a more relaxed dining environment. It is particularly useful when you want flexibility rather than a formal multi-course dinner. Depending on the ship and meal period, you may find:",
        points: ["Breakfast", "Lunch", "Dinner", "Buffet-style selections", "Table service", "Regional cuisine", "Casual evening dining"],
        note: "The dinner concept may change throughout the voyage, giving guests opportunities to experience different cuisines.",
    },
    {
        icon: Compass,
        title: "3. Earth & Ocean",
        text: "Earth & Ocean focuses on globally inspired cuisine in a more casual setting. The concept emphasizes dishes influenced by destinations and international flavors. It can be a good alternative when you want something different from the main dining room. Availability and exact menus vary by ship.",
        points: [],
        note: "",
    },
    {
        icon: Gem,
        title: "4. Solis",
        text: "On applicable Seabourn ships, Solis provides a more intimate specialty dining experience. The restaurant focuses on Mediterranean-inspired cuisine and creates a more elevated evening dining option. Because restaurant concepts can vary by ship and itinerary, check your specific Seabourn sailing to determine whether Solis is available.",
        points: [],
        note: "",
    },
    {
        icon: Sparkles,
        title: "5. Sushi and Other Specialty Dining",
        text: "Selected Seabourn ships offer additional specialty dining concepts. These may include sushi or other focused culinary experiences. Specialty venues can be among the most sought-after dining options on a voyage, particularly on longer cruises.",
        points: [],
        note: "Tip: If a specific restaurant is important to you, check whether reservations are recommended or required for your sailing.",
    },
    {
        icon: Home,
        title: "6. The Patio",
        text: "The Patio provides another casual option on selected Seabourn ships. It is particularly appealing for travelers who want to enjoy a meal outdoors when weather and itinerary conditions allow. Depending on the ship, it may offer:",
        points: ["Casual lunch", "Poolside dining", "Light meals", "Grilled selections", "Outdoor dining"],
        note: "",
    },
];

const breakfastOptions = ["Restaurant dining", "Casual dining", "In-suite breakfast", "Continental-style selections", "Hot breakfast options"];
const lunchOptions = ["Casual dining", "The Colonnade", "Poolside dining", "In-suite dining", "Other ship-specific options"];
const dinnerOptions = ["The Restaurant", "The Colonnade", "Specialty restaurants", "Casual venues", "In-suite dining"];

const seatingQaCards = [
    {
        icon: Users,
        title: "Does Seabourn Have Open Seating?",
        text: "Yes. One of the advantages of Seabourn's dining experience is its flexible approach to seating. Rather than assigning guests to the same table every evening, guests generally have more freedom to decide when to dine, where to dine, and who to dine with. This works particularly well for couples and solo travelers who prefer flexibility.",
    },
    {
        icon: Heart,
        title: "Can You Dine With Other Guests on Seabourn?",
        text: "Yes. If you enjoy meeting fellow travelers, you can choose to dine with other guests when opportunities and seating arrangements allow. Alternatively, couples and families can request private tables when available. This flexibility is one of the reasons Seabourn can appeal to both social and independent travelers.",
    },
    {
        icon: ClipboardList,
        title: "Does Seabourn Require Dinner Reservations?",
        text: "It depends on the restaurant. The main dining room generally offers flexible dining, while specialty restaurants or popular venues may require reservations. If you have a particular restaurant you want to experience on a specific evening, make arrangements early.",
    },
];

const balconyReasons = ["Sailing through scenic destinations", "Entering a port", "Cruising past dramatic coastlines", "Enjoying a quiet morning at sea"];
const roomServiceReasons = ["Breakfast", "Early mornings", "Late evenings", "Relaxed lunches", "Romantic occasions", "Days with early excursions", "Travelers who prefer privacy"];

const foodQualityPoints = ["Fresh ingredients", "International cuisine", "Destination-inspired dishes", "Presentation", "Fine dining", "Premium beverages", "Flexible dining"];

const drinksList = ["Wine", "Champagne", "Beer", "Spirits", "Cocktails", "Soft drinks", "Coffee", "Tea"];

const drinksQaCards = [
    { title: "Is Wine Included With Dinner on Seabourn?", text: "Yes. A selection of wines is included. This means guests don't need to purchase a separate wine package simply to enjoy wine with dinner." },
    { title: "Does Seabourn Include Champagne?", text: "Yes. Champagne is part of Seabourn's beverage offering. Specific Champagne brands and availability can vary." },
];

const dietaryTags = ["Vegetarian", "Vegan", "Gluten-conscious", "Dairy-free", "Food allergies", "Religious dietary requirements", "Other medically necessary restrictions"];

const dietaryQaCards = [
    { title: "Does Seabourn Have Vegetarian Food?", text: "Yes. Vegetarian options can be available across Seabourn's dining venues. If you follow a vegetarian diet, mentioning this in advance can make planning easier." },
    { title: "Does Seabourn Have Vegan Food?", text: "Vegan dining can be accommodated, but travelers with strict dietary requirements should notify Seabourn before sailing. Advance notice allows the culinary team to better understand your needs and plan appropriate meals." },
    { title: "Does Seabourn Accommodate Food Allergies?", text: "Seabourn can accommodate many dietary restrictions and food allergies with advance notice. If you have a severe allergy, don't rely solely on menu descriptions. Speak with the dining team about ingredients, preparation methods and potential cross-contact." },
];

const familiesList = ["Earlier dining", "Casual restaurants", "In-suite meals", "Flexible seating", "Private tables where available"];
const couplesList = ["Private dinners", "Balcony meals", "Fine dining", "Casual lunches", "Specialty restaurants", "Champagne", "Romantic destination dining"];

const dressWomen = ["Dresses", "Skirts", "Elegant trousers", "Blouses", "Smart separates"];
const dressMen = ["Collared shirts", "Trousers", "Polo shirts", "Jackets for more elegant evenings"];

const vsTraditional = ["Fixed dining times common", "Assigned tables common", "Large dining rooms", "Large buffet emphasis", "Drinks often extra", "Formal nights common", "Room service may be limited", "Large number of passengers"];
const vsSeabourn = ["Flexible dining", "Open seating", "Smaller luxury venues", "More curated options", "Broad beverage inclusions", "Relaxed luxury", "In-suite dining", "Intimate ships"];

const differentCards = [
    { icon: Wand2, title: "Flexibility", text: "You don't have to structure your entire vacation around one dining reservation." },
    { icon: Compass, title: "Intimacy", text: "The smaller ships create a more personal restaurant experience." },
    { icon: Gem, title: "Inclusion", text: "Many dining and beverage experiences are incorporated into the overall cruise fare." },
];

const tipsList = [
    { title: "Try more than one restaurant", text: "Don't limit yourself to the main dining venue." },
    { title: "Order breakfast in your suite", text: "If your suite has a veranda, this can be one of the best ways to start a sea day." },
    { title: "Ask about daily specials", text: "Menus change, and your server can explain the night's recommendations." },
    { title: "Tell Seabourn about dietary requirements early", text: "Advance communication is especially important for allergies and strict diets." },
    { title: "Reserve specialty dining early", text: "If a particular restaurant is high on your list, don't wait until the final evening." },
    { title: "Explore regional cuisine", text: "Use the itinerary as an opportunity to try dishes inspired by the destinations you're visiting." },
    { title: "Don't overlook lunch", text: "Casual lunch can be one of the easiest ways to experience Seabourn's culinary offerings without spending a long evening in the dining room." },
];

const bestForRows = [
    { name: "Couple", text: "The Restaurant or specialty dining" },
    { name: "Romantic occasion", text: "Private in-suite dining" },
    { name: "Foodie", text: "Specialty restaurants + destination-inspired menus" },
    { name: "Solo traveler", text: "Open seating and shared dining" },
    { name: "Family", text: "Casual dining and flexible seating" },
    { name: "Early riser", text: "In-suite breakfast" },
    { name: "Privacy-focused traveler", text: "Balcony/in-suite dining" },
    { name: "Casual traveler", text: "The Colonnade" },
    { name: "Special occasion", text: "Specialty dining or private suite dining" },
];

const prosList = ["Dining is included", "Flexible open seating", "Multiple dining venues", "In-suite dining", "Premium beverages", "Caviar", "Fine-dining focus", "Destination-inspired cuisine", "Dietary requests can be accommodated", "Intimate restaurant atmosphere"];
const consList = ["Fewer restaurants than mega-ships", "Restaurant selection varies by ship", "Some popular venues may require reservations", "Menus and offerings can change", "Travelers wanting extensive casual dining variety may prefer a larger ship"];



/* ── FAQ Accordion (Sbc-faq classes reused) ───────────────────────── */
function DiningFAQ() {
    const [open, setOpen] = useState(null);

    const faqData = [
        { q: "Is dining included on Seabourn?", a: "Yes. Meals in Seabourn's primary dining venues are included in the cruise fare." },
        { q: "How many restaurants does Seabourn have?", a: "The number and names of dining venues vary by ship. Options can include The Restaurant, The Colonnade, Earth & Ocean, Solis and other ship-specific venues." },
        { q: "Does Seabourn have a buffet?", a: "The Colonnade can offer buffet-style dining for selected meals, depending on the ship and meal period." },
        { q: "Is Seabourn open seating?", a: "Yes. Seabourn generally offers flexible dining rather than traditional fixed seating." },
        { q: "Can I choose who I dine with on Seabourn?", a: "Yes. Guests can generally request private dining or choose to socialize and share meals with other travelers." },
        { q: "Is room service free on Seabourn?", a: "In-suite dining is part of Seabourn's onboard service. Exact menus and availability vary by ship and sailing." },
        { q: "Does Seabourn have specialty restaurants?", a: "Yes. Selected ships feature specialty dining venues. The restaurant lineup varies across the fleet." },
        { q: "Does Seabourn include wine?", a: "Yes. A selection of wines is included as part of the onboard beverage offering." },
        { q: "Does Seabourn include Champagne?", a: "Yes. Champagne is included, although specific brands and availability can vary." },
        { q: "Does Seabourn serve caviar?", a: "Yes. Caviar is one of Seabourn's signature luxury dining touches." },
        { q: "Can Seabourn accommodate food allergies?", a: "Many dietary requirements and allergies can be accommodated, particularly when communicated in advance. Guests with severe allergies should discuss their requirements directly with the culinary team." },
        { q: "Does Seabourn have vegan food?", a: "Vegan dining can be accommodated. Advance notice is recommended so the culinary team can prepare appropriately." },
        { q: "Does Seabourn have vegetarian food?", a: "Yes. Vegetarian options are available, and guests can communicate their preferences before and during the voyage." },
        { q: "Do I need reservations for Seabourn restaurants?", a: "Some specialty restaurants may require reservations, while the main dining venues generally offer greater flexibility." },
        { q: "Can I eat dinner in my suite?", a: "Yes. In-suite dining allows guests to enjoy meals privately in their suite." },
        { q: "Can I eat breakfast on my Seabourn balcony?", a: "If your suite has a private veranda, in-suite dining can allow you to enjoy breakfast outdoors." },
        { q: "Does Seabourn have formal nights?", a: "Seabourn generally maintains a more relaxed luxury approach to evening dress rather than requiring traditional formalwear." },
        { q: "Is Seabourn good for foodies?", a: "Yes. Seabourn is particularly suited to travelers who value fine dining, premium beverages, caviar and destination-inspired cuisine." },
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

/* ── Page ──────────────────────────────────────────────────────── */
const SeabournDiningGuide = () => {
    const [readMore, setReadMore] = useState(false);
    const [activeVenueIndex, setActiveVenueIndex] = useState(0);

    return (
        <div className="Asc-page-wrapper">
            <Helmet>
                <title>Seabourn Dining Guide: Restaurants, Menus & Dining</title>
                <meta name="title" content="Seabourn Dining Guide: Restaurants, Food & Room Service" />
                <meta
                    name="description"
                    content="Explore Seabourn dining, including restaurants, complimentary meals, open seating, room service, specialty dining, drinks, dietary needs and what to expect onboard."
                />
                <script type="application/ld+json">{JSON.stringify(seabournDiningSchema)}</script>
            </Helmet>
            <Nav />

            {/* ── HERO (custom Sbc-hero classes) ──────────────────────── */}
            <section className="Sbc-hero-section">
                <div className="Sbc-hero-overlay"></div>

                <div className="Sbc-hero-content">
                    <h1>Seabourn Dining Guide <br /> Restaurants, Food, Menus &amp; Room Service</h1>
                    <p>
                        Dining is one of the most important parts of the Seabourn experience.
                    </p>
                    {readMore && (
                        <>
                            <p>
                                Unlike a large resort-style cruise ship with dozens of restaurants and massive buffets, Seabourn takes a more intimate approach to dining. Guests can choose from thoughtfully designed restaurants, casual venues, in-suite dining and destination-inspired culinary experiences.
                            </p>
                            <p>
                                Seabourn also offers a particularly flexible approach to dining. You aren't generally locked into one table or dining time for the entire voyage.
                            </p>
                            <p>
                                For travelers researching Seabourn food, restaurants, menus, room service and dining inclusions, this guide explains what to expect before you book.
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

            {/* ── IS DINING INCLUDED ──────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sdg-included">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Quick Answer</span>
                        <h2 className="Sbc-h2">Is Dining Included on Seabourn?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sdg-included-grid">
                        <div className="Sdg-included-content">
                            <p className="Sdg-included-lead">
                                Yes. Dining is a core part of Seabourn's all-inclusive cruise
                                experience. Your cruise fare includes meals in the ship's primary
                                dining venues, along with in-suite dining and selected casual
                                dining options.
                            </p>
                            <p className="Sbc-p" style={{ marginTop: "16px", color: "#4e5d78", fontWeight: 500 }}>
                                Depending on the ship, dining venues can include:
                            </p>
                            <ul className="Sbc-dining-venues">
                                {diningVenueNames.map((v, i) => (
                                    <li key={i}>{v}</li>
                                ))}
                            </ul>
                            <p className="Sbc-p" style={{ marginTop: "20px", color: "#4e5d78", fontSize: "14.5px" }}>
                                The exact restaurant lineup varies by ship and can change as
                                Seabourn introduces or updates venues.
                            </p>
                        </div>

                        <div className="Sdg-included-image-placeholder">
                            <div className="Sdg-included-icon-wrapper">
                                <Utensils size={40} className="Sdg-included-placeholder-icon" />
                            </div>
                            <span className="Sdg-included-placeholder-text">Fine Dining Onboard Seabourn</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DINING AT A GLANCE ──────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sdg-glance">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">At A Glance</span>
                        <h2 className="Sbc-h2">Seabourn Dining at a Glance</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Ssf-table-wrap">
                        <table className="Ssf-table">
                            <thead>
                                <tr>
                                    <th>Dining Feature</th>
                                    <th>Seabourn Experience</th>
                                </tr>
                            </thead>
                            <tbody>
                                {glanceRows.map((row, i) => (
                                    <tr key={i}>
                                        <td data-label="Dining Feature">{row.name}</td>
                                        <td data-label="Seabourn Experience">{row.text}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── SIX DINING VENUES ───────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sdg-venues">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Where to Eat</span>
                        <h2 className="Sbc-h2">The Seabourn Dining Venues</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sdg-venues-tabs">
                        {diningVenueCards.map((card, i) => {
                            const Icon = card.icon;
                            const cleanTitle = card.title.replace(/^\d+\.\s*/, "");
                            return (
                                <button
                                    key={i}
                                    className={`Sdg-venues-tab-btn ${activeVenueIndex === i ? "active" : ""}`}
                                    onClick={() => setActiveVenueIndex(i)}
                                >
                                    <Icon size={16} />
                                    <span>{cleanTitle}</span>
                                </button>
                            );
                        })}
                    </div>

                    {(() => {
                        const activeVenue = diningVenueCards[activeVenueIndex];
                        const Icon = activeVenue.icon;
                        return (
                            <div className="Sdg-venue-details-card">
                                <div className="Sdg-venue-details-left">
                                    <div className="Sdg-venue-large-badge">
                                        <Icon size={32} />
                                    </div>
                                    <h3 className="Sdg-venue-title">{activeVenue.title}</h3>
                                    <div className="Sdg-venue-accent-line"></div>
                                    {activeVenue.note && (
                                        <div className="Sdg-venue-note-callout">
                                            <p>{activeVenue.note}</p>
                                        </div>
                                    )}
                                </div>
                                <div className="Sdg-venue-details-right">
                                    <p className="Sdg-venue-desc">{activeVenue.text}</p>
                                    {activeVenue.points.length > 0 && (
                                        <div className="Sdg-venue-highlights">
                                            <h4 className="Sdg-venue-highlights-title">What to Expect:</h4>
                                            <ul className="Sdg-venue-highlights-list">
                                                {activeVenue.points.map((pt, j) => (
                                                    <li key={j}>
                                                        <Check size={20} strokeWidth={3} className="Sdg-venue-check-icon" />
                                                        <span>{pt}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })()}
                </div>
            </section>



            {/* ── BREAKFAST ────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sdg-breakfast">
                <div className="Sbc-container">
                    <div className="Sdg-meal-grid">
                        <div className="Sdg-meal-content">
                            <div className="Sbc-section-header" style={{ textAlign: "left", margin: 0, paddingBottom: 0 }}>
                                <span className="Sbc-eyebrow">Morning Dining</span>
                                <h2 className="Sbc-h2" style={{ margin: "0 0 16px" }}>Seabourn Breakfast</h2>
                                <div className="Sbc-accent-line" style={{ margin: "0 0 24px" }}></div>
                                <p className="Sbc-p" style={{ color: "#4e5d78", marginBottom: "20px" }}>
                                    Breakfast can be one of the most flexible meals on Seabourn.
                                    Guests can generally choose between the options below.
                                </p>
                            </div>

                            <div className="Sbc-brand-highlights" style={{ backgroundColor: 'var(--bg-white)', padding: '24px 28px', border: '1px solid #e3eaf1', borderRadius: '8px' }}>
                                <h4 className="Sbc-highlights-title" style={{ marginTop: 0 }}>Breakfast options include:</h4>
                                <ul className="Sbc-highlights-list">
                                    {breakfastOptions.map((item, i) => (
                                        <li key={i}>
                                            <Check size={22} strokeWidth={2.5} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                           
                        </div>

                        <div className="Sdg-meal-image-placeholder">
                            <div className="Sdg-meal-icon-wrapper">
                                <Coffee size={40} className="Sdg-meal-placeholder-icon" />
                            </div>
                            <span className="Sdg-meal-placeholder-text">Breakfast Dining Onboard</span>
                        </div>
                    </div>
                </div>
            </section>


            {/* ── CTA 1 ───────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Plan Ahead</span>
                    <h3 className="Sbc-cta-title">Reserve Your Favorite Seabourn Restaurant Early</h3>
                    <p className="Sbc-cta-text">
                        Popular specialty venues can fill up fast. Let us help you plan your
                        dining reservations before you set sail.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Start Planning Your Cruise
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>
            <section className="Sbc-section Sbc-bg-white" id="Sdg-lunch">
                <div className="Sbc-container">
                    <div className="Sdg-meal-grid Sdg-meal-reverse">
                        <div className="Sdg-meal-image-placeholder">
                            <div className="Sdg-meal-icon-wrapper">
                                <Sun size={40} className="Sdg-meal-placeholder-icon" />
                            </div>
                            <span className="Sdg-meal-placeholder-text">Lunch Dining Onboard</span>
                        </div>

                        <div className="Sdg-meal-content">
                            <div className="Sbc-section-header" style={{ textAlign: "left", margin: 0, paddingBottom: 0 }}>
                                <span className="Sbc-eyebrow">Midday Dining</span>
                                <h2 className="Sbc-h2" style={{ margin: "0 0 16px" }}>Seabourn Lunch</h2>
                                <div className="Sbc-accent-line" style={{ margin: "0 0 24px" }}></div>
                                <p className="Sbc-p" style={{ color: "#4e5d78", marginBottom: "20px" }}>
                                    Lunch is generally available through several venues, depending on
                                    the ship. Lunch is often a good opportunity to enjoy a less formal
                                    meal between shore excursions.
                                </p>
                            </div>

                            <div className="Sbc-brand-highlights" style={{ backgroundColor: 'var(--bg-soft)', padding: '24px 28px', border: '1px solid #e3eaf1', borderRadius: '8px' }}>
                                <h4 className="Sbc-highlights-title" style={{ marginTop: 0 }}>You may choose:</h4>
                                <ul className="Sbc-highlights-list">
                                    {lunchOptions.map((item, i) => (
                                        <li key={i}>
                                            <Check size={22} strokeWidth={2.5} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DINNER ───────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sdg-dinner">
                <div className="Sbc-container">
                    <div className="Sdg-meal-grid">
                        <div className="Sdg-meal-content">
                            <div className="Sbc-section-header" style={{ textAlign: "left", margin: 0, paddingBottom: 0 }}>
                                <span className="Sbc-eyebrow">Evening Dining</span>
                                <h2 className="Sbc-h2" style={{ margin: "0 0 16px" }}>Seabourn Dinner</h2>
                                <div className="Sbc-accent-line" style={{ margin: "0 0 24px" }}></div>
                                <p className="Sbc-p" style={{ color: "#4e5d78", marginBottom: "20px" }}>
                                    Dinner is where Seabourn's dining experience becomes particularly
                                    distinctive. Rather than requiring guests to eat at the same table
                                    every evening, Seabourn offers a more flexible dining model. You
                                    can select the venue and style of meal that suits your evening.
                                </p>
                            </div>

                            <div className="Sbc-brand-highlights" style={{ backgroundColor: 'var(--bg-white)', padding: '24px 28px', border: '1px solid #e3eaf1', borderRadius: '8px' }}>
                                <h4 className="Sbc-highlights-title" style={{ marginTop: 0 }}>Options may include:</h4>
                                <ul className="Sbc-highlights-list">
                                    {dinnerOptions.map((item, i) => (
                                        <li key={i}>
                                            <Check size={22} strokeWidth={2.5} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="Sdg-meal-image-placeholder">
                            <div className="Sdg-meal-icon-wrapper">
                                <Wine size={40} className="Sdg-meal-placeholder-icon" />
                            </div>
                            <span className="Sdg-meal-placeholder-text">Dinner Dining Onboard</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SEATING, GUESTS, RESERVATIONS Q&A ───────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sdg-seating">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Flexible By Design</span>
                        <h2 className="Sbc-h2">Seating, Company &amp; Reservations</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-card-grid">
                        {seatingQaCards.map((card, i) => {
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

            {/* ── ROOM SERVICE / IN-SUITE DINING ──────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sdg-room-service">
                <div className="Sbc-container">
                    <div className="Sbc-what-grid">
                        <div className="Sbc-what-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Private Dining</span>
                                <h2 className="Sbc-h2">Seabourn Room Service &amp; In-Suite Dining</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p">
                                One of the major advantages of an all-suite luxury cruise is
                                being able to enjoy meals in your own suite. Seabourn provides
                                in-suite dining, allowing guests to have meals delivered rather
                                than visiting a restaurant.
                            </p>
                            <div className="Sbc-brand-highlights" style={{ marginTop: "22px", backgroundColor: 'var(--bg-white)'}}>
                                <h4 className="Sbc-highlights-title">This can be particularly appealing for:</h4>
                                <ul className="Sbc-highlights-list">
                                    {roomServiceReasons.map((item, i) => (
                                        <li key={i}>
                                            <Check size={22} strokeWidth={2.5} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>

                        <div className="Sbc-what-image-container">
                            <div className="Sbc-what-image-placeholder">
                                <div className="Sbc-what-placeholder-icon-wrapper">
                                    <Coffee size={40} className="Sbc-what-placeholder-icon" />
                                </div>
                                <span className="Sbc-what-placeholder-text">Seabourn In-Suite Dining Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ── CTA 2 ───────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Expert Guidance</span>
                    <h3 className="Sbc-cta-title">Want Private Balcony Dining on Seabourn?</h3>
                    <p className="Sbc-cta-text">
                        Veranda suites provide the perfect setting for private dining. We can help you select the ideal suite category for your cruise.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Speak to a Cruise Specialist
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>
            <section className="Sbc-section Sbc-bg-white" id="Sdg-balcony">
                <div className="Sbc-container">
                    <div className="Sdg-meal-grid">
                        <div className="Sdg-meal-content">
                            <div className="Sbc-section-header" style={{ textAlign: "left", margin: 0, paddingBottom: 0 }}>
                                <span className="Sbc-eyebrow">A Private Table</span>
                                <h2 className="Sbc-h2" style={{ margin: "0 0 16px" }}>Seabourn Dining on Your Balcony</h2>
                                <div className="Sbc-accent-line" style={{ margin: "0 0 24px" }}></div>
                                <p className="Sbc-p" style={{ color: "#4e5d78", marginBottom: "20px" }}>
                                    If your suite has a veranda, consider ordering breakfast or
                                    another meal to enjoy outdoors. For travelers who prioritize
                                    private outdoor dining, suite selection becomes particularly
                                    important.
                                </p>
                            </div>

                            <div className="Sbc-brand-highlights">
                                <h4 className="Sbc-highlights-title">Balcony dining is especially memorable when:</h4>
                                <ul className="Sbc-highlights-list">
                                    {balconyReasons.map((item, i) => (
                                        <li key={i}>
                                            <Check size={22} strokeWidth={2.5} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="Sdg-meal-image-placeholder">
                            <div className="Sdg-meal-icon-wrapper">
                                <Sunrise size={40} className="Sdg-meal-placeholder-icon" />
                            </div>
                            <span className="Sdg-meal-placeholder-text">Balcony Dining Onboard</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FOOD QUALITY & CAVIAR ────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-dark" id="Sdg-food-quality">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Culinary Philosophy</span>
                        <h2 className="Sbc-h2">Seabourn Food Quality</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Seabourn's culinary philosophy emphasizes quality over quantity.
                            Instead of offering an enormous number of restaurants, the line
                            focuses on creating a smaller collection of dining experiences.
                            The experience is designed to feel more like a luxury restaurant
                            than a conventional cruise buffet.
                        </p>
                    </div>

                    <div className="Sbc-includes-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
                        <div className="Sbc-includes-card" style={{ gridColumn: "span 4" }}>
                            <div className="Sbc-includes-title">Travelers can expect an emphasis on:</div>
                            <ul>
                                {foodQualityPoints.map((item, i) => (
                                    <li key={i}>
                                        <Check size={16} strokeWidth={2.5} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="Sbc-includes-note">
                        <p>
                            <strong>Does Seabourn Have Caviar?</strong> Yes. Caviar is one of
                            the signature touches associated with Seabourn's luxury
                            experience. It may be featured in different settings and
                            presentations throughout the voyage.
                        </p>
                        <p>
                            For food-focused travelers, this is one of the details that
                            distinguishes Seabourn from many premium cruise lines.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── DRINKS WITH MEALS ────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sdg-drinks">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">What's In the Glass</span>
                        <h2 className="Sbc-h2">Seabourn Drinks With Meals</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Seabourn's all-inclusive approach extends to a broad selection of
                            beverages. Wine selections can change according to the voyage and
                            available inventory.
                        </p>
                        <ul className="Sbc-dining-venues" style={{ justifyContent: "center" }}>
                            {drinksList.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="Sbc-card-grid Sbc-cols-2">
                        {drinksQaCards.map((card, i) => (
                            <div className="Sbc-card" key={i}>
                                <h3 className="Sbc-card-title">{card.title}</h3>
                                <p className="Sbc-card-text">{card.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── DIETARY RESTRICTIONS ─────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sdg-dietary">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Special Requirements</span>
                        <h2 className="Sbc-h2">Seabourn Dining and Dietary Restrictions</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Seabourn can accommodate many dietary needs when notified in
                            advance. If you have a dietary requirement, communicate it during
                            the booking and pre-cruise planning process. Because menus and
                            ingredients can change, guests with serious allergies should
                            speak directly with the onboard culinary and restaurant teams.
                        </p>
                        <p className="Sbc-intro">Examples may include:</p>
                        <ul className="Sbc-dining-venues" style={{ justifyContent: "center" }}>
                            {dietaryTags.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="Sbc-card-grid">
                        {dietaryQaCards.map((card, i) => (
                            <div className="Sbc-card" key={i}>
                                <h3 className="Sbc-card-title">{card.title}</h3>
                                <p className="Sbc-card-text">{card.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ── CTA 3 ───────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Culinary Planning</span>
                    <h3 className="Sbc-cta-title">Plan Your Seabourn Culinary Journey</h3>
                    <p className="Sbc-cta-text">
                        From dietary accommodations to fine dining preferences, our advisors ensure your Seabourn voyage is fully personalized.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Connect with an Advisor
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>
            <section className="Sbc-section Sbc-bg-white" id="Sdg-families">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Multigenerational Travel</span>
                                <h2 className="Sbc-h2">Seabourn Dining for Families</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p">
                                Although Seabourn is primarily an adult-oriented luxury
                                experience, families traveling together can benefit from the
                                flexible dining structure.
                            </p>
                            <div className="Sbc-qa-card">
                                <h4 className="Sbc-qa-card-title">Families can choose:</h4>
                                <ul className="Sbc-highlights-list">
                                    {familiesList.map((item, i) => (
                                        <li key={i}>
                                            <Check size={22} strokeWidth={2.5} style={{ color: "#10b981" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="Sbc-qa-card-footer">to suit different preferences.</div>
                            </div>
                            <p className="Sbc-p">
                                For multigenerational groups, dining flexibility can make it
                                easier to accommodate different preferences.
                            </p>
                        </div>

                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Users size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Family Dining Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SOLO TRAVELERS ───────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sdg-solo">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split Sbc-image-left">
                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Compass size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Solo Dining Image Placeholder</span>
                            </div>
                        </div>

                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Dining Solo</span>
                                <h2 className="Sbc-h2">Seabourn Dining for Solo Travelers</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p">
                                Solo travelers can choose between dining privately and meeting
                                other guests. Open seating provides an advantage because you
                                aren't necessarily assigned to the same dining arrangement for
                                the entire voyage.
                            </p>
                            <p className="Sbc-p">
                                If you enjoy meeting people, ask about shared dining
                                opportunities. If you prefer privacy, request a table for one
                                when available.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── COUPLES ──────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sdg-couples">
                <div className="Sbc-container">
                    <div className="Sbc-qa-split">
                        <div className="Sbc-qa-content">
                            <div className="Sbc-section-header Sbc-align-left">
                                <span className="Sbc-eyebrow">Romance At Sea</span>
                                <h2 className="Sbc-h2">Seabourn Dining for Couples</h2>
                                <div className="Sbc-accent-line"></div>
                            </div>
                            <p className="Sbc-p">Couples have significant flexibility. You can enjoy:</p>
                            <div className="Sbc-qa-card">
                                <ul className="Sbc-highlights-list">
                                    {couplesList.map((item, i) => (
                                        <li key={i}>
                                            <Check size={22} strokeWidth={2.5} style={{ color: "#10b981" }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="Sbc-p">
                                For anniversaries and special celebrations, let your travel
                                advisor and Seabourn know in advance.
                            </p>
                        </div>

                        <div className="Sbc-qa-image-container">
                            <div className="Sbc-qa-image-placeholder">
                                <div className="Sbc-qa-placeholder-icon-wrapper">
                                    <Heart size={40} className="Sbc-qa-placeholder-icon" />
                                </div>
                                <span className="Sbc-qa-placeholder-text">Seabourn Couples Dining Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DRESS CODE ───────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sdg-dress-code">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">What to Pack</span>
                        <h2 className="Sbc-h2">What Is the Dress Code for Seabourn Dining?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Seabourn generally maintains a relaxed luxury dress code rather
                            than traditional formal-night cruising. For dinner, smart casual
                            clothing is generally appropriate. The exact expectations can
                            vary by venue and evening, so check the dress guidance for your
                            specific voyage.
                        </p>
                    </div>

                    <div className="Sbc-compare-grid">
                        <div className="Sbc-compare-card">
                            <h3 className="Sbc-compare-heading">Women</h3>
                            <ul className="Sbc-compare-list">
                                {dressWomen.map((item, i) => (
                                    <li key={i}>
                                        <Check size={16} strokeWidth={2} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="Sbc-compare-card Sbc-compare-alt">
                            <h3 className="Sbc-compare-heading">Men</h3>
                            <ul className="Sbc-compare-list">
                                {dressMen.map((item, i) => (
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


            {/* ── CTA 4 ───────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Trips & Ships Benefit</span>
                    <h3 className="Sbc-cta-title">Plan Your Perfect Seabourn Voyage</h3>
                    <p className="Sbc-cta-text">
                        Let our luxury cruise experts handle every detail, from suite selection to onboard dining preferences.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Request a Seabourn Quote
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>
            <section className="Sbc-section Sbc-bg-white" id="Sdg-vs-traditional">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">The Difference</span>
                        <h2 className="Sbc-h2">Seabourn Dining vs. <br /> Traditional Cruise Dining</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            Seabourn's approach is different from the traditional cruise
                            model. This is an important distinction for travelers deciding
                            whether Seabourn matches their preferred cruise style.
                        </p>
                    </div>

                    <div className="Ssf-table-wrap">
                        <table className="Ssf-table">
                            <thead>
                                <tr>
                                    <th>Traditional Cruise Dining</th>
                                    <th>Seabourn Experience</th>
                                </tr>
                            </thead>
                            <tbody>
                                {vsTraditional.map((item, i) => (
                                    <tr key={i}>
                                        <td data-label="Traditional Cruise Dining">
 
                                            {item}
                                        </td>
                                        <td data-label="Seabourn Experience">
                                        
                                            {vsSeabourn[i]}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── WHAT MAKES SEABOURN DINING DIFFERENT ─────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sdg-different">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Three Reasons</span>
                        <h2 className="Sbc-h2">What Makes Seabourn Dining Different?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">Three characteristics stand out:</p>
                    </div>

                    <div className="Sbc-card-grid">
                        {differentCards.map((card, i) => {
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

            {/* ── TIPS ─────────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sdg-tips">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Insider Advice</span>
                        <h2 className="Sbc-h2">Tips for Getting the Most From Seabourn Dining</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-card-grid">
                        {tipsList.map((tip, i) => (
                            <div className="Sbc-card" key={i}>
                                <div className="Sbc-card-icon">
                                    <span className="Sdg-tip-number">{i + 1}</span>
                                </div>
                                <h3 className="Sbc-card-title">{tip.title}</h3>
                                <p className="Sbc-card-text">{tip.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── BEST FOR DIFFERENT TRAVELERS ─────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sdg-best-for">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Match Your Style</span>
                        <h2 className="Sbc-h2">Best Seabourn Dining Experiences for Different Travelers</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Ssf-table-wrap">
                        <table className="Ssf-table">
                            <thead>
                                <tr>
                                    <th>Traveler Type</th>
                                    <th>Recommended Experience</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bestForRows.map((row, i) => (
                                    <tr key={i}>
                                        <td data-label="Traveler Type">{row.name}</td>
                                        <td data-label="Recommended Experience">{row.text}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>


            {/* ── CTA 5 ───────────────────────────────────────────────── */}
            <section className="Sbc-cta-section Sbc-cta-dark">
                <div className="Sbc-container">
                    <span className="Sbc-cta-eyebrow">Ready to Book?</span>
                    <h3 className="Sbc-cta-title">Ready to Experience Seabourn Dining?</h3>
                    <p className="Sbc-cta-text">
                        Get in touch with Trips & Ships for expert cruise guidance, special promotions, and complimentary booking support.
                    </p>
                    <Link to="/contact" className="Sbc-cta-button">
                        Start Planning Now
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>
            <section className="Sbc-section Sbc-bg-white" id="Sdg-food-good">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Our Take</span>
                        <h2 className="Sbc-h2">Is Seabourn Food Good?</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-intro">
                            For travelers who prioritize fine dining, flexibility and premium
                            ingredients, Seabourn is a strong choice. The line's culinary
                            experience is less about having an enormous number of restaurants
                            and more about creating a refined selection of venues that
                            complement the small-ship experience. The ability to combine fine
                            dining with flexible seating, premium beverages and in-suite
                            meals is one of Seabourn's strongest culinary advantages.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── PROS AND CONS ─────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-soft" id="Sdg-pros-cons">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Weighing It Up</span>
                        <h2 className="Sbc-h2">Seabourn Dining: Pros and Cons</h2>
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

            {/* ── ANGELA HUGHES AUTHORITY BOX ──────────────────────────── */}
            <section className="Sbc-expert-section" id="Sdg-expert-insight">
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

            {/* ── FAQ ──────────────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-white" id="Sdg-faq">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <h2 className="Sbc-h2">Frequently Asked Questions About Seabourn Dining</h2>
                        <div className="Sbc-accent-line"></div>
                        <p className="Sbc-faq-intro">
                            Everything travelers need to know before booking a Seabourn
                            cruise.
                        </p>
                    </div>
                    <DiningFAQ />
                </div>
            </section>

            {/* ── FINAL VERDICT ────────────────────────────────────────── */}
            <section className="Sbc-section Sbc-bg-dark" id="Sdg-verdict">
                <div className="Sbc-container">
                    <div className="Sbc-section-header">
                        <span className="Sbc-eyebrow">Final Verdict</span>
                        <h2 className="Sbc-h2">Is Seabourn Good for Food and Dining?</h2>
                        <div className="Sbc-accent-line"></div>
                    </div>

                    <div className="Sbc-verdict-copy">
                        <p className="Sbc-p">
                            Yes. Seabourn's dining experience is one of its strongest selling
                            points, particularly for travelers who prefer quality,
                            flexibility and personalized service over sheer restaurant
                            quantity. You can enjoy a leisurely dinner in The Restaurant, a
                            casual meal at The Colonnade, a specialty dining experience, or
                            breakfast delivered directly to your suite.
                        </p>
                        <p className="Sbc-p">
                            Add included wines and premium beverages, flexible seating and
                            Seabourn's signature caviar experience, and dining becomes an
                            important part of the overall luxury proposition.
                        </p>

                        <div className="Sbc-verdict-recommend">
                            <p>
                                <strong>Our recommendation:</strong> If your ideal cruise
                                includes excellent food without having to constantly
                                calculate additional dining and beverage charges, Seabourn
                                deserves a place on your shortlist.
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

export default SeabournDiningGuide;