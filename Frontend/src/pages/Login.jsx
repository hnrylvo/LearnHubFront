import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LearnHubLogo from "../assets/learnhub-logo/learnhub-logo.svg";
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        identifier: '',
        password: '',
    });
    const [redirected, setRedirected] = useState(false);

    useEffect(() => {
        // Reiniciar la variable redirected cada vez que se monta el componente
        setRedirected(false);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://confused-tan-shrug.cyclic.app/login', formData);

            if (response.status === 200 && !redirected) {
                // Login exitoso, puedes manejar el token devuelto
                console.log('Login exitoso:', response.data.token);

                // Redirigir a la página JoinScreen después del inicio de sesión
                navigate("/JoinScreen");

                // Marcar que ya se ha redirigido para evitar redirecciones adicionales
                setRedirected(true);
            } else {
                // Manejar errores en el login
                console.error('Error en el login:', response.data.error);
            }
        } catch (error) {
            console.error('Error de red:', error);
        }
    };

    return (
        <section className="bg-gray-200 min-h-screen flex items-center justify-center">
            <div className="flex rounded-2xl shadow-lg p-5">
                <div className="w-full px-16 md:w-1/2">
                    <p className="text-4xl font-bold p-10">Welcome</p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <label htmlFor="identifier">Username or Email:</label>
                        <input
                            type="text"
                            id="identifier"
                            name="identifier"
                            value={formData.identifier}
                            onChange={handleChange}
                            className="p-4 lg:p-2 mt-8 rounded-xl border"
                            required
                        />

                        <div className="relative">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="p-4 lg:p-2 rounded-xl border w-full"
                                required
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="gray"
                                className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
                                viewBox="0 0 16 16"
                            >
                                {/* ... (contenido del ojo) */}
                            </svg>
                        </div>

                        <button
                            type="submit"
                            className="bg-[#002D74] rounded-xl text-white py-3 lg:py-2 hover:scale-105 duration-300"
                        >
                            NEXT
                        </button>
                    </form>

                    <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
                        <hr className="border-gray-400" />
                        <p className="text-center text-sm">OR</p>
                        <hr className="border-gray-400" />
                    </div>

                    <button className="bg-white border py-3 lg:py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
                        {/* ... (icono de Google y texto) */}
                    </button>
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