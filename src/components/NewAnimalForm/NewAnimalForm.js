import React from 'react';
import './NewAnimalForm.css';

class NewAnimalForm extends React.Component {
  render () {
    return (
      <div className='NewAnimalForm'>
        <h2>NewAnimalForm</h2>
        <form class="form-horizontal">
          <div class="form-group">
            <label for="inputEmail3" class="col-sm-2 control-label">Name</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" id="inputEmail3" placeholder="Uni-Rex" />
            </div>
          </div>
          <div class="form-group">
            <label for="inputPassword3" class="col-sm-2 control-label">Image URL</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" id="inputPassword3" placeholder="www.mycrazyimage.com/image.jpg" />
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button type="submit" class="btn btn-default">Add Mashup</button>
            </div>
          </div>
        </form>
      </div>
    );
  };
}

export default NewAnimalForm;
