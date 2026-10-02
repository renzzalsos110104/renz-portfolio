import { useState } from "react";
import "./App.css";
const projectDetails = {
  reconciliation: {
    category: "BOOKKEEPING",
    title: "Bank Reconciliation",
    description:
      "Reviewed financial activity and supported accurate reconciliation by checking cleared transactions, outstanding items, and account balances.",
    tasks: [
      "Reviewed cleared payments and deposits.",
      "Checked transactions against account activity.",
      "Identified outstanding and uncleared items.",
      "Verified reconciliation balances.",
      "Prepared organized reconciliation records.",
    ],
    tools: ["QuickBooks", "Bank Reconciliation", "Financial Records"],
  },

  cleanup: {
    category: "QUICKBOOKS",
    title: "QuickBooks Cleanup Support",
    description:
      "Participated with a bookkeeping team in the cleanup and organization of a full year of QuickBooks records.",
    tasks: [
      "Reviewed transaction records as part of the cleanup process.",
      "Supported transaction categorization and organization.",
      "Helped identify records requiring review or correction.",
      "Assisted with maintaining organized financial records.",
      "Worked collaboratively with the bookkeeping team throughout the cleanup process.",
    ],
    tools: ["QuickBooks Online", "Cleanup", "Transaction Review"],
  },

  payable: {
    category: "ACCOUNTS PAYABLE",
    title: "Accounts Payable Workflow",
    description:
      "Supported day-to-day accounts payable operations involving invoices, purchase orders, payments, vendors, and transaction records.",
    tasks: [
      "Matched purchase orders against invoices.",
      "Tracked invoice payment status.",
      "Sent paid invoice documentation to vendors.",
      "Categorized transactions in QuickBooks.",
      "Maintained organized accounts payable records.",
    ],
    tools: [
      "Accounts Payable",
      "QuickBooks",
      "Invoices",
      "Purchase Orders",
      "Vendor Support",
    ],
  },

  property: {
    category: "PROPERTY BOOKKEEPING",
    title: "Property Management Bookkeeping Support",
    description:
      "Supported property bookkeeping activities involving trust transactions, reconciliation, ledgers, and financial documentation.",
    tasks: [
      "Assisted with recording trust receipts and payments.",
      "Helped maintain accurate trust ledgers.",
      "Organized supporting financial documentation.",
      "Supported trust bank reconciliation.",
      "Prepared and organized transaction reports.",
    ],
    tools: [
      "Trust Accounting",
      "Property Management",
      "Reconciliation",
      "Financial Records",
    ],
  },
};
function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site">
      {/* NAVIGATION */}
      <header className="navbar">
        <a href="#home" className="brand">
          <div className="brand-mark">RZ</div>

          <div>
            <strong>RENZ NICO ZALSOS</strong>
            <span>BOOKKEEPING · ACCOUNTING SUPPORT</span>
          </div>
        </a>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
  <a href="#home" onClick={() => setMenuOpen(false)}>
    Home
  </a>

  <a href="#about" onClick={() => setMenuOpen(false)}>
    About
  </a>

  <a href="#experience" onClick={() => setMenuOpen(false)}>
    Experience
  </a>

  <a href="#portfolio" onClick={() => setMenuOpen(false)}>
    Portfolio
  </a>

  <a href="#skills" onClick={() => setMenuOpen(false)}>
    Skills
  </a>

  <a href="#certificates" onClick={() => setMenuOpen(false)}>
    Certificates
  </a>

  <a href="#education" onClick={() => setMenuOpen(false)}>
    Education
  </a>

  <a href="#contact" onClick={() => setMenuOpen(false)}>
    Contact
  </a>
</nav>
<button
  className="menu-toggle"
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label="Toggle navigation"
>
  <span></span>
  <span></span>
  <span></span>
