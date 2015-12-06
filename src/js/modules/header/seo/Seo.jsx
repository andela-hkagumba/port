import Meta from 'data/config.json'

let createMeta = (name, content) => {
  let node = document.createElement('meta')
  node.name = name
  node.content = content
  document.getElementsByTagName('head')[0].appendChild(node)
}

let createLink = (rel, href) => {
  let node = document.createElement('link')
  node.rel = rel
  node.href = href
  document.getElementsByTagName('head')[0].appendChild(node)
}

class MetaTags {

  constructor (props) {
    this.props = {
      title: Meta.title,
      tagline: Meta.tagline,
      description: Meta.description,
      keywords: Meta.keywords,
      url: Meta.url,
      img: [Meta.url, Meta.logo].join('/'),
      analytics: Meta.app.analytics,
      fcbk_id: Meta.app.fcbk_id,
      author: {
        name: Meta.author.name,
        email: Meta.author.email,
        avatar: [Meta.url, Meta.author.avatar].join('/'),
        job: Meta.author.job,
        po: Meta.author.po,
        city: Meta.author.city,
        pocode: Meta.author.pocode,
        country: Meta.author.country,
        tel: Meta.author.tel,
        twitter_handle: Meta.author.twitter,
        github_handle: Meta.author.github,
        google_handle: ['https://plus.google.com/+', Meta.author.google_plus].join(''),
        disqus_handle: Meta.author.disqus_shortname
      }
    }
  }

  setTitle () {
    document.title = this.props.title
  }

  setLinks () {
    let {author: {google_handle: author}, url: canonical} = this.props
    let link_props = {
      author: author,
      canonical: canonical
    }

    for (let rel of Object.keys(link_props)) {
      createLink(rel, link_props[rel])
    }
  }

  setMetas () {
    let meta_props = {
      'description': this.props.description,
      'keywords': this.props.keywords,
      'twitter:title': this.props.title,
      'twitter:description': this.props.description,
      'twitter:site': this.props.author.name,
      'twitter:card': 'summary_large',
      'twitter:creator': this.props.author.name,
      'twitter:image:src': this.props.author.avatar,
      'twitter:url': this.props.url,
      'og:type': 'website',
      'og:title': this.props.title,
      'og:description': this.props.description,
      'og:url': this.props.url,
      'og:site_name': this.props.title,
      'og:image': this.props.author.avatar
    }

    for (let name of Object.keys(meta_props)) {
      createMeta(name, meta_props[name])
    }
  }

}

export default MetaTags
