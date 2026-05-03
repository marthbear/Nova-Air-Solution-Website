"use client";

import { useState } from "react";
import { addServiceRequest } from "@/lib/serviceRequests";

const SERVICE_TYPES = [
  { value: "service_call", label: "Service Call", description: "System not working properly" },
  { value: "preventative_maintenance", label: "Preventative Maintenance", description: "Regular system checkup" },
  { value: "system_replacement", label: "System Replacement", description: "New installation or upgrade" },
  { value: "speak_with_specialist", label: "Speak with Specialist", description: "Consultation with our team" },
];

type FormData = {
  name: string;
  phone: string;
  email: string;
  address: string;
  serviceType: string;
  description: string;
  preferredDate: string;
};

const emptyForm: FormData = {
  name: "",
  phone: "",
  email: "",
  address: "",
  serviceType: "",
  description: "",
  preferredDate: "",
};

export default function ServiceRequests() {
  const [formData, setFormData] = useState<FormData>(emptyForm);
  const [isEmergency, setIsEmergency] = useState<boolean | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    if (field === "serviceType" && e.target.value !== "service_call") {
      setIsEmergency(null);
    }
  };

  const handleSubmit = async (e: { preventDefault(): void }) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.name || !formData.phone || !formData.description) {
      setErrorMsg("Please fill in all required fields.");
      return;
    }
    if (!formData.serviceType) {
      setErrorMsg("Please select a service type.");
      return;
    }

    setStatus("submitting");
    try {
      await addServiceRequest({
        name: formData.name,
        phone: formData.phone,
        email: formData.email || undefined,
        address: formData.address || undefined,
        serviceType: formData.serviceType,
        isEmergency: isEmergency ?? undefined,
        description: formData.description,
        preferredDate: formData.preferredDate || undefined,
      });
      setStatus("success");
      setFormData(emptyForm);
      setIsEmergency(null);
    } catch {
      setStatus("error");
      setErrorMsg("Failed to submit request. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white text-center py-24 px-6 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">Request Submitted!</h1>
            <p className="text-xl text-blue-100">Thank you for choosing Nova Air Solution</p>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-50 border border-green-200 rounded-2xl p-10">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-green-800 mb-4">Service Request Received</h2>
              <p className="text-green-700 mb-6 text-lg">
                We have received your request and will contact you shortly to confirm your appointment.
              </p>
              <div className="bg-white rounded-xl p-6 mb-6 text-left">
                <h3 className="font-bold text-gray-800 mb-3">What happens next?</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">1.</span>
                    Our team will review your request
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">2.</span>
                    We will call you to confirm details and scheduling
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">3.</span>
                    A certified technician will arrive at your scheduled time
                  </li>
                </ul>
              </div>
              <button
                onClick={() => setStatus("idle")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg transition-all cursor-pointer"
              >
                Submit Another Request
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white text-center py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Request HVAC Service</h1>
          <p className="text-xl text-blue-100">Fill out the form below and we will get back to you shortly</p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Sidebar - Benefits */}
            <div className="md:col-span-1 space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-bold text-gray-800 mb-4 text-lg">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 text-sm">Licensed & Insured Technicians</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 text-sm">Same-Day Service Available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 text-sm">Upfront Pricing - No Surprises</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 text-sm">100% Satisfaction Guaranteed</span>
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 border border-orange-200 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="font-bold text-orange-800">Need Emergency Service?</h4>
                </div>
                <p className="text-orange-700 text-sm mb-3">Call our 24/7 emergency line for immediate assistance.</p>
                <a href="tel:5559998888" className="text-orange-600 font-bold text-lg hover:underline">(555) 999-8888</a>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Service Request Form</h2>

                {errorMsg && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-center gap-3">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {errorMsg}
                  </div>
                )}

                {/* Contact Information */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-700 mb-4 pb-2 border-b">Contact Information</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={set("name")}
                        placeholder="John Doe"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={set("phone")}
                        placeholder="(555) 123-4567"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={set("email")}
                        placeholder="john@example.com"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700">Service Address</label>
                      <input
                        type="text"
                        value={formData.address}
                        onChange={set("address")}
                        placeholder="123 Main St, City, State"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Service Details */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-700 mb-4 pb-2 border-b">Service Details</h3>

                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Type of Service <span className="text-red-500">*</span>
                    </label>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {SERVICE_TYPES.map((service) => (
                        <label
                          key={service.value}
                          className={`flex items-start gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                            formData.serviceType === service.value
                              ? "border-blue-600 bg-blue-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <input
                            type="radio"
                            name="serviceType"
                            value={service.value}
                            checked={formData.serviceType === service.value}
                            onChange={set("serviceType")}
                            className="mt-1"
                          />
                          <div>
                            <p className="font-medium text-gray-800">{service.label}</p>
                            <p className="text-sm text-gray-500">{service.description}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Emergency toggle — only for service calls */}
                  {formData.serviceType === "service_call" && (
                    <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="font-semibold text-gray-800 mb-1">Is this an emergency?</p>
                      <p className="text-xs text-red-600 mb-3">*Additional fees may apply for emergency services</p>
                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={() => setIsEmergency(true)}
                          className={`flex-1 py-3 rounded-lg border-2 font-semibold transition-all cursor-pointer ${
                            isEmergency === true
                              ? "bg-red-600 border-red-600 text-white"
                              : "bg-white border-gray-300 text-gray-700 hover:border-gray-400"
                          }`}
                        >
                          Yes, Emergency
                        </button>
                        <button
                          type="button"
                          onClick={() => setIsEmergency(false)}
                          className={`flex-1 py-3 rounded-lg border-2 font-semibold transition-all cursor-pointer ${
                            isEmergency === false
                              ? "bg-blue-600 border-blue-600 text-white"
                              : "bg-white border-gray-300 text-gray-700 hover:border-gray-400"
                          }`}
                        >
                          No, Schedule Service
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="mb-4">
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Problem Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={set("description")}
                      placeholder="Please describe the issue you are experiencing or the service you need..."
                      rows={4}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Preferred Date/Time</label>
                    <input
                      type="text"
                      value={formData.preferredDate}
                      onChange={set("preferredDate")}
                      placeholder="e.g., Tomorrow afternoon, Weekday mornings, etc."
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-lg py-4 rounded-lg transition-all transform hover:scale-[1.01] shadow-md cursor-pointer"
                >
                  {status === "submitting" ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    "Submit Service Request"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
