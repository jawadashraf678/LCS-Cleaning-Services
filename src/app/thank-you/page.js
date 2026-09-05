"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ThankYou() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <main className={styles.thankYouWrapper}>
      {/* Top Bar for continuity */}
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarContainer}`}>
          <div className={styles.topBarInfo}>
            <span>+1 647-470-2777</span>
            <span>cleaningserviceslcs3@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.contentContainer}>
        <div className={styles.successCard} data-aos="zoom-in">
          <div className={styles.iconWrapper}>
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          </div>
          <h1 className={styles.title}>Thank You!</h1>
          <p className={styles.description}>
            Your request has been successfully submitted. Our team at LCS Cleaning Services Inc. will review your details and get back to you shortly.
          </p>
          <Link href="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
