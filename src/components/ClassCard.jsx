import LazyLoad from "react-lazy-load";
import useSecure from "../Hooks/useSecure";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ClassCard = ({data}) => {
    const {user} = useAuth();
    const navigate = useNavigate()
    const [secure] = useSecure();
    const handlecart = (data) =>{
        if(!user){
          return Swal.fire({
                title: 'Are you sure?',
                text: "If you want to Enroll class then first you need to login",
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login')
                }
              })
        }
        secure.post('/classcart',{id: data?._id,name:data?.name,price:data?.price,email:user?.email})
        .then(res =>{
            if(res.data.message === "Only student can enroll"){
                Swal.fire(
                    '',
                    'Only student can enroll',
                    'error'
                  )
            }
            if(res.data.message === "already exist"){
                Swal.fire(
                    '',
                    'You can not Enroll twice with same user',
                    'error'
                  )
            }
            if(res.data.insertedId){
                Swal.fire(
                    '',
                    'Successfully Added',
                    'success'
                  )
            }
        })
    }
    return (
        <>
            <div className="card w-[95%] mx-auto mb-4 lg:w-96 glass">
                <figure><LazyLoad className="w-full"><img className="h-[250px] w-full" src={data?.image} alt={data?.image} /></LazyLoad></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{data?.name}</h2>
                    <p className="text-md font-light"><span className="text-lg font-medium">Instructor:</span> {data?.instructor}</p>
                    <p className="text-md font-light"><span className="text-lg font-medium">Total Seats:</span> {data?.totalSeat   }</p>
                    <p className="text-md font-light"><span className="text-lg font-medium">Available Seats:</span> {data?.availableSeats}</p>
                    <p className="text-md font-light"><span className="text-lg font-medium">Price:</span> ${data?.price}</p>
                    <div className="card-actions justify-end">
                        <button onClick={()=> handlecart(data)} disabled={data?.availableSeats === 0} className="btn btn-primary">Enroll now!</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ClassCard;