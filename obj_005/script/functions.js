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
            o: obj, t: type,
            nameobj: item.name, obj: item
        };
    } else if (dea == "none") {
        return {o: obj, t: type, nameobj: item.name, obj: item};
    } else {
        return {
            v: value, o: obj, t: type,
            mode: dea, nameobj: item.name, obj: item
        }
    }
    
}

function add(index) {
    try {
        var item = getValue(index);
        var element = data[index];
        if (item.t == "SET") { 
            item.o.add(item.v);
            content = `
${(item.nameobj+"").toLowerCase()}.add(${typeof item.v == "string" ? `"${item.v}"` : item.v});`;
            element.code += content;
        }
        else if(item.t == "OBJECT") {
            item.o[item.n] = item.v;
            content = `
${(item.nameobj+"").toLowerCase()}.${item.n} = ${typeof item.v == "string" ? `"${item.v}"` : item.v};`;
            element.code += content;
        } else if(item.t == "ARRAY") {
            item.o.push(item.v);
            content = `
${(item.nameobj+"").toLowerCase()}.push(${typeof item.v == "string" ? `"${item.v}"` : item.v});`;
            element.code += content;
        } else if(item.t == "MAP") {
            item.o.set(item.n, item.v);
            content = `
${(item.nameobj+"").toLowerCase()}.set(${typeof item.n == "string" ? `"${item.n}"` : item.n}, ${typeof item.v == "string" ? `"${item.v}"` : item.v});`;
            element.code += content;
        }
        showText("Action success");
    } catch {
        showText("Error");
    }
}

function set(index) {
    try {
        const item = getValue(index);
        let element = data[index];
        if (item.t == "MAP") { item.o.set(item.n, item.v);
            item.o.set(item.n, item.v);
            content = `
${(item.nameobj+"").toLowerCase()}.set(${typeof item.n == "string" ? `"${item.n}"` : item.n}, ${typeof item.v == "string" ? `"${item.v}"` : item.v});`;
            element.code += content;
        }
        showText("Action success");
    } catch {
        showText("Error");
    }
}

function deletes (index) {
    try {
        const item = getValue(index, false, "key");
        let element = data[index];
        if (item.t == "SET" || item.t == "MAP") {
            item.o.delete(item.v);
            content = `
${(item.nameobj+"").toLowerCase()}.delete(${typeof item.v == "string" ? `"${item.v}"` : item.v});`;
            element.code += content;
        } else if (item.t == "ARRAY") {
            delete item.o[item.v];
            content = `
delete ${(item.nameobj+"").toLowerCase()}[${typeof item.v == "string" ? `"${item.v}"` : item.v}];`;
            element.code += content;
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
            const result = item.o.has(item.v);
            if(result) {
                showText("Element is has (TRUE)");
            } else {
                showText("Element is has (FALSE)");
            }
            content = `
${(item.nameobj+"").toLowerCase()}.has(${typeof item.v == "string" ? `"${item.v}"` : item.v}); // ${result}`;
            data[index].code += content;
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
            content = `
${(item.nameobj+"").toLowerCase()}.clear();`;
            data[index].code += content;
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
            content = `
${(item.nameobj+"").toLowerCase()}.forEach(function (${item.v}) {
    console.log(${item.v});
});`;
            data[index].code += content;
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
            content = `
for (var element of ${(item.nameobj+"").toLowerCase()}.values()) {
    console.log(element);
}`;
            data[index].code += content;
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
            content = `
for (var element of ${(item.nameobj+"").toLowerCase()}.keys()) {
    console.log(element);
}`;
            data[index].code += content;
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
            content = `
for (var [key, value] of ${(item.nameobj+"").toLowerCase()}.entries()) {
    console.log(key, '=>', value);
}`;
            data[index].code += content;
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
        content = `
console.log(${(item.nameobj+"").toLowerCase()}.toString());`;
        data[index].code += content;
    } catch {
        showText("Error");
    }
}

function join (index) {
    try {
        const item = getValue(index, false, "separator: ");
        if(item.t == "ARRAY") {
            console.log(item.o.join(item.v));
            content = `
console.log(${(item.nameobj+"").toLowerCase()}.join(${typeof item.v == "string" ? `"${item.v}"` : item.v}));`;
            data[index].code += content;
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
            content = `
${(item.nameobj+"").toLowerCase()}.pop();`;
            data[index].code += content;
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
            content = `
${(item.nameobj+"").toLowerCase()}.push(${typeof item.v == "string" ? `"${item.v}"` : item.v});`;
            data[index].code += content;
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
            content = `
${(item.nameobj+"").toLowerCase()}.shift();`;
            data[index].code += content;
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
            content = `
${(item.nameobj+"").toLowerCase()}.unshift(${typeof item.v == "string" ? `"${item.v}"` : item.v});`;
            data[index].code += content;
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
            content = `
console.log(${(item.nameobj+"").toLowerCase()}.concat(${typeof item.v == "string" ? `"${item.v}"` : item.v}));`;
            data[index].code += content;
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
            var content = '';
            if (choice.v == 1) {
                const item = getValue(index, false, " array add (ex: ['Element1', 'Element2', 'Element3']): ");
                item.o.splice(start.v, deleteCount.v, item.v);
                content = `
${(item.nameobj+"").toLowerCase()}.splice(${start.v}, ${deleteCount.v}, ${typeof item.v == "string" ? `"${item.v}"` : item.v});`;
            } else {
                start.o.splice(start.v, deleteCount.v);
                content = `
${(start.nameobj+"").toLowerCase()}.splice(${start.v}, ${deleteCount.v});`;
            }
            data[index].code += content;
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
            var content = '';
            if (choice.v == 1) {
                console.log("Return clone array");
                console.log(item.o.slice(item.v));
                content = `
console.log(${(item.nameobj+"").toLowerCase()}.slice(${item.v}));`;
            } else {
                console.log("Return array slice");
                const end = getValue(index, false, "End index: ");
                console.log(item.o.slice(item.v, end.v));
                content = `
console.log(${(item.nameobj+"").toLowerCase()}.slice(${item.v}, ${end.v}));`;
            }
            data[index].code += content;
        }
        showText("View console, action success");
    } catch {
        showText("Error");
    }
}


