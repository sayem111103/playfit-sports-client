import { Player } from "@lottiefiles/react-lottie-player";
import useAuth from "../../../Hooks/useAuth";
import Carousel from "../Carousel/Carousel";
import Instructors from "../Instructors/Instructors";
import PopularClasses from "../PopularClasses/PopularClasses";
import OurCampus from "../OurCampus/OurCampus";
import { Fade } from "react-awesome-reveal";

const Home = () => {
    const { user, loader } = useAuth();
    if (loader) {
        return <div className="h-[100vh] flex justify-center items-center">
            <Player
                autoplay
                loop
                src="https://assets10.lottiefiles.com/packages/lf20_lz5rbiit.json"
                style={{ height: '100px', width: '100px' }}
            >
            </Player>
        </div>
    }
    return (
        <div>
            <Carousel></Carousel>
            <Fade damping>
                <PopularClasses></PopularClasses>
            </Fade>
            <Fade damping>
                <Instructors></Instructors>
            </Fade>
            <Fade damping>
                <OurCampus></OurCampus>
            </Fade>
        </div>
    );
};

export default Home;