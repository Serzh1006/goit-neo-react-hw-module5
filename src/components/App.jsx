import { Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";
import Layout from "./Layout/Layout";

const Home = lazy(() => import("../pages/HomePage/HomePage"));
const MovieDetails = lazy(() =>
  import("../pages/MovieDetailsPage/MovieDetailsPage")
);
const Cast = lazy(() => import("../components/Cast/Cast"));
const Reviews = lazy(() => import("../components/Reviews/Reviews"));
const Movies = lazy(() => import("../pages/MoviesPage/MoviesPage"));
const NotFoundPage = lazy(() =>
  import("../components/NotFoundPage/NotFoundPage")
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
