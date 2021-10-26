function TitleCard(props) {
  return ( 
    <div className="bg-gray-100 dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-xl mt-8 mx-8 md:mx-20 flex items-center justify-center h-1/6">
      <p className="text-3xl font-semibold">{props.text}</p>
    </div>
   );
}

export default TitleCard;