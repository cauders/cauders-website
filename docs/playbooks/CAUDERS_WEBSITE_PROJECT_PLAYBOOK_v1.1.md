# CAUDERS WEBSITE PROJECT PLAYBOOK
**Content, implementation, QA and launch workflow**

## Table of Contents
1. Why this document exists
2. Baseline and recovery rules
3. Cauders positioning and message architecture
4. Lessons from reference companies (structure, not copy)
5. Information architecture and navigation
6. Rules for factual claims, proof, and portfolio content
7. Canonical content workflow: one page at a time
8. The 48-hour launch sprint: order of operations
9. SEO, images, legal, and security: what happens when
10. Content status and approval definitions
11. Reusable Antigravity task template
12. Initial route inventory / page sequence
13. Final operating principles

---

**Version:** 1.1  
**Prepared:** 14 October 2026  
**Purpose:** The canonical operating document for improving, reviewing, launching, and maintaining the Cauders corporate website.  
**Design policy:** Existing visual design is frozen unless Muryam explicitly approves a design change.  
**Current phase:** 48-hour launch sprint focused on visible content, fit-for-purpose imagery, and end-to-end form operation. Content remains page-by-page; design remains frozen.  

---

### 1. Why this document exists
Cauders' website must behave like a serious commercial asset: explain the company's value, help a qualified buyer understand where Cauders can help, reduce uncertainty, and create a clear path to a useful conversation. It should not rely on inflated claims, a weak portfolio, generic agency language, or visual polish to compensate for unclear positioning.

This playbook is the durable reference for decisions that should not have to be reconstructed from chat history. The accompanying Cauders Website Content Master is the canonical draft of the public-facing words. The approved copy, this playbook, the actual repository, and the launch checklist are the working sources of truth.

#### Success criteria
· A prospective buyer can understand what Cauders does, who it helps, what problems it solves, and how to start a conversation.  
· Software engineering is the foundation; AI and automation are signature differentiators; cloud, modernization, data, product design, QA, maintenance, and partnerships support the core offer.  
· Every public factual claim can be defended or is clearly framed as a capability, approach, or aspiration rather than a proven result.  
· The site preserves the current design system and behavior while the copy is improved. The launch sprint prioritizes visible buyer-facing quality without treating legal, security, or functional launch gates as optional.  
· Contact, careers, partnerships, and feedback forms work end-to-end on the actual production host.  
· Mobile and desktop experiences remain coherent and accessible.  
· SEO, privacy, security, and launch readiness are checked deliberately rather than as emergency afterthoughts.  

---

### 2. Baseline and recovery rules
After the recent styling regression, the restored prior commit is the new baseline. Do not assume any later remediation branch or source edit remains active. Before editing:
1. Confirm the checked-out commit and branch.
2. Confirm git status and capture a baseline screenshot of desktop and mobile homepage plus header, mega-menu, service detail, contact, and footer.
3. Identify which changes are content data versus component markup, CSS classes, assets, layout, animation, or configuration.
4. Do not combine a copy update with a visual redesign. Content changes must be narrow and attributable to a specific approved section.
5. Maintain a simple change log: page/section, copy version, source file(s), tests, and approval status.
6. Never run a broad find-and-replace across TSX files to update prose. Do not change Tailwind classes, component hierarchy, animation parameters, image sources, breakpoints, spacing, or configuration while doing content-only work.
7. Before each batch, inspect the diff. After each page, compare the page to the baseline at matching viewports.
8. No reset, stash, commit, push, or deployment without an explicit instruction and a review checkpoint.

*Critical lesson:* a successful build does not mean a website still looks right. Every copy batch ends with visual regression review, not just TypeScript and build checks.

---

### 3. Cauders positioning and message architecture

#### Official brand language
- **Brand descriptor under the logo:** AI, Automation & Software Solutions  
- **Brand statement:** Where Technology Meets Vision, And Ideas Become Impact.  
Keep both consistent unless the founder approves a change. The descriptor communicates the range of the offer; it does not mean that Cauders only works in AI.

