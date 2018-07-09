import React from 'react';
import './NewAnimalForm.css';

const defaultMashup = {
  name: '',
  imgURL: '',
  description: '',
};

class NewAnimalForm extends React.Component {
  state = {
    newMashup: defaultMashup,
  };

  nameChange = (e) => {
    const tempMashup = {...this.state.newMashup};
    tempMashup.name = e.target.value;
    this.setState({newMashup: tempMashup});
  };

  imgURLChange = (e) => {
    const tempMashup = {...this.state.newMashup};
    tempMashup.imgURL = e.target.value;
    this.setState({newMashup: tempMashup});
  };

  descriptionChange = (e) => {
    const tempMashup = {...this.state.newMashup};
    tempMashup.description = e.target.value;
    this.setState({newMashup: tempMashup});
  };

  onSubmit = (e) => {
    const {formEvent} = this.props;
    const {newMashup} = this.state;
    e.preventDefault();
    if (
      newMashup.name &&
      newMashup.description &&
      newMashup.imgURL
    ) {
      formEvent(this.state.newMashup);
      this.setState({newMashup: defaultMashup});
    } else {
      alert('Please fill out all the fields');
    }
  }

  render () {
    return (
      <div className='NewAnimalForm'>
        <h2>NewAnimalForm</h2>
        <form className="form-horizontal" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="inputName" className="col-sm-2 control-label">Name:</label>
            <div className="col-sm-10">
              <input onChange={this.nameChange} type="text" className="form-control" id="inputName" placeholder="Uni-Rex" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputImageURL" className="col-sm-2 control-label">Image URL:</label>
            <div className="col-sm-10">
              <input onChange={this.imgURLChange} type="text" className="form-control" id="inputImageURL" placeholder="www.mycrazyimage.com/image.jpg" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputDescription" className="col-sm-2 control-label">Description:</label>
            <div className="col-sm-10">
              <textarea onChange={this.descriptionChange} type="text" className="form-control" id="inputDescription" placeholder="A weird cross between a Unicorn and a T-Rex."></textarea>
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
