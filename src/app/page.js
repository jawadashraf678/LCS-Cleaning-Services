"use client";

import styles from './page.module.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true, // Animates out while scrolling past them
      offset: 100,
    });
  }, []);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "How often should my business be cleaned?",
      a: "Cleaning frequency depends on the size of your facility, number of people using it, traffic levels, and specific cleaning requirements. We can help determine a schedule that fits your business."
    },
    {
      q: "Can cleaning services be customized?",
      a: "Yes. Different facilities have different requirements. A cleaning plan can be adjusted based on your facility, priorities, and preferred schedule."
    },
    {
      q: "Do you focus on high-touch areas?",
      a: "Yes. High-touch areas such as handles, switches, shared surfaces, and other frequently used areas are important parts of maintaining a cleaner environment."
    },
    {
      q: "Why hire a professional cleaning company?",
      a: "Professional cleaning services can help businesses maintain a consistent cleaning routine while allowing employees and management to focus on their core responsibilities."
    }
  ];

  return (
    <main>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarContainer}`}>
          <div className={styles.topBarInfo}>
            <div className={styles.topBarInfoItem}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>647-470-2777</span>
            </div>
            <div className={styles.topBarInfoItem}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <span>cleaningserviceslcs3@gmail.com</span>
            </div>
          </div>
          <div className={styles.topBarSocials}>
            <a href="#" className={styles.socialIcon}>fb</a>
            <a href="#" className={styles.socialIcon}>tw</a>
            <a href="#" className={styles.socialIcon}>in</a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={styles.navbar}>
        <div className={`container ${styles.navContainer}`}>
          <div className={styles.brand}>
            <Image src="/logo.png" alt="LCS Cleaning" width={50} height={50} />
            <span>LCS<br/>Cleaning</span>
          </div>
          <ul className={styles.navLinks}>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#process">Process</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
          <div className={styles.navActions}>
            <div className={styles.searchIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
            <a href="#contact" className={`btn btn-primary ${styles.desktopCta}`}>Get a Quote</a>
            
            {/* Hamburger Icon */}
            <div 
              className={styles.hamburger} 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {isMobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </>
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </>
                )}
              </svg>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <ul>
            <li><a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a></li>
            <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
            <li><a href="#process" onClick={() => setIsMobileMenuOpen(false)}>Process</a></li>
            <li><a href="#faq" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a></li>
          </ul>
          <div className={styles.mobileMenuCta}>
            <a href="#contact" className="btn btn-primary" onClick={() => setIsMobileMenuOpen(false)}>Get a Quote</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroContent} data-aos="fade-right">
            <div className={styles.heroLabel}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              Professional Cleaning Services
            </div>
            
            <h1 className={styles.heroTitle}>
              CLEANER, HEALTHIER WORKSPACES <br/> <span className={styles.highlightPill}>LCS CLEANING</span>
            </h1>
            
            <p className={styles.heroDesc}>
              Reliable Cleaning. Consistent Results. Professional Service. We understand that maintaining a clean and professional facility is an important part of running a successful business.
            </p>
            
            <div className={styles.heroButtons}>
              <a href="#quote" className="btn btn-primary">
                Get a Free Quote
              </a>
              <button className={styles.watchVideoBtn}>
                <div className={styles.playIconWrapper}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l14 9-14 9V3z"></path></svg>
                </div>
                Contact Our Team
              </button>
            </div>
            
            <div className={styles.statsRow} data-aos="fade-up" data-aos-delay="200">
              <div className={styles.statItem}>
                <h4>3,600<span>+</span></h4>
                <p>Total Customers</p>
              </div>
              <div className={styles.statItem}>
                <h4>15<span>+</span></h4>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
          
          <div className={styles.heroImageWrapper} data-aos="fade-left">
            <div className={styles.heroCircleBg}></div>
            <Image 
              src="/hero_cleaner.jpg" 
              alt="Professional Cleaner" 
              width={450} 
              height={600} 
              className={styles.heroImage}
              priority
            />
            <div className={`${styles.floatingIcon} ${styles.floatingLeft}`} data-aos="zoom-in" data-aos-delay="400">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
          </div>
        </div>
      </section>

      {/* About / Trust Section */}
      <section className="section" id="about">
        <div className={`container ${styles.aboutGrid}`}>
          <div className={styles.aboutImage} data-aos="fade-right">
            <Image src="/commercial.jpg" alt="LCS Cleaning Team" width={600} height={500} style={{borderRadius: '20px', objectFit: 'cover', width: '100%', height: '100%'}} />
          </div>
          <div className={styles.aboutContent} data-aos="fade-left">
            <h3>More Than Just Cleaning</h3>
            <p>We don't believe cleaning is simply about making a space look good. Proper cleaning helps create an environment that feels comfortable, organized, welcoming, and professionally maintained.</p>
            <p>That's why LCS Cleaning Services Inc. takes a detail-focused approach to every cleaning assignment. We work to understand your facility, your expectations, and your cleaning requirements so we can provide a service that fits your business.</p>
            
            <ul className={styles.aboutList}>
              <li data-aos="fade-up" data-aos-delay="100"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Clean and professional workspaces</li>
              <li data-aos="fade-up" data-aos-delay="200"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Fresh and welcoming environments</li>
              <li data-aos="fade-up" data-aos-delay="300"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Cleaner high-touch areas</li>
              <li data-aos="fade-up" data-aos-delay="400"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Consistent cleaning standards</li>
            </ul>
            <p style={{ fontWeight: 600, color: 'var(--primary-color)' }}>Let our team handle the cleaning while you focus on running your business.</p>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="section section-bg" id="services">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Our Cleaning Services</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard} data-aos="fade-up" data-aos-delay="100">
              <div className={styles.serviceImageWrapper}>
                <Image src="/commercial.jpg" alt="Commercial Cleaning" fill sizes="(max-width: 768px) 100vw, 300px" className={styles.serviceImage} />
                <div className={styles.serviceIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11M8 14v3m4-3v3m4-3v3"></path></svg>
                </div>
              </div>
              <h3 className={styles.serviceTitle}>Commercial Cleaning</h3>
              <p className={styles.serviceDesc}>Keep your commercial property looking professional, clean, and welcoming with reliable cleaning services designed around your facility's needs.</p>
              <ul className={styles.serviceList}>
                <li>General facility cleaning</li>
                <li>Common areas & Workspaces</li>
                <li>Floors and visible surfaces</li>
              </ul>
            </div>
            
            <div className={styles.serviceCard} data-aos="fade-up" data-aos-delay="200">
              <div className={styles.serviceImageWrapper}>
                <Image src="/office.jpg" alt="Office Cleaning" fill sizes="(max-width: 768px) 100vw, 300px" className={styles.serviceImage} />
                <div className={styles.serviceIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                </div>
              </div>
              <h3 className={styles.serviceTitle}>Office Cleaning</h3>
              <p className={styles.serviceDesc}>LCS Cleaning Services Inc. provides office cleaning solutions that help keep workspaces organized, fresh, and presentable.</p>
              <ul className={styles.serviceList}>
                <li>Everyday surfaces</li>
                <li>Shared areas</li>
                <li>Professional appearance focus</li>
              </ul>
            </div>
            
            <div className={styles.serviceCard} data-aos="fade-up" data-aos-delay="300">
              <div className={styles.serviceImageWrapper}>
                <Image src="/commercial.jpg" alt="Facility Cleaning" fill sizes="(max-width: 768px) 100vw, 300px" className={styles.serviceImage} style={{filter: "brightness(0.9) hue-rotate(10deg)"}} />
                <div className={styles.serviceIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                </div>
              </div>
              <h3 className={styles.serviceTitle}>Facility Cleaning</h3>
              <p className={styles.serviceDesc}>Our facility cleaning services are designed to help businesses maintain their spaces through consistent and dependable cleaning routines.</p>
              <ul className={styles.serviceList}>
                <li>Flexible scheduling</li>
                <li>Customized routines</li>
                <li>Dependable service</li>
              </ul>
            </div>
            
            <div className={styles.serviceCard} data-aos="fade-up" data-aos-delay="400">
              <div className={styles.serviceImageWrapper}>
                <Image src="/hero_cleaner.jpg" alt="Customized Cleaning" fill sizes="(max-width: 768px) 100vw, 300px" className={styles.serviceImage} style={{objectPosition: "top"}} />
                <div className={styles.serviceIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                </div>
              </div>
              <h3 className={styles.serviceTitle}>Customized Cleaning</h3>
              <p className={styles.serviceDesc}>Focus on the areas and requirements most important to your business. Give additional attention to areas that need a deeper level of care.</p>
              <ul className={styles.serviceList}>
                <li>Detailed care</li>
                <li>Specific priorities</li>
                <li>Flexible approach</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={`section ${styles.whySection}`} id="why-us">
        <div className="container">
          <h2 className="section-title" style={{ color: 'white' }} data-aos="fade-up">Why Choose LCS Cleaning Services Inc.?</h2>
          <div className={styles.whyGrid}>
            <div className={styles.whyCard} data-aos="zoom-in" data-aos-delay="100">
              <div className={styles.whyIcon}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <h3 className={styles.whyTitle}>Reliable Service</h3>
              <p className={styles.whyDesc}>We focus on providing consistent service and maintaining the standards your facility requires. You want a team you can depend on.</p>
            </div>
            <div className={styles.whyCard} data-aos="zoom-in" data-aos-delay="200">
              <div className={styles.whyIcon}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
              </div>
              <h3 className={styles.whyTitle}>Attention to Detail</h3>
              <p className={styles.whyDesc}>Cleaning isn't just about the areas that are easy to see. Our detail-focused approach helps ensure important areas don't get overlooked.</p>
            </div>
            <div className={styles.whyCard} data-aos="zoom-in" data-aos-delay="300">
              <div className={styles.whyIcon}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              </div>
              <h3 className={styles.whyTitle}>Professional Approach</h3>
              <p className={styles.whyDesc}>Our goal is to provide a service that reflects the standards and expectations of your professional business environment.</p>
            </div>
            <div className={styles.whyCard} data-aos="zoom-in" data-aos-delay="400">
              <div className={styles.whyIcon}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h3 className={styles.whyTitle}>Health & Safety Focus</h3>
              <p className={styles.whyDesc}>Maintaining a clean environment is an important part of creating a healthier and more comfortable workplace.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cleaning Process */}
      <section className="section" id="process">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Our Approach to Cleaning</h2>
          <div className={styles.processGrid}>
            <div className={styles.processCard} data-aos="fade-up" data-aos-delay="100">
              <div className={styles.processNumber}>01</div>
              <h4 className={styles.processTitle}>Consultation</h4>
              <p className={styles.processDesc}>We discuss your facility's specific cleaning needs and expectations.</p>
            </div>
            <div className={styles.processCard} data-aos="fade-up" data-aos-delay="200">
              <div className={styles.processNumber}>02</div>
              <h4 className={styles.processTitle}>Custom Plan</h4>
              <p className={styles.processDesc}>We create a customized cleaning schedule that fits your business.</p>
            </div>
            <div className={styles.processCard} data-aos="fade-up" data-aos-delay="300">
              <div className={styles.processNumber}>03</div>
              <h4 className={styles.processTitle}>Execution</h4>
              <p className={styles.processDesc}>Our team provides consistent and dependable cleaning services.</p>
            </div>
            <div className={styles.processCard} data-aos="fade-up" data-aos-delay="400">
              <div className={styles.processNumber}>04</div>
              <h4 className={styles.processTitle}>Quality Check</h4>
              <p className={styles.processDesc}>We maintain communication to ensure your standards are being met.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cleaning Tips */}
      <section className="section section-bg">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Cleaning Tips From LCS</h2>
          <div className={styles.tipsGrid}>
            <div className={styles.tipCard} data-aos="fade-up" data-aos-delay="100">
              <h3 className={styles.tipTitle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-color)" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                Don't Forget High-Touch Areas
              </h3>
              <p>Frequently touched surfaces can easily become overlooked during routine cleaning. Make sure areas such as handles, switches, and counters receive regular attention.</p>
            </div>
            <div className={styles.tipCard} data-aos="fade-up" data-aos-delay="200">
              <h3 className={styles.tipTitle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-color)" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 8l4 4-4 4M8 12h7"></path></svg>
                Use the Right Product
              </h3>
              <p>Different surfaces and materials can require different cleaning solutions. Using the appropriate product helps protect surfaces while maintaining effective cleaning.</p>
            </div>
            <div className={styles.tipCard} data-aos="fade-up" data-aos-delay="300">
              <h3 className={styles.tipTitle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-color)" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                Maintain a Regular Schedule
              </h3>
              <p>Cleaning should be consistent rather than something that only happens when a facility looks dirty. A regular routine prevents buildup.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection} id="faq">
        <div className={`container ${styles.faqLayout}`}>
          <div className={styles.faqHeader} data-aos="fade-right">
            <div className={styles.heroLabel} style={{ marginBottom: '1rem' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              Got Questions?
            </div>
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common questions about our professional cleaning services, customization options, and process.</p>
            <a href="#contact" className="btn btn-secondary">Ask Another Question</a>
          </div>
          
          <div className={styles.faqGrid} data-aos="fade-left">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`${styles.faqItem} ${activeFaq === index ? styles.active : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className={styles.faqQuestionWrap}>
                  <h4 className={styles.faqQuestion}>{faq.q}</h4>
                  <div className={styles.faqIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </div>
                </div>
                <div className={styles.faqAnswerWrapper}>
                  <p className={styles.faqAnswer}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection} id="contact" data-aos="zoom-in">
        <div className="container">
          <h2 className={styles.ctaTitle}>Ready for a Cleaner Workspace?</h2>
          <p className={styles.ctaDesc}>Get in touch with LCS Cleaning Services Inc. today to discuss your cleaning needs.</p>
          <div className={styles.ctaButtons}>
            <button className="btn btn-primary">Get a Free Quote</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={`container ${styles.footerGrid}`}>
          <div className={styles.footerBrand}>
            <h4>LCS Cleaning Services Inc.</h4>
            <p style={{ color: '#fff', fontWeight: 'bold' }}>Our Commitment to Quality:</p>
            <p>Reliability, Quality, Professionalism, Consistency, Customer Focus.</p>
            <p style={{ marginTop: '0.5rem', fontStyle: 'italic', color: 'var(--secondary-color)' }}>Cleaner Spaces. Healthier Environments. Better Impressions.</p>
          </div>
          
          <div className={styles.footerLinks}>
            <h5>Quick Links</h5>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#process">Our Process</a></li>
            </ul>
          </div>
          
          <div className={styles.footerContact}>
            <h5>Let's Talk About Your Cleaning Needs</h5>
            <p>📞 647-470-2777</p>
            <p>✉️ cleaningserviceslcs3@gmail.com</p>
            <p>📍 Service Area</p>
          </div>
        </div>
        <div className={`container ${styles.footerBottom}`}>
          <p>&copy; {new Date().getFullYear()} LCS Cleaning Services Inc. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
