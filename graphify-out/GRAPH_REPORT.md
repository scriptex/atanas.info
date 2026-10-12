# Graph Report - atanas.info  (2026-10-12)

## Corpus Check
- Large corpus: 760 files · ~1,391,823 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder.

## Summary
- 1481 nodes · 3314 edges · 86 communities (63 shown, 23 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 40 edges (avg confidence: 0.83)
- Token cost: 103,609 input · 0 output

## Community Hubs (Navigation)
- Package Metadata
- Pages & Test Suites
- Dev Dependencies
- Runtime Dependencies
- Insights & External Libs
- Contact Form & UI
- Static Props & MongoDB
- D3 Skills Graph
- Head, Links & Comments
- TS Compiler Options
- Layout & Core Components
- Navigation
- Analytics & Visual Libs
- MDX & Portfolio Sliders
- Contentful CMS Client
- CMS Data Types
- Markdown Blog Pipeline
- NPM Scripts
- About Page Resume
- E.ON Email Templates
- CI/CD Workflows
- Blog: NodeJS Tooling Posts
- Contribution Insights
- Renovate Config
- Section Grid & Loader
- CodersRank Widgets
- Resume Sections
- Custom Type Declarations
- Last.fm Types
- GitHub/GitLab Insights
- Resume Entries & Dates
- ESLint Config
- TS Path Aliases
- PWA Manifest
- Insights API Clients
- Redis CMS Cache
- Site Shell Components
- Theme Switcher
- NPM Download Stats
- Screenshot Pipeline
- GitHub Skyline 3D
- Polymorphic Button
- Empty Page & Funding
- Houdini Bubbles
- Network Info Types
- Serwist Service Worker
- CodersRank Packages
- Jest Test Setup
- Houdini Circles
- NPM Stats Page
- tsconfig ts-node
- tsconfig-tsnode
- Project Fetcher
- Dependency Resolutions
- Resume Strengths
- Houdini tsconfig
- Music Fetcher
- DNS Record Diffing
- Test Utils
- Next Env Types
- GitHub Calendar API
- Houdini Confetti
- Status Enum
- npmtotal Types
- Package Bugs Info
- Package Repository
- Jest Config
- Fat Loss Post
- SVG Test Mock
- Graphify Rules
- Lint Script
- Prettier Script
- SVG Script
- Time Script
- Type Coverage
- Robots & Sitemap
- Disqus Comments

## God Nodes (most connected - your core abstractions)
1. `react` - 89 edges
2. `getPartnersFromCMS()` - 62 edges
3. `getFundingFromCMS()` - 62 edges
4. `next` - 51 edges
5. `snapshotTest()` - 51 edges
6. `Routes` - 48 edges
7. `compilerOptions` - 40 edges
8. `composeClassName()` - 35 edges
9. `funding` - 34 edges
10. `partners` - 32 edges

## Surprising Connections (you probably didn't know these)
- `saveProject()` --calls--> `log()`  [EXTRACTED]
  bin/fetch-projects.ts → src/scripts/shared.ts
- `MJML-style Responsive Table Email Layout` --conceptually_related_to--> `Atanas Atanasov`  [AMBIGUOUS]
  public/email-templates/template1.html → public/resume.pdf
- `GitHub Funding Config (scriptex)` --conceptually_related_to--> `atanas.info personal website (PWA)`  [INFERRED]
  .github/FUNDING.yml → README.md
- `Code quality & Build workflow` --references--> `Jest`  [INFERRED]
  .github/workflows/build.yml → README.md
- `run()` --calls--> `saveInsights()`  [EXTRACTED]
  npm/index.ts → insights/utils.ts

## Import Cycles
- 3-file cycle: `src/components/funding/crypto.tsx -> src/components/index.ts -> src/components/funding/index.tsx -> src/components/funding/crypto.tsx`
- 3-file cycle: `src/components/index.ts -> src/components/resume/index.ts -> src/components/resume/education.tsx -> src/components/index.ts`
- 3-file cycle: `src/components/index.ts -> src/components/resume/index.ts -> src/components/resume/experience.tsx -> src/components/index.ts`
- 3-file cycle: `src/components/index.ts -> src/components/section/index.tsx -> src/components/section/elements.tsx -> src/components/index.ts`
- 3-file cycle: `src/components/index.ts -> src/components/social/index.ts -> src/components/social/linkedin.tsx -> src/components/index.ts`

## Hyperedges (group relationships)
- **E.ON Home App Onboarding Email Campaign** — public_email_templates_template1_email, public_email_templates_template2_email, public_email_templates_template3_email, public_email_templates_template4_email, public_email_templates_template5_email, public_email_templates_template7_email, public_email_templates_template8_email, public_email_templates_template11_email, public_email_templates_template12_email, public_email_templates_template13_email, public_email_templates_template1_eon_home_app [INFERRED 0.85]
- **FOTON App Activation Emails (PL)** — public_email_templates_template6_email, public_email_templates_template9_email, public_email_templates_template10_email, public_email_templates_template9_e_on_foton_technik [INFERRED 0.85]
- **Super Solar Italy Customer Emails** — public_email_templates_template2_email, public_email_templates_template3_email, public_email_templates_template4_email, public_email_templates_template5_email, public_email_templates_template12_email, public_email_templates_template5_e_on_super_solar [INFERRED 0.85]
- **GitHub Actions CI/CD and scheduled data refresh pipeline** — _github_workflows_build_workflow, _github_workflows_codeql_analysis_workflow, _github_workflows_deploy_workflow, _github_workflows_insights_workflow, _github_workflows_screenshots_workflow [EXTRACTED 1.00]
- **DMARC/DKIM/SPF diff algorithms built on jsdiff** — src_data_posts_comparing_dns_records_dmarc_diff_algorithm, src_data_posts_comparing_dns_records_dkim_diff_algorithm, src_data_posts_comparing_dns_records_spf_diff_algorithm, src_data_posts_comparing_dns_records_jsdiff [EXTRACTED 1.00]
- **NodeJS-as-automation-tool blog posts** — src_data_posts_bulk_image_watermark_with_nodejs_and_jimp_post, src_data_posts_running_multiple_webpack_based_applications_simultaneously_post, src_data_posts_testing_websockets_with_cypress_post [INFERRED 0.75]

## Communities (86 total, 23 thin omitted)

### Community 0 - "Package Metadata"
Cohesion: 0.02
Nodes (116): author, description, funding, homepage, keywords, license, name, private (+108 more)

### Community 1 - "Pages & Test Suites"
Cohesion: 0.07
Nodes (53): @testing-library/react, Articles(), Blog(), Certificates(), Document(), PortfolioAutomotiveApps(), PortfolioEmailTemplates(), Portfolio() (+45 more)

### Community 2 - "Dev Dependencies"
Cohesion: 0.02
Nodes (93): devDependencies, autoprefixer, @babel/core, browserslist, cheerio, cloudinary, commander, dotenv (+85 more)

### Community 3 - "Runtime Dependencies"
Cohesion: 0.03
Nodes (78): dependencies, animateme, @apollo/client, async-array-prototype, attr-i18n, @babylonjs/core, babylonjs-gltf2interface, @babylonjs/gui (+70 more)

### Community 4 - "Insights & External Libs"
Cohesion: 0.06
Nodes (43): LastFMAlbum, LastFMInsights, @date-fns/utc, gitlab-calendar, react-round-carousel, touchsweep, use-interval, uuid (+35 more)

### Community 5 - "Contact Form & UI"
Cohesion: 0.10
Nodes (30): react, Button(), getClassName(), Contact(), ContactResult, Props, FundingCrypto(), Props (+22 more)

### Community 6 - "Static Props & MongoDB"
Cohesion: 0.09
Nodes (40): getData(), EmptyPage(), src_components_index_emptypage, ErrorPage(), getStaticProps(), getStaticProps(), getStaticProps(), getStaticProps() (+32 more)

### Community 7 - "D3 Skills Graph"
Cohesion: 0.07
Nodes (35): d3, ref_d3_array, ref_d3_drag, ref_d3_force, ref_d3_random, ref_d3_selection, defaultForceNodeSize, ForceNode (+27 more)

### Community 8 - "Head, Links & Comments"
Cohesion: 0.08
Nodes (22): ExternalLink(), Props, src_components_index_externallink, src_components_index_lines, src_components_index_linkedinbadge, src_components_index_socialmusic, Lines(), Props (+14 more)

### Community 9 - "TS Compiler Options"
Cohesion: 0.05
Nodes (38): compilerOptions, allowJs, allowSyntheticDefaultImports, alwaysStrict, checkJs, declaration, emitDecoratorMetadata, esModuleInterop (+30 more)

### Community 10 - "Layout & Core Components"
Cohesion: 0.19
Nodes (23): next, src_components_index_animation, src_components_index_layout, src_components_index_loader, src_components_index_section, src_components_index_sectiongrid, src_components_index_title, Layout() (+15 more)

### Community 11 - "Navigation"
Cohesion: 0.07
Nodes (33): Anchor(), menuItemsWithDropdown, AnchorProps, Props, MenuItem, menuItems, Routes, ABOUT (+25 more)

### Community 12 - "Analytics & Visual Libs"
Cohesion: 0.06
Nodes (30): gsap, react-cookie-consent, react-gtm-module, scriptex-socials, simplex-noise, swiper, @vercel/analytics, @vercel/speed-insights (+22 more)

### Community 13 - "MDX & Portfolio Sliders"
Cohesion: 0.10
Nodes (20): src_components_index_mdx, src_components_index_portfoliosliders, MDX(), PortfolioSliders(), Props, src_data_lotties_book, src_data_lotties_portfolio, openSourceProjectsList (+12 more)

### Community 14 - "Contentful CMS Client"
Cohesion: 0.08
Nodes (22): contentful, @contentful/rich-text-html-renderer, ref_contentful_rich_text_types, Badge, Certificate, client, CMSPartner, CMSTestimonial (+14 more)

### Community 15 - "CMS Data Types"
Cohesion: 0.06
Nodes (30): BioEntry, ResumeData, AboutPageProps, ArticlesPageProps, BlogPageData, CertificatesPageProps, GithubContribution, GithubCount (+22 more)

### Community 16 - "Markdown Blog Pipeline"
Cohesion: 0.12
Nodes (24): getAllPosts(), getPostBySlug(), getPostSlugs(), MarkdownIt, markdownToHtml(), postsDirectory(), @getbrevo/brevo, gray-matter (+16 more)

### Community 17 - "NPM Scripts"
Cohesion: 0.07
Nodes (28): scripts, build, fetch-music, fetch-projects, houdini, insights, lint, mjml (+20 more)

### Community 18 - "About Page Resume"
Cohesion: 0.15
Nodes (24): getCMSData(), src_components_index_resumeeducation, src_components_index_resumeexperience, src_components_index_resumemore, src_components_index_resumeskills, src_components_index_resumestrengths, src_components_index_resumesummary, src_components_index_resumetitle (+16 more)

### Community 19 - "E.ON Email Templates"
Cohesion: 0.17
Nodes (23): FOTON Home Account Activation Email (PL), FOTON Home App, E.ON Home Photovoltaic Email (IT), E.ON Energia Italia, Super Solar Welcome Email v2 (IT), E.ON Home Insights Email (UK), E.ON Home tado Thermostat Email (IT), E.ON Home App (+15 more)

### Community 20 - "CI/CD Workflows"
Cohesion: 0.13
Nodes (22): Jekyll relative-links config, Jekyll theme slate (GitHub Pages), GitHub Funding Config (scriptex), Codacy coverage reporter job, Code quality & Build workflow, CodeQL analysis workflow, Vercel Deploy workflow (every 8h), Insights & NPM Stats workflow (+14 more)

### Community 21 - "Blog: NodeJS Tooling Posts"
Cohesion: 0.09
Nodes (22): dotenv-driven watermark configuration, Jimp image library, Mama Culinar (WordPress culinary blog), Bulk image watermark with NodeJS and Jimp, Angular Signals / SSR talks, Facade pattern for third-party integrations (CareerOS), JS/Node memory management (Shelley Vohr), Micro Frontend challenges (Roei Berkovich) (+14 more)

### Community 22 - "Contribution Insights"
Cohesion: 0.12
Nodes (18): Contribution, getContributions(), getQuery(), InsightsType, Project, MongoDBProps, options, Query (+10 more)

### Community 23 - "Renovate Config"
Cohesion: 0.10
Nodes (19): :automergeBranch, :automergeMinor, :automergePatch, config:base, :disableDependencyDashboard, group:allNonMajor, assignees, extends (+11 more)

### Community 24 - "Section Grid & Loader"
Cohesion: 0.15
Nodes (14): src_components_index_sectionnav, Loader(), getCommonProps(), PaginationProps, Props, SectionGrid(), SectionGridProps, statsItems (+6 more)

### Community 25 - "CodersRank Widgets"
Cohesion: 0.12
Nodes (7): lottie-web, Animation(), defaultOptions, Props, src_data_lotties_resume, items, InteractiveResumePageProps

### Community 26 - "Resume Sections"
Cohesion: 0.11
Nodes (14): Props, ResumeMore(), Props, ResumeSkills(), Props, ResumeTitle(), OwnerDetails, ResumeLink (+6 more)

### Community 27 - "Custom Type Declarations"
Cohesion: 0.12
Nodes (16): ClassLike, @codersrank/activity/codersrank-activity.min, @codersrank/education/codersrank-education.min, @codersrank/portfolio/codersrank-portfolio.min, @codersrank/skills-chart/codersrank-skills-chart.min, @codersrank/summary/codersrank-summary.min, @codersrank/timeline/codersrank-timeline.min, @codersrank/work-experience/codersrank-work-experience.min (+8 more)

### Community 28 - "Last.fm Types"
Cohesion: 0.12
Nodes (15): BooleanNumber, LastFm, lastfm-node-client, LastFMAlbumResponse, LastFMDefaultOptions, LastFMImage, LastFMPeriod, LastFMRecentTrack (+7 more)

### Community 29 - "GitHub/GitLab Insights"
Cohesion: 0.32
Nodes (13): gitlab(), getGithubInsights(), getCalendar(), getGitlabInsights(), GitlabProject, setOwner(), run(), getLastFMInsights() (+5 more)

### Community 30 - "Resume Entries & Dates"
Cohesion: 0.15
Nodes (11): date-fns, src_components_index_resumeentry, Props, ResumeEducation(), Props, ResumeEntry(), Props, ResumeExperience() (+3 more)

### Community 31 - "ESLint Config"
Cohesion: 0.13
Nodes (14): __dirname, __filename, @eslint/compat, eslint-config-prettier, @eslint/js, eslint-plugin-jest, eslint-plugin-perfectionist, eslint-plugin-react (+6 more)

### Community 32 - "TS Path Aliases"
Cohesion: 0.13
Nodes (15): paths, @components, @data/*, @insights/*, @lib/*, @npm, @pages/*, @public/* (+7 more)

### Community 33 - "PWA Manifest"
Cohesion: 0.15
Nodes (12): background_color, description, dir, display, icons, lang, name, orientation (+4 more)

### Community 34 - "Insights API Clients"
Cohesion: 0.20
Nodes (8): github, lastFm, Contribution, SlimRepo, dotenv, universal-github-client, GithubInsights, GithubRepository

### Community 35 - "Redis CMS Cache"
Cohesion: 0.24
Nodes (9): contentfulClient, fetchFromContentful(), refreshCMSData(), getRedisClient(), redis, handler(), allCMSTypes, CMSType (+1 more)

### Community 36 - "Site Shell Components"
Cohesion: 0.20
Nodes (9): src_components_index_contact, src_components_index_footer, src_components_index_header, src_components_index_nav, src_components_index_partners, Props, Nav(), Partners() (+1 more)

### Community 37 - "Theme Switcher"
Cohesion: 0.25
Nodes (6): Crater(), Props, moonData, ThemeSwitcher(), Moon(), Sun()

### Community 38 - "NPM Download Stats"
Cohesion: 0.27
Nodes (9): fetchPackageDownloads(), names, NPMPackage, NPMResponse, NPMResult, randomFloat(), run(), ref_node_crypto (+1 more)

### Community 39 - "Screenshot Pipeline"
Cohesion: 0.29
Nodes (9): cloudinary, puppeteer, createScreenshot(), createScreenshots(), delay(), upload(), uploadOptions(), projects (+1 more)

### Community 40 - "GitHub Skyline 3D"
Cohesion: 0.28
Nodes (7): @babylonjs/core, @babylonjs/loaders, @babylonjs/materials, SIZE, createEngine(), GithubSkylineProps, onSceneMount()

### Community 41 - "Polymorphic Button"
Cohesion: 0.22
Nodes (5): AnchorProps, ButtonProps, CustomProps, LinkProps, Props

### Community 42 - "Empty Page & Funding"
Cohesion: 0.31
Nodes (7): iconData, Props, FundingNetwork(), Props, FundingNetwork, Partner, ReactChildren

### Community 43 - "Houdini Bubbles"
Cohesion: 0.36
Nodes (7): Bubble, drawCircle(), drawGradient(), normalize(), paint(), parseProps(), rand()

### Community 44 - "Network Info Types"
Cohesion: 0.22
Nodes (8): ConnectionType, EffectiveConnectionType, Megabit, Millisecond, Navigator, NavigatorNetworkInformation, NetworkInformation, WorkerNavigator

### Community 45 - "Serwist Service Worker"
Cohesion: 0.25
Nodes (5): withSerwist, serwist, @serwist/next, serwist, WorkerGlobalScope

### Community 46 - "CodersRank Packages"
Cohesion: 0.25
Nodes (8): @codersrank/activity, @codersrank/education, @codersrank/portfolio, @codersrank/skills-chart, @codersrank/summary, @codersrank/timeline, @codersrank/work-experience, InteractiveResume()

### Community 48 - "Houdini Circles"
Cohesion: 0.43
Nodes (5): Circle, drawCircle(), paint(), parseProps(), rand()

### Community 49 - "NPM Stats Page"
Cohesion: 0.29
Nodes (5): NPMStats(), NPMStatsPageProps, Packages, WithError, WithSum

### Community 50 - "tsconfig ts-node"
Cohesion: 0.29
Nodes (6): module, exclude, include, ts-node, compilerOptions, require

### Community 51 - "tsconfig-tsnode"
Cohesion: 0.29
Nodes (6): module, extends, ./tsconfig.json, ts-node, compilerOptions, require

### Community 52 - "Project Fetcher"
Cohesion: 0.33
Nodes (3): Project, saveProject(), getGithubRepositories()

### Community 53 - "Dependency Resolutions"
Cohesion: 0.33
Nodes (6): resolutions, brace-expansion, postcss, serialize-javascript, svgo, undici

### Community 54 - "Resume Strengths"
Cohesion: 0.33
Nodes (4): Props, ResumeStrengths(), Strength, strengths

### Community 55 - "Houdini tsconfig"
Cohesion: 0.33
Nodes (5): compilerOptions, outDir, extends, include, ./tsconfig.json

### Community 56 - "Music Fetcher"
Cohesion: 0.60
Nodes (3): queryMusic, music, Track

### Community 57 - "DNS Record Diffing"
Cohesion: 0.40
Nodes (5): DKIM record difference algorithm, DMARC record difference algorithm, jsdiff library (diffWordsWithSpace), Comparing DNS Records: DMARC, SPF, DKIM, SPF record difference algorithm

### Community 59 - "Next Env Types"
Cohesion: 0.50
Nodes (3): next_dev_types_root_params_d, next_dev_types_routes_d, NOTE: This file should not be edited

### Community 64 - "Status Enum"
Cohesion: 0.50
Nodes (4): Status, DEFAULT, ERROR, SUCCESS

### Community 65 - "npmtotal Types"
Cohesion: 0.50
Nodes (3): npmtotal, NPMTotalOptions, NPMTotalResult

### Community 66 - "Package Bugs Info"
Cohesion: 0.67
Nodes (3): bugs, email, url

### Community 67 - "Package Repository"
Cohesion: 0.67
Nodes (3): repository, type, url

### Community 69 - "Fat Loss Post"
Cohesion: 0.67
Nodes (3): Data noise: ECV and the Whoosh effect, MyFitnessPal input logging, Data-Driven Fat Loss: Debugging a Legacy System

## Ambiguous Edges - Review These
- `MJML-style Responsive Table Email Layout` → `Atanas Atanasov`  [AMBIGUOUS]
  public/email-templates/template1.html · relation: conceptually_related_to

## Knowledge Gaps
- **621 isolated node(s):** `lastfm-node-client`, `BooleanNumber`, `LastFMDefaultOptions`, `LastFMUser`, `LastFMPeriod` (+616 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 743 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **23 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `MJML-style Responsive Table Email Layout` and `Atanas Atanasov`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `react` connect `Contact Form & UI` to `Package Metadata`, `Pages & Test Suites`, `Insights & External Libs`, `Static Props & MongoDB`, `Head, Links & Comments`, `Layout & Core Components`, `Navigation`, `Analytics & Visual Libs`, `MDX & Portfolio Sliders`, `CMS Data Types`, `Markdown Blog Pipeline`, `About Page Resume`, `Section Grid & Loader`, `CodersRank Widgets`, `Resume Sections`, `Resume Entries & Dates`, `Site Shell Components`, `Theme Switcher`, `Polymorphic Button`, `Empty Page & Funding`, `NPM Stats Page`, `Resume Strengths`?**
  _High betweenness centrality (0.184) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Dev Dependencies` to `Package Metadata`?**
  _High betweenness centrality (0.104) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Runtime Dependencies` to `Package Metadata`?**
  _High betweenness centrality (0.096) - this node is a cross-community bridge._
- **What connects `lastfm-node-client`, `BooleanNumber`, `LastFMDefaultOptions` to the rest of the system?**
  _621 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Package Metadata` be split into smaller, more focused modules?**
  _Cohesion score 0.017094017094017096 - nodes in this community are weakly interconnected._
- **Should `Pages & Test Suites` be split into smaller, more focused modules?**
  _Cohesion score 0.06782106782106782 - nodes in this community are weakly interconnected._