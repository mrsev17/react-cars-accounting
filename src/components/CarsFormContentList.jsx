import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import CarsFormCurrentPageControl from "./CarsFormCurrentPageControl";
import CarsFormCarItem from "./CarsFormCarItem";
import CarsFormTitles from "./CarsFormTitles";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

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

    /////////////////////////

    const [inputSearchValue, setInputSearchValue] = useState("");

    const handleChange = (event) => {
        setInputSearchValue(event.target.value);
    };

    //////////////

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Inputs for new car //

    const [inputNewCarCompany, setInputNewCarCompany] = useState("");
    const [validCompany, setValidCompany] = useState(true);

    const controlledInputNewCarCompany = (event) => {
        const inputValue = event.target.value;
        const filteredValue = inputValue.replace(/[^A-Za-z0-9]/g, "");
        const truncatedValue = filteredValue.slice(0, 20);
        setInputNewCarCompany(truncatedValue);
        setValidCompany(truncatedValue.length > 2);
    };

    const inputValidCompanyClass =
        validCompany && inputNewCarCompany.length > 2 ? "valid" : "";

    // = = = = = = = = = = = = //

    const [inputNewCarModel, setInputNewCarModel] = useState("");
    const [validModel, setValidModel] = useState(true);

    const controlledInputNewCarModel = (event) => {
        const inputValue = event.target.value;
        const filteredValue = inputValue.replace(/[^A-Za-z0-9]/g, "");
        const truncatedValue = filteredValue.slice(0, 15);
        setInputNewCarModel(truncatedValue);
        setValidModel(truncatedValue.length > 2);
    };
    const inputValidModelClass =
        validModel && inputNewCarModel.length > 2 ? "valid" : "";

    // VIN Code //

    const [inputNewCarVIN, setInputNewCarVIN] = useState("");
    const [validVIN, setValidVIN] = useState(true);

    const controlledInputNewCarVIN = (event) => {
        const value = event.target.value;
        const formattedValue = value
            .replace(/[^A-Za-z0-9]/g, "")
            .toUpperCase()
            .slice(0, 20);
        setInputNewCarVIN(formattedValue);
        setValidVIN(formattedValue.length <= 10);
    };

    const inputValidVINClass = validVIN ? "" : "valid";

    ///////

    const [inputNewCarYear, setInputNewCarYear] = useState("");
    const [validYear, setValidYear] = useState(true);

    const controlledInputNewCarYear = (event) => {
        const value = event.target.value;
        const formattedValue = value.replace(/\D/g, "").slice(0, 4);
        setInputNewCarYear(formattedValue);
        setValidYear(formattedValue.length !== 4);
    };

    const inputValidYearClass = validYear ? "" : "valid";

    // ======================= //

    const [inputNewCarColor, setInputNewCarColor] = useState("");
    const [validColor, setValidColor] = useState(true);

    const controlledInputNewCarColor = (event) => {
        const inputValue = event.target.value;
        const filteredValue = inputValue.replace(/[^A-Za-z0-9]/g, "");
        const truncatedValue = filteredValue.slice(0, 15);
        setInputNewCarColor(truncatedValue);
        setValidColor(truncatedValue.length > 2);
    };

    const inputValidColorClass =
        validColor && inputNewCarColor.length > 2 ? "valid" : "";

    const [inputNewCarPrice, setInputNewCarPrice] = useState("");
    const [validPrice, setValidPrice] = useState(true);

    const validatePrice = (value) => {
        return !isNaN(parseFloat(value)) && isFinite(value);
    };

    const controlledInputNewCarPrice = (event) => {
        const value = event.target.value;
        let formattedValue = value.replace(/[^0-9.]/g, "");
        if (formattedValue.length === 1 && formattedValue[0] === ".") {
            formattedValue = "";
        }
        if (formattedValue.split(".").length > 2) {
            formattedValue = formattedValue.slice(0, -1);
        }
        setInputNewCarPrice(formattedValue);
        setValidPrice(validatePrice(formattedValue.length > 0));
    };

    const inputValidPriceClass = validPrice ? "" : "valid";

    // Availability //

    const [inputNewCarAvailability, setInputNewCarAvailability] =
        useState(false);

    const controlledInputNewCarAvailability = (event) => {
        setInputNewCarAvailability(event.target.value);
    };

    const updateDataLS = (updatedData) => {
        setOriginalData(updatedData);
        localStorage.setItem("myData", JSON.stringify(updatedData));
    };

    const addNewCar = () => {
        const newCarObject = {
            availability: inputNewCarAvailability ? "Available" : "Unavailable",
            car: inputNewCarCompany,
            car_color: inputNewCarColor,
            car_model: inputNewCarModel,
            car_model_year: inputNewCarYear,
            car_vin: inputNewCarVIN,
            id: uuidv4(),
            price: `$${inputNewCarPrice}`,
        };
        console.log(originalData);
        const addNewCarInData = [newCarObject, ...originalData.cars];
        updateDataLS({ cars: addNewCarInData });
        console.log(newCarObject);
    };

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
                <div className="cars-form__panel-add-car">
                    <>
                        <Button variant="primary" onClick={handleShow}>
                            Add Car
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>New Car</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="cars-form__new-car-inputs-wrapper d-flex justify-content-around">
                                    <div className="cars-form__new-car-left-side-inputs d-flex align-items-center flex-column gap-2">
                                        <div className="cars-form__new-car-input">
                                            <input
                                                className={
                                                    inputValidCompanyClass
                                                }
                                                type="text"
                                                value={inputNewCarCompany}
                                                onChange={
                                                    controlledInputNewCarCompany
                                                }
                                                placeholder="Company"
                                            />
                                        </div>
                                        <div className="cars-form__new-car-input">
                                            <input
                                                className={inputValidModelClass}
                                                type="text"
                                                value={inputNewCarModel}
                                                onChange={
                                                    controlledInputNewCarModel
                                                }
                                                placeholder="Model"
                                            />
                                        </div>
                                        <div className="cars-form__new-car-input">
                                            <input
                                                className={inputValidVINClass}
                                                type="text"
                                                value={inputNewCarVIN}
                                                onChange={
                                                    controlledInputNewCarVIN
                                                }
                                                placeholder="VIN"
                                            />
                                        </div>
                                        <div className="cars-form__new-car-input">
                                            <input
                                                className={inputValidYearClass}
                                                type="text"
                                                value={inputNewCarYear}
                                                onChange={
                                                    controlledInputNewCarYear
                                                }
                                                placeholder="Year"
                                            />
                                        </div>
                                    </div>
                                    <div className="cars-form__new-car-right-side-inputs d-flex align-items-center flex-column gap-2">
                                        <div className="cars-form__new-car-input">
                                            <input
                                                className={inputValidColorClass}
                                                type="text"
                                                value={inputNewCarColor}
                                                onChange={
                                                    controlledInputNewCarColor
                                                }
                                                placeholder="Color"
                                            />
                                        </div>
                                        <div className="cars-form__new-car-input">
                                            <input
                                                className={inputValidPriceClass}
                                                type="text"
                                                value={inputNewCarPrice}
                                                onChange={
                                                    controlledInputNewCarPrice
                                                }
                                                placeholder="Price"
                                            />
                                        </div>
                                        <div className="cars-form__new-car-input">
                                            <select
                                                className="valid"
                                                value={inputNewCarAvailability}
                                                onChange={
                                                    controlledInputNewCarAvailability
                                                }
                                            >
                                                <option value={1}>
                                                    Unavailable
                                                </option>

                                                <option value={0}>
                                                    Available
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button
                                    variant="secondary"
                                    onClick={handleClose}
                                >
                                    Close
                                </Button>
                                <Button
                                    variant="primary"
                                    onClick={() => {
                                        handleClose();
                                        addNewCar();
                                    }}
                                >
                                    Save Car
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </>
                </div>
            </div>
            <CarsFormTitles />
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
        </>
    );
};

export default CarsFormContentList;
