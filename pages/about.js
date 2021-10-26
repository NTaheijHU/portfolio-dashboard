import FormButton from "../components/forms/FormButton";
import FormItem from "../components/forms/FormItem";
import FormTextArea from "../components/forms/FormTextArea";
import Sidebar from "../components/Sidebar";
import TitleCard from "../components/cards/TitleCard";

export default function Home() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      <Sidebar 
        selected="About"
      />
      <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-5">
        <TitleCard text="Over Mij" />
        <div className="ml-12 mr-12 mt-4">
          <form className="grid grid-cols-2">
            <FormItem title="Naam" />
            <FormItem title="Title" />
            <FormItem title="Image URL" />
            <FormItem title="Github URL" />
            <FormTextArea title="About Text" />
            <FormTextArea title="About Text Long" />
            <FormItem title="Projects Title" />
            <FormItem title="Projects Image URL" />
            <FormTextArea title="Projects Text" />
            <FormButton right/>
          </form>
        </div>
      </div>
    </div>
  )
}
