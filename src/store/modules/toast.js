import izitoast from "izitoast";
const toast = {
  error: (message, title = "Error", timeout) => {
    return izitoast.error({
      title,
      message,
      position: "topCenter",
      timeout
    });
  },
  success: (message, title = "Success", timeout) => {
    return izitoast.success({
      title,
      message,
      position: "topCenter",
      timeout
    });
  }
};
export default toast;
//# sourceMappingURL=toast.js.map
