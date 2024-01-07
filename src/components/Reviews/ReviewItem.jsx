import styles from "./Reviews.module.scss";

const ReviewItem = ({ name, social, text }) => {
  return (
    <div className={styles.reviewItem}>
      <span className={styles.reviewItemName}>{name}</span>
      <div className={styles.reviewItemSocial}>
        <img src={social} alt="" />
      </div>
      <div className={styles.reivewItemText}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ReviewItem;
