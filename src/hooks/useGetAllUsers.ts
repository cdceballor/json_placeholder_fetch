import { useEffect, useState } from "react";
import { ENDPOINT } from "../constants";
import { GetUsers } from "../interfaces";

const useGetAllUsers=()=> {
  const [users, setUsers] = useState<GetUsers[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<null | string>(null);
    const fetchingUsers = async () => {
      setLoading(true);
      try{
          fetch(`${ENDPOINT}/users`)
            .then(response => response.json())
            .then(json => setUsers(json))
      }
      catch(error){
          setError(error instanceof Error ? error.message : String(error))
      }
      finally{
        setLoading(false);
      }
    }

    const HandleDeleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  
      useEffect(()=>{
        fetchingUsers()
    },[])

      return {users, loading, error, HandleDeleteUser}
}

export default useGetAllUsers