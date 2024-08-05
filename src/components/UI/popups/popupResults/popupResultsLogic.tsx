import { IUserData } from "./PopupResults";

interface IPopupResultsLogic {
  rightAnswers: number,
  wrongAnswers: number,
  userData: IUserData,
  setUserData: React.Dispatch<React.SetStateAction<IUserData | null>>
}

export default function popupResultsLogic({ rightAnswers, wrongAnswers, userData, setUserData}: IPopupResultsLogic) {
  const currentPath = window.location.pathname;

  switch (currentPath) {
    case '/tasks/largerNumber':
      if((rightAnswers >= 25 && wrongAnswers <= 5) && userData.largerNumber < 5){
        const updatedUserData = {
          ...userData,
          largerNumber: userData.largerNumber + 1,
          correctAnswers: userData.correctAnswers + rightAnswers,
          wrongAnswers: userData.wrongAnswers + wrongAnswers,
        };
        setUserData(updatedUserData);
        localStorage.setItem('userData', JSON.stringify(updatedUserData));
      }
      break;
      case '/tasks/extraPiece':
        if((rightAnswers >= 18 && wrongAnswers <= 3) && userData.extraPiece < 5){
          const updatedUserData = {
            ...userData,
            extraPiece: userData.extraPiece + 1,
            correctAnswers: userData.correctAnswers + rightAnswers,
            wrongAnswers: userData.wrongAnswers + wrongAnswers,
          };
          setUserData(updatedUserData);
          localStorage.setItem('userData', JSON.stringify(updatedUserData));
        }
        break
      case '/tasks/numberOfSquares':
        if((rightAnswers >= 12 && wrongAnswers <= 4 && userData.extraPiece < 5)){
          const updatedUserData = {
            ...userData,
            numberOfSquares: userData.numberOfSquares + 1,
            correctAnswers: userData.correctAnswers + rightAnswers,
            wrongAnswers: userData.wrongAnswers + wrongAnswers,
          };
          setUserData(updatedUserData);
          localStorage.setItem('userData', JSON.stringify(updatedUserData));
        }
        break
      case '/tasks/restoreSequence':
        if((rightAnswers >= 55 && wrongAnswers <= 10 && userData.restoreSequence < 5)){
          const updatedUserData = {
            ...userData,
            restoreSequence: userData.restoreSequence + 1,
            correctAnswers: userData.correctAnswers + rightAnswers,
            wrongAnswers: userData.wrongAnswers + wrongAnswers,
          };
          setUserData(updatedUserData);
          localStorage.setItem('userData', JSON.stringify(updatedUserData));
        }
        break

      default:
        break;
    }
}