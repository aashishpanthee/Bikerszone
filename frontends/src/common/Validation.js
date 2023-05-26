import * as Yup from "yup";
export const ValidateUser = Yup.object().shape({
  name: Yup.string().required("*Name is required"),
  password: Yup.string().max(70, "Too Long!").required("*Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("*Confirm password required"),
  email: Yup.string()
    .email("*Must be in email format")
    .required("*Email is required"),
});
export const ValidateBikeAdd = Yup.object().shape({
  bikename: Yup.string().required("*BikeName is required"),
});
