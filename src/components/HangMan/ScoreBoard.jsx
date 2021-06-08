import React from 'react';

const ScoreBoard = () => {
    return (
        <div>
            <div className="hangman__scoreboard container">
                <h3 className="hangman__scoreboard-heading text-center my-5">Bảng xếp hạng</h3>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">ID</th>
                            <th scope="col">Score</th>
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
                            <td>You</td>
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
                <nav className="hangman__scoreboard-pagination mt-5">
                    <ul class="pagination justify-content-center align-items-end">
                        <li class="page-item disabled">
                            <a class="page-link" href="#" tabIndex="-1">Previous</a>
                        </li>
                        <li class="page-item active"><a class="page-link" href="#" >1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default ScoreBoard;