import styles from './DeleteModal.module.css';

const DeleteModal = ({ isOpen, onConfirm, onCancel }) => {
    if (!isOpen) return null;
    return (
      <div className={styles.backdrop}>
        <div className={styles.modal}>
          <h3>Are you sure you want to delete this contact?</h3>
          <button onClick={onConfirm} className={styles.button}>Delete</button>
          <button onClick={onCancel}className={styles.buttonCancel}>Cancel</button>
        </div>
      </div>
    );
  };
  export default DeleteModal;