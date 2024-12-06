// Criado por: Lucas Leite Lima da Silva
// Esse código é responsavel por criar, alterar, remover e salvar propiedades de documentos

class Property {
    constructor() {
      (this.type = this.setType()),
      (this.title = this.setTitle()),
      (this.content = this.setContent()),
      (this.idNumber = this.setIdNumber());
    }
  
    setType() {
      return $('#property-type').val();
    }
  
    setTitle() {
      let title= $('#property-form-title').val();
      if (!title) return null; 
      return title;
    }
  
    setContent() {
      let content= $('#property-form-content').val();
      if (!content) return null;
      if(this.type == "data") {
        let date = content.split("-");
        content = date[2]+"/"+date[1]+"/"+date[0];
      }  
      return content;
    }
  
    setIdNumber() {
      let propertiesStorage = JSON.parse(localStorage.getItem("properties"));
      let idNumber = 1;
      if (propertiesStorage)
        idNumber = Number(Object.keys(propertiesStorage)[Object.keys(propertiesStorage).length - 1]) + 1;
      return idNumber;
    }
  }
  
  // HTML SPECIFICS
  $('#property-type').change(function changeInputType() {
    $('#property-form-text').attr("type","text");
    if(this.value == "data")
      $('#property-form-text').attr("type","date");
  });
  
  $("#activateAddProperty").click(function showPropertyForm() {
    $(this).hide();
    $('#property-form').show();
  });
  
  $("#property-form-button").click(function hidePropertyForm() {
    $("#property-form").hide();
    $('#activateAddProperty').show();
  });
  
  // CREATE
  function createProperty() {
    const property = new Property();
    if (!isPropertyValid(property)) return;
    createPropertyHTML(property.idNumber, property);
    saveProperty(property);
  }
  $("#property-form-button").click(createProperty);
  
  function isPropertyValid(property) {
    if(property.content) return true;
  }
  
  function saveProperty(property) {
    let propertiesStorage = JSON.parse(localStorage.getItem("properties"));
    if (!propertiesStorage) propertiesStorage = {};
    propertiesStorage[property.idNumber] = property;
    addProperty(property.idNumber);
    delete property.idNumber;
    localStorage.setItem("properties", JSON.stringify(propertiesStorage));
  }
  
  function createPropertyHTML(idNumber, property) {  
    // Criação segura do elemento div
    let propertyDiv = $("<div>")
      .addClass("property")
      .attr("id", `property_${idNumber}`);
  
    // Criação segura do elemento img
    let propertyImg = $("<img>")
      .attr("src", `../../Assets/icons/`+property.type+`.png`);
  
    // Criação segura do elemento p
    let propertyTitle = $("<p>").text(property.title);
  
    // Criação segura do elemento strong
    let propertyBold = $("<strong>")
      .append(propertyTitle);
  
    // Criação segura do elemento p
    let propertyContent = $("<p>").text(property.content);
  
    // Anexando os elementos à div
    propertyDiv.append(propertyImg).append(propertyBold).append(propertyContent);
  
    // Adicionando ao container
    $("#property-"+property.type).append(propertyDiv);
  }
  
  function loadAllProperties() {
    let activeStorage = JSON.parse(localStorage.getItem("activeDocument"));
    let documentStorage = JSON.parse(localStorage.getItem("documents"));
    let propertiesStorage = JSON.parse(localStorage.getItem("properties"));
    if (!propertiesStorage) return
    for (let i = 0; i < documentStorage[activeStorage].property.length; i++) {
      createPropertyHTML(documentStorage[activeStorage].property[i], propertiesStorage[documentStorage[activeStorage].property[i]]); // Cria o HTML de cada documento
    } 
  }