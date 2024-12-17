const Banner = () => {
  return (
    <section className="relative bg-[url(https://poonawallafincorp.com/pfca/assets/blog_banner/blog_banner-banner-image-financing-tech-a-guide-to-loans-for-gadgets.jpg)] w-full bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-[90vh] lg:items-center lg:px-8">
        <div className="max-w-xl   ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            Let us find your
            <strong className="block font-extrabold ">
              Forever Gadget Shope
            </strong>
          </h1>

          <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 items-center text-center  gap-4 ">
            <a
              href="#"
              className="block w-[150px] rounded bg-blue-600 px-9 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring "
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
