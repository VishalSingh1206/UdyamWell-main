import React, { useState , useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import LanguageIcon from '@mui/icons-material/Language'; 
import './styles/LanguageSwitch.css'; 

const LanguageSwitch = () => {
  const { i18n } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  useEffect(() => {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage && i18n.language !== storedLanguage) {
      i18n.changeLanguage(storedLanguage);
      setSelectedLanguage(storedLanguage);
    }
  }, [i18n]);
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setSelectedLanguage(language);
    localStorage.setItem('selectedLanguage', language);
    setShowDropdown(false);
  };

  const languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'hi', label: 'हिंदी' },
  ];

  return (
    <div className="language-switcher">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="btn-language"
      >
        <LanguageIcon /> {/* Add the LanguageIcon component here */}
        {/* {i18n.language} */}
      </button>
      {showDropdown && (
        <div className="language-dropdown">
          {languageOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => changeLanguage(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitch;
