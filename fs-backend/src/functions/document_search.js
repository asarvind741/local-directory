import client from './elastic-search-connection';

client.search({  
  index: 'arvind',
  type: 'categories',
  body: {
    query: {
      match: { "CategoryName": "English" }
    },
  }
},function (error, response,status) {
    if (error){
      console.log("search error: "+error)
    }
    else {
      console.log("--- Response ---");
      console.log(response);
      console.log("--- Hits ---");
      response.hits.hits.forEach(function(hit){
        console.log(hit);
      })
    }
});