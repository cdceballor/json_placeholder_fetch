import "../assets/styles/TableUsers.css";
import { GetUsers } from "../interfaces";

interface TableUsersProps {
  users: GetUsers[];
  handleDeleteUser: (id: number) => void;
}
const TableUsers = ({ users, handleDeleteUser }: TableUsersProps) => {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Website</th>
        <th>Action</th>
      </tr>
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
                <button onClick={() => handleDeleteUser(user.id)}>🗑️</button>
              </td>
            </tr>
          );
        })}
    </table>
  );
};

export default TableUsers;
