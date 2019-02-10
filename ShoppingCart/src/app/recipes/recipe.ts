import { Ingredient } from '../shared/ingrident'
export class Recipe{
    public name : string;
    public decription : string;
    public imagePath : string;
    public ingridents: Ingredient[];

    constructor(name : string,decription : string,imagePath : string , ingridents: Ingredient[]){
        this.name=name,
        this.decription=decription,
        this.imagePath=imagePath,
        this.ingridents= ingridents
    }

}

