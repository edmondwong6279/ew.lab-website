import Button from "./_components/Button";
import styles from "./root.module.scss";

export default function NotFound() {
  return (
    <main className={styles.notFoundContainer}>
      <h1 className={styles.title}>404</h1>
      <h1 className={styles.title}>Something&apos;s gone wrong!</h1>
      <p>The page you were looking for doesn&apos;t exist Please try again.</p>
      <Button text={"Go to home"} link={"/"} variant={"yellow-line"} />
    </main>
  );
}
