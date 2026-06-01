import { supabase } from "./supabase";

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
  const { error } = await supabase.from("service_requests").insert({
    company_id: process.env.NEXT_PUBLIC_COMPANY_ID,
    name: request.name,
    phone: request.phone,
    email: request.email ?? null,
    address: request.address ?? null,
    service_type: request.serviceType,
    is_emergency: request.isEmergency ?? null,
    description: request.description,
    preferred_date: request.preferredDate ?? null,
    status: "Pending",
    submitted_at: new Date().toISOString(),
  });

  if (error) throw error;
}
