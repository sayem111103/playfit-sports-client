import { AiFillEdit } from 'react-icons/ai';
import useClasses from '../../../../Hooks/useClasses';
import { Link } from 'react-router-dom';
import DashboardHeader from '../../../../components/DashboardHeader';

const MyClasses = () => {
    const [classes, refetch] = useClasses();
    return (
        <>
            <div className="w-[95%] mx-auto pt-10">
                <DashboardHeader name={'My Classes'} />
                <div className="overflow-x-auto">
                    <table className="table rounded-t-xl overflow-hidden">
                        {/* head */}
                        <thead className="bg-slate-100">
                            <tr className="border-0">
                                <th></th>
                                <th className="text-sm">Class Name</th>
                                <th className="text-sm">Total Seat</th>
                                <th className="text-sm">Total Student</th>
                                <th className="text-sm">Available Seat</th>
                                <th className="text-sm">Feedback</th>
                                <th className="text-center text-sm">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row */}
                            {classes?.map((cd, index) => <tr className="border-b-slate-200" key={cd?._id}>
                                <td>{index + 1}.</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div>
                                            <div className="font-bold">{cd?.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{cd?.totalSeat}</td>
                                <td>{parseFloat(cd?.totalSeat - cd?.availableSeats)}</td>
                                <td>{cd?.availableSeats}</td>
                                <td>{cd?.feedback || 'Application is in review'}</td>
                                <th className="text-center">
                                    <Link to={`/update/${cd._id}`}><button disabled={cd?.status === 'denied'? true: false} className="btn btn-primary mr-3 text-xs btn-sm"><AiFillEdit title="edit"></AiFillEdit></button></Link>
                                    <button className={`btn ${cd?.status === 'approved'? 'bg-green-400 border-0 text-white hover:bg-green-400' :cd?.status === 'denied'? 'bg-red-500 hover:bg-red-500 text-white' : 'btn-primary'} mr-3 text-xs btn-sm border-0`}>{cd?.status === 'pending' ? 'pending' : cd?.status}</button>
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
        </>
    );
};

export default MyClasses;