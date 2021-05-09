import Image from "next/image";
import Link from "next/link";
import styles from "./section.module.css";
function Card() {
  return (
    <div className="container">
      <div className={styles["character-card-wrapper"]}>
        {["passive", "active", "active", "passive", "passive", "active"].map(
          (value, index) => (
            <article key={index} className={styles["character-card"]}>
              <div className={styles["character-img"]}>
                <Image
                  src="/img/rick-k22.jpeg"
                  width={200}
                  objectFit={"cover"}
                  height={230}
                />
              </div>
              <div className={styles["character-content"]}>
                <section>
                  <Link href="/about">
                    <h2
                      className={`button button-default ${styles["character-name"]}`}
                    >
                      Rick K-22
                    </h2>
                  </Link>
                  <div className={styles["status"]}>
                    <div className={styles[`status-icon-${value}`]}></div>
                    <h5>Unknown - Alien</h5>
                  </div>
                </section>
                <section>
                  <p className={styles["character-short-detail"]}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen...
                  </p>
                </section>
              </div>
            </article>
          )
        )}
      </div>
    </div>
  );
}

export default Card;
