import Sidebar from "../../components/Sidebar";
import TitleCard from "../../components/cards/TitleCard";
import AuthPage from "../../components/AuthPage";

export default function Home(props) {
  return (
    <AuthPage>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        <Sidebar 
          selected="Skills"
        />
        <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-5">
          <TitleCard text="Skills" />
          <div className="ml-12 mr-12 mt-4">
            <a href="/skills/new">
              <div className="bg-indigo-500 p-4 pl-2 w-max rounded-xl mb-4">
                  <h2 className="text-2xl font-bold">
                    <i className="fas fa-plus mr-2 pr-0 text-indigo-400 dark:text-indigo-100"></i>
                    Maak een nieuwe skill
                  </h2>
              </div>
              </a>
            <div className="grid grid-cols-4">
              {
                props.skills.map(skill => {
                  return (
                    <div className="overflow-hidden rounded-lg shadow-lg bg-gray-50 bg-opacity-90 dark:bg-gray-700 dark:bg-opacity-100 dark:text-gray-100 mb-4 mr-4">
                      <div className="pl-4 pt-4">
                        <h3 className="uppercase font-medium text-4xl mb-3">{skill.name}</h3>
                      </div>
                      <a href={"/skills/" + skill.short + "/edit"}><i className="fas fa-edit fa-2x p-4 pr-0 text-indigo-400 dark:text-indigo-100"></i></a>
                      <a href={"/skills/" + skill.short + "/delete"}><i className="fas fa-trash fa-2x p-4 pr-0 text-red-500"></i></a>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </AuthPage>
  )
}

export async function getServerSideProps() {
  const data = await fetch(process.env.API_ENDPOINT + '/skills');
  const skills = await data.json();
  return { props: { skills } }
}