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

## 🎓 Learning Gatsby

[Gatsby](https://www.gatsbyjs.org/docs/)

[Gatsby + Wordpress](https://www.gatsbyjs.org/packages/gatsby-source-wordpress/)

[Gatsby + Now](https://www.gatsbyjs.org/docs/deploying-to-now/)
