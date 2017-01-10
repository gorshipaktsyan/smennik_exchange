import axios from "axios";

export function sendStore(rateList) {

    axios.post("/admin/exchange", rateList)
        .then(function (response) {
            console.log(response);
        })
}