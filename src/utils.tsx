export async function wait(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

export function ellipsize(str: string, limit = 100, content = "...") {
  if (str.length > limit - content.length) {
    return `${str.substr(0, limit)}${content}`;
  }
  return str;
}

export function hrefWithLang(href: string) {
  //assumes that the URL starts with /
  return `/${window.lang}${href}`;
}
