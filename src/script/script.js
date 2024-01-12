function submitForm() {
    var curse = document.getElementById("curse").value;
    var specialnist = document.getElementById("specialnist").value;

    var resultTable = "<table class='table mt-5'>";
    resultTable += "<thead class='thead-dark'><tr><th>Рік вступу</th><th>Рік закінчення</th><th>Назва групи</th></tr></thead><tbody>";

    var startYear = new Date().getFullYear() - curse + 1;
    var endYear = startYear + 3;

    for (var year = startYear; year <= endYear; year++) {
        var groupPrefix = '';

        switch (specialnist) {
            case "Комп'ютерні науки":
                groupPrefix = 'КН';
                break;
            case "Прикладна механіка":
                groupPrefix = 'ПМ';
                break;
            case "Менеджмент":
                groupPrefix = 'МН';
                break;
        }

        var groupName = groupPrefix + '-' + (year - 2000);

        resultTable += `<tr><td>${year}</td><td>${year + 3}</td><td>${groupName}</td></tr>`;
    }

    resultTable += "</tbody></table>";

    document.getElementById("resultTable").innerHTML = resultTable;
}
