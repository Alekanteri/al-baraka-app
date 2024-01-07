import styles from "./Reviews.module.scss";
import ReviewItem from "./ReviewItem";
import reviewData from "../../utils/reviews.json";
import logo from "../../assets/img/Telegram_logo.webp";

const Reviews = () => {
  return (
    <section className={styles.reviewContainer}>
      <h1 className={styles.title}>Отзывы довольных клиентов</h1>
      <div className={styles.reviewItemsList}>
        {reviewData.map((item, index) => {
          return (
            <ReviewItem
              name={item.name}
              social={logo}
              text={item.text}
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Reviews;
