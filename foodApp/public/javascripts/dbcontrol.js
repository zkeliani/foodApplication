var sections = ["premadefood", "recipes", "ingredients", "advanced", "likes", "calculator"]
var btns = ["pmbtn", "rbtn", "ibtn", "abtn", "lbtn", "probtn", "cbtn"]

function SectionSwap() {
    for (var i = 0; i < sections.length; i++) {
        var element = document.getElementById(sections[i]);
        if (element.classList.contains("this-is-hidden")) {

        }
        else {
            element.classList.add("this-is-hidden")
        }
    }
    for (var i = 0; i < btns.length; i++) {
        var element = document.getElementById(btns[i]);
        if (element.classList.contains("is-active")) {
            element.classList.remove("is-active")
        }
    }
}

function PremadeFood() {
    SectionSwap();
    var section = document.getElementById("premadefood");
    var btn = document.getElementById("pmbtn");
    btn.classList.add("is-active");
    section.classList.remove("this-is-hidden");
    document.location.href = "#premadefood";
}

function Recipes() {
    SectionSwap();
    var section = document.getElementById("recipes");
    var btn = document.getElementById("rbtn");
    btn.classList.add("is-active");
    section.classList.remove("this-is-hidden");
    document.location.href = "#recipes";
}

function Ingredients() {
    SectionSwap();
    var section = document.getElementById("ingredients");
    var btn = document.getElementById("ibtn");
    btn.classList.add("is-active");
    section.classList.remove("this-is-hidden");
    document.location.href = "#ingredients";
}

function Advanced() {
    SectionSwap();
    var section = document.getElementById("advanced");
    var btn = document.getElementById("abtn");
    btn.classList.add("is-active");
    section.classList.remove("this-is-hidden");
    document.location.href = "#advanced";
}

function Calculator() {
    SectionSwap();
    var section = document.getElementById("calculator");
    var btn = document.getElementById("cbtn");
    btn.classList.add("is-active");
    section.classList.remove("this-is-hidden");
    document.location.href = "#calculator";
}

function Like() {
    document.location.reload();
}

function echoPrint(value) {
    console.log(value);
}

function OpenInfo(id, db) {
    var prefix
    if (db == 1) {
        prefix = "pm"
    }
    else if (db == 2) {
        prefix = "hf"
    }
    else if (db == 3) {
        prefix = "i"
    }
    var modal = document.getElementById(prefix + id)
    modal.classList.add("is-active");
}

function CloseInfo(id, db) {
    var prefix
    if (db == 1) {
        prefix = "pm"
    }
    else if (db == 2) {
        prefix = "hf"
    }
    else if (db == 3) {
        prefix = "i"
    }
    var modal = document.getElementById(prefix + id)
    modal.classList.remove("is-active");
}


function LikeLoveIt(user, id, num) {
    info = {}
    info.username = user
    info.food_ID = id
    info.num = num
    console.log(info)
    async function f() {
        const response = await fetch('/api/5', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(info)
        });
        results = await response.json()
        console.log(results)
    }

    var Part2 = () => {

    }
    f().then(Part2);
}

