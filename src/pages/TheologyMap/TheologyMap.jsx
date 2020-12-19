import React, { Component } from 'react';

import classnames from 'classnames';
// import "@material/fab/mdc-fab";

import './theologyMap.css'

class TheologyMap extends Component {
  
  state = {
    items: [{
      title: 'My Point',
      category: 1,
      posX: '10px',
      posY: '10px',
    }],
    currentDragIndex: -1,
  }

  onDragStart = (e, index) => {
    e.stopPropagation();

    // Now setup our dataTransfer object properly
    // First we'll allow a move action — this is used for the cursor
    e.dataTransfer.effectAllowed = 'move';

    // Setup some dummy drag-data to ensure dragging
    e.dataTransfer.setData('text/plain', 'some_dummy_data');

    // Now we'll create a dummy image for our dragImage and hide the old one
    var dragImage = document.createElement('div');
    dragImage.setAttribute('class', 'theology-main-point');
    dragImage.setAttribute('id', 'fake-drag-div');
    dragImage.setAttribute('style', 'position: absolute; top: -300px; left: -300px;');
    dragImage.innerText = this.state.items[index].title;
    document.body.appendChild(dragImage);
    
    // And finally we assign the dragImage and center it on cursor
    e.dataTransfer.setDragImage(dragImage, dragImage.offsetWidth / 2, dragImage.offsetHeight / 2);

    this.setState({ currentDragIndex: index, ...this.state });
  }

  onDragEnd = (e, index) => {
    e.stopPropagation();

    const dragImage = document.getElementById('fake-drag-div');

    const newItem = this.state.items[index];
    newItem.posX = `${e.pageX - 80 - (dragImage.offsetWidth / 2)}px`;
    newItem.posY = `${e.pageY - (dragImage.offsetHeight / 2)}px`;

    const items = this.state.items;
    items[index] = newItem;

    var fakeDragDiv = document.getElementById('fake-drag-div');
    if (fakeDragDiv) {
      fakeDragDiv.remove();
    }

    this.setState({
      items,
      currentDragIndex: -1,
      ...this.state,
    })
  }

  render() {
    return (
      <div className="theology-map__backdrop">
      <button class="mdc-fab mdc-fab--extended add-point-btn">
        <span class="material-icons mdc-fab__icon">add</span>
        <span class="mdc-fab__label">Add Point</span>
      </button>       
        {this.state.items.map((point, index) => 
          <div 
            draggable
            onDragStart={(e) => this.onDragStart(e, index)}
            onDragEnd={(e) => this.onDragEnd(e, index)}
            onDoubleClick={(e) => {
              e.target.setAttribute('contenteditable', 'true');
              e.target.focus();
            }}
            className={classnames('page',
              {'theology-main-point' : point.category === 1}, 
              {'hidden': index === this.state.currentDragIndex})}
            style={{ position: 'absolute', left: point.posX, top: point.posY }}
            key={point.title}
          >{point.title}</div>)
        }
      </div>
    );
  }
}

export default TheologyMap;
