import { Component } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

class ChooseBooksCategory extends Component {
  render() {
    return (
      <ToggleButtonGroup className="mt-3 mb-4" type="radio" name="options" defaultValue={1}>
        <ToggleButton id="tbg-radio-1" value={1}>
          Fantasy
        </ToggleButton>
        <ToggleButton id="tbg-radio-2" value={2}>
          History
        </ToggleButton>
        <ToggleButton id="tbg-radio-3" value={3}>
          Horror
        </ToggleButton>
        <ToggleButton id="tbg-radio-3" value={3}>
          Romance
        </ToggleButton>
        <ToggleButton id="tbg-radio-3" value={3}>
          Scifi
        </ToggleButton>
      </ToggleButtonGroup>
    );
  }
}

export default ChooseBooksCategory;
