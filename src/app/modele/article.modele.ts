export interface Article{
  id?:number,
  nom:string,
  prix:number,
  quantite:number,
  type:string,
  disponible:boolean,
  description:string,
  photos:ImageData[]
}
