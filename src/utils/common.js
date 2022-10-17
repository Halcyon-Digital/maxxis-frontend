import Swal from "sweetalert2";

export const alrtSuccess = (data) => {
  Swal.fire({
    icon: "success",
    title: data,
    showConfirmButton: false,
    timer: 1500,
  });
};

export const alrtError = (data) => {
  Swal.fire({
    icon: "error",
    title: data,
    showConfirmButton: false,
    timer: 1500,
  });
};
