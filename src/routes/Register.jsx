import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const Register = () => {
    const [email, setEmail] = useState("henryromero@gmail.com")
    const [password, setPassword] = useState("123456")

    const navegate = useNavigate()

    const {registerUsuario} = useContext(UserContext)

    const handleSubmit = async(e) =>{
        e.preventDefault()
        console.log("Prueba de el form:", email, password)
        try {
            await registerUsuario(email, password)
            console.log("Usuario creado")
            navegate("/")
        } catch (error) {
            console.log(Error.code);
        }
    } 
    return (
        <>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <input 
            type="email"
            placeholder="Ingrese email"
            value={email}
            onChange={(e) =>setEmail(e.target.value)} />
            <input 
            type="password"
            placeholder="Ingrese password"
            value={password}
            onChange={(e) =>setPassword(e.target.value)} />
        <button type="submit">Register</button>
        </form>
        </>
    )
}

export default Register;