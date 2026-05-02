"use client";

import { useState } from "react";
import { addServiceRequest } from "@/lib/serviceRequests";

const SERVICE_TYPES = [
  { value: "service_call", label: "Service call" },
  { value: "preventative_maintenance", label: "Preventative maintenance" },
  { value: "system_replacement", label: "System replacement" },
  { value: "speak_with_specialist", label: "Speak with comfort specialist" },
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
  const [showTooltip, setShowTooltip] = useState(false);
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

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-blue-600 text-white px-6 py-16 text-center">
        <h1 className="text-4xl font-bold mb-2">Request HVAC Service</h1>
        <p className="text-lg opacity-90">Fill out the form below and we&apos;ll get back to you shortly</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white rounded-xl shadow p-8 my-10">

        {status === "success" && (
          <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg">
            Service request submitted! We&apos;ll contact you shortly.
          </div>
        )}

        {errorMsg && (
          <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-lg">
            {errorMsg}
          </div>
        )}

        {/* Name */}
        <label className="block mb-1 font-semibold text-gray-700">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={set("name")}
          placeholder="Your full name"
          className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-5 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Phone */}
        <label className="block mb-1 font-semibold text-gray-700">
          Phone <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          value={formData.phone}
          onChange={set("phone")}
          placeholder="(555) 555-5555"
          className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-5 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Email */}
        <label className="block mb-1 font-semibold text-gray-700">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={set("email")}
          placeholder="your@email.com"
          className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-5 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Address */}
        <label className="block mb-1 font-semibold text-gray-700">Service Address</label>
        <input
          type="text"
          value={formData.address}
          onChange={set("address")}
          placeholder="123 Main St, City, State"
          className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-5 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Service Type */}
        <div className="flex items-center gap-2 mb-1 relative">
          <label className="font-semibold text-gray-700">Service</label>
          <button
            type="button"
            onClick={() => setShowTooltip((v) => !v)}
            className="w-5 h-5 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center"
          >
            ?
          </button>
          {showTooltip && (
            <div className="absolute left-20 top-0 z-10 w-72 bg-white border border-gray-200 rounded-xl shadow-lg p-4 text-sm text-gray-700">
              <button
                type="button"
                onClick={() => setShowTooltip(false)}
                className="absolute top-2 right-3 text-gray-400 text-xl leading-none"
              >
                ×
              </button>
              Service Call: System not operating properly and/or NO heat/cool.
            </div>
          )}
        </div>
        <select
          value={formData.serviceType}
          onChange={set("serviceType")}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-5 text-base bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select a service...</option>
          {SERVICE_TYPES.map((s) => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
        </select>

        {/* Emergency toggle — only for service calls */}
        {formData.serviceType === "service_call" && (
          <div className="mb-5">
            <p className="font-semibold text-gray-700 mb-1">Is this an emergency?</p>
            <p className="text-xs text-red-500 italic mb-3">*additional fees apply</p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setIsEmergency(true)}
                className={`flex-1 py-3 rounded-full border-2 font-semibold transition-colors ${
                  isEmergency === true
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "bg-white border-gray-300 text-gray-700"
                }`}
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => setIsEmergency(false)}
                className={`flex-1 py-3 rounded-full border-2 font-semibold transition-colors ${
                  isEmergency === false
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "bg-white border-gray-300 text-gray-700"
                }`}
              >
                No
              </button>
            </div>
          </div>
        )}

        {/* Description */}
        <label className="block mb-1 font-semibold text-gray-700">
          Problem Description <span className="text-red-500">*</span>
        </label>
        <textarea
          value={formData.description}
          onChange={set("description")}
          placeholder="Describe the issue you're experiencing..."
          rows={4}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-5 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />

        {/* Preferred Date */}
        <label className="block mb-1 font-semibold text-gray-700">Preferred Date/Time</label>
        <input
          type="text"
          value={formData.preferredDate}
          onChange={set("preferredDate")}
          placeholder="e.g., Tomorrow afternoon"
          className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-6 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-semibold text-lg py-4 rounded-xl transition-colors"
        >
          {status === "submitting" ? "Submitting..." : "Submit Request"}
        </button>
      </form>
    </div>
  );
}
