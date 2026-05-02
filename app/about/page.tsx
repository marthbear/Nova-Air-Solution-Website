export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-800 text-white text-center py-24 px-6">
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className="text-xl">Learn more about Nova Air Solutions and our commitment to quality.</p>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
        <p className="text-lg text-gray-600 mb-4">
          Nova Air Solutions is a locally owned and operated HVAC company dedicated to providing
          top-quality heating, cooling, and air quality services to homeowners and businesses in our community.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          With years of experience in the industry, our team of certified technicians is committed
          to delivering fast, reliable, and affordable HVAC solutions tailored to your needs.
        </p>
        <p className="text-lg text-gray-600">
          We believe every customer deserves comfort in their home or business, and we work hard
          to make that a reality every single day.
        </p>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-bold mb-3">Integrity</h3>
            <p className="text-gray-600">We are honest and transparent with every customer, every time.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-bold mb-3">Quality</h3>
            <p className="text-gray-600">We never cut corners. Every job is done right the first time.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-bold mb-3">Customer First</h3>
            <p className="text-gray-600">Your satisfaction is our top priority on every job we take.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
        <ul className="space-y-4 text-lg text-gray-600">
          <li>✅ Licensed and insured technicians</li>
          <li>✅ 24/7 emergency HVAC services</li>
          <li>✅ Upfront and transparent pricing</li>
          <li>✅ Fast response times</li>
          <li>✅ Locally owned and operated</li>
          <li>✅ Satisfaction guaranteed</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-800 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
        <p className="text-lg mb-8">Contact us today and experience the Nova Air Solutions difference.</p>
        <button className="bg-white text-blue-600 font-bold px-8 py-3 rounded-lg cursor-pointer hover:bg-gray-100">
          Contact Us
        </button>
      </section>
    </div>
  );
}
