import React, { useState } from "react";
import KeyBoard from "../components/KeyBoard";
import KeyBoard2 from "../components/KeyBoard2";
import MainSlideBarContainer from "../components/MainSlideBarContainer";
import NavBar from "../components/NavBar";

const SoanThaoVanBan = () => {
    const [showKeyBoard, setShowKeyBoard] = useState(false);
    const [text, setText] = useState("");

    return (
        <div>
            <MainSlideBarContainer />
            <NavBar />
            <div className="content-wrapper">
                <div style={{ display: 'flex', height: 50, backgroundColor: '#C4C4C4', alignItems: 'center', paddingLeft: 50, fontWeight: '600', justifyContent: "space-between" }}>
                    <div>Soạn thảo văn bản</div>
                    <div className="custom-control custom-switch pr-5">
                        <input type="checkbox" className="custom-control-input" id="customSwitch1" onChange={event => setShowKeyBoard(event.target.checked)} checked={showKeyBoard} />
                        <label className="custom-control-label" htmlFor="customSwitch1">Hiển thị bàn phím</label>
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                    <div style={{ display: "flex", flexDirection: "column", width: "70%", minWidth:"290px" }}>
                        <h3 className="my-4">Nhập văn bản</h3>
                        <textarea type="text-area" value={text} onChange={event => setText(event.target.value)} placeholder="Văn bản tốc ký..." style={{ height: "250px", border: "1px solid #000", borderRadius: "10px", outlineColor: "#007bff", padding:"25px" }} />
                        <button className="btn btn-dark ml-auto mt-2 text-center" onClick={event => setText("")} style={{ minWidth: "120px" }}>Clear</button>
                    </div>
                    <div style={{ width: "20%", minWidth:"290px" }}>
                        <h3 className="my-4">Lịch sử văn bản tốc ký</h3>
                        <div style={{ border: "1px solid #000", borderRadius: "10px", height: "250px" }}>
                            <table className="text-center" style={{ width: "100%", lineHeight: "2" }}>
                                <thead>
                                    <th>Tên</th>
                                    <th>Lần cuối mở</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Văn bản 1</td>
                                        <td>Vừa xong</td>
                                    </tr>
                                    <tr>
                                        <td>Văn bản 2</td>
                                        <td>Vừa xong</td>
                                    </tr>
                                    <tr>
                                        <td>Văn bản 3</td>
                                        <td>2 phút trước</td>
                                    </tr>
                                    <tr>
                                        <td>Văn bản 4</td>
                                        <td>5 phút trước</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {showKeyBoard && <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ marginTop: 10, width: 1000 }}>
                        <div className="zerodot8" style={{ display: 'flex' }}>
                            <KeyBoard keys={[]} />
                            <div style={{ marginLeft: 20 }}>
                                <KeyBoard2 keys={[]} />
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    );
};

export default SoanThaoVanBan;
