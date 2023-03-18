import data from './data.js';
let productsData=[];

(data.data.products).forEach((key,value) => {
    console.log(key._id);
    let pdata = {};
    pdata.id= key._id;
    pdata.img= key.imageURLs[0];
    pdata.title= key.fulhausProductName;
    pdata.rating= "★★★★";
    pdata.price= key.retailPrice;
    pdata.quantity=1;
     productsData.push(pdata);
  });
 
  export default productsData;