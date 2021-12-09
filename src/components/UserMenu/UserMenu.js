import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { authSelectors, authOperations } from 'redux/auth';
import Modal from '../Modal/Modal';
import s from './UserMenu.module.css';

function UserMenu() {
  const name = useSelector(authSelectors.getUsername);
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  const logOutHandler = () => {
    if (token) {
      dispatch(authOperations.logout());
    } else {
      toast.error('Something went wrong!');
      setShowModal(!showModal);
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const {
    authNav,
    authSpan,
    authButton,
    modalConatiner,
    modalTitle,
    modalButton,
  } = s;

  return (
    <div className={authNav}>
      <span className={authSpan}>Welkom, {name}!</span>

      <button
        className={authButton}
        type="button"
        onClick={() => toggleModal()}
      >
        Logout
      </button>

      {showModal && (
        <Modal onToggleModal={toggleModal} showModal={showModal}>
          <div className={modalConatiner}>
            <h4 className={modalTitle}>Are you sure?</h4>
            <div>
              <button
                className={modalButton}
                type="button"
                onClick={() => logOutHandler()}
              >
                Yes
              </button>

              <button
                className={modalButton}
                type="button"
                onClick={() => toggleModal()}
              >
                No
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default UserMenu;
