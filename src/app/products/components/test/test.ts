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

//on init product details

  // let category= this.activatedRoute.snapshot.paramMap.get('category');
    // this.getCategoryProducts(category);
    // this.categoryProducts=[
    //     {id:1,title:"ee",category:'elec',price:200,rating:{rate:3,count:0}},
    //     {id:2,title:"we",category:'women',price:1000,rating:{rate:1,count:3}},
    //     {id:3,title:"man",category:'man',price:900 ,rating:{rate:5,count:5}},
    //     {id:4,title:"elec",category:'elec',price:1000,rating:{rate:2,count:10}},
    //     {id:5,title:"man manman manma nmanm anmanm anmanman manmanmanma nmanmanman",category:'man',price:2000 ,rating:{rate:4,count:0}},
    //     {id:6,title:"man",category:'man',price:3000 ,rating:{rate:3,count:3}},
    //   ]
    //   this.activatedRoute.params.subscribe(({id})=>{
    //     this.quantity = 1;
    //     this.relatedProducts = this.categoryProducts.filter((item)=>{
    //       if(id==item.id){
    //         this.product=item;
    //       }
    //       return id != item.id
    //     });
    //     // this.imageSrc=this.product.image;
    //     this.product.images=[
    //       'assets/images/slick-list/jewelery-1.jpg',
    //       'assets/images/slick-list/electronics-2.jpg',
    //       'assets/images/slick-list/electronics-3.jpg',
    //       'assets/images/slick-list/women-3.jpg',
    //       'assets/images/slick-list/women-2.jpg',
    //       'assets/images/slick-list/women-1.jpg'
    //     ];
    //     this.product.description="Candidates are working together in one of the following Suggested Projects"+
    //         "product based program that will empower you to learn the"+
    //         "latest technologies in both MEARN and MERN stack"+
    //         "development technologies and tools. ";
    //   });
    //   this.imageSrc=this.product.images[0];


    //
     // this.slides = [
    //   {img: "assets/images/slick-list/women-1.jpg",title:"Women's Clothing"},
    //   {img: "assets/images/slick-list/men-1.jpg",title:"Men's Clothing"},
    //   {img: "assets/images/slick-list/women-2.jpg",title:"women's Clothing"},
    //   {img: "assets/images/slick-list/electronics-2.jpg",title:"Electronics"},
    //   {img: "assets/images/slick-list/jewelery-1.jpg",title:"Jewelery"},
    //   {img: "assets/images/slick-list/men-2.jpg",title:"Men's Clothing"},
    //   {img: "assets/images/slick-list/electronics-1.jpg",title:"Electronics"},
    //   {img: "assets/images/slick-list/electronics-3.jpg",title:"Electronics"},
    //   {img: "assets/images/slick-list/jewelery-2.jpg",title:"Jewelery"},
    //   {img: "assets/images/slick-list/women-3.jpg",title:"Women's Clothing"}
    // ];


     // this.products=[
    //         {id:1,title:"ee",category:'Electronics',price:200,rating:{rate:3,count:0},image:'assets/images/slick-list/electronics-1.jpg'},
    //         {id:2,title:"we",category:"Women's Clothing",price:1000,rating:{rate:1,count:3},image:'assets/images/slick-list/women-3.jpg'},
    //         {id:3,title:"man",category:"Men's Clothing",price:900 ,rating:{rate:5,count:5},image:'assets/images/slick-list/men-2.jpg'},
    //         {id:4,title:"elec",category:'Electronics',price:1000,rating:{rate:2,count:10},image:'assets/images/slick-list/electronics-2.jpg'},
    //         {id:5,title:"man manman manma nmanm anmanm anmanman manmanmanma nmanmanman",category:"Men's Clothing",price:2000 
    //         ,rating:{rate:4,count:0},image:'assets/images/slick-list/men-3.jpg'},
    //         {id:6,title:"man",category:"Men's Clothing",price:3000 ,rating:{rate:3,count:3},image:'assets/images/slick-list/men-3.jpg'},
    //       ]
    // this.categories=['man','elec','women'];
    // this.checkboxCategory={'man':false,'elec':false,'women':false}       