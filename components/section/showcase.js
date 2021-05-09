import Card from "./card";
import styles from "./section.module.css";

function Showcase() {
  return (
    <div className={styles["showcase"]}>
      <div className={styles["pages-buttons"]}>
        <button className="button button-outline-orange mr-05" type="button">
          Geri
        </button>
        <button className="button button-outline-orange mr-05" type="button">
          İleri
        </button>
      </div>
      <Card />
    </div>
  );
}

export default Showcase;
