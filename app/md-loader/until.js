const sliceFn = sliceCtr => {
  return sliceCtr && sliceCtr.slice(1, sliceCtr.length - 2);
};
const templateExtract = str => {
  const replaceStr = str.split("template");
  return sliceFn(replaceStr && replaceStr[1]) || str;
};
const styleExtract = str => {
  const replaceStr = str.split("style");
  return sliceFn(replaceStr && replaceStr[1]) || "";
};
const scriptExtract = str => {
  const replaceStr = str.split("script");
  return sliceFn(replaceStr && replaceStr[1]) || "";
};
const deleteScript = str => {
  const start = str.indexOf("<script>");
  const end = str.indexOf("</script>");
  if (start !== -1 && end !== -1) {
    return str.slice(0, start) + str.slice(end + 9);
  } else {
    return str;
  }
};
const deleteStyle = str => {
  const start = str.indexOf("<style>");
  const end = str.indexOf("</style>");
  if (start !== -1 && end !== -1) {
    return str.slice(0, start) + str.slice(end + 8);
  } else {
    return str;
  }
};
module.exports = {
  scriptExtract,
  deleteStyle,
  deleteScript,
  templateExtract,
  styleExtract
};
