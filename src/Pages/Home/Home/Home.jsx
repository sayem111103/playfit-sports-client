import useAuth from "../../../Hooks/useAuth";
import Carousel from "../Carousel/Carousel";
import Instructors from "../Instructors/Instructors";
import PopularClasses from "../PopularClasses/PopularClasses";

const Home = () => {
    const {user} = useAuth();
    console.log(user);
    return (
        <>
            <Carousel></Carousel>
            <PopularClasses></PopularClasses>
            <Instructors></Instructors>
        </>
    );
};

export default Home;