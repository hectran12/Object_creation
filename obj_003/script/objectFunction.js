class SetFunctions {
    constructor(item) {
        this.item = item;
        this.object = item.objCreation[item.name];
    };

    Test () {
        console.log(this.item);
        console.log(this.object);
    }

    GuiMethod (type = "get") {
        var text = '';
        const ltext = {
            "Info": "View method SET Object",
            add: 'Adds a new element to the Set',
            delete: 'Deletes an element from the Set',
            has: 'Returns true if an element is in the Set',
            clear: 'Removes all elements from the Set',
            forEach: 'Calls a function for each element in the Set',
            values: 'Returns an array of values of the Set',
            keys: 'Returns an array of keys of the Set',
            entries:  'Returns an array of [key, value] pairs for each element in the Set'
        };

        for (let [key, value] of Object.entries(ltext)) {
            text += `
                <ul>${key} - ${value}</ul>
            `;
        }
        if (type == "get") {
            return text;
        } else {
            return ltext;
        }
    }
}

class MapFunctions {
    constructor (item) {
        this.item = item;
        this.object = item.objCreation[item.name];
    }

    Test () {
        console.log(this.item);
        console.log(this.object);
    }

    GuiMethod (type = "get") {
        var text = '';
        const ltext = {
            "Info": "View method MAP Object",
            set: 'Adds a new element to the Map',
            delete: "Deletes an element from the Map",
            has: "Returns true if an element is in the Map", 
            clear: "Removes all elements from the Map",
            forEach: "Calls a function for each element in the Map",
            values: "Returns an array of values of the Map",
            keys: "Returns an array of keys of the Map",
            entries: "Returns an array of [key, value] pairs for each element in the Map"
        };

        for (let [key, value] of Object.entries(ltext)) {
            text += `
                <ul>${key} - ${value}</ul>
            `;
        }
       
        if (type == "get") {
            return text;
        } else {
            return ltext;
        }
    }
}

class ObjectFunctions {
    constructor (item) {
        this.item = item;
        this.object = item.objCreation[item.name];
    }

    Test () {
        console.log(this.item);
        console.log(this.object);
    }

    GuiMethod (type = "get") {
        var text = '';
        const ltext = {
            "Info": "View method OBJECT Object",
            add: 'Adds a new element to the Object',
            delete: 'Deletes an element from the Object',
            has: 'Returns true if an element is in the Object',
            clear: 'Removes all elements from the Object',
            forEach: 'Calls a function for each element in the Object',
            values: 'Returns an array of values of the Object',
            keys: 'Returns an array of keys of the Object',
            entries:  'Returns an array of [key, value] pairs for each element in the Object'
        };

        for (let [key, value] of Object.entries(ltext)) {
            text += `
                <ul>${key} - ${value}</ul>
            `;
        }
       
        if (type == "get") {
            return text;
        } else {
            return ltext;
        }
    }
}

class ArrayFunctions {
    constructor (item) {
        this.item = item;
        this.object = item.objCreation[item.name];
    }

    Test () {
        console.log(this.item);
        console.log(this.object);
    }

    GuiMethod (type = "get") {
        var text = '';
        const ltext = {
            "Info": "View method ARRAY Object",
            add: 'Adds a new element to the Array',
            delete: 'Deletes an element from the Array',
            has: 'Returns true if an element is in the Array',
            clear: 'Removes all elements from the Array',
            forEach: 'Calls a function for each element in the Array',
            values: 'Returns an array of values of the Array',
            keys: 'Returns an array of keys of the Array',
            entries:  'Returns an array of [key, value] pairs for each element in the Array'
        };

        for (let [key, value] of Object.entries(ltext)) {
            text += `
                <ul>${key} - ${value}</ul>
            `;
        }
       
        if (type == "get") {
            return text;
        } else {
            return ltext;
        }
    }
}