// Database service for managing Admission Enquiries
export interface EnquiryRecord {
  id: string;
  refCode: string;
  studentName: string;
  parentName: string;
  mobileNumber: string;
  selectedClass: string;
  selectedCourse: string;
  message?: string;
  createdAt: string;
  status: "new" | "contacted" | "enrolled" | "closed";
}

const STORAGE_KEY = "eci_admission_enquiries";

// Sample initial data if completely empty so the admin panel looks alive immediately
const INITIAL_SAMPLE_ENQUIRIES: EnquiryRecord[] = [
  {
    id: "sample-1",
    refCode: "ECI-726081",
    studentName: "Himanshu Manoj Singh",
    parentName: "Himanshu Manoj Singh",
    mobileNumber: "9328603748",
    selectedClass: "11th",
    selectedCourse: "NEET",
    message: "Interested in NEET 2-year classroom batch with test series.",
    createdAt: new Date().toISOString(),
    status: "new",
  },
];

export function getEnquiries(): EnquiryRecord[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      // Seed initial sample record
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_SAMPLE_ENQUIRIES));
      return INITIAL_SAMPLE_ENQUIRIES;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.error("Failed to read enquiries from storage:", err);
    return [];
  }
}

export function saveEnquiry(
  data: Omit<EnquiryRecord, "id" | "createdAt" | "status">
): EnquiryRecord {
  const newRecord: EnquiryRecord = {
    ...data,
    id: "enq_" + Date.now() + "_" + Math.floor(Math.random() * 1000),
    createdAt: new Date().toISOString(),
    status: "new",
  };

  if (typeof window !== "undefined") {
    try {
      const existing = getEnquiries();
      // Put newest on top
      const updated = [newRecord, ...existing];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

      // Dispatch custom event so any open admin dashboard updates live
      window.dispatchEvent(new CustomEvent("eci_enquiry_added", { detail: newRecord }));
    } catch (err) {
      console.error("Failed to save enquiry:", err);
    }
  }

  // Attempt background sync to cloud / webhook if configured
  syncToCloudWebhook(newRecord).catch(() => {});

  return newRecord;
}

export function updateEnquiryStatus(
  id: string,
  status: EnquiryRecord["status"]
): void {
  if (typeof window === "undefined") return;
  try {
    const existing = getEnquiries();
    const updated = existing.map((item) =>
      item.id === id ? { ...item, status } : item
    );
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent("eci_enquiries_updated"));
  } catch (err) {
    console.error("Failed to update enquiry status:", err);
  }
}

export function deleteEnquiry(id: string): void {
  if (typeof window === "undefined") return;
  try {
    const existing = getEnquiries();
    const updated = existing.filter((item) => item.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent("eci_enquiries_updated"));
  } catch (err) {
    console.error("Failed to delete enquiry:", err);
  }
}

export function exportEnquiriesToCSV(): void {
  const list = getEnquiries();
  if (list.length === 0) {
    alert("No enquiries to export.");
    return;
  }

  const headers = [
    "Reference ID",
    "Date & Time",
    "Student Name",
    "Parent Name",
    "Mobile Number",
    "Class",
    "Target Course",
    "Status",
    "Notes",
  ];

  const rows = list.map((item) => [
    `"${item.refCode}"`,
    `"${new Date(item.createdAt).toLocaleString("en-IN")}"`,
    `"${item.studentName.replace(/"/g, '""')}"`,
    `"${item.parentName.replace(/"/g, '""')}"`,
    `"${item.mobileNumber}"`,
    `"${item.selectedClass}"`,
    `"${item.selectedCourse}"`,
    `"${item.status.toUpperCase()}"`,
    `"${(item.message || "").replace(/"/g, '""')}"`,
  ]);

  const csvContent =
    "data:text/csv;charset=utf-8," +
    [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute(
    "download",
    `evolution_career_institute_enquiries_${new Date().toISOString().slice(0, 10)}.csv`
  );
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Optional cloud webhook (e.g. Google Sheets / Telegram / Cloudflare D1)
async function syncToCloudWebhook(record: EnquiryRecord): Promise<void> {
  const webhookUrl =
    typeof window !== "undefined"
      ? localStorage.getItem("eci_webhook_url")
      : null;
  if (!webhookUrl) return;

  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(record),
      mode: "no-cors",
    });
  } catch (e) {
    console.warn("Cloud webhook sync skipped:", e);
  }
}
