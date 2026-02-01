import { useCallback } from "react";
import { useState } from "react";
import { useMemo } from "react";
import UserList from "./components/userList";

function App() {
  const [filter, setFilter] = useState("");

  const userList = useMemo(() => {
    return [
      { id: 1, name: "Alex" },
      { id: 2, name: "Maria" },
      { id: 3, name: "John" },
      { id: 4, name: "Sophia" },
      { id: 5, name: "David" },
    ];
  }, []);

  const filterUsers = useCallback(() => {
    return userList.filter((user) =>
      user.name.toLowerCase().includes(filter.toLowerCase()),
    );
  }, [filter, userList]);

  const filteredUsers = useMemo(() => filterUsers(), [filterUsers]);

  return (
    <>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <UserList users={filteredUsers} />
    </>
  );
}

export default App;
