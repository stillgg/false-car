import Image from 'next/image';
import { carTypes } from '../../../../constants/cars';

export const TypeCarsList = () => {
  return (
    <div className="col-12 col-md-7 col-lg-6">
      <div className="h-100 d-flex flex-column">
        <div className="row">
          {carTypes.map((carType) => {
            return (
              <div
                key={carType.title}
                className="text-center padding-y-2_5 d-md-flex col-6 col-md-4"
              >
                <button>
                  <div className="d-flex flex-column">
                    <div className="picture-container">
                      <Image
                        key={carType.title}
                        src={`/images/vehicles/type/${carType.img}`}
                        alt={carType.title}
                        width={100}
                        height={50}
                      />
                    </div>
                    <div className="padding-y-1">{carType.title}</div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
