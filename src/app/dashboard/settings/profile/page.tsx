

function ProfileSettings() {
  return (
    <div className="min-h-screen bg-gradient-to-br from bg-gray-50
    to-blue-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Profile Settings
        </h1>

        {/* Profile Picture setting */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Profile Picture
          </h2>

          <div className="flex items-center space-x-4">
            <div className="w-24 h-24 rounded-full bg-gray-300">
              <img 
              src="/profile/flex-profile.png" 
              alt="profile picture"
              className="w-full h-full rounded-full object-cover"
               />
            </div>
          </div>

          <div>
            <button className="px-6 py-2 mt-5 text-white 
            bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
              Change Picture
            </button>
          </div>
        </section>

        {/* Profile info Setting */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Profile Information
          </h2>

          <div className="space-y-4">
            <div>
              <label className="label block text-sm font-medium text-gray-600">
                Full Name
              </label>
              <input 
              type="text"
              defaultValue="Anthony Kanu"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg
              shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-300"
               />
            </div>

            <div>
              <label className="label block text-sm font-medium text-gray-600">
                User Name
              </label>
              <input 
              type="text"
              defaultValue="flexteck"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg
              shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-300"
               />
            </div>

            <div>
              <label className="label block text-sm font-medium text-gray-600">
                Email
              </label>
              <input 
              type="text"
              defaultValue="flexteckse@gmail.com"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg
              shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-300"
               />
            </div>
          </div>
        </section>

         {/* Actions Settings*/}
        <div className="flex justify-end space-x-4">
          <button className="px-6 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
            Cancel
          </button>
          <button className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfileSettings
