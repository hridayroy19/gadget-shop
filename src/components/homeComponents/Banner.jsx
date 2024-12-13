const Banner = () => {
  return (
    <div
      className="hero min-h-screen bg-cover"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/3d-rendering-cartoon-shopping-cart_23-2151680610.jpg?t=st=1733847219~exp=1733850819~hmac=d4ca9fefa1b0857a2e5b1ea759630f31c529effa56862cba3e5cd714a42924e3&w=740)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
