import React from 'react';
import {Helmet} from "react-helmet";
import {useStaticQuery, graphql} from "gatsby";

export const query = graphql`
  {
    site {
      siteMetadata {
        description
        title
        lang
      }
    }
  }
`

const Seo = ({title, description, lang}) => {

    const {
        site: {
            siteMetadata: {
                title: preloadedTitle,
                description: preloadedDescription,
                lang: preloadedLang
            }
        }
    } = useStaticQuery(query)


    return (
        <Helmet
            title={title ? `${title} | ${preloadedTitle}` : preloadedTitle}
            htmlAttributes={{
                lang: lang ? lang : preloadedLang
            }}
            meta={[
                {
                    name: `description`,
                    content: description ? description : preloadedDescription
                }
            ]}
        />
    );
};

export default Seo;
