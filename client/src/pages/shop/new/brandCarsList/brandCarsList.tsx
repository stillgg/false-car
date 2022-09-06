import React from 'react';
import Image from 'next/image';

import classes from './brandCarsList.module.scss';

import { useGetBrandsQuery } from '../../../../redux/api/apiSlice';
import { carLogos } from '../../../../constants/cars';

export const BrandCarsList = () => {
  const { data } = useGetBrandsQuery();

  return (
    <div className={classes.container}>
      {data
        ? data.map(({ id, brand }) => {
            const logo = carLogos.find((logo) => logo.brand === brand);
            return (
              <React.Fragment key={id}>
                {logo ? (
                  <button className={classes.btn}>
                    <Image
                      src={`/images/vehicles/logo/${logo.img}`}
                      alt={brand}
                      width={35}
                      height={35}
                    />
                    <span className={classes.title}>{logo.title}</span>
                  </button>
                ) : null}
              </React.Fragment>
            );
          })
        : null}
    </div>
  );
};
