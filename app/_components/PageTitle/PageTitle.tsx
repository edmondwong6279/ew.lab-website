export default function PageTitle({
  title,
  variant = "default"
}: {
  title: string;
  variant?: "default" | "work";
}) {
  return (
    <header
      className={`relative w-full px-4 md:px-20 ${
        variant === "default" ? "bg-white" : "py-10 md:py-16 bg-black"
      }`}
    >
      <h1
        className={`md:w-9/12 text-4xl/normal md:text-6xl/snug ${
          variant === "default" ? "pt-20 pb-2 text-black" : "w-full text-white"
        }`}
      >
        {title}
      </h1>
    </header>
  );
}
