import React from "react";
import Color from "../../constants/Colors";

const Introduce = ({setSelected}) => {
	return (
		<div className="container-fluid p-0" style={{overflowX:"hidden"}}>
			<div className="row" style={{display: 'flex', flexDirection: 'row', marginTop: 80}}>
				<div className="col-lg-6" style={{display: 'flex', flex: 1, justifyContent: 'center'}}>
					<img
						src="https://cdn11.bigcommerce.com/s-803d4/images/stencil/1280x1280/products/4206/10583/v59ROV9E__28684.1600278897.jpg?c=2?imbypass=on"
						alt="StenoMachine"
						style={{width: 500, height: 500}}
					/>
				</div>
				<div className="col-lg-6" style={{display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center'}}>
					<div>
						<p style={{fontFamily: 'Courier', fontSize: 48, fontWeight: 700}}>TỐC KÝ TIẾNG VIỆT</p>
						<p style={{fontFamily: 'Courier', marginTop: 20, fontSize: 24, fontWeight: 400}}>Website Tốc Ký Tiếng Việt Miễn Phí</p>
						<button className="btn btn-block" onClick={() => setSelected(2)} style={{backgroundColor: '#353A3F', borderRadius: 20, padding: 10, color: Color.PrimaryWhite, width: 200, marginTop: 30}}>Học Tốc Ký Ngay</button>
					</div>
				</div>
			</div>
			<div className="row" style={{display: 'flex', flexDirection: 'row', marginTop: 80}}>
				<div className="col-lg-6" style={{display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
					<p style={{fontFamily: 'Courier', fontSize: 48, fontWeight: 700}}>TỐC KÝ</p>
				</div>
				<div className="col-lg-4" style={{display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center'}}>
					<p style={{fontFamily: 'Helvetica', marginTop: 20, fontSize: 24, fontWeight: 400, textAlign: 'justify'}}><b>Tốc ký (Shorthand)</b> hay ghi nhanh, ghi tắt là việc thực hành ghi chép thông tin một cách nhanh chóng nhất thông qua việc ghi vắn tắt các ký tự với những phương pháp tăng tốc độ viết. Tốc ký sẽ giúp tiếp thu kiến thức dễ dàng hơn từ những bài giảng hay phát biểu quá dài dòng. </p>
				</div>
			</div>
			<div className="row" style={{display: 'flex', flexDirection: 'row', marginTop: 80}}>
				<div className="col-lg-1" />
				<div className="col-lg-4" style={{display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center'}}>
					<p style={{fontFamily: 'Monda-Regular', marginTop: 20, fontSize: 24, fontWeight: 400, textAlign: 'justify'}}><b>Tốc ký (Shorthand)</b> Khi bước vào một cuộc họp quan trọng với nhiệm vụ chính của một nhân viên là viết lại toàn bộ nội dung cuộc họp vậy bạn nghĩ mình có thể viết hoặc đánh máy từng chữ mà vẫn có thể theo kịp tiến trình của cuộc họp không? Và câu trả lời là rất khó để thực hiện việc này. Vậy làm sao có thể vừa hiểu được hết nội dung buổi họp và có thể ghi chép lại đầy đủ? Đó chính là nhờ vào kỹ năng viết tốc ký rất cần thiết cho một nhân viên văn phòng.</p>
				</div>
				<div className="col-lg-1" />
				<div className="col-lg-4" style={{display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
					<p style={{fontFamily: 'Courier', fontSize: 48, fontWeight: 700, textAlign: 'center'}}>Tại sao lại chọn tốc ký?</p>
				</div>
			</div>
			<div className="row" style={{display: 'flex', flexDirection: 'row', marginTop: 80}}>
				{/* <div className="col-lg-1" /> */}
				<div style={{display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
					<p style={{fontFamily: 'Courier', fontSize: 40, fontWeight: 700}}>Tốc ký Tiếng Việt của chúng tôi có gì?</p>
				</div>
				{/* <div className="col-lg-1" />
				<div className="col-lg-4" style={{display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
					<p style={{fontFamily: 'Monda-Regular', marginTop: 20, fontSize: 24, fontWeight: 400, textAlign: 'justify'}}><b>Tốc ký (Shorthand)</b> là Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
					<button className="btn btn-block" onClick={() => setSelected(3)} style={{backgroundColor: '#353A3F', borderRadius: 20, padding: 10, color: Color.PrimaryWhite, width: 200}}>Tham gia ngay</button>
				</div> */}
			</div>
			<div className='container'>
				<div className="row text-center" style={{display: 'flex', flexDirection: 'row', marginTop: 80}}>
					<img style={{maxWidth: '100%'}} src={`${window.location.origin}/dist/img/feature.png`} alt="" />
				</div>
			</div>

			<div className="row" style={{display: 'flex', flexDirection: 'row', marginTop: 80, justifyContent: 'center'}}>
			<button className="btn btn-block" onClick={() => setSelected(3)} style={{backgroundColor: '#353A3F', borderRadius: 20, padding: 10, color: Color.PrimaryWhite, width: 200}}>Tham gia ngay</button>
			</div>

			<div style={{height: 100, backgroundColor:"#343a40", display: 'flex', flexDirection: 'row', marginTop: 80, alignItems:"center"}}>
					<p style={{ fontWeight:'bold' ,fontFamily: 'Courier', fontSize: 36, color: Color.PrimaryWhite,lineHeight:"100%"}} className="nav-link">
							HCI05
					</p> 
			</div>
		</div>
	);
};

export default Introduce;
