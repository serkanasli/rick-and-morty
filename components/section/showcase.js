import Card from "./card";
import Pagination from "./pagination";
import styles from "./section.module.css";

function Showcase({ characters }) {
  return (
    <div className={styles["showcase"]}>
      <Pagination />
      <Card characters={characters} />
    </div>
  );
}

export default Showcase;
