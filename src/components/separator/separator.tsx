export default function Separator() {
  return (
    <div className="flex items-center mb-10 w-full hidden sm:flex">
      <div className="flex-grow h-px border-t border-gray-300 dark:border-gray-700 opacity-50"></div>
      <div className="w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-600 mx-4 opacity-50"></div>
      <div className="flex-grow h-px border-t border-gray-300 dark:border-gray-700 opacity-50"></div>
    </div>
  );
}
