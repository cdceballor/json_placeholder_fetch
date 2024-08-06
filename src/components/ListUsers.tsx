import { useEffect, useState } from "react";
import useGetAllUsers from "../hooks/useGetAllUsers";
import TableUsers from "./TableUsers";

const ListUsers = () => {
  const {
    users,
    loading,
    error,
    handleMemoizedDeleteUser,
    handleMemoizedFilterUserByName,
  } = useGetAllUsers();
  const [searchName, setSearchName] = useState("");

  const handleSearchChange = (value: string) => {
    setSearchName(value);
  };

  useEffect(() => {
    handleMemoizedFilterUserByName(searchName);
  }, [searchName, handleMemoizedFilterUserByName]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <TableUsers
      users={users}
      handleDeleteUser={handleMemoizedDeleteUser}
      handleSearchChange={handleSearchChange}
    />
  );
};

export default ListUsers;