</button>
        <a href="#contact" className="nav-button">
          Let's Connect
        </a>
      </header>

      <main>
        {/* HERO */}
        <section className="hero section" id="home">
          <div className="hero-content">
            <div className="eyebrow">ACCOUNTING MIND. REAL-WORLD EXPERIENCE.</div>

            <h1>
              RENZ NICO
              <span> ZALSOS</span>
            </h1>

            <h2>
  Bookkeeper <b>•</b> Accounting Assistant <b>•</b> Property Management Bookkeeping Support
</h2>

            <p className="hero-description">
  3+ years of hands-on bookkeeping and QuickBooks experience supporting
  accounts payable, reconciliations, transaction management, property
  accounting, and accurate financial recordkeeping.
</p>

            <div className="hero-buttons">
              <a href="#portfolio" className="button primary">
                View My Work →
              </a>

              <a href="#experience" className="button secondary">
                My Experience
              </a>

              <a href="#contact" className="button secondary">
                Contact Me
              </a>
            </div>

            <div className="stats">
  <div className="stat">
    <span className="stat-icon">▣</span>
    <div>
      <strong>3+ Years</strong>
      <small>Bookkeeping Experience</small>
    </div>
  </div>

  <div className="stat">
    <span className="stat-icon">◈</span>
    <div>
      <strong>QuickBooks</strong>
      <small>Hands-on Experience</small>
    </div>
  </div>

  <div className="stat">
    <span className="stat-icon">✓</span>
    <div>
      <strong>Accuracy</strong>
      <small>Reconciliation & Records</small>
    </div>
  </div>
</div>

              <div className="stat">
                <span className="stat-icon">◈</span>
                <div>
                  <strong>BSA</strong>
                  <small>Incoming 3rd Year</small>
                </div>
              </div>

              <div className="stat">
                <span className="stat-icon">✓</span>
                <div>
                  <strong>Accuracy</strong>
                  <small>Records & Reconciliation</small>
                </div>
              </div>
            </div>
      

          <div className="hero-visual">
  <div className="glow"></div>

  <div className="profile-card">
    <img
      src="/renz-hero.png"
      alt="Renz Nico Zalsos"
      className="profile-image"
    />

    <div className="profile-caption">
      <span>BOOKKEEPING</span>
      <span>TIMEKEEPING</span>
      <span>ACCOUNTANCY</span>
    </div>
  </div>

  <div className="quote-card">
    <span className="quote-mark">“</span>
    <p>Accurate records create efficient businesses.</p>
  </div>
</div>
        </section>

        {/* TOOLS */}
        <section className="tools-strip">
          <span className="tools-title">TOOLS I WORK WITH</span>

          <div className="tool-list">
  <span>QuickBooks Online</span>
  <span>QuickBooks Desktop</span>
  <span>Microsoft Excel</span>
  <span>Google Sheets</span>
  <span>CommonSku</span>
  <span>Google Workspace</span>
</div>
        </section>

        {/* ABOUT */}
        <section className="section about" id="about">
          <div className="section-heading">
            <span className="section-label">ABOUT ME</span>

            <h2>
  Bookkeeping built on
  <br />
  accuracy and organization.
