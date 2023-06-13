import moment from "moment/moment";
import usePayment from "../../../../Hooks/usePayment";
import DashboardHeader from "../../../../components/DashboardHeader";

const MyEnrollClass = () => {
    const [paidInfo] = usePayment();
    return (
        <div className="w-[95%] mx-auto pt-10">
                <DashboardHeader name={'My Enrolled Classes'} />
                <div className="overflow-x-auto">
                    <table className="table rounded-t-xl overflow-hidden">
                        {/* head */}
                        <thead className="bg-slate-100">
                            <tr className="border-0">
                                <th></th>
                                <th className="text-sm">Class Name</th>
                                <th className="text-sm">Payment Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row */}
                            {paidInfo?.map((cd, index) => <tr className="border-b-slate-200" key={cd?._id}>
                                <td>{index + 1}.</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div>
                                            <div className="font-bold">{cd?.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{cd?.status}</td>
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

export default MyEnrollClass;