import useAuth from "../../../Hooks/useAuth";
import Carousel from "../Carousel/Carousel";
import PopularClasses from "../PopularClasses/PopularClasses";

const Home = () => {
    const {user} = useAuth();
    console.log(user);
    return (
        <>
            <Carousel></Carousel>
            <PopularClasses></PopularClasses>
        </>
    );
};

export default Home;