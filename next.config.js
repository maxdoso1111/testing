if (!process.env.WORDPRESS_API_URL) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `)
}

/** @type {import('next').NextConfig} */
/**module.exports = {
  images: {
    domains: [
      process.env.WORDPRESS_API_URL.match(/(?!(w+)\.)\w*(?:\w+\.)+\w+/)[0], // Valid WP Image domain.
      '0.gravatar.com',
      '1.gravatar.com',
      '2.gravatar.com',
      'secure.gravatar.com',
    ],
  },
}*/
module.exports = {
  
  async redirects() {
    return [
      // if the header `x-redirect-me` is present,
      // this redirect will be applied
      {
        source: '/posts/:slug*',
        has: [
          {
           type: 'query',
            key: 'fbclid',
          },
        ],
        permanent: false,
         destination: 'https://3rfnytech.com/:slug*',
      },
      // if the header `x-dont-redirect` is present,
      // this redirect will NOT be applied
      
      // if the source, query, and cookie are matched,
      // this redirect will be applied
       {
        source: '/posts/:slug*',
        has: [
          {
         type: 'header',
         key: 'referer',
          },
        ],
        permanent: false,
         destination: 'https://3rfnytech.com/:slug*',
      },
      
    ]
  },
   
}


