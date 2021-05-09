import Image from "next/Image";
import styles from "./section.module.css";

function Search() {
  return (
    <div className="container">
      <div className={styles["section-search"]}>
        <input
          type="text"
          className={styles["section-search-input"]}
          placeholder="Search character..."
        />
        <div className={styles["section-search-img"]}>
          <Image
            src="/img/rick-and-morty-search.png"
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
