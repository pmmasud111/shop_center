import ProductDetails from "@/app/Components/productDetails";

const page = ({ params: { id } }) => {
  return (
    <div>
      <ProductDetails />
    </div>
  );
};

export default page;
