import Link from "next/link";

function Settings() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-200 p-6 md:p-10">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-2xl p-8 md:p-10 space-y-6">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Settings</h1>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl">
          Customize your account settings, profile, and notifications here.
          Choose an option from the sidebar to begin.
        </p>

        <div className="flex flex-col md:flex-row md:space-x-12 space-y-6 md:space-y-0">
          {/* Sidebar */}
          <div className="w-full md:w-1/4 bg-gray-50 rounded-lg p-6 shadow-inner space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Quick Links</h2>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/dashboard/settings/account"
                  className="flex items-center text-lg text-gray-800 hover:text-indigo-600 transition-colors py-2 px-4 rounded-md hover:bg-indigo-50"
                >
                  Account
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard/settings/notifications"
                  className="flex items-center text-lg text-gray-800 hover:text-yellow-600 transition-colors py-2 px-4 rounded-md hover:bg-yellow-50"
                >
                  Notifications
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard/settings/profile"
                  className="flex items-center text-lg text-gray-800 hover:text-green-600 transition-colors py-2 px-4 rounded-md hover:bg-green-50"
                >
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-white shadow-md rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Select a Setting
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Choose an option from the sidebar to manage your account, notifications, or profile settings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
