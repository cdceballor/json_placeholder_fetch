import useGetAllUsers from "../hooks/useGetAllUsers";
import TableUsers from "./TableUsers";

const ListUsers = () => {
  const { users, loading, error, HandleDeleteUser } = useGetAllUsers();
  return (
    <div>
      {loading ? (
        "Loading users..."
      ) : error ? (
        `Error: ${error}`
      ) : (
        <TableUsers users={users} handleDeleteUser={HandleDeleteUser} />
      )}
    </div>
  );
};

export default ListUsers;
