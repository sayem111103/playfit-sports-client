import Swal from "sweetalert2";
import useManageClasses from "../../../../Hooks/useManageClasses";
import useSecure from "../../../../Hooks/useSecure";

const ManageClasses = () => {
    const [classes, refetch] = useManageClasses();
    const [secure] = useSecure();

    const handleStatus = (id, name) => {
        Swal.fire({
            input: 'textarea',
            inputLabel: 'Message',
            inputPlaceholder: `Type your ${name} message here...`,
            inputAttributes: {
                'aria-label': 'Type your message here'
            },
            showCancelButton: true
        })
        const btn = document.getElementsByClassName('swal2-confirm')[0];
        btn.textContent = 'Send Feedback'
        btn.setAttribute('id', 'submit');
        document.getElementById('submit').addEventListener('click', () => {
            const text = document.getElementsByClassName('swal2-textarea')[0].value;
            secure.patch(`/classes/${id}`, { feedback: `${text}`, name: name })
                .then(res => {
                    if (res.data.modifiedCount) {
                        refetch()
                    }
                })
        })
    };

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
                secure.delete(`/classes/${id}`)
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
        <div>
            <div className="w-full px-4 mx-auto py-10">
                <h3 className='text-center mb-6 font-extrabold text-4xl uppercase'>Manage Classes</h3>
                <div className="overflow-x-auto">
                    <table className="table rounded-t-xl overflow-hidden">
                        {/* head */}
                        <thead className="bg-slate-100">
                            <tr className="border-0">
                                <th></th>
                                <th></th>
                                <th>Class Image</th>
                                <th className="text-sm">Class Name</th>
                                <th className="text-sm">Instructor Name</th>
                                <th className="text-sm">Email</th>
                                <th className="text-center text-sm">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row */}
                            {classes?.map((ud, index) => <tr className="border-b-slate-200" key={ud._id}>
                                <td>
                                <button onClick={() => handleDelete(ud._id)} disabled={ud?.role === 'admin' ? true : false} className="btn bg-red-500 text-white border-0 hover:bg-red-500 mr-3 text-xs btn-sm">X</button>
                                </td>
                                <td>{index + 1}.</td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={ud.image} alt={ud.image} />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div>
                                            <div className="font-bold text-xs">{ud.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-xs">{ud.instructor}</td>
                                <td className="text-xs">
                                    {ud.instructorEmail}
                                </td>
                                <th className="text-center">                                    
                                    {ud?.status === 'denied'?<button className="btn bg-red-500 text-white border-0 hover:bg-red-500 mr-3 text-xs btn-sm">denied</button>
                                    :
                                    <><button onClick={() => handleStatus(ud._id, 'denied')} disabled={ud?.status === 'approved' ? true : false} className="btn bg-red-500 text-white border-0 hover:bg-red-500 mr-3 text-xs btn-sm">deny</button>
                                    <button onClick={() => handleStatus(ud._id, 'approved')} disabled={ud?.status === 'approved' ? true : false} className={ud?.status === 'approved' ? 'btn disabled:bg-green-400 disabled:text-white text-xs btn-sm' : 'btn btn-primary text-xs btn-sm'}>{ud?.status === 'approved' ? 'approved' : 'approve'}</button></>}
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
        </div>
    );
};

export default ManageClasses;