import izitoast from "izitoast";
const toast = {
  error: (message: any, title = "Error", timeout: any) => {
    return izitoast.error({
      title,
      message,
      position: "topCenter",
      timeout
    });
  },
  success: (message: any, title = "Success", timeout: any) => {
    return izitoast.success({
      title,
      message,
      position: "topCenter",
      timeout
    });
  }
};
export default toast;
