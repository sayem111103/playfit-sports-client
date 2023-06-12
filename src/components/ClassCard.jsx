import LazyLoad from "react-lazy-load";

const ClassCard = ({data}) => {
    return (
        <>
            <div className="card w-96 glass">
                <figure><LazyLoad className="w-full"><img className="h-[250px] w-full" src={data?.image} alt={data?.image} /></LazyLoad></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{data?.name}</h2>
                    <p className="text-md font-light"><span className="text-lg font-medium">Instructor:</span> {data?.instructor}</p>
                    <p className="text-md font-light"><span className="text-lg font-medium">Total Seats:</span> {data?.totalSeat   }</p>
                    <p className="text-md font-light"><span className="text-lg font-medium">Available Seats:</span> {data?.availableSeats}</p>
                    <div className="card-actions justify-end">
                        <button disabled={data?.availableSeats === 0? true : false} className="btn btn-primary">Enroll now!</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ClassCard;