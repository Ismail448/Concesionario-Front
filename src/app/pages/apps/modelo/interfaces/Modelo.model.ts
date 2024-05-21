import { Marca } from "../../marca/interfaces/marca.model"

export interface Modelo {
  marcas: any
  id: string,
  nombre: string,
  tipoCoche: string,
  anyoLanzamiento: string,
  //marcaId: number
  marca: Marca
  nombreMarca: string
  coches?: number[]
}
