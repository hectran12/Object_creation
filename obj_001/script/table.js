let div = document.getElementById("listElement");

function resetTable () {
    div.innerHTML = "";
    console.log("reset successful");    
}

function reloadTable (obj) {
    resetTable();
    var content = '';
    let contentTitle, contentAction;
    content += `<table>`;

    contentTitle = ['Number', 'DateCreate', 'ObjectName', 'TypeOject', 'Action'];

    contentAction = {
        addElement: 'Add element',
        removeElement: 'Remove Element',
        functionElement: 'Function Element',
        viewElement: 'View Element'
    };

    content += `<tr>`;
    contentTitle.forEach(function (value, key) {
        content += '<th>' + value + '</th>';
        console.log(key, value);
    });
    content += `</tr>`;

    
    obj.forEach(function (value, key){
        content += '<tr>';
        content += '<td>' + key + '</td>';
        content += '<td>' + value.dateCreation + '</td>';
        content += '<td>' + value.name + '</td>';
        content += '<td>' + value.type + '</td>';
        content += '<td>';
        for (let keyAction in contentAction) {

            content +=`
                <button onclick="${keyAction}(${value.id})">
                    ${contentAction[keyAction]}
                </button>
            `;
        }
        content += '</td>';
        content += `</tr>`;
    });
    
    content += '</table>';
    div.innerHTML = content;
    return true;
}