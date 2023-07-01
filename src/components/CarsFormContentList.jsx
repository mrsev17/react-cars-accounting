import { useState, useEffect } from "react";
import CarsFormCurrentPageControl from "./CarsFormCurrentPageControl";
import CarsFormCarItem from "./CarsFormCarItem";
import CarsFormTitles from "./CarsFormTitles";
import CarsFormNewCar from "./CarsFormNewCar";

const CarsFormContentList = ({
    originalData,
    setOriginalData,
    updateDataLS,
}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(originalData.cars.length / itemsPerPage);

    useEffect(() => {
        const storedPage = localStorage.getItem("currentPage");
        if (storedPage) {
            setCurrentPage(parseInt(storedPage));
        }
    }, []);
    useEffect(() => {
        localStorage.setItem("currentPage", currentPage);
    }, [currentPage]);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const slicedData = originalData.cars.slice(startIndex, endIndex);
    const goToNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };
    const goToPreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    /////////////////////////

    const [inputSearchValue, setInputSearchValue] = useState("");

    const handleChange = (event) => {
        setInputSearchValue(event.target.value);
    };

    //////////////

    return (
        <>
            <div className="cars-form__wrapper-panel-search-add-car d-flex align-items-center justify-content-between">
                <div className="cars-form__panel-search-input">
                    <input
                        type="text"
                        value={inputSearchValue}
                        onChange={handleChange}
                        placeholder="Search"
                    />
                </div>
                <CarsFormNewCar
                    originalData={originalData}
                    updateDataLS={updateDataLS}
                />
            </div>
            <CarsFormTitles />
            <div className="cars-form__content-list d-flex flex-column">
                <CarsFormCarItem
                    slicedData={slicedData}
                    originalData={originalData}
                    setOriginalData={setOriginalData}
                    updateDataLS={updateDataLS}
                />
                <CarsFormCurrentPageControl
                    originalData={originalData}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    goToPreviousPage={goToPreviousPage}
                    goToNextPage={goToNextPage}
                />
            </div>
        </>
    );
};

export default CarsFormContentList;
