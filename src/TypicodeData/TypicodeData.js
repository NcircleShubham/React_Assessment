import React, { useEffect } from "react";
import axios from "axios";
const TypiCodeData = () => {
    const [data, setData] = React.useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://jsonplaceholder.typicode.com/todos'
      );
      setData(result.data);
    };

    fetchData();
  }, []);
    console.log("data",data)
 return data 
}
export default TypiCodeData