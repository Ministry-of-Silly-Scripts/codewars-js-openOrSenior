const openOrSenior = (membersInfo) => {
  if (membersInfo.length === 0) {
    return []
  }

  if (membersInfo[0][0] >= 55) {
    return ["Senior"]
  }

  return ["Open"]
};

module.exports = {
  openOrSenior,
};
