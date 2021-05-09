import Image from "next/image";
import Link from "next/link";
import styles from "./section.module.css";

function Card({ characters }) {
  const { results, info } = characters;

  return (
    <div className="container">
      <div className={styles["character-card-wrapper"]}>
        {results?.slice(0, 6).map((result, index) => (
          <article key={index} className={styles["character-card"]}>
            <div className={styles["character-img"]}>
              <img
                src={result.image}
                width={200}
                height={230}
                style={{ objectFit: "fill" }}
              />
            </div>
            <div className={styles["character-content"]}>
              <section>
                <Link href="/about">
                  <h2
                    className={`button button-default ${styles["character-name"]}`}
                  >
                    {result.name}
                  </h2>
                </Link>
                <div className={styles["status"]}>
                  <div
                    className={
                      styles[`status-icon-${result.status.toLowerCase()}`]
                    }
                  ></div>
                  <h5>{`${result.status} - ${result.species}`}</h5>
                </div>
              </section>
              <section>
                <h4 className="opacity-05">Location:</h4>
                <h4>{result.location.name}</h4>
              </section>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Card;
