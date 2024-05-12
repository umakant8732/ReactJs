import * as Yup from "yup";


export const ProfileSchema = Yup.object({
    name: Yup.string().min(5).max(10).required("Name is required"),
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().min(3).max(5).required("Password is required"),
    confirm_password: Yup.string().min(3).max(5).oneOf([Yup.ref('password'), null], "Passwords must match").required("Confirm password is required"),
    profilePic: Yup.mixed()
        .test("fileSize", "File size is too large", value => {
            if (!value) return true; // No file uploaded is considered valid
            return value.size <= 1024 * 1024 * 5; // 5MB limit
        })
        .test("fileType", "Unsupported file format", value => {
            if (!value) return true; // No file uploaded is considered valid
            return ['image/jpeg', 'image/png', 'image/gif'].includes(value.type);
        })
        .required("Profile picture is required"),
});
