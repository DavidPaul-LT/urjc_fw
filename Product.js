class Product{
    //---From each product file
    constructor(name,price,colors,sizes,page){
        this.name = name; //---String(40)
        this.price = price; //---Float
        this.colors = colors; //---String[7] 
        this.sizes = sizes; //---Char[6] {xs,s,m,l,xl,xxl}
        this.page = page; //---String(100)
    }
    //---Page whose product was salected
    visit_page(){
        return `<a href="${this.page}">Visitar Página</a>`;
    }
    /* 
    Each product has its two output representations: 
    1) ReducedForm: only product's name, colors and price are shown {Application: category page,cart page}
        Implemented as hyperlink to product page
    2) ExtendedForm: all product features are shown {Application: product page}
        Has its own page generator* {Page generator: generates a page based on product details}
    */

}
console.log(5+1);
let a = 300;
document.write(`Hola tu nota es ${a}`);