import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'vuela'
})
export class VuelaPipe implements PipeTransform {
    // transform(value: any, ...args: any[]) {
    //     throw new Error("Method not implemented.");
    // }
    
    transform( valor: boolean ): string {
        return (valor) ? 'vuela' : 'no vuela';
    }
   
}