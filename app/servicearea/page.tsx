"use client";
import { useRouter } from "next/navigation";

export default function ServiceArea() {
  const router = useRouter();

  const serviceAreas = [
    { city: "Downtown", zip: "12345", available: true },
    { city: "Northside", zip: "12346", available: true },
    { city: "Southside", zip: "12347", available: true },
    { city: "Eastwood", zip: "12348", available: true },
    { city: "Westfield", zip: "12349", available: true },
    { city: "Central Heights", zip: "12350", available: true },
    { city: "Riverside", zip: "12351", available: true },
    { city: "Lakewood", zip: "12352", available: true },
    { city: "Hillcrest", zip: "12353", available: true },
    { city: "Oak Park", zip: "12354", available: true },
    { city: "Pine Valley", zip: "12355", available: true },
    { city: "Maple Grove", zip: "12356", available: true },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white text-center py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Service Area</h1>
          <p className="text-xl text-blue-100">Proudly serving our local community and surrounding areas.</p>
        </div>
      </section>

      {/* Service Area Overview */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Areas We Serve</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Nova Air Solution provides professional HVAC services throughout the greater metropolitan area. Check below to see if we service your location.
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 mb-16 shadow-inner">
            <div className="bg-white rounded-xl h-80 flex items-center justify-center shadow-md">
              <div className="text-center">
                <svg className="w-20 h-20 text-blue-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <p className="text-gray-500 text-lg font-medium">Interactive Service Area Map</p>
                <p className="text-gray-400">Coming Soon</p>
              </div>
            </div>
          </div>

          {/* Cities Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {serviceAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-gray-800">{area.city}</h3>
                    <p className="text-sm text-gray-500">ZIP: {area.zip}</p>
                  </div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Radius Info */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">30-Mile Radius</h3>
              <p className="text-gray-600">We service all areas within a 30-mile radius of our main office location.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Same-Day Service</h3>
              <p className="text-gray-600">Most service calls within our primary area receive same-day or next-day appointments.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">No Travel Fees</h3>
              <p className="text-gray-600">Standard service areas have no additional travel charges included.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Not in Service Area */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-10">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Do not See Your Area?</h2>
            <p className="text-gray-600 mb-6 text-lg">
              We are constantly expanding our service area. If you do not see your location listed, contact us anyway. We may still be able to help or recommend a trusted provider in your area.
            </p>
            <button
              onClick={() => router.push("/contact")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-md cursor-pointer"
            >
              Contact Us to Check Availability
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white text-center py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to Schedule Service?</h2>
          <p className="text-xl mb-10 text-blue-100">Book your appointment today and experience the Nova Air Solution difference.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push("/service-requests")}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-lg cursor-pointer transition-all transform hover:scale-105 shadow-lg"
            >
              Request Service
            </button>
            <button
              onClick={() => router.push("/contact")}
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-lg cursor-pointer transition-all border-2 border-white/30"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
