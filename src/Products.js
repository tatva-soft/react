import { useGetProduct } from './func';

const Products = () => {

  const { isLoading, data, isFetching } = useGetProduct();
  console.log(isLoading)

  return <h1>Products</h1>;
};

export default Products;
