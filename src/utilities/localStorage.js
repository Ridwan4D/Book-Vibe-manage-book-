import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const saveDataWishList = (book) => {
    const savedData = JSON.parse(localStorage.getItem("readBooks")) || [];
    const isExistInReadBook = savedData.find((item) => item.id == book.id);
    if (!isExistInReadBook) {
        const savedData = JSON.parse(localStorage.getItem("wishBooks")) || [];
        const isExistInWishBook = savedData.find((item) => item.id == book.id);
        if (!isExistInWishBook) {
            const localData = [...savedData, book];
            localStorage.setItem("wishBooks", JSON.stringify(localData));
            toast("Added to wish list");
        } else {
            toast("Already added");
        }
    } else {
        toast("Reading complete, can't add");
    }
}
