import './StateInformation.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function StateInformation() {
  return (
    <DropdownButton id="dropdown-basic-button" title="Choose Your State">
      <Dropdown.Item href=".pages/ct.js">Connecticut</Dropdown.Item>
      <Dropdown.Item href=".pages/ma.js">Massachusetts</Dropdown.Item>
      <Dropdown.Item href=".pages/nyc.js">New York</Dropdown.Item>
    </DropdownButton>
  );
}

export default StateInformation;

