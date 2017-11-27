import React from 'react'

const languageClass = language => {
  if (language === undefined) return 'github'
  const conversions = {
    HTML: 'html5',
    CSS: 'css3'
  }
  return conversions[language] || language.toLowerCase()
}

const LanguageIcon = ({ language }) => (
  <i
    className={`language-icon devicon-${languageClass(
      language
    )}-plain colored mr-1`}
    title={language}
  />
)

export default LanguageIcon
