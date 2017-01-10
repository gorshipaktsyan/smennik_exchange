export function saveStore(rateList) {

    axios.post("/admin/exchange", rateList)
        .then(function (response) {
            console.log(response);
        })
}