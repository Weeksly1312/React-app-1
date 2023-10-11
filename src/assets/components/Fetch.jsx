import React, { useEffect, useState } from "react";

export default function Fetch() {
  const [dataApi, setDataApi] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();

      setDataApi(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      {dataApi.map((user) => (
        <p key={user.id}>
          <strong>Id:</strong> {user.id}   <strong>Name:</strong> {user.name}
        </p>
      ))}
    </div>
  );
}
