import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAvailability'
})
export class FilterAvailabilityPipe implements PipeTransform {

  transform(products:any[],checkboxesAvailable:any): any[] {
    let instock= checkboxesAvailable['in-stock'];
    let outstock=checkboxesAvailable['out-stock'];
    if(instock || outstock)
    {
      let filteredProducts;
      filteredProducts= products.filter((product:any)=>{
        return (product.rating.count > 0 && instock ) || (product.rating.count == 0 && outstock)  ;
      });
      return filteredProducts;
    }
    else{
      return products;
    }

  }

}
