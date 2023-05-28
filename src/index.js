const openOrSenior = (membersInfo) => {
  if (membersInfo.length === 0) {
    return []
  }

  return ["Open"]
};

module.exports = {
  openOrSenior,
};
