export const companyEdit = (e, setCompanyEdit) => {
    const filteredValue = e.target.value.replace(/[^A-Za-z0-9\s]|^\s/g, "");
    const truncatedValue = filteredValue.slice(0, 20);
    setCompanyEdit(truncatedValue);
};

export const modelEdit = (e, setModelEdit) => {
    const filteredValue = e.target.value.replace(/[^A-Za-z0-9\s]|^\s/g, "");
    const truncatedValue = filteredValue.slice(0, 15);
    setModelEdit(truncatedValue);
};

export const VINEdit = (e, setVINEdit) => {
    const formattedValue = e.target.value
        .replace(/[^A-Za-z0-9]/g, "")
        .toUpperCase()
        .slice(0, 20);
    setVINEdit(formattedValue);
};

export const yearEdit = (e, setYearEdit) => {
    const formattedValue = e.target.value.replace(/\D/g, "").slice(0, 4);
    setYearEdit(formattedValue);
};

export const colorEdit = (e, setColorEdit) => {
    const filteredValue = e.target.value.replace(/[^A-Za-z0-9]/g, "");
    const truncatedValue = filteredValue.slice(0, 15);
    setColorEdit(truncatedValue);
};

export const priceEdit = (e, setPriceEdit) => {
    const value = e.target.value.replace(/\$/g, "");
    let formattedValue = value.replace(/[^0-9.]/g, "");
    if (formattedValue.length === 1 && formattedValue[0] === ".") {
        formattedValue = "";
    }
    if (formattedValue.split(".").length > 2) {
        formattedValue = formattedValue.slice(0, -1);
    }
    setPriceEdit(formattedValue);
};
