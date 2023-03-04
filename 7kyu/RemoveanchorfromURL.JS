function removeUrlAnchor(url){
  if (url.includes('#')) {
  let i = url.indexOf('#')
  return( url.slice(0, i) );
    }
  else { return url}
}
