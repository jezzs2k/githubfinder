import React, { useContext } from 'react';

import AlertContext from '../../context/Alert/alertContext';

export default function Alert() {
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type} mt-3`}>
        <i className='fa fa-info-circle mr-1'></i>
        {alert.msg}
      </div>
    )
  );
}
