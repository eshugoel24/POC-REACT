//This class implements validations
class Validations{
  constructor(){
  };
  //This function is used to check required field in form
  isRequired(inputString){
      let isFieldValid = !inputString.length > 0 ?false:true;
      return isFieldValid;
  };

//This function is used to validity of username
  isValid = (inputString)=>{
   let regExp = /[a-zA-Z\-\.]{8}/i;
    if(!inputString.match(regExp)){
      return false;
    }
    return true;
  };
  //This function is used to validity of email
  isEmail = (inputString)=>{
    let regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!inputString.match(regExp)){
      return true;
    }
    return false;
  };
  //This function is used to validity of email
  isPhoneNumber = (inputString)=>{
    let regExp = /[0-9]{10}/;
    if(!inputString.match(regExp)){
      return false;
    }
    return true;
  };
  //This function is used to validity of date
  isValidDate = (inputString)=>{

  };
  //This function is used to validity of datetime
  isValidDateTime = (inputString)=>{

  };
};

export default (new Validations());
