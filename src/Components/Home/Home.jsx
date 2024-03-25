import { Link } from "react-router-dom";
import BookSection from "../BookSection/BookSection";

const Home = () => {
    return (
        <div>
                <div className="hero bg-base-200">
    <div className="hero-content  flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/fHjGzhw/ready-back-school.jpg" className="max-w-sm rounded-lg shadow-xl" />
    <div>
      <h1 className="text-5xl font-bold">Books to freshen up <br/> your bookshelf!</h1>
      <Link to={"/listedBook"} className="btn btn-primary my-10 bg-green-500 text-black">View The List</Link>
    </div>
  </div>
</div>
    <BookSection></BookSection>
        </div>
    );
};

export default Home;