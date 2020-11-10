/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { object } from 'prop-types';

import { HOUSING_ANCHOR } from 'consts/anchorsNames';

import styles from './style.css';

const chartData = ({ labels, value }) => ({
  labels,
  datasets: [
    {
      label: '',
      backgroundColor: '#00000095',
      borderWidth: 1,
      hoverBackgroundColor: '#000000',
      hoverBorderColor: '#000000',
      data: value,
    },
  ],
});

const chartOptions = {
  options: {
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
  },
  width: 20,
  height: 50,
};

const HousingBlock = ({ housing: { data } }) => {
  const housingData = data.reduce(
    (prev, { label, value }) => ({
      labels: [label, ...prev.labels],
      value: [value, ...prev.value],
    }),
    { labels: [], value: [] },
  );
  return (
    <div className={styles.container} id={HOUSING_ANCHOR}>
      <h1 className={styles.blockTitle}>HOUSING</h1>
      <span className={styles.underTitleText}>(in dollars)</span>
      <Bar data={chartData(housingData)} {...chartOptions} />
    </div>
  );
};

HousingBlock.propTypes = {
  housing: object,
};

HousingBlock.defaultProps = {
  housing: {},
};

export default HousingBlock;
