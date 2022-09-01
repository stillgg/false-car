import { NextPage } from 'next';
import Image from 'next/image';

import { Layout } from '../../../components/ui/layout/layout';
import { useGetNewCarsQuery } from '../../../redux/api/apiSlice';

const carTypes = [
  {
    title: 'Convertables',
    img: 'iconConvertables.svg',
  },
  {
    title: 'Coupes',
    img: 'iconCoupes.svg',
  },
  {
    title: 'Electrics',
    img: 'iconElectrics.svg',
  },
  {
    title: 'Hatchbacks',
    img: 'iconHatchbacks.svg',
  },
  {
    title: 'Hybrids',
    img: 'iconHybrids.svg',
  },
  {
    title: 'Sedans',
    img: 'iconSedans.svg',
  },
  { title: 'Suv', img: 'iconSuv.svg' },
  {
    title: 'Trucks',
    img: 'iconTrucks.svg',
  },
  { title: 'Vans', img: 'iconVans.svg' },
  {
    title: 'Wagons',
    img: 'iconWagons.svg',
  },
];

const New: NextPage = (props) => {
  const { data } = useGetNewCarsQuery();

  return (
    <Layout>
      <h1>buy new car</h1>

      <div>
        Build Your Car. Then Build Your Deal.
        <ul>
          <li>Select your preferred make, model, trim, and options</li>
          <li>See actual cars that match your preferences</li>
          <li>
            Build your deal online: customize payments and value your trade-in
          </li>
        </ul>
      </div>

      <div className="row padding-bottom-4 padding-top-3">
        <div className="col-12 col-md-7 col-lg-6">
          <div className="h-100 d-flex flex-column">
            <div
              className="heading-3 _13kpvm margin-x-auto text-center hidden-md-up"
              data-qa="model-search-heading-mobile"
            >
              Browse new vehicles by brand or vehicle&nbsp;type.
            </div>
            <div className="hidden-sm-down padding-top-3 padding-bottom-0">
              <div className="tab-bar">
                <a
                  className="linkable tab tab-active border-bottom font-size-3"
                  href="#"
                  role="button"
                  aria-pressed="true"
                  data-qa="model-search-shop-new"
                  data-test="shopMakeModelShopNewTab"
                >
                  <span className="tab-text">Shop New</span>
                  <span className="tab-bottom-border"></span>
                </a>
                <a
                  className="linkable tab border-bottom font-size-3"
                  href="#"
                  role="button"
                  aria-pressed="false"
                  data-qa="model-search-shop-used"
                  data-test="shopMakeModelShopUsedTab"
                >
                  <span className="tab-text">Shop Used</span>
                  <span className="tab-bottom-border"></span>
                </a>
              </div>
            </div>
            <div className="padding-y-2">
              <div className="hidden-sm-down _spqvrt padding-y-3">
                <div className="switch-bar switch-bar-sm">
                  <a
                    className="linkable switch"
                    href="#"
                    role="button"
                    aria-pressed="false"
                    data-test="shopMakeModelBrandSwitch"
                  >
                    Brand
                  </a>
                  <a
                    className="linkable switch switch-active"
                    href="#"
                    role="button"
                    aria-pressed="true"
                    data-test="shopMakeModelBodySwitch"
                  >
                    Type
                  </a>
                </div>
              </div>
              <div className="hidden-md-up text-center _spqvrt padding-y-3">
                <div className="switch-bar">
                  <a
                    className="linkable switch"
                    href="#"
                    role="button"
                    aria-pressed="false"
                    data-test="shopMakeModelBrandSwitch"
                  >
                    Brand
                  </a>
                  <a
                    className="linkable switch switch-active"
                    href="#"
                    role="button"
                    aria-pressed="true"
                    data-test="shopMakeModelBodySwitch"
                  >
                    Type
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden-md-up padding-bottom-5 padding-x-4 text-center">
              Not sure where to start? We can help narrow your search.
              <a href="/model-search/interview/">Get Started</a>
            </div>
            <div className="row" data-test="shopMakeModelVehicleTypes">
              {carTypes.map((carType) => {
                return (
                  <div
                    key={carType.title}
                    className="text-center padding-y-2_5 d-md-flex col-6 col-md-4"
                  >
                    <button>
                      <div
                        className="d-flex flex-column"
                        data-test="shopMakeModelVehicleType"
                      >
                        <div
                          className="picture-container"
                          style={{
                            paddingBottom: 0,
                            width: '100px',
                            height: '50px',
                          }}
                        >
                          <Image
                            key={carType.title}
                            src={`/images/${carType.img}`}
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
      </div>
    </Layout>
  );
};

export default New;
