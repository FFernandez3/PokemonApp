/*clase publica Pokemon */
export interface Pokemon{
    id:number,
    name: string;
    height: number;
    weight: number;
    image: string;
    types: string[];
    weaknesses: string[];

}