import useUser from "../../../../Hooks/useUser";

const ManageUsers = () => {
    const [users] = useUser()
    return (
        <div>
            {users.length}
        </div>
    );
};

export default ManageUsers;