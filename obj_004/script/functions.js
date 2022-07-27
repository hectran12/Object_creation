function getValue (index, dea = true, content = "") {
    const item = data[index];
    const obj = item.objCreation[item.name];
    const type = (item.type + "").toUpperCase();
    let name, value;
    func_name = () => {
        eval('name = ' + prompt('Enter the name: '));
    };
    func_value = () => {
        eval('value = ' + prompt('Enter the value: '));
    };
    func_custome = (content) => {
        eval('value = ' + prompt('Enter the ' + content +': '));
    }
    if (dea) {
        if (dea != "none") {
            if (type == "SET" || type == "ARRAY") {
                func_value();
            } else {
                func_name();
                func_value();
            }
        }
    } else {
        func_custome(content);
    }
    
    if (dea) {
        return {
            n: name, v: value,
            o: obj, t: type
        };
    } else if (dea == "none") {
        return {o: obj, t: type};
    } else {
        return {
            v: value, o: obj, t: type,
            mode: dea
        }
    }
    
}

function add(index) {
    try {
        var item = getValue(index);
        if (item.t == "SET") { item.o.add(item.v); }
        else if(item.t == "OBJECT") {
            item.o[item.n] = item.v;
        }
        showText("Action success");
    } catch {
        showText("Error");
    }
}

function set(index) {
    try {
        const item = getValue(index);
        if (item.t == "MAP") { item.o.set(item.n, item.v); }
        showText("Action success");
    } catch {
        showText("Error");
    }
}

function deletes (index) {
    try {
        const item = getValue(index, false, "key");
        if (item.t == "SET" || item.t == "MAP") {
            item.o.delete(item.v);
        } else if (item.t == "ARRAY") {
            delete item.o[item.v];
        }
        showText("Action success");
    } catch {
        showText("Error");
    }
}


function has (index) {
    try {
        const item = getValue(index, false, "key");
        if (item.t == "SET" || item.t == "MAP") {
            if(item.o.has(item.v)) {
                showText("Element is has (TRUE)");
            } else {
                showText("Element is has (FALSE)");
            }
        }
    } catch {
        showText("Error");
    }
}

function clears  (index) {
    try {
        const item = getValue(index, "none");
        if (item.t == "SET" || item.t == "MAP") {
            item.o.clear();
            console.log(item.o);
            showText("View console");
        }
    } catch {
        showText("Error");
    }
}

function forEachs (index) {
    try {
        const item = getValue(index, false, "keywords ('value, index, orgin'): ");
        if (item.t == 'SET' || item.t == 'MAP') {
            content = `
                item.o.forEach(function (${item.v}) {
                    console.log(${item.v});
                });
            `;
            console.log(content);
            eval(content);
        }
        showText("View console");
    } catch {
        showText("Error");
    }
}

function values (index) {
    try {
        const item = getValue(index, "none");
        if(item.t == "SET" || item.t == "MAP") {
            for (var element of item.o.values()) {
                console.log(element);
            }
        }
        showText("View console");
    } catch {
        showText("Error");
    }
}

function keys (index) {
    try {
        const item = getValue(index, "none");
        if (item.t == "SET" || item.t == "MAP") {
            for (var element of item.o.keys()) {
                console.log(element);
            }
        }
        showText("View console");
    } catch {
        showText("Error");
    }
}


function entries (index) {
    try {
        const item = getValue(index, "none");
        if (item.t == "SET" || item.t == "MAP") {
            for (var [key, value] of item.o.entries()) {
                console.log(key, '=>', value);
            }
        }
        showText("View console");
    } catch {
        showText("Error");
    }
}

function toStrings (index) {
    try {
        const item = getValue(index, "none");
        console.log(item.o.toString());
        showText("View console");
    } catch {
        showText("Error");
    }
}

function join (index) {
    try {
        const item = getValue(index, false, "separator: ");
        if(item.t == "ARRAY") {
            console.log(item.o.join(item.v));
        }
        showText("View console");
    } catch {
        showText("Error");
    }
}

function pops (index) {
    try {
        const item = getValue(index, "none");
        if (item.t == "ARRAY") {
            item.o.pop();
            console.log(item.o);
        }
        showText("View console");
    } catch {
        showText("Error");
    }
}

function pushs (index) {
    try {
        const item = getValue(index, false, "value: ");
        if (item.t == "ARRAY") {
            var length = item.o.push(item.v);
            showText("Length: " + length);
        }
        showText("View console");
    } catch {
        showText("Error");
    }
}

function shift (index) {
    try {
        const item = getValue(index, "none");
        if (item.t == "ARRAY") {
            var result = item.o.shift();
            showText("Element has removed: " + result);
        }
    } catch {
        showText("Error");
    }
}

function unshift (index) {
    try {
        const item = getValue(index, false, "value: ");
        if (item.t == "ARRAY") {
            var result = item.o.unshift(item.v);
            showText("Length: " + result);
        }
    } catch {
        showText("Error");
    }
}

function concat (index) {
    try {
        const item = getValue(index, false, "Array (ex: [1,2,3] or ['trong', 'hoa'] or 'test': ");
        if (item.t == "ARRAY") {
            const result = item.o.concat(item.v);
            console.log(result);
        }
        showText("Action success");
    } catch {
        showText("Error");
    }
}

function splice (index) {
    try {
        const start = getValue(index, false, "Start index: ");
        const deleteCount = getValue(index, false, "Delete count: ");
        if (start.t == "ARRAY") {
            const choice = getValue(index, false, "Choice [1. custome ( 3 args ), 2. delete ( 2 args )]: ");
            if (choice.v == 1) {
                const item = getValue(index, false, " array add (ex: ['Element1', 'Element2', 'Element3']): ");
                item.o.splice(start.v, deleteCount.v, item.v);
            } else {
                start.o.splice(start.v, deleteCount.v);
            }
        }
        showText("Action success");
    } catch {
        showText("Error");
    }
}

function slice (index) {
    try {
        const item = getValue(index, false, "Start index: ");
        if (item.t == "ARRAY") {
            const choice = getValue(index, false, "Choice [1. custome ( 1 args ), 2. get elements ( 2 args )]: ");
            if (choice.v == 1) {
                console.log("Return clone array");
                console.log(item.o.slice(item.v));
            } else {
                console.log("Return array slice");
                const end = getValue(index, false, "End index: ");
                console.log(item.o.slice(item.v, end.v));
            }
        }
        showText("View console, action success");
    } catch {
        showText("Error");
    }
}

