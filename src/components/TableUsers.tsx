import "../assets/styles/TableUsers.css";
import { GetUsers } from "../interfaces";

interface TableUsersProps {
  users: GetUsers[];
  handleDeleteUser: (id: number) => void;
  handleSearchChange: (value: string) => void;
}

const TableUsers = ({
  users,
  handleDeleteUser,
  handleSearchChange,
}: TableUsersProps) => {
  return (
    <>
      <input
        type="text"
        className="search"
        placeholder="Search..."
        onChange={(e) => handleSearchChange(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users
            .sort((a, b) => a.id - b.id)
            .map((user, key) => {
              return (
                <tr key={key}>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.website}</td>
                  <td>
                    <button onClick={() => handleDeleteUser(user.id)}>
                      🗑️
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default TableUsers;
