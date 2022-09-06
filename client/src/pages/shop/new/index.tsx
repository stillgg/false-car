import { NextPage } from 'next';
import { useState } from 'react';
import { Layout } from '../../../components/ui/layout/layout';
import { AdviceList } from './adviceList/adviceList';
import { BrandCarsList } from './brandCarsList/brandCarsList';
import { TypeCarsList } from './typeCarsList/typeCarsList';

const New: NextPage = () => {
  const [mode, setMode] = useState<'brand' | 'type'>('brand');

  const onBrandHandler = () => setMode('brand');
  const onTypeHandler = () => setMode('type');

  return (
    <Layout>
      <h1>buy new car</h1>

      <div className="btn-group mb-2" role="group">
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnBrand"
          autoComplete="off"
          checked={mode === 'brand'}
          onChange={onBrandHandler}
        />
        <label className="btn btn-outline-primary" htmlFor="btnBrand">
          brand
        </label>

        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnType"
          autoComplete="off"
          checked={mode === 'type'}
          onChange={onTypeHandler}
        />
        <label className="btn btn-outline-primary" htmlFor="btnType">
          type
        </label>
      </div>

      <div className="row padding-bottom-4 padding-top-3">
        {mode === 'brand' ? <BrandCarsList /> : <TypeCarsList />}
        <AdviceList />
      </div>
    </Layout>
  );
};

export default New;
