import { useContext } from "react"
import { useForm } from "../hooks/useForm"
import { UserContext } from "../context/UserContext"

export const LoginScreen = () => {

    const initialForm = {
        nombre: '',
        tecnologia: '',
        email: '',
        redes: ''
    }

    const { formState, nombre, tecnologia, email, redes, onInputChange } = useForm(initialForm)
    const { setUser } = useContext(UserContext)

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(formState)
        setUser(formState)
    }
    return (
        <>
            <form className="container" onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        name="nombre"
                        value={nombre}
                        onChange={onInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="tecnologia">Tecnología</label>
                    <input
                        type="text"
                        className="form-control"
                        name="tecnologia"
                        value={tecnologia}
                        onChange={onInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        className="form-control"
                        name="email"
                        value={email}
                        onChange={onInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="redes">Redes</label>
                    <input
                        type="text"
                        className="form-control"
                        name="redes"
                        value={redes}
                        onChange={onInputChange} />
                </div>
                <button type="submit" className="btn btn-primary">Registrar Usuario</button>
            </form>
        </>
    )
}
