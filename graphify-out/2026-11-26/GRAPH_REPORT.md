# Graph Report - atanas.info  (2026-11-26)

## Corpus Check
- 258 files · ~169,481 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 70 file(s) not represented in the graph (top: .css 40, (none) 15, .sketch 4)

## Summary
- 1577 nodes · 3546 edges · 115 communities (65 shown, 50 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 40 edges (avg confidence: 0.83)
- Token cost: 103,609 input · 0 output

## Graph Freshness
- Built from commit: `e2db6b22`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- package.json
- Pages & Test Suites
- devDependencies
- Runtime Dependencies
- Insights & External Libs
- tests/src/components/contact/index.tsx
- Static Props & MongoDB
- D3 Skills Graph
- react
- TS Compiler Options
- Layout
- Navigation
- src/pages/_app.tsx
- MDX & Portfolio Sliders
- Contentful CMS Client
- CMS Data Types
- Markdown Blog Pipeline
- NPM Scripts
- About Page Resume
- E.ON Email Templates
- CI/CD Workflows
- Blog: NodeJS Tooling Posts
- insights/utils.ts
- Renovate Config
- env
- src/components/animation/index.tsx
- Resume Sections
- Custom Type Declarations
- lastfm-node-client/index.d.ts
- steps
- Resume Entries & Dates
- ESLint Config
- TS Path Aliases
- PWA Manifest
- steps
- Redis CMS Cache
- steps
- Theme Switcher
- with
- puppeteer
- GitHub Skyline 3D
- Polymorphic Button
- Empty Page & Funding
- Houdini Bubbles
- Network Info Types
- Serwist Service Worker
- @codersrank/activity
- Houdini Circles
- src/components/footer/index.tsx
- tsconfig ts-node
- tsconfig-tsnode
- src/pages/interactive-resume.tsx
- Dependency Resolutions
- Resume Strengths
- Houdini tsconfig
- updates
- DNS Record Diffing
- Test Utils
- FUNDING.yml
- Houdini Confetti
- src/components/funding/index.tsx
- npmtotal/index.d.ts
- Package Bugs Info
- src/pages/music.tsx
- Jest Config
- Fat Loss Post
- SVG Test Mock
- Graphify Rules
- Lint Script
- Prettier Script
- SVG Script
- Time Script
- next
- Robots & Sitemap
- src/pages/portfolio/open-source/[slug].tsx
- shared.ts
- src/pages/testimonials.tsx
- _.config.yml
- contentful
- attr-i18n@1.0.0
- react-dom@19.3.1
- serialize-javascript@>=7.1.2
- typed-usa-states@2.1.0
- autoprefixer@10.7.0
- eslint@10.15.0
- eslint-plugin-import@2.32.0
- lastfm-ts-api@2.6.2
- @next/env@16.4.6
- postcss-cli@12.0.0
- postcss-for@2.1.1
- postcss-nested@9.0.1
- postcss-preset-env@11.6.3
- sass@1.108.2
- stylelint-no-unsupported-browser-features@8.1.2
- svg-symbol-sprite@1.5.2
- @testing-library/jest-dom@8.0.0
- tsconfig-paths@4.2.0
- tsx@4.23.15
- type-coverage@2.31.2
- @types/markdown-it@14.2.0
- @types/node@26.6.6
- @types/react-modal@3.16.3
- @types/react-slick@0.23.13
- webpack@5.113.0

## God Nodes (most connected - your core abstractions)
1. `react` - 90 edges
2. `Layout()` - 65 edges
3. `getPartnersFromCMS()` - 62 edges
4. `getFundingFromCMS()` - 62 edges
5. `Title()` - 60 edges
6. `Section()` - 58 edges
7. `next` - 52 edges
8. `snapshotTest()` - 51 edges
9. `Routes` - 48 edges
10. `compilerOptions` - 40 edges

## Surprising Connections (you probably didn't know these)
- `Code quality & Build workflow` --references--> `Jest`  [INFERRED]
  .github/workflows/build.yml → README.md
- `GitHub Funding Config (scriptex)` --conceptually_related_to--> `atanas.info personal website (PWA)`  [INFERRED]
  .github/FUNDING.yml → README.md
- `Code quality & Build workflow` --references--> `Contentful`  [EXTRACTED]
  .github/workflows/build.yml → README.md
- `Code quality & Build workflow` --references--> `Redis`  [EXTRACTED]
  .github/workflows/build.yml → README.md
- `atanas.info personal website (PWA)` --references--> `CodeQL analysis workflow`  [EXTRACTED]
  README.md → .github/workflows/codeql-analysis.yml

## Import Cycles
- 2-file cycle: `src/components/funding/index.tsx -> src/components/index.ts -> src/components/funding/index.tsx`
- 2-file cycle: `src/components/header/index.tsx -> src/components/index.ts -> src/components/header/index.tsx`
- 2-file cycle: `src/components/contact/index.tsx -> src/components/index.ts -> src/components/contact/index.tsx`
- 2-file cycle: `src/components/footer/index.tsx -> src/components/index.ts -> src/components/footer/index.tsx`
- 2-file cycle: `src/components/github-skyline/index.tsx -> src/components/index.ts -> src/components/github-skyline/index.tsx`
- 2-file cycle: `src/components/empty-page/index.tsx -> src/components/index.ts -> src/components/empty-page/index.tsx`
- 2-file cycle: `src/components/external-link/index.tsx -> src/components/index.ts -> src/components/external-link/index.tsx`
- 3-file cycle: `src/components/index.ts -> src/components/resume/index.ts -> src/components/resume/education.tsx -> src/components/index.ts`
- 3-file cycle: `src/components/index.ts -> src/components/social/index.ts -> src/components/social/linkedin.tsx -> src/components/index.ts`
- 3-file cycle: `src/components/index.ts -> src/components/social/index.ts -> src/components/social/music.tsx -> src/components/index.ts`
- 3-file cycle: `src/components/funding/crypto.tsx -> src/components/index.ts -> src/components/funding/index.tsx -> src/components/funding/crypto.tsx`
- 3-file cycle: `src/components/index.ts -> src/components/resume/index.ts -> src/components/resume/experience.tsx -> src/components/index.ts`
- 3-file cycle: `src/components/index.ts -> src/components/section/index.tsx -> src/components/section/elements.tsx -> src/components/index.ts`

## Hyperedges (group relationships)
- **DMARC/DKIM/SPF diff algorithms built on jsdiff** — src_data_posts_comparing_dns_records_dmarc_diff_algorithm, src_data_posts_comparing_dns_records_dkim_diff_algorithm, src_data_posts_comparing_dns_records_spf_diff_algorithm, src_data_posts_comparing_dns_records_jsdiff [EXTRACTED 1.00]
- **GitHub Actions CI/CD and scheduled data refresh pipeline** — _github_workflows_build_workflow, _github_workflows_codeql_analysis_workflow, _github_workflows_deploy_workflow, _github_workflows_insights_workflow, _github_workflows_screenshots_workflow [EXTRACTED 1.00]
- **NodeJS-as-automation-tool blog posts** — src_data_posts_bulk_image_watermark_with_nodejs_and_jimp_post, src_data_posts_running_multiple_webpack_based_applications_simultaneously_post, src_data_posts_testing_websockets_with_cypress_post [INFERRED 0.75]
- **E.ON Home App Onboarding Email Campaign** — public_email_templates_template1_email, public_email_templates_template2_email, public_email_templates_template3_email, public_email_templates_template4_email, public_email_templates_template5_email, public_email_templates_template7_email, public_email_templates_template8_email, public_email_templates_template11_email, public_email_templates_template12_email, public_email_templates_template13_email, public_email_templates_template1_eon_home_app [INFERRED 0.85]
- **FOTON App Activation Emails (PL)** — public_email_templates_template6_email, public_email_templates_template9_email, public_email_templates_template10_email, public_email_templates_template9_e_on_foton_technik [INFERRED 0.85]
- **Super Solar Italy Customer Emails** — public_email_templates_template2_email, public_email_templates_template3_email, public_email_templates_template4_email, public_email_templates_template5_email, public_email_templates_template12_email, public_email_templates_template5_e_on_super_solar [INFERRED 0.85]

## Communities (115 total, 50 thin omitted)

### Community 0 - "package.json"
Cohesion: 0.04
Nodes (48): author, description, cheerio@1.2.0, gray-matter@4.0.3, jest-canvas-mock@2.5.8, localga@3.0.0, markdown-it@15.0.3, package-info@5.0.7 (+40 more)

### Community 1 - "Pages & Test Suites"
Cohesion: 0.09
Nodes (21): @testing-library/react, Document(), ComponentType, mockAudioContext(), mockFetch(), snapshotTest(), test(), articles (+13 more)

### Community 2 - "devDependencies"
Cohesion: 0.03
Nodes (76): devDependencies, @babel/core@8.1.3, browserslist@4.29.6, cloudinary@2.11.0, commander@15.1.0, form-data@4.0.6, html-minifier@5.4.1, http-server@14.1.1 (+68 more)

### Community 3 - "Runtime Dependencies"
Cohesion: 0.02
Nodes (94): dependencies, animateme@2.4.2, async-array-prototype@1.1.1, babylonjs-gltf2interface@9.37.1, @babylonjs/gui@9.37.1, brace-expansion@>=2.1.4, @codersrank/education@0.9.12, @codersrank/portfolio@0.9.10 (+86 more)

### Community 4 - "Insights & External Libs"
Cohesion: 0.05
Nodes (45): LastFMAlbum, LastFMInsights, @apollo/client@4.3.8, @date-fns/utc@2.1.1, gitlab-calendar@2.0.1, react-round-carousel@1.5.0, touchsweep@2.2.0, use-interval@1.4.0 (+37 more)

### Community 5 - "tests/src/components/contact/index.tsx"
Cohesion: 0.21
Nodes (10): Contact(), ContactResult, Props, AppContext, Status, DEFAULT, ERROR, SUCCESS (+2 more)

### Community 6 - "Static Props & MongoDB"
Cohesion: 0.11
Nodes (35): getData(), getStaticProps(), getStaticProps(), getStaticProps(), getStaticProps(), getStaticProps(), getStaticProps(), getStaticProps() (+27 more)

### Community 7 - "D3 Skills Graph"
Cohesion: 0.07
Nodes (29): d3@7.9.2, d3, defaultForceNodeSize, ForceNode, skills, Canvas, createDots(), createSVG() (+21 more)

### Community 8 - "react"
Cohesion: 0.12
Nodes (16): react, ExternalLink(), Props, Props, Props, Referral(), HeaderWrapper(), SectionElements() (+8 more)

### Community 9 - "TS Compiler Options"
Cohesion: 0.05
Nodes (38): compilerOptions, allowJs, allowSyntheticDefaultImports, alwaysStrict, checkJs, declaration, emitDecoratorMetadata, esModuleInterop (+30 more)

### Community 10 - "Layout"
Cohesion: 0.16
Nodes (37): Animation(), Header(), Icon(), Layout(), Lines(), Loader(), SectionGrid(), Section() (+29 more)

### Community 11 - "Navigation"
Cohesion: 0.07
Nodes (34): Anchor(), menuItemsWithDropdown, Nav(), AnchorProps, Props, MenuItem, menuItems, Routes (+26 more)

### Community 12 - "src/pages/_app.tsx"
Cohesion: 0.13
Nodes (15): react-cookie-consent@10.0.2, react-gtm-module@2.0.11, @vercel/analytics@2.0.1, @vercel/speed-insights@2.1.0, react-cookie-consent, react-gtm-module, @vercel/analytics, @vercel/speed-insights (+7 more)

### Community 13 - "MDX & Portfolio Sliders"
Cohesion: 0.11
Nodes (19): PortfolioSliders(), Props, getCommonProps(), PaginationProps, Props, SectionGridProps, portfolioSectionProps, automotiveProjects (+11 more)

### Community 14 - "Contentful CMS Client"
Cohesion: 0.08
Nodes (21): AllowedDataTypes, Props, client, CMSPartner, CMSTestimonial, Experience, getGithubSkylineFromCMS(), getOccupationFromCMS() (+13 more)

### Community 15 - "CMS Data Types"
Cohesion: 0.07
Nodes (31): NPMStats(), PackagesList(), BioEntry, ResumeData, AboutPageProps, ArticlesPageProps, GithubContribution, GithubCount (+23 more)

### Community 16 - "Markdown Blog Pipeline"
Cohesion: 0.17
Nodes (15): getAllPosts(), getPostBySlug(), getPostSlugs(), MarkdownIt, markdownToHtml(), postsDirectory(), @getbrevo/brevo@6.2.0, @getbrevo/brevo (+7 more)

### Community 17 - "NPM Scripts"
Cohesion: 0.07
Nodes (28): scripts, build, fetch-music, fetch-projects, houdini, insights, lint, mjml (+20 more)

### Community 18 - "About Page Resume"
Cohesion: 0.25
Nodes (17): getCMSData(), getStaticProps(), getStaticProps(), getStaticProps(), getBadgesFromCMS(), getBioFromCMS(), getCertificatesFromCMS(), getEducationFromCMS() (+9 more)

### Community 19 - "E.ON Email Templates"
Cohesion: 0.17
Nodes (22): FOTON Home Account Activation Email (PL), FOTON Home App, E.ON Home Photovoltaic Email (IT), E.ON Energia Italia, Super Solar Welcome Email v2 (IT), E.ON Home Insights Email (UK), E.ON Home tado Thermostat Email (IT), E.ON Home App (+14 more)

### Community 20 - "CI/CD Workflows"
Cohesion: 0.13
Nodes (20): Jekyll relative-links config, Jekyll theme slate (GitHub Pages), GitHub Funding Config (scriptex), Codacy coverage reporter job, Code quality & Build workflow, CodeQL analysis workflow, Vercel Deploy workflow (every 8h), Insights & NPM Stats workflow (+12 more)

### Community 21 - "Blog: NodeJS Tooling Posts"
Cohesion: 0.09
Nodes (20): Jimp image library, Mama Culinar (WordPress culinary blog), Bulk image watermark with NodeJS and Jimp, Angular Signals / SSR talks, JS/Node memory management (Shelley Vohr), Micro Frontend challenges (Roei Berkovich), CityJS Athens 2025 conference recap, Scaling test automation (Mesut Durukal) (+12 more)

### Community 22 - "insights/utils.ts"
Cohesion: 0.05
Nodes (58): Project, saveProject(), github, gitlab(), lastFm, Contribution, getGithubInsights(), getGithubRepositories() (+50 more)

### Community 23 - "Renovate Config"
Cohesion: 0.10
Nodes (19): :automergeBranch, :automergeMinor, :automergePatch, config:base, :disableDependencyDashboard, group:allNonMajor, assignees, extends (+11 more)

### Community 24 - "env"
Cohesion: 0.05
Nodes (40): runs-on, steps, name, needs, runs-on, steps, strategy, CLOUDINARY_API_KEY (+32 more)

### Community 25 - "src/components/animation/index.tsx"
Cohesion: 0.33
Nodes (4): lottie-web@5.13.0, lottie-web, defaultOptions, Props

### Community 26 - "Resume Sections"
Cohesion: 0.14
Nodes (11): Props, ResumeSkills(), Props, ResumeTitle(), OwnerDetails, ResumeLink, ResumeSkills, resumeEducation (+3 more)

### Community 27 - "Custom Type Declarations"
Cohesion: 0.12
Nodes (16): ClassLike, @codersrank/activity/codersrank-activity.min, @codersrank/education/codersrank-education.min, @codersrank/portfolio/codersrank-portfolio.min, @codersrank/skills-chart/codersrank-skills-chart.min, @codersrank/summary/codersrank-summary.min, @codersrank/timeline/codersrank-timeline.min, @codersrank/work-experience/codersrank-work-experience.min (+8 more)

### Community 28 - "lastfm-node-client/index.d.ts"
Cohesion: 0.12
Nodes (15): lastfm-node-client, BooleanNumber, LastFm, LastFMAlbumResponse, LastFMDefaultOptions, LastFMImage, LastFMPeriod, LastFMRecentTrack (+7 more)

### Community 29 - "steps"
Cohesion: 0.08
Nodes (25): name, runs-on, steps, strategy, jobs, analyze, language, name (+17 more)

### Community 30 - "Resume Entries & Dates"
Cohesion: 0.14
Nodes (14): Props, ResumeEducation(), Props, ResumeEntry(), Props, ResumeExperience(), Props, ResumeMore() (+6 more)

### Community 31 - "ESLint Config"
Cohesion: 0.08
Nodes (24): __dirname, __filename, @eslint/compat@2.1.1, eslint-config-prettier@10.1.8, @eslint/js@10.0.1, eslint-plugin-jest@29.17.1, eslint-plugin-perfectionist@5.14.0, eslint-plugin-react@7.37.5 (+16 more)

### Community 32 - "TS Path Aliases"
Cohesion: 0.13
Nodes (15): paths, @components, @data/*, @insights/*, @lib/*, @npm, @pages/*, @public/* (+7 more)

### Community 33 - "PWA Manifest"
Cohesion: 0.15
Nodes (12): background_color, description, dir, display, icons, lang, name, orientation (+4 more)

### Community 34 - "steps"
Cohesion: 0.10
Nodes (20): runs-on, steps, GITHUB_TOKEN, GITLAB_TOKEN, LAST_FM_API_KEY, MONGODB_URI, NODE_OPTIONS, jobs (+12 more)

### Community 35 - "Redis CMS Cache"
Cohesion: 0.27
Nodes (8): contentfulClient, fetchFromContentful(), refreshCMSData(), getRedisClient(), handler(), allCMSTypes, CMSType, RawCMSData

### Community 36 - "steps"
Cohesion: 0.10
Nodes (20): runs-on, steps, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_CLOUD_NAME, MONGODB_URI, NODE_OPTIONS, jobs (+12 more)

### Community 37 - "Theme Switcher"
Cohesion: 0.31
Nodes (6): Crater(), Props, moonData, ThemeSwitcher(), Moon(), Sun()

### Community 38 - "with"
Cohesion: 0.13
Nodes (14): runs-on, steps, jobs, deploy, name, on, workflow_dispatch, uses (+6 more)

### Community 40 - "GitHub Skyline 3D"
Cohesion: 0.20
Nodes (11): @babylonjs/core@9.37.1, @babylonjs/loaders@9.37.1, @babylonjs/materials@9.37.1, @babylonjs/core, @babylonjs/loaders, @babylonjs/materials, SIZE, GithubSkyline() (+3 more)

### Community 41 - "Polymorphic Button"
Cohesion: 0.25
Nodes (10): AnchorButton(), AnchorProps, Button(), ButtonProps, CustomProps, DefaultButton(), getClassName(), LinkButton() (+2 more)

### Community 42 - "Empty Page & Funding"
Cohesion: 0.29
Nodes (8): iconData, Props, Props, Partners(), Props, FundingNetwork, Partner, ReactChildren

### Community 43 - "Houdini Bubbles"
Cohesion: 0.36
Nodes (7): Bubble, drawCircle(), drawGradient(), normalize(), paint(), parseProps(), rand()

### Community 44 - "Network Info Types"
Cohesion: 0.22
Nodes (8): ConnectionType, EffectiveConnectionType, Megabit, Millisecond, Navigator, NavigatorNetworkInformation, NetworkInformation, WorkerNavigator

### Community 45 - "Serwist Service Worker"
Cohesion: 0.20
Nodes (7): withSerwist, @serwist/next@9.5.15, serwist@9.5.15, serwist, @serwist/next, serwist, WorkerGlobalScope

### Community 48 - "Houdini Circles"
Cohesion: 0.43
Nodes (5): Circle, drawCircle(), paint(), parseProps(), rand()

### Community 49 - "src/components/footer/index.tsx"
Cohesion: 0.15
Nodes (6): scriptex-socials@1.10.1, swiper@14.4.0, scriptex-socials, swiper, Footer(), Props

### Community 50 - "tsconfig ts-node"
Cohesion: 0.29
Nodes (6): module, exclude, include, ts-node, compilerOptions, require

### Community 51 - "tsconfig-tsnode"
Cohesion: 0.33
Nodes (5): module, extends, ts-node, compilerOptions, require

### Community 53 - "Dependency Resolutions"
Cohesion: 0.29
Nodes (7): resolutions, brace-expansion, postcss, serialize-javascript, svgo, undici, uuid

### Community 54 - "Resume Strengths"
Cohesion: 0.33
Nodes (4): Props, ResumeStrengths(), Strength, strengths

### Community 55 - "Houdini tsconfig"
Cohesion: 0.40
Nodes (4): compilerOptions, outDir, extends, include

### Community 56 - "updates"
Cohesion: 0.18
Nodes (10): applies-to, patterns, all-security-updates, interval, updates, directory, groups, package-ecosystem (+2 more)

### Community 60 - "FUNDING.yml"
Cohesion: 0.18
Nodes (10): community_bridge, custom, github, issuehunt, ko_fi, liberapay, open_collective, otechie (+2 more)

### Community 64 - "src/components/funding/index.tsx"
Cohesion: 0.24
Nodes (8): gsap@3.15.1, react-copy-to-clipboard@5.1.1, gsap, react-copy-to-clipboard, FundingCrypto(), Props, Funding(), Props

### Community 65 - "npmtotal/index.d.ts"
Cohesion: 0.50
Nodes (3): npmtotal, NPMTotalOptions, NPMTotalResult

### Community 66 - "Package Bugs Info"
Cohesion: 0.67
Nodes (3): bugs, email, url

### Community 67 - "src/pages/music.tsx"
Cohesion: 0.25
Nodes (9): simplex-noise@4.0.3, simplex-noise, getTrackArtist(), Music(), music(), MusicFunctions, Ref, MusicPageProps (+1 more)

### Community 69 - "Fat Loss Post"
Cohesion: 0.67
Nodes (3): Data noise: ECV and the Whoosh effect, MyFitnessPal input logging, Data-Driven Fat Loss: Debugging a Legacy System

### Community 79 - "next"
Cohesion: 0.24
Nodes (7): next, EmptyPage(), ErrorPage(), OfflinePage(), ErrorPageProps, OfflinePageProps, TimelinePageData

### Community 81 - "src/pages/portfolio/open-source/[slug].tsx"
Cohesion: 0.14
Nodes (10): DiscussionEmbed, MDX(), Props, openSourceProjectsList, blogProps, openSourceProjects, Params, StaticPaths (+2 more)

### Community 86 - "shared.ts"
Cohesion: 0.24
Nodes (7): date-fns@4.4.0, date-fns, FundingNetwork(), Props, PaginationData, spriteHref(), Theme

### Community 87 - "src/pages/testimonials.tsx"
Cohesion: 0.24
Nodes (8): DataProps, List(), ListProps, Pagination(), PaginationProps, Props, Testimonials(), TestimonialsPageProps

### Community 88 - "_.config.yml"
Cohesion: 0.33
Nodes (5): include, plugins, relative_links, collections, enabled

### Community 89 - "contentful"
Cohesion: 0.40
Nodes (4): contentful@11.12.10, contentful, Badge, badges

## Ambiguous Edges - Review These
- `Atanas Atanasov` → `MJML-style Responsive Table Email Layout`  [AMBIGUOUS]
  public/email-templates/template1.html · relation: conceptually_related_to

## Knowledge Gaps
- **59 isolated node(s):** `config:base`, `:automergePatch`, `:automergeMinor`, `:automergeBranch`, `:disableDependencyDashboard` (+54 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 536 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **50 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `package.json`, `Pages & Test Suites`, `Runtime Dependencies`, `Insights & External Libs`, `tests/src/components/contact/index.tsx`, `Static Props & MongoDB`, `Layout`, `Navigation`, `src/pages/_app.tsx`, `MDX & Portfolio Sliders`, `Contentful CMS Client`, `CMS Data Types`, `About Page Resume`, `src/components/animation/index.tsx`, `Resume Sections`, `Resume Entries & Dates`, `Theme Switcher`, `GitHub Skyline 3D`, `Polymorphic Button`, `Empty Page & Funding`, `src/components/footer/index.tsx`, `src/pages/interactive-resume.tsx`, `Resume Strengths`, `src/components/funding/index.tsx`, `src/pages/music.tsx`, `next`, `src/pages/portfolio/open-source/[slug].tsx`, `shared.ts`, `src/pages/testimonials.tsx`?**
  _High betweenness centrality (0.116) - this node is a cross-community bridge._
- **What connects `config:base`, `:automergePatch`, `:automergeMinor` to the rest of the system?**
  _59 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.04081632653061224 - nodes in this community are weakly interconnected._
- **Why does `compilerOptions` connect `TS Compiler Options` to `TS Path Aliases`, `tsconfig ts-node`?**
  _High betweenness centrality (0.061) - this node is a cross-community bridge._
- **Should `Pages & Test Suites` be split into smaller, more focused modules?**
  _Cohesion score 0.0872072072072072 - nodes in this community are weakly interconnected._
- **Why does `next` connect `next` to `package.json`, `Pages & Test Suites`, `Runtime Dependencies`, `Insights & External Libs`, `Static Props & MongoDB`, `react`, `Layout`, `Navigation`, `src/pages/_app.tsx`, `MDX & Portfolio Sliders`, `CMS Data Types`, `Markdown Blog Pipeline`, `About Page Resume`, `insights/utils.ts`, `Resume Sections`, `Redis CMS Cache`, `Polymorphic Button`, `Empty Page & Funding`, `src/pages/interactive-resume.tsx`, `src/pages/music.tsx`, `src/pages/portfolio/open-source/[slug].tsx`, `shared.ts`, `src/pages/testimonials.tsx`?**
  _High betweenness centrality (0.053) - this node is a cross-community bridge._

### Low-confidence Hints
_AMBIGUOUS edges — the extractor was unsure. Verify before acting on these._

- **What is the exact relationship between `Atanas Atanasov` and `MJML-style Responsive Table Email Layout`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._