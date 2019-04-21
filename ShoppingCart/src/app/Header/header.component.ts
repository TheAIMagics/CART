import  { Component } from '@angular/core';
import { dataStorageService } from '../shared/data-storage.service'
import { Response} from '@angular/http'
@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent{

    constructor( private dataStorage : dataStorageService){}

    onSaveData(){
        this.dataStorage.storeRecipes()
        .subscribe(
            (res )=>{
                console.log(res)
            }
        );
    }

    onFetchData(){
        this.dataStorage.getRecipes();
    }
}