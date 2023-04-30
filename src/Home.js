import { PricingTable, PricingSlot, PricingDetail } from 'react-pricing-table';

import { Plan, PlanProps } from 'pricing-table-react';

import { Row, Col } from 'antd';

import 'antd/dist/antd.css';

import styled from 'styled-components';
import Pricing from './components/Pricing';

const plans: PlanProps[] = [
  {
    className: 'pack-1',
    price: '9',
    title: 'Lite Plan',
    advantages: [
      {
        text: 'Clean and ease to use app',
      },
      {
        text: 'Simple widget generator',
      },
    ],
    duration: 'month',
    highlightText: 'Popular',
    guarantee: '14 days money back guarantee',
    titleDescription: 'Individual and small teams',
  },

  {
    className: 'pack-2',
    price: '9',
    title: 'Lite Plan',
    advantages: [
      {
        text: 'Clean and ease to use app',
      },
      {
        text: 'Simple widget generator',
      },
      {
        text: 'Simple widget generator',
      },
      {
        text: 'Simple widget generator',
      },
      {
        text: 'Simple widget generator',
      },
      {
        text: 'Simple widget generator',
      },
      {
        text: 'Simple widget generator',
      },
      {
        text: 'Simple widget generator',
      },
    ],
    duration: 'month',
    guarantee: '14 days money back guarantee',
    titleDescription: 'Individual and small teams',
  },
];

const Home = () => {
  const handleSubmit = (v) => {
    console.log(v);
  };

  return (
    <div>
      <Row gutter={[20, 20]}>
        <Col xs={24} md={8} lg={6}>
          <Pricing
            data={[
              { text: '3 new project / month', value: true },
              { text: 'Basic interaction', value: false },
              { text: 'Assets library', value: false },
            ]}
            price={0}
            duration="y"
            currency="$"
            buttonContent="Get Started"
            subTitle="Great for starters"
            priceText="Discover how to create your first projects."
            headerText="free"
          />
        </Col>

        <Col xs={24} md={8} lg={6}>
          <Pricing
            data={[
              { text: '3 new project / month', value: true },
              { text: 'Basic interaction', value: true },
              { text: 'Assets library', value: false },
            ]}
            price={7}
            duration="m"
            background="linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)"
            shadow="#96e6a1"
            currency="₹"
            buttonContent="Get Started"
            subTitle="For Planned Projects"
            priceText="Bring your designs to the next level and export them."
            headerText="free"
          />
        </Col>

        <Col xs={24} md={8} lg={6}>
          <Pricing
            data={[
              { text: '3 new project / month', value: true },
              { text: 'Basic interaction', value: true },
              { text: 'Assets library', value: true },
            ]}
            price={12}
            duration="y"
            background="linear-gradient(to left, #ff0844 0%, #ffb199 100%);"
            shadow="#ffb199"
            currency="€"
            buttonContent="Get Started"
            subTitle="For Prodessional Use"
            priceText="Enjoy limitless use with interactive export options."
            headerText="free"
          />
        </Col>

        <Col xs={24} md={8} lg={6}>
          <Pricing
            data={[
              { text: '3 new project / month', value: true },
              { text: 'Basic interaction', value: false },
              { text: 'Assets library', value: false },
            ]}
            price={0}
            duration="y"
            currency="$"
            buttonContent="Get Started"
            subTitle="Great for starters"
            priceText="Discover how to create your first projects."
            headerText="free"
          />
        </Col>
      </Row>

      <Row style={{ marginTop: 30 }}>
        <Col span={24}>
          <PricingTable highlightColor="#1976D2">
            <PricingSlot
              onClick={handleSubmit}
              buttonText="TRY IT FREE"
              title="FREE"
              priceText="$0/month">
              <PricingDetail>
                {' '}
                <b>15</b> projects
              </PricingDetail>
              <PricingDetail>
                {' '}
                <b>5 GB</b> storage
              </PricingDetail>
              <PricingDetail>
                {' '}
                <b>5</b> users
              </PricingDetail>
              <PricingDetail strikethrough>
                {' '}
                <b>Time tracking</b>
              </PricingDetail>
            </PricingSlot>
            <PricingSlot
              highlighted
              onClick={handleSubmit}
              buttonText="SIGN UP"
              title="BASIC"
              priceText="$24/month">
              <PricingDetail>
                {' '}
                <b>35</b> projects
              </PricingDetail>
              <PricingDetail>
                {' '}
                <b>15 GB</b> storage
              </PricingDetail>
              <PricingDetail>
                {' '}
                <b>Unlimited</b> users
              </PricingDetail>
              <PricingDetail>
                {' '}
                <b>Time tracking</b>
              </PricingDetail>
            </PricingSlot>
            <PricingSlot
              onClick={handleSubmit}
              buttonText="SIGN UP"
              title="PROFESSIONAL"
              priceText="$99/month">
              <PricingDetail>
                {' '}
                <b>100</b> projects
              </PricingDetail>
              <PricingDetail>
                {' '}
                <b>30 GB</b> storage
              </PricingDetail>
              <PricingDetail>
                {' '}
                <b>Unlimited</b> users
              </PricingDetail>
              <PricingDetail>
                {' '}
                <b>Time tracking</b>
              </PricingDetail>
            </PricingSlot>
            <PricingSlot
              onClick={handleSubmit}
              buttonText="SIGN UP"
              title="ENTERPRISE"
              priceText="$200/month">
              <PricingDetail>
                {' '}
                <b>Unlimited</b> projects
              </PricingDetail>
              <PricingDetail>
                {' '}
                <b>75 GB</b> storage
              </PricingDetail>
              <PricingDetail>
                {' '}
                <b>Unlimited</b> users
              </PricingDetail>
              <PricingDetail>
                {' '}
                <b>Time tracking</b>
              </PricingDetail>
            </PricingSlot>
          </PricingTable>
        </Col>
      </Row>

      <div style={{ marginTop: 30 }}>
        <Plan currency="$" Plans={plans} />
      </div>
    </div>
  );
};

export default Home;
