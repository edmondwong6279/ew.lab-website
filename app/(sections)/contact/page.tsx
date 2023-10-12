import Link from "next/link";

export default function Work() {
  return (
    <main className="flex  flex-col items-center justify-between p-24">
      <div>
        <h1>Contact us</h1>
        <p>
          If you&apos;d like to discuss a potential project or collaboration,
          please email hello&#64;lab.co.uk or call us on +44 &#40;0&#41;207 183
          6668
        </p>
      </div>
      <div>
        <form className="flex flex-col border-stone-950 border-solid border-4">
          <label htmlFor="name-input">Name</label>
          <input
            type="text"
            name="name"
            id="name-input"
            placeholder="Your full name"
          ></input>
          <label htmlFor="email-input">Email</label>
          <input
            type="text"
            name="email"
            id="email-input"
            placeholder="me@company.com"
          ></input>
          <label htmlFor="message-input">Message</label>
          <textarea
            name="message"
            id="message-input"
            placeholder="Your message..."
          ></textarea>
          <div className="flex">
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
          <input type="submit" value={"Send your message"}></input>
        </form>
      </div>
    </main>
  );
}
