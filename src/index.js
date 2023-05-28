const openOrSenior = (membersInfo) => {
  if (membersInfo.length === 0) {
    return []
  }

  out = []
  for (member of membersInfo){ 
    if (member[0] >= 55 && member[1] > 7) {
      out.push("Senior")
    } else {
      out.push("Open")
    }
  }

  return out;
};

module.exports = {
  openOrSenior,
};
