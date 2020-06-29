/** @jsx jsx */
import { jsx } from "theme-ui"
import React from 'react';
import Link from 'gatsby-link';

const SelectLanguage = (props) => {
  console.log(props.langs);
  const links = props.langs.map(lang =>
    <Link to={lang.link} key={lang.langKey} sx={{
      color: 'muted',
      textDecoration: 'none',
    }}>
      <li sx={{
        my: 2,
        mx: [2, 3, 4],
        borderBottom: lang.selected ? '1px solid' : 'none',
      }}>
        {lang.langKey.toUpperCase()}
      </li>
    </Link>
  );

  return (
    <ul sx={{
      listStyle: 'none',
      margin: 0,
    }}>
      {links}
    </ul>
  );
};

export default SelectLanguage;