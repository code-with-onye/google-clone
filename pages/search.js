import Head from "next/head";
import Header from "../components/Header";
import { useRouter } from "next/router";
import { API_KEY, CONTEXT_KEY } from "../keys";
import Response from "../Response";
import SearchResults from "../components/SearchResults";
function Search({ results }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <meta name="description" content="Search" />
        <link
          rel="icon"
          href="https://assets.materialup.com/uploads/82eae29e-33b7-4ff7-be10-df432402b2b6/preview"
        />
      </Head>
      {/** Header*/}
      <Header />
      {/** Search Result */}
      <SearchResults results={results} />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = true;
  const startIndex = context.query.start || "0";

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((respons) => respons.json());

  //After the server has rendered... Pass the result to the client

  return {
    props: {
      results: data,
    },
  };
}
