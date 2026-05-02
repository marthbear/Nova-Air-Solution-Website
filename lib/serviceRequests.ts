import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

export type ServiceRequestInput = {
  name: string;
  phone: string;
  email?: string;
  address?: string;
  serviceType: string;
  isEmergency?: boolean;
  description: string;
  preferredDate?: string;
};

export async function addServiceRequest(request: ServiceRequestInput): Promise<void> {
  const payload: Record<string, unknown> = {
    name: request.name,
    phone: request.phone,
    serviceType: request.serviceType,
    description: request.description,
    status: "Pending",
    submittedAt: new Date().toISOString(),
  };

  if (request.email) payload.email = request.email;
  if (request.address) payload.address = request.address;
  if (request.preferredDate) payload.preferredDate = request.preferredDate;
  if (request.isEmergency !== undefined) payload.isEmergency = request.isEmergency;

  await addDoc(collection(db, "serviceRequests"), payload);
}
