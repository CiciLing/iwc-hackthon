import './StateInformation.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function StateInformation() {
  return (
    <DropdownButton id="dropdown-basic-button" title="Choose Your State">
      <Dropdown.Item href="./ct">Connecticut</Dropdown.Item>
      <Dropdown.Item href="./ma">Massachusetts</Dropdown.Item>
      <Dropdown.Item href="./ny">New York</Dropdown.Item>
    </DropdownButton>
  );
}

export default StateInformation;