#### Positioning hierarchy
1. **Foundation:** custom software and product engineering.
2. **Signature differentiators:** applied AI and workflow automation used to address real operational or product problems. These deserve their own top-level navigation item so buyers can find Cauders’ specialization immediately.
3. **Supporting capabilities:** platform modernization, web and mobile applications, SaaS, APIs and integrations, cloud and DevOps, data systems, product design, quality assurance, maintenance, and engineering partnerships.
4. **Commercial outcome:** software that fits the business problem, integrates with real workflows, can be maintained, and can evolve as needs change. Do not guarantee business outcomes that have not been measured.

#### Cauders name and wordplay
The name can subtly evoke “coders,” but do not force a pun into every page or make the brand sound playful when speaking to enterprise buyers. Use the idea sparingly where it feels natural—especially Careers—such as “Come code with Cauders.” The overall voice remains precise, commercially aware, and technically credible.

#### Core positioning statement
Cauders works with businesses to design, build, integrate, and improve digital systems—from custom software and SaaS products to applied AI and workflow automation. The work starts with the business problem and technical constraints, then moves through practical solution design, engineering, validation, and ongoing evolution where required.

#### Primary audiences
· Business owners and executives who need to solve an operational or product problem with software.  
· Product leaders and growing software businesses that need engineering capacity or technical delivery support.  
· Teams with legacy systems, disconnected tools, manual processes, or data that is difficult to use.  
· Agencies and consultancies that need a dependable engineering partner, subject to clearly defined collaboration and disclosure terms.  
· Teams evaluating AI who need help deciding what is appropriate, integrating it into real workflows, and retaining human oversight where needed.  

#### What the website must answer
· What can Cauders build or improve?  
· What kinds of business and technical problems can it help with?  
· How does Cauders approach discovery, architecture, delivery, and validation?  
· How will communication, scope, responsibilities, handover, and support be handled?  
· How can a buyer start a conversation without having a complete specification?  

#### Brand voice
Use precise, commercially aware, confident language. Explain technical concepts when they affect buying decisions. Favor concrete verbs: design, build, integrate, modernize, validate, automate, monitor, maintain. Avoid inflated adjectives and empty superlatives. Do not write as if Cauders is a public-company-scale global vendor unless the fact is verified.

*Prefer:* “We design software around the workflows, users, data, and constraints it must support.”  
*Avoid:* “We revolutionize the future with world-class, cutting-edge, game-changing innovation.”  
*Prefer:* “AI can assist with classification, extraction, search, and workflow decisions when the task and validation criteria are well defined.”  
*Avoid:* “Our AI guarantees perfect results and eliminates human error.”  

---

