import { Dropdown } from "react-bootstrap";
import "./actionsDropdown.css";
import { EditForm } from "../EditForm";
import { DeleteAction } from "../DeleteAction";

export const ActionsDropdown = ({
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
                <Dropdown.Item href="">
                    <EditForm
                        originalData={originalData}
                        updateDataLS={updateDataLS}
                        car={car}
                    />
                </Dropdown.Item>
                <Dropdown.Item href="">
                    <DeleteAction
                        slicedData={slicedData}
                        originalData={originalData}
                        updateDataLS={updateDataLS}
                        car={car}
                        setCurrentPage={setCurrentPage}
                        totalPages={totalPages}
                    />
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};
