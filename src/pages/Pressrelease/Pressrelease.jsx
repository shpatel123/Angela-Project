import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Award,
  Globe,
  Ship,
  Users,
  ArrowRight,
  MapPin,
  Check,
  ExternalLink,
  Phone,
  Mail,
  Plus,
  Minus,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";
import "./Pressrelease.css";

/* ─── SCHEMA ─────────────────────────────────────────────────────────────── */
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
      "@type": "NewsArticle",
      headline:
        "TravelPulse 2026 Most Influential Woman in Travel Angela Hughes Meets with Explora Journeys Vice President Aimee Price to Discuss Global Expansion Through 2028",
      datePublished: "2026-06-02",
      author: {
        "@type": "Person",
        name: "Angela Hughes",
      },
      publisher: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel",
        url: "https://www.tripsandships.com",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tripsandships.com" },
        { "@type": "ListItem", position: 2, name: "Press", item: "https://www.tripsandships.com/press" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Angela Hughes Meets Explora Journeys VP Aimee Price",
          item: "https://www.tripsandships.com/press/angela-hughes-explora-journeys-2026",
        },
      ],
    },
  ],
};

/* ─── TAGS ────────────────────────────────────────────────────────────────── */
const tags = [
  { label: "Explora Journeys luxury cruises", href: "https://www.24-7pressrelease.com/search_press_releases_by_tag?keywords=Explora+Journeys+luxury+cruises" },
  { label: "Small ship luxury cruising", href: "https://www.24-7pressrelease.com/search_press_releases_by_tag?keywords=Small+ship+luxury+cruising" },
  { label: "Luxury cruise travel advisor", href: "https://www.24-7pressrelease.com/search_press_releases_by_tag?keywords=Luxury+cruise+travel+advisor" },
  { label: "Hosted luxury cruise sailings", href: "https://www.24-7pressrelease.com/search_press_releases_by_tag?keywords=Hosted+luxury+cruise+sailings" },
  { label: "Luxury experiential travel", href: "https://www.24-7pressrelease.com/search_press_releases_by_tag?keywords=Luxury+experiential+travel" },
  { label: "Trips & Ships Luxury Travel", href: "https://www.24-7pressrelease.com/search_press_releases_by_tag?keywords=Trips+%26+Ships+Luxury+Travel" },
];

