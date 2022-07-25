import { useData } from "../hooks/useData";
import ListGroup from "./common/ListGroup";

const Hero = () => {
  const { genres, loading, error } = useData();

  if (error) return <p>Something went wrong</p>;
  if (loading) return <p>Loading ...</p>;

  return (
    <main className="px-5 py-10 max-w-7xl mx-auto">
      <ListGroup data={genres} />
    </main>
  );
};

export default Hero;
