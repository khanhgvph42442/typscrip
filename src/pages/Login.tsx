import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import instance from "~/apis";
import { TUser } from "~/interfaces/Users";

const userSchema = Joi.object({
  email: Joi.string().email({ tlds: false }).required(),
  password: Joi.string().required().min(6),
});
const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUser>({
    resolver: joiResolver(userSchema),
  });
  const onSubmit =  (user: TUser) => {
    (async () => {
      const { data } = await instance.post("/login", user);
      sessionStorage.setItem("token", JSON.stringify(data.accessToken));
      sessionStorage.setItem("user", JSON.stringify(data));
      const accessToken = sessionStorage.getItem('user');
      const role = accessToken ? JSON.parse(accessToken).user.role : null;
      console.log(role)
      if (role === "admin") {
        navigate("/admin")
        location.reload()
      } else{
        navigate("/")
        location.reload()
      }
    })();
  };
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Đăng nhập</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
            <p className="text-center text-lg font-medium"></p>

            <div>
              <label  className="sr-only">Email</label>

              <div className="relative">
                <input id="email"
                  type="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                  {...register("email", {required: true})}
                />
                {errors.email && <span className="text-danger">{errors.email.message}</span>}
              </div>
            </div>

            <div>
              <label  className="sr-only">Password</label>

              <div className="relative">
                <input id="password"
                  type="password"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter password"
                  {...register("password", {required: true,minLength:6})}
                />
                 {errors.password && <span className="text-danger">{errors.password.message}</span>}
              </div>
            </div>
            <Link to="/register">Register</Link>
            <button
              type="submit"
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
};

export default Login;