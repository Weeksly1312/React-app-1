import React, { useEffect, useState } from "react";
import axios from "axios";

const Axios = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Make a GET request when the component mounts
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // Handle successful response
        setData(response.data);
      })
      .catch((err) => {
        // Handle error
        setError(err);
      });
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

  return (
    <div>
      {data && (
        <div>
        <h1>User List</h1>
        {data.map((user) => (
          <p key={user.id}>
            <strong>Id:</strong> {user.id} <strong>Name:</strong> {user.name}
          </p>
        ))}
      </div>
      )}
      {error && (
        <div>
          <h2>Error Occurred:</h2>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Axios;
