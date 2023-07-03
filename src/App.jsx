import { useState, useEffect } from "react";
import { Loader } from "./components/Loader";
import { ContentList } from "./components/ContentList";
import { ToastContainer } from "react-toastify";

function App() {
    const [loadingOriginalData, setLoadingOriginalData] = useState(true);
    const [originalData, setOriginalData] = useState([]);

    useEffect(() => {
        const dataLocalStorage = localStorage.getItem("myData");
        if (dataLocalStorage) {
            setOriginalData(JSON.parse(dataLocalStorage));
            setLoadingOriginalData(false);
        } else {
            fetchData();
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

    const updateDataLS = (updatedData) => {
        setOriginalData(updatedData);
        localStorage.setItem("myData", JSON.stringify(updatedData));
    };

    return (
        <div className="App">
            <h1>Cars Accounting</h1>
            {loadingOriginalData ? (
                <Loader />
            ) : (
                <>
                    <div className="cars-form__main-wrapper">
                        <div className="cars-form__main-list">
                            <ContentList
                                originalData={originalData}
                                setOriginalData={setOriginalData}
                                updateDataLS={updateDataLS}
                            />
                        </div>
                    </div>
                    <ToastContainer
                        theme="dark"
                        autoClose={1000}
                        hideProgressBar
                    />
                </>
            )}
        </div>
    );
}

export default App;
