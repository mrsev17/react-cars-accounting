import { v4 as uuidv4 } from "uuid";
import { useState, lazy, Suspense } from "react";
import { toast, Flip } from "react-toastify";
import { Button, Modal, Spinner } from "react-bootstrap";
const CarsFormNewCarInputsWrapper = lazy(() =>
    import("./CarsFormNewCarInputsWrapper")
);

const CarsFormNewCar = ({ originalData, updateDataLS }) => {
    const [showNewCar, setShowNewCar] = useState(false);
    const [inputNewCarCompany, setInputNewCarCompany] = useState("");
    const [inputNewCarModel, setInputNewCarModel] = useState("");
    const [inputNewCarVIN, setInputNewCarVIN] = useState("");
    const [inputNewCarYear, setInputNewCarYear] = useState("");
    const [inputNewCarColor, setInputNewCarColor] = useState("");
    const [inputNewCarPrice, setInputNewCarPrice] = useState("");
    const [inputNewCarAvailability, setInputNewCarAvailability] =
        useState(false);

    const cleanInputsForNewCar = () => {
        setInputNewCarCompany("");
        setInputNewCarModel("");
        setInputNewCarColor("");
        setInputNewCarYear("");
        setInputNewCarVIN("");
        setInputNewCarPrice("");
    };

    const handleCloseNewCar = () => setShowNewCar(false);
    const handleShowNewCar = () => setShowNewCar(true);

    const controlledInputNewCarCompany = (event) => {
        const inputValue = event.target.value;
        const filteredValue = inputValue.replace(/[^A-Za-z0-9\s]|^\s/g, "");
        const truncatedValue = filteredValue.slice(0, 20);
        setInputNewCarCompany(truncatedValue);
    };

    const controlledInputNewCarModel = (event) => {
        const inputValue = event.target.value;
        const filteredValue = inputValue.replace(/[^A-Za-z0-9\s]|^\s/g, "");
        const truncatedValue = filteredValue.slice(0, 15);
        setInputNewCarModel(truncatedValue);
    };

    const controlledInputNewCarVIN = (event) => {
        const value = event.target.value;
        const formattedValue = value
            .replace(/[^A-Za-z0-9]/g, "")
            .toUpperCase()
            .slice(0, 20);
        setInputNewCarVIN(formattedValue);
    };

    const controlledInputNewCarYear = (event) => {
        const value = event.target.value;
        const formattedValue = value.replace(/\D/g, "").slice(0, 4);
        setInputNewCarYear(formattedValue);
    };

    const controlledInputNewCarColor = (event) => {
        const inputValue = event.target.value;
        const filteredValue = inputValue.replace(/[^A-Za-z0-9]/g, "");
        const truncatedValue = filteredValue.slice(0, 15);
        setInputNewCarColor(truncatedValue);
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
    };

    const controlledInputNewCarAvailability = (event) => {
        setInputNewCarAvailability(event.target.value);
    };

    const showSuccesCreateNewCarMessage = () => {
        toast.success("Added a new car", {
            transition: Flip,
            position: "top-right",
        });
    };

    const addNewCar = () => {
        if (
            inputNewCarCompany.length > 0 &&
            inputNewCarModel.length > 0 &&
            inputNewCarColor.length > 0 &&
            inputNewCarYear.length > 0 &&
            inputNewCarVIN.length > 0 &&
            inputNewCarPrice.length > 0
        ) {
            const newCarObject = {
                id: uuidv4(),
                car: inputNewCarCompany,
                car_model: inputNewCarModel,
                car_color: inputNewCarColor,
                car_model_year: +inputNewCarYear,
                car_vin: inputNewCarVIN,
                availability: inputNewCarAvailability ? true : false,
                price: `$${Math.round(inputNewCarPrice * 100) / 100}`,
            };
            const addNewCarInData = [newCarObject, ...originalData.cars];
            updateDataLS({ cars: addNewCarInData });
            cleanInputsForNewCar();
            showSuccesCreateNewCarMessage();
        }
    };

    return (
        <div className="cars-form__panel-add-car">
            <Button variant="primary" onClick={handleShowNewCar}>
                Add Car +
            </Button>
            <Modal show={showNewCar} onHide={handleCloseNewCar}>
                <Suspense
                    fallback={
                        <div className="spinner-lazy-load d-flex justify-content-center align-items-center">
                            <Spinner animation="border" />
                        </div>
                    }
                >
                    <Modal.Header closeButton>
                        <Modal.Title>New Car</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <CarsFormNewCarInputsWrapper
                            inputNewCarCompany={inputNewCarCompany}
                            controlledInputNewCarCompany={
                                controlledInputNewCarCompany
                            }
                            inputNewCarModel={inputNewCarModel}
                            controlledInputNewCarModel={
                                controlledInputNewCarModel
                            }
                            inputNewCarVIN={inputNewCarVIN}
                            controlledInputNewCarVIN={controlledInputNewCarVIN}
                            inputNewCarYear={inputNewCarYear}
                            controlledInputNewCarYear={
                                controlledInputNewCarYear
                            }
                            inputNewCarColor={inputNewCarColor}
                            controlledInputNewCarColor={
                                controlledInputNewCarColor
                            }
                            inputNewCarPrice={inputNewCarPrice}
                            controlledInputNewCarPrice={
                                controlledInputNewCarPrice
                            }
                            inputNewCarAvailability={inputNewCarAvailability}
                            controlledInputNewCarAvailability={
                                controlledInputNewCarAvailability
                            }
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseNewCar}>
                            Close
                        </Button>
                        <Button
                            variant="primary"
                            onClick={() => {
                                handleCloseNewCar();
                                addNewCar();
                            }}
                        >
                            Save Car
                        </Button>
                    </Modal.Footer>
                </Suspense>
            </Modal>
        </div>
    );
};

export default CarsFormNewCar;
