import { useState, useEffect } from "react";
import CarsFormCurrentPageControl from "./CarsFormCurrentPageControl";
import CarsFormCarItem from "./CarsFormCarItem";

const CarsFormContentList = ({ originalData, setOriginalData }) => {
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

    return (
        <div className="cars-form__content-list d-flex flex-column">
            <CarsFormCarItem
                slicedData={slicedData}
                originalData={originalData}
                setOriginalData={setOriginalData}
            />
            <CarsFormCurrentPageControl
                originalData={originalData}
                currentPage={currentPage}
                totalPages={totalPages}
                goToPreviousPage={goToPreviousPage}
                goToNextPage={goToNextPage}
            />
        </div>
    );
};

export default CarsFormContentList;
