import { 

  Mail, 

  ArrowRight, 

  CheckCircle2, 

  Workflow, 

  CalendarDays, 

  Bot, 

  Database, 

  PhoneCall, 

  ShieldCheck, 

  Target, 

  Briefcase, 

  Building2, 

} from "lucide-react"; 

 

const services = [ 

  { 

    icon: Bot, 

    title: "AI Lead Response", 

    description: 

      "Instant text and email follow-up so inbound leads never sit untouched.", 

  }, 

  { 

    icon: Workflow,

    title: "Qualification Workflows", 

    description: 

      "Automated questions, routing logic, and handoffs that move prospects to the right next step.", 

  }, 

  { 

    icon: CalendarDays, 

    title: "Booking Automation", 

    description: 

      "Calendar scheduling, reminders, and confirmation flows without the manual back-and-forth.", 

  }, 

  { 

    icon: Database, 

    title: "CRM Integration", 

    description: 

      "Lead capture and pipeline updates automatically synced into your existing systems.", 

  }, 

]; 

 

const values = [ 

  { 

    title: "Efficiency", 

    description: 

      "We focus on systems that remove friction, reduce delays, and help businesses move faster.", 

  }, 

  { 

    title: "Professionalism", 

    description: 

      "Every client touchpoint should feel polished, timely, and trustworthy.", 

  }, 

  { 

    title: "Quality", 

    description: 

      "We care about clean execution, dependable systems, and deliverables that actually work.", 

  }, 

  { 

    title: "Optimization", 

    description: 

      "We continuously improve workflows so the business gets more output from the same effort.", 

  }, 

]; 

 

const processSteps = [ 

  [ 

    "01", 

    "Discovery", 

    "We map your current lead flow, response gaps, admin burden, and bottlenecks.", 

  ], 

  [ 

    "02", 

    "System Design", 

    "We design a practical automation plan around your business, tools, and customer journey.", 

  ], 

  [ 

    "03", 

    "Implementation", 

    "We connect forms, messaging, AI prompts, booking tools, and CRM workflows into one system.", 

  ], 

  [ 

    "04", 

    "Optimization", 

    "We refine the workflow, tighten messaging, and improve conversion over time.", 

  ], 

]; 

 

const stats = [ 

  { label: "Response window", value: "Seconds" }, 

  { label: "Coverage", value: "24/7" }, 

  { label: "Less admin", value: "Automated" }, 

  { label: "Focus", value: "ROI" }, 

]; 

 

const proofPoints = [ 

  { 

    stat: "100x", 

    title: "Higher contact odds", 

    description: 

      "Leads contacted within 5 minutes are dramatically more likely to be reached than leads contacted after 30 minutes.", 

  }, 

  { 

    stat: "21x", 

    title: "Higher qualification odds", 

    description: 

      "Fast response does not just improve contact rates. It also materially improves the chance of qualifying the lead.", 

  }, 

  { 

    stat: "30–45%", 

    title: "Customer-care productivity value", 

    description: 

      "Generative AI can create meaningful productivity gains in customer care and response workflows when deployed correctly.", 

  }, 

  { 

    stat: "12.4%", 

    title: "More time on core work", 

    description: 

      "Research shows AI can shift time away from administrative tasks and toward higher-value work.", 

  }, 

]; 

 

function ThankYouPage() { 

  return ( 

    <div className="min-h-screen bg-[#07111f] text-white"> 

      <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.16),transparent_28%),radial-gradient(circle_at_top_left,rgba(34,197,94,0.12),transparent_22%)]" /> 

 

      <header className="border-b border-white/10 bg-[#07111f]/85 backdrop-blur-xl"> 

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"> 

          <a href="/" className="block"> 

            <div className="text-lg font-semibold tracking-wide">Suburbahn Solutions</div> 

            <div className="text-xs uppercase tracking-[0.28em] text-sky-300"> 

              AI Consulting & Automation 

            </div> 

          </a> 

        </div> 

      </header> 

 

      <main className="mx-auto flex min-h-[calc(100vh-81px)] max-w-4xl items-center px-6 py-20 lg:px-8"> 

        <div className="w-full rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center shadow-2xl shadow-sky-950/20 backdrop-blur-xl"> 

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300"> 

            <CheckCircle2 className="h-8 w-8" /> 

          </div> 

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-sky-300"> 

            Inquiry received 

          </p> 

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl"> 

            Thank you for reaching out. 

          </h1> 

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300"> 

            We received your message and will follow up shortly. We appreciate your interest in Suburbahn Solutions and look forward to learning more about your business. 

          </p> 

 

          <div className="mt-10 grid gap-4 sm:grid-cols-2"> 

            <a 

              href="/" 

              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5" 

            > 

              Return to homepage 

              <ArrowRight className="h-4 w-4" /> 

            </a> 

            <a 

              href="mailto:ColeSuburbahnSolutions@Outlook.com" 

              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10" 

            > 

              Email us directly 

              <Mail className="h-4 w-4" /> 

            </a> 

          </div> 

        </div> 

      </main> 

    </div> 

  ); 

} 

 

