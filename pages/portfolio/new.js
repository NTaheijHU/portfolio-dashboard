import FormButton from "../../components/forms/FormButton";
import FormItem from "../../components/forms/FormItem";
import FormTextArea from "../../components/forms/FormTextArea";
import Sidebar from "../../components/Sidebar";
import TitleCard from "../../components/cards/TitleCard";

export default function Home(props) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      <Sidebar 
        selected="Portfolio"
      />
      <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-5">
        <TitleCard text={"Nieuw Project"}  />
        <div className="ml-12 mr-12 mt-4">
          <form className="grid grid-cols-2">
            <FormItem title="Naam" />
            <FormItem title="Short" />
            <FormItem title="Image URL" />
            <FormItem title="Link URL" />
            <FormItem title="Github URL" />
            <FormItem title="Skills" />
            <FormTextArea title="Short Description" />
            <FormTextArea title="Long Description" />
            <FormButton/>
          </form>
        </div>
      </div>
    </div>
  )
}