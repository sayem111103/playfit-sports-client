import useAuth from "../../../../Hooks/useAuth";

const AdminHome = () => {
    const { user } = useAuth();
    return (
        <div className="text-center flex-col flex items-center mt-5">
            <div><p className="capitalize font-extrabold">Welcome {user?.displayName || 'Dear User'}</p></div>
            <>
                <div className="avatar mt-3">
                    <div className="w-24 rounded">
                        <img src={user?.photoURL} />
                    </div>
                </div>
            </>

        </div>
    );
};

export default AdminHome;