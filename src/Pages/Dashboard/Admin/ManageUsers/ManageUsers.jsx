import Swal from "sweetalert2";
import useAxios from "../../../../Hooks/useAxios";
import useUser from "../../../../Hooks/useUser";
import DashboardHeader from "../../../../components/DashboardHeader";
import useAuth from "../../../../Hooks/useAuth";

const ManageUsers = () => {
    const [users, refetch] = useUser();
    const {user} = useAuth()
    const [baseUrl] = useAxios();
    const handleRole = (id, name, data) => {
        baseUrl.patch(`user/${id}`, { name: name })
            .then(res => {
                if (res.data.modifiedCount) {
                    if (name === 'admin') {
                        refetch()
                        Swal.fire(
                            '',
                            `${data.name} is an admin now!`,
                            'success'
                        )
                    }
                    if (name === 'instructor') {
                        refetch()
                        Swal.fire(
                            '',
                            `${data.name} is an instructor now!`,
                            'success'
                        )
                    }
                }
            })
    }

    return (
        <div className="w-9/12 mx-auto pt-10">
            <DashboardHeader name={'Manage User'} />
            <div className="overflow-x-auto">
                <table className="table rounded-t-xl overflow-hidden">
                    {/* head */}
                    <thead className="bg-slate-100">
                        <tr className="border-0">
                            <th></th>
                            <th className="text-sm">Name</th>
                            <th className="text-sm">Email</th>
                            <th className="text-center text-sm">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row */}
                        {users?.map((ud, index) => <tr className="border-b-slate-200" key={ud?._id}>
                            <td>{index + 1}.</td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div>
                                        <div className="font-bold">{ud?.name || user.displayName}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {ud?.email}
                            </td>
                            <th className="text-center">
                                <button onClick={() => handleRole(ud?._id, 'admin', ud)} disabled={ud?.role === 'admin' ? true : false} className="btn btn-primary mr-3 text-xs btn-sm">admin</button>
                                <button onClick={() => handleRole(ud?._id, 'instructor', ud)} disabled={ud?.role === 'instructor' ? true : false} className="btn btn-primary text-xs btn-sm">instructor</button>
                            </th>
                        </tr>)}
                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr className="bg-slate-100">
                            <th colSpan={5}></th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    );
};

export default ManageUsers;