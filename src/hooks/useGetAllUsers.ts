import { useCallback, useEffect, useState } from "react";
import { ENDPOINT } from "../constants";
import { GetUsers } from "../interfaces";

const useGetAllUsers = () => {
  const [users, setUsers] = useState<GetUsers[]>([]);
  const [usersToFilter, setUsersToFilter] = useState<GetUsers[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const fetchingUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${ENDPOINT}/users`);
      const json = await response.json();
      setUsers(json);
      setUsersToFilter(json);
    } catch (error) {
      setError(error instanceof Error ? error.message : String(error));
    } finally {
      setLoading(false);
    }
  };

  const handleMemoizedDeleteUser = useCallback(
    (id: number) => {
      setUsers(users.filter((user) => user.id !== id));
    },
    [users]
  );

  const handleMemoizedFilterUserByName = useCallback(
    (name: string) => {
      if (name === "") {
        setUsersToFilter(users);
      } else {
        setUsersToFilter(users.filter((user) =>
            user.name.toLowerCase().includes(name.toLowerCase())
          )
        );
      }
    },
    [users]
  );

  useEffect(() => {
    fetchingUsers();
  }, []);

  return {
    users: usersToFilter,
    error,
    loading,
    handleMemoizedDeleteUser,
    handleMemoizedFilterUserByName,
  };
};

export default useGetAllUsers;
