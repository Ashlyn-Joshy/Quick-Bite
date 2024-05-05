import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div className="m-5 text-center">
      <h1 className="font-bold text-3xl text-green-600 mb-4">
        About Quick Bites
      </h1>

      <p className="mb-3">
        Welcome to Quick Bites, your ultimate destination for quick, delicious,
        and convenient food ordering. At Quick Bites, we're passionate about
        revolutionizing the way people enjoy their favorite meals. Whether
        you're craving a hearty burger, a refreshing salad, or a sweet treat,
        we've got you covered.
      </p>

      <h2 className="font-bold text-3xl text-green-600 mb-4">Our Mission</h2>
      <p className="mb-3">
        Our mission at Quick Bites is simple: to provide our customers with a
        seamless and enjoyable food ordering experience. We strive to offer a
        diverse selection of high-quality dishes, prepared with fresh
        ingredients and delivered with speed and efficiency. Customer
        satisfaction is at the heart of everything we do, and we're committed to
        exceeding your expectations every time you order with us.
      </p>

      <h2 className="mb-4 text-green-600 font-bold text-3xl">Our Team</h2>
      <p className="mb-3">
        Behind Quick Bites is a dedicated team of food enthusiasts,
        technologists, and customer service professionals. We're united by our
        passion for great food and our drive to innovate in the food delivery
        industry.
      </p>

      <h2 className="mb-4 text-green-600 font-bold text-3xl">Join Us</h2>
      <p className="mb-3">
        Interested in joining the Quick Bites team? We're always on the lookout
        for talented individuals who share our passion for food and technology.
      </p>

      <p className="mb-3">
        Thank you for choosing Quick Bites for your food ordering needs. We look
        forward to serving you delicious meals with a side of convenience!
      </p>
      <Outlet />
    </div>
  );
};

export default About;
