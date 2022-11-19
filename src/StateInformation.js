import './StateInformation.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function StateInformation() {
  return (
    <DropdownButton id="dropdown-basic-button" title="Choose Your State">
      <Dropdown.Item href="#/action-1">Connecticut</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Massachusetts</Dropdown.Item>
      <Dropdown.Item href="#/action-3">New York</Dropdown.Item>
    </DropdownButton>
  );
}

export default StateInformation;

