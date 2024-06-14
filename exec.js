var reg = /a/g;
    var str = 'abc_abc_abc a hfuiahufhu a ashduh a';
    while(true) {
      var match = reg.exec(str);
      if (!match) break;
      console.log(match.index + '---->'+ match[0]);
    }