import Search from "./search";
import styles from "./section.module.css";
import Showcase from "./showcase";

function Section({ characters }) {
  return (
    <section className={styles["section-wrapper"]}>
      <Search />
      <Showcase characters={characters} />
    </section>
  );
}

export default Section;
