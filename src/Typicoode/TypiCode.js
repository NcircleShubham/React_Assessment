import React, { useState, useEffect } from "react";
import axios from "axios";

const TypiCode = () => {
  const [formData, setFormData] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [typiCodeData, setTypiCodeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://jsonplaceholder.typicode.com/todos');
      setTypiCodeData(result.data);
    };

    fetchData();
  }, []);

  const handleInputChange = (event) => {
    setFormData(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setSearchQuery(formData);
  };

  const filteredData = typiCodeData.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const data = searchQuery ? filteredData : typiCodeData;

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={formData}
          onChange={handleInputChange}
          placeholder="Search by title"
        />
        <button type="submit">Submit</button>
      </form>
      <table style={{marginTop: '20px'}}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(0, 20).map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.title}</td>
              <td>{data.completed.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TypiCode;