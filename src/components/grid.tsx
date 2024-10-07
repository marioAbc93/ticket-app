export default function Grid() {
  return (
    <div className="container mx-auto py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="bg-blue-500 p-4 min-w-40 rounded-lg shadow-lg text-white">
          Item 1
        </div>
        <div className="bg-blue-500 p-4 min-w-40 rounded-lg shadow-lg text-white">
          Item 2
        </div>
        <div className="bg-blue-500 p-4 min-w-40 rounded-lg shadow-lg text-white">
          Item 3
        </div>
        <div className="bg-blue-500 p-4 min-w-40 rounded-lg shadow-lg text-white">
          Item 4
        </div>
        <div className="bg-blue-500 p-4 min-w-40 rounded-lg shadow-lg text-white">
          Item 5
        </div>
        <div className="bg-blue-500 p-4 min-w-40 rounded-lg shadow-lg text-white">
          Item 6
        </div>
        <div className="bg-blue-500 p-4 min-w-40 rounded-lg shadow-lg text-white">
          Item 7
        </div>
        <div className="bg-blue-500 p-4 min-w-40 rounded-lg shadow-lg text-white">
          Item 8
        </div>
      </div>
    </div>
  );
}
