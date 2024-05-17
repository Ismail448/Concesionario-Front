import { Modelo } from "../../modelo/interfaces/Modelo.model"

export interface Coche {
    modeloId: string
    id: number
    color: string
    matricula: string
    precio: number
    fechaFabricacion: Date
    nombreModelo: string
}
