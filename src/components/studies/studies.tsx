
export default function Studies() {
    return(
    <div className="w-full mt-16 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Education</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold">Biologist</h3>
              <p className="text-sm mt-2">Universidad de Córdoba (2017 - 2022)</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold">Web Development Training</h3>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Software Programming Technician</li>
              </ul>
            </div>
          </div>
        </div>
    )
}