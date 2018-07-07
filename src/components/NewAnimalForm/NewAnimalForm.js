import React from 'react';
import './NewAnimalForm.css';

class NewAnimalForm extends React.Component {
  state = {
    newMashup: {},
  };

  render () {
    const {formEvent} = this.props;
    return (
      <div className='NewAnimalForm'>
        <h2>NewAnimalForm</h2>
        <form className="form-horizontal" onSubmit={formEvent}>
          <div className="form-group">
            <label htmlFor="inputName" className="col-sm-2 control-label">Name:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputName" placeholder="Uni-Rex" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputImageURL" className="col-sm-2 control-label">Image URL:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputImageURL" placeholder="www.mycrazyimage.com/image.jpg" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputDescription" className="col-sm-2 control-label">Description:</label>
            <div className="col-sm-10">
              <textarea type="text" className="form-control" id="inputDescription" placeholder="A weird cross between a Unicorn and a T-Rex."></textarea>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-default">Add Mashup</button>
            </div>
          </div>
        </form>
      </div>
    );
  };
}

export default NewAnimalForm;
