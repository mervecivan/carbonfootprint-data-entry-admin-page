function updateSubOptions() {
  var mainOptions = {
    "Energy Production and Transformation": ["Fossil fuel power plants", "Refineries", "Natural gas facilities"],
    "Transportation": ["Motorized vehicles", "Airplanes", "Ships"],
    "Industry": ["Manufacturing plants", "Mining operations", "Chemical factories"],
    "Agriculture": ["Animal Husbandry", "Fertilizer use"],
    "Waste Management": ["Landfills", "Waste water treatment plants"]
  };

  var selectedOption = document.getElementById('inputMain').value;
  var subList = document.getElementById('subList');
  subList.innerHTML = '';

  if(mainOptions[selectedOption]) {
    mainOptions[selectedOption].forEach(function(item){
      var option = document.createElement('option');
      option.value = item;
      subList.appendChild(option);
    });
  }}

  function updateSubOptions2() {
    var mainOptions = {
      "Fixed Sources": ["Chimneys (power generation, industry)", "Exhaust pipes (motor vehicles)", "Ventilation holes (industrial plants)"],
      "Moving Sources": ["Exhaust pipes of motor vehicles", "Engines of airplanes", "Chimneys of ship"],
      "Dispersed Resources": ["Agricultural land (livestock, fertilization)", "Construction activities"]
    };
  
    var selectedOption = document.getElementById('inputMain2').value;
    var subList = document.getElementById('subList2');
    subList.innerHTML = '';
  
    if(mainOptions[selectedOption]) {
      mainOptions[selectedOption].forEach(function(item){
        var option = document.createElement('option');
        option.value = item;
        subList.appendChild(option);
      });
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.data-container');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      collectAndDisplayData();
    });
  });
  

  function collectAndDisplayData() {

    var formData = {
      companyName: document.getElementById('company-name').value,
      reportingStart: document.getElementById('reporting-start').value,
      reportingFinish: document.getElementById('reporting-finish').value,
      location: document.getElementById('location').value,
      emissionPoint: document.getElementById('inputMain2').value,
      emissionFactor: document.getElementById('inputSub2').value,
      emissionSource: document.getElementById('inputMain').value,
      subOption: document.getElementById('inputSub').value,
      units: document.getElementById('units').value
    };

    var dataDisplayDiv = document.querySelector('.data-display');
    dataDisplayDiv.querySelectorAll('fieldset h4').forEach(function(header) {
      switch (header.textContent) {
        case 'Company Name:':
          header.nextElementSibling.textContent = formData.companyName;
          break;
        case 'Reporting Start:':
          header.nextElementSibling.textContent = formData.reportingStart;
          break;
        case 'Reporting Finish:':
          header.nextElementSibling.textContent = formData.reportingFinish;
          break;
        case 'Location:':
          header.nextElementSibling.textContent = formData.location;
          break;
        case 'Emission Sources:':
          header.nextElementSibling.textContent = formData.emissionSource;
          header.nextElementSibling.nextElementSibling.textContent = formData.subOption;
          break;
        case 'Unit:':
          header.nextElementSibling.textContent = formData.units;
          break;
        case 'Emission Occurrence Point:':
          header.nextElementSibling.textContent = formData.emissionPoint;
          header.nextElementSibling.nextElementSibling.textContent = formData.emissionFactor;
          break;
      }
    });
  }
  
  function clearDisplayData() {
    var dataDisplayDiv = document.querySelector('.data-display');
    var paragraphs = dataDisplayDiv.querySelectorAll('p');
    paragraphs.forEach(function(p) {
      p.textContent = ''; 
    });
    var form = document.querySelector('.data-entry');
    form.reset();
  }
  
  function saveDisplayData() {
    console.log('Veriler kaydedildi.');
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    var updateButton = document.querySelector('.data-display button[type="reset"]');
    var saveButton = document.querySelector('.data-display button[type="submit"]');
  
    updateButton.addEventListener('click', clearDisplayData);
    saveButton.addEventListener('click', saveDisplayData);
  });