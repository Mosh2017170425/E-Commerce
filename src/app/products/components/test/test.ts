import {Component} from '@angular/core';
@Component({
    selector: 'my-component',
    templateUrl:"./test.html"
})
export class MyComponent {
    filterList = {
        country : ['India', 'USA', 'Japan', 'Australia'],
        sector: ['IT', 'Agriculture', 'Medical']
        //here you can add as many filters as you want.
        };  

//put this function in your ts file.
   filterChange(appliedfilters:any) {
         console.log(appliedfilters);
         /*let you have selected India as country and IT sector.

         you will get an object here i.e.

        { appliedFilterValues: {country: "India",sector: "IT"}
        isFilter: true
        }
         */
         
         //now do your awesome filtering work here.
   }

}