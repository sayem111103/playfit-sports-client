import moment from "moment";
import usePayment from "../../../../Hooks/usePayment";
import DashboardHeader from "../../../../components/DashboardHeader";

const PaymentHistory = () => {
    const [paidInfo] = usePayment();
    return (
        <div>
            <div className="w-[95%] mx-auto pt-10">
                <DashboardHeader name={'Payment History'} />
                <div className="overflow-x-auto">
                    <table className="table rounded-t-xl overflow-hidden">
                        {/* head */}
                        <thead className="bg-slate-100">
                            <tr className="border-0">
                                <th></th>
                                <th className="text-sm">Class Name</th>
                                <th className="text-sm">Email</th>
                                <th className="text-sm">Price</th>
                                <th className="text-sm">Purchased Date</th>
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
                                <td>{cd?.email}</td>
                                <td>${cd?.price}</td>
                                <td>{moment(cd?.date).format("MMM Do yyyy")}</td>
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
        </div>
    );
};

export default PaymentHistory;