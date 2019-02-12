import React, {Component} from 'react';
import FlippingPages from 'flipping-pages';
import { Button }  from 'reactstrap';
/* IMPORTANT */
import 'flipping-pages/FlippingPages.css';
 
import '../App.css';  //should have some sort of css installed do this later.
 
class PageFlip extends Component {

  constructor(props) {
    super(props);
    this.totalPages = 4;
    this.state = {
        selected: 0,
    };
    this.handleSelectedChange = this.handleSelectedChange.bind(this);
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
  };

  handleSelectedChange(selected) {
    this.setState({selected})
  };

  previous() {
    this.setState(state => ({
      selected: state.selected - 1
    }))
  };

  next() {
    this.setState(state => ({
      selected: state.selected + 1
    }))
  };

  render() {
    return (
      <div className="App">
        <FlippingPages
          className="App-pages"
          direction="horizontal"
          selected={this.state.selected}
          onSelectedChange={this.handleSelectedChange}
          /* touch-action attribute is required by pointer events
          polyfill */
          touch-action="none"
        >
          <div className="App-page App-page_red">0</div>
          <div className="App-page App-page_green">1</div>
          <div className="App-page App-page_blue">2</div>
          <div className="App-page App-page_orange">3</div>
        </FlippingPages>
        {/* Buttons are required for keyboard navigation */}
        <Button
          onClick={this.previous}
          disabled={!this.state.selected}
        >Previous</Button>
        <Button
          onClick={this.next}
          disabled={this.state.selected + 1 === this.totalPages}
        >Next</Button>
      </div>
    )
  }

}

export default PageFlip;