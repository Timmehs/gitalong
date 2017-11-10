import React from 'react'

const languageClass = language => {
  const conversions = {
    HTML: 'html5',
    CSS: 'css3'
  }
  return conversions[language] || language.toLowerCase()
}

const LanguageIcon = ({ lang }) => (
  <i
    className={`language-icon devicon-${languageClass(lang)}-plain colored`}
    title={lang}
  />
)

export default LanguageIcon
