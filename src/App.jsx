import { Routes, Route, Navigate } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { HomeScreen } from "./routes/HomeScreen"
import { AboutScreen } from "./routes/AboutScreen"
import { ContactScreen } from "./routes/ContactScreen"
import { UserProvider } from "./context/UserProvider"
import { LoginScreen } from "./routes/LoginScreen"

export const App = () => {
    return (

        //Las propiedades de UserProvider podran ser utilizadas en cualquier componente
        // hijo, en este ejemplo NavBar, HomeScreen, AboutScreen, ContactScren
        <UserProvider>
            <NavBar></NavBar>

            <Routes>
                <Route path='/' element={<HomeScreen></HomeScreen>}></Route>
                <Route path='/about' element={<AboutScreen></AboutScreen>}></Route>
                <Route path='/contact' element={<ContactScreen></ContactScreen>}></Route>
                <Route path='/login' element={<LoginScreen></LoginScreen>}></Route>
                <Route path="/*" element={<Navigate to='/' />}></Route>
            </Routes>
        </UserProvider>

    )
}
