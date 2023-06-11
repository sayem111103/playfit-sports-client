import { Player } from "@lottiefiles/react-lottie-player";
import useAuth from "../../../Hooks/useAuth";
import Carousel from "../Carousel/Carousel";
import Instructors from "../Instructors/Instructors";
import PopularClasses from "../PopularClasses/PopularClasses";

const Home = () => {
    const {user,loader} = useAuth();
    if (loader) {
        return <div className="h-[100vh] flex justify-center items-center">
            <Player
                autoplay
                loop
                src="https://assets10.lottiefiles.com/packages/lf20_lz5rbiit.json"
                style={{ height: '200px', width: '200px' }}
            >
            </Player>
        </div>
    }
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