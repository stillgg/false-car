import React from 'react';

import classes from './adviceList.module.scss';

export const AdviceList = () => {
  return (
    <div className={classes.container}>
      Build Your Car. Then Build Your Deal.
      <ul>
        <li>Select your preferred make, model, trim, and options</li>
        <li>See actual cars that match your preferences</li>
        <li>
          Build your deal online: customize payments and value your trade-in
        </li>
      </ul>
    </div>
  );
};
