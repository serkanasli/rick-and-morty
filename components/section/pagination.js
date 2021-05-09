import styles from "./section.module.css";
function Pagination() {
  return (
    <div className={styles["pages-buttons"]}>
      <button className="button button-outline-orange mr-05" type="button">
        Previous
      </button>
      <button className="button button-outline-orange mr-05" type="button">
        Next
      </button>
    </div>
  );
}

export default Pagination;
