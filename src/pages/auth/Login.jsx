import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { loginUser } from "../../services/AuthApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { RenderErrorMessage, RenderSuccessMessage, SetToStorage } from "../../helpers";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const queryClient = useQueryClient();

  const initialValues = {
    email: email,
    password: password,
  };

  const { mutate, isPending } = useMutation({
    mutationFn: loginUser,
    onSuccess: async (data) => {
      queryClient.invalidateQueries({ queryKey: ['register'] })
      SetToStorage('user', data.data)
      RenderSuccessMessage(data.message);
      navigate('/');
    },
    onError: (error) => {
      RenderErrorMessage(error.message);
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(initialValues)
  };


  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h1 className="text-5xl font-semibold mb-20">Top Meals - Login</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="relative">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type={visible ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {visible ? (
            <BsEye className="view-pwd cursor-pointer" size={20} onClick={() => setVisible((prevState) => !prevState)} />
          ) : (
            <BsEyeSlash className="view-pwd cursor-pointer" size={20} onClick={() => setVisible((prevState) => !prevState)} />
          )}
        </div>

        <button className="btn-primary" disabled={isPending}>Login</button>


        <div className="flex gap-5 items-center justify-center mt-5">
          <p className="text-3xl">Dont have an account?</p>
          <Link to={'/auth/register'} className="underline text-2xl cursor-pointer">
            Register
          </Link>
        </div>
      </form>

    </div>
  )
}

export default Login
