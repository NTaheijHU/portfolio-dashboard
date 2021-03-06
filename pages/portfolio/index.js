import Sidebar from "../../components/Sidebar";
import TitleCard from "../../components/cards/TitleCard";
import AuthPage from "../../components/AuthPage";

export default function Home(props) {
  return (
    <AuthPage>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        <Sidebar 
          selected="Portfolio"
        />
        <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-5">
          <TitleCard text="Portfolio" />
          <div className="ml-12 mr-12 mt-4">
            <a href="/portfolio/new">
              <div className="bg-indigo-500 p-4 pl-2 w-max rounded-xl mb-4">
                <h2 className="text-2xl font-bold">
                  <i className="fas fa-plus mr-2 pr-0 text-indigo-400 dark:text-indigo-100"></i>
                  Maak een nieuw project
                </h2>
              </div>
            </a>
            {
              props.projects.map(project => {
                return (
                  <section className="overflow-hidden rounded-lg shadow-lg bg-gray-50 bg-opacity-90 dark:bg-gray-700 dark:bg-opacity-100 dark:text-gray-100 mb-4" key={project.short}>
                    <div className="lg:relative m-0 p-0 lg:flex">
                      <img alt={"Een foto van" + project.name} className="block w-full h-1/3 lg:w-1/3 lg:h-full" src={project.image} />
                      <div className="flex-wrap">
                        <div className="px-4 pt-4">
                          <h3 className="uppercase font-medium text-4xl mb-3">{project.name}</h3>
                          <p className="leading-normal text-xl">{project.shortDescription}</p>
                        </div>
                        <a href={"/portfolio/" + project.short + "/edit"}><i className="fas fa-edit fa-2x p-4 pr-0 text-indigo-400 dark:text-indigo-100"></i></a>
                        <a href={"/portfolio/" + project.short + "/delete"}><i className="fas fa-trash fa-2x p-4 pr-0 text-red-500"></i></a>
                      </div>
                    </div>
                  </section>
                )
              })
            }
          </div>
        </div>
      </div>
    </AuthPage>
  )
}

export async function getServerSideProps() {
  const data = await fetch(process.env.API_ENDPOINT + '/projects');
  const projects = await data.json();
  return { props: { projects } }
}