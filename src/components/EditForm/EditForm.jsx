import { useState } from "react";
import { toast, Flip } from "react-toastify";
import { Button, Modal } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import "./editForm.css";
import {
    companyEdit,
    colorEdit,
    VINEdit,
    yearEdit,
    priceEdit,
    modelEdit,
} from "./functions";

export const EditForm = ({ originalData, car, updateDataLS }) => {
    const [showEditInput, setShowEditInput] = useState(false);
    const [companyEditInput, setCompanyEditInput] = useState(car.car);
    const [modelEditInput, setModelEditInput] = useState(car.car_model);
    const [VINEditInput, setVINEditInput] = useState(car.car_vin);
    const [yearEditInput, setYearEditInput] = useState(car.car_model_year);
    const [colorEditInput, setColorEditInput] = useState(car.car_color);
    const [priceEditInput, setPriceEditInput] = useState(car.price);
    const [availabilityEditInput, setAvailabilityEditInput] = useState(
        !!car.availability
    );

    const editCar = () => {
        if (colorEditInput.length > 0 && priceEditInput.length > 0) {
            const editedCarObject = {
                id: car.id,
                car: car.car,
                car_model: car.car_model,
                car_color: colorEditInput,
                car_model_year: +yearEditInput,
                car_vin: car.car_vin,
                availability: !!availabilityEditInput,
                price:
                    priceEditInput.charAt(0) === "$"
                        ? `$${
                              Math.round(+priceEditInput.substring(1) * 100) /
                              100
                          }`
                        : `$${Math.round(+priceEditInput * 100) / 100}`,
            };
            const indexEditedCar = originalData.cars.findIndex(
                (editedCar) => editedCar.id === car.id
            );
            const updatedArrayAfterEdit = [
                ...originalData.cars.slice(0, indexEditedCar),
                editedCarObject,
                ...originalData.cars.slice(indexEditedCar + 1),
            ];
            updateDataLS({ cars: updatedArrayAfterEdit });
            showSuccesEditMessage();
        }
    };

    const handlerClick = () => {
        handleCloseEdit();
        editCar();
    };

    const showSuccesEditMessage = () => {
        toast.success("Changes Saved", {
            transition: Flip,
            position: "top-right",
        });
    };

    const handleCloseEdit = () => {
        setShowEditInput(false);
    };

    const handleShowEdit = () => {
        setShowEditInput(true);
    };

    const availabilityEdit = () => {
        setAvailabilityEditInput(!availabilityEditInput);
    };

    return (
        <>
            <Button variant="primary" onClick={handleShowEdit}>
                Edit Car
            </Button>
            <Modal centered show={showEditInput} onHide={handleCloseEdit}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Car</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="cars-form__edit-car-inputs-wrapper d-flex justify-content-around">
                        <div className="cars-form__edit-car-left-side-inputs d-flex align-items-center flex-column gap-2">
                            <div className="cars-form__edit-car-input">
                                <input
                                    className="disabled-input"
                                    type="text"
                                    value={companyEditInput}
                                    onChange={(e) =>
                                        companyEdit(e, setCompanyEditInput)
                                    }
                                    placeholder="Company"
                                    disabled={true}
                                />
                            </div>
                            <div className="cars-form__edit-car-input">
                                <input
                                    className="disabled-input"
                                    type="text"
                                    value={modelEditInput}
                                    onChange={(e) =>
                                        modelEdit(e, setModelEditInput)
                                    }
                                    placeholder="Model"
                                    disabled={true}
                                />
                            </div>
                            <div className="cars-form__edit-car-input">
                                <input
                                    className="disabled-input"
                                    type="text"
                                    value={VINEditInput}
                                    onChange={(e) =>
                                        VINEdit(e, setVINEditInput)
                                    }
                                    placeholder="VIN"
                                    disabled={true}
                                />
                            </div>
                            <div className="cars-form__edit-car-input">
                                <input
                                    className="disabled-input"
                                    type="text"
                                    value={yearEditInput}
                                    onChange={(e) =>
                                        yearEdit(e, setYearEditInput)
                                    }
                                    placeholder="Year"
                                    disabled={true}
                                />
                            </div>
                        </div>
                        <div className="cars-form__edit-car-right-side-inputs d-flex align-items-center flex-column gap-2">
                            <div className="cars-form__edit-car-input">
                                <input
                                    type="text"
                                    value={colorEditInput}
                                    onChange={(e) =>
                                        colorEdit(e, setColorEditInput)
                                    }
                                    placeholder="Color"
                                />
                            </div>
                            <div className="cars-form__edit-car-input">
                                <input
                                    type="text"
                                    value={priceEditInput}
                                    onChange={(e) =>
                                        priceEdit(e, setPriceEditInput)
                                    }
                                    placeholder="Price"
                                />
                            </div>
                            <div className="cars-form__edit-car-input">
                                <select
                                    value={availabilityEditInput.toString()}
                                    onChange={(e) =>
                                        availabilityEdit(
                                            e.target.value === "true"
                                        )
                                    }
                                >
                                    <option value="false">Unavailable</option>
                                    <option value="true">Available</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseEdit}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handlerClick}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
