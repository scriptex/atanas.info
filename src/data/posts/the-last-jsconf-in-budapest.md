# The last JSConf in Budapest

[![Written By a Human Being](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/written-by-a-human-being/main/badge.json)](https://github.com/scriptex/written-by-a-human-being)

I had the pleasure and the honor to attend the JSConf for Eastern-Middle Europe - [JSConf Budapest](https://jsconfbp.com/) which took place in the beautiful [Urania National Movie Theatre](https://urania-nf.hu/en) in the city center of Budapest, Hungary on 27th and 28th of June, 2024.

JSConf Budapest is one of the many events which happen all over the world. This one aims to be the JavaScript Conference for Eastern-Middle Europe, an area so diverse in culture, people and views. It is a strictly nonprofit, open-sourced and community driven conference for the community of JavaScript, with the purpose to build and educate about new technologies, ideas and culture. You can see more on the [about page](https://jsconfbp.com/about-us).

Sadly, the organizers announced that due to lack of financial sponsorship, this was the last event from the JSConf series to ever happen in the gorgeous city of Budapest.

This year's event had a unique agenda and seasoned speakers as well as incredible and energetic MCs.

The MCs were [Anjana Vakil](https://x.com/AnjanaVakil) and [Tejas Kumar](https://x.com/TejasKumar_) and both of them made sure to provide us - the audience - with great portions of energy and fun.

Below I will provide some more details about all talks with a small summary and quick links to resources or descriptions.

This document lists my remarks on all talks during both days of the conference. While I try to keep my opinion on each talk to myself and be as objective as I can, you will notice that sometimes I express my thoughts and state whether a particular idea is useful or not.

## First day (June 27th, 2024)

### "What's Coming Next to JavaScript?" by [Nicolò Ribaudo](https://x.com/nicoloribaudo)

Nicolò is part of [TC39](https://tc39.es/) - the group which specifies the JavaScript language. He is also maintaining one of the most popular packages on NPM - [Babel](https://babeljs.io/).

This was the opening talk of the conference and was about the upcoming features in the [ES2024](https://www.w3schools.com/js/js_2024.asp) and ES2025 versions of the EcmaScript language. It was special because at the time he gave the talk, the committee also accepted and approved the new ES2024 version of EcmaScript.

Nicolò started by explaining what is TC39 and how the JavaScript language gets updated, he told us about all of the stages a proposal goes until it is becomes an integral part of the language specification.

After showing us what are the new features of the language he also provided us with a sneak peak of the next year's proposals - ES2025.

### "Building Empathy and Accessible Apps" by [Isabela Moreira](https://x.com/isabelacmor)

Isabela is a software engineer at Microsoft and her talk was focused on accessibility, inclusion and empathy.

She told us that 15% (around 1B) of the world population has some disability so we should think about that when we design and build applications - all user interfaces should be inclusive and built for all people.

She gave us some ideas on what tools to use in order to react at least AA conformance with [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) (AAA would be best):

- [Figma's colorblind plugin](https://www.figma.com/community/plugin/733343906244951586/color-blind)
- [https://www.whocanuse.com/](https://www.whocanuse.com/) - a tool that brings attention and understanding to how color contrast can affect different people with visual impairments.
- The browser devtools provide great details about contrast ratio
- [Designing Accessible Color Systems](https://stripe.com/blog/accessible-color-systems) - an article by Stripe
- Following the semantic coding conventions (e.g. don't use a `<div />` if you need to bind a click handler, rather use a `<button />`)
- Testing
    - Manual testing - we just need to make sure that our applications can be used by people who use assistive technology such as keyboards, mice, screen readers, etc
    - Semi automated - [Accessibility Insights](https://accessibilityinsights.io/) extension or Playwright + Ace Core (or Axe React)

### "Hear! Hear! An Accessibility Tale from a Hearing-Impaired Senior Software Engineer" by [Ante Tomić](https://x.com/antetmc2)

Ante is a fellow from the Balkans - he is originally from Zagreb, Croatia. He is a senior software engineer at InfoBip.

His talk was again focused on accessibility and inclusion but this time it was specifically targeted at people with hearing loss.

According to his research, 1 in 8 people in USA has hearing loss with similar number in the UK - 1 in 10.

Ante raised a question during his talk - "Should we consider supporting hearing impairment in our apps?" and throughout it he actually explained why the answer is "Yes".

Hearing impairment is unique to everyone, it’s not a matter of volume only. There is [an interesting tool](https://bit.ly/hearing-loss-simulator) which can be used to simulate different types of hearing loss.

At the company where Ante works, they created an AI-powered app for speech impairment - [Whispp](https://bit.ly/infobip-whispp).

In terms of web development, Ante gave us some tips on how to build accessible and inclusive applications for people with hearing loss:

- we should add captions to videos (similar to how Meet, YouTube or MS Teams does it) -
- we should use icons, small content and better separation and structure of our web apps content

Here are some resources which Ante used for his talk:

- [https://audio-accessibility.com](https://audio-accessibility.com)
- [https://accessibility.blog.gov.uk](https://accessibility.blog.gov.uk)

### "Decoding Perplexing TypeScript" by [Daria Caraway](https://x.com/dariacaraway)

Daria is a senior software engineer at Netflix and she occasionally speaks at conferences and events but is not very active on social media.

She showed us an interactive reverse-engineering game which aims to teach us TypeScript by slowly diving into its typing system and exploring the built-in types.

It is hard to explain the game contents but the actual game is available on her [GitHub profile](https://github.com/darcar31/slides/blob/main/2024/JSConfBudapest/DecodingPerplexingTypescript-JSConfBDP.pdf) so feel free to jump in and learn.

I have to admit that I actually learned something from this talk and apparently I am not the only one as Tejas (one of the MCs) was also amazed by it [in his tweet](https://x.com/TejasKumar_/status/1806274356865065152).

Apparently `-?` in TypeScript mapped types removed optionality:

```ts
type Thing = {
  [key: string]-?: string
}
```

### "Safeguarding Web Applications Against Token Theft: Fortifying Security and Trust in Web Browsers" by [Shikhar Kapoor](https://x.com/kapoorshikhar)

Shikhar's talk was focused on web security. He started by explaining the oAuth flow and what a Bearer token is.

He explained that there are several different types of attacks:

- Replay attack - DPoP proof is unique for each request but it can be stolen so the validity of the token can be reduced in order to mitigate this issue and possible attack
- Token Pre-Generation attack - for example extension which generates DPoP proofs ahead of time and use them later
- Key extraction attack - Gain control over CDN and modify JS to make the private key extractable - SRI (subresource integrity) to protect the resource

Then Shikhar listed the current problems which authenticating on the web has:

- Man-in-the-middle
- Pass-the-cookie

The talk continued about the [Proof-of-possession IETF RFC](https://oauth.net/2/dpop/) and explained how we can use it in order to secure our authentication tokens by using the [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API) to generate asymmetric key pair (particularly the `generateKey` method and its `extractable` argument) and creating of a [JWT proof (DPoP header)](https://docs.use.id/docs/creating-a-dpop-proof-header).

### "Oh No I'm Stuck! A Guide to Detangling a Complex Codebase" by [Toluwanimi Ajewole](https://x.com/tolu_ajewole)

Toluwanimi is a software developer at N26 - a digital bank from Berlin, Germany. She has several years of experience with frontend technologies such as VueJS and ReactJS.

Her talk was focused on how a new joiner can find their way in a complex, tangled codebase - she was onboarded in the complex ReactJS codebase of the N26 application as a frontend developer with VueJS background. She gave tips on how such onboarding can be made easy and less stressful.

The ideas she shared are the following:

- team members collaboration should be one of the most important aspects
- usage of tools such as [AppMap](https://appmap.io/) or its [VSCode extension](https://appmap.io/product/appmap-in-the-code-editor)
- we should map out as much as we can see on the filesystem or in the UI
- we should write and maintain documentation

Toluwanimi's talk was inspired by the [Thinking in systems book](https://www.amazon.com/Thinking-Systems-Donella-H-Meadows/dp/1603580557) by Donella Meadows.

### "The Actor Model, Behind the Scenes" by [David Khourshid](https://x.com/DavidKPiano)

David works at [Stately](https://stately.ai/) and also works on [XState](https://xstate.js.org/).

He's been talking about state machines for years and his talk was about the [Actor Model](https://en.wikipedia.org/wiki/Actor_model). He also explained what's the relation between [Actor Model and state machines](https://stately.ai/docs/actor-model#:~:text=The%20actor%20model%20allows%20developers,XState%2C%20it%20becomes%20an%20actor.)

There is [an interesting blog post](https://stately.ai/blog/what-is-the-actor-model) about how Actor model applies and can be used in programming.

### "Don't Use JS for That: Moving Features to CSS and HTML" by [Kilian Valkhof](https://kilianvalkhof.com/)

Kilian is working on a new, dev-oriented web browser which is called [Polypane](https://polypane.app) - it is built with web technologies using the Electron framework.

I am fond of CSS and think that whatever can be done with HTML and CSS should not be done with JavaScript and this should be one of the rules of the frontend developer.

Fortunately, Kilian's talk was exactly about this and I have to say that it was my favorite.

His talk was full of fun stuff so I will try to sum them up below:

- Custom switches using `<input type="checkbox" />` and its checked state - [here](https://dev.to/karandeveloper/how-to-create-a-custom-toggle-switch-using-css-4pmi) is an example of how this can be achieved. It is important to note that there is a `switch` attribute to the `<input type="checkbox" />` but unfortunately (at the time of writing) it is only supported in Safari. Hopefully it will be adopted by the rest of the evergreen browsers.
- Using of `<datalist></datalist>` element for autocomplete widgets instead of complex and large JavaScript libraries - [here](https://www.sitepoint.com/html5-datalist-autocomplete/) is an example.
- Secure and native color picker using `<input type="color" />` - since it is built into the browser, it can pick color from anywhere on the page, including the browser dev tools - [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color) is a link to MDN which explain everything you might need to know.
- In-page transitions using:
    - the [`scroll-behavior: smooth`](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior) CSS declaration
    - the [`Element.scrollIntoView()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView) with its `behavior` option set to `smooth`
    - the `window.scrollTo()` method with its `behavior` option set to `smooth`
    - the [`:target`](https://developer.mozilla.org/en-US/docs/Web/CSS/:target) CSS pseudo class when scrolling to sections
    - the [`scroll-margin-top`](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-top) CSS property if our header is fixed to the top of the browser
- Pure HTML accordion/collapsible widgets using the `<details></details` element and its `<summary></summary>` - [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details) is a link to the documentation. There are some limitations on what can be styled and how but it's pretty awesome that HTML and CSS achieve what previously only JavaScript could.
- The native modal element or the [`<dialog>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog):
    - using the `::backdrop` pseudo element we can add an overlay which sits between the page and the open modal
    - it is currently not possible to open a `<dialog>` element without using of JavaScript, so we still need to add a tiny bit of JS to make it work - [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#javascript) is what I am talking about.
    - one interesting thing to note is that a `<form method="dialog">` inside a `<dialog>` will close the dialog when submitted.
- Container queries (`@container`) - these queries allow us to style an element based on its container width and not based on the window width - [here](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries) is the documentation.
- The `:has()` (parent selector) - it allows us to add styles to an element based on its children - this is a game changer for all frontend developers - a lot of JavaScript can be deleted now because of this selector. Read more about it [here](https://developer.mozilla.org/en-US/docs/Web/CSS/:has).
- [`field-sizing: content`](https://developer.mozilla.org/en-US/docs/Web/CSS/field-sizing) which (at the time of writing) is not widely supported but this will probably change soon. It allows us to set size a textarea based on its content! How awesome is this?
- I will just paste [a link](https://scroll-driven-animations.style/) to the next one - you can see how awesome it is! It's a great time to be a UI developer!!!

Kilian also mentioned some accessibility guidelines which I found very important:

- instead of hiding the default `outline` of the form fields or buttons (usiung `outline: 0`) we can use `outline: transparent` which will allow us to preserve the high contrast mode in different operating systems.
- when we add styled to the `:focus` state of focusable elements, we should also utilize the `:focus-visible` state.

### "Web Performance: The African Case" by [Mohamed Ayoub Alouane](https://twitter.com/alouane_med)

This talk was focused on performance and speed improvements. Mohamed gave us an example of how Middle and Eastern Africa uses the Internet - even in 2024 the penetration rates are really low:

- 75% of users in Africa have access to internet which means that one fourth of them do not!
- Most if not all users use mobile instead of broadband or high-speed networks.
- The price for 15GB of internet traffic varies between a half and a third of the minumum wage per country. Sometimes the price goes as high as four times the minimum wage! That's insane!
- Most mobile phones used by the users are cheap, very low percentage use Apple devices or high-end Android phones.
- Improving of performance and speed inevitably leads to increase in conversion and/or registrations.

During his talk, Mohamed also talked about the [Qwik](https://qwik.dev/) framework which is built by the author of Angular - Misko Hevery - and promotes performance and usability amongst everything else.

### "Infinite Patterns in the Digital Canvas: Unleashing Creativity with JavaScript in Algorithmic Art" by [Francisca Beatriz Medina Concha](https://www.instagram.com/frani.be/)

Francisca or Frani is a professor in the best Chile University - the Univercity of Santiago de Chile. She is also the lead frontend developer in LATAM airlines.

Frani's talk was focused on [algorithmic art](https://en.wikipedia.org/wiki/Algorithmic_art) - it is art which is created with software and using algorithms. An algorist is an artist who creates art with algorithms.

During her talk she talked about the [`p5.js`](https://p5js.org/) library which is built by John Resig (the author of jQuery) and focused on providing artists with the means to create art using algorithms and code.

Here are some resources and ideas:

- [Algorithmic art Sketches and collections](https://editor.p5js.org/fede.santana/sketches)
- [https://openprocessing.org](https://openprocessing.org)

## Second day (June 28th, 2024)

### "Are Signals Worth the Hype?" by [Atila Fassina](https://atila.io/)

Atila is a DevRel Lead at CrabNebula, SolidJS DX team member and a Developer Advocate for Tauri.

His talk was focused on Signals - a new (currently in stage 1) [API proposal](https://github.com/tc39/proposal-signals) for JavaScript.

During his talk he explained several different types of architecture:

- [Push and Pull architecture](https://dev.to/anubhavitis/push-vs-pull-api-architecture-1djo#:~:text=Push%3A%20This%20is%20an%20architecture,the%20server%20can%20push%20data.)
- [Push-then-Pull or Push/Pull](https://wnoizumi.github.io/SBCARS2017/download/Component-PushPull.pdf)

Then Atila summarized that Signals are:

- Push-and-pull
- efficient - they execute only what’s needed
- glitch-free - they never show intermediate state

There are different flavors of Signals - Lazy and Eager - depends on the data dependency graph of the app we're building - is it deep or wide.

One of the most important lessons I learned from this talk is that automatic memoization does not equal to fine grained reactivity because memoization won’t work every time. This is particularly useful insight for every React developer.

### "The Platonic Paradox in Software Development: Ideal Forms vs. Practical Realities in JavaScript" by [Max Millington](https://www.linkedin.com/in/max-millington/)

Max Millington is the engineering Manager in Osmosis Labs, he is also a Bachelor in Philosophy and Master in Ancient Philosophy.

He is one of those people who decided to switched to the tech industry after doing something else.

His talk as a philosophical discussion about software engineering. In the end, my take from this talk was that it's important to prioritize the end user but not to sacrifice the DX of you and your team.

### "Unexpected Monad. Is Safe Error Handling Possible in JavaScript/TypeScript?" by [Artem Kobzar](https://x.com/rage_monk) and [Dmitry Makhnev](https://twitter.com/dmitrymakhnev)

This was one of the most interesting talks during the whole conference. Both speakers are seasoned developers but apparently they also have a sense of humor which helped them do the talk in a unique way - it was a code review session which aimed to shows us how to improve our error handling without sacrificing developer experience.

They started by explaining what's the difference between an exception and and error. The code review continued by telling us that we should have the same exception handling for both synchronous and asynchronous code.

It is also important to have lookups without explicit re-throwing of errors. Our exceptions should be statically typed in order to have a good understanding of the code we're dealing with.

They told us that we should implement error classes which then should be extended by other classes. This heavily applies in OOP where classes are heavily used.

The speakers went further and discussed the pros and cons of:

- try/catch statements
- node style callbacks, where the first argument is always the error or `null`
- Golang style (functions return a tuple with two values)

In the end we saw their implementation of `Ok` and `Failed` classes which went further into an `Either` monad implementation.

You can find more in the resources:

- [https://github.com/JSMonk/component-model-example](https://github.com/JSMonk/component-model-example)
- [https://github.com/DmitryMakhnev/JSConf-Budapest-2024-demo](https://github.com/DmitryMakhnev/JSConf-Budapest-2024-demo)
- [https://github.com/DmitryMakhnev/JSConf-Budapest-2024-links](https://github.com/DmitryMakhnev/JSConf-Budapest-2024-links)

### "Picking the Low-Hanging Fruit – Easy Pentest Wins" by [Marcus Bointon](https://marcus.bointon.com)

Marcus is the PHPMailer maintainer - probably one of the most used libraries out there. He is also employed at Radically Open Security - a company of penetration testers and code auditors.

According to him and his talk, everybody makes the same mistake - we always forget to secure our applications.

So Marcus provided us with an extensive list of things the attackers are looking for in order to hack our application:

- Information disclosure
- Outdated software
- Misconfiguration
- Errors - if you leave paths in errors for example
- Validation and escaping inconsistencies, missing validation in frontend or backend

We should also take care of our cloud provider security even though most of it is already in place:

- IP addresses
- Security groups
- SSH bastions
- VM / container images

Our infrastructure firewalls should be as strict as possible:

- Block by default
- Allow only what's needed
- Set rate limits
- Consider outbound limits
- Don’t forget IPv6
- Check firewall strength with `nmap -p- <hostname>`

It is important to answer the question "Do I need SSH access?" and if the answer is no, simply block all SSH access.

Always use keys, not passwords. When it comes to SSH keys, always prefer ed25519 rather than RSA.

Use non-standard ports instead of 22 or similar defaults.

We should:

- use up-to-date sofware
- install OS updates as soon as we can
- automate these OS updates because most of them will be in containers living outside of our own computer
    - Unattended-upgrades on ubuntu/Debian
    - RedHat yum-cron
- Windows Update & Defender

Our services should be configured too. We can use tools to check if we did our job well. For example the [Mozilla SSL config](https://ssl-config.mozilla.org)

- the web server should
    - have TLS config
    - use Security headers
- the database / cache / queue server
    - should not be accessible from outside
    - should not be listening on all interfaces: 0.0.0.0, ….

When it comes to Security Headers, we should consider the following:

- `Strict-Transport-Security: max-age=31556952; includeSubDomains; preload`
- submit the domain to the preload list so it gets included in the browsers
- `Content-Security-Policy` - usually allow only stiff from yourself or known CDN - should be app-based not server-based
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: no-referrer` - this is not good for SEO so if you rely on SEO, research other options

Here are some tools which are useful when testing TLS, HTTP, and privacy:

- [www.ssllabs.com/ssltest](www.ssllabs.com/ssltest)
- [https://testssl.sh](https://testssl.sh)
- [https://securiyheaders.com](https://securiyheaders.com)
- [https://http3check.com](https://http3check.com)
- [https://webbkoll.dataskydd.net](https://webbkoll.dataskydd.net)

We should also turn off NGINX version and PHP version in headers, this might tell our attacker that we use an outdated version which is affected by X or Y vulnerability.

When it comes to Authentication, we should be strict and implement strong password policy - the passwords should be long, random, using special characters and should not be found in known password/data breaches. There is [a tool](https://haveibeenpwned.com) which can tell you if your password is already known. We should also implement strong password hash function using Bcrypt, Argon2ID or a similar tool.

Each package manager has its own way of managing vulnerabilities and patching them - NPM has `npm audit`, Python has `pip-audit`. We should always keep our dependencies up to date and without known vulnerabilities.

Here are some important flags to be used when working with cookies:

- Secure
- HttpOnly
- SameSite

There are things we can do on the frontend in order to reduce possible attacks:

- we should sanitize user input
- we should validate and fail hard when validation doesn't pass
- we should implement the same validation rules on the frontend as we have on the backend
- we should escape appropriately

Speaking of escaping, we should escape everything - URLs, HTML, Shell commands, SQL, JSON, even email.

Our team should implement safe coding practices:

- Coding standards
- Static analysis
- IDE plugins
- Pre-commit hooks
- GPG sign of commits

The bottom line is "Security is a process - improve, adapt, use CI/CD, automate."

### "Building Privacy-Friendly Applications with Ollama, Vector Functions, and LangChainJS" by [Pratim Bhosale](https://twitter.com/BhosalePratim)

Pratim is a backend developer and developer advocate for SurrealDB.

Her talk was focused on privacy-friendly AI applications.

According to her research, sending sensitive data (or any data) to AI is a privacy issue and this actually doesn't apply only to AI but to Apple, Google and similar.

Where is the "delete" button for your data in the cloud?

Pratim told us about a tool which works without being connected to the internet or the cloud - we only need internet to download it and to configure it (to fetch the models for it to work). The tool is called [Ollama](https://ollama.com/)

Pratim demoed the [Moondream](https://ollama.com/library/moondream) model for us and told us that Ollama is built on top of Langchain, which is a Python framework but also has JavaScript equivalent.

[Here](https://blog.langchain.dev/building-llm-powered-web-apps-with-client-side-technology/) is a blog post which goes into a bit more details.

### "Applied Psychology: Psychology-based UI improvements" by [Keren Kenzi](https://medium.com/@KerenKenzi)

Keren's talk was based on her [Medium blog post](https://medium.com/@KerenKenzi/applied-psychology-psychology-based-ui-improvements-66d3f5edb89e) but I was able to summarize some insights:

- [Principle of Proximity](https://www.nngroup.com/articles/gestalt-proximity/) - close objects are perceived as grouped together
- Items are also perceived as grouped if they share similar properties - colors, font sizes, fonts
- In order to bring attention (focusing on certain objects, ignoring the rest)
    - Outline or highlight certain elements
    - Use big fonts
    - Use different colors
- People tend to remember better the first and the last thing in a list or sequence
- Use tagging to highlight important parts (e.g. recommended plan)
- Offer less options to choose from
- Progressive disclosure - step by step
- Decisions are dependent on how the choices are presented
- Default selected option might change the outcome of their decision
- Status Quo Bias: People don’t change their already selected vendors are service providers because it’s easier to do nothing
- Aesthetic-Usability Effect - the more aesthetic - the more it is perceived as effective and easier to use
- Halo effect - an attractive person is perceived to be more intelligent.

### "Encrypting Data in the Browser - Exploring Web Crypto APIs" by [Aakansha Doshi](https://twitter.com/aakansha1216)

Aakansha is maintainer of the popular [Excalidraw](https://github.com/excalidraw/excalidraw) library. She is a full-time open-sourcerer

Her talk was focused on the Web Crypto API and how we can use it to encrypt data without leaving the browser. She started by explaining what Web Crypto is and how does it work.

Then we understood what's the difference between [`Math.random()` and `Crypto.getRandomValues()`](https://medium.com/@vishvashivam32/navigating-randomness-in-javascript-math-random-vs-crypto-getrandomvalues-0088ab0bcf09) and why we should use the latter if we want to work with cryptographically valid random values.

She shared a really interesting story about a person who decided to hack the lottery - [here](https://blog.securityevaluators.com/hacking-the-javascript-lottery-80cc437e3b7f) is a blog post about it.

Then we went further into the talk and she showcased the `subtle` property of Web Crypto API and the recommended AES-GCM algorithm.

More about her talk can be found on her [GitHub profile](https://github.com/ad1992/web-crypto-apis).

### "Evolving JavaScript: Cultivating Genetic Algorithms for Creative Coding" by [Kevin Maes](https://twitter.com/kvmaes)

Kevin works together with David Khourshid - one of the other speakers. His talk was focused on linking real-world natural algorithms with programming.

He talked about Genetic programming (GP) and Genetic Algorithms (GA) and explain where are GAs used in programming:

- Designing efficient network topologies
- Automated software testing
- Evolving game strategies
- Scheduling problems
- Complex hardware design
    - ST5 by NASA included Evolved Antenna which is designed by a GA running on a supercomputer (ST5-33-142-7 Antenna)

There are several states of GA:

- Population initialization
- Evaluation
- Selection
- Crossover
- Mutation

These states can be understood by the visualizations Kevin provided in his [GitHub profile](https://github.com/kevinmaes/ga)

He also provided some creative coding tips:

- Clear canvas before drawing
- Use requestAnimationFrame
- Use OOP for particle systems
- Crank up the frame rate
- P5.js is also applicable here.

Resources:

- [https://thecodingtrain.com](https://thecodingtrain.com) book by Daniel Shiffman
- [The nature of code](https://natureofcode.com/) book - Simulating natural systems with JS
- Edge of tomorrow movie (with Tom Cruise)

### "Frameworkless, Frictionless, Free" by [György Kovács](https://twitter.com/pkt_zer0)

György's talk was aimed to provide us with more ideas on how to avoid complexity by reducing the amount of external dependencies in our project by coding everything on our own.

He showed us how to substitute the templating libraries such as Handlebars, Mustache or EJS with simple usage of built-in JS template literals and tagged templates.

Here he introduced HTMX - a small library which adds interactivity to simple HTML.

Regarding ORM, György suggested that we use raw SQL.

I have to admit that while I understand his point, I think that his approach might be suitable for small tasks but a real-world data-heavy application might not benefit from it - on the contrary - it might feel as if you shot yourself.

### "We're Not Robots: A Developer's Journey to Success, Creativity, and Avoiding Burnout" by [Amanda Martin](https://linktr.ee/amandamartin_dev)

The last talk was presented by Amanda who is a developer advocate at Wix. It was impossible to keep track of her talk as it was really insightful and thoughful. Fortunately, she provided us with [the content of the talk](https://github.com/amandamartin-dev/talks/blob/main/JSConfBP_2024/jsconf-budapest.pdf) so everyone can read it.
