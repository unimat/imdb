import Results from "@/components/Results";

const API_KEY = process.env.API_KEY

export default async function Home({searchParams}) {
  const genre = searchParams.genre || "fetchTrending";

  //**Authentication with Bearer token**//
  // const url = `https://api.themoviedb.org/3/${
  //   genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
  // }?language=en-US&page=1&sort_by=created_at.asc`

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     accept: 'application/json',
  //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmFkNzBkOGJiYjdjODQyNDQzMjE0MDZmYjczNDg2ZCIsInN1YiI6IjY1OTE2NDFkNmFhOGUwNjI3N2VhY2Q5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2ZCphL-zsPsfaxS6uFXwEP-J46DnVuy7SO6_NEgCxS4'
  //   }
  // };

  // const res = await fetch( url, options)

  //**Authentication with API Key**//
  const url = `https://api.themoviedb.org/3/${
    genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
  }?api_key=${API_KEY}&language=en-US&page=1`
  
  const res = await fetch( 
    url, 
    { next: { revalidate: 10000 } }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch data"); // this will be caught by the error page and passed to the page as props
  }

  const data = await res.json();
  const results = data.results;

  // console.log('Result: ', results)
  
  return (
    <Results results={results} />
  )
}
