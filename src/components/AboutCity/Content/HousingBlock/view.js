/* eslint-disable react/forbid-prop-types */ /* eslint-disable no-unused-vars */

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { arrayOf, object } from 'prop-types';

import styles from './style.css';

const chartData = {
  labels,
  datasets: [
    {
      label: '',
      backgroundColor: '#00000095',
      borderWidth: 1,
      hoverBackgroundColor: '#000000',
      hoverBorderColor: '#000000',
      data,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  legend: { display: false },
  scales: { yAxes: [{ ticks: { display: false } }] },
  tooltips: {
    backgroundColor: '#ffffff',
    titleFontColor: '#000000',
    bodyFontColor: '#000000',
    displayColors: true,
    borderColor: '#000000',
    cornerRadius: 3,
  },
};
const HousingBlock = ({ housing }) => {
  const labels = housing.map(({ label }) => label).reverse();
  const data = housing.map(({ value }) => value).reverse();

  const r = housing.reduce(
    (prev, { label, value }) => ({
      labels: [label, ...prev.labels],
      value: [value, ...prev.value],
    }),
    { labels: [], value: [] },
  );

  return (
    <div className={styles.housingBlock}>
      <h1 className={styles.blockTitle}>HOUSING</h1>
      <span className={styles.underTitleText}>(in dollars)</span>
      <Bar data={chartData} options={chartOptions} width={20} height={50} />
    </div>
  );
};

HousingBlock.propTypes = {
  housing: arrayOf(object),
};

HousingBlock.defaultProps = {
  housing: [],
};

export default HousingBlock;
