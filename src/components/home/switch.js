import React from 'react';
import Switch from '@material-ui/core/Switch';

export default function Switches() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <Switch
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
     
      {/* <Switch inputProps={{ 'aria-label': 'primary checkbox' }} /> */}
      {/* <Switch disabled inputProps={{ 'aria-label': 'disabled checkbox' }} /> */}
      {/* <Switch disabled checked inputProps={{ 'aria-label': 'primary checkbox' }} /> */}
    
    </div>
  );
}