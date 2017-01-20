import axios from "axios";

export function sendStore(rateList) {

    axios.post("/admin/exchange", rateList)
        .then(function (response) {
            console.log(response);
        })
}

export function logOut() {

    axios.get("/admin/logout")
        .then(function (response) {
            console.log(response);
        })
}