function HomePage() { 

  return ( 

    <div id="top" className="min-h-screen bg-[#07111f] text-white"> 

      <div className="absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.16),transparent_28%),radial-gradient(circle_at_top_left,rgba(34,197,94,0.12),transparent_22%)]" /> 

 

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/85 backdrop-blur-xl"> 

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"> 

          <a href="#top" className="block"> 

            <div className="text-lg font-semibold tracking-wide">Suburbahn Solutions</div> 

            <div className="text-xs uppercase tracking-[0.28em] text-sky-300">AI Consulting & Automation</div> 

          </a> 

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex"> 

            <a href="#services" className="transition hover:text-white">Services</a> 

            <a href="#demo" className="transition hover:text-white">Demo</a> 

            <a href="#process" className="transition hover:text-white">Process</a> 

            <a href="#about" className="transition hover:text-white">About</a> 

            <a href="#contact" className="transition hover:text-white">Contact</a> 

          </nav> 

          <a 

            href="#contact" 

            className="rounded-full border border-sky-400/30 bg-sky-400/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-400/20" 

          > 

            Book a Call 

          </a> 

        </div> 

      </header> 

 

      <section className="relative overflow-hidden"> 

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-28"> 

          <div> 

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-200 shadow-lg shadow-sky-950/30"> 

              <ShieldCheck className="h-4 w-4 text-sky-300" /> 

              Built for service businesses and operator-led teams 

            </div> 

            <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"> 

              AI systems that help you respond faster, book more work, and eliminate manual follow-up. 

            </h1> 

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300"> 

              Suburbahn Solutions helps businesses automate and optimize the work that slows growth down. We build reliable AI systems that improve efficiency, save time, reduce wasted labor, strengthen follow-up, and create a more consistent path from first inquiry to booked business. 

            </p> 

 

            <div className="mt-8 flex flex-wrap gap-4"> 

              <a 

                href="#demo" 

                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5" 

              > 

                See the Demo 

                <ArrowRight className="h-4 w-4" /> 

              </a> 

              <a 

                href="#contact" 

                className="rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10" 

              > 

                Request a Discovery Call 

              </a> 

            </div> 

 

            <div className="mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4"> 

              {stats.map((item) => ( 

                <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-sky-950/20 backdrop-blur"> 

                  <div className="text-2xl font-bold text-white">{item.value}</div> 

                  <div className="mt-1 text-sm text-slate-300">{item.label}</div> 

                </div> 

              ))} 

            </div> 

          </div> 

 

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-sky-950/30 backdrop-blur-xl"> 

            <div className="mb-5 flex items-center justify-between"> 

              <div> 

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Live Demo Concept</p> 

                <h2 className="mt-1 text-2xl font-bold">AI Lead Conversion Flow</h2> 

              </div> 

              <div className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300"> 

                Demo Ready 

              </div> 

            </div> 

            <div className="space-y-4"> 

              {[ 

                [PhoneCall, "Lead comes in", "A prospect submits a form or inquiry from your website."], 

                [Bot, "AI responds instantly", "Text or email follow-up is sent in seconds with the right message."], 

                [Target, "Lead is qualified", "The system asks a few smart questions to identify urgency and fit."], 

                [CalendarDays, "Meeting gets booked", "A scheduling link moves the lead directly into your calendar."], 

                [Database, "CRM updates automatically", "Contact and lead details are logged without manual entry."], 

              ].map(([Icon, title, desc]) => ( 

                <div key={title} className="flex gap-4 rounded-3xl border border-white/10 bg-[#0d1728] p-4"> 

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-300"> 

                    <Icon className="h-5 w-5" /> 

                  </div> 

                  <div> 

                    <div className="font-semibold text-white">{title}</div> 

                    <div className="mt-1 text-sm leading-6 text-slate-300">{desc}</div> 

                  </div> 

                </div> 

              ))} 

            </div> 

          </div> 

        </div> 

      </section> 

 

      <section className="mx-auto max-w-7xl px-6 pb-6 lg:px-8"> 

        <div className="grid gap-5 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:grid-cols-3"> 

          <div className="rounded-[1.5rem] border border-white/10 bg-[#0b1526] p-6"> 

            <Building2 className="h-6 w-6 text-sky-300" /> 

            <h3 className="mt-4 text-xl font-semibold">Mission Statement</h3> 

            <p className="mt-3 text-sm leading-7 text-slate-300"> 

              At Suburbahn Solutions our mission is to provide a reliable and efficient service to help automate and optimize your business by using our core principles of innovation, reliability, and trust. 

            </p> 

          </div> 

          <div className="rounded-[1.5rem] border border-white/10 bg-[#0b1526] p-6 md:col-span-2"> 

            <Briefcase className="h-6 w-6 text-emerald-300" /> 

            <h3 className="mt-4 text-xl font-semibold">Who we serve</h3> 

            <p className="mt-3 text-sm leading-7 text-slate-300"> 

              We are built for service businesses, founder-led companies, and lean operator teams that want to improve response time, reduce manual admin work, and create a more professional process for turning interest into revenue. 

            </p> 

            <p className="mt-3 text-sm leading-7 text-slate-400"> 

              Our goal is simple: help businesses save time, improve efficiency, reduce avoidable cost, and create a system that helps them make more from the opportunities they already have. 

            </p> 

          </div> 

        </div> 

      </section> 

 

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8"> 

        <div className="max-w-3xl"> 

          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">Services</p> 

          <h2 className="mt-3 text-4xl font-bold tracking-tight">What we build</h2> 

          <p className="mt-4 text-lg leading-8 text-slate-300"> 

            Our work is built around deployment, not theory. We create AI systems that improve speed, structure, and execution across your lead pipeline while helping your business save time, lower administrative burden, and improve conversion. 

          </p> 

        </div> 

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4"> 

          {services.map((service) => { 

            const Icon = service.icon; 

            return ( 

              <div key={service.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-sky-950/20"> 

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-300"> 

                  <Icon className="h-5 w-5" /> 

                </div> 

                <h3 className="mt-5 text-xl font-semibold text-white">{service.title}</h3> 

                <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p> 

              </div> 

            ); 

          })} 

        </div> 

      </section> 

 

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8"> 

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-sky-950/20"> 

          <div className="max-w-3xl"> 

            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">Why this matters</p> 

            <h2 className="mt-3 text-4xl font-bold tracking-tight">The value is not just automation. It is better economics.</h2> 

            <p className="mt-4 text-lg leading-8 text-slate-300"> 

              Businesses lose money when leads sit, follow-up is inconsistent, and staff spend time on repetitive administrative work. Suburbahn Solutions is designed to help teams respond faster, capture more opportunities, and spend more time on the work that actually drives revenue. 

            </p> 

          </div> 

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4"> 

            {proofPoints.map((item) => ( 

              <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-[#0b1526] p-6"> 

                <div className="text-3xl font-bold text-white">{item.stat}</div> 

                <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3> 

                <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p> 

              </div> 

            ))} 

          </div> 

        </div> 

      </section> 

 

      <section id="demo" className="border-y border-white/10 bg-[#0a1424]"> 

        <div className="mx-auto grid max-w-7xl items-start gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8"> 

          <div> 

            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">Demo</p> 

            <h2 className="mt-3 text-4xl font-bold tracking-tight">See the demo live on a call.</h2> 

            <p className="mt-4 text-lg leading-8 text-slate-300"> 

              We walk prospects through the live demo on a call so they can see the system in action, ask questions in real time, and understand exactly how the workflow would fit into their business. 

            </p> 

            <div className="mt-8 space-y-4"> 

              {[ 

                "Submit a lead through your quote form", 

                "Trigger an instant AI text or email response", 

                "Ask one or two qualification questions", 

                "Send a booking link automatically", 

                "Show the lead appear in your pipeline", 

              ].map((item) => ( 

                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200"> 

                  <CheckCircle2 className="h-4 w-4 text-emerald-300" /> 

                  {item} 

                </div> 

              ))} 

            </div> 

          </div> 

 

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-sky-950/20"> 

            <div className="aspect-video rounded-[1.5rem] border border-dashed border-white/15 bg-[#0b1526] p-5"> 

              <div className="flex h-full items-center justify-center rounded-[1.25rem] border border-white/10 bg-[#101a2d] text-center"> 

                <div> 

                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">Live walkthrough</p> 

                  <h3 className="mt-3 text-2xl font-bold">Demo provided on call</h3> 

                  <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-300"> 

                    We use the call to walk prospects through the workflow live, answer questions, and show how the system can be tailored to their specific business. 

                  </p> 

                </div> 

              </div> 

            </div> 

            <div className="mt-5 rounded-2xl border border-white/10 bg-[#0b1526] p-4 text-sm leading-7 text-slate-300"> 

              The live walkthrough is often more persuasive than a pre-recorded clip because it lets prospects see the system, ask questions, and understand the ROI in the context of their own workflow. 

            </div> 

          </div> 

        </div> 

      </section> 

 

      <section id="process" className="mx-auto max-w-7xl px-6 py-20 lg:px-8"> 

        <div className="max-w-3xl"> 

          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">Process</p> 

          <h2 className="mt-3 text-4xl font-bold tracking-tight">A structured path from idea to implementation.</h2> 

          <p className="mt-4 text-lg leading-8 text-slate-300"> 

            We use a clear rollout process so the work stays grounded in your operations and tied to measurable outcomes. 

          </p> 

        </div> 

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4"> 

          {processSteps.map(([num, title, desc]) => ( 

            <div key={num} className="rounded-[2rem] border border-white/10 bg-white/5 p-6"> 

              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">{num}</div> 

              <h3 className="mt-4 text-2xl font-semibold">{title}</h3> 

              <p className="mt-3 text-sm leading-7 text-slate-300">{desc}</p> 

            </div> 

          ))} 

        </div> 

      </section> 

 

      <section id="about" className="border-y border-white/10 bg-[#0a1424]"> 

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1fr_1fr] lg:px-8"> 

          <div> 

            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">About</p> 

            <h2 className="mt-3 text-4xl font-bold tracking-tight">Built on practical execution.</h2> 

            <p className="mt-4 text-lg leading-8 text-slate-300"> 

              Suburbahn Solutions was created to help businesses use AI in a way that is clean, useful, and tied to actual business outcomes. We focus on systems that shorten response times, improve follow-up, reduce repetitive administrative work, and create a more profitable operating rhythm. 

            </p> 

            <p className="mt-4 text-base leading-8 text-slate-400"> 

              We believe the strongest AI solutions are not the most complicated. They are the ones that reliably save time, improve professionalism, increase efficiency, and help businesses get more out of the leads and labor they already have. 

            </p> 

          </div> 

 

          <div> 

            <div className="grid gap-5 sm:grid-cols-2"> 

              {values.map((value) => ( 

                <div key={value.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6"> 

                  <h3 className="text-xl font-semibold">{value.title}</h3> 

                  <p className="mt-3 text-sm leading-7 text-slate-300">{value.description}</p> 

                </div> 

              ))} 

            </div> 

          </div> 

        </div> 

      </section> 

 

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8"> 

        <div className="rounded-[2.25rem] border border-white/10 bg-[linear-gradient(135deg,#0d1b31_0%,#0a1321_100%)] p-8 shadow-2xl shadow-sky-950/20 lg:p-12"> 

          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]"> 

            <div> 

              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">Contact</p> 

              <h2 className="mt-3 text-4xl font-bold tracking-tight">Let’s build something practical.</h2> 

              <p className="mt-4 max-w-xl text-lg leading-8 text-slate-300"> 

                Reach out and we’ll talk through your current process, your goals, and where AI and automation can realistically create value. 

              </p> 

 

              <div className="mt-8 space-y-4 text-sm text-slate-300"> 

                <div className="grid gap-4 sm:grid-cols-3"> 

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4"> 

                    <div className="font-semibold text-white">Cole Heilig</div> 

                    <div className="mt-1 text-sky-300">Managing Partner</div> 

                    <div className="mt-3 break-all text-slate-300">ColeSuburbahnSolutions@Outlook.com</div> 

                  </div> 

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4"> 

                    <div className="font-semibold text-white">Will Christie</div> 

                    <div className="mt-1 text-sky-300">Managing Partner</div> 

                    <div className="mt-3 break-all text-slate-300">WillSuburbahnSolutions@Outlook.com</div> 

                  </div> 

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4"> 

                    <div className="font-semibold text-white">Landon Lawson</div> 

                    <div className="mt-1 text-sky-300">Partner</div> 

                    <div className="mt-3 break-all text-slate-300">LandonSuburbahnSolutions@Outlook.com</div> 

                  </div> 

                </div> 

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-400"> 

                  Reach out directly to any partner or use the inquiry form to start the conversation. 

                </div> 

              </div> 

            </div> 

 

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6"> 

              <h3 className="text-2xl font-semibold">Contact form</h3> 

              <p className="mt-2 text-sm leading-7 text-slate-300"> 

                Use this form to tell us about your business, your current workflow, and where you think time and money are being lost. Once the backend is connected, submissions can be delivered directly to your inbox. 

              </p> 

              <form 

                action="https://formspree.io/f/mdapklgk" 

                method="POST" 

                acceptCharset="UTF-8" 

                className="mt-6 grid gap-4" 

              > 

                <div className="grid gap-4 sm:grid-cols-2"> 

                  <input 

                    aria-label="First name" 

                    autoComplete="given-name" 

                    type="text" 

                    name="firstName" 

                    placeholder="First name" 

                    required 

                    className="rounded-2xl border border-white/10 bg-[#0b1526] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500" 

                  /> 

 

                  <input 

                    aria-label="Last name" 

                    autoComplete="family-name" 

                    type="text" 

                    name="lastName" 

                    placeholder="Last name" 

                    required 

                    className="rounded-2xl border border-white/10 bg-[#0b1526] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500" 

                  /> 

                </div> 

 

                <div className="grid gap-4 sm:grid-cols-2"> 

                  <input 

                    aria-label="Email address" 

                    autoComplete="email" 

                    type="email" 

                    name="email" 

                    placeholder="Email address" 

                    required 

                    className="rounded-2xl border border-white/10 bg-[#0b1526] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500" 

                  /> 

 

                  <input 

                    aria-label="Company" 

                    autoComplete="organization" 

                    type="text" 

                    name="company" 

                    placeholder="Company" 

                    className="rounded-2xl border border-white/10 bg-[#0b1526] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500" 

                  /> 

                </div> 

 

                <input 

                  aria-label="Phone number" 

                  autoComplete="tel" 

                  type="tel" 

                  name="phone" 

                  placeholder="Phone number" 

                  className="rounded-2xl border border-white/10 bg-[#0b1526] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500" 

                /> 

 

                <textarea 

                  aria-label="Message" 

                  name="message" 

                  placeholder="Tell us about your business, your current workflow, and what you want to improve." 

                  required 

                  className="min-h-[150px] rounded-2xl border border-white/10 bg-[#0b1526] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500" 

                ></textarea> 

 

                <input type="hidden" name="_redirect" value="https://SuburbahnSolutions.com/thank-you" /> 

                <input type="hidden" name="_subject" value="New Suburbahn Solutions Lead" /> 

 

                <button 

                  type="submit" 

                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5" 

                > 

                  Send inquiry 

                  <ArrowRight className="h-4 w-4" /> 

                </button> 

              </form> 

            </div> 

          </div> 

        </div> 

      </section> 

 

      <footer className="border-t border-white/10"> 

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between lg:px-8"> 

          <div> 

            <div className="font-semibold text-white">Suburbahn Solutions</div> 

            <div>AI Consulting & Automation</div> 

          </div> 

          <div>© 2026 Suburbahn Solutions. All rights reserved.</div> 

        </div> 

      </footer> 

    </div> 

  ); 

} 

 

export default function SuburbahnSolutionsWebsite() { 

  const pathname = typeof window !== "undefined" ? window.location.pathname : "/"; 

 

  if (pathname === "/thank-you") { 

    return <ThankYouPage />; 

  } 

 

  return <HomePage />; 

} 