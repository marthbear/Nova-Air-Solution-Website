export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-800 text-white text-center py-24 px-6">
        <h1 className="text-5xl font-bold mb-4">Nova Air Solution</h1>
        <p className="text-xl mb-8">Your trusted HVAC experts for heating, cooling, and air quality solutions.</p>
        <button className="bg-white text-blue-600 font-bold px-8 py-3 rounded-lg cursor-pointer hover:bg-gray-100">
          Request a Service
        </button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-bold mb-3">AC Repair & Installation</h3>
            <p>Fast and reliable air conditioning repair and installation services for your home or business.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-bold mb-3">Heating Services</h3>
            <p>Keep your home warm with our expert heating repair, maintenance, and installation services.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-bold mb-3">Air Quality</h3>
            <p>Improve your indoor air quality with our air purification and ventilation solutions.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-bold mb-3">Maintenance Plans</h3>
            <p>Preventative maintenance plans to keep your HVAC system running efficiently year round.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-bold mb-3">Emergency Service</h3>
            <p>24/7 emergency HVAC services available when you need us most.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-bold mb-3">Commercial HVAC</h3>
            <p>Full service commercial HVAC solutions for businesses of all sizes.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Nova Air Solutions?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto text-center">
          <div>
            <h3 className="text-xl font-bold mb-2">Licensed & Insured</h3>
            <p className="text-gray-600">Fully licensed and insured technicians you can trust.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">24/7 Availability</h3>
            <p className="text-gray-600">We are available around the clock for emergencies.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Affordable Pricing</h3>
            <p className="text-gray-600">Competitive pricing with no hidden fees.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Fast Response</h3>
            <p className="text-gray-600">Quick response times to get your system running fast.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-800 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-8">Contact us today for a free estimate on any HVAC service.</p>
        <button className="bg-white text-blue-600 font-bold px-8 py-3 rounded-lg cursor-pointer hover:bg-gray-100">
          Contact Us
        </button>
      </section>
    </div>
  );
}
