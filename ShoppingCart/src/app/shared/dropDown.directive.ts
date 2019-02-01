import { Directive, HostBinding, HostListener } from '@angular/core'

@Directive({
    selector:'[dropdirective]'
})

export class dropDown{

    @HostBinding('class.open') isOpen =false;

    @HostListener('click') onOpen(){
        this.isOpen =! this.isOpen;
    }
}
