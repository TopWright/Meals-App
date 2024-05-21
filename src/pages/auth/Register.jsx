import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { registerUser } from "../../services/AuthApi";
import { useProtectedRoutesContext } from "../../context/ProtectedRouteContext";
import { RenderErrorMessage, RenderSuccessMessage } from "../../helpers";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const { setUser, setToken } = useProtectedRoutesContext();

  const queryClient = useQueryClient();

  const initialValues = {
    name: name,
    email: email,
    password: password,
  };

  const { mutate, isPending } = useMutation({
    mutationFn: registerUser,
    onSuccess: async (data) => {
      queryClient.invalidateQueries({ queryKey: ['register'] });
      setUser(data.data);
      setToken(data.token);
      RenderSuccessMessage(data.message);
      navigate('/auth/login');
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
      <h1 className="text-5xl font-semibold mb-20">Top Meals - Register</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

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
        <button className="btn-primary" disabled={isPending}>Register</button>
        <div className="flex gap-5 items-center justify-center mt-5">
          <p className="text-3xl">Already have an account?</p>
          <Link to={'/auth/login'} className="underline text-2xl cursor-pointer">
            Login
          </Link>
        </div>
      </form>

    </div>
  )
}

export default Register
