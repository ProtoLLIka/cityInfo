/* eslint-disable react/forbid-prop-types */ /* eslint-disable no-unused-vars */

import React from 'react';
import { arrayOf, object } from 'prop-types';
import { Bar } from 'react-chartjs-2';

import styles from './style.css';

const HousingBlock = ({ housing }) => {
  const labels = housing.map(({ label }) => label).reverse();
  const data = housing.map(({ value }) => value).reverse();
  const dataForChart = {
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

  return (
    <div className={styles.housingBlock}>
      <h1 className={styles.blockTitle}>HOUSING</h1>
      <span className={styles.underTitleText}>(in dollars)</span>
      <Bar
        data={dataForChart}
        width={20}
        height={50}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false,
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  display: false,
                },
              },
            ],
          },
          tooltips: {
            backgroundColor: 'rgb(255, 255, 255)',
            titleFontColor: 'rgb(0, 0, 0)',
            bodyFontColor: 'rgb(0, 0, 0)',
            displayColors: true,
            borderColor: 'rgb(0, 0, 0)',
            cornerRadius: 3,
          },
        }}
      />
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
