import Footer from "../components/Footer";
import Header from "../components/Header";
import Head from "next/head";
import { useRouter } from "next/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yyyy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yyyy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  
  return (
    <div className="h-screen bg-gray-100">
      <Head>
        <title>Airbnb || clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
      <main className="flex bg-white max-w-screen-2xl mx-auto rounded-md pb-8 shadow-md">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs font-semibold">300+ stays -{range}- for {noOfGuests} guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in <span className="capitalize">{location}</span></h1>
          <div className="hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <button className="button">Cancellation Flexibility</button>
            <button className="button">Type of Place</button>
            <button className="button">Price</button>
            <button className="button">Rooms and Beds</button>
            <button className="button">More Filters</button>
          </div>
          <div className="flex flex-col">
            {searchResults.map(({img, location, title, description, star, price, total}, i) => (
              <InfoCard 
                key={i}
                location={location}
                img={img}
                title={title}
                description={description}
                star={star}
                price={price}
                total={total}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(res => res.json());
  return {
    props: {
      searchResults,
    }
  }
};