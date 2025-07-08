import Navbar from "@/components/navbar";

export default function Loading() {
  return (
    <div>
      <Navbar variant="solid" />
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-300 border-t-gray-900 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading portfolio...</p>
        </div>
      </div>
    </div>
  );
}
