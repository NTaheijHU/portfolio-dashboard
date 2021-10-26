import FormButton from "../../../components/forms/FormButton";
import FormItem from "../../../components/forms/FormItem";
import FormTextArea from "../../../components/forms/FormTextArea";
import Sidebar from "../../../components/Sidebar";
import TitleCard from "../../../components/cards/TitleCard";

export default function Home(props) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      <Sidebar 
        selected="Skills"
      />
      <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-5">
        <TitleCard text={"Edit " + props.skill.name }  />
        <div className="ml-12 mr-12 mt-4">
          <form className="grid grid-cols-2">
            <FormItem title="Naam" value={props.skill.name} />
            <FormItem title="Short" value={props.skill.short} />
            <FormItem title="Use Time" value={props.skill.useTime} />
            <FormItem title="Experience" value={props.skill.experience} />
            <FormTextArea title="Details" value={props.skill.details} />
            <FormButton right/>
          </form>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const id = context.query.skill;
  const data = await fetch(process.env.API_ENDPOINT + '/skills/' + id);
  const skill = await data.json();
  return { props: { skill } }
}