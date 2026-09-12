import { projects } from "./projects";

export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  image: string;
  stack: string[];
  meta: { label: string; value: string }[];
  challenge: string[];
  approach: string[];
  features: { name: string; description: string }[];
  demonstrates: string;
  mockups: string[];
  next: string;
  liveUrl: string;
};

const bySlug = Object.fromEntries(projects.map((project) => [project.slug, project]));

export const caseStudies: Record<string, CaseStudy> = {
  "bella-vista": {
    slug: "bella-vista",
    title: "Bella Vista Restaurant",
    category: "Restaurant",
    tagline: "A conversion-engineered restaurant platform, architected to turn visitors into diners.",
    image: bySlug["bella-vista"].image,
    stack: bySlug["bella-vista"].stack,
    meta: [
      { label: "Timeline", value: "2 weeks" },
      { label: "Type", value: "Business Website" },
      { label: "Status", value: "Complete — Live Demo" }
    ],
    challenge: [
      "Most independently owned restaurants have outdated or no web presence at all. This demo shows what a modern restaurant site looks like: one that builds trust, drives reservations, and reflects the quality of the food.",
      "The target client is a restaurant, cafe, lodge, or food business that needs customers to understand the atmosphere before they walk through the door."
    ],
    approach: [
      "Built as a Modern African Fusion brand, not a generic template.",
      "Includes address details and WhatsApp-based booking, easy to localize to any market.",
      "Added menu filtering, reservation form, Instagram grid, press bar, and persistent dark mode."
    ],
    features: [
      ["Menu Filter", "Guests can browse categories quickly."],
      ["Reservation Form", "Clear path from interest to table booking."],
      ["Instagram Grid", "Signals an active, well-run business at a glance."],
      ["Dark Mode", "Premium dining mood across all pages."],
      ["WhatsApp CTA", "Matches how customers actually prefer to book."],
      ["SVG Logo", "Scalable brand mark with zero performance cost."]
    ].map(([name, description]) => ({ name, description })),
    demonstrates:
      "Proof that hospitality brands don't have to choose between atmosphere and performance. Precision execution, down to the reservation flow.",
    mockups: [
      "https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=900&q=80"
    ],
    next: "ironforge",
    liveUrl: bySlug["bella-vista"].liveUrl
  },
  ironforge: {
    slug: "ironforge",
    title: "IronForge Fitness",
    category: "Fitness & Wellness",
    tagline: "A conversion-engineered fitness platform, architected to turn visitors into members.",
    image: bySlug.ironforge.image,
    stack: bySlug.ironforge.stack,
    meta: [
      { label: "Timeline", value: "2 weeks" },
      { label: "Type", value: "Business Website" },
      { label: "Status", value: "Complete — Live Demo" }
    ],
    challenge: [
      "Gyms and fitness centers need websites that match the energy of their brand and convert visitors into members. Most gym sites are either outdated or non-existent.",
      "This concept gives a fitness business a digital presence that feels as strong as its facility."
    ],
    approach: [
      "Dark, high-energy design with electric orange accents.",
      "Goal quiz funnels visitors to the right membership plan.",
      "Countdown trial timer, transformation slider, and live-looking class capacity create momentum."
    ],
    features: [
      ["Goal Quiz", "Routes prospects to the right plan."],
      ["Countdown Timer", "Creates urgency around limited-time offers."],
      ["Before/After Slider", "Makes transformation outcomes tangible."],
      ["Class Schedule", "Gives visitors a clear sense of how the gym runs day to day."],
      ["Membership Toggle", "Compares plans without friction."],
      ["BMI Calculator", "Gives visitors a reason to interact before they commit."]
    ].map(([name, description]) => ({ name, description })),
    demonstrates:
      "Proof that a fitness brand's digital presence can carry the same intensity as the facility itself, engineered for conversion at every step.",
    mockups: [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=900&q=80"
    ],
    next: "carepoint",
    liveUrl: bySlug.ironforge.liveUrl
  },
  carepoint: {
    slug: "carepoint",
    title: "CarePoint Medical Center",
    category: "Healthcare",
    tagline: "A trust-engineered healthcare platform, architected for a multi-specialty clinic.",
    image: bySlug.carepoint.image,
    stack: bySlug.carepoint.stack,
    meta: [
      { label: "Timeline", value: "2 weeks" },
      { label: "Type", value: "Business Website" },
      { label: "Status", value: "Complete — Live Demo" }
    ],
    challenge: [
      "Healthcare websites need to build immediate trust. Patients are anxious and need to feel they are in the right hands before they even book an appointment.",
      "This concept shows how private clinics and specialist practices can present care, credentials, and booking paths clearly."
    ],
    approach: [
      "Trust-first design with registration, insurance, and partner proof points.",
      "Accessibility controls target elderly patients and families.",
      "Emergency bar, symptom checker disclaimer, and local language cues show domain awareness."
    ],
    features: [
      ["Accessibility Bar", "Improves readability and confidence."],
      ["Emergency Bar", "Keeps urgent contact visible."],
      ["Symptom Checker", "Demonstrates guided triage with disclaimers."],
      ["Doctor Profiles", "Builds personal trust."],
      ["Insurance Ticker", "Answers payment questions early."],
      ["Appointment Booking", "Turns trust into action."]
    ].map(([name, description]) => ({ name, description })),
    demonstrates:
      "Proof that healthcare interfaces can be both clinically credible and genuinely well-engineered, built to earn trust before the first appointment.",
    mockups: [
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=80"
    ],
    next: "clientflow",
    liveUrl: bySlug.carepoint.liveUrl
  },
  clientflow: {
    slug: "clientflow",
    title: "ClientFlow CRM",
    category: "SaaS / Web Application",
    tagline: "An enterprise-grade SaaS CRM, engineered on Next.js and TypeScript for zero-compromise performance.",
    image: bySlug.clientflow.image,
    stack: bySlug.clientflow.stack,
    meta: [
      { label: "Timeline", value: "2 weeks" },
      { label: "Type", value: "SaaS Application" },
      { label: "Status", value: "Complete — Live Demo" }
    ],
    challenge: [
      "Agencies and startups pitching SaaS products need to demonstrate what their platform looks like before it is fully built.",
      "This demo shows that zed-forge can design and build production-quality web applications, not just websites."
    ],
    approach: [
      "Full Next.js App Router application with TypeScript throughout.",
      "Kanban pipeline, command palette, analytics, AI assistant mockup, and onboarding patterns signal serious product engineering.",
      "Loading, empty, and keyboard-friendly states make the product feel complete."
    ],
    features: [
      ["Kanban Pipeline", "Visual sales flow with clear stages."],
      ["Command Palette", "Fast navigation for power users."],
      ["AI Assistant", "Shows an intelligent support layer."],
      ["Analytics Dashboard", "Turns activity into decisions."],
      ["Lead Management", "Core CRM workflow for teams."],
      ["Onboarding Tour", "Makes complex software approachable."]
    ].map(([name, description]) => ({ name, description })),
    demonstrates:
      "Proof of full product engineering, not just marketing sites: real application architecture, state management, and interface systems built to production standards.",
    mockups: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"
    ],
    next: "edupulse",
    liveUrl: bySlug.clientflow.liveUrl
  },
  edupulse: {
    slug: "edupulse",
    title: "EduPulse",
    category: "Education · SaaS Platform",
    tagline: "A real school management platform, not a mockup, in active development.",
    image: "/case-studies/edupulse/login.jpg",
    stack: bySlug.edupulse.stack,
    meta: [
      { label: "Timeline", value: "Ongoing" },
      { label: "Type", value: "SaaS Platform" },
      { label: "Status", value: "In Active Development — Live" }
    ],
    challenge: [
      "Schools and training institutions track attendance, grades, and student risk across spreadsheets and disconnected tools, with no single live view of who needs help.",
      "The platform needed to serve multiple institutions on one system without any institution ever seeing another's data, while staying fast enough for a lecturer to check on a phone between classes.",
    ],
    approach: [
      "Built as a genuine multi-tenant system: institutions register with a join code, and every account, query, and permission is scoped to enforce full tenant isolation.",
      "JWT-based authentication with role-based access across super-admin, admin, lecturer, and student roles.",
      "A command palette with real search across students, courses, and institutions, not a hardcoded demo list, plus a mobile-first bottom nav so the product actually works on the devices staff use day to day.",
    ],
    features: [
      ["Multi-Tenant Architecture", "Every institution's data is fully isolated, enforced at the query level."],
      ["JWT Authentication", "Role-based access across super-admin, admin, lecturer, and student accounts."],
      ["Institutional Pulse", "A live composite view of attendance, grades, and open alerts per institution."],
      ["Command Palette", "Real search across students, courses, and institutions, not a hardcoded demo."],
      ["Configurable Alerts", "Each institution sets its own thresholds for flagging students at risk."],
      ["Mobile-First Nav", "A real bottom nav built for staff checking data between classes, not a desktop afterthought."]
    ].map(([name, description]) => ({ name, description })),
    demonstrates:
      "This is live, evolving production software, not a static demo. It's the clearest proof of the institutional-grade, security-conscious engineering the rest of our work is built on.",
    mockups: [
      "/case-studies/edupulse/cover.jpg",
      "/case-studies/edupulse/command-palette.jpg"
    ],
    next: "solstice-estates",
    liveUrl: bySlug.edupulse.liveUrl
  },
  "solstice-estates": {
    slug: "solstice-estates",
    title: "Solstice Estates",
    category: "Real Estate · Concept Build",
    tagline: "An ultra-luxury digital flagship for a Zambian real estate agency, architected for buyers who measure a home by what it overlooks.",
    image: bySlug["solstice-estates"].image,
    stack: bySlug["solstice-estates"].stack,
    meta: [
      { label: "Timeline", value: "3 weeks" },
      { label: "Type", value: "Real Estate Platform" },
      { label: "Status", value: "Complete — Live Demo" }
    ],
    challenge: [
      "High-end real estate in Lusaka is often sold quietly, off-market, without ever being presented properly, undermining the price a genuinely exceptional property should command.",
      "The platform needed to carry the weight of a seven-figure listing: restrained typography, real photographic depth, and interactive tooling that reads as considered rather than templated.",
    ],
    approach: [
      "Built a multi-currency pricing system (ZMW/USD) with live-toggle state management, so every listing reads correctly to both local and international buyers without a page reload.",
      "Designed an interactive neighborhood-comparison module, tabbed profiles of Lusaka's top corridors (Kabulonga, Ibex Hill, Roma, Sunningdale) benchmarked on security, schooling, and commute.",
      "Added a confidential-listings flow for off-market inventory, with a dedicated enquiry system that routes buy, sell, and private-access requests separately.",
    ],
    features: [
      ["Multi-Currency Toggle", "Every listing price recalculates instantly between ZMW and USD, no reload required."],
      ["Neighborhood Comparison", "An interactive, tabbed breakdown of Lusaka's top corridors on security, schools, and commute."],
      ["Confidential Listings", "Off-market inventory shown by direct introduction only, with its own request flow."],
      ["Enquiry Flow", "A property-aware contact system that routes buy, sell, and private-access requests separately."],
      ["Editorial Photography Layer", "Full-bleed, golden-hour styled imagery treated as the primary content, not decoration."],
      ["Development Pipeline", "A phased view of ground-up estate partnerships, from planning through to reserved."]
    ].map(([name, description]) => ({ name, description })),
    demonstrates:
      "Proof that zed-forge can architect a digital experience for a seven-figure asset class: restrained luxury design paired with genuine interactive engineering, not just a pretty brochure site.",
    mockups: [
      "https://images.pexels.com/photos/8134821/pexels-photo-8134821.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/19689230/pexels-photo-19689230.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    next: "nkwazi-farms",
    liveUrl: bySlug["solstice-estates"].liveUrl
  },
  "nkwazi-farms": {
    slug: "nkwazi-farms",
    title: "Nkwazi Farms",
    category: "Agriculture",
    tagline: "An agriculture brand platform architected around one operating narrative: crops and livestock as a single integrated system.",
    image: bySlug["nkwazi-farms"].image,
    stack: bySlug["nkwazi-farms"].stack,
    meta: [
      { label: "Timeline", value: "2 weeks" },
      { label: "Type", value: "Business Website" },
      { label: "Status", value: "Complete — Live Demo" }
    ],
    challenge: [
      "Agriculture businesses rarely get a web presence that reads as real production infrastructure rather than a roadside sign. Buyers and partners need to see scale, process, and certification before they'll trust supply.",
      "This concept was built to address a live opportunity: a prospective client in agriculture had specifically requested a mockup relevant to their line of work."
    ],
    approach: [
      "Structured the entire site around one narrative: crops and livestock are one operating system, not two separate product lines competing for attention.",
      "Built a six-step process timeline (soil prep through delivery) so the operation reads as disciplined, not improvised.",
      "Added a certifications bar (ZABS, GAP, HACCP, COMESA) and proof-of-scale stats (tonnage, partners, provinces served) to substitute for the trust a buyer would otherwise need a site visit to get."
    ],
    features: [
      ["Process Timeline", "A six-step breakdown from soil preparation through delivery, shown as one continuous operation."],
      ["Certifications Bar", "ZABS, GAP, HACCP, and COMESA marks presented as a scannable trust strip."],
      ["Proof-of-Scale Stats", "Tonnage, partner count, and provinces served, framed as evidence rather than marketing copy."],
      ["Photo Gallery", "A lightbox gallery covering both the crop and livestock sides of the operation."],
      ["Dual-Discipline Framing", "Crops and livestock presented as one integrated system throughout, not two disconnected pages."],
      ["Direct Contact Routing", "WhatsApp, Instagram, and Facebook wired directly into the enquiry flow."]
    ].map(([name, description]) => ({ name, description })),
    demonstrates:
      "Proof that an agriculture brand can be presented with the same production-grade credibility as any other regulated supply business, engineered to build trust before a single call is made.",
    mockups: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1559743702-14419ca95ca4?auto=format&fit=crop&w=900&q=80"
    ],
    next: "trustline-lending",
    liveUrl: bySlug["nkwazi-farms"].liveUrl
  },
  "trustline-lending": {
    slug: "trustline-lending",
    title: "Trustline Finance",
    category: "Fintech · Concept Build",
    tagline: "A dark, neo-fintech lending platform engineered around a live, state-driven loan calculator, not a static rates table.",
    image: bySlug["trustline-lending"].image,
    stack: bySlug["trustline-lending"].stack,
    meta: [
      { label: "Timeline", value: "2 weeks" },
      { label: "Type", value: "Business Website" },
      { label: "Status", value: "Complete — Live Demo" }
    ],
    challenge: [
      "Lending platforms have to earn trust with a financial product before a visitor will hand over personal details, while most lender sites still lean on a static rates table and a generic contact form.",
      "The brief was to push the mockup toward the visual and interactive standard of established global fintech platforms without fabricating credentials the business doesn't actually hold."
    ],
    approach: [
      "Replaced the static rates table with a real-time, slider-driven loan calculator: amount and tenure inputs recompute the rate, monthly payment, and total repayable instantly.",
      "Built a four-step apply flow (loan details, personal details with live validation, a simulated document upload, and review) instead of a single flat form.",
      "Added a currency switcher (ZMW/USD/EUR/GBP) that recalculates the whole calculator and swaps the footer's regulatory disclaimer so converted figures are never presented as official multi-country pricing."
    ],
    features: [
      ["Live Loan Calculator", "Amount and tenure sliders recompute rate, monthly payment, and total repayable instantly."],
      ["Multi-Step Apply Flow", "A four-step application with real inline validation and a simulated document-upload state."],
      ["Currency Switcher", "ZMW/USD/EUR/GBP toggle that recalculates the calculator and updates the regulatory disclaimer per currency."],
      ["Dark/Light Theme Toggle", "A persisted theme preference across the full neo-fintech visual system."],
      ["Security Marquee", "An animated strip of the lender's actual licensing, encryption, and data-protection claims, nothing fabricated."],
      ["Developer Preview", "A mock API reference and status indicator, clearly labeled as a design preview rather than a live endpoint."]
    ].map(([name, description]) => ({ name, description })),
    demonstrates:
      "Proof of interactive, state-driven front-end engineering for a trust-sensitive financial product, built to elite visual standards without ever claiming a certification or credential the business doesn't hold.",
    mockups: [
      "https://images.unsplash.com/photo-1707761918029-1295034aa31e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1707157284454-553ef0a4ed0d?auto=format&fit=crop&w=900&q=80"
    ],
    next: "verve-studio",
    liveUrl: bySlug["trustline-lending"].liveUrl
  },
  "verve-studio": {
    slug: "verve-studio",
    title: "Verve",
    category: "Beauty & Grooming · Concept Build",
    tagline: "An editorial-grade studio platform for a unisex barber-and-salon brand, built around one narrative: no more picking a side of the door.",
    image: bySlug["verve-studio"].image,
    stack: bySlug["verve-studio"].stack,
    meta: [
      { label: "Timeline", value: "2 weeks" },
      { label: "Type", value: "Business Website" },
      { label: "Status", value: "Complete — Live Demo" }
    ],
    challenge: [
      "Barber-and-salon businesses that serve everyone are still routinely presented as two gendered menus bolted together, which undercuts the actual pitch of a studio built to serve any client in either chair.",
      "The site needed real production-grade front-end craft, not just an editorial look, since a design-forward brand invites closer scrutiny of its interaction details."
    ],
    approach: [
      "Built a sticky-scroll service panel that swaps its image on hover for desktop, with an automatic tap-to-swap fallback on touch devices via a hover-capability media query.",
      "Wired the FAQ accordion and gallery lightbox with proper ARIA attributes and keyboard navigation rather than mouse-only interaction.",
      "Added defensive degradation throughout: a graceful fallback if an external image fails to load, and a try/catch around the smooth-scroll library so the site still works if that script doesn't load."
    ],
    features: [
      ["Hover-Swap Service Panel", "Desktop hover swaps the preview image; touch devices automatically fall back to tap-to-swap."],
      ["Accessible FAQ Accordion", "Proper aria-expanded and aria-controls wiring, not just a mouse-driven toggle."],
      ["Keyboard-Navigable Gallery", "A lightbox gallery that works fully from the keyboard, not only by clicking."],
      ["Infinite Testimonial Marquee", "A duplicated-track scrolling marquee with a reliable hover-to-pause on the moving row itself."],
      ["Magnetic Buttons", "A subtle cursor-follow micro-interaction on primary calls to action."],
      ["Graceful Degradation", "Image load failures and a blocked smooth-scroll CDN both degrade cleanly instead of breaking the page."]
    ].map(([name, description]) => ({ name, description })),
    demonstrates:
      "Proof that an editorial visual identity and real accessibility/defensive engineering aren't a trade-off: the same site that looks this considered also holds up under keyboard navigation and partial script failure.",
    mockups: [
      "https://images.unsplash.com/photo-1543807535-eceef0bc6599?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1634480258143-ffb5e6df0029?auto=format&fit=crop&w=900&q=80"
    ],
    next: "bella-vista",
    liveUrl: bySlug["verve-studio"].liveUrl
  }
};
