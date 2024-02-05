import styles from "./page.module.css";
import { trpc } from "./trpc";
import Clientside from "./Clientside";

function Gradient({
  conic,
  className,
  small,
}: {
  small?: boolean;
  conic?: boolean;
  className?: string;
}): JSX.Element {
  return (
    <span
      className={[
        styles.gradient,
        conic ? styles.glowConic : undefined,
        small ? styles.gradientSmall : styles.gradientLarge,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
}

export default async function Page() {
  const response = await trpc.hello.query({});
  return (
    <div>
      <p>Server side - {response}</p>
      <Clientside />
    </div>
  );
}
