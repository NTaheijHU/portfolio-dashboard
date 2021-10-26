import Sidebar from "../../components/Sidebar";
import TitleCard from "../../components/cards/TitleCard";
import ReviewCard from "../../components/cards/ReviewCard";

export default function Home(props) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      <Sidebar 
        selected="Reviews"
      />
      <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-5">
        <TitleCard text="Reviews" />
        <div className="ml-12 mr-12 mt-4">
          <a href="/reviews/new">
            <div className="bg-indigo-500 p-4 pl-2 w-max rounded-xl mb-4">
                <h2 className="text-2xl font-bold">
                  <i className="fas fa-plus mr-2 pr-0 text-indigo-400 dark:text-indigo-100"></i>
                  Maak een nieuwe review
                </h2>
            </div>
            </a>
            {
              props.reviews.map(review => {
                return (
                  <ReviewCard 
                    key={review.name}
                    name={review.name}
                    title={review.reviewTitle ? review.reviewTitle : review.quote.slice(0, 20) + "..." }
                    text={review.review}
                    image={"https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-" + review.stars + ".svg"}
                  />
                )
              })
            }
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const data = await fetch(process.env.API_ENDPOINT + '/reviews');
  const reviews = await data.json();
  return { props: { reviews } }
}