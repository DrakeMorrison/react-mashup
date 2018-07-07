import React from 'react';
import './AnimalListings.css';

class AnimalListings extends React.Component {
  render () {
    const {mashups} = this.props;
    const mashupsItems = mashups.map(item => {
      return (
        <li key={item.id} className="col-sm-4">
          <div className="thumbnail">
            <img src={item.imgUrl} alt="mashup" />
            <div className="caption">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        </li>
      );
    });

    return (
      <div className='AnimalListings'>
        <h2>AnimalListings</h2>
        <ul>{mashupsItems}</ul>
      </div>
    );
  }
}

export default AnimalListings;
