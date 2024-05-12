import * as Yup from "yup";

export const SignUpSchema = Yup.object({
    name: Yup.string().min(5).max(10).required("name is required"),
    email : Yup.string().email().required("email is required"),
    password : Yup.string().min(3).max(5).required("password is required"),
    confirm_password : Yup.string().min(3).max(5).oneOf([Yup.ref('password'),null],"password must match").required("confirm password in required"),
})