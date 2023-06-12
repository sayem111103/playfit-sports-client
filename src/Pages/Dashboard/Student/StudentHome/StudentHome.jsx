import useAuth from "../../../../Hooks/useAuth";

const StudentHome = () => {
    const {user} = useAuth()
    return (
        <div className="text-center flex-col flex items-center mt-5 font-extrabold">
            Welcome {user?.displayName || 'Dear User'}
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

export default StudentHome;