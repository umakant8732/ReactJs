import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useFormik } from "formik"
import { LoginSchema } from '../validation/LoginSchema';
import { useDispatch, useSelector } from 'react-redux';
import { setUserCredentials } from '../redux/slices/authSlice';
import { useLoginMutation} from '../redux/slices/usersApiSlice';
import { toast } from 'react-toastify';




const initialValues = {
  email: "",
  password: "",
}

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {userInfo} = useSelector((state) => state.authReducer);


  useEffect(() => {
    if (userInfo) {
        navigate('/')
    }
}, [navigate, userInfo])

  const [login] = useLoginMutation()
  const { values, errors, touched, handleBlur, handleSubmit, handleChange } = useFormik({
    initialValues: initialValues,
    validationSchema: LoginSchema,
    onSubmit: async (values,) => {
        setIsLoading(true);
        try {
          const res = await login({...values}).unwrap();
          dispatch(setUserCredentials(res));
          navigate("/")
        } catch (error) {
          toast.error(error.data.error)
        }
       
    }
})

  return (
    <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-center text-2xl font-bold leading-tight text-black">Login to account</h2>
          <p className="mt-2 text-center text-base text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" title="" className="font-medium text-black transition-all duration-200 hover:underline">
              Sign Up
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="mt-8">
            <div className="space-y-5">
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="email" className="text-base font-medium text-gray-900">
                    Email address
                  </label>
                </div>
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Email"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? <p className='form-error text-left text-red-600'>{errors.email}</p> : null}
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-base font-medium text-gray-900">
                    Password
                  </label>
                </div>
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="password"
                  placeholder="Password"
                  name="password"
                  id="password"
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.password && touched.password ? <p className='form-error text-left text-red-600'>{errors.password}</p> : null}
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  {isLoading ? 'Logging in...' : 'Login'} <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>

          <div className="mt-3 space-y-3">
            <button
              type="button"
              className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
            >
              <span className="mr-2 inline-block">
                <svg
                  className="h-6 w-6 text-rose-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                </svg>
              </span>
              Sign up with Google
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
