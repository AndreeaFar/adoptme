import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ErrorBoundary from "./ErrorBoundary";
import Carousel from "./Carousel";
import fetchPet from "./fetchPet";

const Details = () => {
  const { id } = useParams(); // Extracts id from URL parameters

  // Fetch pet details based on id using React Query
  const results = useQuery(["details", id], fetchPet);

  // For the first load only,display a loading spinner while the data is being fetched
  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

  const pet = results.data.pets[0]; // Extracts pet details from fetched data

  return (
    <div className="details">
      <Carousel images={pet.images} />;
      <div>
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
        <button>Adopt {pet.name}</button>
        <p>{pet.description}</p>
      </div>
    </div>
  );
};

// wrap Details component with ErrorBoundary to handle errors
function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}

export default DetailsErrorBoundary;
