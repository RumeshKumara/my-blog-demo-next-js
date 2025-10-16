export default function PostLoading() {
  return (
    <div className="space-y-4">
      <div className="h-12 bg-gray-200 rounded w-3/4 animate-pulse mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse mb-8"></div>
      <div className="space-y-4">
        <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-6 bg-gray-200 rounded animate-pulse w-4/5"></div>
        <div className="h-6 bg-gray-200 rounded animate-pulse w-3/4"></div>
      </div>
    </div>
  );
}