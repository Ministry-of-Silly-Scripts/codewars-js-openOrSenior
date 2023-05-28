const openOrSenior = (membersInfo) => {
  if (membersInfo.length === 0) {
    return []
  }

  if (membersInfo[0][0] >= 55) { 
    if (membersInfo[0][1] > 7) {
      return ["Senior"]
    }
  }

  return ["Open"]
};

module.exports = {
  openOrSenior,
};
