import FormButton from "../components/forms/FormButton";
import FormItem from "../components/forms/FormItem";
import FormTextArea from "../components/forms/FormTextArea";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      <Sidebar 
        selected="About"
      />
      <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-5">
        <div className="bg-gray-200 dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-xl mt-8 mx-8 md:mx-20 flex items-center justify-center h-1/6">
          <p className="text-3xl font-semibold">Over Mij</p>
        </div>
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
