import useCart from "../../../../Hooks/useCart";
import { RiDeleteBin5Line } from 'react-icons/ri';
import useSecure from "../../../../Hooks/useSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MySelectedClass = () => {
    const [cart, refetch] = useCart();
    const [secure] = useSecure()

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                secure.delete(`/classcart/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className="w-[95%] mx-auto pt-10">
            <h3 className='text-center mb-6 font-extrabold text-4xl uppercase'>My Classes</h3>
            <div className="overflow-x-auto">
                <table className="table rounded-t-xl overflow-hidden">
                    {/* head */}
                    <thead className="bg-slate-100">
                        <tr className="border-0">
                            <th></th>
                            <th className="text-sm">Class Name</th>
                            <th className="text-sm">Price</th>
                            <th className="text-center text-sm">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row */}
                        {cart?.map((cd, index) => <tr className="border-b-slate-200" key={cd?._id}>
                            <td>{index + 1}.</td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div>
                                        <div className="font-bold">{cd?.name}</div>
                                    </div>
                                </div>
                            </td>
                            <td>${cd?.price}</td>
                            <th className="text-center">
                                <button onClick={() => handleDelete(cd?._id)} className={`btn btn-error text-white mr-3 text-xs btn-sm border-0`}><RiDeleteBin5Line className="text-md"></RiDeleteBin5Line></button>
                                <Link to={`/payment/${cd._id}`}><button className={`btn btn-primary text-white mr-3 text-xs btn-sm border-0`}>pay</button></Link>
                            </th>
                        </tr>)}
                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr className="bg-slate-100">
                            <th colSpan={8}></th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    );
};

export default MySelectedClass;