/* ═══════════════════════════════════════════════════════════════════════════ */
const PressRelease = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeShip, setActiveShip] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [meetingReadMore, setMeetingReadMore] = useState(false);

  const images = [];

  useEffect(() => {
    if (!images.length) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  const ships = [
    { name: "Explora IV", timeframe: "Upcoming Launch" },
    { name: "Explora V", timeframe: "Upcoming Launch" },
    { name: "Explora VI", timeframe: "Through 2028" },
  ];

  const destinations = [
    "Mediterranean",
    "Northern Europe",
    "Norwegian Fjords",
    "Iceland",
    "Caribbean",
    "North America",
    "Transatlantic Voyages",
    "Other Emerging Luxury Cruise Destinations",
  ];

  return (
    <div className="pr-page-wrapper">
      <Helmet>
        <title>
          TravelPulse 2026 Most Influential Woman in Travel Angela Hughes Meets with Explora Journeys VP Aimee Price | Trips & Ships
        </title>
        <meta
          name="description"
          content="Angela Hughes, CEO of Trips & Ships Luxury Travel, named TravelPulse 2026 Most Influential Woman in Travel, meets with Explora Journeys Vice President Aimee Price to discuss global luxury cruise expansion through 2028."
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Nav />

      {/* ── HERO & SUMMARY ────────────────────────────────────────────────── */}
      <section className="Scenic_hero_section">
        {images.map((img, index) => (
          <div
            key={index}
            className={`Scenic_hero_bg ${
              index === currentSlide ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
        <div className="Scenic_hero_overlay"></div>
        <div className="Scenic_hero_content">
          <span className="pr-hero-eyebrow">Press Release · June 2, 2026</span>
          <h1 className="pr-hero-h1">
            TravelPulse 2026 Most Influential<br />Woman in Travel Angela Hughes<br />
            Meets with Explora Journeys<br />Vice President Aimee Price
          </h1>
          <p className="pr-hero-sub">
            To Discuss Global Expansion Through 2028
          </p>
          <div className="pr-hero-badge-row">
            <span className="pr-hero-badge"><Award size={14} /> TravelPulse 2026</span>
            <span className="pr-hero-badge"><Ship size={14} /> Explora Journeys</span>
            <span className="pr-hero-badge"><MapPin size={14} /> San Diego, CA</span>
          </div>

          {readMore && (
            <div className="pr-hero-summary-expand">
              <p className="pr-hero-summary-text">
                The meeting focused on the future growth of small ship luxury cruising, hosted sailings, immersive travel experiences, and the continued expansion of Explora Journeys' global fleet and itineraries through 2028.
              </p>
              <p className="pr-hero-summary-tagline">
                Luxury travelers are seeking smaller ships, deeper experiences, personalized service, and meaningful journeys. Explora Journeys continues to shape the future of luxury cruising.
              </p>
            </div>
          )}

          <div className="pr-hero-readmore-wrap">
            <button className="pr-hero-readmore-btn" onClick={() => setReadMore(!readMore)}>
              {readMore ? "Read Less" : "Read More"}
              {readMore ? <Minus size={14} /> : <Plus size={14} />}
            </button>
          </div>
        </div>
      </section>

      {/* ── SECTION A: Executive Meeting & Industry Insights ──────────────── */}
      <section className="pr-meeting-section">
        <div className="pr-container">
          <div className="pr-meeting-grid">
            <div className="pr-meeting-left">
              <div className="pr-dateline">
                <MapPin size={13} />
                <span>San Diego, CA &mdash; June 02, 2026 / 24-7PressRelease</span>
              </div>
              <p className="pr-lead-text">
                Angela Hughes, CEO of Trips &amp; Ships Luxury Travel and founder of Luxury Travel University, recently met with Aimee Price, Vice President of Field Sales North America for Explora Journeys, in San Diego to discuss the continued expansion of the luxury cruise market, the evolving future of luxury ocean travel, and the ongoing rollout of new Explora Journeys ships and global itineraries through 2028.
              </p>
              <p className="pr-body-para">
                The meeting focused on strengthening strategic partnerships within the luxury travel sector as demand for small ship luxury cruising, hosted sailings, immersive travel experiences, and premium ocean journeys continues to grow globally. Discussions also centered around advisor education, luxury cruise sales growth, client experience, hosted sailings, and the continued evolution of the Explora Journeys brand within the North American luxury travel market.
                {!meetingReadMore && (
                  <button
                    className="pr-inline-link-toggle"
                    onClick={() => setMeetingReadMore(true)}
                  >
                    ... Read More
                  </button>
                )}
              </p>

              {meetingReadMore && (
                <p className="pr-body-para pr-meeting-expand-text">
                  Hughes also noted a continued shift in the luxury cruise market toward smaller ships, destination immersion, and experience driven travel. The discussions also highlighted the continued evolution of the onboard guest experience, including destination immersion, curated culinary experiences, wellness programming, and personalized services designed to create a more seamless luxury travel experience both onboard and ashore.
                  <button
                    className="pr-inline-link-toggle"
                    onClick={() => setMeetingReadMore(false)}
                  >
                    Read Less
                  </button>
                </p>
              )}
            </div>
            <div className="pr-meeting-right">
              <div className="pr-focus-card">
                <h3 className="pr-focus-title">
                  <Users size={20} className="pr-focus-item-icon" /> Meeting Focus Areas
                </h3>
                <ul className="pr-focus-list">
                  {[
                    "Small Ship Luxury Cruising",
                    "Immersive Travel Itineraries",
                    "Advisor Educational Training",
                    "Client Experience Rollouts",
                    "Luxury Cruise Sales Expansion",
                    "Hosted Group Travel Programs",
                  ].map((item, idx) => (
                    <li key={idx} className="pr-focus-item">
                      <span className="pr-focus-check-wrap">
                        <Check size={12} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION B: Fleet Expansion & Destinations ─────────────────────── */}
      <section className="pr-fleet-section">
        <div className="pr-container">
          <div className="pr-section-header">
            <span className="pr-eyebrow">Fleet &amp; Destinations</span>
            <h2 className="pr-h2">Explora Journeys Fleet Expansion</h2>
            <div className="pr-accent-line" />
          </div>

          <div className="pr-fleet-intro-row">
            <div className="pr-fleet-intro-lead">
              As Explora Journeys continues its global expansion with the upcoming launches of Explora IV, Explora V, and Explora VI through 2028, discussions also included the continued development of itineraries across the Mediterranean, Northern Europe, the Norwegian Fjords, Iceland, the Caribbean, North America, transatlantic voyages, and other emerging luxury cruise destinations around the world.
            </div>
            <div className="pr-fleet-intro-support">
              Hughes has been a strong supporter of Explora Journeys since the launch of the brand and continues to see significant momentum among affluent travelers seeking a more elevated and refined cruise experience. Her agency has actively supported the brand through hosted sailings, advisor education initiatives, luxury cruise marketing campaigns, strategic growth partnerships, and curated luxury group travel experiences.
            </div>
          </div>

          <div className="pr-fleet-grid">
            <div className="pr-fleet-card">
              <h4 className="pr-sidebar-card-title">
                <Ship size={16} /> Interactive Fleet Roadmap
              </h4>
              <div className="pr-ships-tab-row">
                {ships.map((s, i) => (
                  <button
                    key={i}
                    className={`pr-ship-tab${activeShip === i ? " pr-ship-tab-active" : ""}`}
                    onClick={() => setActiveShip(i)}
                  >
                    {s.name}
                  </button>
                ))}
              </div>
              <div className="pr-ship-active-panel">
                <span className="pr-ship-active-name">{ships[activeShip].name}</span>
                <span className="pr-ship-active-tag">{ships[activeShip].timeframe}</span>
              </div>
              <p className="pr-sidebar-note">Fleet roadmap expansion through 2028</p>
            </div>

            <div className="pr-fleet-dest-card">
              <h4 className="pr-sidebar-card-title">
                <Globe size={16} /> Itinerary Destinations Discussed
              </h4>
              <div className="pr-dest-grid">
                {destinations.map((d, i) => (
                  <div key={i} className="pr-dest-pill">
                    <Check size={12} className="pr-dest-check" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION C: Executive Insights (Quotes) ───────────────────────── */}
      <section className="pr-editorial-quote-section">
        <div className="pr-container">
          <div className="pr-quote-container">
            <span className="pr-quote-heading-small">Executive Perspective</span>
            <blockquote className="pr-quote-block-editorial">
              "Explora Journeys continues to elevate the luxury cruise experience in a way that genuinely resonates with today's traveler. Today's luxury traveler is looking for meaningful experiences, smaller ships, elevated service, immersive destinations, exceptional dining, wellness, and a more intentional way to travel."
            </blockquote>
            <div className="pr-quote-divider-line" />
            <blockquote className="pr-quote-block-editorial">
              "We are seeing travelers prioritize experiences more than ever before. Luxury travelers are increasingly seeking deeper cultural connection, personalized service, wellness focused experiences, and journeys that feel more intimate and transformational rather than transactional."
            </blockquote>
            <span className="pr-quote-author-name">Angela Hughes</span>
            <span className="pr-quote-author-role">CEO, Trips &amp; Ships Luxury Travel</span>
          </div>
        </div>
      </section>

      {/* ── SECTION D: Leadership & Host Agency Opportunities ───────────── */}
      <section className="pr-leadership-section">
        <div className="pr-container">
          <div className="pr-leadership-panel">
            {/* Left side: Image */}
            <div className="pr-leader-img-col">
              <img src={AboutImage} alt="Angela Hughes" className="pr-leader-photo" />
            </div>

            {/* Right side: Content */}
            <div className="pr-leader-content-col">
              <div className="pr-leader-bio-block">
                <h3 className="pr-leader-name">Angela Hughes</h3>
                <span className="pr-leader-title">CEO · Trips &amp; Ships Luxury Travel</span>
                
                <p className="pr-leader-bio-text">
                  Angela Hughes leads a growing network of more than 140 luxury travel advisors specializing in luxury cruises, river cruises, expedition cruises, safaris, and custom travel experiences around the world. With more than 40 years in the travel industry and travel experience spanning over 121 countries, Hughes is widely recognized as one of the leading voices in luxury travel.
                </p>

                <div className="pr-leader-achievements">
                  <div className="pr-achievement-badge">
                    <span className="pr-achievement-icon"><Award size={14} /></span>
                    <span className="pr-achievement-text">TravelPulse 2026 Most Influential Woman in Travel</span>
                  </div>
                  <div className="pr-achievement-badge">
                    <span className="pr-achievement-icon"><Award size={14} /></span>
                    <span className="pr-achievement-text">2024 Luxury Travel Influencer of the Year · Travel Leaders Network</span>
                  </div>
                </div>
              </div>

              <div className="pr-leader-divider" />

              <div className="pr-host-agency-block">
                <h3 className="pr-agency-heading">Grow Your Luxury Travel Business</h3>
                <p className="pr-agency-text">
                  Trips &amp; Ships Luxury Travel also continues to expand its advisor network nationwide through its luxury host agency division. The company is actively seeking experienced and growth-minded travel advisors interested in specializing in luxury cruises, safaris, river cruises, expedition travel, and immersive travel experiences.
                </p>
                <p className="pr-agency-text">
                  In addition to serving on the Travel Leaders Network Advisory Board, Angela Hughes was named the 2024 Luxury Travel Influencer of the Year by Travel Leaders Network.
                </p>
                
                <div className="pr-agency-cta-wrapper">
                  <a href="http://www.luxuryhostagency.com" target="_blank" rel="noopener noreferrer" className="pr-agency-cta-btn">
                    Join Our Host Agency <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT TRIPS & SHIPS ───────────────────────────────────────────── */}
      <section className="pr-section pr-bg-soft">
        <div className="pr-container">
          <div className="pr-section-header">
            <span className="pr-eyebrow">About</span>
            <h2 className="pr-h2">Trips &amp; Ships Luxury Travel</h2>
            <div className="pr-accent-line" />
          </div>

          <div className="pr-about-grid">
            <div className="pr-about-card">
              <div className="pr-about-card-top">
                <div className="pr-about-icon-wrap"><Ship size={24} /></div>
                <h4 className="pr-about-card-title">Concierge Luxury Planning</h4>
              </div>
              <p className="pr-about-card-text">
                Trips &amp; Ships Luxury Travel is a luxury focused travel company and host agency specializing in luxury cruises, expedition cruises, river cruises, safaris, small ship cruising, alumni travel, and custom travel experiences worldwide. The company supports a growing network of luxury travel advisors and provides concierge level travel planning services for travelers around the globe.
              </p>
              <a href="http://www.tripsandships.com" target="_blank" rel="noopener noreferrer" className="pr-about-link">
                <span>www.tripsandships.com</span> <ExternalLink size={12} />
              </a>
            </div>

            <div className="pr-about-card pr-about-card-highlight">
              <div className="pr-about-card-top">
                <div className="pr-about-icon-wrap"><Users size={24} /></div>
                <h4 className="pr-about-card-title">Advisor Host Agency</h4>
              </div>
              <p className="pr-about-card-text">
                Trips &amp; Ships Luxury Travel is also actively expanding its nationwide network of independent contractors and luxury travel advisors. The company is seeking growth minded professionals interested in specializing in luxury cruises, river cruises, safaris, expedition travel, small ship cruising, and immersive travel experiences. Advisors joining the agency gain access to luxury supplier partnerships, hosted sailings, educational training opportunities, marketing support, industry networking, and a collaborative luxury travel community focused on long term business growth.
              </p>
              <a href="http://www.luxuryhostagency.com" target="_blank" rel="noopener noreferrer" className="pr-about-link">
                <span>www.luxuryhostagency.com</span> <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── MEDIA CONTACT ─────────────────────────────────────────────────── */}
      <section className="pr-section pr-bg-white pr-contact-section-wrapper">
        <div className="pr-container">
          <div className="pr-section-header">
            <span className="pr-eyebrow">Connect</span>
            <h2 className="pr-h2">Press &amp; Media Contacts</h2>
            <div className="pr-accent-line" />
          </div>

          <div className="pr-contact-grid">

            <div className="pr-contact-block">
              <div className="pr-contact-card-header">
                <h3 className="pr-contact-heading">Media Contact</h3>
                <div className="pr-contact-card-icon-wrap"><Mail size={18} /></div>
              </div>
              <div className="pr-contact-name">Angela Hughes</div>
              <div className="pr-contact-org">Trips &amp; Ships Luxury Travel</div>
              <div className="pr-contact-details">
                <a href="mailto:angela@tripsandships.com" className="pr-contact-item">
                  <span className="pr-item-icon-circle"><Mail size={12} /></span>
                  <span className="pr-item-label">angela@tripsandships.com</span>
                </a>
                <a href="tel:6038603274" className="pr-contact-item">
                  <span className="pr-item-icon-circle"><Phone size={12} /></span>
                  <span className="pr-item-label">603 860 3274</span>
                </a>
                <a href="http://www.tripsandships.com" target="_blank" rel="noopener noreferrer" className="pr-contact-item">
                  <span className="pr-item-icon-circle"><ExternalLink size={12} /></span>
                  <span className="pr-item-label">www.tripsandships.com</span>
                </a>
              </div>
            </div>

            <div className="pr-contact-block">
              <div className="pr-contact-card-header">
                <h3 className="pr-contact-heading">Contact Information</h3>
                <div className="pr-contact-card-icon-wrap"><MapPin size={18} /></div>
              </div>
              <div className="pr-contact-name">Angela Hughes</div>
              <div className="pr-contact-org">Trips &amp; Ships Luxury Travel</div>
              <div className="pr-contact-address"><MapPin size={12} style={{ opacity: 0.7 }} /> Winter Garden, Florida, United States</div>
              <div className="pr-contact-details">
                <a href="tel:6038603274" className="pr-contact-item">
                  <span className="pr-item-icon-circle"><Phone size={12} /></span>
                  <span className="pr-item-label">603 860 3274</span>
                </a>
                <a href="mailto:angela@tripsandships.com" className="pr-contact-item">
                  <span className="pr-item-icon-circle"><Mail size={12} /></span>
                  <span className="pr-item-label">Email Us Here</span>
                </a>
                <a href="http://www.tripsandships.com" target="_blank" rel="noopener noreferrer" className="pr-contact-item">
                  <span className="pr-item-icon-circle"><ExternalLink size={12} /></span>
                  <span className="pr-item-label">Visit Our Website</span>
                </a>
              </div>
            </div>

            <div className="pr-contact-block">
              <div className="pr-contact-card-header">
                <h3 className="pr-contact-heading">Follow Us</h3>
                <div className="pr-contact-card-icon-wrap"><Globe size={18} /></div>
              </div>
              <div className="pr-tags-wrap">
                {tags.map((tag, i) => (
                  <a key={i} href={tag.href} target="_blank" rel="noopener noreferrer" className="pr-tag">
                    {tag.label}
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="pr-cta-section">
        <div className="pr-container">
          <div className="pr-cta-card">
            <span className="pr-eyebrow">Plan Your Luxury Cruise</span>
            <h2 className="pr-cta-h2">
              Interested in Future Explora Journeys Departures,<br />Hosted Sailings &amp; Curated Luxury Cruise Experiences?
            </h2>
            <p className="pr-cta-sub">
              Learn more and connect with the Trips &amp; Ships Luxury Travel team.
            </p>
            <Link to="/contact" className="pr-cta-btn">
              Visit www.tripsandships.com <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PressRelease;