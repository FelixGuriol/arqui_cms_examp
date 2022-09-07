import fs from "fs";
import path from "path";
const rootDir = "E:\\1. JOEL\\JANAQ\\PROY\\Ejem\\amazon";
const defaultHost = "default";
function configResolver(theme, page, host) {
  //if theme not found return nothing <- handle better
  let gconfig = getPageOrDefaultOr404(host, theme, page);
  if (gconfig) {
    gconfig.layout = {};
    if (gconfig.use_header)
      gconfig.layout.header = getComponentOrDefault(host, theme, "header");
    if (gconfig.use_footer)
      gconfig.layout.footer = getComponentOrDefault(host, theme, "footer");
    return gconfig;
  }
  return {};
}
function getPageOrDefaultOr404(host, theme, page) {
  let dir = "pages";
  // read route config for given host
  let file = path.join(rootDir, host, theme, dir, page + ".json");
  if (fs.existsSync(file)) {
    return JSON.parse(fs.readFileSync(file).toString());
  }
  // read route config for default host
  file = path.join(rootDir, defaultHost, theme, dir, page + ".json");
  if (fs.existsSync(file)) {
    return JSON.parse(fs.readFileSync(file).toString());
  }
  // read default host 404 page
  file = path.join(rootDir, defaultHost, theme, dir, "404.json");
  if (fs.existsSync(file)) {
    return JSON.parse(fs.readFileSync(file).toString());
  }
  return null;
}
function getComponentOrDefault(host, theme, component) {
  let dir = "components";
  // read route config for given host
  let file = path.join(rootDir, host, theme, dir, component + ".json");
  if (fs.existsSync(file)) {
    return JSON.parse(fs.readFileSync(file).toString());
  }
  // read route config for default host
  file = path.join(rootDir, defaultHost, theme, dir, component + ".json");
  if (fs.existsSync(file)) {
    return JSON.parse(fs.readFileSync(file).toString());
  }
  return null;
}
export { configResolver };
