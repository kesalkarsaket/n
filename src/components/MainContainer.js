import React from "react";
import VideoTitle from "./VideoTitle";
import Videobackground from "./Videobackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];

  const { overview, original_title, id } = mainMovie;
  return (
    <div className="w-screen">
      <VideoTitle title={original_title} overview={overview} />
      <Videobackground movieId={id} />
    </div>
  );
};

export default MainContainer;
