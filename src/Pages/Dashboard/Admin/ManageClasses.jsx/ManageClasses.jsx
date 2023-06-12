import { useEffect, useState } from "react";
import useAxios from "../../../../Hooks/useAxios";

const ManageClasses = () => {
    const [baseUrl] = useAxios();
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        baseUrl.get('/classes')
            .then(res => setClasses(res.data))
    }, [])
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
                                    <button onClick={() => handleRole(ud._id, 'admin', ud)} disabled={ud?.role === 'admin' ? true : false} className="btn btn-primary mr-3 text-xs btn-sm">admin</button>
                                    <button onClick={() => handleRole(ud._id, 'instructor', ud)} disabled={ud?.role === 'instructor' ? true : false} className="btn btn-primary text-xs btn-sm">instructor</button>
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