import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <div className="h-[100vh] flex justify-center items-center">
            <div>
                <Player
                    autoplay
                    loop
                    src="https://assets4.lottiefiles.com/packages/lf20_suhe7qtm.json"
                    style={{ height: '300px', width: '300px' }}
                >
                </Player>
                <Link to='/'><button className='btn btn-primary mx-auto block'>Back to Home</button></Link>
            </div>
        </div>
    );
};

export default Error;