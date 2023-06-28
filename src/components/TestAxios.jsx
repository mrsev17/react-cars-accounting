import React, { useState, useEffect } from "react";

// const TestAxios = () => {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         try {
//             const response = await fetch("https://myfakeapi.com/api/cars/"); // Replace with your API endpoint URL
//             const jsonData = await response.json();
//             setData(jsonData);
//             console.log(jsonData);
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }
//     };

//     return <div></div>;
// };

// export default TestAxios;

// const myTest = {
//     cars: [
//         {
//             availability: false,
//             car: "Mitsubishi",
//             car_color: "Yellow",
//             car_model: "Montero",
//             car_model_year: 2002,
//             car_vin: "SAJWJ0FF3F8321657",
//             id: 1,
//             price: "$2814.46",
//         },
//         {
//             availability: false,
//             car: "Mitsubishi",
//             car_color: "Yellow",
//             car_model: "Montero",
//             car_model_year: 2002,
//             car_vin: "SAJWJ0FF3F3281657",
//             id: 2,
//             price: "$28314.46",
//         },
//         {
//             availability: false,
//             car: "Mitsubishi",
//             car_color: "Yellow",
//             car_model: "Montero",
//             car_model_year: 2012,
//             car_vin: "SAJWJ0FF3F8321657",
//             id: 3,
//             price: "$2814.46",
//         },
//     ],
// };
