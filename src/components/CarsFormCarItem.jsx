import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const CarsFormCarItem = ({ slicedData, originalData, setOriginalData }) => {
    const [show, setShow] = useState(false);

    const updateDataLS = (updatedData) => {
        setOriginalData(updatedData);
        localStorage.setItem("myData", JSON.stringify(updatedData));
    };

    const removeCar = (id) => {
        const newDataRemove = originalData.cars.filter(
            (item) => item.id !== id
        );
        console.log(newDataRemove);
        updateDataLS({ cars: newDataRemove });
    };

    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => setShow(true);
    return (
        <>
            {slicedData.map((car) => {
                return (
                    <div
                        key={car.id}
                        className="cars-form__content-card-wrapper d-flex justify-content-between"
                    >
                        <div className="cars-form__car-list-company">
                            <h6>{car.car}</h6>
                        </div>
                        <div className="cars-form__car-list-model">
                            <h6>{car.car_model}</h6>
                        </div>
                        <div className="cars-form__car-list-vin">
                            <h6>{car.car_vin}</h6>
                        </div>
                        <div className="cars-form__car-list-color">
                            <h6>{car.car_color}</h6>
                        </div>
                        <div className="cars-form__car-list-year">
                            <h6>{car.car_model_year}</h6>
                        </div>
                        <div className="cars-form__car-list-price">
                            <h6>{car.price}</h6>
                        </div>
                        <div className="cars-form__car-list-availability">
                            <h6>
                                {car.availability ? `Available` : `Unavailable`}
                            </h6>
                        </div>
                        <div className="cars-form__car-list-actions-columns">
                            <Dropdown>
                                <Dropdown.Toggle variant="success">
                                    Actions
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="">
                                        Another action
                                    </Dropdown.Item>
                                    <Dropdown.Item href="">
                                        <>
                                            <Button
                                                variant="primary"
                                                onClick={handleShow}
                                            >
                                                Delete Car
                                            </Button>

                                            <Modal
                                                show={show}
                                                onHide={handleClose}
                                            >
                                                <Modal.Header closeButton>
                                                    <Modal.Title>
                                                        Are you sure?
                                                    </Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    You will not be able to
                                                    recover car
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button
                                                        variant="secondary"
                                                        onClick={handleClose}
                                                    >
                                                        Cancel
                                                    </Button>
                                                    <Button
                                                        variant="primary"
                                                        onClick={() => {
                                                            handleClose();
                                                            removeCar(car.id);
                                                        }}
                                                    >
                                                        Delete
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal>
                                        </>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default CarsFormCarItem;
