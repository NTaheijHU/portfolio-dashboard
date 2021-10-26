function FormItem(props) {
  return ( 
    <div className="mr-2">
      <label className="block mb-2 text-indigo-500" forhtml={props.title}>{props.title}</label>
      <input className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-200" defaultValue={props.value ? props.value : ""} type={props.type ? props.type : "text"} name={props.title} autoComplete={props.autoComplete ? props.autoComplete : "off"} />
    </div>
   );
}

export default FormItem;