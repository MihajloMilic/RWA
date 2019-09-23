export class Basket
{
    constructor(id)
    {
        this.id=id;
        this.arrayProducts = new Array();
        this.fullPrice=0;
        this.date=Data.now();
    }
    addProduct(product)
    {
        this.arrayProducts.push(product);
    }
    deleteProduct(idProduct)
    {
        this.arrayProducts = this.arrayProducts.filter(el=>el.id!=idProduct);
    }
    deleteAllProducts()
    {
        this.arrayProducts= new Array();
    }
}