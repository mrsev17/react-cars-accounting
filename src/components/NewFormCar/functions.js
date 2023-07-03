export const inputNewCompany = (e, setNewCompany) => {
    const filteredValue = e.target.value.replace(/[^A-Za-z0-9\s]|^\s/g, "");
    const truncatedValue = filteredValue.slice(0, 20);
    setNewCompany(truncatedValue);
};
export const inputNewModel = (e, setNewModel) => {
    const filteredValue = e.target.value.replace(/[^A-Za-z0-9\s]|^\s/g, "");
    const truncatedValue = filteredValue.slice(0, 15);
    setNewModel(truncatedValue);
};
export const inputNewVIN = (e, setNewVIN) => {
    const formattedValue = e.target.value
        .replace(/[^A-Za-z0-9]/g, "")
        .toUpperCase()
        .slice(0, 20);
    setNewVIN(formattedValue);
};
export const inputNewYear = (e, setNewYear) => {
    const formattedValue = e.target.value.replace(/\D/g, "").slice(0, 4);
    setNewYear(formattedValue);
};
export const inputNewColor = (e, setNewColor) => {
    const filteredValue = e.target.value.replace(/[^A-Za-z0-9]/g, "");
    const truncatedValue = filteredValue.slice(0, 15);
    setNewColor(truncatedValue);
};
export const inputNewPrice = (e, setNewPrice) => {
    let formattedValue = e.target.value.replace(/[^0-9.]/g, "");
    if (formattedValue.length === 1 && formattedValue[0] === ".") {
        formattedValue = "";
    }
    if (formattedValue.split(".").length > 2) {
        formattedValue = formattedValue.slice(0, -1);
    }
    setNewPrice(formattedValue);
};
export const inputNewAvailability = (e, setNewAvailability) => {
    setNewAvailability(e.target.value);
};
