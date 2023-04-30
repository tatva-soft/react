import React from 'react';
import './styles.css';
//import { useLanguageState } from './Contexts';
import { useTranslation } from 'react-i18next';


import Moment from 'react-moment';



// Set the locale for every react-moment instance to French.
Moment.globalLocale = 'fr';

// Set the output format for every react-moment instance.
Moment.globalFormat = 'D MMM YYYY';



// Upper case all rendered dates.


const ShowData = () => {
  //old
  //console.log('<ShowData /> rerender.');
  const [__] = useTranslation();
  //const { language } = useLanguageState();
  return (
    <div>
      {/* old */}
      <div>
        {__('system_language')}: <span className="h1">en</span>
      </div>
      <div>
        time: <Moment format="DD MMM, YYYY" locale="fr" unix>{1624088975}</Moment>
      </div>

      <div>
        time: <Moment>1976-04-19T12:59-0500</Moment>
      </div>

      <div>
        time: <Moment>1976-04-19T12:59-0500</Moment>
      </div>
    </div>
  );
};

export default ShowData;
