import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const saveDataLocalStorage = (book) => {
    const savedData = JSON.parse(localStorage.getItem("books")) || [];
    const isExist = savedData.find((item) => item.id == book.id);
    if (isExist) {
        toast("Already added");
    } else {
        const localData = [...savedData, book];
        localStorage.setItem("books", JSON.stringify(localData));
        toast("Added to wish list");
    }
}