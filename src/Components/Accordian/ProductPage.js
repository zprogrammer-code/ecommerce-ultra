import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Products from './Products';



const useProductPage = () => { 
    const [product, setProduct] = useState({})
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedQuantity, setSelectedQuantity] = useState(1);

    const handleQuanityChange = ({target:{value}}) => {
        setSelectedQuantity(value);
    }

    useEffect(() => {
    Products.then(product => {
        setProduct(product);
      });
    }, [product]);

 useEffect(() => {
    if (product && product.attributes) {
        const { attributes } = product;
    setSelectedSize(attributes.sizes[0].name);
  }
 }, [product, setSelectedSize]);



 
 return {
    product,
    selectedSize,
    selectedQuantity,
    setSelectedSize,
    handleQuanityChange
         }
        
        }



export default useProductPage;



 /*const getImage = (colour) => {
    const { attributes } = product;
    const image = attributes.images.data.find((image) =>
        image.attributes.name.includes(colour)
        ); 
        return image.attributes.url || "";
 };*/

 /*     const {id: productId} = useParams();
 
 
 useEffect(() => {
 const fetchCategories = async () => {
    try {
        const {data: { data },} = await axios.get('');
        setProduct(data);
        } catch (error) {
        console.log({error});
    }
};
    if(productId) {
        fetchCategories();
    }
 },[productId]);   */  