import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toggleWelcomeModal } from "../../redux/pageSlice";
import { Spinner } from "react-bootstrap";
import { toast } from "react-toastify";

function ModalResetDB() {
  const modal = useSelector((state) => state.page.showWelcomeModal);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const hideModal = () => {
    dispatch(toggleWelcomeModal());
  };

  const resetDB = async () => {
    setIsLoading(true);
    const call = await axios({
      method: "GET",
      url: `${import.meta.env.VITE_API_URL}/resetdb`,
    });
    if (!call.data.error) {
      setIsLoading(false);
      hideModal();
      toast.success(call.data.msg);
    } else {
      setIsLoading(false);
      toast.error(call.data.error);
    }
  };

  return (
    <>
      <Modal show={modal} onHide={hideModal}>
        <Modal.Body className="background-night color-text-our-white saira p-4 position-relative">
          <i
            onClick={hideModal}
            className="bi bi-x x-modal-styles position-absolute cursor-pointer"
          ></i>
          <h4 className="saira-expanded-more-bold">Welcome to our site!</h4>
          <p className="pt-3">
            This project features a shared cloud database that can be subject to user modifications
          </p>
          <p className="m-0">
            We strongly recommend resetting the database for a better experience throughout our
            website
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            {!isLoading ? (
              <>
                <button onClick={hideModal} className="button-cancel-modal px-3 saira-bold ms-2">
                  Close
                </button>
                <button onClick={resetDB} className="button-reset-modal px-2 saira-bold ms-2">
                  Reset database
                </button>
              </>
            ) : (
              <button
                disabled
                onClick={resetDB}
                className="button-loading-modal px-2 saira-bold ms-2 d-flex align-items-center"
              >
                <Spinner animation="border" size="sm" variant="warning" />
                <span className="ms-2">Restoring</span>
                <div className="d-flex align-items-end h-50">
                  <div className="loader"></div>
                </div>
              </button>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalResetDB;
