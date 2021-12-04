import React, { useState } from 'react';
import engFlag from '../img/flags/eng-flag.png'
import spFlag from '../img/flags/sp-flag.png'

export const I18nSelect = (props) => {
  const [language, setLanguage] = useState('es')

  const changeLanguage = (lang) => {
    setLanguage(lang)
    props.changeLanguage(lang)
  }
  
  return (
    <div className='language-selector'>
      <img onClick={() => changeLanguage('en')} style={{ borderColor: language === 'en' ? "yellow" : 'black' }} className = 'flag-1' src={engFlag}/>
      <img onClick={() => changeLanguage('es')} style={{ borderColor: language === 'es' ? "yellow" : 'black' }} className = 'flag-2' src={spFlag}/>
    </div>
  )
};
