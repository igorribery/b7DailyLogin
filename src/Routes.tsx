import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Private from "./Pages/Private"
import { RequireAuth } from "./contexts/RequireAuth"


export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/private" element={<RequireAuth> <Private /> </RequireAuth>} />
        </Routes>
    )
}