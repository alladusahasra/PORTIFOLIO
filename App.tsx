import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Download,
  Code2,
  Cpu,
  Database,
  Cloud,
  Terminal,
  Shield,
  Sparkles,
} from "lucide-react";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const PROJECTS = [
  {
    name: "Smart Attendance System",
    year: "2024",
    tech: ["Flask", "SQLite", "Docker"],
    description:
      "Web-based attendance platform with secure authentication and role-based access. Containerized with Docker for zero-friction deployment and reduced setup time.",
    github: "https://github.com/alladusahasra/Smart-Attendance-System",
    icon: Terminal,
  },
  {
    name: "MindGuard",
    year: "2024",
    tech: ["Python", "Machine Learning", "SHAP"],
    description:
      "AI-powered intrusion detection system that identifies and classifies cyber threats in real time. Integrates SHAP for explainable, transparent model predictions.",
    github: "https://github.com/alladusahasra/mindguard-",
    icon: Shield,
  },
  {
    name: "EcoTrace",
    year: "2024",
    tech: ["Data Systems", "Analytics"],
    description:
      "Sustainability data tracker focused on ingesting and analyzing environmental signals. Designed for scalable data handling and efficient querying.",
    github: "https://github.com/alladusahasra/ecotrace-",
    icon: Sparkles,
  },
];

const SKILLS: { title: string; icon: typeof Code2; items: string[] }[] = [
  { title: "Languages", icon: Code2, items: ["C / C++", "Java", "Python", "JavaScript"] },
  { title: "Frontend", icon: Terminal, items: ["HTML", "CSS", "JavaScript"] },
  { title: "Backend", icon: Database, items: ["Flask", "SQLite", "REST APIs"] },
  { title: "Cloud & DevOps", icon: Cloud, items: ["AWS (EC2, S3, IAM)", "Docker", "DockerHub", "Git / GitHub"] },
  { title: "Core CS", icon: Cpu, items: ["DSA", "Operating Systems", "DBMS", "Networks"] },
  { title: "Focus Areas", icon: Shield, items: ["AI / ML", "Cybersecurity", "Systems Design"] },
];

const EXPERIENCE = [
  {
    role: "GenAI Intern",
    company: "IBM",
    period: "2024",
    points: [
      "Developed and fine-tuned LLM-based solutions for internal prototypes.",
      "Worked on prompt engineering, model evaluation and ethical AI guardrails.",
      "Shipped demos showcasing practical enterprise AI use cases.",
    ],
  },
  {
    role: "Software Intern",
    company: "AR Hospital",
    period: "2023",
    points: [
      "Analyzed hospital workflows, patient flow and operational systems.",
      "Studied real-world system design and efficiency in a live environment.",
      "Documented process improvements based on observed pain points.",
    ],
  },
];

