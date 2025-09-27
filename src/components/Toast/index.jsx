import { ToastContainer } from "react-toastify";
import { useLayout } from "../../contexts/LayoutContext";

export const ToastProvider = () => {
  const { theme } = useLayout();

  return (
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={theme.title}
    />
  );
};
