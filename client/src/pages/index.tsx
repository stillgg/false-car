import type { NextPage } from 'next';
import Link from 'next/link';
import { Layout } from '../components/ui/layout/layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <div>
        <h1>
          Find the Car You Want, Your Way Then, build your deal to fit your
          needs.
        </h1>

        <Link href="/shop/new">
          <button type="button" className="btn btn-primary">
            shop new
          </button>
        </Link>
        <br />
        <br />

        <Link href="shop/used">
          <button type="button" className="btn btn-primary">
            shop used
          </button>
        </Link>
        <br />
        <br />

        <Link href="sell-your-car">
          <button type="button" className="btn btn-dark">
            sell your car
          </button>
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
