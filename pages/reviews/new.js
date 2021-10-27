import FormButton from "../../components/forms/FormButton";
import FormItem from "../../components/forms/FormItem";
import FormTextArea from "../../components/forms/FormTextArea";
import Sidebar from "../../components/Sidebar";
import TitleCard from "../../components/cards/TitleCard";
import AuthPage from "../../components/AuthPage";

export default function Home() {
  return (
    <AuthPage>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        <Sidebar 
          selected="Reviews"
        />
        <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-5">
          <TitleCard text={"Nieuwe Review"}  />
          <div className="ml-12 mr-12 mt-4">
            <form className="grid grid-cols-2">
              <FormItem title="Naam" />
              <FormItem title="Author" />
              <FormItem title="Stars" />
              <FormItem title="Image URL" />
              <FormItem title="Title" />
              <FormItem title="Review Title" />
              <FormTextArea title="Quote" />
              <FormTextArea title="Review" />
              <FormButton/>
            </form>
          </div>
        </div>
      </div>
    </AuthPage>
  )
}