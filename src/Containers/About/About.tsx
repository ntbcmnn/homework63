const About = () => {
  return (
    <div className="container d-flex flex-column align-items-center gap-4 mb-5">
      <h1 className="mb-4">About us</h1>

      <div className="d-flex gap-3 w-50 bg-dark text-light p-4 rounded-4">
        <i className="bi bi-1-circle fs-3"></i>
        <p>Welcome to our blog! We’re passionate about sharing unique stories, valuable insights, and thought-provoking
          ideas. Our mission is to inspire curiosity, foster creativity, and connect with readers who are just as eager
          to explore new perspectives.</p>
      </div>

      <div className="d-flex gap-3 w-50 bg-dark text-light p-4 rounded-4">
        <i className="bi bi-2-circle fs-3"></i>
        <p>Founded on the belief that knowledge and creativity should be accessible to everyone, we cover a diverse
          range of topics—from travel and lifestyle to technology and personal development. Each post is crafted with
          care, aiming to engage, educate, and entertain.</p>
      </div>

      <div className="d-flex gap-3 w-50 bg-dark text-light p-4 rounded-4">
        <i className="bi bi-3-circle fs-3"></i>
        <p>We are a small but dedicated team, constantly on the lookout for fresh inspiration and ideas. Whether you’re
          here to learn something new, find inspiration, or just enjoy a good story, we’re glad to have you along for
          the journey.</p>
      </div>

      <div className="d-flex gap-3 w-50 bg-dark text-light p-4 rounded-4">
        <i className="bi bi-4-circle fs-3"></i>
        <p>Thank you for visiting our page, and we hope to become one of your favorite places to return to for a
          refreshing read.</p>
      </div>
    </div>
  );
};

export default About;