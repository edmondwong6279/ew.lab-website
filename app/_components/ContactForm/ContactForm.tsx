"use client";

import Link from "next/link";
import { useState } from "react";

import Button from "@/components/Button";

import styles from "./contact-form.module.scss";

export default function ContactForm() {
  const [showForm, setShowForm] = useState(true);

  return (
    <div className={styles.container}>
      {showForm ? (
        <>
          <h1 className={styles.title}>Contact us</h1>
          <p className={styles.info}>
            If you&apos;d like to discuss a potential project or collaboration,
            please email{" "}
            <a href="mailto:hello@lab.co.uk">hello&#64;lab.co.uk</a> or call us
            on
            <a href="tel:+442071836668">+44 &#40;0&#41;207 183 6668</a>
          </p>
        </>
      ) : (
        <>
          <h1 className={styles.title}>Thank you!</h1>
          <div className={styles.sentInfo}>
            <p>Please bear with us, we will reply as soon as we can.</p>
            <div className={styles.sentButtonContainer}>
              <Button
                text={"Send another message"}
                link={""}
                variant="white"
                onClick={(e) => {
                  e.preventDefault();
                  setShowForm(true);
                }}
              />
              <Button
                text={"See some of our work"}
                link={"/work"}
                variant="white"
              />
            </div>
          </div>
        </>
      )}
      {showForm && (
        <form className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="name-input">Name</label>
            <input
              type="text"
              name="name"
              id="name-input"
              placeholder="Your full name"
            ></input>
          </div>
          <div className={styles.field}>
            <label htmlFor="email-input">Email</label>
            <input
              type="text"
              name="email"
              id="email-input"
              placeholder="me@company.com"
            ></input>
          </div>
          <div className={styles.field}>
            <label htmlFor="message-input">Message</label>
            <textarea
              className={styles.textArea}
              name="message"
              id="message-input"
              placeholder="Your message..."
            ></textarea>
          </div>
          <div className={styles.checkboxField}>
            <input
              type="checkbox"
              name="privacy-checkbox"
              id="privacy-checkbox-input"
            ></input>
            <p>
              I agree to the terms of your{" "}
              <Link href={"/privacy-policy"}>Privacy Policy</Link>
            </p>
          </div>

          <div className={styles.buttonContainer}>
            <Button
              text={"Send your message"}
              link={""}
              onClick={(e) => {
                e.preventDefault();
                setShowForm(false);
              }}
              variant="yellow-line"
            />
          </div>
        </form>
      )}
    </div>
  );
}
