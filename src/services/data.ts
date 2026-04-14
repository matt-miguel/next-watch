// const apiKey = import.meta.env.VITE_TMDB_API_KEY;
const accessToken = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

export default async function getTMDBData() {
  const url = "https://api.themoviedb.org/3/search/movie?query=Batman";
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer <<${accessToken}>>`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching API data. Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Fetch error:", error);
  }
}

console.log(getTMDBData());

//data structure:
// {
//   "page": 1,
//   "results": [
//     {
//       "adult": false,
//       "backdrop_path": "/zlsaQEE26TS34ziXAiNIAqa0MLX.jpg",
//       "genre_ids": [14, 28, 80],
//       "id": 268,
//       "original_language": "en",
//       "original_title": "Batman",
//       "overview": "Having witnessed his parents' brutal murder as a child, millionaire philanthropist Bruce Wayne fights crime in Gotham City disguised as Batman, a costumed hero who strikes fear into the hearts of villains. But when a deformed madman known as 'The Joker' seizes control of Gotham's criminal underworld, Batman must face his most ruthless nemesis ever while protecting both his identity and his love interest, reporter Vicki Vale.",
//       "popularity": 10.0048,
//       "poster_path": "/cij4dd21v2Rk2YtUQbV5kW69WB2.jpg",
//       "release_date": "1989-06-21",
//       "title": "Batman",
//       "video": false,
//       "vote_average": 7.229,
//       "vote_count": 8496
//     },
