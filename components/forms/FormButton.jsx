function FormButton(props) {
  if(props.right) {
    return (
      <div className="mr-2">          
        <input className="w-32 bg-indigo-700 hover:bg-indigo-900 text-white font-bold py-2 px-4 mb-6 ml-4 mt-14 rounded" type="submit" />
      </div>
    );
  } else {
    return (
      <div className="mr-2">          
        <input className="w-32 bg-indigo-700 hover:bg-indigo-900 text-white font-bold py-2 px-4 mb-6 ml-4 rounded" type="submit" />
      </div>
    );
  }
    
}

export default FormButton;