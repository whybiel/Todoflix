import React from "react"
import { Routes, Route } from "react-router-dom"
import Inicio from "../pages/inicio"
import Todos from "../pages/todos"
import Favoritos from "../pages/favorito"
import Vistos from "../pages/vistos"
import Adicionados from "../pages/adicionados"


export default class App extends React.Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" exact element={<Inicio />}/>
                    <Route path="/todos" element={<Todos />} />
                    <Route path="/favoritos" element={<Favoritos />} />
                    <Route path="/vistos" element={<Vistos />} />
                    <Route path="/adicionados" element={<Adicionados />} />
                </Routes>
            </>
        )
    }
}
