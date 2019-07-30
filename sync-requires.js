const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-unicef-material-ui-js": hot(preferDefault(require("/Users/sureshsevarthi/Desktop/Workspace/unicef-material-ui/sites/src/pages/unicef-material-ui.js")))
}

