export class Ingredient{

    //constructor(public name: string,public amount: number){}
    //typeScript provide shortcut to get rid of below code
   public name: string;
    public amount: number;

    constructor(name: string,amount: number){
        this.name=name,
        this.amount=amount

    }


}