import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {
    // transform(value: any, ...args: any[]) {
    //     throw new Error("Method not implemented.");
    // }
    
    transform( valor: string, enMayusculas: boolean = true ): string {
        return (enMayusculas) ? valor.toUpperCase() : valor.toLowerCase();
    }
   
}