### 4. Lessons from reference companies (structure, not copy)
Reference review performed on 14 October 2026. These companies are inspiration for clarity and information architecture only. Do not copy their wording, claims, page text, or identity.
· **Devsinc:** separates major service families such as AI/data, application engineering, cloud/infrastructure, advisory, product studio, and staffing. *Transferable lesson:* group services around buyer needs rather than presenting an undifferentiated list. [Official site](https://devsinc.com/)  
· **10Pearls:** connects enterprise technology services to transformation, delivery, and product value. *Transferable lesson:* explain the business reason for the service and the engagement path. [Official site](https://10pearls.com/)  
· **Arbisoft:** combines engineering positioning with industry-specific language and technical substantiation. *Transferable lesson:* industry pages should describe the context, workflows, integrations, and constraints of each sector—not just swap the industry name. [Official site](https://arbisoft.com/)  
· **NETSOL:** focuses its messaging around defined platforms and the asset-finance ecosystem. *Transferable lesson:* specificity is more credible than claiming expertise in every possible problem. Cauders should be specific about its services without pretending to share another company's scale, references, or specialization. [Official site](https://netsoltech.com/)  
· **Systems Limited:** leads with enterprise transformation and a clear conversion action. *Transferable lesson:* keep a visible next step and connect the offer to real business priorities. [Official site](https://www.systemsltd.com/)  

The goal is not to sound bigger than Cauders is. The goal is to sound precise, prepared, technically credible, and easy to engage.

---

### 5. Information architecture and navigation

#### Recommended primary navigation
Primary header order: AI & Automation | Services | Industries | Partnerships | About | Discuss a Project. Put AI & Automation first or otherwise give it clear top-level visibility, as it is a signature differentiator for Cauders. Do not bury it inside Services.
· **AI & Automation** — dedicated top-level menu for AI strategy/advisory, AI product engineering, generative AI/LLM applications, AI agents and tool-using workflows, enterprise AI governance/security, data and intelligent automation. Preserve the existing route structure and link each service or subcategory directly.  
· **Services** — mega-menu for Software & Product Engineering, Product Design & Digital Experiences, Cloud & Modernization, Quality Engineering & Application Security, Engineering Team Extension, and Maintenance & Support.  
· **Industries** — a focused index of industries Cauders can credibly serve.  
· **Partnerships** — an explicit route for agencies, consultancies, and product companies seeking an engineering partner.  
· **About** — company approach and leadership, with Team and Careers accessible as secondary destinations.  
· **Primary CTA:** Discuss a Project linking to `/contact`.  

#### Mega-menu rule
Do not add a View All Services item as a substitute for exposing the service structure. Keep the existing category/subcategory approach and expose every current service category and service sub-link that the restored menu is designed to include. Do not hide an entire group of services behind a View All Services item; if needed, use the existing columns/sections and mobile scrolling rather than dropping links or redesigning the menu. The top-level Services label may also link to `/services` if that is consistent with the current menu behavior. Do not redesign the menu to implement this copy hierarchy.

The restored header must be checked before implementation. Preserve its existing menu component, typography, animations, spacing, responsive behavior, and interaction model.

#### Recommended footer groups
The footer should feel complete and useful rather than minimal to the point of omitting important company information. Recommended groups:
· **Company identity:** Cauders logo; brand descriptor AI, Automation & Software Solutions; one short company description; and the legal/display name Cauders (Private) Limited.  
· **AI & Automation:** AI strategy/advisory, custom AI development, generative AI/LLM applications, AI agents, intelligent process automation, data modernization/analytics, and AI governance/risk controls.  
· **Services:** web/application development, mobile applications, custom software, SaaS, product design, cloud/modernization, business systems/integrations, quality/testing, application security, team extension, and maintenance/support. Use a practical selection of direct links and/or category links that fit the existing footer design.  
· **Industries:** healthcare, financial services, retail/e-commerce, technology/software, startups/growing businesses, logistics/supply chain, education/e-learning, and real estate.  
· **Company & engagement:** About, Team, Careers, Partnerships, Contact, and FAQ.  
· **Legal & trust:** Privacy Policy, Terms of Service, and Cookies Policy, plus a concise security/engagement link if an appropriate destination exists.  
· **Contact and social:** `info@cauders.com` after receipt testing; official company URLs: LinkedIn https://www.linkedin.com/company/cauders, Instagram https://www.instagram.com/ccauders/, Facebook https://www.facebook.com/people/Cauders/61580041683735/. Do not publish an unverified address, phone number, office classification, client logo, certification badge, or partner logo.

Do not show a portfolio link in the main navigation or footer for initial launch. `portfolio.cauders.com` is a separate deployment; removing links from the main site does not disable or protect it. Handle access protection or maintenance separately if it should not remain public.

#### Page roles
· **Homepage:** establish identity, summarize the offer, explain the approach, guide qualified visitors to services or contact.  
· **Category hubs:** help buyers orient themselves and compare related offers.  
· **Service detail pages:** explain the problem, fit, deliverables, working method, dependencies, and next step.  
· **Industry pages:** apply the offer to industry-specific workflows and constraints without implying unsupported client history or regulatory certification.  
· **About/team:** explain the company's approach and verified leadership details; no stock photos represented as real portraits.  
· **Contact/partnerships:** collect enough information to route an inquiry, but not so much that the form becomes a barrier.  
· **Careers:** show only real, current openings and a genuine application process.  
· **Legal/FAQ:** answer practical questions accurately; verify operating facts before publication.  

---

### 6. Rules for factual claims, proof, and portfolio content

#### Claims register
For any public claim, record: exact claim, page, claim type, evidence/source, client permission needed, owner, and disposition (approved, revise, remove, or pending). This applies to numbers, client names/logos, testimonials, awards, certifications, guarantees, uptime/performance, staffing counts, delivery times, and technology partnerships.

#### No evidence, no claim
· Do not publish numerical outcomes unless methodology, source, baseline, measurement period, and publication permission are available.  
· Do not name a client or show identifiable work unless the relationship and public disclosure are authorized.  
· Do not create anonymized project descriptions by inventing technologies, features, business functions, or results.  
· Do not use stock photos as founder, employee, customer, or client portraits.  
· Do not claim ISO, SOC 2, HIPAA, PCI DSS, GDPR, or other certifications/compliance status as if Cauders holds them unless verified. It is acceptable to describe technical work that can support a client's compliance effort if it is actually offered and described carefully.  
· Do not promise 24/7 human support, SLA-backed response times, zero downtime, or specific accuracy/latency unless there is a real approved service agreement or measurement basis.  
· Capability language is not a loophole: claims such as “multi-region resilience,” “encrypted local storage,” or “zero-downtime migration” also need to describe real capabilities, not aspirational copy.  

#### Portfolio decision
For the initial launch, the website will not promote a public portfolio. Favor informative copy about services, engineering decisions, process, and buyer education. Revisit case studies later when there is defensible evidence and written permission where required.

#### Enterprise buyer confidence without invented proof
A buyer evaluating a substantial engagement will look for evidence of real systems, architectural ownership, outcomes, references, delivery responsibilities, and security practices. Do not fabricate case studies or turn unverified project notes into “anonymized” claims. Until proof is approved, demonstrate technical depth through honest explanations of the engineering approach, system boundaries, discovery and acceptance criteria, integration considerations, AI evaluation and human oversight, and security responsibilities. Build a case-study/reference backlog, but publish a named or anonymized project only after factual substantiation and any required permission are in place.

#### Security language and current-control evidence
Do not present the absence of a certification as a hidden weakness, but do not imply that technical practices equal independent certification. Explain how security requirements are scoped and how controls are selected, implemented, documented, and reviewed. Before publishing a specific control (for example, least-privilege reviews, secret management, dependency scanning, backups, recovery tests, incident response, encryption, monitoring, or access reviews), check it against the actual internal security SOPs and evidence. Use “we are formalizing/documenting” only for work that is genuinely underway and approved to describe publicly. A security-related buyer question should receive a direct, bounded answer: what is considered, what can be included in the engagement, what evidence exists, and what needs an independent assessor or client-side action. Never claim ISO, SOC 2, HIPAA, PCI DSS, or other certification/compliance status unless verified.

---

### 7. Canonical content workflow: one page at a time

#### Phase 0 — Baseline restore
· Confirm prior commit restored and current working tree clean or explicitly documented.  
· Verify the staging environment actually represents the restored commit before judging appearance.  
· Save desktop/mobile baseline screenshots and current route inventory.  
· Keep a baseline note with commit SHA, branch, date, and environment URL.  
*Exit gate:* founder agrees that visual baseline is the one to preserve.

#### Phase 1 — Positioning and content rules
· Approve positioning, audiences, brand message, tone, proof rules, service hierarchy, and navigation.  
· Decide which service offers are genuinely in scope today versus future/partner-delivered capability.  
· Verify leadership titles, contact email, social links, careers status, location wording, and form destinations.  
*Exit gate:* no draft copy depends on unconfirmed company facts.

#### Phase 2 — Content inventory and master copy
· Extract all user-visible content from the restored baseline source, not from outdated chat notes.  
· Map text to route, section, component/data source, and current copy.  
· Draft and approve the replacement copy in the master document.  
· Mark copy as Draft, Founder Review, Approved, Implemented, and Verified.  
*Exit gate:* target copy for one page/section is approved before touching that page.

#### Phase 3 — Implement page by page
For each page only:
1. Tell Antigravity the exact route and sections in scope.
2. State content-only edit and list forbidden changes (layout, className, animation, imagery, responsive behavior, config, shared components beyond this page).
3. Supply the exact approved text from the master copy.
4. Ask it to identify shared data/components and affected routes before editing.
5. Require a minimal diff and list files touched.
6. Run type/build check if the change affects code; open desktop and mobile previews.
7. Compare layout to baseline. If the visual regression is unrelated to wording, stop and fix/undo only the regression before continuing.
8. Mark copy Implemented only after text and appearance have been reviewed.

*Never ask Antigravity to “improve the whole website” during this phase. Do not batch more than one major page at a time.*

#### Phase 4 — Content completeness and claims audit
Run automated scans for placeholders, lorem ipsum, stale names, unexplained metrics, guarantees, certification terms, broken links, duplicate titles, missing alt attributes, empty headings, orphan CTAs, contradictory service terms, and stale copy documents. An automated match is a candidate issue, not proof of an error. Manually classify results.

#### Phase 5 — Image and visual asset pass (after copy approval)
· Create an image brief for every meaningful image slot: role, message, aspect ratio, crop, placement, alt-text purpose, brand constraints, and whether a real image or custom illustration is appropriate.  
· Prefer relevant, high-quality imagery over filler stock photography. Do not use images that imply customers, projects, employees, facilities, awards, or technologies Cauders cannot substantiate.  
· Use the existing brand system: light, clean, premium, restrained teal accents, modern and practical—not a dark generic SaaS template.  
· Keep the exact existing layout and design language unless a separate design change is approved.  
· Optimize formats/sizes, create responsive crops, and test layout stability and mobile loading.  
*Exit gate:* founder approves the images in the context of the existing page design.

#### Phase 6 — SEO foundations
Before launch:
· Unique title and meta description for each indexable page.  
· Accurate H1 and logical heading hierarchy.  
· Canonical URLs on the production domain.  
· Open Graph/social sharing metadata and suitable image assets.  
· XML sitemap contains intended canonical URLs only.  
· robots.txt reflects the production crawl policy; staging is not unintentionally indexed.  
· Noindex only where appropriate (forms or utility pages may differ based on intent; decide intentionally).  
· Internal links point to valid canonical routes; redirects are deliberate and tested.  
· Image alt text describes meaningful image content; decorative images use empty alt text where appropriate.  
· Structured data is a later enhancement unless required for a specific launch need; never add organization facts that have not been verified.  
· Search Console property ownership, sitemap submission, and indexing inspection after launch.  
Do keyword mapping after positioning/copy is stable. Do not stuff keywords into copy at the expense of credibility.

#### Phase 7 — Forms and business workflows
List every form and the exact server action, recipient, data fields, validation, success/failure behavior, and production host. Test each form from browser input to receipt in the intended mailbox. A toast or `success: true` alone is not sufficient proof of delivery.

Forms to verify based on current route inventory: homepage/contact, contact page, careers application, partnerships, and feedback. Confirm whether each is a real production need before launch. Ensure secrets are set in the platform actually serving the site; do not assume Firebase configuration if production is Vercel, or vice versa. Never commit secrets.

Check abuse prevention, server-side validation, error handling, attachment/link safety, appropriate collection notice, access to submissions, retention, and spam handling.

#### Phase 8 — Functional, accessibility, and visual QA
· Production build and type checks.  
· Click through all header/footer links and every service/industry card.  
· Desktop, tablet, and mobile at defined viewports; inspect mega-menu, mobile drawer, forms, focus states, keyboard navigation, accordions, animations, and reduced-motion behavior.  
· Check color contrast, focus visibility, form labels/errors, button names, image alt, heading structure, and text zoom.  
· Check browser console, failed network requests, hydration errors, missing assets, and 404s.  
· Test page load and layout stability in a production-like build rather than relying only on `next dev` results.

#### Phase 9 — Performance and technical release readiness
· Measure production-mode Core Web Vitals using field data after launch and lab tools before launch.  
· Inspect largest images, image priority/lazy loading, font loading, JS bundles, third-party scripts, caching, and route rendering.  
· Test 404 handling, redirects, sitemap, robots, canonical, SSL, DNS, analytics/LinkedIn Insight configuration, and error logging.  
· Verify backups/source history and deployment rollback path.  
· Confirm no visible portfolio links/subdomain references are left in the main navigation or metadata. Separately decide whether to protect the external subdomain and prevent it being indexed.

#### Phase 10 — Pre-launch go/no-go
Launch only when all mandatory checks pass:
· Approved copy is implemented on the intended build.  
· Visual baseline is preserved; no unexplained styling regression.  
· No unsupported public claims or unauthorized endorsements remain.  
· Contact paths and forms are tested end to end.  
· Navigation/internal links work and no critical route returns an unintended 404.  
· Legal/privacy copy matches actual data collection and tracking.  
· Production domain, SSL, redirects, environment variables/secrets, monitoring, and rollback are verified.  
· Staging is not confused with production; intended production pages are indexable and protected environments are not.  
· Founder gives final approval.

#### Phase 11 — Post-launch improvement
Within the first week, check form delivery, errors, Search Console, analytics events, indexing, mobile experience, and performance. Then create an improvement backlog ordered by business impact, not novelty. Add educational content only when it answers a real buyer question. Revisit public case studies when evidence and permissions are available.

---

### 8. The 48-hour launch sprint: order of operations
The first launch is constrained by time. Prioritize visible quality and the essential end-to-end buyer journey, but do not knowingly launch a broken form or inaccurate legal/privacy disclosure. Work in this order:

#### Must be completed for the initial launch
1. **Baseline and scope lock:** confirm the restored commit; save current desktop/mobile screenshots; make no broad design changes.
2. **Visible copy:** homepage hero and core sections; dedicated AI & Automation landing page; Services and high-intent service pages; About/leadership; Industries; Partnerships if actively offered; Contact and FAQ. Review remaining detail pages using the same approved content system and remove outdated, unsupported, or contradictory visible copy.
3. **Navigation and footer:** AI & Automation is a separate top-level header item; service categories and links remain discoverable; footer clearly identifies Cauders (Private) Limited and includes useful navigation, verified contact/social links, and legal pages. No public portfolio links.
4. **Trust and security wording:** answer the buyer’s security question accurately and directly. Publish only controls that match the current SOP/evidence; do not claim certification.
5. **Images:** after section copy is approved, prioritize the homepage hero and the sections immediately supporting the value proposition, plus key AI/Services/About imagery. Use licensed or approved assets that explain a message; do not imply real clients, facilities, staff, awards, or deployments. Avoid a site-wide decorative image hunt until key slots are right.
6. **Forms:** test each form that remains visible from browser submission through actual recipient delivery, including failure states. A toast or build success is not enough. Configure secrets on the actual production host.
7. **Minimum legal/tracking sanity:** privacy, cookies, and terms must accurately describe actual data collection, providers, tracking, and contact details. Do not claim global legal compliance from a generic policy. Get appropriate legal review for jurisdiction-specific obligations; where review cannot happen within the sprint, do not publish unsupported assurances and record the unresolved issue explicitly.
8. **Release checks:** mobile/desktop visual review, critical links/routes, form delivery, production build, metadata essentials, canonical domain, sitemap/robots, TLS/DNS, monitoring, and a rollback path.

#### Defer safely if they are not launch blockers
· Public portfolio/case studies, testimonials, or quantitative outcomes until evidence and permissions are ready.  
· Blog/resources launch, extensive thought-leadership library, broad keyword expansion, and advanced content clusters.  
· Optional structured data beyond accurate basic metadata, and nonessential analytics/marketing enhancements.  
· Secondary decorative image replacements outside the main buyer journey.  
· Deep performance optimization after the production-like baseline meets acceptable loading and stability expectations. Performance defects that make the site unusable are not deferrable.  
· Certification applications or enterprise assurance statements that have not been achieved. Continue internal security governance work, but describe only the status and controls that can be evidenced.  

*Timebox rule:* do not use the 48-hour deadline as a reason to invent proof or bypass forms/privacy checks. If a page or claim cannot be responsibly completed, use a simpler accurate fallback or temporarily omit that content.

---

### 9. SEO, images, legal, and security: what happens when

#### Before the initial launch
· **Content and positioning:** complete approved core pages and substantiate claims.  
· **Navigation and internal links:** validate every menu item, card, CTA, and route.  
· **Images:** select fit-for-purpose licensed assets, optimize them, and add appropriate alt text.  
· **SEO:** complete titles, descriptions, canonical URLs, sitemap, robots, social metadata, and Search Console readiness.  
· **Forms:** complete end-to-end email tests, failure handling, abuse prevention, and data notices.  
· **Accessibility:** check labels, keyboard use, contrast, focus, mobile zoom, and reduced motion.  
· **Performance:** run a production-like test and review images, fonts, scripts, and layout stability.  
· **Security and privacy:** verify secret management, least privilege, form validation, and real policy disclosures.  
· **Portfolio:** do not promote it on the main site; make a separate access-protection decision for the external deployment.

#### After launch
· Improve pages based on real customer questions and search-query data.  
· Expand internal links deliberately as useful content grows.  
· Review and replace weak imagery when there is a clear reason.  
· Develop keyword mapping, content expansion, appropriate structured data, and indexing reviews.  
· Monitor form delivery and conversion, and periodically check abuse/security controls.  
· Recheck accessibility after meaningful releases.  
· Use field Core Web Vitals to prioritize performance tuning.  
· Review dependencies, secrets, access, data retention, and backup/restore practices.  
· Reintroduce case studies only when supported by credible evidence and required permissions.

---

### 10. Content status and approval definitions
· **Inventory pending:** not extracted from the restored source yet.  
· **Draft:** proposed copy exists; not approved.  
· **Founder review:** content is ready for a decision or factual confirmation.  
· **Approved:** wording has been approved as the target content.  
· **Implemented:** approved copy is in the application.  
· **Verified:** rendered content matches the master; layout, links, and page behavior have passed review.  
· **Blocked:** dependent on a fact, permission, credentials, legal review, or external repository.  

*Do not mark a page Verified merely because Antigravity says the change is complete. The rendered page must be inspected.*

---

### 11. Reusable Antigravity task template
Use this template in the local project after the master copy is approved. Change only the bracketed fields for the specific page.

```markdown
CAUDERS CONTENT-ONLY CHANGE — [PAGE / ROUTE / SECTION]
Baseline: use the currently restored approved commit and preserve all existing uncommitted work. Before editing, report current branch, commit, and git status.
Scope: update only the following route and named sections: [exact route/sections]. Use exact approved copy from docs/CAUDERS_WEBSITE_CONTENT_MASTER_v1.1.md, section [reference].
Visual freeze: do not alter layout, component structure, Tailwind/CSS classes, spacing, colors, fonts, responsive breakpoints, animations, images, transitions, or configuration. Do not refactor shared components unless essential; if shared impact is unavoidable, report it before editing.
Guardrails: do not invent facts, metrics, clients, quotes, certifications, features, technology stacks, or guarantees. Do not perform a broad rewrite or global search/replace. Do not commit, push, deploy, reset, or stash.
Process: identify the source file(s), make the smallest diff, run relevant checks, inspect the rendered page at desktop and mobile sizes, and compare to the baseline. Report exactly what changed, what did not change, any visual regression, and final Git status. Stop after this page; wait for the next page assignment.
```

---

### 12. Initial route inventory / page sequence
The route list below is based on the previously supplied site map and must be checked against the restored source before implementation. It describes the intended content scope, not a guarantee that every listed route is currently indexable.

#### Priority A — visible buyer journey (48-hour sprint)
1. `/` — Home
2. `/services` and service category hubs
3. `/ai` and AI category hubs
4. `/contact`
5. `/about`
6. `/industries` and industry pages
7. `/partners`
8. `/team`
9. `/faq`

#### Priority B — complete the detail catalogue
· All software/product/cloud/QA/maintenance service detail pages.  
· All AI, automation, and data service detail pages.  
· All industry detail pages.  
· `/careers` and `/careers/apply`.  
· `/feedback`.  

#### Priority C — policy and technical completion
• `/privacy-policy`, `/terms-of-service`, `/cookies-policy`.  
• Metadata, sitemap, robots, internal links, alt text, structured data decision, production form verification, performance, accessibility, analytics and launch operations.

---

### 13. Final operating principles
· Content is reviewed in the master document before implementation.  
· The design system is preserved; content editing is not a redesign authorization.  
· One page or one clearly bounded section at a time.  
· Evidence beats impressive-sounding copy.  
· No portfolio is preferable to a portfolio that cannot be defended.  
· No form is “working” until a real submission reaches the intended recipient. The 48-hour sprint prioritizes visible copy, fit-for-purpose images, and working forms while preserving security/legal accuracy.  
· A build passing is necessary but not sufficient; visual and content QA are separate gates.  
· Any unresolved assumption is written down instead of repeatedly rediscovered in chat.
