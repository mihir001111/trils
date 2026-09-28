import Link from 'next/link';
import { Metadata } from 'next';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Careers | After Trials',
  description: 'Join the team building the professional network for healthcare.',
};

const roles = [
  'Engineering & Product (mobile, web, backend)',
  'Design & UX',
  'Clinical Advisors & Medical Consultants',
  'Growth & Community',
  'Operations & Strategy',
];

export default function CareersPage() {
  return (
    <div className="legal-page-root">

      {/* Top Bar */}
      <header className="legal-topbar">
        <div className="legal-topbar-inner">
          <Link href="/" className="legal-brand" aria-label="After Trials home">
            After <span>Trials</span>
          </Link>
          <Link href="/" className="legal-back-link">← Back to After Trials</Link>
        </div>
      </header>

      {/* Hero */}
      <div className="legal-hero">
        <div className="legal-hero-inner">
          <span className="legal-eyebrow">Work With Us</span>
          <h1 className="legal-title">
            Careers at{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--at-blue)' }}>After Trials</em>
          </h1>
          <p className="legal-subtitle">
            We are building the professional network for healthcare — one built for physicians,
            researchers, and allied health professionals, not corporations. If that mission
            excites you, we would love to hear from you.
          </p>
        </div>
      </div>

      {/* Content */}
      <main className="careers-body">

        {/* Section 01 — Mission */}
        <div className="careers-section">
          <div className="careers-section-inner">
            <div className="careers-section-num">01</div>
            <div className="careers-section-content">
              <h2 className="careers-section-title">Our Mission</h2>
              <p className="careers-section-text">
                After Trials is a professional platform dedicated to healthcare workers — enabling
                them to share clinical insights, collaborate on research, and build meaningful
                careers. We believe no healthcare professional should stand alone.
              </p>
              <p className="careers-section-text">
                We are a small, focused team working to change how medical professionals connect
                and grow. Every role here has impact.
              </p>
            </div>
          </div>
        </div>

        {/* Section 02 — Roles */}
        <div className="careers-section careers-section--bordered">
          <div className="careers-section-inner">
            <div className="careers-section-num">02</div>
            <div className="careers-section-content">
              <h2 className="careers-section-title">Open Roles</h2>
              <p className="careers-section-text">
                We do not post formal job listings yet — we are at an early stage and growing
                deliberately. That said, we are always interested in exceptional people across:
              </p>
              <ul className="careers-roles-list">
                {roles.map((role) => (
                  <li key={role} className="careers-role-item">
                    <span className="careers-role-dot" />
                    {role}
                  </li>
                ))}
              </ul>
              <div className="careers-notice">
                <span className="careers-notice-label">Early Stage</span>
                <p className="careers-notice-text">
                  Many of our early collaborators are working with equity arrangements, advisory
                  roles, or part-time engagements while we grow. We are open to conversations
                  at any level.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 03 — Apply */}
        <div className="careers-section">
          <div className="careers-section-inner">
            <div className="careers-section-num">03</div>
            <div className="careers-section-content">
              <h2 className="careers-section-title">Get in Touch</h2>
              <p className="careers-section-text">
                Send us a message telling us who you are, what you are interested in, and why
                After Trials excites you. We read every email.
              </p>
              <a href="mailto:careers@aftertrials.com" className="careers-email-cta">
                careers@aftertrials.com
                <span className="careers-email-arrow">→</span>
              </a>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
