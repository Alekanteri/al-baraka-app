import styles from "./Modal.module.scss";
import { RiCloseLine } from "react-icons/ri";

//!_____________________

// так короче, если нужно добавить куда нибудь модальное окно делаешь следующее:
// 1) создаешь state там где нужно добавить модальное окно, например "const [isOpen, setIsOpen] = useState(false <- должно быть false по дефолту);"
// 2) на кнопку вешаешь вот это "onClick={() => {setIsOpen(true)}}" это открывает модальное окно
// 3) ставишь куда угодно вот этот код "{isOpen && <Modal setIsOpen={setIsOpen <- передаешь в модальное окно, чтобы внутри него можно было закрывать его тоже} />}"

// дополнительно смотри в стилях

//!_____________________

const Modal = ({ setIsOpen }) => {
  /* можешь делать через children */
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)}>
        <div className={styles.centered}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h5 className={styles.heading}>1233</h5>
            </div>
            <button
              className={styles.closeBtn}
              onClick={() => setIsOpen(false)} // если хочешь добавить другую кнопку, делаешь ее так как того хочешь, и пишешь вот это
            >
              <RiCloseLine />
            </button>
            <div className={styles.modalContent}>{}</div>{" "}
            {/* кидаешь children вот сюда или пишешь в ручную */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
