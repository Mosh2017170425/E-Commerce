import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCategory'
})
export class FilterCategoryPipe implements PipeTransform {

  transform(products:any[], categoriescheckboxes:any):any[]{
    // if at least checkbox checked it will return true
    let Checked = Object.values(categoriescheckboxes).includes(true);
    if(Checked)
    {

      let filteredProducts=[];
      filteredProducts= products.filter((product:any)=>{
        let category = product.category;  
        return categoriescheckboxes[category];     
      });
      return filteredProducts;
    }
    else{
      console.log(Checked)
      return products
    }
  }

}
