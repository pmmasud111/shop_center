import Image from "next/image";

const ProductDetails = () => {
  return (
    <div className="h-screen">
      <section className="bg-[#fafaf2] h-full py-20">
        <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
          <div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
            <Image
              width={100}
              height={100}
              src="/products/iphone.jpg"
              className="w-[400px] h-[500px] mx-auto object-cover"
              alt=""
            />

            <div className="flex gap-4 mt-4">
              <Image
                width={100}
                height={100}
                src="/products/iphone.jpg"
                className="w-[100px] h-[100px] mx-auto border object-cover"
                alt=""
              />
              <Image
                width={100}
                height={100}
                src="/products/iphone-2.jpg"
                className="w-[100px] h-[100px] mx-auto border object-cover"
                alt=""
              />
              <Image
                width={100}
                height={100}
                src="/products/iphone-3.jpg"
                className="w-[100px] h-[100px] mx-auto border object-cover"
                alt=""
              />
              <Image
                width={100}
                height={100}
                src="/products/iphone-4.jpg"
                className="w-[100px] h-[100px] mx-auto border object-cover"
                alt=""
              />
            </div>
          </div>
          <div className="w-full lg:w-5/12">
            <h1 className="italic text-xl lg:text-3xl font-serif font-semibold">
              iPhone 9
            </h1>
            <span className="text-[#919090] my-3">Smartphone</span>
            <div className="mt-3 flex items-center justify-start gap-1">
              <Image width={100} height={100} src="/svg/star.svg" alt="" />
              <Image width={100} height={100} src="/svg/star.svg" alt="" />
              <Image width={100} height={100} src="/svg/star.svg" alt="" />
              <Image width={100} height={100} src="/svg/star.svg" alt="" />
              <Image width={100} height={100} src="/svg/star.svg" alt="" />
            </div>
            <hr className="my-5 bg-black" />

            <div>
              <p className="my-3">
                <span className="text-rose-600 opacity-60 line-through">
                  $205.00
                </span>
                <span className="font-bold text-2xl">$195.00</span>
              </p>
            </div>
            <div>
              <p className="leading-7">
                Enhance your dining space with this sleek, contemporary dining
                table, crafted from high-quality solid wood with a warm finish.
                Its sturdy construction and minimalist design make it a perfect
                addition for any home looking for a touch of elegance.
                Accommodates up to six guests comfortably and includes a
                striking fruit bowl centerpiece. The overhead lighting is not
                included.
              </p>

              <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
                Add To Cart - $195
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
