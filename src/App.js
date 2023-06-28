import { useState, useEffect } from "react";
import AnimationLoadData from "./components/AnimationLoadData";
import CarsFormTitles from "./components/CarsFormTitles";
import CarsFormContentList from "./components/CarsFormContentList";
import "./App.css";

function App() {
    const [loadingOriginalData, setLoadingOriginalData] = useState(true);
    const [originalData, setOriginalData] = useState([]);

    useEffect(() => {
        const dataLocalStorage = localStorage.getItem("myData");
        if (dataLocalStorage) {
            setOriginalData(JSON.parse(dataLocalStorage));
            setLoadingOriginalData(false);
            console.log("Loaded");
        } else {
            fetchData();
            console.log("Need Load");
        }
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch("https://myfakeapi.com/api/cars/");
            const responseData = await response.json();
            setOriginalData(responseData);
            localStorage.setItem("myData", JSON.stringify(responseData));
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoadingOriginalData(false);
        }
    };

    // const updateDataLS = (updatedData) => {
    //     setOriginalData(updatedData);
    //     localStorage.setItem("myData", JSON.stringify(updatedData));
    // };

    // Function for delete card from list

    // const handleRemove = (id) => {
    //     const newDataRemove = originalData.cars.filter(
    //         (item) => item.id !== id
    //     );
    //     updateDataLS({ cars: newDataRemove });
    // };

    //////////////////////////////////

    return (
        <div className="App">
            <h1>Cars Form</h1>
            {loadingOriginalData ? (
                <AnimationLoadData />
            ) : (
                <div className="cars-form__main-wrapper">
                    <div className="cars-form__main-list">
                        <CarsFormTitles />
                        <CarsFormContentList originalData={originalData} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
