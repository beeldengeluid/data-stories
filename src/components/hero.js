/** @jsx jsx */
import { jsx } from "theme-ui"
import heroimg from "../../content/assets/hero.jpg"
import { Link } from "gatsby"
import useSiteMetadata from "../hooks/use-site-metadata"
import { getCurrentLangKey } from "ptz-i18n"

const Hero = ({ pathname }) => {
  const url = pathname
  const { langs, defaultLangKey } = useSiteMetadata().languages
  const langKey = getCurrentLangKey(langs, defaultLangKey, url)
  const homeLink = `/${langKey !== defaultLangKey ? `${langKey}/` : ""}`

  const titleText =
    langKey === "en"
      ? "Stories from Dutch multimedia archives, powered by the Media Suite"
      : "Verhalen uit multimediale archieven, mogelijk gemaakt door de Media Suite"

  const moreText = langKey === "en" ? "read more" : "meer info"

  return (
    <div
      sx={{
        position: `relative`,
        overflowY: `hidden`,
        backgroundImage: `url(${heroimg})`,
        backgroundSize: `cover`,
        backgroundPosition: `top center`,
      }}
    >
      <div
        sx={{
          maxWidth: 768,
          mx: "auto",
          px: 3,
          py: 5,
        }}
      >
        <h1>
          <span sx={{ variant: "text.onimage" }}>Data Stories</span>
        </h1>
        <div
          sx={{
            variant: "text.onimage",
            display: "inline-block",
            fontSize: 3,
          }}
        >
          <div>{titleText}</div>
          {pathname.includes("/about") ? null : (
            <Link
              to={homeLink + "about"}
              sx={{
                variant: "text.link",
                fontSize: 2,
              }}
            >
              {moreText}
            </Link>
          )}
        </div>
      </div>
      {/*<img 
        src={heroimg}
        alt="Media Suite Logo"
        sx={{
          position: `absolute`,
          width: `100%`,
          top: 0,
          zIndex: -1,
        }}
      />*/}
    </div>
  )
}

export default Hero
