const autoprefixer = require("autoprefixer");
const postcssFlexbugsFixes = require("postcss-flexbugs-fixes");
const pxtorem = require('postcss-pxtorem')
module.exports = {
  ident: "postcss",
  plugins: [
    postcssFlexbugsFixes,
    autoprefixer({
      flexbox: "no-2009"
    }),
    pxtorem({
      rootValue: 100,
      propWhiteList:[]
    })
  ],
};