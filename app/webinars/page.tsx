'use client';

const webinars = [
  {
    id: 1,
    title: "Nutrition in Early Childhood",
    speaker: "Dr. Sumitra Meena",
    date: "2025-06-15",
  },
  {
    id: 2,
    title: "Sleep Patterns of Newborns",
    speaker: "Dr. Anil Sharma",
    date: "2025-06-18",
  },
  {
    id: 3,
    title: "Understanding Infant Emotions",
    speaker: "Dr. Priya Verma",
    date: "2025-06-22",
  },
];

export default function WebinarsPage() {
  const handleViewDetails = (id: number) => {
    console.log(`Viewing details for webinar ID: ${id}`);
  };

  return (
    <main className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Upcoming Webinars
      </h1>
      <div className="grid gap-6 max-w-3xl mx-auto">
        {webinars.map((webinar) => (
          <div
            key={webinar.id}
            className="p-6 border border-gray-200 rounded-lg shadow-md bg-gray-50"
          >
            <h2 className="text-xl font-semibold text-gray-700 mb-2">{webinar.title}</h2>
            <p className="text-gray-600 mb-1"><strong>Speaker:</strong> {webinar.speaker}</p>
            <p className="text-gray-600 mb-4"><strong>Date:</strong> {webinar.date}</p>
            <button
              onClick={() => handleViewDetails(webinar.id)}
              className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
