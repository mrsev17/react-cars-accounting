import Dropdown from "react-bootstrap/Dropdown";
import CarsFormEditCar from "./CarsFormEditCar";
import CarsFormDeleteCar from "./CarsFormDeleteCar";

const CarsFormActionsDropdown = ({ originalData, car, updateDataLS }) => {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success">Actions</Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="">
                    <CarsFormEditCar
                        originalData={originalData}
                        updateDataLS={updateDataLS}
                        car={car}
                    />
                </Dropdown.Item>
                <Dropdown.Item href="">
                    <CarsFormDeleteCar
                        originalData={originalData}
                        updateDataLS={updateDataLS}
                        car={car}
                    />
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default CarsFormActionsDropdown;
