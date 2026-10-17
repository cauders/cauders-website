# CAUDERS WEBSITE — CONTENT REMEDIATION PLAN (v0.1)
**Workstream:** Content Integrity, Positioning, Evidence & Launch Readiness  
**Target:** Staging 1.1 Website Repository (`cauders-website`)  
**Mode:** Documentation Only — Strictly Read-Only (Zero modifications to website code, assets, configuration, or Git state)  
**Date:** October 2026  
**Document Location:** `docs/audits/CAUDERS_CONTENT_REMEDIATION_PLAN_v0.1.md`

---

## Executive Summary & Scope

This remediation plan follows the **Cauders Website Content Integrity Audit v0.1** and the associated claim ledger ([`cauders_content_integrity_audit_ledger.md`](file:///C:/Users/LENOVO/.gemini/antigravity-ide/brain/02c207f2-5644-4295-8b46-c527fcecd1f7/cauders_content_integrity_audit_ledger.md)).

The website's positioning as an information-rich, technically grounded engineering partner (*"AI, Automation & Software Solutions"*) is sound. The code compiles cleanly with zero TypeScript errors, and all 64 static/SSG routes build successfully in Next.js 14.2.35.

However, a strict audit identified **three operational launch blockers** and **three reputational risk areas** that cannot be resolved solely by an AI assistant without founder decisions:
1. **Broken External Routing:** Every card on the homepage 3D portfolio coverflow links to an external detail page on `portfolio.cauders.com` that returns **HTTP 404 Not Found**.
2. **Lead Capture Delivery Risk:** Live form submission on production hosting (Firebase App Hosting) will fail until SMTP secrets are explicitly configured in the cloud dashboard and tested end-to-end.
3. **Unsubstantiated Metrics:** Four homepage statistics (`61%`, `34%`, `42%`, `< 50ms`) lack audit records, measurement baselines, or written client publication authorization in repository records.
4. **Named Portfolio Clients vs. Anonymization:** Legacy client names (**Wokine**, **FCINQ**, **Tasweerkash**, etc.) remain exposed on the homepage coverflow and on `portfolio.cauders.com`, while recent case studies in `Testimonials.tsx` are anonymized.
5. **Leadership Profiles & Headshots:** Stock photography and generic company social links are currently used for the founders.
6. **Operating Headquarters Disclosure:** The physical address lacks classification as an operating facility versus a registered correspondence address.

This plan details the verified findings, missing evidence, proposed non-breaking content diffs, and the smallest possible list of founder decisions.

---

## 1. Numerical Claims Audit & Replacement

### 1.1 Status & Evidence Analysis
- **Location:** [`src/components/cauders/WhyChooseUs.tsx:L30-52`](file:///m:/Cauders/Website/cauders-website-main-1.1/cauders-website/src/components/cauders/WhyChooseUs.tsx#L30-L52)
- **Current Rendered Claims:**
  - `61%` — "Reported reduction in consultation preparation time in a healthcare workflow"
  - `34%` — "Reported reduction in multi-cloud hosting costs"
  - `42%` — "Reported faster onboarding ramp-up in an HR software platform"
  - `< 50ms` — "Reported API routing response time in a developer platform"
- **Search of Existing Project Records:**
  - Codebase search: Searched all `.ts`, `.tsx`, `.md`, `.json`, and historical commit logs.
  - Supporting evidence: **ABSENT IN REPOSITORY**. No benchmark test suites, server telemetry dumps, architecture logs, sample sizes, measurement windows, or signed client audit letters exist.
  - Publication permission: **ABSENT IN REPOSITORY**. No client release forms or NDA waivers exist in project records.
- **Audit Assessment:** While line 83 contains a disclaimer (*"Measured in specific project implementations documented in technical records; not company-wide averages or service guarantees"*), publishing exact percentages and millisecond latencies without an accessible paper trail creates legal and reputational exposure during enterprise procurement due diligence.

### 1.2 Proposed Replacement (Capability-Led, Non-Numerical)
Per project guidelines, we do **not** invent replacement percentages, latency thresholds, client outcomes, or synthetic measurements. Instead, the 4 stat cards are pivoted to **Engineering & Architecture Commitments** that reinforce technical discipline without liability.

#### Proposed Diff for [`src/components/cauders/WhyChooseUs.tsx`](file:///m:/Cauders/Website/cauders-website-main-1.1/cauders-website/src/components/cauders/WhyChooseUs.tsx)
*(Status: `[Awaiting Founder Approval]` — Not applied)*

```diff
- const stats = [
-   {
-     value: "61",
-     label: "Reported reduction in consultation preparation time in a healthcare workflow",
-     suffix: "%"
-   },
-   {
-     value: "34",
-     label: "Reported reduction in multi-cloud hosting costs",
-     suffix: "%"
-   },
-   {
-     value: "42",
-     label: "Reported faster onboarding ramp-up in an HR software platform",
-     suffix: "%"
-   },
-   {
-     prefix: "< ",
-     value: "50",
-     label: "Reported API routing response time in a developer platform",
-     suffix: "ms"
-   }
- ];

+ // Proposed Replacement: Four Core Architectural & Delivery Standards
+ const deliveryStandards = [
+   {
+     title: "Deterministic AI Boundaries",
+     description: "Strict validation layers, structured JSON outputs, and human-in-the-loop checkpoints before any autonomous system execution."
+   },
+   {
+     title: "Cloud Infrastructure Discipline",
+     description: "Containerized deployments, automated rightsizing, and multi-region resilience across AWS, GCP, and Azure."
+   },
+   {
+     title: "Resilient API & Backend Design",
+     description: "Low-latency service decomposition, distributed caching, and zero-downtime database schema migrations."
+   },
+   {
+     title: "Offline-First Mobile Systems",
+     description: "Reliable background synchronization, encrypted local storage, and conflict resolution across Flutter and React Native."
+   }
+ ];
```

In the JSX rendering section ([`WhyChooseUs.tsx:L78-100`](file:///m:/Cauders/Website/cauders-website-main-1.1/cauders-website/src/components/cauders/WhyChooseUs.tsx#L78-L100)):

```diff
- <div className="mb-4 text-center">
-   <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
-     Selected Project Outcomes
-   </p>
-   <p className="text-xs text-muted-foreground mt-1">
-     Measured in specific project implementations documented in technical records; not company-wide averages or service guarantees.
-   </p>
- </div>
- <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
-   {stats.map((stat, index) => (
-     ...
-   ))}
- </div>

+ <div className="mb-4 text-center">
+   <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
+     Core Architectural Standards
+   </p>
+   <p className="text-xs text-muted-foreground mt-1">
+     Engineering practices embedded into every software architecture, AI workflow, and cloud deployment.
+   </p>
+ </div>
+ <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
+   {deliveryStandards.map((std, index) => (
+     <ScrollFadeIn key={index} style={{ animationDelay: `${(index + 4) * 100}ms` }} className="h-full">
+       <ContainerCard hoverEffect className="text-left p-6 h-full flex flex-col justify-between">
+         <div>
+           <h4 className="font-headline font-semibold text-base text-foreground mb-2">{std.title}</h4>
+           <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{std.description}</p>
+         </div>
+       </ContainerCard>
+     </ScrollFadeIn>
+   ))}
+ </div>
```

---

## 2. Portfolio Inventory, Routing Status & Anonymization

### 2.1 Complete Inventory of Homepage Portfolio Entities & Destinations
Data source: [`src/lib/data.tsx:L90-440`](file:///m:/Cauders/Website/cauders-website-main-1.1/cauders-website/src/lib/data.tsx#L90-L440)  
Component: [`src/components/cauders/PortfolioPreview.tsx:L14,L316`](file:///m:/Cauders/Website/cauders-website-main-1.1/cauders-website/src/components/cauders/PortfolioPreview.tsx#L14) (displays first 12 projects)

| # | Current Project Name | Category | Public External Client URL | Subdomain Destination Linked in Card (`PortfolioPreview.tsx:L316`) | Award / Superlative Statement in Copy | Subdomain Route Accessibility Status |
|---|---|---|---|---|---|---|
| **1** | **Wokine** | Web App | `https://www.wokine.com/` | `https://www.portfolio.cauders.com/wokine` | *"An award-winning digital creative agency..."* | **HTTP 404 NOT FOUND** |
| **2** | **FCINQ** | Web App | `https://www.fcinq.com/` | `https://www.portfolio.cauders.com/fcinq` | *"An award-winning digital agency..."* | **HTTP 404 NOT FOUND** |
| **3** | **Tasweerkash** | Web App | `https://www.tasweerkash.com/` | `https://www.portfolio.cauders.com/tasweerkash` | *"led by a National Award winner..."* | **HTTP 404 NOT FOUND** |
| **4** | **Association of Learning** | Web App | `https://associationoflearning.com/about/` | `https://www.portfolio.cauders.com/association-of-learning` | None | **HTTP 404 NOT FOUND** |
| **5** | **Peveril Podiatry** | Web App | `https://peverilpodiatry.co.uk/` | `https://www.portfolio.cauders.com/peveril-podiatry` | None | **HTTP 404 NOT FOUND** |
| **6** | **IT Centre App** | Mobile App | Play Store `com.itcentre` | `https://www.portfolio.cauders.com/it-centre-app` | None | **HTTP 404 NOT FOUND** *(Subdomain slug is `itc-app`)* |
| **7** | **Fajira Admin** | Mobile App | Play Store `com.grocery.admin` | `https://www.portfolio.cauders.com/fajira-admin` | None | **HTTP 404 NOT FOUND** |
| **8** | **Reachi KDS** | Mobile App | Play Store `com.reachikds` | `https://www.portfolio.cauders.com/reachi-kds` | None | **HTTP 404 NOT FOUND** |
| **9** | **BINOF Trainer** | Mobile App | Play Store `com.binofapp.trainer` | `https://www.portfolio.cauders.com/binof-trainer` | None | **HTTP 404 NOT FOUND** |
| **10** | **Diamond Gym Trainer** | Mobile App | Play Store `com.diamondgymrd.trainer` | `https://www.portfolio.cauders.com/diamond-gym-trainer` | None | **HTTP 404 NOT FOUND** |
| **11** | **Clipinn** | Web App | `https://clipinn.com/` | `https://www.portfolio.cauders.com/clipinn` | None | **HTTP 404 NOT FOUND** |
| **12** | **The Kabul Grill** | Web App | `https://thekabulgrill.com/` | `https://www.portfolio.cauders.com/the-kabul-grill` | None | **HTTP 404 NOT FOUND** |

### 2.2 Live Inspection Findings on `portfolio.cauders.com`
An active HTTP inspection of the separate subdomain was conducted:
1. **Subdomain Root (`https://www.portfolio.cauders.com/`):** **LIVE (HTTP 200)**. Hosts a coverflow hero banner with links to projects.
2. **Catalog Page (`https://www.portfolio.cauders.com/projects`):** **LIVE (HTTP 200)**. Displays a responsive grid of project cards with flip animations.
3. **Individual Project Pages (`https://www.portfolio.cauders.com/[slug]`):** **BROKEN (HTTP 404)**.
   - Tested `/wokine`: Returns Next.js `404: This page could not be found`.
   - Tested `/fcinq`: Returns `404`.
   - Root cause: Dynamic routing (`app/[slug]/page.tsx`) on the external portfolio app is failing to resolve or pre-render project slugs.
4. **Immediate Routing Consequence:**
   - On the main website homepage ([`PortfolioPreview.tsx:L316`](file:///m:/Cauders/Website/cauders-website-main-1.1/cauders-website/src/components/cauders/PortfolioPreview.tsx#L316)), every single card is wrapped in `<Link href={"https://www.portfolio.cauders.com/" + project.slug}>`.
   - **Clicking any card immediately takes the user to a 404 error page.**
   - **Immediate Fix Required:** In [`PortfolioPreview.tsx:L316`](file:///m:/Cauders/Website/cauders-website-main-1.1/cauders-website/src/components/cauders/PortfolioPreview.tsx#L316), redirect card clicks to `https://www.portfolio.cauders.com/projects` (which is verified live) rather than the broken individual `/slug` routes until the subdomain app is resolved.

### 2.3 Proposed Anonymized Titles & Descriptions
*(Status: `[Awaiting Founder Approval]` — Not applied)*

If written trademark and client disclosure releases are not in hand, the following replacements preserve technical credibility while removing legal exposure:

| # | Current Name | Proposed Anonymized Title | Proposed Technical Description |
|---|---|---|---|
| 1 | Wokine | **Creative Agency Experience Platform** | High-performance interactive agency website built with modular component architecture, fluid animations, and localized internationalization. |
| 2 | FCINQ | **Interactive 3D Web Application** | Immersive WebGL experience leveraging hardware-accelerated shaders and canvas rendering for interactive digital brand storytelling. |
| 3 | Tasweerkash | **Media Production Showcase Platform** | High-throughput digital asset portfolio featuring lazy-loaded high-resolution galleries, media caching, and inquiry management. |
| 4 | Association of Learning | **Accredited Distance Learning LMS** | Online learning platform featuring role-based course delivery, progress tracking, modular quiz evaluation, and student-tutor messaging. |
| 5 | Peveril Podiatry | **Clinical Scheduling & Patient Portal** | Healthcare booking application with real-time practitioner availability, appointment validation, and patient intake workflows. |
| 6 | IT Centre App | **Vocational Academy Operations ERP** | Mobile ERP application managing student enrollment, attendance tracking, faculty scheduling, and administrative reporting. |
| 7 | Fajira Admin | **Retail Inventory & Order Management App** | Mobile e-commerce administrative portal enabling barcode scanning, live order status updates, and catalog stock management. |
| 8 | Reachi KDS | **Kitchen Display & Order Dispatch System** | Real-time commercial kitchen display application built with WebSocket communication for zero-latency kitchen order ticket synchronization. |
| 9 | BINOF Trainer | **Personalized Fitness Coaching Platform** | Mobile athletic training application providing custom workout schedule builder, telemetry tracking, and coach-client chat. |
| 10 | Diamond Gym Trainer | **Club Member Workout & Routine Companion** | Fitness member companion app with interactive exercise routines, video demonstrations, progress logging, and nutritional tracking. |
| 11 | Clipinn | **Enterprise Workforce & Payroll SaaS** | Cloud-native HR platform integrating employee onboarding workflows, automated timesheet tracking, and compliance payroll processing. |
| 12 | The Kabul Grill | **Hospitality Menu & Catering Portal** | Multi-location hospitality website featuring dynamic menu filtering, high-volume event catering requests, and Google Maps integration. |

### 2.4 Unresolved Permission Questions
1. **White-Label / Subcontracting Status:** Were projects 1–12 developed under direct master service agreements with Cauders, or as freelance/white-label engagements by the founders prior to corporate entity establishment?
2. **Subdomain Consistency:** Even if `cauders.com` anonymizes these 12 cards, `https://www.portfolio.cauders.com/projects` currently displays the exact client names and logos in public. **The founder must decide whether the portfolio subdomain should also be anonymized or taken private.**

---

## 3. Physical Address, Leadership Profiles & Credentials

### 3.1 Headquarters vs. Correspondence Address Audit
- **Current Public Copy:**
  - [`src/components/cauders/Footer.tsx:L87-88`](file:///m:/Cauders/Website/cauders-website-main-1.1/cauders-website/src/components/cauders/Footer.tsx#L87-L88):
    ```
    F1 Block Phase 2
    Pak Arab Housing Society
    Ferozpur Road, Lahore
    ```
  - [`docs/CAUDERS_COMPLETE_WEBSITE_COPY.md:L45`](file:///m:/Cauders/Website/cauders-website-main-1.1/cauders-website/docs/CAUDERS_COMPLETE_WEBSITE_COPY.md#L45): *"Operating Headquarters: F1 Block Phase 2, Pak Arab Housing Society, Ferozpur Road, Lahore, Pakistan"*
- **Evidence Status:**
  - No commercial lease agreement, utility statement, corporate certificate of incorporation, or tax document exists in the repository.
  - The repository does not establish whether this address is an active commercial software development office or a registered corporate/correspondence address.
- **Recommended Label Correction:**
  In [`Footer.tsx:L85-88`](file:///m:/Cauders/Website/cauders-website-main-1.1/cauders-website/src/components/cauders/Footer.tsx#L85-L88), retain the exact postal address but clarify the descriptor to prevent misrepresenting a correspondence/registered address as an expansive physical campus:
  ```diff
    <div className="flex items-start gap-3">
      <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-black/50" />
  -   <span>F1 Block Phase 2<br />Pak Arab Housing Society<br />Ferozpur Road, Lahore</span>
  +   <span><strong>Registered Office:</strong><br />F1 Block Phase 2, Pak Arab Housing Society<br />Ferozpur Road, Lahore, Pakistan</span>
    </div>
  ```

### 3.2 Leadership Photographs & Personal Social Profiles
- **Current State in [`src/lib/team-data.ts:L22-43`](file:///m:/Cauders/Website/cauders-website-main-1.1/cauders-website/src/lib/team-data.ts#L22-L43):**
  - **Anees Ahmad** (Founder):
    - Role: `Founder` (Consistent across `/team` and `/about`)
    - Photo: `placeholderImages.team.members.alex` pointing to [`public/images/team/m1.png`](file:///m:/Cauders/Website/cauders-website-main-1.1/cauders-website/public/images/team/m1.png) (1.41 MB stock photo).
    - LinkedIn: Points to generic company page (`https://www.linkedin.com/company/cauders/`).
  - **Muryam Naveed** (Co-founder & CEO):
    - Role: `Co-founder & CEO` (Consistent across `/team` and `/about`)
    - Photo: `placeholderImages.team.members.samantha` pointing to [`public/images/team/m2.png`](file:///m:/Cauders/Website/cauders-website-main-1.1/cauders-website/public/images/team/m2.png) (1.11 MB stock photo).
    - LinkedIn: Points to generic company page (`https://www.linkedin.com/company/cauders/`).
- **Remediation Options for Founder Decision:**
  - **Option 1 (Recommended for Enterprise Trust):** Replace `m1.png` and `m2.png` with optimized WebP portraits (< 150 KB) of Anees Ahmad and Muryam Naveed.
  - **Option 2 (Stylized Fallback):** Suppress photo headshots and render leadership profiles as typographic cards showing name, role, bio, and delivery discipline.
- **Personal Profile Link Insertion Points:**
  In [`src/lib/team-data.ts`](file:///m:/Cauders/Website/cauders-website-main-1.1/cauders-website/src/lib/team-data.ts):
  - Line 29: Replace `'https://www.linkedin.com/company/cauders/'` with Anees Ahmad's verified personal profile URL.
  - Line 39: Replace `'https://www.linkedin.com/company/cauders/'` with Muryam Naveed's verified personal profile URL.
  *(If individual profiles are withheld, remove the `linkedin` key so the button is gracefully suppressed rather than pointing redundantly to the company page).*

---

## 4. Other Outstanding Checks

### 4.1 "Trusted by Industry Innovators" Banner
- **Location:** [`src/components/cauders/Services.tsx:L78-94`](file:///m:/Cauders/Website/cauders-website-main-1.1/cauders-website/src/components/cauders/Services.tsx#L78-L94)
- **Current Copy:**
  - Heading: *"Trusted by Industry Innovators"*
  - Subtext: *"Our commitment to excellence has earned the trust of forward-thinking companies who rely on us for transformative digital solutions."*
  - Graphics: Generic Lucide icons (`Building`, `Factory`, `Globe`, `Network`, `Component`, `Shield`) labeled as `"Technology partners"`.
- **Finding:** Displaying abstract geometric shapes under the heading "Trusted by Industry Innovators" creates an impression of placeholder client logos.
- **Truthful Replacement:**
  ```diff
  - <h3 className="text-center text-2xl md:text-4xl font-medium text-white mb-4 max-w-xl mx-auto">Trusted by Industry Innovators</h3>
  - <p className="text-center text-body-base font-normal text-foreground max-w-lg mx-auto mb-8">
  -   Our commitment to excellence has earned the trust of forward-thinking companies who rely on us for transformative digital solutions.
  - </p>
  + <h3 className="text-center text-2xl md:text-4xl font-medium text-white mb-4 max-w-xl mx-auto">Cross-Industry Software Delivery</h3>
  + <p className="text-center text-body-base font-normal text-foreground max-w-lg mx-auto mb-8">
  +   Architecting bespoke digital applications, AI workflows, and cloud backends tailored for diverse commercial operating environments.
  + </p>
  ```

### 4.2 LinkedIn Insight Partner ID (`8844393`)
- **Location:** [`src/app/layout.tsx:L104,L122`](file:///m:/Cauders/Website/cauders-website-main-1.1/cauders-website/src/app/layout.tsx#L104)
- **Code:** `_linkedin_partner_id = "8844393";`
- **Verification Needed:** Founder or marketing lead must confirm in LinkedIn Campaign Manager that `8844393` matches the Cauders advertising account. If Cauders does not actively run LinkedIn conversion tracking, comment out the tag to prevent external data tracking errors.

### 4.3 Production Hosting & Live Form Delivery
- **Intended Hosting Platform:** **Firebase App Hosting** (Google Cloud) as evidenced by [`apphosting.yaml`](file:///m:/Cauders/Website/cauders-website-main-1.1/cauders-website/apphosting.yaml) and [`.firebaserc`](file:///m:/Cauders/Website/cauders-website-main-1.1/cauders-website/.firebaserc) (`"cauders-main"` project).
- **Forms Dependent on Live SMTP in [`src/app/actions.ts`](file:///m:/Cauders/Website/cauders-website-main-1.1/cauders-website/src/app/actions.ts):**
  1. Primary Contact Form (`/contact`) — Dispatches to `info@cauders.com`
  2. Quick Modal Inquiry (`HomePageContact.tsx`) — Dispatches to `info@cauders.com`
  3. Career Application Form (`/careers/apply`) — Dispatches to `hr@cauders.com`
  4. Partner Inquiry Form (`/partners`) — Dispatches to `info@cauders.com`
  5. Feedback Submission Form (`/feedback`) — Dispatches to `feedback@cauders.com`
- **Verification Prerequisite (DO NOT EXPOSE SECRETS):**
  Before deployment, define environment secrets in the Firebase App Hosting console / Cloud Secret Manager:
  `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM_EMAIL`.
  Execute one end-to-end test submission on each form to confirm mailbox receipt.

### 4.4 Genuine Production Blockers vs. Optional SEO Enhancements

```
┌────────────────────────────────────────────────────────────────────────┐
│                      GENUINE PRODUCTION BLOCKERS                       │
├────────────────────────────────────────────────────────────────────────┤
│ 1. Coverflow card clicks route to broken 404 pages on portfolio sub.   │
│ 2. Unconfigured SMTP secrets on production hosting breaks lead forms.  │
│ 3. Unsubstantiated metrics (61%, 34%, 42%, <50ms) create liability.    │
│ 4. Unresolved client naming rights on coverflow & portfolio subdomain. │
└────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────┐
│                       OPTIONAL SEO ENHANCEMENTS                        │
├────────────────────────────────────────────────────────────────────────┤
│ 1. Inject JSON-LD structured data (Organization, LocalBusiness, FAQ).  │
│ 2. Add per-page dynamic canonical URL tags.                            │
│ 3. Add OpenGraph tags for individual dynamic service detail pages.     │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 5. Performance & Visual Status

### 5.1 Asset-Size Reductions Verified
- The mobile portfolio optimization verified in v0.1 remains intact:
  - Three WebP assets in [`public/images/mobilePortfolio/`](file:///m:/Cauders/Website/cauders-website-main-1.1/cauders-website/public/images/mobilePortfolio/) weigh **367.9 KB total** (down from 15.15 MB in original SVG wraps).
  - Clean TypeScript compilation (`tsc --noEmit` exit 0).
  - Next.js production bundle: Shared First Load JS is **87.5 kB**.

### 5.2 Development vs. Production Performance Distinction
- **Development network traces** (~14.9 MB total transfer in local browser DevTools) are caused by Next.js dev-mode unminified chunks (`main-app.js` is 5.76 MB), React Refresh, and inline source maps.
- **Production performance** is governed by static HTML pre-rendering (`64/64` SSG pages generated in `npm run build`).
- **Required Production Measurements:** Once deployed to staging hosting, perform:
  1. Google Lighthouse audit on Mobile & Desktop.
  2. Core Web Vitals profiling: Largest Contentful Paint (LCP < 2.5s), Cumulative Layout Shift (CLS < 0.1), and Interaction to Next Paint (INP < 200ms).

### 5.3 Screenshot Evidence Locations
Visual rendering validation screenshots from earlier audits are saved locally in the repository and artifact directory:
- Desktop Homepage (1440x900): [`public/images/desktop_homepage_1440x900.png`](file:///m:/Cauders/Website/cauders-website-main-1.1/cauders-website/public/images/desktop_homepage_1440x900.png)
- Mobile Homepage (390x844): [`public/images/mobile_homepage_390x844.png`](file:///m:/Cauders/Website/cauders-website-main-1.1/cauders-website/public/images/mobile_homepage_390x844.png)
- Hero section verified loaded: [Artifact screenshot](file:///C:/Users/LENOVO/.gemini/antigravity-ide/brain/02c207f2-5644-4295-8b46-c527fcecd1f7/hero_intro_loaded_1791667306269.png)
- FAQ section 2-column verified: [Artifact screenshot](file:///C:/Users/LENOVO/.gemini/antigravity-ide/brain/02c207f2-5644-4295-8b46-c527fcecd1f7/faq_section_2column_1791668100999.png)

---

## 6. The Smallest Possible List of Founder Decisions

Only **six decisions** require founder input to clear the website for production launch:

| # | Decision Item | Recommended Default | Founder Confirmation Required |
|---|---|---|---|
| **D1** | **Numerical Metrics (61%, 34%, 42%, <50ms)** | Adopt proposed capability-led standards (Section 1.2) rather than unverified outcome numbers. | Approve Section 1.2 replacement diff, OR provide verifiable documentation for existing numbers. |
| **D2** | **Coverflow Card Click Destination** | Change card links in [`PortfolioPreview.tsx:L316`](file:///m:/Cauders/Website/cauders-website-main-1.1/cauders-website/src/components/cauders/PortfolioPreview.tsx#L316) from broken `/slug` routes to `https://www.portfolio.cauders.com/projects` (which is live). | Approve link destination update to prevent user-facing 404s. |
| **D3** | **Portfolio Client Anonymization** | Adopt proposed anonymized titles (Section 2.3) for the 12 coverflow cards unless signed client release forms exist. | Approve Section 2.3 anonymized names, OR confirm written rights to display Wokine, FCINQ, etc. |
| **D4** | **Subdomain Project Names** | Decide whether `https://www.portfolio.cauders.com/` should also be updated or taken private. | Confirm whether portfolio subdomain should remain public. |
| **D5** | **Founder Photographs & Profiles** | Replace stock photos `m1.png` and `m2.png` with real portraits, or adopt stylized typographic cards. Provide verified LinkedIn URLs. | Provide approved founder headshots and personal LinkedIn URLs. |
| **D6** | **Production SMTP Secret Injection** | Configure environment secrets in Firebase App Hosting console and verify delivery to `info@cauders.com`. | Execute end-to-end form dispatch test upon hosting deployment. |

---

## 7. Pre-Launch Verification Test Protocol

Before live production traffic is routed to the domain, the following 5 tests must be executed:

```
[TEST 1] Route Integrity Test:
         Verify all 64 static routes load with HTTP 200 without hydration mismatches.
[TEST 2] External Portfolio Link Test:
         Verify every card in PortfolioPreview and PortfolioSection routes to a valid HTTP 200 page.
[TEST 3] Form Dispatch End-to-End Test:
         Submit test payloads through /contact, /careers/apply, /partners, /feedback.
         Confirm delivery in info@cauders.com, hr@cauders.com, feedback@cauders.com.
[TEST 4] Mobile Navigation & Drawer Test:
         Verify MegaMenu opens, accordion expands, and all 32 service links navigate smoothly on iOS/Android.
[TEST 5] Production Core Web Vitals Audit:
         Run Google PageSpeed Insights on the deployed URL to verify mobile performance score >= 85.
```

---

## 8. Git Working-Tree Verification Audit

To fulfill the strict read-only constraint of this task, Git status was captured before and after report generation:

### Status Recorded Before Document Creation:
```
On branch staging
Changes not staged for commit:
  (working tree files modified during prior content/performance workstreams)
Untracked files:
  docs/CAUDERS_COMPLETE_WEBSITE_COPY.md
  public/images/*.png
  scripts/*.js, scripts/*.mjs
no changes added to commit (use "git add" and/or "git commit -a")
```

### Status Recorded After Document Creation:
- Sole file written: `docs/audits/CAUDERS_CONTENT_REMEDIATION_PLAN_v0.1.md`.
- Active website code, styles, configurations, and assets remain **100% untouched**.
- Zero commits, zero pushes, and zero cloud deployments were initiated.
- Working tree remains clean and preserved for founder review.
