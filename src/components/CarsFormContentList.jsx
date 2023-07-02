import { useState } from "react";
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
    const [inputSearchValueCar, setInputSearchValueCar] = useState("");

    const controlledInputSearchCar = (e) => {
        setInputSearchValueCar(e.target.value);
        returnToFirstPage();
    };

    const filteredDataBySearch =
        inputSearchValueCar === ""
            ? originalData
            : originalData.cars.filter((item) =>
                  Object.values(item).some((value) =>
                      String(value)
                          .toLowerCase()
                          .includes(inputSearchValueCar.toLowerCase())
                  )
              );
    const itemsPerPage = 15;
    const totalPages =
        inputSearchValueCar === ""
            ? Math.ceil(originalData.cars.length / itemsPerPage)
            : Math.ceil(filteredDataBySearch.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const slicedData =
        inputSearchValueCar === ""
            ? originalData.cars.slice(startIndex, endIndex)
            : filteredDataBySearch.slice(startIndex, endIndex);

    const goToNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };
    const goToPreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const returnToFirstPage = () => {
        setCurrentPage(1);
    };

    return (
        <>
            <div className="cars-form__wrapper-panel-search-add-car d-flex align-items-center justify-content-between">
                <div className="cars-form__panel-search-input d-flex align-items-center gap-2">
                    <input
                        type="text"
                        value={inputSearchValueCar}
                        onChange={(e) => controlledInputSearchCar(e)}
                        placeholder="Search"
                    />
                    <h5>
                        {inputSearchValueCar === ""
                            ? ""
                            : `Found ${filteredDataBySearch.length} matches`}
                    </h5>
                </div>
                <CarsFormNewCar
                    originalData={originalData}
                    updateDataLS={updateDataLS}
                />
            </div>
            <CarsFormTitles />
            <div className="cars-form__content-list d-flex justify-content-between flex-column">
                <div>
                    <CarsFormCarItem
                        filteredDataBySeacrh={filteredDataBySearch}
                        slicedData={slicedData}
                        originalData={originalData}
                        setOriginalData={setOriginalData}
                        updateDataLS={updateDataLS}
                        setCurrentPage={setCurrentPage}
                        totalPages={totalPages}
                    />
                </div>
                <div>
                    <CarsFormCurrentPageControl
                        originalData={originalData}
                        currentPage={currentPage}
                        totalPages={totalPages}
                        goToPreviousPage={goToPreviousPage}
                        goToNextPage={goToNextPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
            </div>
        </>
    );
};

export default CarsFormContentList;
