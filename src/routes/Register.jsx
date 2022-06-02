import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import {useForm} from "react-hook-form"
const Register = () => {
//    const [email, setEmail] = useState("henryromero@gmail.com")
//    const [password, setPassword] = useState("123456")

    const navegate = useNavigate()
    const {registerUsuario} = useContext(UserContext)
    const {
         register,
         handleSubmit,
        formState:{errors},
         
        getValues, setError}=useForm({defaultValues:{email: "henry@gmial.com",password: "123123", repassword:"123123"}})

    const onSubmit = async({email, password}) => { 
        try {
            await registerUsuario(email, password)
            console.log("Usuario creado")
            navegate("/")
        } catch (error) {
            console.log(error.code)
/*             if(error.code === "auth/email-already-in-use"){
                console.log("Ya esta registrado este usuario")
            } */
            switch(error.code){
                case"auth/email-already-in-use":
                console.log("Ya esta registrado este usuario")
                setError("email", {
                    message: "Ya esta registrado este usuario"
                })
                break;
                case"auth/invalid-email":
                setError("email", {
                    message: "Email no valido"
                })
                default:
                console.log("Ocurrio un error")
            }
        }
    }
    
    return (
        <>
        <h1>Register</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input 
            type="email"
            placeholder="Ingrese email"
            {...register("email", {
                required: {
                value: true,
                message: "Campo Obligatorio"
            },
            pattern: {
                value: /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
                message: "Formato de email incorrecto",
            }
            })}
        />
            {errors.email && <p>{errors.email.message}</p>}
            <input 
            type="password"
            placeholder="Ingrese password"
            {...register("password", {
                setValueAs: (v) => v.trim(),
                minLength: {
                value: 6,
                message: "Minimo 6 caracteres"
            },
            validate: {
                trim: (v) => {
                    if(!v.trim()){
                     return "Escribe algo"
                    }
                    return true;
                }
            }
        }) }
 />
 {errors.password && <p>{errors.password.message}</p>}
            <input 
            type="password"
            placeholder="Repita password"
            {...register("repassword",{
                setValueAs: (v) => v.trim(),
                validate: {
                    equals: v => v === getValues("password") || "No Coinciden las contraseñas",
                    //message: "No Coinciden las contraseñas"
                }
            })}
 />
 {
     errors.repassword && <p>{errors.repassword.message}</p>
 }
        <button type="submit">Register</button>
        </form>
        </>
    )
}

export default Register;