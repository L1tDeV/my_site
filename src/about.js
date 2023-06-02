class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {position: 0};
    }
    render(){
		if(this.state.position==0){
			return[
				<div className="box_img">
					<img src="./img/img.jpg"></img>
				</div>,
				<div className="main_txt">
					<h2>Frontend-Developer</h2>
					<p>I am a beginner Frontend-developer. On the Internet I often use the nickname SmaF1. At the moment I am studying programming languages used in web development, such as JavaScript, React.js and php. I will be glad to cooperate.</p>
					<button onClick={()=>{this.setState({position: 1})}} className="more_btn">Read More</button>
				</div>
			]
		}else if(this.state.position==1){
			return[
				<div className="ach_box_desk">
					<table className="achiev">
						<tr>
							<td><h2>Олимпиады:</h2></td>
							<td><h2>Конкурс цифровых портфолио “Талант НТО” в компетенциях:</h2></td>
							<td><h2>Образование:</h2></td>
						</tr>
						<tr>
							<td>
								<div className="prpl_box">
									<div className="txt_box">
										<p>Финалист НТО по профилю “Финансовый инжиниринг” (2023 г.)</p>
									</div>
								</div>
							</td>
							<td>
								<div className="prpl_box">
									<div className="txt_box">
										<p>“Разработка бизнес-приложений” - победитель (2023 г.)</p>
									</div>
								</div>
							</td>
							<td>
								<div className="prpl_box">
									<div className="txt_box">
										<p>Основное-общее ГОУ ЯО СШ №33</p>
									</div>
								</div>
							</td>
						</tr>
						<tr>
							<td></td>
							<td>
								<div className="prpl_box">
									<div className="txt_box">
										<p>“Написание программ на Python” - победитель (2023 г.)</p>
									</div>
								</div>
							</td>
							<td></td>
						</tr>
						<tr>
							<td>
								<a href="https://ntcontest.ru/" target="_blank">
									<div className="info_btn">
										<p>Что такое НТО?</p>
									</div>
								</a>
							</td>
							<td>
								<div className="prpl_box">
									<div className="txt_box">
										<p>“Искуственный интеллект” - призер (2023 г.)</p>
									</div>
								</div>
							</td>
							<td>
								<button className="back_btn" onClick={()=>{this.setState({position: 0})}}>Назад</button>
							</td>
						</tr>
					</table>
				</div>,
				<div className="ach_box_mob">
					<div className="achiev">
						<h2>Олимпиады:</h2>
						<div className="prpl_box">
							<div className="txt_box">
								<p>Финалист НТО по профилю “Финансовый инжиниринг” (2023 г.)</p>
							</div>
						</div>

						<h2>Конкурс цифровых портфолио “Талант НТО” в компетенциях:</h2>
						<div className="prpl_box">
							<div className="txt_box">
								<p>“Разработка бизнес-приложений” - победитель (2023 г.)</p>
							</div>
						</div>
						<div className="prpl_box">
							<div className="txt_box">
								<p>“Написание программ на Python” - победитель (2023 г.)</p>
							</div>
						</div>
						<div className="prpl_box">
							<div className="txt_box">
								<p>“Искуственный интеллект” - призер (2023 г.)</p>
							</div>
						</div>

						<h2>Образование:</h2>
						<div className="prpl_box">
							<div className="txt_box">
								<p>Основное-общее ГОУ ЯО СШ №33</p>
							</div>
						</div>
				</div>
				<div className="btn_box">
					<div className="btn_nto">
						<a href="https://ntcontest.ru/" target="_blank">
							<div className="info_btn">
								<p>Что такое НТО?</p>
							</div>
						</a>
					</div>
					<div className="btn_back">
						<button className="back_btn" onClick={()=>{this.setState({position: 0})}}>Назад</button>
					</div>
				</div>
			</div>
			]
		}
    }
}
ReactDOM.createRoot(document.getElementById("main"),).render(<Main />);