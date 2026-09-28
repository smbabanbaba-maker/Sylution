export const SITE_ORIGIN = "https://www.sylution.com.ng";

export function absoluteUrl(pathname: string): string {
  const url = new URL(pathname, SITE_ORIGIN);
  if (url.pathname !== "/") url.pathname = url.pathname.replace(/\/+$/, "");
  return url.href;
}
