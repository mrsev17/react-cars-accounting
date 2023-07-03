import { useState } from "react";
import { toast, Flip } from "react-toastify";
import { Button, Modal } from "react-bootstrap";
import "./deleteAction.css";

export const DeleteAction = ({
    originalData,
    updateDataLS,
    car,
    slicedData,
    setCurrentPage,
    totalPages,
}) => {
    const [showDelete, setShowDelete] = useState(false);
    const handleCloseDelete = () => {
        setShowDelete(false);
    };
    const handleShowDelete = () => setShowDelete(true);
    const showSuccesDeleteCarMessage = () => {
        toast.success("Car removed", {
            transition: Flip,
            position: "top-right",
        });
    };
    const removeCar = (id) => {
        const newDataRemove = originalData.cars.filter(
            (item) => item.id !== id
        );
        updateDataLS({ cars: newDataRemove });
        showSuccesDeleteCarMessage();
    };

    const checkEmptyPage = () => {
        if (slicedData.length === 1) setCurrentPage(totalPages - 1);
    };

    const deleteCarEvent = (car) => {
        handleCloseDelete();
        removeCar(car.id);
        checkEmptyPage();
    };

    return (
        <>
            <Button
                className="cars-form__actions-delete-car"
                variant="primary"
                onClick={handleShowDelete}
            >
                Delete Car
            </Button>

            <Modal show={showDelete} onHide={handleCloseDelete}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>You will not be able to recover car</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDelete}>
                        Cancel
                    </Button>
                    <Button
                        className="cars-form__actions-delete-car"
                        variant="primary"
                        onClick={() => deleteCarEvent(car)}
                    >
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
