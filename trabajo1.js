class ProductManager {
  constructor() {
    this.products = [
      {
        id: 1,
        title: "Producto1",
        description: "descripción del producto",
        price: 74,
        thumbnail: "url:",
        code: "s45ef7",
        stock: 56,
      },
      {
        id: 2,
        title: "Producto2",
        description: "descripción del producto2",
        price: 85,
        thumbnail: "url:2",
        code: "asdf1234",
        stock: 5,
      },
      {
        id: 3,
        title: "Producto3",
        description: "descripción del producto3",
        price: 800,
        thumbnail: "url:3",
        code: "3458545",
        stock: 0,
      },
    ];
  }

  
  addProduct(title, description, price, thumbnail, code, stock) {
  
    let check = false;
    this.products.forEach((product) => {
      if (product.code === code) {
          check = true;
      }
    });

  
    if (check) {
      return "EL codigo de producto ya existe";
    } else {
        let id = 0;
      if (this.products.length === 0) {
        id = 1;
      } else {
        id = this.products[this.products.length - 1].id + 1;
      }

  
      let product = {
        id,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };

      this.products.push(product);
      return "El producto fue agregado con exito";
    }
  }

  
  getProducts() {
  
    return this.products;
  }

  
  getProductById(id) {
  
    let idFind = -1;
    this.products.forEach((product, index) => {
      if (product.id == id) {
  
        idFind = index;
      }
    });

  
    if (idFind != -1) {
      return this.products[idFind];
    } else {
  
      return "Not found";
    }
  }
}

module.exports = ProductManager;