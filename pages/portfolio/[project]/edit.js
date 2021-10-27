import FormButton from "../../../components/forms/FormButton";
import FormItem from "../../../components/forms/FormItem";
import FormTextArea from "../../../components/forms/FormTextArea";
import Sidebar from "../../../components/Sidebar";
import TitleCard from "../../../components/cards/TitleCard";
import AuthPage from "../../../components/AuthPage";

export default function Home(props) {
  return (
    <AuthPage>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        <Sidebar 
          selected="Portfolio"
        />
        <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-5">
          <TitleCard text={"Edit " + props.project.name }  />
          <div className="ml-12 mr-12 mt-4">
            <form className="grid grid-cols-2">
              <FormItem title="Naam" value={props.project.name} />
              <FormItem title="Short" value={props.project.short} />
              <FormItem title="Image URL" value={props.project.image} />
              <FormItem title="Link URL" value={props.project.link} />
              <FormItem title="Github URL" value={props.project.githubLink} />
              <FormItem title="Skills" value={props.project.skills} />
              <FormTextArea title="Short Description" value={props.project.shortDescription} />
              <FormTextArea title="Long Description" value={props.project.longDescription} />
              <FormButton/>
            </form>
          </div>
        </div>
      </div>
    </AuthPage>
  )
}

export async function getServerSideProps(context) {
  const id = context.query.project;
  const data = await fetch(process.env.API_ENDPOINT + '/projects/' + id);
  const project = await data.json();
  return { props: { project } }
}