</h2>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <p>
                I'm Renz Nico Zalsos, a bookkeeping and accounting support
    professional with 3+ years of hands-on experience working with
    QuickBooks and financial records.
              </p>

              <p>
                 My experience includes accounts payable, bank reconciliation,
    transaction categorization, invoice processing, property management
    bookkeeping support, trust accounting support, and QuickBooks cleanup.
              </p>

              <p>
                I focus on maintaining accurate, organized, and reliable records while
    continuously developing my accounting knowledge through my Bachelor of
    Science in Accountancy studies.
              </p>
            </div>

           <div className="services-grid">

  <article className="service-card">
    <div className="service-icon">$</div>

    <div>
      <h3>Bookkeeping & Accounting Support</h3>

      <p>
        Transaction recording, categorization, financial record maintenance,
        and day-to-day bookkeeping support using QuickBooks.
      </p>
    </div>
  </article>


  <article className="service-card">
    <div className="service-icon">✓</div>

    <div>
      <h3>Reconciliation & QuickBooks Cleanup</h3>

      <p>
        Bank reconciliation, transaction review, QuickBooks cleanup,
        account organization, and accurate financial record maintenance.
      </p>
    </div>
  </article>


  <article className="service-card">
    <div className="service-icon">▦</div>

    <div>
      <h3>Accounts Payable</h3>

      <p>
        Invoice processing, purchase order matching, payment tracking,
        vendor documentation, and transaction categorization.
      </p>
    </div>
  </article>


  <article className="service-card">
    <div className="service-icon">⌂</div>

    <div>
      <h3>Property Management Bookkeeping</h3>

      <p>
        Trust receipts and payments, trust ledger support, transaction
        reporting, reconciliation assistance, and financial documentation.
      </p>
    </div>
  </article>


             <article className="service-card">
  <div className="service-icon">▦</div>

  <div>
    <h3>Accounts Payable</h3>

    <p>
      Invoice processing, purchase order matching, payment tracking,
      vendor documentation, and transaction categorization.
    </p>
  </div>
</article>

              <article className="service-card">
                <div className="service-icon">▦</div>
                <div>
                  <h3>Data & Organization</h3>
                  <p>
                    Excel data cleaning, formatting, standardization, and
                    accurate record preparation.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="section" id="experience">
          <div className="section-heading centered">
            <span className="section-label">EXPERIENCE</span>
            <h2>Where I'm building my expertise.</h2>
            <p>
              Practical bookkeeping, payroll-support, and operational experience.
            </p>
          </div>

          <div className="experience-list">
            <article className="experience-card current">
              <div className="experience-date">2026</div>

              <div>
            

                <h3>Time & Attendance Management / Bookkeeping Support</h3>

                <p className="experience-period">August 21 – Present</p>

                <ul>
                  <li>
                    Download and prepare prior-day Amazon Flex driver itinerary
                    records.
                  </li>
                  <li>
                    Clean and standardize exported Excel files for timekeeping
                    review.
                  </li>
                  <li>
                    Compare Amazon Flex activity against ADP clock-in and
                    clock-out records.
                  </li>
                  <li>
                    Identify missing or incomplete time entries and coordinate
                    corrections with drivers through Google Voice.
                  </li>
                  <li>
                    Review and approve validated driver timecards before final
                    management review.
                  </li>
                  <li>
                    Support pre-payroll validation and pay-cycle accuracy.
                  </li>
                </ul>
              </div>
            </article>

            <article className="experience-card">
              <div className="experience-date">2022 – 2025</div>

              <div>
                <h3>Accounts Payable Specialist – Assistant</h3>

                <ul>
                  <li>Performed day-to-day bookkeeping tasks in QuickBooks Online.</li>
                  <li>Matched purchase orders with invoices.</li>
                  <li>Tracked invoice payments and vendor documentation.</li>
                  <li>Categorized financial transactions.</li>
                </ul>
              </div>
            </article>

            <article className="experience-card">
              <div className="experience-date">2025 – 2026</div>

              <div>
                <h3>Property Manager Bookkeeper Support Assistant</h3>

                <ul>
                  <li>Assisted with trust receipts and payments.</li>
                  <li>Maintained trust ledgers and supporting documentation.</li>
                  <li>Supported trust bank reconciliation.</li>
                  <li>Organized transaction reports and financial records.</li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        {/* PORTFOLIO */}
<section className="section portfolio" id="portfolio">
  <div className="section-heading">
    <span className="section-label">FEATURED PORTFOLIO</span>
    <h2>Bookkeeping Work in Action</h2>
    <p>
      Practical bookkeeping workflows, accounting support, and financial record
      management.
    </p>
  </div>

  <div className="project-grid">
    <article className="project-card">
      <div className="project-top">
        <span className="project-category">BOOKKEEPING</span>
        <span className="project-number">01</span>
      </div>

      <h3>Bank Reconciliation</h3>

      <p>
        Reviewed transactions, cleared payments and deposits, outstanding items,
        and account balances to support accurate reconciliation in QuickBooks.
      </p>

      <div className="project-tags">
        <span>QuickBooks</span>
        <span>Bank Reconciliation</span>
        <span>Financial Records</span>
      </div>

      <button
  className="project-button"
  onClick={() => setActiveProject(projectDetails.reconciliation)}
