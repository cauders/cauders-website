# Cauders CTA Directory & Standards

**Status:** Canonical Reference  
**Created:** 15 October 2026  
**Purpose:** Defines the standardized Call-to-Action (CTA) label taxonomy across the Cauders website, paired with the full repository CTA inventory for reference during page-by-page revisions. No visual design or CSS classes are altered during implementation.

---

## 1. Standard CTA Labels (Taxonomy)

These standard labels must be used across pages and components as content updates are applied:

| Category / Role | Standard Label | Typical Destination | Usage Guidelines |
| :--- | :--- | :--- | :--- |
| **Primary CTA** | **`Contact Us`** | `/contact` | Global nav header, main high-intent conversion buttons, and default bottom action. |
| **Secondary CTA** | **`Explore Services`** | `/services` | Hero secondary action, navigation towards core service offerings. |
| **AI-specific CTA** | **`Explore AI & Automation`** | `/services/ai-data-engineering` or `/ai/...` | AI capability teasers, hero highlights, AI section drivers. |
| **Careers Brand CTA** | **`Come code with Cauders`** | `/careers` | Use sparingly in brand/culture callouts or team transition points. |
| **Service Page CTA** | **`Discuss This Requirement`** | `/contact` | Specific service offering cards, service detail pages, and scoped engagement points. |
| **AI Page CTA** | **`Explore an AI Use Case`** | `/contact` | AI solution detail pages, machine learning & automation feature blocks. |
| **Partnership CTA** | **`Discuss an Engineering Partnership`** | `/partners#apply` or `/contact` | Partner program hero, partner model cards, enterprise collaboration blocks. |
| **Careers CTA** | **`View Current Openings`** | `/careers` | Team page, careers hero, recruitment teasers. |
| **Contact Form Submit** | **`Send Inquiry`** | Form Submit (`POST`) | Replaces generic "Submit" on contact forms, lead capture boxes, and inquiry endpoints. |

---

## 2. Global Legal & Brand Display Standards

| Property | Standard Value | Usage Context |
| :--- | :--- | :--- |
| **Footer Legal / Display Name** | **`Cauders (Private) Limited`** | Footer copyright notices, formal legal statements, and terms/privacy entity attribution. |
| **Marketing / Brand Display Name** | **`Cauders`** | Hero headings, marketing narratives, navigation headers, and conversational copy. |

---

## 3. Active Repository CTA Inventory (Baseline: `00278a3`)

This inventory tracks every CTA currently rendered in the codebase and its proposed standard replacement label.

