import React from 'react';
import NavigationBar from '../general/navigationBar';
import './styles/mainPage.css';
import Map from './map/map';
import { getLabels } from '../allCities/allCities';
import { connect } from 'react-redux';
import { ALL } from './map/continentTypes';

const MainPage = ({ state }) => {
  const cityList = state.cities;
  const filterType = state.filterType === ALL ? '' : state.filterType;
  return (
    <div style={{ backgroundColor: '#9bb3ba' }}>
      <NavigationBar />
      <h1 className="greetingBlock">Choose continent:</h1>
      <Map />
      <div
        className="citiesList"
        style={{
          position: 'absolute',
          top: '950px',
          left: '520px',
          backgroundColor: '#ffffff00',
        }}
      >
        {filterType !== ALL ? getLabels([...cityList], filterType) : null}
      </div>
      {/* <img src={pic} className="map" alt="map"></img> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state.cityListReducer,
  };
};

export default connect(mapStateToProps)(MainPage);

const a = {
  _links: {
    curies: [
      {
        href: 'https://developers.teleport.org/api/resources/Location/#!/relations/{rel}/',
        name: 'location',
        templated: true,
      },
      {
        href: 'https://developers.teleport.org/api/resources/City/#!/relations/{rel}/',
        name: 'city',
        templated: true,
      },
      {
        href: 'https://developers.teleport.org/api/resources/UrbanArea/#!/relations/{rel}/',
        name: 'ua',
        templated: true,
      },
      {
        href: 'https://developers.teleport.org/api/resources/Country/#!/relations/{rel}/',
        name: 'country',
        templated: true,
      },
      {
        href: 'https://developers.teleport.org/api/resources/Admin1Division/#!/relations/{rel}/',
        name: 'a1',
        templated: true,
      },
      {
        href: 'https://developers.teleport.org/api/resources/Timezone/#!/relations/{rel}/',
        name: 'tz',
        templated: true,
      },
    ],
    self: {
      href: 'https://api.teleport.org/api/urban_areas/slug:moscow/details/',
    },
  },
  categories: [
    {
      data: [
        {
          float_value: 72.2,
          id: 'BUSINESS-FREEDOM',
          label: 'Business freedom',
          type: 'float',
        },
        {
          float_value: 0.6055,
          id: 'BUSINESS-FREEDOM-TELESCORE',
          label: 'Business freedom [Teleport score]',
          type: 'float',
        },
        {
          float_value: 27,
          id: 'CORRUPTION-FREEDOM',
          label: 'Freedom from corruption',
          type: 'float',
        },
        {
          float_value: 0.1248,
          id: 'CORRUPTION-FREEDOM-TELESCORE',
          label: 'Freedom from corruption [Teleport score]',
          type: 'float',
        },
        {
          float_value: 57.6,
          id: 'LABOR-RESTRICTIONS',
          label: 'Lack of labor restrictions',
          type: 'float',
        },
        {
          float_value: 0.4077,
          id: 'LABOR-RESTRICTIONS-TELESCORE',
          label: 'Lack of labor restrictions [Teleport score]',
          type: 'float',
        },
        {
          float_value: 11,
          id: 'TIME-TO-OPEN-BUSINESS',
          label: 'Time to open a business',
          type: 'float',
        },
        {
          float_value: 0.8857,
          id: 'TIME-TO-OPEN-BUSINESS-TELESCORE',
          label: 'Time to open a business [Teleport score]',
          type: 'float',
        },
      ],
      id: 'BUSINESS-FREEDOM',
      label: 'Business Freedom',
    },
    {
      data: [
        {
          float_value: 22.2869,
          id: 'POPULATION-SIZE',
          label: 'Urban area population (millions)',
          type: 'float',
        },
        {
          float_value: 7092.19140625,
          id: 'POPULATION-UA-CENTER-DENSITY',
          label: 'Population density in people/sq km in UA center.',
          type: 'float',
        },
        {
          float_value: 1382.9674227801427,
          id: 'POPULATION-UA-DENSITY',
          label: 'Population density in people/sq km over full UA as defined by bounding box.',
          type: 'float',
        },
      ],
      id: 'CITY-SIZE',
      label: 'City Size',
    },
    {
      data: [
        {
          float_value: 13,
          id: 'WEATHER-AV-DAY-LENGTH',
          label: 'Average day length (hours)',
          type: 'float',
        },
        {
          id: 'WEATHER-AVERAGE-HIGH',
          label: 'Average high temperature (Celsius)',
          string_value: '8',
          type: 'string',
        },
        {
          id: 'WEATHER-AVERAGE-LOW',
          label: 'Average low temperature (Celsius)',
          string_value: '---',
          type: 'string',
        },
        {
          float_value: '10.7',
          id: 'WEATHER-SUNSHINE-AMOUNT',
          label: 'Average daily solar radiation (Mj/m²)',
          type: 'float',
        },
        {
          id: 'WEATHER-TYPE',
          label: 'Weather type',
          string_value: 'Warm Summer Continental Climate',
          type: 'string',
        },
      ],
      id: 'CLIMATE',
      label: 'Climate',
    },
    {
      data: [
        {
          float_value: 0.8099,
          id: 'CONSUMER-PRICE-INDEX-TELESCORE',
          label: 'Inflation [Teleport score]',
          type: 'float',
        },
        {
          currency_dollar_value: 1.5,
          id: 'COST-APPLES',
          label: 'A kilogram of Apples',
          type: 'currency_dollar',
        },
        {
          currency_dollar_value: 0.29,
          id: 'COST-BREAD',
          label: 'Bread',
          type: 'currency_dollar',
        },
        {
          currency_dollar_value: 3.4,
          id: 'COST-CAPPUCCINO',
          label: 'A Cappuccino',
          type: 'currency_dollar',
        },
        {
          currency_dollar_value: 6.4,
          id: 'COST-CINEMA',
          label: 'Movie ticket',
          type: 'currency_dollar',
        },
        {
          currency_dollar_value: 68,
          id: 'COST-FITNESS-CLUB',
          label: 'Monthly fitness club membership',
          type: 'currency_dollar',
        },
        {
          currency_dollar_value: 1.1,
          id: 'COST-IMPORT-BEER',
          label: 'A beer',
          type: 'currency_dollar',
        },
        {
          currency_dollar_value: 36,
          id: 'COST-PUBLIC-TRANSPORT',
          label: 'Monthly public transport',
          type: 'currency_dollar',
        },
        {
          currency_dollar_value: 9.2,
          id: 'COST-RESTAURANT-MEAL',
          label: 'Lunch',
          type: 'currency_dollar',
        },
        {
          currency_dollar_value: 3,
          id: 'COST-TAXI',
          label: '5km taxi ride',
          type: 'currency_dollar',
        },
        {
          currency_dollar_value: 49.97,
          id: 'RESTAURANT-PRICE-INDEX',
          label: 'Price of a meal at a restaurant',
          type: 'currency_dollar',
        },
      ],
      id: 'COST-OF-LIVING',
      label: 'Cost of Living',
    },
    {
      data: [
        {
          float_value: 1,
          id: 'CULTURE-ART-GALLERIES-TELESCORE',
          label: 'Art galleries [Teleport score]',
          type: 'float',
        },
        {
          id: 'CULTURE-ART-GALLERIES-VENUE-COUNT',
          int_value: 253,
          label: 'Art galleries',
          type: 'int',
        },
        {
          float_value: 1,
          id: 'CULTURE-CINEMA-TELESCORE',
          label: 'Cinemas [Teleport score]',
          type: 'float',
        },
        {
          id: 'CULTURE-CINEMAS-VENUE-COUNT',
          int_value: 246,
          label: 'Cinemas',
          type: 'int',
        },
        {
          float_value: 0.9765,
          id: 'CULTURE-COMEDY-CLUBS-TELESCORE',
          label: 'Comedy clubs [Teleport score]',
          type: 'float',
        },
        {
          id: 'CULTURE-COMEDY-CLUBS-VENUE-COUNT',
          int_value: 208,
          label: 'Comedy clubs',
          type: 'int',
        },
        {
          float_value: 0.8813,
          id: 'CULTURE-CONCERTS-TELESCORE',
          label: 'Concerts [Teleport score]',
          type: 'float',
        },
        {
          id: 'CULTURE-CONCERTS-VENUE-COUNT',
          int_value: 289,
          label: 'Concert venues',
          type: 'int',
        },
        {
          float_value: 0.7751,
          id: 'CULTURE-HISTORICAL-SITES-TELESCORE',
          label: 'Historical sites [Teleport score]',
          type: 'float',
        },
        {
          id: 'CULTURE-HISTORICAL-SITES-VENUE-COUNT',
          int_value: 375,
          label: 'Historical sites',
          type: 'int',
        },
        {
          float_value: 1,
          id: 'CULTURE-MUSEUMS-TELESCORE',
          label: 'Museums [Teleport score]',
          type: 'float',
        },
        {
          id: 'CULTURE-MUSEUMS-VENUE-COUNT',
          int_value: 205,
          label: 'Museums',
          type: 'int',
        },
        {
          float_value: 1,
          id: 'CULTURE-PERFORMING-ARTS-TELESCORE',
          label: 'Performing arts [Teleport score]',
          type: 'float',
        },
        {
          id: 'CULTURE-PERFORMING-ARTS-VENUE-COUNT',
          int_value: 275,
          label: 'Performing art venues',
          type: 'int',
        },
        {
          float_value: 0.9723,
          id: 'CULTURE-SPORTS-TELESCORE',
          label: 'Sports [Teleport score]',
          type: 'float',
        },
        {
          id: 'CULTURE-SPORTS-VENUE-COUNT',
          int_value: 309,
          label: 'Sport venues',
          type: 'int',
        },
        {
          float_value: 0.9827,
          id: 'CULTURE-ZOOS-TELESCORE',
          label: 'Zoos [Teleport score]',
          type: 'float',
        },
        {
          id: 'CULTURE-ZOOS-VENUE-COUNT',
          int_value: 151,
          label: 'Zoos',
          type: 'int',
        },
      ],
      id: 'CULTURE',
      label: 'Leisure & Culture',
    },
    {
      data: [
        {
          id: 'CURRENCY-URBAN-AREA',
          label: 'Currency for urban area',
          string_value: 'RUB',
          type: 'string',
        },
        {
          float_value: 59.9736812625,
          id: 'CURRENCY-URBAN-AREA-EXCHANGE-RATE',
          label: 'Currency exchange rate per US dollar for urban area',
          type: 'float',
        },
        {
          id: 'GDP-GROWTH-RATE',
          label: 'GDP growth rate',
          percent_value: 0.00622,
          type: 'percent',
        },
        {
          float_value: 0.2233,
          id: 'GDP-GROWTH-RATE-TELESCORE',
          label: 'GDP growth rate [Teleport score]',
          type: 'float',
        },
        {
          currency_dollar_value: 24805.494,
          id: 'GDP-PER-CAPITA',
          label: 'GDP per capita',
          type: 'currency_dollar',
        },
        {
          float_value: 0.4063,
          id: 'GDP-PER-CAPITA-TELESCORE',
          label: 'GDP per capita [Teleport score]',
          type: 'float',
        },
      ],
      id: 'ECONOMY',
      label: 'Economy',
    },
    {
      data: [
        {
          id: 'PISA-DETAIL-HAPPINESS',
          label: 'Percent of happy students',
          percent_value: 0.7109382211742059,
          type: 'percent',
        },
        {
          id: 'PISA-DETAIL-MATH-HIGH-PERFORMERS',
          label: 'Percent of top performers in PISA math test',
          percent_value: 0.07790212962917104,
          type: 'percent',
        },
        {
          id: 'PISA-DETAIL-MATH-LOW-PERFORMERS',
          label: 'Percent of low performers in PISA math test',
          percent_value: 0.23952244193004535,
          type: 'percent',
        },
        {
          float_value: 477.9734742599077,
          id: 'PISA-DETAIL-MATH-MEAN-SCORES',
          label: 'Country mean scores in PISA math test',
          type: 'float',
        },
        {
          id: 'PISA-DETAIL-READING-HIGH-PERFORMERS',
          label: 'Percent of top performers in PISA reading test',
          percent_value: 0.04629700018228556,
          type: 'percent',
        },
        {
          id: 'PISA-DETAIL-READING-LOW-PERFORMERS',
          label: 'Percent of low performers in PISA reading test',
          percent_value: 0.22299295713874825,
          type: 'percent',
        },
        {
          float_value: 475.149374066769,
          id: 'PISA-DETAIL-READING-MEAN-SCORES',
          label: 'Country mean scores in PISA reading test',
          type: 'float',
        },
        {
          id: 'PISA-DETAIL-SCIENCE-HIGH-PERFORMERS',
          label: 'Percent of top performers in PISA science test',
          percent_value: 0.04251953001131919,
          type: 'percent',
        },
        {
          id: 'PISA-DETAIL-SCIENCE-LOW-PERFORMERS',
          label: 'Percent of low performers in PISA science test',
          percent_value: 0.18754022304277995,
          type: 'percent',
        },
        {
          float_value: 486.2954899651958,
          id: 'PISA-DETAIL-SCIENCE-MEAN-SCORES',
          label: 'Country mean scores in PISA science test',
          type: 'float',
        },
        {
          id: 'PISA-MATHS-RANKING',
          int_value: 19,
          label: 'PISA math ranking (high school)',
          type: 'int',
        },
        {
          id: 'PISA-RANKING',
          int_value: 21,
          label: 'PISA ranking',
          type: 'int',
        },
        {
          float_value: 0.754,
          id: 'PISA-RANKING-TELESCORE',
          label: 'PISA ranking (high school) [Teleport score]',
          type: 'float',
        },
        {
          id: 'PISA-READING-RANKING',
          int_value: 18,
          label: 'PISA reading (high school)',
          type: 'int',
        },
        {
          id: 'PISA-SCIENCE-RANKING',
          int_value: 23,
          label: 'PISA science (high school)',
          type: 'int',
        },
        {
          float_value: 0.1605,
          id: 'QUALITY-OF-UNIVERSITIES-TELESCORE',
          label: 'University quality [Teleport score]',
          type: 'float',
        },
        {
          id: 'UNIVERSITIES-BEST-RANKED-NAME',
          label: 'Best university in ranking',
          string_value: 'Lomonosov Moscow State University',
          type: 'string',
        },
        {
          id: 'UNIVERSITIES-BEST-RANKED-RANK',
          int_value: 188,
          label: 'Best university ranking',
          type: 'int',
        },
      ],
      id: 'EDUCATION',
      label: 'Education',
    },
    {
      data: [
        {
          float_value: 0.5552,
          id: 'HEALTHCARE-COST-TELESCORE',
          label: 'Healthcare expenditure [Teleport score]',
          type: 'float',
        },
        {
          float_value: 70.465,
          id: 'HEALTHCARE-LIFE-EXPECTANCY',
          label: 'Life expectancy (years)',
          type: 'float',
        },
        {
          float_value: 0.2289,
          id: 'HEALTHCARE-LIFE-EXPECTANCY-TELESCORE',
          label: 'Life expectancy [Teleport score]',
          type: 'float',
        },
        {
          float_value: 0.5545,
          id: 'HEALTHCARE-QUALITY-TELESCORE',
          label: 'Healthcare quality [Teleport score]',
          type: 'float',
        },
      ],
      id: 'HEALTHCARE',
      label: 'Healthcare',
    },
    {
      data: [
        {
          currency_dollar_value: 1500,
          id: 'APARTMENT-RENT-LARGE',
          label: 'Large apartment',
          type: 'currency_dollar',
        },
        {
          currency_dollar_value: 1200,
          id: 'APARTMENT-RENT-MEDIUM',
          label: 'Medium apartment',
          type: 'currency_dollar',
        },
        {
          currency_dollar_value: 840,
          id: 'APARTMENT-RENT-SMALL',
          label: 'Small apartment',
          type: 'currency_dollar',
        },
        {
          float_value: 0.6804,
          id: 'RENT-INDEX-TELESCORE',
          label: 'Rent index [Teleport score]',
          type: 'float',
        },
      ],
      id: 'HOUSING',
      label: 'Housing',
    },
    {
      data: [
        {
          id: 'ELDERLY-PEOPLE',
          label: 'Percent of elderly people (65+ years) in country',
          percent_value: 0.001392,
          type: 'percent',
        },
        {
          float_value: 70.8,
          id: 'LIFE-EXPECTANCY',
          label: 'Life expectancy at birth in country',
          type: 'float',
        },
        {
          float_value: 39.3,
          id: 'MEDIAN-AGE',
          label: 'Median age in country',
          type: 'float',
        },
        {
          id: 'UNEMPLOYMENT-RATE',
          label: 'Unemployment rate in country',
          percent_value: 0.0008199999999999999,
          type: 'percent',
        },
      ],
      id: 'INTERNAL',
      label: 'Internal application use',
    },
    {
      data: [
        {
          id: 'EMPLOYER-SOCIAL-TAXES-SOC-SEC',
          label: 'Employer social security taxes per employee',
          percent_value: 0.3,
          type: 'percent',
        },
        {
          id: 'STARTUP-JOBS-AVAILABLE',
          int_value: 7,
          label: 'Startup jobs available',
          type: 'int',
        },
        {
          float_value: 0.2576,
          id: 'STARTUP-JOBS-AVAILABLE-TELESCORE',
          label: 'Startup job availability [Teleport score]',
          type: 'float',
        },
        {
          float_value: 0.3081,
          id: 'STARTUP-SALARIES',
          label: 'Startup salary [Teleport score]',
          type: 'float',
        },
        {
          currency_dollar_value: 28164,
          id: 'STARTUP-SALARIES-DETAIL',
          label: 'Startup salary',
          type: 'currency_dollar',
        },
      ],
      id: 'JOB-MARKET',
      label: 'Job Market',
    },
    {
      data: [
        {
          id: 'ENGLISH-SKILLS-DETAIL',
          int_value: 52.32,
          label: 'English skills',
          type: 'int',
        },
        {
          float_value: 0.5232,
          id: 'ENGLISH-SKILLS-TELESCORE',
          label: 'English skills [Teleport score]',
          type: 'float',
        },
        {
          id: 'SPOKEN-LANGUAGES',
          label: 'Spoken languages',
          string_value: 'Russian',
          type: 'string',
        },
      ],
      id: 'LANGUAGE',
      label: 'Language',
    },
    {
      data: [
        {
          id: 'LGBT-DETAIL-ADOPTION',
          label: 'LGBT adoption rights',
          string_value: '✖ Single only',
          type: 'string',
        },
        {
          id: 'LGBT-DETAIL-AGE-OF-CONSENT',
          label: 'LGBT age of consent',
          string_value: '✔ Equal',
          type: 'string',
        },
        {
          id: 'LGBT-DETAIL-CHANGING-GENDER',
          label: 'LGBT gender changing rights',
          string_value: '✔ Legal, but requires surgery',
          type: 'string',
        },
        {
          id: 'LGBT-DETAIL-CONVERSION-THERAPY',
          label: 'LGBT conversion therapy regulations',
          string_value: '✖ Not banned',
          type: 'string',
        },
        {
          id: 'LGBT-DETAIL-DISCRIMINATION',
          label: 'LGBT discrimination legality',
          string_value: '✖ No protections',
          type: 'string',
        },
        {
          id: 'LGBT-DETAIL-DONATING-BLOOD',
          label: 'LGBT blood donation regulations',
          string_value: '✔ Legal',
          type: 'string',
        },
        {
          id: 'LGBT-DETAIL-EMPLOYMENT-DISCRIMINATION',
          label: 'LGBT employment discrimination legality',
          string_value: '✖ No protections',
          type: 'string',
        },
        {
          id: 'LGBT-DETAIL-HOMOSEXUALITY',
          label: 'LGBT homosexuality rights',
          string_value: '✔ Legal',
          type: 'string',
        },
        {
          id: 'LGBT-DETAIL-HOUSING-DISCRIMINATION',
          label: 'LGBT housing discrimination legality',
          string_value: '✖ No protections',
          type: 'string',
        },
        {
          id: 'LGBT-DETAIL-MARRIAGE',
          label: 'LGBT marriage rights',
          string_value: '✖ Not legal',
          type: 'string',
        },
        {
          id: 'LGBT-DETAIL-OPINION-PERCENT-IN-FAVOR',
          label: 'Homosexuality acceptance (percent of the surveyed population in favor)',
          percent_value: 0.16,
          type: 'percent',
        },
        {
          float_value: 35.09,
          id: 'LGBT-INDEX',
          label: 'LGBT Equality Index',
          type: 'float',
        },
        {
          float_value: 0.334,
          id: 'LGBT-INDEX-TELESCORE',
          label: 'LGBT Equality Index [Teleport score]',
          type: 'float',
        },
        {
          float_value: 0.361,
          id: 'TOLERANCE-TOWARDS-MINORITIES-TELESCORE',
          label: 'Tolerance towards minorities [Teleport score]',
          type: 'float',
        },
      ],
      id: 'MINORITIES',
      label: 'Tolerance',
    },
    {
      data: [
        {
          float_value: 26.56,
          id: 'NETWORK-DOWNLOAD',
          label: 'Download speed (Mbps)',
          type: 'float',
        },
        {
          float_value: 0.4368,
          id: 'NETWORK-DOWNLOAD-TELESCORE',
          label: 'Internet access (download) [Teleport score]',
          type: 'float',
        },
        {
          float_value: 33.035,
          id: 'NETWORK-UPLOAD',
          label: 'Upload speed (Mbps)',
          type: 'float',
        },
        {
          float_value: 0.8774,
          id: 'NETWORK-UPLOAD-TELESCORE',
          label: 'Internet access (upload) [Teleport score]',
          type: 'float',
        },
      ],
      id: 'NETWORK',
      label: 'Internet Access',
    },
    {
      data: [
        {
          float_value: 155,
          id: 'ELEVATION',
          label: 'Urban area elevation (meters)',
          type: 'float',
        },
        {
          float_value: 175,
          id: 'ELEVATION-PEAKS',
          label: 'Median peak in meters',
          type: 'float',
        },
        {
          float_value: 0.1401,
          id: 'ELEVATION-PEAKS-TELESCORE',
          label: 'Elevation (hills or mountains) [Teleport score]',
          type: 'float',
        },
        {
          float_value: 0.8779,
          id: 'SEASIDE-ACCESS-TELESCORE',
          label: 'Water access [Teleport score]',
          type: 'float',
        },
        {
          float_value: 1,
          id: 'SEASIDE-WATERBODY',
          label: 'Seaside waterbody',
          type: 'float',
        },
      ],
      id: 'OUTDOORS',
      label: 'Outdoors',
    },
    {
      data: [
        {
          float_value: 0.3756,
          id: 'AIR-POLLUTION-TELESCORE',
          label: 'Air quality [Teleport score]',
          type: 'float',
        },
        {
          float_value: 0.636,
          id: 'CLEANLINESS-TELESCORE',
          label: 'Cleanliness [Teleport score]',
          type: 'float',
        },
        {
          float_value: 0.431,
          id: 'DRINKING-WATER-QUALITY-TELESCORE',
          label: 'Drinking water quality [Teleport score]',
          type: 'float',
        },
        {
          float_value: 0.6673,
          id: 'URBAN-GREENERY-TELESCORE',
          label: 'Urban greenery [Teleport score]',
          type: 'float',
        },
      ],
      id: 'POLLUTION',
      label: 'Environmental Quality',
    },
    {
      data: [
        {
          float_value: 0.5415,
          id: 'CRIME-RATE-TELESCORE',
          label: 'Crime rate [Teleport score]',
          type: 'float',
        },
        {
          id: 'GUN-DEATH-RATE',
          int_value: 25,
          label: 'Gun-related deaths per 100,000 residents per year',
          type: 'int',
        },
        {
          float_value: 0.3186,
          id: 'GUN-DEATH-SCORE-TELESCORE',
          label: 'Lack of gun related deaths [Teleport score]',
          type: 'float',
        },
        {
          id: 'GUN-OWNERSHIP',
          int_value: 8.9,
          label: 'Guns per 100 residents',
          type: 'int',
        },
        {
          float_value: 0.9541,
          id: 'GUN-OWNERSHIP-SCORE-TELESCORE',
          label: 'Lack of guns [Teleport score]',
          type: 'float',
        },
        {
          float_value: 0.6364,
          id: 'GUN-SCORE-TELESCORE',
          label: 'Lack of guns and gun-related deaths [Teleport score]',
          type: 'float',
        },
      ],
      id: 'SAFETY',
      label: 'Safety',
    },
    {
      data: [
        {
          float_value: 0.4528,
          id: 'COWORKING-SPACES-TELESCORE',
          label: 'Coworking spaces [Teleport score]',
          type: 'float',
        },
        {
          id: 'EVENTS-COUNT',
          int_value: 11,
          label: 'Startup events',
          type: 'int',
        },
        {
          id: 'EVENTS-LAST-12-MONTHS',
          int_value: 104,
          label: 'Number of startup events in the last 12 months',
          type: 'int',
        },
        {
          float_value: 0.3477,
          id: 'EVENTS-TELESCORE',
          label: 'Startup events [Teleport score]',
          type: 'float',
        },
        {
          id: 'FUNDERBEAM-TOTAL-STARTUPS',
          int_value: 543,
          label: 'Total number of startups',
          type: 'int',
        },
        {
          id: 'MEETUPS-DETAIL-TOTAL-EVENTS',
          int_value: 20,
          label: 'Number of upcoming meetup events',
          type: 'int',
        },
        {
          id: 'MEETUPS-GROUPS',
          int_value: 172,
          label: 'Meetups groups',
          type: 'int',
        },
        {
          id: 'MEETUPS-MEMBERS',
          int_value: 67345,
          label: 'Meetups members',
          type: 'int',
        },
        {
          float_value: 0.5941,
          id: 'MEETUPS-TELESCORE',
          label: 'Meetups [Teleport score]',
          type: 'float',
        },
        {
          id: 'STARTUP-CLIMATE-INVESTORS',
          int_value: 105,
          label: 'Number of investors',
          type: 'int',
        },
        {
          id: 'STARTUP-CLIMATE-NEW-STARTUPS',
          int_value: 1,
          label: 'Average monthly increase in number of startups',
          type: 'int',
        },
        {
          float_value: 0.1995,
          id: 'STARTUP-CLIMATE-NEW-STARTUPS-TELESCORE',
          label: 'Average monthly increase in number of startups [Teleport score]',
          type: 'float',
        },
        {
          float_value: 0.429,
          id: 'STARTUP-CLIMATE-SCENE-TELESCORE',
          label: 'Startup climate scene [Teleport score]',
          type: 'float',
        },
        {
          float_value: 0.8111,
          id: 'STARTUP-CLIMATE-STARTUPS-TELESCORE',
          label: 'Startups [Teleport score]',
          type: 'float',
        },
        {
          id: 'WORKFROM-COWORKING-SPACES-COUNT',
          int_value: 22,
          label: 'Coworking spaces on WorkFrom.co',
          type: 'int',
        },
      ],
      id: 'STARTUPS',
      label: 'Startups',
    },
    {
      data: [
        {
          id: 'COMPANY-PROFIT-TAX-RATE',
          label: 'Profit tax (%% of profit)',
          percent_value: 0.475,
          type: 'percent',
        },
        {
          float_value: 0.4788,
          id: 'COMPANY-PROFIT-TAX-RATE-TELESCORE',
          label: 'Effective company profit tax rate on payouts as dividends [Teleport score]',
          type: 'float',
        },
        {
          float_value: 0.7246,
          id: 'INCOME-TAX-TELESCORE',
          label: 'Income tax level [Teleport score]',
          type: 'float',
        },
        {
          id: 'TAX-VAT',
          label: 'VAT (Sales Tax)',
          percent_value: 0.18,
          type: 'percent',
        },
        {
          id: 'TIME-OVERHEAD-COMPANY-TAXES',
          int_value: 168,
          label: 'Time overhead to file company taxes',
          type: 'int',
        },
      ],
      id: 'TAXATION',
      label: 'Taxation',
    },
    {
      data: [
        {
          id: 'HUMAN-CITIES-PAGE-URLS',
          label: 'Human city page',
          type: 'url',
          url_value: 'http://cities.human.co/details/Russia/Moscow',
        },
        {
          float_value: 0.2857,
          id: 'TRAFFIC-INDEX-TELESCORE',
          label: 'Traffic handling [Teleport score]',
          type: 'float',
        },
      ],
      id: 'TRAFFIC',
      label: 'Commute',
    },
    {
      data: [
        {
          id: 'AIRPORT-HUB-INDEX-DETAIL',
          int_value: 257,
          label: 'Airport hub',
          type: 'int',
        },
        {
          float_value: 1,
          id: 'AIRPORT-HUB-TELESCORE',
          label: 'Airport hub [Teleport score]',
          type: 'float',
        },
        {
          float_value: 0.8109,
          id: 'TRAIN-TRANSPORT-TELESCORE',
          label: 'Intercity train connectivity [Teleport score]',
          type: 'float',
        },
      ],
      id: 'TRAVEL-CONNECTIVITY',
      label: 'Travel Connectivity',
    },
    {
      data: [
        {
          float_value: 0.3705,
          id: 'FUNDERBEAM-VENTURE-CAPITAL-TELESCORE',
          label: 'Venture capital [Teleport score]',
          type: 'float',
        },
        {
          id: 'FUNDING-ACCELERATOR-NAMES',
          label: 'Funding accelerator names',
          string_value: 'TexDrive',
          type: 'string',
        },
        {
          id: 'FUNDING-ACCELERATORS-DETAIL',
          int_value: 1,
          label: 'Number of funding accelerators',
          type: 'int',
        },
      ],
      id: 'VENTURE-CAPITAL',
      label: 'Venture Capital',
    },
  ],
};
