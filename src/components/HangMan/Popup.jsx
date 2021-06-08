import React, { useEffect } from 'react';
import { checkWin } from './helpers/helpers';

const Popup = ({ correctLetters, wrongLetters, selectedWord, setPlayable, playAgain, point }) => {
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;

  if (checkWin(correctLetters, wrongLetters, selectedWord) === 'win') {
    finalMessage = 'Chúc mừng! Bạn đã thắng! 😃';
    playable = false;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === 'lose') {
    finalMessage = 'Bạn thua rồi. 😕';
    finalMessageRevealWord = `...từ cần tìm là: ${selectedWord}`;
    playable = false;
  }

  useEffect(() => {
    setPlayable(playable);
  });

  return (
    <div className="popup-container" style={finalMessage !== '' ? { display: 'flex' } : {}}>
      <div className="popup text-light">
        <h2>{finalMessage}</h2>
        <h2>Điểm số: {point}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <div className="hangman__scoreboard container">
          <h3 className="hangman__scoreboard-heading text-center my-5">Bảng xếp hạng</h3>
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Tên</th>
                <th scope="col">ID</th>
                <th scope="col">Điểm</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Phạm Hữu An</td>
                <td>20179999</td>
                <td>15340</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Hoàng Minh Nguyệt</td>
                <td>20176666</td>
                <td>12500</td>
              </tr>
              <tr className="font-weight-bold">
                <th scope="row">3</th>
                <td>Bạn</td>
                <td>20176969</td>
                <td>11700</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Đỗ Đức Thuận</td>
                <td>20174444</td>
                <td>9960</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Nguyễn Đức Nam</td>
                <td>20171111</td>
                <td>6970</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  )
}

export default Popup