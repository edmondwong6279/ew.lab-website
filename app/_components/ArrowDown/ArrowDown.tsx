import Link from "next/link";

export default function ArrowDown({ anchor }: { anchor: string }) {
  return (
    <Link href={anchor}>
      <svg width="57" height="57" viewBox="0 0 57 57" fill="none">
        <circle
          opacity="0.9"
          cx="28.5"
          cy="28.5"
          r="28"
          fill="white"
          stroke="black"
        />
        <path
          d="M46 25L28.3716 37.8541L10.7449 25"
          stroke="black"
          strokeWidth="2"
          strokeMiterlimit={10}
        />
      </svg>
    </Link>
  );
}
