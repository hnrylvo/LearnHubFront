import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LearnHubLogo from "../assets/learnhub-logo/learnhub-logo.svg";
import axios from "axios";
import { UserProvider } from "../UserContext";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(() => ({
    identifier: localStorage.getItem("identifier") || "",
    password: "",
  }));
  const [redirected, setRedirected] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setRedirected(false);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://confused-tan-shrug.cyclic.app/login",
        formData
      );

      if (response.status === 200 && !redirected) {
        console.log("Login exitoso:", response.data.token);

        const Rol = response.data.roles && response.data.roles.length > 0
          ? response.data.roles[0]
          : "user";

        if (Rol === "user") {
          navigate("/JoinScreen");
        } else if (Rol === "instructor") {
          navigate("/JoinScreenTutor");
        }

        setRedirected(true);
        setError(null);
      } else {
        console.error("Error en el login:", response.data.error || "Undefined error");
        setError("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error de red:", error);
      setError("Error de red. Por favor, inténtalo de nuevo más tarde.");
    }
  };

  return (
    <section className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="flex rounded-2xl shadow-lg p-5">
        <div className="w-full px-16 md:w-1/2">
          <p className="text-4xl font-bold p-10">Welcome</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              id="identifier"
              name="identifier"
              value={formData.identifier}
              onChange={handleChange}
              className="p-4 lg:p-2 mt-8 rounded-xl border"
              required
            
              placeholder="Email"
              autoComplete="email"
            
            />

            <div className="relative">
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="p-4 lg:p-2 rounded-xl border w-full"
                required
                placeholder="Password"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="gray"
                className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
                viewBox="0 0 16 16"
              >
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
              </svg>
            </div>

            <button
              type="submit"
              className="bg-[#002D74] rounded-xl text-white py-3 lg:py-2 hover:scale-105 duration-300"
            >
              NEXT
            </button>
          </form>
        </div>

        <div className="flex items-center">
          <img
            src={LearnHubLogo}
            alt="LearnHub Logo"
            className="w-450 h-64 mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
