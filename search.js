
    var csvData = [];

    fetch('data.csv')

      .then(response => response.text())

      .then(data => {

        var csvLines = data.split("\n");

        for (var i = 0; i < csvLines.length; i++) {

          var csvLine = csvLines[i].split(",");

          csvData.push({ title: csvLine[0], content: csvLine[1] });

        }

      });


    function search() {

      var searchText = document.getElementById('search-input').value;

      var resultsElement = document.getElementById('results');

      resultsElement.innerHTML = '';

      for (var i = 0; i < csvData.length; i++) {

        if (csvData[i].title.toLowerCase().includes(searchText.toLowerCase()) || csvData[i].content.toLowerCase().includes(searchText.toLowerCase())) {

          var resultElement = document.createElement('div');

          resultElement.classList.add('result');

          resultElement.innerHTML = '<h2>' + csvData[i].title + '</h2><p>' + csvData[i].content + '</p>';

          resultsElement.appendChild(resultElement);

        }

      }

    }
