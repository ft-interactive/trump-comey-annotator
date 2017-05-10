export default () => ({ // eslint-disable-line

  // link file UUID
  id: 'b63ee296-3564-11e7-bce4-9023f8c0fd2e',

  // canonical URL of the published page
  // https://ig.ft.com/sites/federal-reserve-march-meeting-2017 get filled in by the ./configure script
  url: 'https://ig.ft.com/trump-comey-memo/',

  // To set an exact publish date do this:
  //       new Date('2016-05-17T17:11:22Z')
  publishedDate: new Date(),

  headline: 'The memo recommending James Comey’s dismissal, decoded',

  // summary === standfirst (Summary is what the content API calls it)
  summary: 'How to read between the lines of Rod Rosenstein’s recommendation to fire the FBI director',

  topic: {
    name: 'James Comey',
    url: 'https://www.ft.com/topics/people/James_Comey',
  },

  relatedArticle: {
    text: '',
    url: '',
  },

  mainImage: {
    title: 'https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3Ae38e8ce4-25ef-11e7-a34a-538b4cb30025?source=ig&width=2048&height=1152',
    description: '',
    url: '',
    width: 2048, // ensure correct width
    height: 1152, // ensure correct height
  },

  // Byline can by a plain string, markdown, or array of authors
  // if array of authors, url is optional
  byline: [
    { name: 'Peter Spiegel', url: 'https://www.ft.com/stream/authorsId/Q0ItMDAwMTMyMQ==-QXV0aG9ycw==' },
    { name: 'Brooke Masters', url: 'https://www.ft.com/stream/authorsId/Q0ItMDAwMDk4NQ==-QXV0aG9ycw==' },

  ],

  // Appears in the HTML <title>
  title: 'The EU Brexit guidelines decoded',

  // meta data
  description: 'How to read between the lines of Rod Rosenstein’s recommendation to fire the FBI director',

  /*
  TODO: Select Twitter card type -
        summary or summary_large_image

        Twitter card docs:
        https://dev.twitter.com/cards/markup
  */
  twitterCard: 'summary',

  /*
  TODO: Do you want to tweak any of the
        optional social meta data?
  */
  // General social
  socialImage: 'https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3Ae38e8ce4-25ef-11e7-a34a-538b4cb30025?source=ig&width=1200&fit=scale-down',
  socialHeadline: 'How to read between the lines of Rod Rosenstein’s recommendation to fire the FBI director',
  // socialSummary: 'The UK's Article 50 notification letter, annotated',

  // TWITTER
  twitterImage: 'https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3Ae38e8ce4-25ef-11e7-a34a-538b4cb30025?source=ig&width=1200&fit=scale-down',
  twitterCreator: '@ft',
  tweetText: 'How to read between the lines of Rod Rosenstein’s recommendation to fire the FBI director',
  twitterHeadline: 'The full text of the EU guidance on the Brexit negotiations',

  // FACEBOOK
  facebookImage: 'https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3Ae38e8ce4-25ef-11e7-a34a-538b4cb30025?source=ig&width=1200&fit=scale-down',
  facebookHeadline: 'How to read between the lines of Rod Rosenstein’s recommendation to fire the FBI director',

  tracking: {

    /*

    Microsite Name

    e.g. guffipedia, business-books, baseline.
    Used to query groups of pages, not intended for use with
    one off interactive pages. If you're building a microsite
    consider more custom tracking to allow better analysis.
    Also used for pages that do not have a UUID for whatever reason
    */
    // micrositeName: '',

    /*
    Product name

    This will usually default to IG
    however another value may be needed
    */
    // product: '',
  },
});
