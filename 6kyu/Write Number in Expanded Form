function expandedForm(num) {
  var str = ``;
  var text = num.toString();
  var length = text.length;
  var lgb = length - 1;
  for (var i=1; i < length; i++) {
    str = str.concat(`${text.at(i-1) * (Math.pow(10,lgb--))} + `)
     .replace('+ 0 +','+');
  }
 
    var str = str.concat(`${text.slice(-1)}`)
    .replace(' + 0','');
 return str;
}
