import Product from '../Models/product.js';

export const addItems = async(req,res) => {
    const{name,price,image}=req.body;
    console.log(req.body);
    
    try{
        console.log('ds')
    const result = await Product.create({
        name,
        price,
        image,
    });
    console.log(result)
    }

    catch(error){
        console.log(error);
        res.status(500).json({message:"Something went wrong"})
    }
};

export const viewProduct = async (req, res) => {
    try {
      const allProducts = await Product.find();
      res.status(200).json(allProducts);
    } catch (error) {
      console.log(error);
      res.status(500).json({ messgae: "Smething went wrong" });
    }
  };

  export const deleteProduct = async (req, res) => {
    const {_id} = req.body;
    try {
      const allProducts = await Product.findOne();
        if(Product){
          const result = await Product.deleteOne(Product);
        }
      res.status(200).json(Product);
    } catch (error) {
      console.log(error);
      res.status(500).json({ messgae: "Smething went wrong" });
    }
  };

  export const viewProductById = async (req, res) => {
    const {id} = req.params;
    console.log(req.body)
    try {
      const oneProduct = await Product.findById(id);
      res.status(200).json(oneProduct);
    } catch (error) {
      console.log(error);
      res.status(500).json({ messgae: "Smething went wrong" });
    }
  };

  export const updateProduct = async (req, res) => {
    try {
      const{_id}=req.body;
      console.log(req.body)
      const product = await Product.findByIdAndUpdate(_id, req.body, {new: true});
  console.log(product)
    
  
      res.status(200).json(product);
    } catch (error) {
      console.log(error);
      res.status(500).json({ messgae: "Smething went wrong" });
    }
  };
  

