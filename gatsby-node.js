const path = require("path")

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@images": path.resolve(__dirname, "src/images"),
        "@styles": path.resolve(__dirname, "src/styles"),
        "@type": path.resolve(__dirname, "src/types"),
        "@utils": path.resolve(__dirname, "src/utils"),
      },
    },
  })

  if (stage === "build-javascript") {
    actions.setWebpackConfig({
      devtool: false,
    })
  }
}