>
  Project Details →
</button>
    </article>

    <article className="project-card">
      <div className="project-top">
        <span className="project-category">QUICKBOOKS</span>
        <span className="project-number">02</span>
      </div>

      <h3>QuickBooks Cleanup Support</h3>

      <p>
        Supported a team-based cleanup of a full year of QuickBooks records by
        reviewing transactions, organizing entries, supporting categorization,
        and helping maintain accurate financial records.
      </p>

      <div className="project-tags">
        <span>QuickBooks Online</span>
        <span>Cleanup</span>
        <span>Transaction Review</span>
      </div>

      <button
  className="project-button"
  onClick={() => setActiveProject(projectDetails.cleanup)}
>
  Project Details →
</button>
    </article>

    <article className="project-card">
      <div className="project-top">
        <span className="project-category">ACCOUNTS PAYABLE</span>
        <span className="project-number">03</span>
      </div>

      <h3>Accounts Payable Workflow</h3>

      <p>
        Supported accounts payable processes by matching purchase orders to
        invoices, monitoring payment status, sending paid invoice documentation,
        and categorizing transactions.
      </p>

      <div className="project-tags">
        <span>Accounts Payable</span>
        <span>Invoices</span>
        <span>Purchase Orders</span>
        <span>Vendor Support</span>
      </div>

      <button
  className="project-button"
  onClick={() => setActiveProject(projectDetails.payable)}
>
  Project Details →
</button>
    </article>

    <article className="project-card">
      <div className="project-top">
        <span className="project-category">PROPERTY BOOKKEEPING</span>
        <span className="project-number">04</span>
      </div>

      <h3>Property Management Bookkeeping Support</h3>

      <p>
        Assisted with trust receipts and payments, trust ledger maintenance,
        supporting documentation, transaction reports, and trust bank
        reconciliation.
      </p>

      <div className="project-tags">
        <span>Trust Accounting</span>
        <span>Property Management</span>
        <span>Reconciliation</span>
      </div>

      <button
  className="project-button"
  onClick={() => setActiveProject(projectDetails.property)}
>
  Project Details →
</button>
    </article>
  </div>
</section>

        {/* SKILLS */}
        <section className="section" id="skills">
          <div className="section-heading centered">
            <span className="section-label">SKILLS & TOOLS</span>
            <h2>What I work with.</h2>
          </div>

          <div className="skills-grid">
            <article className="skill-card">
              <span>01</span>
              <h3>Bookkeeping</h3>
              <p>
                QuickBooks Online, Accounts Payable, Transaction Categorization,
                Invoices, Bank Reconciliation, Trust Accounting Support
              </p>
            </article>

            <article className="skill-card">
              <span>02</span>
              <h3>Timekeeping</h3>
              <p>
                ADP, Amazon Flex, Timecard Validation, Missing Punch Review,
                Attendance Monitoring, Payroll Support
              </p>
            </article>

            <article className="skill-card">
              <span>03</span>
              <h3>Data</h3>
              <p>
                Microsoft Excel, Google Sheets, Data Cleaning, Formatting,
                Spreadsheet Organization, Record Validation
              </p>
            </article>

            <article className="skill-card">
              <span>04</span>
              <h3>Communication</h3>
              <p>
                Google Voice, Gmail, Google Meet, Slack, Outlook, Google
                Workspace
              </p>
            </article>
          </div>
        </section>

        {/* CERTIFICATES + EDUCATION */}
        <section className="section credentials" id="certificates">
          <div className="credential-card">
  <span className="section-label">TRAINING & CERTIFICATES</span>
  <h2>Continuous Learning</h2>

  <div className="certificate-grid">
    <article className="certificate-card">
      <img
        src="/quickbooks-completion.png"
        alt="QuickBooks Online Masterclass Certificate of Completion"
        className="certificate-image"
      />

      <div className="certificate-info">
        <h3>QuickBooks Online Masterclass</h3>
        <p>Certificate of Completion</p>

        <span>
          Covered chart of accounts, transactions, invoices, bills,
          bank reconciliation, journal entries, and financial reporting.
        </span>
      </div>
    </article>

    <article className="certificate-card">
      <img
        src="/quickbooks-participation.png"
        alt="QuickBooks Bookkeeper Virtual Assistant Master Class Certificate"
        className="certificate-image"
      />

      <div className="certificate-info">
        <h3>QuickBooks Bookkeeper VA Master Class</h3>
        <p>20-Hour · 2-Week Program</p>

        <span>
          Completed February 13, 2026.
        </span>
      </div>
    </article>
  </div>
