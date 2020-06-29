/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import "./layout.css"
import Hero from "../components/hero"
import logo from "../../content/assets/logo-media_suite.png"
import SelectLanguage from './SelectLanguage';
import useSiteMetadata from "../hooks/use-site-metadata"
import {
  getLangs,
  getUrlForLang,
  getCurrentLangKey
} from 'ptz-i18n';

const Layout = ({ location, title, children }) => {
  const url = location.pathname;
  const { langs, defaultLangKey } = useSiteMetadata().languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${langKey !== defaultLangKey ? `${langKey}/` : ''}`;
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url)).map(
    (item) => ({
      ...item,
      link: item.link
        .replace(`/${defaultLangKey}/`, '/')
        .replace(`//`, '/') // remove double slashes wrongly returned by getLangs()
    })
  );
  return (
    <div>
      <header
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "primary",
          p: 3,
          fontFamily: "heading",
        }}
      >
        <Link to={homeLink}>
          <img
            src={logo}
            alt="Media Suite Logo"
            sx={{
              width: 5,
              margin: 0,
            }}
          />
        </Link>
        <div sx={{ mx: "auto" }} />
        <Link
          to={homeLink + "about"}
          sx={{
            variant: "text.navlink",
          }}
        >
          About
        </Link>
        <a
          href="http://mediasuite.clariah.nl/"
          sx={{
            variant: "text.navlink",
          }}
        >
          Media Suite
        </a>
        <a
          href="https://twitter.com/mediasuite_nl"
          sx={{
            variant: "text.navlink",
          }}
        >
          Twitter
        </a>
        <SelectLanguage langs={langsMenu} className="select-languages" />
      </header>
      <Hero pathname={location.pathname} />
      <main
        sx={{
          maxWidth: 768,
          mx: "auto",
          mt: 5,
          px: 3,
        }}
      >
        {children}
      </main>
      <footer>{/*© {new Date().getFullYear()}, */}</footer>
    </div>
  )
}

export default Layout
