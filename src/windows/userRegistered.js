import Swal from "sweetalert2";

export const userRegistered = () => {
  Swal.fire({
    title: "Usuario registrado",
    icon: "success",
  });
};
