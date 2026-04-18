import styles from './page.module.css';

const skills = [
  { category: 'Analysis & BI', items: ['SQL', 'Python (Pandas, Matplotlib)', 'Microsoft Excel', 'Power BI', 'Looker Studio'] },
  { category: 'Data Processes', items: ['Data Cleaning', 'EDA', 'ETL', 'Data Validation', 'Statistical Analysis', 'Regression'] },
  { category: 'Visualization', items: ['Dashboard Development', 'Data Storytelling', 'KPI Reporting'] },
  { category: 'Soft Skills', items: ['Analytical Thinking', 'Problem-solving', 'Effective Communication', 'Stakeholder Reporting'] },
];

const experiences = [
  {
    role: 'Retail Verification Officer QC',
    company: 'Astra Credit Company',
    type: 'Internship',
    period: 'Oct 2025 – Apr 2026',
    points: [
      'Reviewed and validated ~40 applications per day ensuring accuracy and compliance with partner guidelines.',
      'Detected, classified, and documented 200–300 errors per week, improving issue tracking consistency.',
      'Developed dashboards using Looker Studio and Excel to track validation performance and error trends.',
      'Delivered structured BI reports, translating raw QC data into actionable insights for process improvement.',
    ],
  },
  {
    role: 'Data Scientist (Studi Independen)',
    company: 'PT Inovasi Lentera Cipta Kreasi',
    type: 'MSIB',
    period: 'Feb 2025 – Jun 2025',
    points: [
      'Designed questionnaires, cleaned datasets, and conducted sales analysis using Pivot Tables.',
      'Performed EDA and visualized insights using Looker Studio.',
      'Applied regression and business intelligence concepts to support data-driven decisions.',
    ],
  },
  {
    role: 'Data Analyst Intern',
    company: 'Statistics Indonesia (BPS) of Yogyakarta',
    type: 'Internship',
    period: 'Jun 2024 – Aug 2024',
    points: [
      'Processed and structured agricultural survey data into publication-ready datasets.',
      'Analyzed regional inflation and GRDP to reveal economic trends for policy insights.',
      'Delivered infographics and reports that supported data-driven decision-making.',
    ],
  },
];

const projects = [
  {
    title: 'E-Commerce Performance Dashboard',
    period: 'Mar 2026',
    tools: ['Looker Studio', 'Excel'],
    description: 'Multi-platform dashboard tracking IDR 3.02B in revenue and 3,100+ transactions across major e-commerce platforms. Analyzed key KPIs: Market Share, Refund Rate, and Average Order Value (AOV).',
    link: 'https://lookerstudio.google.com/u/0/reporting/c9bbc52f-864f-4c5f-9703-407276310e55/page/rFHJF',
  },
  {
    title: 'FMCG Net Revenue Management Analysis',
    period: 'Apr 2026',
    tools: ['Excel'],
    description: 'Analyzed 2018–2023 sales data to design a 4-pillar NRM strategy targeting $21.4M revenue. Developed a Pack Price Architecture model and identified a 276% growth opportunity in organic products, projecting $600K+ incremental sales.',
    link: 'https://drive.google.com/drive/folders/1your-folder-link',
  },
  {
    title: 'Pizza Sales Analysis',
    period: 'Jun 2025',
    tools: ['Python', 'Pandas', 'Matplotlib'],
    description: 'Analyzed pizza sales data to uncover trends in customer preferences by type, size, and order timing. Used Apriori algorithm for market basket analysis and integrated Replicate API for AI-driven business summaries.',
    link: 'https://github.com/IqbalIbrahim112/pizza-sales-analysis',
  },
];

const certificates = [
  { name: 'Data Visualization with Python', issuer: 'IBM', date: 'Jul 2024', id: '5L9LMHS5HTM6' },
  { name: 'SQL for Data Science', issuer: 'University of California, Davis', date: 'Jul 2024', id: 'TFZRYCLBSPTY' },
  { name: 'Google Data Analytics', issuer: 'Google', date: 'May 2024', id: 'RZQPWL328M3D' },
  { name: 'Data Analysis: Fullstack Intensive Bootcamp', issuer: 'MySkill', date: 'Mar 2024', id: 'MS-15/3/2024' },
  { name: 'Excel Basics for Data Analysis', issuer: 'IBM', date: 'Jan 2024', id: 'R24MPYZB6UJS' },
];

