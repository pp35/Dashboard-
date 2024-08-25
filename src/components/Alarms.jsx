// components/Alarms.js
import React from 'react';

const alarms = [
  'Alarm on HALO-01: 501 - OVERTRAVEL ( SOFT 1 )',
  'Machine 1 idle for 15 minutes',
  'Alarm on NIMBUS-09: 500 - OVERTRAVEL ( SOFT 1 )',
  'Machine 1 idle for 15 minutes',
  'Alarm on HALO-01: 501 - OVERTRAVEL ( SOFT 1 )',
  'Alarm on NIMBUS-09: 500 - OVERTRAVEL ( SOFT 1 )',
];

const Alarms = () => {
  return (
    <div className="bg-gray-800 p-5 rounded-lg">
      <h2 className="text-xl mb-2">Alarms</h2>
      <div className="max-h-40 overflow-y-auto">
        {alarms.map((alarm, index) => (
          <div key={index} className="p-2 rounded-lg mb-2">
            {alarm}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alarms;
