
$.getJSON( "../data/log.json", function(data) {
    Object.keys(data).forEach(element => {
        console.log(element + data[element]);

        let table = $("#mainLog tbody");
        table.append(`
            <tr><td>${element}</td><td>${data[element]}</td></tr>
        `);

    }
    
    )
});
  