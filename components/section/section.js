import Search from "./search";
import styles from "./section.module.css";
import Showcase from "./showcase";

function Section() {
  return (
    <section className={styles["section-wrapper"]}>
      <div className="container">
        <Search />
      </div>
      <Showcase />
    </section>
  );
}

export default Section;