function useActiveSection() {
  const [active, setActive] = useState<string>("about");
  useEffect(() => {
    const ids = NAV.map((n) => n.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return active;
}

function Nav() {
  const active = useActiveSection();
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-hairline bg-background/70 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-block h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_var(--color-primary)]" />
          <span>Sahasra</span>
          <span className="text-muted-foreground font-normal">/ CS</span>
        </a>
        <nav className="hidden md:flex items-center gap-1 text-sm">
          {NAV.map((item) => {
            const isActive = active === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 rounded-full transition-colors ${
                  isActive
                    ? "text-foreground bg-surface-elevated"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
        <a
          href="mailto:sahasraalladu@gmail.com"
          className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition"
        >
          Get in touch <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden />
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[420px] w-[820px] rounded-full pointer-events-none blur-3xl opacity-30"
        style={{ background: "radial-gradient(closest-side, var(--color-primary), transparent 70%)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-hairline bg-surface text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Open to full-time SWE roles · 2026 graduate
        </div>
        <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-balance leading-[1.05]">
          Alladu Sahasra.
          <br />
          <span className="text-muted-foreground">
            Building scalable systems<br className="hidden sm:inline" /> with real-world impact.
          </span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Final-year Computer Science student at VIT Chennai with hands-on experience across
          web, AI and cloud. I care about how systems work end-to-end — from backend logic
          to deployment — and about shipping software that is reliable, secure and fast.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition glow-primary"
          >
            View projects <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-hairline bg-surface hover:bg-surface-elevated font-medium transition"
          >
            <Download className="h-4 w-4" /> Download resume
          </a>
          <a
            href="https://github.com/alladusahasra"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-hairline bg-surface hover:bg-surface-elevated font-medium transition"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
        </div>

        <dl className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-hairline bg-hairline">
          {[
            { k: "University", v: "VIT Chennai" },
            { k: "Program", v: "B.Tech CSE" },
            { k: "CGPA", v: "8.05 / 10" },
            { k: "Graduating", v: "2026" },
          ].map((s) => (
            <div key={s.k} className="bg-background px-5 py-5">
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">{s.k}</dt>
              <dd className="mt-1 text-lg font-semibold">{s.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function SectionHeader({ tag, title, kicker }: { tag: string; title: string; kicker?: string }) {
  return (
    <div className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
      <div>
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{tag}</div>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-balance">{title}</h2>
      </div>
      {kicker && <p className="max-w-md text-muted-foreground">{kicker}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-28 border-t border-hairline">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader tag="01 · About" title="A builder, not just a student." />
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              I&rsquo;m a Computer Science student who enjoys building systems that solve real
              problems — not just theoretical concepts. My work spans web development, AI-based
              systems and cloud technologies, with a focus on scalability, security and
              performance.
            </p>
            <p>
              I like understanding how systems work end-to-end, from database schema to
              container orchestration, and I&rsquo;m constantly sharpening my ability to ship
              reliable, impactful software.
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="rounded-2xl border border-hairline bg-surface p-6">
              <div className="text-sm text-muted-foreground">Currently focused on</div>
              <ul className="mt-4 space-y-3 text-sm">
                {[
                  "Distributed systems fundamentals",
                  "Applied ML for security use cases",
                  "Clean backend architecture in Python & Java",
                  "AWS deployment patterns",
                ].map((x) => (
                  <li key={x} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-28 border-t border-hairline">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          tag="02 · Skills"
          title="Tools I reach for."
          kicker="A pragmatic stack tuned for shipping — languages, frameworks and infra I use across projects."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILLS.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group rounded-2xl border border-hairline bg-surface p-6 hover:bg-surface-elevated hover:border-primary/30 transition"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-background border border-hairline grid place-items-center text-primary group-hover:glow-primary transition">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="font-semibold">{s.title}</div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.items.map((i) => (
                    <span
                      key={i}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-background border border-hairline text-muted-foreground"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-28 border-t border-hairline">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          tag="03 · Selected work"
          title="Projects I've shipped."
          kicker="A snapshot of systems I designed, built and deployed end-to-end."
        />
        <div className="space-y-4">
          {PROJECTS.map((p, i) => {
            const Icon = p.icon;
            return (
              <a
                key={p.name}
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="group relative block rounded-2xl border border-hairline bg-surface hover:bg-surface-elevated hover:border-primary/40 transition overflow-hidden"
              >
                <div className="grid md:grid-cols-[auto_1fr_auto] gap-6 items-start p-6 md:p-8">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-background border border-hairline grid place-items-center text-primary shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="md:hidden">
                      <div className="font-mono text-xs text-muted-foreground">
                        0{i + 1} · {p.year}
                      </div>
                      <div className="text-xl font-semibold">{p.name}</div>
                    </div>
                  </div>
                  <div className="min-w-0">
                    <div className="hidden md:flex items-center gap-3">
                      <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                      <h3 className="text-2xl font-semibold tracking-tight">{p.name}</h3>
                      <span className="text-xs text-muted-foreground font-mono">· {p.year}</span>
                    </div>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{p.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-mono px-2.5 py-1 rounded-md bg-background border border-hairline text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition">
                    <Github className="h-4 w-4" />
                    <span>Source</span>
                    <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-28 border-t border-hairline">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader tag="04 · Experience" title="Where I've worked." />
        <div className="space-y-4">
          {EXPERIENCE.map((e) => (
            <div
              key={e.company}
              className="rounded-2xl border border-hairline bg-surface p-6 md:p-8 hover:bg-surface-elevated transition"
            >
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                <div className="min-w-0">
                  <div className="text-xl font-semibold">
                    {e.role} <span className="text-muted-foreground">· {e.company}</span>
                  </div>
                </div>
                <div className="font-mono text-xs text-muted-foreground shrink-0 mt-1.5">
                  {e.period}
                </div>
              </div>
              <ul className="mt-5 space-y-2.5 text-muted-foreground">
                {e.points.map((pt) => (
                  <li key={pt} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 rounded-full bg-primary shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const links = [
    { icon: Mail, label: "sahasraalladu@gmail.com", href: "mailto:sahasraalladu@gmail.com" },
    { icon: Github, label: "github.com/alladusahasra", href: "https://github.com/alladusahasra" },
    { icon: Linkedin, label: "linkedin.com/in/sahasra-alladu", href: "https://www.linkedin.com/in/sahasra-alladu/" },
  ];
  return (
    <section id="contact" className="py-28 border-t border-hairline">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader tag="05 · Contact" title="Let's build something." />
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              I&rsquo;m actively looking for full-time software engineering roles starting 2026.
              If you&rsquo;re hiring — or just want to talk systems, AI or open-source — my
              inbox is open.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Chennai, India · Open to relocation</span>
            </div>
          </div>
          <div className="rounded-2xl border border-hairline bg-surface p-2">
            {links.map((l) => {
              const Icon = l.icon;
              return (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center justify-between px-5 py-4 rounded-xl hover:bg-surface-elevated transition"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Icon className="h-4 w-4 text-primary shrink-0" />
                    <span className="truncate">{l.label}</span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-hairline py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} Alladu Sahasra. Built with care.</div>
        <div className="font-mono text-xs">Crafted in Chennai · VIT '26</div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
