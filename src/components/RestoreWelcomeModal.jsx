import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleWelcomeModal } from "../../redux/pageSlice";

function RestoreWelcomeModal() {
  const dispatch = useDispatch();
  const restoreWelcomeModal = () => {
    dispatch(toggleWelcomeModal());
  };

  useEffect(() => {
    window.addEventListener("unload", restoreWelcomeModal());
    return () => window.removeEventListener("unload", restoreWelcomeModal());
  }, []);

  return <></>;
}


export default RestoreWelcomeModal;
