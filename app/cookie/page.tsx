import { LegalLayout } from '@/components/layout/LegalLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Cookie Policy | After Trials',
    description: 'After Trials Cookie Policy and tracking technologies.',
};

export default function CookiePage() {
    return (
        <LegalLayout
            eyebrow="PRIVACY // COOKIES"
            title="Cookie Policy"
            subtitle="How After Trials uses cookies and similar tracking technologies."
            lastUpdated="Last Updated: March 2026"
        >
            <article className="doc-content">
                <section className="legal-section" id="section-1"><div className="legal-section-number">
                          01
                        </div><h2>
                          What Are Cookies?
                        </h2><p>
                          Cookies are small text files that are stored on your device when
                          you visit a website. They allow websites to remember information
                          about your visit, maintain sessions, understand how the Platform
                          is used, and provide certain features.
                        </p><p>
                          We may also use technologies similar to cookies, including local
                          storage, pixels, SDKs, session technologies, and other identifiers.
                          In this Policy, we refer to these technologies collectively as
                          “cookies.”
                        </p></section><section className="legal-section" id="section-2"><div className="legal-section-number">
                          02
                        </div><h2>
                          How We Use Cookies
                        </h2><p>
                          After Trials may use cookies for the following purposes:
                        </p><h3>Essential Cookies</h3><p>
                          These cookies are necessary for the Platform to function properly.
                          They may be used to:
                        </p><ul><li>Keep you signed in;</li><li>Maintain secure sessions;</li><li>Remember security and authentication information;</li><li>Protect accounts and the Platform from misuse;</li><li>Maintain basic Platform functionality; and</li><li>Remember certain settings required for the service to operate.</li></ul><p>
                          Because these technologies are necessary for core functionality,
                          they may not always be removable through ordinary cookie controls.
                        </p><h3>Functional Cookies</h3><p>
                          These technologies help remember choices you make and improve your
                          experience. For example, they may remember:
                        </p><ul><li>Certain preferences;</li><li>Language or interface settings;</li><li>Session-related choices; and</li><li>Other settings that improve usability.</li></ul><h3>Analytics Cookies</h3><p>
                          We may use analytics technologies to understand how people use
                          After Trials. This may include information such as:
                        </p><ul><li>Pages or features visited;</li><li>How users navigate through the Platform;</li><li>Approximate usage patterns;</li><li>Device and browser information;</li><li>Performance and technical information; and</li><li>General interaction with the Platform.</li></ul><p>
                          Analytics help us understand what is working, identify problems,
                          and improve After Trials.
                        </p><h3>Security and Fraud Prevention</h3><p>
                          Cookies and similar technologies may also be used to identify
                          suspicious activity, prevent fraud, protect accounts, and maintain
                          the security of the Platform.
                        </p></section><section className="legal-section" id="section-3"><div className="legal-section-number">
                          03
                        </div><h2>
                          Third-Party Services
                        </h2><p>
                          Some cookies or similar technologies may be provided by
                          third-party services that help us operate, secure, analyze, or
                          improve After Trials.
                        </p><p>
                          Depending on the services we use at a particular time, these may
                          include providers supporting:
                        </p><ul><li>Authentication and account management;</li><li>Hosting and infrastructure;</li><li>Security and fraud prevention;</li><li>Analytics;</li><li>Communications;</li><li>Payments; and</li><li>Other technical functions.</li></ul><p>
                          The third parties we use may change as After Trials develops.
                          Where appropriate, information collected through these technologies
                          is also governed by the relevant third party’s privacy policy.
                        </p></section><section className="legal-section" id="section-4"><div className="legal-section-number">
                          04
                        </div><h2>
                          Your Cookie Choices
                        </h2><p>
                          Depending on your location and applicable law, you may have choices
                          regarding non-essential cookies.
                        </p><p>
                          You may be able to:
                        </p><ul><li>Accept or reject certain cookies;</li><li>Change cookie preferences through available Platform controls;</li><li>Delete cookies through your browser settings; or</li><li>Block cookies through your browser.</li></ul><div className="legal-notice"><span className="legal-notice-label">
                            Important
                          </span><p>
                            Disabling certain cookies may affect the functionality of the
                            Platform. In particular, disabling essential cookies may prevent
                            parts of After Trials from working correctly.
                          </p></div></section><section className="legal-section" id="section-5"><div className="legal-section-number">
                          05
                        </div><h2>
                          Browser Controls
                        </h2><p>
                          Most modern browsers allow you to manage or delete cookies through
                          their settings.
                        </p><p>
                          However, browser-level controls may not provide the same level of
                          control as dedicated cookie preference tools provided by websites.
                        </p></section><section className="legal-section" id="section-6"><div className="legal-section-number">
                          06
                        </div><h2>
                          Changes to This Cookie Policy
                        </h2><p>
                          We may update this Cookie Policy from time to time to reflect
                          changes to our Platform, technology, legal requirements, or the
                          services we use.
                        </p><p>
                          When we make material changes, we may update the “Last Updated”
                          date and provide additional notice where appropriate.
                        </p></section><section className="legal-section" id="section-7"><div className="legal-section-number">
                          07
                        </div><h2>
                          Contact
                        </h2><p>
                          If you have questions about this Cookie Policy or how After Trials
                          uses cookies and similar technologies, contact us at:
                        </p><div className="legal-contact-card"><a href="mailto:privacy@aftertrials.com" className="legal-contact-email">
                            privacy@aftertrials.com
                          </a></div></section><section className="legal-section" id="section-8"><div className="legal-section-number">
                          08
                        </div><h2>
                          Related Policies
                        </h2><p>
                          This Cookie Policy should be read together with our:
                        </p><ul><li>Privacy Policy;</li><li>Terms of Service; and</li><li>Community Guidelines.</li></ul><div className="legal-notice"><span className="legal-notice-label">
                            Acknowledgement
                          </span><p>
                            By using After Trials, you acknowledge that cookies and similar
                            technologies may be used as described above, subject to your
                            rights and choices under applicable law.
                          </p></div></section>
            </article>
        </LegalLayout>
    );
}
