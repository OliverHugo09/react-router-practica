import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export const HomeScreen = () => {

    // useContext en React permite acceder a datos globales o compartidos, como el estado
    // o funciones, en componentes secundarios sin necesidad de pasar props manualmente. 
    //Se utiliza en combinación con React.createContext para proporcionar y consumir 
    //valores globales en la jerarquía de componentes sin prop drilling.

    const { user } = useContext(UserContext)

    return (
        <>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Tecnología</th>
                            <th scope="col">Email</th>
                            <th scope="col">Redes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{user.nombre}</th>
                            <td>{user.tecnologia}</td>
                            <td>{user.email}</td>
                            <td>{user.redes}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
