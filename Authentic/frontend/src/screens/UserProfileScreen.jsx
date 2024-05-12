import { useEffect, useState } from 'react';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ProfileSchema } from '../validation/ProfileSchema';
import { useUpdateProfileMutation } from '../redux/slices/usersApiSlice';
import { setUserCredentials } from '../redux/slices/authSlice';
import { toast } from 'react-toastify';
export default function UserProfileScreen() {

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    profilePic: null,
  }

  const [isLoading, setIsLoading] = useState(false)
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.authReducer);
  const [updateProfile] = useUpdateProfileMutation()

  const { values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues: initialValues,
    validationSchema: ProfileSchema,
    onSubmit: async () => {
      setIsLoading(true);
      try {
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('email', values.email);
        formData.append('password', values.password);
        formData.append('confirm_password', values.confirm_password);
        formData.append('profilePic', values.profilePic);


        const res = await updateProfile(formData).unwrap();
        console.log(res);
        const imageUrl = `http://localhost:5000/${res.profilePic}`;
        setImage(imageUrl);
        dispatch(setUserCredentials({ ...res }))
        toast.success("profile updated")
      } catch (error) {
        console.log(error.data.error);
      }
    }
  });


  console.log(image);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setFieldValue("profilePic", file);
      };
      reader.readAsDataURL(file);
    }
  };


  return (
    <div className="max-w-lg mx-auto bg-white rounded-md shadow-md overflow-hidden mt-5">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">User Profile</h2>
        <form className='text-left' onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name ? <p className='form-error text-left text-red-600'>{errors.name}</p> : null}

          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email ? <p className='form-error text-left text-red-600'>{errors.email}</p> : null}

          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="current-password"
              className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}

            />
            {errors.password && touched.password ? <p className='form-error text-left text-red-600'>{errors.password}</p> : null}

          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="confirm_password"
              id="confirm_password"
              autoComplete="current-password"
              className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirm_password}
            />
            {errors.confirm_password && touched.confirm_password ? <p className='form-error text-left text-red-600'>{errors.confirm_password}</p> : null}

          </div>
          <div className="mb-4">
            <label htmlFor="photo" className="block text-sm font-medium text-gray-700 mb-1">Photo</label>
            <div className="flex items-center">
              {image ? (
                <img src={image} alt="User" className="w-16 h-16 rounded-full mr-4" />
              ) : (
                <UserCircleIcon className="w-16 h-16 text-gray-300 mr-4" />
              )}
              <div>
                <input
                  id="photo"
                  name="profilePic"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
                <label htmlFor="photo" className="cursor-pointer text-indigo-600 hover:text-indigo-700">Choose a photo</label>
                {errors.profilePic && touched.profilePic ? <p className='form-error text-left text-red-600'>{errors.profilePic}</p> : null}

              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className=" bg-slate-800 text-white px-4 py-2 rounded-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
