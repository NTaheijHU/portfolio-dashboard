import Sidebar from "../../components/Sidebar";
import AuthPage from "../../components/AuthPage";

export default function Home() {

  return (
    <AuthPage>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        <Sidebar
          selected="Home"
        />
        <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-5">
          <div className="bg-gray-200 dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-xl mt-8 mx-8 md:mx-20 flex items-center justify-center h-1/6">
            <p className="text-3xl font-semibold">Website Settings</p>
          </div>
          <a className="hover:cursor-pointer" onClick={() => { window.location.href = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" }}>
            <div className="bg-red-600 hover:bg-red-700 rounded-xl mt-8 mx-8 md:mx-20 p-0 flex items-center justify-center h-1/2">
              <h1 className="text-center text-6xl">Verwijder Website</h1>
            </div>
          </a>
        </div>
      </div>
    </AuthPage>
  )
}