### A. Global Navigation & Header
| Component | Current Rendered Text | Proposed Standard Label | Target Route | File Reference |
| :--- | :--- | :--- | :--- | :--- |
| Global Header Nav Item | `AI & Automation` | `AI & Automation` | Hover MegaMenu | [`Header.tsx`](../src/components/cauders/Header.tsx#L104) |
| Global Header Button | `Discuss a Project` | **`Discuss a Project`** (Primary) | `/contact` | [`Header.tsx`](../src/components/cauders/Header.tsx#L150) |

---

### B. Homepage (`/`)
| Component / Section | Current Rendered Text | Proposed Standard Label | Target Route | File Reference |
| :--- | :--- | :--- | :--- | :--- |
| Hero Primary Action | `Discover Our Services` | **`Explore Services`** (Secondary) | `/services` | [`Hero.tsx`](../src/components/cauders/Hero.tsx#L41) |
| Hero Secondary Action | `Let's Talk Business` | **`Contact Us`** (Primary) | `/contact` | [`Hero.tsx`](../src/components/cauders/Hero.tsx#L47) |
| Services Preview Cards | `Learn More` | **`Discuss This Requirement`** | `/[category]/[slug]` | [`ServicesPreview.tsx`](../src/components/cauders/ServicesPreview.tsx#L106) |
| Services Preview Bottom | `View All Services` | **`Explore Services`** | MegaMenu / `/services` | [`ServicesPreview.tsx`](../src/components/cauders/ServicesPreview.tsx#L121) |
| Portfolio Showcase | `See All` | `See All Work` | Portfolio Subdomain | [`PortfolioSection.tsx`](../src/components/cauders/PortfolioSection.tsx#L81) |
| Team Preview | `Meet The Entire Team` | `Meet The Team` / `View Current Openings` | `/team` | [`TeamPreview.tsx`](../src/components/cauders/TeamPreview.tsx#L52) |
| Homepage Contact Form | `Submit` | **`Send Inquiry`** | Form Submit | [`HomePageContact.tsx`](../src/components/cauders/HomePageContact.tsx#L141) |
| Bottom CTA Banner | `→` (Submit) | Email input redirect | `/contact?email=...` | [`GetAQuote.tsx`](../src/components/cauders/GetAQuote.tsx#L40) |

---

### C. Services Hub (`/services`) & Category Pages (`/services/[category]`)
| Component / Section | Current Rendered Text | Proposed Standard Label | Target Route | File Reference |
| :--- | :--- | :--- | :--- | :--- |
| Services Hub Hero | `Explore Our Services` | **`Explore Services`** | `#services-list` | [`Services.tsx`](../src/components/cauders/Services.tsx#L39) |
| 17 Hub Service Cards | E.g. `Build Your Web Platform`, `Scale Your Team`, etc. | **`Discuss This Requirement`** | `/contact` | [`services.ts`](../src/data/services.ts) |
| Service Category Cards | `Learn more` | **`Discuss This Requirement`** | `/services/[category]/[service]` | [`ServiceCategoryPage.tsx`](../src/components/cauders/ServiceCategoryPage.tsx#L110) |
| Category Bottom Contact Form | `Submit` | **`Send Inquiry`** | Form Submit | [`HomePageContact.tsx`](../src/components/cauders/HomePageContact.tsx) |

---

### D. Service & AI Detail Pages (`/services/[cat]/[slug]` & `/ai/[cat]/[slug]`)
| Component / Section | Current Rendered Text | Proposed Standard Label | Target Route | File Reference |
| :--- | :--- | :--- | :--- | :--- |
| Hero Primary Button | `Explore Capabilities` | Anchor `#capabilities` | `#capabilities` | [`ImageContainerHero.tsx`](../src/components/cauders/ImageContainerHero.tsx#L40) |
| Service Capabilities Card Link | `Talk to an Expert` | **`Discuss This Requirement`** | `/contact` | [`ImageCard.tsx`](../src/components/cauders/ImageCard.tsx#L87) |
| AI Capabilities Card Link | `Talk to an Expert` | **`Explore an AI Use Case`** | `/contact` | [`ImageCard.tsx`](../src/components/cauders/ImageCard.tsx#L87) |
| Why Choose Cauders CTA | `Let's Discuss Your Project` / `Contact Us` | **`Discuss This Requirement`** | `/contact` | [`SplitSectionHeader.tsx`](../src/components/cauders/SplitSectionHeader.tsx#L39) |
| Bottom Banner | `→` (Submit) | Email input redirect | `/contact?email=...` | [`GetAQuote.tsx`](../src/components/cauders/GetAQuote.tsx) |

---

### E. Industry Pages (`/industries/[industry]`)
| Component / Section | Current Rendered Text | Proposed Standard Label | Target Route | File Reference |
| :--- | :--- | :--- | :--- | :--- |
| Hero Primary Button | `Explore Capabilities` | Anchor `#capabilities` | `#capabilities` | [`ImageContainerHero.tsx`](../src/components/cauders/ImageContainerHero.tsx#L40) |
| Capabilities Card Link | `Let's Discuss` | **`Discuss This Requirement`** | `/contact` | [`ImageCard.tsx`](../src/components/cauders/ImageCard.tsx#L87) |
| Challenges Section | `Discuss Your Challenges` | **`Discuss This Requirement`** | `/contact` | [`IndustryPage.tsx`](../src/components/cauders/IndustryPage.tsx#L193) |
| Domain Expertise Cards | `Learn More` | **`Discuss This Requirement`** | `/contact` | [`InfoCard.tsx`](../src/components/cauders/InfoCard.tsx#L70) |
| Partnership Section | `Start Your Transformation` | **`Discuss an Engineering Partnership`** | `/contact` | [`IndustryPage.tsx`](../src/components/cauders/IndustryPage.tsx#L267) |
| Methodology Section | `Discuss Your Project` | **`Discuss This Requirement`** | `/contact` | [`IndustryPage.tsx`](../src/components/cauders/IndustryPage.tsx#L407) |
| Why Choose Cauders | `Let's Discuss Your Project` | **`Discuss This Requirement`** | `/contact` | [`SplitSectionHeader.tsx`](../src/components/cauders/SplitSectionHeader.tsx#L39) |

---

### F. Company, Careers & Inquiries
| Route / Section | Current Rendered Text | Proposed Standard Label | Target Route | File Reference |
| :--- | :--- | :--- | :--- | :--- |
| About Hero (`/about`) | `Read More` | Anchor `#about-content` | `#about-content` | [`AboutPageContent.tsx`](../src/components/cauders/AboutPageContent.tsx#L42) |
| Team Page (`/team`) | `View Open Positions` | **`View Current Openings`** / **`Come code with Cauders`** | `/careers` | [`TeamCarousel.tsx`](../src/components/cauders/TeamCarousel.tsx#L400) |
| Careers Hero (`/careers`) | `Explore Openings` | **`View Current Openings`** | `#careers-content` | [`careers/page.tsx`](../src/app/careers/page.tsx#L55) |
| Job List Click | Job Card | Apply for role | `/careers/apply?role=...` | [`careers/page.tsx`](../src/app/careers/page.tsx#L115) |
| Careers Form (`/careers/apply`) | `Submit Application` | `Submit Application` | Form Submit | [`ApplicationForm.tsx`](../src/components/cauders/ApplicationForm.tsx#L274) |
| Partners Hero Primary (`/partners`) | `Apply for the Program` | **`Discuss an Engineering Partnership`** | `#apply` | [`PartnersPageContent.tsx`](../src/components/cauders/PartnersPageContent.tsx#L43) |
| Partners Hero Secondary | `Explore Models` | Anchor `#models` | `#models` | [`PartnersPageContent.tsx`](../src/components/cauders/PartnersPageContent.tsx#L45) |
| Partners Form (`/partners`) | `Submit Application →` | **`Send Inquiry`** / `Submit Application` | Form Submit | [`PartnersPageContent.tsx`](../src/components/cauders/PartnersPageContent.tsx#L225) |
| Contact Hero (`/contact`) | `Get In Touch` | Anchor `#contact-form` | `#contact-form` | [`ContactPageContent.tsx`](../src/components/cauders/ContactPageContent.tsx#L67) |
| Contact Form (`/contact`) | `Submit` | **`Send Inquiry`** | Form Submit | [`ContactPageContent.tsx`](../src/components/cauders/ContactPageContent.tsx#L248) |
| FAQ Bottom CTA (`/faq`) | `Contact Us` | **`Contact Us`** | `/contact` | [`FAQPage.tsx`](../src/components/cauders/FAQPage.tsx#L254) |
| Feedback Form (`/feedback`) | `Submit Feedback` | `Submit Feedback` | Form Submit | [`FeedbackPageContent.tsx`](../src/components/cauders/FeedbackPageContent.tsx#L190) |
| 404 Page | `Back home` / `Contact support` | `Back Home` / **`Contact Us`** | `/` / `/contact` | [`FallbackPage.tsx`](../src/components/cauders/FallbackPage.tsx#L38) |

---

### G. Global Footer
| Component / Element | Current Rendered Text | Proposed Standard Replacement | File Reference |
| :--- | :--- | :--- | :--- |
| Footer Copyright Notice | `© {year} Cauders. All Rights Reserved.` | `© {year} Cauders (Private) Limited. All Rights Reserved.` | [`Footer.tsx`](../src/components/cauders/Footer.tsx#L151) |

