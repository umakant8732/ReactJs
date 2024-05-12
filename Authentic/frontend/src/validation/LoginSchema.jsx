import * as Yup from "yup";

export const LoginSchema = Yup.object({
    email : Yup.string().email().required("Email is required"),
    password : Yup.string().min(3).max(5).required("password is required"),
})
