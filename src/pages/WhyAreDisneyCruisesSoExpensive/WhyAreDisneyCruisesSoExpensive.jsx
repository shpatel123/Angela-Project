import { useState, useEffect } from "react";
import {
  MapPin,
  Award,
  Check,
  Plus,
  Minus,
  ArrowRight,
  Star,
  Compass,
  Palmtree,
  TrendingUp,
  Users,
  Sparkles,
  Ship,
  Home,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";
import { Helmet } from "react-helmet-async";
import "../DisneyCruisevsVikingOcean/DisneyCruisevsVikingOcean.css";
import AlumniRiverCruise1 from "../../assets/LuxuryAlumniRiverCruises/AlumniRiverCruise.jpg";
import AlumniRiverCruise2 from "../../assets/LuxuryAlumniRiverCruises/AlumniRiverCruise2.jpg";
import AlumniRiverCruise3 from "../../assets/LuxuryAlumniRiverCruises/AlumniRiverCruise3.jpg";
import AlumniRiverCruise4 from "../../assets/LuxuryAlumniRiverCruises/AlumniRiverCruise4.jpg";

const disneyValueReasons = [
  {
    id: "entertainment",
    title: "Broadway-Style Entertainment",
    badge: "Entertainment",
    icon: Sparkles,
    desc: "Disney's live productions feature professional performers, advanced stage technology, and original shows that cruise experts consistently rank among the best at sea.",
    columns: [
      {
        label: "Includes:",
        items: [
          "Professional Performers",
          "Original Productions",
          "Advanced Stage Tech",
          "High Production Values",
        ],
      },
    ],
    themeLabel: "Value Highlight",
    themeText:
      "Tickets to comparable Broadway-quality shows on land would cost hundreds of dollars. On a Disney cruise, they're included in your fare.",
  },
  {
    id: "private-islands",
    title: "Private Island Destinations",
    badge: "Private Islands",
    icon: Palmtree,
    desc: "Disney guests visit Castaway Cay and Lookout Cay at Lighthouse Point—private Bahamian destinations that require ongoing maintenance, staffing, and infrastructure investment.",
    columns: [
      {
        label: "Features:",
        items: [
          "Castaway Cay",
          "Lookout Cay",
          "Adult-Only Beaches",
          "Exclusive Programming",
        ],
      },
    ],
    themeLabel: "Value Highlight",
    themeText:
      "Private island access is a rare premium in cruising. Disney's investment in these destinations is reflected in the fare—and experienced directly by every guest.",
  },
  {
    id: "space-per-guest",
    title: "More Space Per Guest",
    badge: "Space & Comfort",
    icon: Compass,
    desc: "Disney ships intentionally carry fewer passengers than comparably sized vessels from other cruise lines, resulting in less crowding, larger public areas, and a more comfortable overall experience.",
    columns: [
      {
        label: "Benefits:",
        items: [
          "Less Crowding",
          "Larger Public Spaces",
          "Better Guest Flow",
          "Relaxed Atmosphere",
        ],
      },
    ],
    themeLabel: "Value Highlight",
    themeText:
      "Fewer revenue-generating passengers means higher per-person costs—but it also means a noticeably superior onboard experience.",
  },
  {
    id: "multigenerational",
    title: "Multigenerational Design",
    badge: "For Every Age",
    icon: Users,
    desc: "Disney invests heavily in creating experiences that simultaneously appeal to children, parents, and grandparents—a balance few cruise lines have mastered.",
    columns: [
      {
        label: "Perfect For:",
        items: [
          "Families",
          "Grandparents & Grandchildren",
          "Extended Family Groups",
          "Family Reunions",
        ],
      },
    ],
    themeLabel: "Value Highlight",
    themeText:
      "The ability to create meaningful memories across multiple generations in a single vacation is one of Disney's most significant—and most difficult to replicate—advantages.",
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.tripsandships.com/#organization",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com",
      logo: "https://www.tripsandships.com/logo.png",
      description:
        "Luxury travel agency specializing in luxury cruises, family travel, river cruises, expedition cruises, and custom travel planning.",
    },
    {
      "@type": "TravelAgency",
      "@id": "https://www.tripsandships.com/#travelagency",
      name: "Trips & Ships Luxury Travel",
      url: "https://www.tripsandships.com",
      description:
        "Luxury travel experts helping travelers choose the right cruise experiences through expert comparisons, planning, and personalized travel services.",
    },
    {
      "@type": "WebPage",
      "@id":
        "https://www.tripsandships.com/why-are-disney-cruises-so-expensive",
      url: "https://www.tripsandships.com/why-are-disney-cruises-so-expensive",
      name: "Why Are Disney Cruises So Expensive?",
      description:
        "Wondering why Disney Cruises cost more than many other cruise lines? Discover what drives Disney Cruise Line pricing, what is included, and whether Disney cruises are worth the premium for families and multigenerational travelers.",
      isPartOf: {
        "@id": "https://www.tripsandships.com/#website",
      },
      about: [
        {
          "@type": "Organization",
          name: "Disney Cruise Line",
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.tripsandships.com/why-are-disney-cruises-so-expensive#breadcrumb",
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
          name: "Cruise Guide",
          item: "https://www.tripsandships.com/cruise-comparisons",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Why Are Disney Cruises So Expensive?",
          item: "https://www.tripsandships.com/why-are-disney-cruises-so-expensive",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id":
        "https://www.tripsandships.com/why-are-disney-cruises-so-expensive#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why are Disney Cruises more expensive than Royal Caribbean?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Disney invests heavily in entertainment, family experiences, character interactions, and premium service, which contributes to higher pricing.",
          },
        },
        {
          "@type": "Question",
          name: "Are Disney Cruises overpriced?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Some travelers believe they are expensive, while others feel the service, entertainment, and family experiences justify the cost.",
          },
        },
        {
          "@type": "Question",
          name: "Is food included on Disney Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most dining experiences are included in the cruise fare, though some specialty dining venues require an additional fee.",
          },
        },
        {
          "@type": "Question",
          name: "Are Disney Cruises worth it for adults?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many adults enjoy Disney cruises, particularly couples, grandparents, and Disney enthusiasts.",
          },
        },
        {
          "@type": "Question",
          name: "Why do Disney Cruises rarely offer discounts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Strong demand often allows Disney to maintain premium pricing.",
          },
        },
        {
          "@type": "Question",
          name: "Is Disney Cruise Line considered luxury?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Disney is generally considered a premium cruise line rather than an ultra-luxury cruise brand.",
          },
        },
        {
          "@type": "Question",
          name: "Do Disney Cruises include character experiences?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Character meet-and-greets are included and represent one of Disney's unique offerings.",
          },
        },
        {
          "@type": "Question",
          name: "Are Disney Cruises good for grandparents?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Disney excels at multigenerational travel experiences.",
          },
        },
        {
          "@type": "Question",
          name: "What makes Disney different from other cruise lines?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Disney combines family-focused service, entertainment, accommodations, and character experiences in ways few competitors can match.",
          },
        },
        {
          "@type": "Question",
          name: "Is Disney Cruise Line worth the extra cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many families believe the overall experience justifies the premium price, particularly for milestone vacations and multigenerational travel.",
          },
        },
        {
          "@type": "Question",
          name: "How does Disney Cruise Line handle onboard dining upgrades?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most main dining is included, while specialty restaurants and adult-only dining venues usually carry additional fees.",
          },
        },
        {
          "@type": "Question",
          name: "Can you save money by booking early for Disney Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Booking early often secures better cabin choices and can lock in lower fares before demand increases.",
          },
        },
        {
          "@type": "Question",
          name: "Do Disney Cruises include kids clubs and youth programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Disney offers age-specific youth clubs and supervised activities that are typically included in the cruise fare.",
          },
        },
        {
          "@type": "Question",
          name: "Are gratuities included on Disney Cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gratuities are usually charged separately, though Disney may cover service charges for some prepaid packages.",
          },
        },
        {
          "@type": "Question",
          name: "How does Disney Cruise Line compare on service quality?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Disney is known for attentive service and crew training, which many guests cite as a major factor in the higher fare.",
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
      q: "Why are Disney Cruises more expensive than Royal Caribbean?",
      a: "Disney invests heavily in entertainment, family experiences, character interactions, and premium service, which contributes to higher pricing.",
    },
    {
      q: "Are Disney Cruises overpriced?",
      a: "Some travelers believe they are expensive, while others feel the service, entertainment, and family experiences justify the cost.",
    },
    {
      q: "Is food included on Disney Cruises?",
      a: "Most dining experiences are included in the cruise fare, though some specialty dining venues require an additional fee.",
    },
    {
      q: "Are Disney Cruises worth it for adults?",
      a: "Many adults enjoy Disney cruises, particularly couples, grandparents, and Disney enthusiasts.",
    },
    {
      q: "Why do Disney Cruises rarely offer discounts?",
      a: "Strong demand often allows Disney to maintain premium pricing.",
    },
    {
      q: "Is Disney Cruise Line considered luxury?",
      a: "Disney is generally considered a premium cruise line rather than an ultra-luxury cruise brand.",
    },
    {
      q: "Do Disney Cruises include character experiences?",
      a: "Yes. Character meet-and-greets are included and represent one of Disney's unique offerings.",
    },
    {
      q: "Are Disney Cruises good for grandparents?",
      a: "Absolutely. Disney excels at multigenerational travel experiences.",
    },
    {
      q: "What makes Disney different from other cruise lines?",
      a: "Disney combines family-focused service, entertainment, accommodations, and character experiences in ways few competitors can match.",
    },
    {
      q: "Is Disney Cruise Line worth the extra cost?",
      a: "Many families believe the overall experience justifies the premium price, particularly for milestone vacations and multigenerational travel.",
    },
    {
      q: "How does Disney Cruise Line handle onboard dining upgrades?",
      a: "Most main dining is included, while specialty restaurants and adult-only dining venues usually carry additional fees.",
    },
    {
      q: "Can you save money by booking early for Disney Cruises?",
      a: "Booking early often secures better cabin choices and can lock in lower fares before demand increases.",
    },
    {
      q: "Do Disney Cruises include kids clubs and youth programs?",
      a: "Yes, Disney offers age-specific youth clubs and supervised activities that are typically included in the cruise fare.",
    },
    {
      q: "Are gratuities included on Disney Cruises?",
      a: "Gratuities are usually charged separately, though Disney may cover service charges for some prepaid packages.",
    },
    {
      q: "How does Disney Cruise Line compare on service quality?",
      a: "Disney is known for attentive service and crew training, which many guests cite as a major factor in the higher fare.",
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

const WhyAreDisneyCruisesSoExpensive = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const images = [];
  const [activeDest, setActiveDest] = useState("entertainment");
  const currentDest =
    disneyValueReasons.find((d) => d.id === activeDest) ||
    disneyValueReasons[0];

  const ActiveIcon = currentDest.icon;

  const [currentLuxurySlide, setCurrentLuxurySlide] = useState(0);
  const [activeReasonTab, setActiveReasonTab] = useState(5);

  const pricingReasons = [
    {
      title: "Industry-Leading Entertainment",
      description:
        "Broadway-style productions, live shows, and character experiences require professional performers, advanced stage technology, and significant staffing investment—all included in the fare.",
      number: "01",
    },
    {
      title: "More Space Per Guest",
      description:
        "Disney ships intentionally carry fewer passengers than similarly sized ships on other cruise lines, creating a more comfortable experience but increasing per-person costs.",
      number: "02",
    },
    {
      title: "Family-Focused Staterooms",
      description:
        "Split bathrooms, larger average cabin sizes, and family-optimized layouts are purposefully designed for multigenerational comfort—and those design choices increase construction costs.",
      number: "03",
    },
    {
      title: "Exceptional Service Investment",
      description:
        "Disney consistently earns top marks for crew attentiveness, personalized interactions, and guest recognition. That level of service requires substantial staffing and training investment.",
      number: "04",
    },
    {
      title: "Private Island Destinations",
      description:
        "Castaway Cay and Lookout Cay represent long-term investments in infrastructure, maintenance, staffing, and programming that are factored into cruise pricing.",
      number: "05",
    },
    {
      title: "Premium Brand & Strong Demand",
      description:
        "Disney cruises frequently sell out. When demand remains consistently high, pricing reflects the market—and the confidence families have in the overall Disney experience.",
      number: "06",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % (images.length || 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLuxurySlide((prev) => (prev + 1) % pricingReasons.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [pricingReasons.length]);

  return (
    <div className="Asc-page-wrapper">
      <Helmet>
        <title>
          Why Are Disney Cruises So Expensive? | Understanding Disney Cruise
          Value
        </title>
        <meta name="title" content="Why Are Disney Cruises So Expensive?" />
        <meta
          name="description"
          content="Wondering why Disney Cruises cost more than many other cruise lines? Discover what drives Disney Cruise Line pricing, what is included, and whether Disney cruises are worth the premium for families and multigenerational travelers."
        />
        <meta
          property="og:title"
          content="Why Are Disney Cruises So Expensive? | Understanding Disney Cruise Value"
        />
        <meta
          property="og:description"
          content="Wondering why Disney Cruises cost more than many other cruise lines? Discover what drives Disney Cruise Line pricing and whether the premium is worth it."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.tripsandships.com/why-are-disney-cruises-so-expensive"
        />
        <link
          rel="canonical"
          href="https://www.tripsandships.com/why-are-disney-cruises-so-expensive"
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      <Nav />
      {/* HERO */}
      <section
        className="Scenic_hero_section"
        style={{ backgroundColor: "var(--bg-dark)" }}
      >
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
          <h1>Why Are Disney Cruises So Expensive?</h1>

          <p>
            If you've ever compared cruise prices, you've likely noticed that
            Disney Cruise Line costs significantly more than many mainstream
            cruise lines.
          </p>

          <p>
            The answer is more complex than simply paying for the Disney name.
            Several interconnected factors drive Disney's pricing—and many
            travelers believe those factors create meaningful, lasting value.
          </p>

          {readMore && (
            <>
              <p>
                Disney doesn't compete on price. It competes on experience. The
                combination of industry-leading entertainment, exceptional
                service, family-focused ship design, private island
                destinations, and strong demand supports a pricing strategy that
                reflects what Disney actually delivers.
              </p>

              <p>
                For families seeking premium family travel, multigenerational
                experiences, or milestone vacations, Disney Cruise Line
                frequently justifies every dollar.
              </p>

              <p>
                At Trips &amp; Ships Luxury Travel, we help families evaluate
                whether Disney is the right fit—and if so, how to get the best
                possible value from the experience.
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
      </section>
      {/* ── WHERE THE MISCONCEPTION COMES FROM ───── */}
      <section
        className="ugt-components-section"
        id="ugt-components"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          <div className="ugt-components-header">
            <h2 className="adg-c-h2">
              Disney Cruises Are Positioned as a Premium Product
            </h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              {/* LEFT IMAGE */}
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    alt="Disney Cruise Line premium family experience"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  One of the biggest misconceptions is that Disney competes
                  directly with budget or mainstream cruise lines.
                </p>

                <p className="ugt-component-text">
                  In reality, Disney positions itself as a premium family cruise
                  experience. Rather than competing primarily on price, Disney
                  competes on overall experience.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    Disney Focuses On:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "Exceptional Service",
                      "Family-Friendly Design",
                      "High-Quality Entertainment",
                      "Spacious Accommodations",
                      "Multigenerational Travel",
                      "Premium Guest Experiences",
                    ].map((item, idx) => (
                      <li key={idx} className="ugt-question-item">
                        <Check size={16} className="ugt-question-icon" />
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
      {/* VIDEO SECTION */}
      <section
        className="azs-video-section"
        id="azs-video"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-h2">
              Discover What Makes Disney Cruise Line Different
            </h2>
            <div className="azs-accent-line"></div>

            <p className="azs-video-intro">
              Discover all the exciting details about Disney Cruise Line's
              newest ship, the Disney Treasure. From spaces inspired by beloved
              Disney Parks attractions to immersive experiences that bring
              Disney and Pixar stories to life, this extraordinary vessel offers
              unforgettable adventures for guests of all ages.
            </p>
          </div>

          <div className="azs-video-wrapper">
            <div className="azs-video-frame">
              <iframe
                src="https://www.youtube.com/embed/pGjDzfXoOg0"
                title="Disney Cruise Line Vacation Experience"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* 8 REASONS DISNEY COSTS MORE */}
      <section className="adg-c-section adg-c-bg-soft" id="adg-reasons">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">
              Understanding Disney Cruise Line Pricing
            </span>

            <h2 className="adg-c-h2">
              Four Reasons Disney Cruise Line <br /> Costs More Than Most
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              Disney's higher price point isn't arbitrary. Each factor below
              represents a real investment that directly shapes the guest
              experience—and explains why so many families return again and
              again.
            </p>
          </div>

          <div className="adg-c-venues-grid1">
            {[
              {
                id: 1,
                eyebrow: "Reason #1",
                name: "Industry-Leading Entertainment",
                highlight:
                  "Entertainment is one of Disney's largest onboard investments.",
                items: [
                  "Broadway-Style Productions",
                  "Professional Performers",
                  "Character Meet-and-Greets",
                  "Themed Deck Parties",
                  "Original Live Shows",
                ],
                callout:
                  "Many cruise experts consider Disney's entertainment among the best at sea—and it's all included in the fare.",
              },
              {
                id: 2,
                eyebrow: "Reason #2",
                name: "More Space Per Guest",
                highlight:
                  "Disney ships carry fewer passengers than similarly sized vessels from competitors.",
                items: [
                  "Less Crowding",
                  "Larger Public Areas",
                  "Better Guest Flow",
                  "More Comfortable Experience",
                ],
                callout:
                  "Fewer passengers mean fewer people contributing revenue while operating costs remain high—directly influencing pricing.",
              },
              {
                id: 3,
                eyebrow: "Reason #3",
                name: "Family-Focused Staterooms",
                highlight:
                  "Disney staterooms were designed with families in mind from the beginning.",
                items: [
                  "Split Bathrooms",
                  "Larger Average Cabin Sizes",
                  "Family-Friendly Layouts",
                  "Thoughtful Storage Solutions",
                ],
                callout:
                  "These design choices increase construction and operating costs compared to standard cruise ship cabin configurations.",
              },
              {
                id: 4,
                eyebrow: "Reason #4",
                name: "Exceptional Service Levels",
                highlight:
                  "Disney Cruise Line consistently earns top marks for service across the industry.",
                items: [
                  "Attention to Detail",
                  "Personalized Interactions",
                  "Family-Focused Hospitality",
                  "Guest Recognition",
                ],
                callout:
                  "Providing this caliber of service requires substantial ongoing investment in staffing ratios and crew training.",
              },
            ].map((venue, i) => (
              <div
                key={venue.id}
                className={`adg-c-venue-card adg-c-venue-${(i % 4) + 1}`}
              >
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
      {/* ── IMAGE GALLERY ────────────────────────────────────────────── */}
      <section className="dfg-gallery-section" id="dfg-gallery">
        <div className="dfg-gallery-container">
          <div className="dfg-gallery-header">
            <span className="dfg-gallery-eyebrow">What You're Paying For</span>
            <h2 className="dfg-gallery-title">
              The Disney Cruise Line Experience
            </h2>
            <div className="dfg-gallery-accent"></div>
            <p className="dfg-gallery-intro">
              From Broadway-style entertainment to private island destinations
              and Concierge-level staterooms—Disney Cruise Line delivers premium
              experiences that are carefully crafted, heavily invested in, and
              consistently delivered.
            </p>
          </div>

          <div className="dfg-gallery-mosaic">
            <div
              className="dfg-gallery-item dfg-gallery-large"
              style={{ color: "#fff" }}
            >
              <img
                alt="Broadway-style live show on a Disney Cruise ship"
                className="dfg-gallery-img"
              />
              <div className="dfg-gallery-overlay">
                <span className="dfg-gallery-caption">
                  Broadway-Style Shows
                </span>
              </div>
            </div>

            <div
              className="dfg-gallery-item dfg-gallery-tall"
              style={{ color: "#fff" }}
            >
              <img
                alt="Disney character meet and greet onboard Disney Cruise"
                className="dfg-gallery-img"
              />
              <div className="dfg-gallery-overlay">
                <span className="dfg-gallery-caption">
                  Character Experiences
                </span>
              </div>
            </div>

            <div
              className="dfg-gallery-item dfg-gallery-wide"
              style={{ color: "#fff" }}
            >
              <img
                alt="Families enjoying Castaway Cay private island Disney Cruise"
                className="dfg-gallery-img"
              />
              <div className="dfg-gallery-overlay">
                <span className="dfg-gallery-caption">
                  Private Island Destinations
                </span>
              </div>
            </div>

            <div
              className="dfg-gallery-item dfg-gallery-square"
              style={{ color: "#fff" }}
            >
              <img
                alt="Spacious Disney Cruise stateroom with split bathroom family layout"
                className="dfg-gallery-img"
              />
              <div className="dfg-gallery-overlay">
                <span className="dfg-gallery-caption">
                  Family-Designed Staterooms
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ADDITIONAL REASONS SECTION ════════════════════════════════════ */}
      <section className="dac-reasons-section">
        <div className="dac-reasons-container">
          <div className="dac-reasons-header">
            <span className="dac-reasons-eyebrow">More Value Factors</span>
            <h2 className="dac-reasons-title">
              Four Additional Reasons Disney Commands a Premium
            </h2>
            <div className="dac-reasons-accent"></div>
            <p className="dac-reasons-lead">
              From multigenerational appeal to exclusive island destinations and
              strong economic demand, here is why a Disney Cruise vacation is
              valued at a premium.
            </p>
          </div>

          <div className="dac-reasons-tabs-nav">
            <button
              className={`dac-reasons-tab-btn ${activeReasonTab === 5 ? "active" : ""}`}
              onClick={() => setActiveReasonTab(5)}
            >
              <span className="dac-reasons-tab-icon-wrap">
                <Users size={18} />
              </span>
              <div className="dac-reasons-tab-text-wrap">
                <span className="dac-reasons-tab-num">05</span>
                <span className="dac-reasons-tab-title">
                  Disney Appeals to Multigenerational Families
                </span>
              </div>
            </button>

            <button
              className={`dac-reasons-tab-btn ${activeReasonTab === 6 ? "active" : ""}`}
              onClick={() => setActiveReasonTab(6)}
            >
              <span className="dac-reasons-tab-icon-wrap">
                <Palmtree size={18} />
              </span>
              <div className="dac-reasons-tab-text-wrap">
                <span className="dac-reasons-tab-num">06</span>
                <span className="dac-reasons-tab-title">
                  Disney's Private Island Destinations Add Value
                </span>
              </div>
            </button>

            <button
              className={`dac-reasons-tab-btn ${activeReasonTab === 7 ? "active" : ""}`}
              onClick={() => setActiveReasonTab(7)}
            >
              <span className="dac-reasons-tab-icon-wrap">
                <TrendingUp size={18} />
              </span>
              <div className="dac-reasons-tab-text-wrap">
                <span className="dac-reasons-tab-num">07</span>
                <span className="dac-reasons-tab-title">
                  Disney Operates With Strong Demand
                </span>
              </div>
            </button>

            <button
              className={`dac-reasons-tab-btn ${activeReasonTab === 8 ? "active" : ""}`}
              onClick={() => setActiveReasonTab(8)}
            >
              <span className="dac-reasons-tab-icon-wrap">
                <Sparkles size={18} />
              </span>
              <div className="dac-reasons-tab-text-wrap">
                <span className="dac-reasons-tab-num">08</span>
                <span className="dac-reasons-tab-title">
                  Disney Includes More Than Some Travelers Realize
                </span>
              </div>
            </button>
          </div>

          <div className="dac-reasons-tabs-content">
            {/* Reason #5 */}
            {activeReasonTab === 5 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--left-content">
                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">05</span>
                    <h3 className="dac-reasons-row-title">
                      Disney Appeals to Multigenerational Families
                    </h3>
                    <p className="dac-reasons-row-desc">
                      Disney has become one of the most popular cruise lines for
                      families, grandparents, grandchildren, family reunions,
                      and multi-generational groups. Disney invests heavily in
                      creating experiences that appeal to multiple generations
                      simultaneously. This broad appeal helps maintain strong
                      demand.
                    </p>
                    <div className="dac-reasons-pills">
                      {[
                        "Families",
                        "Grandparents",
                        "Grandchildren",
                        "Family Reunions",
                        "Multi-Generational Groups",
                      ].map((pill, idx) => (
                        <span key={idx} className="dac-reasons-pill">
                          <Users size={12} style={{ marginRight: "6px" }} />
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="dac-reasons-media">
                    <div className="dac-reasons-img-container">
                      <img
                        //   src={AlumniRiverCruise1}
                        alt="Multigenerational Families"
                        className="dac-reasons-img"
                      />
                      <div className="dac-reasons-img-overlay"></div>
                      <div className="dac-reasons-img-badge">
                        <Users size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Reason #6 */}
            {activeReasonTab === 6 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--right-content">
                  <div className="dac-reasons-media">
                    <div className="dac-reasons-img-container">
                      <img
                        //    src={AlumniRiverCruise2}
                        alt="Disney Private Island Destinations"
                        className="dac-reasons-img"
                      />
                      <div className="dac-reasons-img-overlay"></div>
                      <div className="dac-reasons-img-badge">
                        <Palmtree size={20} />
                      </div>
                    </div>
                  </div>
                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">06</span>
                    <h3 className="dac-reasons-row-title">
                      Disney's Private Island Destinations Add Value
                    </h3>
                    <p className="dac-reasons-row-desc">
                      Disney guests visit exclusive private paradises including{" "}
                      <strong>Castaway Cay</strong> (Disney's private island in
                      The Bahamas) and{" "}
                      <strong>Lookout Cay at Lighthouse Point</strong> (Disney's
                      newer Bahamian destination). These destinations require
                      ongoing maintenance, transportation infrastructure,
                      staffing, guest services, and entertainment programming,
                      representing major long-term investments.
                    </p>
                    <div className="dac-reasons-bullets">
                      {["Castaway Cay", "Lookout Cay at Lighthouse Point"].map(
                        (bullet, idx) => (
                          <div key={idx} className="dac-reasons-bullet-item">
                            <Palmtree
                              size={16}
                              className="dac-reasons-bullet-icon"
                            />
                            <span>{bullet}</span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Reason #7 */}
            {activeReasonTab === 7 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--left-content">
                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">07</span>
                    <h3 className="dac-reasons-row-title">
                      Disney Operates With Strong Demand
                    </h3>
                    <p className="dac-reasons-row-desc">
                      Economics plays a significant role. Simply put, Disney
                      cruises frequently sell out. When demand remains
                      consistently high, there is little incentive for Disney to
                      lower prices. Families continue booking because they
                      perceive strong value in the overall experience, and this
                      high demand naturally supports premium pricing.
                    </p>
                    <div className="dac-reasons-callout">
                      <TrendingUp
                        size={18}
                        className="dac-reasons-callout-icon"
                      />
                      <p>
                        High demand naturally supports premium pricing while
                        families continue to book at capacity.
                      </p>
                    </div>
                  </div>
                  <div className="dac-reasons-media">
                    <div className="dac-reasons-img-container">
                      <img
                        //    src={AlumniRiverCruise3}
                        alt="Strong Cruise Demand"
                        className="dac-reasons-img"
                      />
                      <div className="dac-reasons-img-overlay"></div>
                      <div className="dac-reasons-img-badge">
                        <TrendingUp size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Reason #8 */}
            {activeReasonTab === 8 && (
              <div className="dac-reasons-tab-panel fade-in">
                <div className="dac-reasons-row dac-reasons-row--right-content">
                  <div className="dac-reasons-media">
                    <div className="dac-reasons-img-container">
                      <img
                        //    src={AlumniRiverCruise4}
                        alt="Included Experiences in Disney Cruise Fare"
                        className="dac-reasons-img"
                      />
                      <div className="dac-reasons-img-overlay"></div>
                      <div className="dac-reasons-img-badge">
                        <Sparkles size={20} />
                      </div>
                    </div>
                  </div>
                  <div className="dac-reasons-content">
                    <span className="dac-reasons-row-number">08</span>
                    <h3 className="dac-reasons-row-title">
                      Disney Includes More Than Some Travelers Realize
                    </h3>
                    <p className="dac-reasons-row-desc">
                      While Disney is not fully all-inclusive, many experiences
                      are included in the cruise fare. When comparing cruise
                      prices, it's important to compare the complete experience
                      rather than only the base fare.
                    </p>
                    <div className="dac-reasons-includes-grid">
                      {[
                        "Broadway-Style Shows",
                        "Character Meet-and-Greets",
                        "Youth Clubs",
                        "Family Entertainment",
                        "Rotational Dining",
                        "Pools and Recreation",
                        "Movies and Theaters",
                        "Deck Events",
                        "Kids Programs",
                      ].map((item, idx) => (
                        <div key={idx} className="dac-reasons-include-tag">
                          <Check size={12} className="dac-reasons-check-icon" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── WAYS TO SAVE MONEY ─────────────────────────────────────── */}
      <section className="luc-why-section" id="luc-savings">
        <div className="luc-why-container">
          {/* LEFT — stacked images */}
          <div className="luc-why-images">
            <div className="luc-why-img-main-wrap" style={{ color: "#fff" }}>
              <img
                alt="Family planning a Disney Cruise vacation"
                className="luc-why-img-main"
              />
              <div className="luc-why-img-overlay"></div>
            </div>

            <div className="luc-why-img-accent-wrap" style={{ color: "#fff" }}>
              <img
                alt="Travel advisor helping plan a Disney Cruise"
                className="luc-why-img-accent"
              />

              <div className="luc-why-img-badge">
                <span className="luc-why-badge-num">5</span>
                <span className="luc-why-badge-text">Savings Tips</span>
              </div>
            </div>
          </div>

          {/* RIGHT — content */}
          <div className="luc-why-content">
            <h2 className="luc-why-title">
              Ways to Save Money on a Disney Cruise
            </h2>

            <div className="aac-accent-line aac-accent-white"></div>

            <p className="luc-why-intro">
              If you're interested in Disney but concerned about pricing,
              several strategies can help reduce costs without reducing the
              experience.
            </p>

            <div className="luc-why-features">
              <div className="luc-why-feature">
                <div className="luc-why-feature-num">01</div>
                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">
                    Sail During Off-Peak Seasons
                  </h3>
                  <p className="luc-why-feature-desc">
                    Prices are often lower when schools are in session. Shoulder
                    seasons can offer meaningful savings.
                  </p>
                </div>
              </div>

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">02</div>
                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">Book Early</h3>
                  <p className="luc-why-feature-desc">
                    Disney frequently rewards early planners with better
                    pricing. Booking 12–18 months out is common among repeat
                    Disney cruisers.
                  </p>
                </div>
              </div>

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">03</div>
                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">
                    Consider Shorter Itineraries
                  </h3>
                  <p className="luc-why-feature-desc">
                    Bahamas cruises can be more affordable than longer Caribbean
                    voyages and still deliver the full Disney experience.
                  </p>
                </div>
              </div>

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">04</div>
                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">
                    Travel With Extended Family
                  </h3>
                  <p className="luc-why-feature-desc">
                    Sharing staterooms or splitting the cost of a larger suite
                    across a multigenerational group can reduce individual
                    expenses.
                  </p>
                </div>
              </div>

              <div className="luc-why-feature">
                <div className="luc-why-feature-num">05</div>
                <div className="luc-why-feature-body">
                  <h3 className="luc-why-feature-title">
                    Work With a Cruise Specialist
                  </h3>
                  <p className="luc-why-feature-desc">
                    Travel advisors often help identify promotions, onboard
                    credits, and itinerary options that aren't always visible
                    when booking directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK COMPARISON TABLE */}
      <section className="Asc-section Asc-bg-white" id="Asc-fleet">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">
              How Disney Compares to Other Cruise Lines
            </h2>

            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-table-wrapper">
            <table className="Asc-fleet-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Disney Cruise Line</th>
                  <th>Typical Mainstream Cruise</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <strong>Family Focus</strong>
                  </td>
                  <td>Exceptional</td>
                  <td>Good</td>
                </tr>
                <tr>
                  <td>
                    <strong>Entertainment</strong>
                  </td>
                  <td>Industry Leading</td>
                  <td>Moderate to Good</td>
                </tr>
                <tr>
                  <td>
                    <strong>Character Experiences</strong>
                  </td>
                  <td>Unique</td>
                  <td>None</td>
                </tr>
                <tr>
                  <td>
                    <strong>Youth Programs</strong>
                  </td>
                  <td>Industry Leading</td>
                  <td>Good</td>
                </tr>
                <tr>
                  <td>
                    <strong>Family Stateroom Design</strong>
                  </td>
                  <td>Excellent</td>
                  <td>Moderate</td>
                </tr>
                <tr>
                  <td>
                    <strong>Service</strong>
                  </td>
                  <td>Outstanding</td>
                  <td>Varies</td>
                </tr>
                <tr>
                  <td>
                    <strong>Multigenerational Appeal</strong>
                  </td>
                  <td>Exceptional</td>
                  <td>Moderate</td>
                </tr>
                <tr>
                  <td>
                    <strong>Price</strong>
                  </td>
                  <td>Higher</td>
                  <td>Lower</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* ══ IS THE DISNEY NAME PART OF THE COST? ═════════════════════════════ */}
      <section className="adg-section">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">Is the Disney Name Part of the Cost?</h2>
            <div className="adg-accent-line"></div>
          </div>

          <div
            className="adg-split-layout"
            style={{ alignItems: "flex-start" }}
          >
            <div className="adg-content-card-side">
              <img
                alt="Disney Cruise Line value and premium vacation experience"
                className="adg-side-image"
                style={{ height: "30vh", border: "1px solid var(--navy)" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Compass size={28} />
                  <span className="adg-meta-label">
                    Understanding Disney Pricing
                  </span>
                </div>

                <p className="adg-card-lead">Yes — partially.</p>

                <div className="adg-card-divider"></div>

                <p className="adg-card-subtext">
                  Disney is one of the strongest and most recognizable brands in
                  the world, and brand value does allow companies to command
                  premium pricing.
                </p>

                <p className="adg-card-subtext" style={{ marginTop: "18px" }}>
                  However, many experienced cruisers argue that Disney's pricing
                  reflects far more than branding alone. The onboard experience,
                  service quality, entertainment, and guest satisfaction all
                  play a significant role in the value guests receive.
                </p>
              </div>
            </div>

            <div className="adg-list-side">
              {[
                {
                  title: "Exceptional Service",
                  icon: <Check size={20} />,
                },
                {
                  title: "World-Class Entertainment",
                  icon: <Star size={20} />,
                },
                {
                  title: "Comfortable Accommodations",
                  icon: <Home size={20} />,
                },
                {
                  title: "Family Experiences",
                  icon: <Users size={20} />,
                },
                {
                  title: "High Guest Satisfaction",
                  icon: <Compass size={20} />,
                },
              ].map((item, i) => (
                <div key={i} className="adg-list-item-card">
                  <div className="adg-list-item-icon">{item.icon}</div>
                  <h4 className="adg-list-item-label">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT LUXURY TRAVELERS OFTEN MISS */}
      <section
        className="afc-section afc-bg-white"
        id="afc-luxury-travelers-miss"
      >
        <div className="afc-container">
          <div className="afc-section-header">
            <h2 className="afc-h2">What Luxury Travelers Often Miss</h2>
            <div className="afc-accent-line"></div>
          </div>

          <div className="afc-split-layout">
            {/* Left Column */}
            <div className="afc-content-side">
              <div className="afc-insight-card">
                <p className="afc-lead-text">
                  <strong>
                    Many luxury travelers compare Disney to premium cruise lines
                    and assume Disney is overpriced.
                  </strong>
                </p>

                <div className="afc-why-box">
                  <span className="afc-why-title">The Reality</span>
                  <p className="afc-why-text">
                    Disney's value proposition is fundamentally different.
                    Rather than competing as a traditional luxury cruise line,
                    Disney focuses on delivering premium family travel
                    experiences that appeal across generations.
                  </p>
                </div>
              </div>

              <div className="afc-recommendations-wrapper">
                <h3 className="afc-sub-title">Disney Is Not Trying to Be:</h3>

                <div className="afc-rec-grid">
                  {[
                    "An adults-only luxury line",
                    "An expedition cruise company",
                    "An ultra-luxury boutique cruise brand",
                  ].map((item, i) => (
                    <div key={i} className="afc-rec-card">
                      <div className="afc-rec-icon">
                        <Check size={18} />
                      </div>
                      <span className="afc-rec-label">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="afc-media-side">
              <div className="afc-image-wrapper">
                <img
                  alt="Multigenerational family enjoying Disney Cruise Line vacation"
                  className="afc-showcase-image"
                />
              </div>

              <div className="afc-strategy-box">
                <p className="afc-strategy-lead">
                  For travelers seeking these experiences, Disney often
                  represents strong value:
                </p>

                <div className="afc-strategy-tags">
                  {[
                    "Family Bonding",
                    "Grandparent-Grandchild Vacations",
                    "Exceptional Entertainment",
                    "Disney Experiences",
                    "Stress-Free Family Travel",
                  ].map((tag, idx) => (
                    <span key={idx} className="afc-tag">
                      ✔ {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION 2 */}
      <section
        className="azs-video-section"
        id="azs-video-2"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-h2">Why Families Love Disney Cruise Line</h2>
            <div className="azs-accent-line"></div>

            <p className="azs-video-intro">
              Disney Cruise Line offers a vacation experience unlike any other
              that magically brings families together while providing
              unparalleled kid fun and relaxing adult time.
            </p>
          </div>

          <div className="azs-video-wrapper">
            <div className="azs-video-frame">
              <iframe
                src="https://www.youtube.com/embed/MjkjSu7iBak"
                title="Discover the Disney Cruise Line Experience"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* IS IT WORTH IT — WHO SHOULD CHOOSE */}
      <section className="Asc-section Asc-bg-soft" id="Asc-who">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Are Disney Cruises Worth the Money?</h2>

            <div className="Asc-accent-line"></div>

            <p className="Asc-section-intro">
              This depends on what you value most in a vacation.
            </p>
          </div>

          <div className="Asc-who-grid">
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">Worth It If You Want</h3>

              <ul className="Asc-who-list">
                {[
                  "Family-Focused Experiences",
                  "Exceptional Entertainment",
                  "Character Interactions",
                  "Disney Service",
                  "Multigenerational Travel",
                  "Premium Accommodations",
                  "Private Island Destinations",
                  "High Guest Satisfaction",
                ].map((item, i) => (
                  <li key={i}>
                    <Check size={16} className="Asc-icon-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="Asc-who-card Asc-who-no">
              <h3 className="Asc-who-title">
                May Not Be Worth It If You Prefer
              </h3>

              <ul className="Asc-who-list">
                {[
                  "Adults-Only Vacations",
                  "Budget Travel",
                  "Nightlife-Focused Cruising",
                  "Ultra-Luxury Experiences",
                  "Maximum Itinerary Variety",
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
      {/* ══ ANGELA HUGHES AUTHORITY BOX ══════════════════════════════════════ */}
      <section className="Adg-expert-section" id="Asc-expert-insight">
        <div className="Asc-container">
          {/* TOP HEADING */}
          <div className="Adg-expert-heading">
            <span className="Adg-expert-eyebrow">Luxury Travel Authority</span>
            <h2 className="Adg-expert-title">Meet Angela Hughes</h2>
            <div className="Adg-expert-divider"></div>
          </div>

          {/* MAIN GRID */}
          <div className="Adg-expert-grid">
            {/* LEFT SIDE */}
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
                      icon: <Award size={16} />,
                      label: "Founder of Luxury Travel University",
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
                      icon: <Users size={16} />,
                      label: "Global luxury travel speaker and trainer",
                    },
                    {
                      icon: <Users size={16} />,
                      label: "Weekly travel industry columnist",
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
                        "Named one of the Most Influential Women in Travel in 2026",
                    },
                    {
                      icon: <Award size={16} />,
                      label: "Featured in major travel publications globally",
                    },
                    {
                      icon: <Ship size={16} />,
                      label:
                        "Specialist in luxury cruises, safaris, expeditions, and premium travel",
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
              Everything you need to know about Disney Cruise Line pricing and
              value.
            </p>
          </div>
          <FAQ />
        </div>
      </section>
      {/* CTA */}
      <section className="Asc-help-section">
        <div className="Asc-help-bg-wrap">
          <img
            alt="Disney Cruise Line Experience"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">
                  Disney Cruise Line Guide
                </span>

                <h2 className="Asc-help-h2">
                  You're Paying for More <br /> Than a Cruise
                </h2>

                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Disney Cruise Line is undeniably more expensive than many
                    mainstream cruise options.
                  </p>

                  <p className="Asc-help-intro">
                    But travelers aren't simply paying for transportation,
                    accommodations, and meals. They're paying for Disney
                    storytelling, premium family experiences, exceptional
                    entertainment, high service standards, and private island
                    destinations.
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

                  <br />

                  {readMore && (
                    <p className="Asc-help-intro">
                      For some travelers, those extras aren't important.
                      <br />
                      <br />
                      For others, they're exactly what transforms a vacation
                      into a lifelong memory.
                      <br />
                      <br />
                      <strong>
                        That's why Disney Cruise Line continues to command
                        premium pricing—and why so many families return again
                        and again.
                      </strong>
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
                  )}

                  <div className="Asc-help-btn-container">
                    <button className="Asc-help-cta-btn">
                      Plan Your Disney Cruise
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">What Disney Delivers:</h3>

                  <ul className="Asc-help-bullets">
                    {[
                      "Disney Storytelling",
                      "Premium Family Experiences",
                      "Exceptional Entertainment",
                      "High Service Standards",
                      "Family-Focused Ship Design",
                      "Character Interactions",
                      "Multigenerational Travel",
                      "Private Island Destinations",
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
                    <strong>
                      Disney Cruise Line combines premium service,
                      family-focused design, and unforgettable experiences that
                      justify the investment for the right traveler.
                    </strong>
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

export default WhyAreDisneyCruisesSoExpensive;