export default function Home() {
  return (
    <main>
      {/* NAV */}
      <nav className={styles.nav}>
        <span className={styles.navLogo}>ITI</span>
        <div className={styles.navLinks}>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
          <a href="mailto:iqbaltriwicaksono112@gmail.com" className={styles.navCta}>Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.heroTag}>Data Analyst</p>
          <h1 className={styles.heroName}>Iqbal Triwicaksono<br /><em>Ibrahim</em></h1>
          <p className={styles.heroSub}>
            Statistics graduate (GPA 3.88/4.00) with end-to-end data analysis expertise — from cleaning and validation to dashboards and stakeholder reporting. Proficient across SQL, Python, Power BI, and Looker Studio.
          </p>
          <div className={styles.heroLinks}>
            <a href="https://www.linkedin.com/in/iqbaltriwicaksono" target="_blank" rel="noopener noreferrer" className={styles.heroBtn}>LinkedIn ↗</a>
            <a href="mailto:iqbaltriwicaksono112@gmail.com" className={styles.heroBtnOutline}>Get in touch</a>
          </div>
        </div>
        <div className={styles.heroDecor} aria-hidden="true">
          <span>SQL</span><span>Python</span><span>Power BI</span><span>Looker Studio</span><span>Excel</span><span>EDA</span><span>ETL</span><span>Regression</span>
        </div>
      </section>

      {/* SKILLS */}
      <section id="about" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNum}>01</span>
            <h2 className={styles.sectionTitle}>Technical Skills</h2>
          </div>
          <div className={styles.skillsGrid}>
            {skills.map((s) => (
              <div key={s.category} className={styles.skillCard}>
                <h3 className={styles.skillCategory}>{s.category}</h3>
                <ul className={styles.skillList}>
                  {s.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNum}>02</span>
            <h2 className={styles.sectionTitle}>Experience</h2>
          </div>
          <div className={styles.timeline}>
            {experiences.map((exp, i) => (
              <div key={i} className={styles.timelineItem}>
                <div className={styles.timelineMeta}>
                  <span className={styles.timelinePeriod}>{exp.period}</span>
                  <span className={styles.timelineType}>{exp.type}</span>
                </div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineRole}>{exp.role}</h3>
                  <p className={styles.timelineCompany}>{exp.company}</p>
                  <ul className={styles.timelinePoints}>
                    {exp.points.map((pt, j) => (
                      <li key={j}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className={styles.eduBlock}>
            <h3 className={styles.eduTitle}>Education</h3>
            <div className={styles.eduCard}>
              <div>
                <p className={styles.eduDegree}>S1 – Statistics</p>
                <p className={styles.eduSchool}>Universitas Negeri Yogyakarta</p>
              </div>
              <div className={styles.eduRight}>
                <span className={styles.eduGpa}>GPA 3.88 / 4.00</span>
                <span className={styles.timelinePeriod}>Aug 2022 – Feb 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNum}>03</span>
            <h2 className={styles.sectionTitle}>Projects</h2>
          </div>
          <div className={styles.projectsGrid}>
            {projects.map((p, i) => (
              <a key={i} href={p.link} target="_blank" rel="noopener noreferrer" className={styles.projectCard}>
                <div className={styles.projectTop}>
                  <span className={styles.projectPeriod}>{p.period}</span>
                  <span className={styles.projectArrow}>↗</span>
                </div>
                <h3 className={styles.projectTitle}>{p.title}</h3>
                <p className={styles.projectDesc}>{p.description}</p>
                <div className={styles.projectTools}>
                  {p.tools.map((t) => (
                    <span key={t} className={styles.projectTool}>{t}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section id="certificates" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNum}>04</span>
            <h2 className={styles.sectionTitle}>Licenses & Certificates</h2>
          </div>
          <div className={styles.certList}>
            {certificates.map((c, i) => (
              <div key={i} className={styles.certItem}>
                <div className={styles.certMain}>
                  <p className={styles.certName}>{c.name}</p>
                  <p className={styles.certIssuer}>{c.issuer}</p>
                </div>
                <div className={styles.certRight}>
                  <span className={styles.certDate}>{c.date}</span>
                  <span className={styles.certId}>{c.id}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p className={styles.footerName}>Iqbal Triwicaksono Ibrahim</p>
          <div className={styles.footerLinks}>
            <a href="https://www.linkedin.com/in/iqbaltriwicaksono" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:iqbaltriwicaksono112@gmail.com">Email</a>
            <a href="https://github.com/IqbalIbrahim112" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <p className={styles.footerNote}>Sleman, Yogyakarta · +62 896 7399 4756</p>
        </div>
      </footer>
    </main>
  );
}
