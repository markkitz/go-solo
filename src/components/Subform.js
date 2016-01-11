const React = require('react');
const ReactRedux = require('react-redux');
const {connect} = ReactRedux;
import '../css/subform.css'

let SubForm = ({heading, isVisible, children, form, dispatch}) => {

    let handleOnPrevious = ()  => {dispatch({type:"PREVIOUS_CLICK", form: form})};
    let handleOnNext = () => {dispatch({type:"NEXT_CLICK", form: form})};

    if(isVisible)
    {
        return(
            <div className='sf'>
                {children}
                <PrevNextNav onPrevious ={handleOnPrevious} onNext = {handleOnNext} />
            </div>
        );
    }
    else
    {
        return <div></div>;
    }
};
SubForm = connect()(SubForm);


const PrevNextNav = ({onPrevious, onNext}) => {
    return (

        <div className='sf-prev-next-btns'>
            <button type="button" className="btn btn-primary" onClick={onPrevious}>Previous</button>
            <button type="button" className="btn btn-primary" onClick={onNext}>Next</button>
        </div>
    );
};
export default SubForm;
