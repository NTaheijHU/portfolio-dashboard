import Sidebar from "../components/Sidebar";
import HomeCard from "../components/cards/HomeCard";
import AuthPage from "../components/AuthPage";
import { useSession } from "next-auth/client";
import { useEffect } from "react";

export default function Home() {

  const [session, loading] = useSession();

  if (typeof window !== 'undefined' && loading) return null;

  useEffect(() => {
  }, [session]);

  const items = [
    "Nucleus", "Dashboard", "Reviews", "Trustpilot",
  ];

  return (
    <AuthPage>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        <Sidebar
          selected="Home"
        />
        <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-5">
          <div className="bg-gray-200 dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-xl mt-8 mx-8 md:mx-20 flex items-center justify-center h-1/6">
            <p className="text-3xl font-semibold">Welkom terug, {
              !session ? "Gast" : session.user.name
            }!</p>
          </div>
          <div id="cards" className="md:mx-4 mt-10 mb-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6">
            { 
              items.map((item) => {
                return (
                  <HomeCard 
                    key={item}
                    title={"Item"}
                    subTitle={item}
                    link="http://dev.local"
                    linkText="dev.local"
                    image="https://user-images.githubusercontent.com/47594764/124385080-8c4d8480-dcd4-11eb-9dbb-090f17f5b7ec.png"
                  />
                )
              })
            }
          </div>
        </div>
      </div>
    </AuthPage>
  )
}
