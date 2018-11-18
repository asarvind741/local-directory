import client from './elastic-search-connection';

client.index({
    index: 'arvind',
    id: '1',
    type: 'categories',
    body: {
        "CategoryName": "English",
        "CategoryId": "E01",
        "CategoryType": "Language",
        "Profit": 40,
        "Loss": 30,
    }
}, (err, res, status) => {
    if (err)
        console.log("Error------>", err);
    else if (res)
        console.log("Response---->", res);
})