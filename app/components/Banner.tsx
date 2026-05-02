"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Banner() {
  const router = useRouter();
  return (
    <div className="bg-blue-600 text-white p-4 sticky top-0 z-50 flex justify-between items-center gap-1">
      <button
        onClick={() => {
          console.log("Logo clicked");
          router.push("/");
        }}
        className="logoButton"
      >
        <Image
          src="/novalogo.jpg"
          alt="Nova Air Solution"
          width={50}
          height={100}
        />
      </button>
      <div className="flex gap-10 ml-auto">
        <button
          title="about"
          onClick={() => {
            console.log("About button pressed");
            router.push("/about");
          }}
          className="bannerButtons"
        >
          About
        </button>
        <button
          title="Request a Service"
          onClick={() => {
            console.log("Service Request Pressed");
            router.push("/service-requests");
          }}
          className="bannerButtons"
        >
          Request Service
        </button>
        <button
          title="contact"
          onClick={() => {
            console.log("contact pressed");
            router.push("/contact");
          }}
          className="bannerButtons"
        >
          Contact
        </button>
        <button
          title="service area"
          onClick={() => {
            console.log("service area pressed");
            router.push("/servicearea");
          }}
          className="bannerButtons"
        >
          Service Area
        </button>
      </div>
    </div>
  );
}
