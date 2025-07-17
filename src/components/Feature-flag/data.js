



const apiResponse = {
  showGithubProfile: true,
  showImageSlider: true,
  showModalPopup: true,
  showTicTacToe: true,
  showRandomColor: true,
  showLoadMoreProducts: true,
  showQRCodeGenerator: true,
};

const featureFlagApiCall = () => {
  return new Promise((resolve, reject) => {
    if (apiResponse) {
      setTimeout(resolve(apiResponse), 500);
    } else {
      reject("Some Error Occured!!!");
    }
  });
};

export default featureFlagApiCall;