import * as yup from "yup";
export const ContactValidation = yup.object().shape({
  contacto: yup.string().required("Por favor rellene el campo"),
});
export const loginValidation = yup.object().shape({
    email:yup.string().required().email(),
    password: yup.string().required().min(6, "La contraseña debe de tener minimo 6 caracteres")
})
export const RegisterValidation = yup.object().shape({
    email:yup.string().required().email(),
    password: yup.string().required().min(6, "La contraseña debe de tener minimo 6 caracteres"),
    repeatpassword: yup.string().required().min(6, "La contraseña debe de tener minimo 6 caracteres"),
    firstName:yup.string().required(),
    lastName:yup.string().required(),
    phone:yup.string().required(),

})
export const recuperarContraseñaValidation = yup.object().shape({
    email:yup.string().required().email()
})
export const NuevoCodigoValidation = yup.object().shape({
    email:yup.string().required().email()
})