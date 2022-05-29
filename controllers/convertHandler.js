function ConvertHandler() {
  
  function separateNumFromString(anInput){
    let splitted;
    
    let splittedNum = anInput.match(/[.\d\/]+/g) || ["1"];
    let spltText = anInput.match(/[a-zA-Z]+/g);

    splitted = [splittedNum, spltText];

    return splitted;
    
  }
  function checkDiv(possibleFraction) {
    let nums;
    
    if(possibleFraction != null){
      nums = possibleFraction.toString().split("/");
      if (nums.length > 2) {
        return false;
  
      }

    }
    return nums;

  }
  this.getNum = function (input) {
    let result = separateNumFromString(input)[0];
    let nums = checkDiv(result);
    if (!nums) {
      return undefined;

    }
    let num1 = nums[0];
    let num2 = nums[1] || 1;

    result = parseFloat((num1) / (num2));
    if (isNaN(num1) || isNaN(num2)) {
      return undefined;

    }
    return result;

  };
  
  this.getUnit = function (input) {
    let resultPrevlc = separateNumFromString(input)[1];
    if(resultPrevlc != null || resultPrevlc != undefined){
      let result = resultPrevlc.toString().toLowerCase();
      switch (result) {
        case "km":
          return "km";

        case "gal":
          return "gal";

        case "lbs":
          return "lbs";

        case "mi":
          return "mi";
          
        case "l":
          return "L";

        case "kg":
          return "kg";

        default:
          return undefined;

      }

    }else{
      return undefined;

    }
    
  };
  
  this.getReturnUnit = function (initUnit) {
    let unit = "";
    let valueToReturn = "";

    if(initUnit !== undefined){
      unit = initUnit.toLowerCase();

      if(unit == "km"){
        valueToReturn = "mi";
  
      }
      else if(unit == "gal"){
        valueToReturn = "L";
        
      }
      else if(unit == "lbs"){
        valueToReturn = "kg";
        
      }
      else if(unit == "mi"){
        valueToReturn = "km";
        
      }
      else if(unit == "l"){
        valueToReturn = "gal";
        
      }
      else if(unit == "kg"){
        valueToReturn = "lbs";
        
      }
      else{
        valueToReturn = undefined;
  
      }
    }else{
      return undefined;

    }    
    return valueToReturn;

  };

  this.spellOutUnit = function (initUnit) {
    let unit = "";
    if(initUnit !== undefined){
      unit = initUnit.toLowerCase();

      switch (unit) {
        case "km":
          return "kilometers";
  
        case "gal":
          return "gallons";
  
        case "lbs":
          return "pounds";
  
        case "mi":
          return "miles";
  
        case "l":
          return "liters";
  
        case "kg":
          return "kilograms";
  
        default:
          return undefined;
      
      }

    }
    
  
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    let unit = initUnit.toLowerCase();
    let num = parseFloat(initNum);
    let result;

    if(unit === 'km'){
      result = num / miToKm;

    }
    if(unit === 'mi'){
      result = num * miToKm;

    }
    if(unit === 'gal'){
      result = num * galToL;

    }
    if(unit === 'l'){
      result = num / galToL;

    }
    if(unit === 'lbs'){
      result = num * lbsToKg;

    }
    if(unit === 'kg'){
      result = num / lbsToKg;

    }
    return parseFloat(result.toFixed(5));
    
  };
  
  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    // let preciseInitNum = parseFloat(initNum.toFixed(5));
    // let preciseReturnNum = parseFloat(returnNum.toFixed(5));

    return `${initNum} ${this.spellOutUnit(
      initUnit
    )} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
}

module.exports = ConvertHandler;