function myFunction(num) {
    if (num === 1) {
        // Declare variables 
        var input, filter, table, tr, td, i;
        input = document.getElementById("pInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("pTable");
        tr = table.getElementsByTagName("tr");

        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
    if (num === 2) {
        // Declare variables 
        var input, filter, table, tr, td, i;
        input = document.getElementById("rInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("rTable");
        tr = table.getElementsByTagName("tr");

        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }

    if (num === 3) {
        // Declare variables 
        var input, filter, table, tr, td, i;
        input = document.getElementById("iInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("iTable");
        tr = table.getElementsByTagName("tr");

        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }

    if (num === 4) {
        // Declare variables 
        var input, filter, select, options, i;
        input = document.getElementById("cInput");
        filter = input.value.toUpperCase();
        select = document.getElementById("cSelect");
        options = select.getElementsByTagName("option");

        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < options.length; i++) {
            console.log(options[i].innerHTML)
            if (options[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
                options[i].style.display = "";
            } else {
                options[i].style.display = "none";
            }
        }
    }
}

function SwapAdv(num) {
    var pmButton = document.getElementById('aPMButton');
    var hfButton = document.getElementById('aHFButton');
    var ingColumn = document.getElementById('ingColumn');
    var manColumn = document.getElementById('manColumn');
    var rtable = document.getElementById('rTable2')
    var ptable = document.getElementById('pTable2')

    if (num == 0) {
        if (pmButton.classList.contains('is-outlined')) {
            pmButton.classList.remove('is-outlined');
            hfButton.classList.add('is-outlined')
            ingColumn.classList.add('this-is-hidden')
            manColumn.classList.remove('this-is-hidden')
            rtable.classList.add('this-is-hidden')
            ptable.classList.remove('this-is-hidden')
        }
        else {
        }
    }
    if (num == 1) {
        if (hfButton.classList.contains('is-outlined')) {
            hfButton.classList.remove('is-outlined');
            pmButton.classList.add('is-outlined')
            manColumn.classList.add('this-is-hidden')
            ingColumn.classList.remove('this-is-hidden')
            rtable.classList.remove('this-is-hidden')
            ptable.classList.add('this-is-hidden')
        }
        else {
        }
    }
}

function NutritionCalc() {
    var json = {};
    json.post = 1;
    var cals = 0
    var fatCals = 0
    var totalFat = 0
    var satFat = 0
    var transFat = 0
    var cholesterol = 0
    var sodium = 0
    var carbs = 0
    var dietFiber = 0
    var sugars = 0
    var protein = 0
    var select = getSelectValues(document.getElementById('cSelect'))

    var calsHTML = document.getElementById("cals")
    var fatCalsHTML = document.getElementById("fatCals")
    var totalFatHTML = document.getElementById("totalFat")
    var satFatHTML = document.getElementById("satFat")
    var transFatHTML = document.getElementById("transFat")
    var cholesterolHTML = document.getElementById("cholesterol")
    var sodiumHTML = document.getElementById("sodium")
    var carbsHTML = document.getElementById("totalCarbs")
    var dietFiberHTML = document.getElementById("dietFiber")
    var sugarsHTML = document.getElementById("sugars")
    var proteinHTML = document.getElementById("protein")

    async function f() {
        const response = await fetch('/api/3', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(json)
        });
        results = await response.json()
    }

    var Part2 = () => {
        console.log(results)
        var toAdd = []
        for (var i = 0; i < select.length; i++) {
            if (select[i].charAt(0) == "p") {
                var val = select[i].substr(1);
                for (var e = 0; e < results.db1.length; e++) {
                    if (val == results.db1[e].food_ID) {
                        toAdd.push(results.db1[e])
                    }
                }
            }
            else {
                var val = select[i].substr(1);
                for (var e = 0; e < results.db2.length; e++) {
                    if (val == results.db2[e].food_ID) {
                        toAdd.push(results.db2[e])
                    }
                }
            }
        }
        console.log(toAdd)
        for (var i = 0; i < toAdd.length; i++) {
            cals = cals + toAdd[i].calories
            fatCals = fatCals + toAdd[i].fat_calories
            totalFat = totalFat + toAdd[i].total_fat
            satFat = satFat + toAdd[i].sat_fat
            transFat = transFat + toAdd[i].trans_fat
            cholesterol = cholesterol + toAdd[i].cholesterol
            sodium = sodium + toAdd[i].sodium
            carbs = carbs + toAdd[i].total_carbs
            dietFiber = dietFiber + toAdd[i].diet_fiber
            sugars = sugars + toAdd[i].sugars
            protein = protein + toAdd[i].protein
        }

        calsHTML.innerHTML = cals.toFixed(0);
        fatCalsHTML.innerHTML = fatCals.toFixed(0);
        totalFatHTML.innerHTML = totalFat.toFixed(0)
        satFatHTML.innerHTML = satFat.toFixed(0)
        transFatHTML.innerHTML = transFat.toFixed(0)
        cholesterolHTML.innerHTML = cholesterol.toFixed(0)
        sodiumHTML.innerHTML = sodium.toFixed(0)
        carbsHTML.innerHTML = carbs.toFixed(0)
        dietFiberHTML.innerHTML = dietFiber.toFixed(0)
        sugarsHTML.innerHTML = sugars.toFixed(0)
        proteinHTML.innerHTML = protein.toFixed(0)

    }
    f().then(Part2);
}

function getSelectValues(select) {
    var result = [];
    var options = select && select.options;
    var opt;

    for (var i = 0, iLen = options.length; i < iLen; i++) {
        opt = options[i];

        if (opt.selected) {
            result.push(opt.value || opt.text);
        }
    }
    return result;
}

function SuperQuery() {
    var db
    var json = {};
    json.post = 1;
    var results
    var num
    var manColumn = document.getElementById('manColumn');
    if (manColumn.classList.contains('this-is-hidden')) {
        num = 0;
    }
    else {
        num = 1;
    }
    async function f() {
        const response = await fetch('/api/3', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(json)
        });
        results = await response.json()
    }

    var Part2 = () => {
        console.log(num);
        if (num == 1) {
            db = results.db1
        }
        else {
            db = results.db2
        }

        var phaseOne = db

        var cals = document.getElementById('aCalsInput').value;
        var fatCals = document.getElementById('aFatCalsInput').value;
        var totalFat = document.getElementById('aTotalFatInput').value;
        var satFat = document.getElementById('aSatFatInput').value;
        var transFat = document.getElementById('aTransFatInput').value;
        var cholesterol = document.getElementById('aCholesterolInput').value;
        var sodium = document.getElementById('aSodiumInput').value;
        var carbs = document.getElementById('aCarbsInput').value;
        var dietFiber = document.getElementById('aFiberInput').value;
        var sugars = document.getElementById('aSugarsInput').value;
        var protein = document.getElementById('aProteinInput').value;

        if (cals != "") {
            if (cals.charAt(0) === '<') {
                cals = cals.substr(1);
                for (var i = 0; i < db.length; i++) {
                    if (cals >= db[i].calories) {
                    }
                    else {
                        phaseOne = phaseOne.filter(function (item) {
                            return item !== db[i]
                        })
                    }
                }
            }
            else if (cals.charAt(0) === '>') {
                cals = cals.substr(1);
                for (var i = 0; i < db.length; i++) {
                    if (cals <= db[i].calories) {
                    }
                    else {
                        phaseOne = phaseOne.filter(function (item) {
                            return item !== db[i]
                        })
                    }
                }
            }
            else {
                for (var i = 0; i < db.length; i++) {
                    if (cals != db[i].calories) {
                        phaseOne = phaseOne.filter(function (item) {
                            return item !== db[i]
                        })
                    }
                    else {
                    }
                }
            }
        }

        if (fatCals != "") {
            if (fatcals.charAt(0) === '<') {
                fatCals = fatCals.substr(1);
                for (var i = 0; i < db.length; i++) {
                    if (fatCals >= db[i].fat_calories) {
                    }
                    else {
                        phaseOne = phaseOne.filter(function (item) {
                            return item !== db[i]
                        })
                    }
                }
            }
            else if (fatCals.charAt(0) === '>') {
                fatCals = fatCals.substr(1);
                for (var i = 0; i <= db.length; i++) {
                    if (fatCals < db[i].fat_calories) {
                    }
                    else {
                        phaseOne = phaseOne.filter(function (item) {
                            return item !== db[i]
                        })
                    }
                }
            }
            else {
                for (var i = 0; i < db.length; i++) {
                    if (fatCals != db[i].fat_calories) {
                        phaseOne = phaseOne.filter(function (item) {
                            return item !== db[i]
                        })
                    }
                    else {
                    }
                }
            }
        }

        if (transFat != "") {
            if (transFat.charAt(0) === '<') {
                transFat = transFat.substr(1);
                for (var i = 0; i < db.length; i++) {
                    if (transFat >= db[i].trans_fat) {
                    }
                    else {
                        phaseOne = phaseOne.filter(function (item) {
                            return item !== db[i]
                        })
                    }
                }
            }
            else if (transFat.charAt(0) === '>') {
                transFat = transFat.substr(1);
                for (var i = 0; i < db.length; i++) {
                    if (transFat <= db[i].trans_fat) {
                    }
                    else {
                        phaseOne = phaseOne.filter(function (item) {
                            return item !== db[i]
                        })
                    }
                }
            }
            else {
                for (var i = 0; i < db.length; i++) {
                    if (transFat != db[i].trans_fat) {
                        phaseOne = phaseOne.filter(function (item) {
                            return item !== db[i]
                        })
                    }
                    else {
                    }
                }
            }
        }

        if (satFat != "") {
            if (satFat.charAt(0) === '<') {
                satFat = satFat.substr(1);
                for (var i = 0; i < db.length; i++) {
                    if (satFat >= db[i].sat_fat) {
                    }
                    else {
                        phaseOne = phaseOne.filter(function (item) {
                            return item !== db[i]
                        })
                    }
                }
            }
            else if (satFat.charAt(0) === '>') {
                satFat = satFat.substr(1);
                for (var i = 0; i < db.length; i++) {
                    if (satFat <= db[i].sat_fat) {
                    }
                    else {
                        phaseOne = phaseOne.filter(function (item) {
                            return item !== db[i]
                        })
                    }
                }
            }
            else {
                for (var i = 0; i < db.length; i++) {
                    if (satFat != db[i].sat_fat) {
                        phaseOne = phaseOne.filter(function (item) {
                            return item !== db[i]
                        })
                    }
                    else {
                    }
                }
            }
        }

        if (totalFat != "") {
            if (totalFat.charAt(0) === '<') {
                totalFat = totalFat.substr(1);
                for (var i = 0; i < db.length; i++) {
                    if (totalFat >= db[i].total_fat) {
                    }
                    else {
                        phaseOne = phaseOne.filter(function (item) {
                            return item !== db[i]
                        })
                    }
                }
            }
            else if (totalFat.charAt(0) === '>') {
                totalFat = totalFat.substr(1);
                for (var i = 0; i < db.length; i++) {
                    if (totalFat <= db[i].total_fat) {
                    }
                    else {
                        phaseOne = phaseOne.filter(function (item) {
                            return item !== db[i]
                        })
                    }
                }
            }
            else {
                for (var i = 0; i < db.length; i++) {
                    if (totalFat != db[i].total_fat) {
                        phaseOne = phaseOne.filter(function (item) {
                            return item !== db[i]
                        })
                    }
                    else {
                    }
                }
            }
        }

        if (cholesterol != "") {
            if (cholesterol.charAt(0) === '<') {
                cholesterol = cholesterol.substr(1);
                for (var i = 0; i < db.length; i++) {
                    if (cholesterol >= db[i].cholesterol) {
                    }
                    else {
                        phaseOne = phaseOne.filter(function (item) {
                            return item !== db[i]
                        })
                    }
                }
            }
            else if (cholesterol.charAt(0) === '>') {
                cholesterol = cholesterol.substr(1);
                for (var i = 0; i < db.length; i++) {
                    if (cholesterol <= db[i].cholesterol) {
                    }
                    else {
                        phaseOne = phaseOne.filter(function (item) {
                            return item !== db[i]
                        })
                    }
                }
            }
            else {
                for (var i = 0; i < db.length; i++) {
                    if (cholesterol != db[i].cholesterol) {
                        phaseOne = phaseOne.filter(function (item) {
                            return item !== db[i]
                        })
                    }
                    else {
                    }
                }
            }
        }

        if (sodium != "") {
            if (sodium.charAt(0) === '<') {
                sodium = sodium.substr(1);
                for (var i = 0; i < db.length; i++) {
                    if (sodium >= db[i].sodium) {
                    }
                    else {
                        phaseOne = phaseOne.filter(function (item) {
                            return item !== db[i]
                        })
                    }
                }
            }
            else if (sodium.charAt(0) === '>') {
                sodium = sodium.substr(1);
                for (var i = 0; i < db.length; i++) {
                    if (sodium <= db[i].sodium) {
                    }
                    else {
                        phaseOne = phaseOne.filter(function (item) {
                            return item !== db[i]
                        })
                    }
                }
            }
            else {
                for (var i = 0; i < db.length; i++) {
                    if (sodium != db[i].sodium) {
                        phaseOne = phaseOne.filter(function (item) {
                            return item !== db[i]
                        })
                    }
                    else {
                    }
                }
            }
        }

        if (carbs != "") {
            if (carbs.charAt(0) === '<') {
                carbs = carbs.substr(1);
                for (var i = 0; i < db.length; i++) {
                    if (carbs >= db[i].total_carbs) {
                    }
                    else {
                        phaseOne = phaseOne.filter(function (item) {
                            return item !== db[i]
                        })
                    }
                }
            }
            else if (carbs.charAt(0) === '>') {
                carbs = carbs.substr(1);
                for (var i = 0; i < db.length; i++) {
                    if (carbs <= db[i].total_carbs) {
                    }
                    else {
                        phaseOne = phaseOne.filter(function (item) {
                            return item !== db[i]
                        })
                    }
                }
            }
            else {
                for (var i = 0; i < db.length; i++) {
                    if (carbs != db[i].total_carbs) {
                        phaseOne = phaseOne.filter(function (item) {
                            return item !== db[i]
                        })
                    }
                    else {
                    }
                }
            }
        }

        if (dietFiber != "") {
            if (dietFiber.charAt(0) === '<') {
                dietFiber = dietFiber.substr(1);
                for (var i = 0; i < db.length; i++) {
                    if (dietFiber >= db[i].diet_fiber) {
                    }
                    else {
                        phaseOne = phaseOne.filter(function (item) {
                            return item !== db[i]
                        })
                    }
                }
            }
            else if (dietFiber.charAt(0) === '>') {
                dietFiber = dietFiber.substr(1);
                for (var i = 0; i < db.length; i++) {
                    if (dietFiber <= db[i].diet_fiber) {
                    }
                    else {
                        phaseOne = phaseOne.filter(function (item) {
                            return item !== db[i]
                        })
                    }
                }
            }
            else {
                for (var i = 0; i < db.length; i++) {
                    if (dietFiber != db[i].diet_fiber) {
                        phaseOne = phaseOne.filter(function (item) {
                            return item !== db[i]
                        })
                    }
                    else {
                    }
                }
            }
        }

        if (sugars != "") {
            if (sugars.charAt(0) === '<') {
                sugars = sugars.substr(1);
                for (var i = 0; i < db.length; i++) {
                    if (sugars >= db[i].sugars) {
                    }
                    else {
                        phaseOne = phaseOne.filter(function (item) {
                            return item !== db[i]
                        })
                    }
                }
            }
            else if (sugars.charAt(0) === '>') {
                sugars = sugars.substr(1);
                for (var i = 0; i < db.length; i++) {
                    if (sugars <= db[i].sugars) {
                    }
                    else {
                        phaseOne = phaseOne.filter(function (item) {
                            return item !== db[i]
                        })
                    }
                }
            }
            else {
                for (var i = 0; i < db.length; i++) {
                    if (sugars != db[i].sugars) {
                        phaseOne = phaseOne.filter(function (item) {
                            return item !== db[i]
                        })
                    }
                    else {
                    }
                }
            }
        }

        if (protein != "") {
            if (protein.charAt(0) === '<') {
                protein = protein.substr(1);
                for (var i = 0; i < db.length; i++) {
                    if (protein >= db[i].protein) {
                    }
                    else {
                        phaseOne = phaseOne.filter(function (item) {
                            return item !== db[i]
                        })
                    }
                }
            }
            else if (protein.charAt(0) === '>') {
                protein = protein.substr(1);
                for (var i = 0; i < db.length; i++) {
                    if (protein <= db[i].protein) {
                    }
                    else {
                        phaseOne = phaseOne.filter(function (item) {
                            return item !== db[i]
                        })
                    }
                }
            }
            else {
                for (var i = 0; i < db.length; i++) {
                    if (protein != db[i].protein) {
                        phaseOne = phaseOne.filter(function (item) {
                            return item !== db[i]
                        })
                    }
                    else {
                    }
                }
            }
        }
        var manufacturers = getSelectValues(document.getElementById('aManufacturers'))
        var ingredients = getSelectValues(document.getElementById('aIngredients'))
        var phaseTwo = []

        console.log(phaseOne);

        if (num == 1) {
            if (manufacturers.length > 0) {
                for (var e = 0; e < phaseOne.length; e++) {
                    var count = 0
                    for (var i = 0; i < manufacturers.length; i++) {
                        if (phaseOne[e].manufacturer_name === manufacturers[i]) {
                            phaseTwo.push(phaseOne[e])
                        }
                    }
                }
            }
        }
        else {
            if (ingredients.length > 0) {
                for (var e = 0; e < phaseOne.length; e++) {
                    var count = 0
                    for (var i = 0; i < ingredients.length; i++) {
                        for (var sry = 0; sry < phaseOne[e].ingredients.length; sry++) {
                            if (phaseOne[e].ingredients[sry].ingredient_name === ingredients[i]) {
                                count++
                            }
                        }
                    }
                    if (count == ingredients.length) {
                        phaseTwo.push(phaseOne[e])
                    }
                }
            }
        }
        var allergens = getSelectValues(document.getElementById('aAllergens'))
        var categories = getSelectValues(document.getElementById('aCategories'))

        if ((manufacturers.length > 0 && num == 1) || (ingredients.length > 0 && num != 1)) {
            phaseOne = phaseTwo
            phaseTwo = []
        }

        if (allergens.length > 0) {
            for (var e = 0; e < phaseOne.length; e++) {
                var count = 0
                for (var i = 0; i < allergens.length; i++) {
                    if (phaseOne[e].containsAllergens.includes(allergens[i])) {
                        count++;
                    }
                }
                if (count == 0) {
                    phaseTwo.push(phaseOne[e])
                }
            }
        }

        if (allergens.length > 0) {
            phaseOne = phaseTwo
            phaseTwo = []
        }

        if (categories.length > 0) {
            for (var e = 0; e < phaseOne.length; e++) {
                var count = 0
                for (var i = 0; i < categories.length; i++) {
                    if (phaseOne[e].category === categories[i]) {
                        phaseTwo.push(phaseOne[e])
                    }
                }
            }
        }

        if (categories.length > 0) {
            phaseOne = phaseTwo
            phaseTwo = []
        }

        if (num === 1) {
            var input, filter, table, tr, td, i;
            filter = phaseOne;
            table = document.getElementById("pTable2");
            tr = table.getElementsByTagName("tr");
            var indeces = [];

            for (i = 0; i < tr.length; i++) {
                for (e = 0; e < filter.length; e++) {
                    td = tr[i].getElementsByTagName("td")[1];
                    if (td) {
                        if (td.innerHTML.indexOf(filter[e].food_ID) > -1) {
                            tr[i].style.display = "";
                            indeces.push(i);
                        }
                    }
                }
            }
            for (i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[1];
                if (td) {
                    if (!indeces.includes(i)) {
                        tr[i].style.display = 'none';
                    }
                }
            }
        }
        else {
            var input, filter, table, tr, td, i;
            filter = phaseOne;
            table = document.getElementById("rTable2");
            tr = table.getElementsByTagName("tr");
            var indeces = [];

            for (i = 0; i < tr.length; i++) {
                for (e = 0; e < filter.length; e++) {
                    td = tr[i].getElementsByTagName("td")[1];
                    if (td) {
                        if (td.innerHTML.indexOf(filter[e].food_ID) > -1) {
                            tr[i].style.display = "";
                            indeces.push(i);
                        }
                    }
                }
            }
            for (i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[1];
                if (td) {
                    if (!indeces.includes(i)) {
                        tr[i].style.display = 'none';
                    }
                }
            }
        }

        console.log(phaseOne);
    }
    f().then(Part2);
}