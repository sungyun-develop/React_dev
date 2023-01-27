import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../components/DetailMovie";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState([]);
  const { id } = useParams();
  const getInfo = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setInfo(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getInfo();
  }, []);
  console.log(info);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <DetailMovie
            key={info.id}
            coverImg={info.large_cover_image}
            title={info.title}
            year={info.year}
            downloadCount={info.download_count}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;
