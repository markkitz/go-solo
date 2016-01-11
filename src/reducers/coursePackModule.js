var forms = [{key:'CoursePackInfoForm', value:'Course Info Form'},{key:'CoursePackPrintDetailsForm',value:'Print Details'}, {key:'CoursePackUploadForm', value:'Upload Form'}];
var formIdentifiers = forms.map(form => {return form.key});

const getPreviousForm = (currentForm) => {
  var i = formIdentifiers.indexOf(currentForm);
  if(i > 0){
      return formIdentifiers[i-1];
  }  
  return currentForm;
};
const getNextForm = (currentForm) => {
  var i = formIdentifiers.indexOf(currentForm);
  if(i < formIdentifiers.length - 1){
      return formIdentifiers[i+1];
  }  
  return currentForm;
};

const coursePackModule = (state= {currentForm:'CoursePackInfoForm', isLoaded:false, forms:forms, isLoaded:false}, action) => {
	switch(action.type){
		case 'PREVIOUS_CLICK':
			return {...state, currentForm:getPreviousForm(action.form)};
		case 'NEXT_CLICK':
			return {...state, currentForm:getNextForm(action.form)};
		case 'NAVIGATE_TO_FORM':
			return {...state, currentForm:action.form};
		case 'LOAD_COURSE_MODULE_FOR_TERM':
			return {...state, formData:action.formData, isLoaded:true, currentForm:state.forms[0].key};
		case 'UPDATE_COVERINFO':
		case 'UPDATE_PRINTDETAILS':
			return  {...state, formData: formData(state.formData, action) };
	
		default:
			return state;
	}
}
const formData = (state = {}, action) => {
	switch(action.type){
		case 'UPDATE_COVERINFO':
			return  {...state,  courseInfo: courseInfo(state.courseInfo, action)};
		case  'UPDATE_PRINTDETAILS':
			return  {...state,  printDetails: printDetails(state.printDetails, action)};
		default:
			return state;
	}  
}
const courseInfo = (state = {}, action) => {
	switch(action.type){
		case 'UPDATE_COVERINFO':
			return  {...state,  [action.keyValue.name]: action.keyValue.value };
		default:
			return state;
	}  
}

const printDetails = (state, action) => {
	switch(action.type){
		case 'UPDATE_PRINTDETAILS':        
			return {...state,  [action.keyValue.name]: action.keyValue.value };
		default:
			return state;
	}  
}


export default coursePackModule;