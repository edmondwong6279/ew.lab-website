import ContactForm from "@/components/ContactForm";

export default function WorkLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      {children}
      <ContactForm />
    </main>
  );
}
