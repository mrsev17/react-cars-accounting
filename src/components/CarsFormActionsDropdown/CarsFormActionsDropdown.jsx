import React, { lazy, Suspense } from "react";
import { Dropdown, Spinner } from "react-bootstrap";
import "./carsFormActionsDropdown.css";

const CarsFormEditCar = lazy(() => import("../CarsFormEditCar/CarsFormEditCar"));
const CarsFormDeleteCar = lazy(() => import("../CarsFormDeleteCar/CarsFormDeleteCar"));

const CarsFormActionsDropdown = ({
    originalData,
    car,
    updateDataLS,
    slicedData,
    setCurrentPage,
    totalPages,
}) => {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success">Actions</Dropdown.Toggle>
            <Dropdown.Menu>
                <Suspense
                    fallback={
                        <div className="spinner-dropdown-load d-flex justify-content-center align-items-center">
                            <Spinner animation="border" />
                        </div>
                    }
                >
                    <Dropdown.Item href="">
                        <CarsFormEditCar
                            originalData={originalData}
                            updateDataLS={updateDataLS}
                            car={car}
                        />
                    </Dropdown.Item>
                    <Dropdown.Item href="">
                        <CarsFormDeleteCar
                            slicedData={slicedData}
                            originalData={originalData}
                            updateDataLS={updateDataLS}
                            car={car}
                            setCurrentPage={setCurrentPage}
                            totalPages={totalPages}
                        />
                    </Dropdown.Item>
                </Suspense>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default CarsFormActionsDropdown;
