import React, { useContext } from 'react';

import { DataStore } from '../../stores';

const CustomInput = () => {
  const dataStore = useContext(DataStore);

  const handleOnChange = (e: any) => {
    if (!e.target.value.match(/^[0-9]+$/) || parseInt(e.target.value, 10) > dataStore.selectedRover?.max_sol!) {
      return dataStore.setWrongDate(true);
    }

    dataStore.setWrongDate(false);

    return dataStore.setSelectedDate(e.target.value);
  };

  return (
    <form>
      <div
        className="mb-3"
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
      >
        <input
          onChange={handleOnChange}
          style={{ maxWidth: 200, fontSize: 15, textAlign: 'center' }}
          type="email"
          className="form-control"
          id="marsDateInput"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          {dataStore.wrongDate ? `you must enter an integer from 0 to ${dataStore.selectedRover?.max_sol}` : ''}
        </div>
      </div>
    </form>
  );
};

export default CustomInput;
