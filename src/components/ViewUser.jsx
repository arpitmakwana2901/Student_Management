import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:3009/users/" + id)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-2xl rounded-lg p-8">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          Detail of User
        </h3>
        <div className="space-y-4">
          <div className="mb-4">
            <strong className="text-gray-700 dark:text-gray-300">
              Name: {data.name}
            </strong>
          </div>
          <div className="mb-4">
            <strong className="text-gray-700 dark:text-gray-300">
              Email: {data.email}
            </strong>
          </div>
          <div className="mb-4">
            <strong className="text-gray-700 dark:text-gray-300">
              Phone: {data.phone}
            </strong>
          </div>
          <Link
            to={`/update/${id}`}
            className="inline-block px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
          >
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Read;
