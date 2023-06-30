import Button from "react-bootstrap/Button";

const CarsFormDeleteButton = ({
    originalData,
    setOriginalData,
    car,
    setShow,
    updateDataLS,
}) => {
    const removeCar = (id) => {
        const newDataRemove = originalData.cars.filter(
            (item) => item.id !== id
        );
        updateDataLS({ cars: newDataRemove });
    };
    const handleClose = () => {
        setShow(false);
    };
    return (
        <Button
            className="cars-form__actions-delete-car"
            variant="primary"
            onClick={() => {
                handleClose();
                removeCar(car.id);
            }}
        >
            Delete
        </Button>
    );
};

export default CarsFormDeleteButton;
