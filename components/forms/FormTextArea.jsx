function FormTextArea(props) {
  return ( 
    <div className="mr-2">
      <label className="block mb-2 text-indigo-500" forhtml={props.title}>{props.title}</label>
      <textarea className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-100 resize-none" defaultValue={props.value ? props.value : ""} type={props.type ? props.type : "text"} name={props.title} autoComplete={props.autoComplete ? props.autoComplete : "off"}></textarea>
    </div>
   );
}

export default FormTextArea;