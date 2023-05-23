class ProductManager {
    constructor() {
      this.products = [];
    }

    static id = 0;

    addProduct(title,description,price,thumbnail,code,stock){
      for(let i=0; i < this.products.length; i++){
        if(this.products[i].code === code){
          console.log(`El Codigo ${code} ya existe`);
          break;
        }
      }
      

      const newProduct = {title,description,price,thumbnail,code,stock,}

      if(!Object.values(newProduct).includes(undefined)){
      ProductManager.id++;
      this.products.push({...newProduct,id:ProductManager.id})
      }else{
        console.log("Debe Completar Todos los Campos")
      }
      
    }
  
    
    getProduct(){
      return this.products;
    }

    exist(id){
      return this.products.find((producto) => producto.id === id);
    }
    getProductById(id){
      !this.exist(id) ? console.log("Not Found") : console.log(this.exist(id));
    }



  }

  const productos = new ProductManager;

  productos.addProduct("titulo1","description1",100,"image1","abc123",5)
  productos.addProduct("titulo2","description2",100,"image2","abc123",7)

  console.log(productos.getProduct())
