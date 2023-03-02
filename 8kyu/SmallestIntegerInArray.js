class SmallestIntegerFinder {
  findSmallestInt(args) {
   var num=args[0];
    for (let i = 0; i < args.length; i++) {
    if (args[i]<num) 
  num=args[i];
        }
    return (num);
}
  }
