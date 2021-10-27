import FormButton from "../components/forms/FormButton";
import FormItem from "../components/forms/FormItem";
import FormTextArea from "../components/forms/FormTextArea";
import Sidebar from "../components/Sidebar";
import TitleCard from "../components/cards/TitleCard";
import AuthPage from "../components/AuthPage";

export default function Home(props) {
  return (
    <AuthPage>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        <Sidebar 
          selected="About"
        />
        <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-5">
          <TitleCard text="Over Mij" />
          <div className="ml-12 mr-12 mt-4">
            <form className="grid grid-cols-2">
              <FormItem title="Naam" value={props.about.name} />
              <FormItem title="Title" value={props.about.title} />
              <FormItem title="Image URL" value={props.about.image} />
              <FormItem title="Github URL" value={props.about.githubLink} />
              <FormTextArea title="About Text" value={props.about.aboutText} />
              <FormTextArea title="About Text Long" value={props.about.aboutTextLong} />
              <FormItem title="Projects Title" value={props.about.projectsTitle} />
              <FormItem title="Projects Image URL" value={props.about.projectsImage} />
              <FormTextArea title="Projects Text" value={props.about.projectsText }/>
              <FormButton right/>
            </form>
          </div>
        </div>
      </div>
    </AuthPage>
  )
}

export async function getServerSideProps() {
  const data = await fetch(process.env.API_ENDPOINT + '/about');
  const about = await data.json();
  return { props: { about: about[0] } }
}