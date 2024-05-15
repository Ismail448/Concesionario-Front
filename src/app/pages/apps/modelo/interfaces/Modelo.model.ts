export interface Modelo {
  id: string,
  nombre: string,
  tipoCoche: string,
  anyoLanzamiento: string,
  //marcaId: number
  nombreMarca: string
  coches?: number[]
}
