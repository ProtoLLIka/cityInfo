/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { InView } from 'react-intersection-observer';
import {
  any, arrayOf, func, object,
} from 'prop-types';

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

const HousingBlock = ({ housing: { data }, setVisibles, visibles }) => {
  const housingData = data.reduce(
    (prev, { label, value }) => ({
      labels: [label, ...prev.labels],
      value: [value, ...prev.value],
    }),
    { labels: [], value: [] },
  );
  return (
    <InView
      onChange={(inView) => {
        if (inView) {
          setVisibles([...visibles, HOUSING_ANCHOR]);
        } else {
          setVisibles(visibles.filter((anchor) => anchor !== HOUSING_ANCHOR));
        }
      }}
    >
      <div className={styles.housingBlock} id={HOUSING_ANCHOR}>
        <h1 className={styles.blockTitle}>HOUSING</h1>
        <span className={styles.underTitleText}>(in dollars)</span>
        <Bar data={chartData(housingData)} {...chartOptions} />
      </div>
    </InView>
  );
};

HousingBlock.propTypes = {
  housing: object,
  setVisibles: func,
  visibles: arrayOf(any),
};

HousingBlock.defaultProps = {
  housing: {},
  setVisibles: () => {},
  visibles: [],
};

export default HousingBlock;
