## Quick Setup

1. download this project, then cd into it
2. run `npm install --global gatsby-cli`
3. run `npm install -g now`
4. run `npm install --save gatsby-source-wordpress`
5. run `npm install`

## Development and Testing

1. **Build for Production.**

   ```sh
   gatsby build
   ```

   This will generate a `.cache` and `public` folder

2. **Local Site Generateion**

   ```sh
   gatsby develop
   ```

   Your site is now running at `http://localhost:8000`!

   Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).

   Open the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

3. **Generate Live Temp Site.**

   ```sh
   now
   ```

   You should recieve a temporary url to test with after this

4. **Before pushing, be sure to run `gatsby build` to make sure you don't push broken code to the repo**

## Querying and Loading Data

1. **Request the API data**
   Your target site's WP API data should be located at `yoursite.com/wp-json`

   You first need to request the data laid out in the target site's API file. You can do this by going to `gatsby-config.js` and adding the data path for the needed items inside of the `includedRoutes` array.
   This will grab every item of that type from the site.
   (See existing paths for an example)

2. **Generate the pages**
   In order to generate pages from queried info, you first need to create a template. Create your template by adding a new file under the `templates` folder. Name it something like `newtemplate.js`.

   After this, you need to go to the `gatsby-node.js` file and follow the instructions in the comments at the top of the file to query data and generate multiple pages from the template you just created.

3. **Customize your template**
   In order to request the data inside of the template, you need to query the data inside of it by adding

   ```sh
   export const pageQuery = graphql`...`
   ```

   towards the bottom.

   You can request to have all instances of an item by querying as such:

   ```sh
   query {
      allWordpressWpLeader(sort: { fields: [date] }) {
      }
   }
   ```

   Or, you can request only the individual item fed to it by querying as such:

   ```sh
    query($id: String!) {
        wordpressWpLocations(id: { eq: $id }) {
        }
    }
   ```

   This will only query the single item fed to the template in step 2.
   From there, query the fields that you need by looking at the API json file and using `graphql` syntax.

## 🎓 Learning Gatsby

[Gatsby](https://www.gatsbyjs.org/docs/)

[Gatsby + Wordpress](https://www.gatsbyjs.org/packages/gatsby-source-wordpress/)

[Gatsby + Now](https://www.gatsbyjs.org/docs/deploying-to-now/)
