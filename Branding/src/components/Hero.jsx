const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVES THE BEST</h1>
        <p>
          The company manufactures different shoes for a wide variety of sports,
          such as basketball, football, golf, soccer, baseball, snowboarding,
          hockey, tennis, and volleyball manufactures different shoes for a wide
          variety of sports, such as basketball
        </p>
        <div className="hero-btns">
          <button>Shop now</button>
          <button className="category-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src="/images/flipkart.png" alt="flipkart-logo" />
            <img src="/images/amazon.png" alt="amazon-logo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/hero-image.png" alt="hero-logo" />
      </div>
    </main>
  );
};

export default HeroSection;
