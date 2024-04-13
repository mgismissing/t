function createItem(title, columnValsAsJSON) {
    let query5 = 'mutation ($myItemName: String!, $columnVals: JSON!) { create_item (board_id:1462254747, item_name:$myItemName, column_values:$columnVals) { id } }';
    let vars = {
    "myItemName": title,
    "columnVals": columnValsAsJSON
    //"columnVals": JSON.stringify({
    //"status"    : {"label" : "Done"},
    //"date4"     : {"date" : "1993-08-27"}
    //})
    };

    fetch ("https://api.monday.com/v2", {
    method: 'post',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjM0NjYyNDg5MCwiYWFpIjoxMSwidWlkIjo1ODg4MTMwMiwiaWFkIjoiMjAyNC0wNC0xM1QyMjoxNDozNi41MTRaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjI2ODUzNTgsInJnbiI6ImV1YzEifQ.rtAEC3NX6J_hTrcTPEXL9aRuY9U5B3GwV5tLhzYRMMk'
    },
    body: JSON.stringify({
        'query' : query5,
        'variables' : JSON.stringify(vars)
    })
    })
    .then(res => res.json())
    .then(res => console.log(JSON.stringify(res, null, 2)));
}