</div>
        </section>
{/* EDUCATION */}
<section className="section" id="education">
  <div className="section-heading centered">
    <span className="section-label">EDUCATION</span>
    <h2>Academic Background</h2>
  </div>

  <div className="education-content">
    <div className="education-icon">🎓</div>

    <div>
      <h3>Bachelor of Science in Accountancy (BSA)</h3>
      <p>PHINMA Cagayan de Oro College</p>
      <span className="education-badge">Currently Pursuing</span>
    </div>
  </div>
</section>
        {/* CONTACT */}
<section className="section contact" id="contact">
  <div className="contact-copy">
    <span className="section-label">LET'S WORK TOGETHER</span>

    <h2>Open to bookkeeping opportunities.</h2>

    <p>
      I'm open to opportunities in bookkeeping, accounting support,
      accounts payable, reconciliation, and property management bookkeeping.
      If you're looking for reliable financial support with strong attention
      to detail, feel free to reach out.
    </p>

    <div className="availability-note">
      Available for remote bookkeeping and accounting support opportunities.
    </div>
  </div>

  <div className="contact-card">
    <a href="mailto:renznicozalsos@gmail.com">
      <span>Email</span>
      <strong>renznicozalsos@gmail.com</strong>
    </a>

    <div>
      <span>Location</span>
      <strong>Iligan City, Philippines</strong>
    </div>

    <div>
      <span>Focus</span>
      <strong>Bookkeeping & Accounting Support</strong>
    </div>

    <a
      href="mailto:renznicozalsos@gmail.com"
      className="contact-button"
    >
      Send Me a Message →
    </a>
  </div>
</section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="footer-brand">
          <div className="brand-mark">RZ</div>

          <div>
            <strong>RENZ NICO ZALSOS</strong>
            <span>Bookkeeper · Accounting Assistant · Property Bookkeeping Support</span>
          </div>
        </div>

        <p>Building accuracy, one record at a time.</p>
        {activeProject && (
  <div
    className="modal-overlay"
    onClick={() => setActiveProject(null)}
  >
    <div
      className="modal-card"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="modal-close"
        onClick={() => setActiveProject(null)}
        aria-label="Close project details"
      >
        ×
      </button>

      <span className="section-label">
        {activeProject.category}
      </span>

      <h2>{activeProject.title}</h2>

      <p className="modal-description">
        {activeProject.description}
      </p>

      <h3>What I Worked On</h3>

      <ul className="modal-task-list">
        {activeProject.tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>

      <h3>Skills & Tools</h3>

      <div className="project-tags modal-tags">
        {activeProject.tools.map((tool, index) => (
          <span key={index}>{tool}</span>
        ))}
      </div>

      <div className="modal-note">
        Portfolio samples are presented using sanitized information to protect
        client and employee privacy.
      </div>
    </div>
  </div>
)}
      </footer>
    </div>
  );
}

export default App;