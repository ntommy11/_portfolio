import './App.css';
import Title from './components/Title';
import styled from 'styled-components';
import SimpleImageSlider from 'react-simple-image-slider';

const images = [
  {url: "./screenshot8.png"},
  {url: "./screenshot9.png"},
  {url: "./screenshot10.png"},
  {url: "./screenshot1.png"},
  {url: "./screenshot2.png"},
  {url: "./screenshot3.png"},
  {url: "./screenshot4.png"},
  {url: "./screenshot5.png"},
  {url: "./screenshot6.png"},
  {url: "./screenshot7.png"},
]

const images2 = [
  {url: "./sta1.png"},
  {url: "./sta2.png"},
  {url: "./sta3.png"},
  {url: "./sta4.png"},
  {url: "./sta5.png"},
]

const Slider = ({images}) => {
  return (
    <div style={{alignSelf:"center", width: "100%"}}>
      <SimpleImageSlider
        width={168*2}
        height={296*2}
        images={images}
        showNavs={true}
        showBullets={true}
      />
    </div>
  );
}

const Snippet = styled.div`
  font-family: 'Roboto Mono', monospace;
  width: 100%;
  background-color: #222831;
  padding: 10px;
  border-radius: 10px;
  font-size: medium;
  margin-top: 10px;
`
const GreenText = styled.span`
  color: #22D6B7;
`
const WhiteText = styled.span`
  color: #ededed;
`
const StringText = styled.span`
  color: #51FFA6;
`
function Tab() {
  return(<>&nbsp;&nbsp;&nbsp;&nbsp;</>)
}
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="contents">
          <header>
            <h2>반갑습니다! 신입 개발자 남세현을 소개합니다.</h2>
            <span className="text">Front-End 파트 지원 포트폴리오</span>
          </header>
          <div style={{
            display: "flex",
            flexDirection: "row"
          }}>
            <div style={{flex:1, marginRight: "30px"}}>
              <Title title={".intro"}/>
              <p className="small-text">안녕하세요! 딥러닝 연구생에서 프론트엔드로 전향하여 전문가를 목표로 성장하고있는 남세현입니다.</p>
              <div className="sub-title">FE 개발자가 되기로 한 이유는?</div>
              <p className="small-text">3학년 겨울방학 시기에 외주 프로젝트로 FE파트를 맡게 되었는데, 이전에는 느껴보지 못한 개발의 열정과 몰입감을 경험하게 되었습니다. 스스로 정말 하고싶고 좋아하는 일이 뭔지 깊이 생각해보는 계기가 되었고, 이후 이 분야를 제대로 해보기로 결심하게 되었습니다.</p>
              <div className="sub-title">본인의 장점이 뭔가요?</div>
              <p className="small-text">책임감과 소통능력입니다. 어떤 일을 맡게 되었을 때 기한 안에 문제없이 끝내는 것을 무엇보다도 중요시여깁니다. 첫 외주작업 때 약 2주정도만에 자바스크립트를 배우고 개발을 끝내야 하는 상황이었지만 연장을 요청드리기보다는 밤낮없이 공부해서 기간안에 끝냈던 기억이 있습니다. <b>주어진 것 그 이상으로 해내자</b>가 좌우명입니다.</p>
              <p className="small-text">또한 여러 사람의 의견을 잘 듣고 설득할 수 있습니다. 개발과는 무관하지만 연합밴드동아리에서 회장을 해왔습니다. 합주를 하는 특성상 파트별로 여러가지 갈등이 생기는데 여러 입장을 듣고 이해하여 팀의 분위기를 만들어갔던 것은 값진 경험이었습니다.</p>
            </div>
            <div style={{flex:1}}>
              <Title title={".personal"}/>
              <div className="personal-infos">
                <div className="personal-info-item">
                  <span className="sub-title">이름/생년월일</span>
                  <span className="small-text"> 남세현 1995.11.25</span>
                </div>
                <div className="personal-info-item">
                  <span className="sub-title">최종학력</span>
                  <span className="small-text"> 홍익대학교 컴퓨터공학과 4학년</span>
                </div>
                <div className="personal-info-item">
                  <span className="sub-title">성적</span>
                  <span className="small-text"> <span className="tag">전체</span> 3.80/4.5 <span className="tag">전공</span> 4.01/4.5</span>
                </div>                 
                <div className="personal-info-item">
                  <span className="sub-title">어학</span>
                  <span className="small-text"> <b>OPIc</b> IH  <b>JLPT</b> 3급</span>
                </div>               
                <div className="personal-info-item">
                  <span className="sub-title">활동</span>
                  <span className="small-text"> <span className="tag">2019.12-2021.02</span> 교내 인공지능 연구실 PEM에서 학부연구생으로 실험 및 논문 활동</span>
                </div>       
              </div>
            </div>
          </div>
          <Title title={".project"} tag={"진행중"}/>
          <div style={{display:"flex", flexDirection:'row'}}>
            <div style={{flex:2, marginRight:"30px"}}>
              <ul className="project">
                <li>
                  <span className="sub-title">주제</span>
                  <span className="small-text"> 인생글귀</span>
                </li>
                <li>
                  <span className="sub-title">팀 구성</span>
                  <span className="small-text"> 2명 (백엔드+프론트엔드)</span>
                </li>
                <li>
                  <span className="sub-title">개발기간</span>
                  <span className="small-text"> 2021.3~2021.6</span>
                </li>
                <li>
                  <span className="sub-title">개요</span>
                  <span className="small-text"> 명언 추천 및 공유 플랫폼 개발. 딥러닝을 기반으로 사용자가 관심가질만한 명언을 추천하고 사람들이 발굴한 다양한 명언을 공유하는 플랫폼을 개발하고 있습니다.</span>
                </li>
                <li>
                  <span className="sub-title">기술스택</span>
                  <Snippet>
                    <GreenText>const</GreenText> <WhiteText>techUsed</WhiteText> <GreenText>=</GreenText> <WhiteText>{'{\n'}</WhiteText><br/>
                    <StringText><Tab/>"platform": </StringText><WhiteText>[ web, Android, iOS ],</WhiteText><br/>
                    <StringText><Tab/>"language": </StringText><WhiteText>javascript,</WhiteText><br/>
                    <StringText><Tab/>"framework": </StringText><WhiteText>[ React, ReactNative ],</WhiteText><br/>
                    <StringText><Tab/>"network": </StringText><WhiteText>[ ApolloClient, GraphQL ],</WhiteText><br/>
                    <StringText><Tab/>"stateManagement": </StringText><WhiteText>[ Hooks, ApolloCache]</WhiteText><br/>
                    <WhiteText>{'}'}</WhiteText>
                  </Snippet>
                </li>
                <li>
                  <span className="sub-title">기여</span>
                  <span className="small-text"> 기획 및 디자인, 프론트엔드(웹,앱), 딥러닝 모델 테스팅</span>
                </li>
                <li>
                  <span className="sub-title">느낀점</span>
                  <span className="small-text"> 처음 리액트를 써볼 때는 구현에 급급하여 정신없는 코드를 작성했지만, 현재는 컴포넌트 재사용성과 클린코드를 많이 고민하며 프로젝트에 임하고 있습니다. 아직 많이 부족하지만, 다른 사람의 코드를 참고하며 배워나갑니다.</span>
                </li>
              </ul>
            </div>
            <div style={{flex:1, justifyContent:"center", alignItems:"center", borderWidth:"1px"}}>
              <span className="sub-title">스크린샷</span>
              <Slider images={images}/>
            </div>
          </div>
          
          <Title title={".project"} tag={"완료"}/>
          <div style={{display:"flex", flexDirection:'row'}}>
            <div style={{flex:2, marginRight:"30px"}}>
              <ul className="project">
                <li>
                  <span className="sub-title">주제</span>
                  <span className="small-text"> 서울과학기술대학교 학교생활 도우미 어플리케이션 제작</span>
                </li>
                <li>
                  <span className="sub-title">팀 구성</span>
                  <span className="small-text"> 3명 (백엔드 1명 + 프론트엔드 2명)</span>
                </li>
                <li>
                  <span className="sub-title">개발기간</span>
                  <span className="small-text"> 2021.1~2021.2</span>
                </li>
                <li>
                  <span className="sub-title">개요</span>
                  <span className="small-text"> 서울과학기술대학교 미래융합대학의 시간표 등록, 편집, 수업 알림 등의 일정관리 기능과 학생들과 학교 간 소통을 위한 커뮤니티 기능을 포함하는 종합 어플리케이션</span>
                </li>
                <li>
                  <span className="sub-title">기술스택</span>
                  <Snippet>
                    <GreenText>const</GreenText> <WhiteText>techUsed</WhiteText> <GreenText>=</GreenText> <WhiteText>{'{\n'}</WhiteText><br/>
                    <StringText><Tab/>"platform": </StringText><WhiteText>[ Android, iOS ],</WhiteText><br/>
                    <StringText><Tab/>"language": </StringText><WhiteText>javascript,</WhiteText><br/>
                    <StringText><Tab/>"framework": </StringText><WhiteText>[ React, ReactNative ],</WhiteText><br/>
                    <StringText><Tab/>"network": </StringText><WhiteText>[ ApolloClient, GraphQL ],</WhiteText><br/>
                    <StringText><Tab/>"stateManagement": </StringText><WhiteText>[ Hooks, ApolloCache]</WhiteText><br/>
                    <WhiteText>{'}'}</WhiteText>
                  </Snippet>
                </li>
                <li>
                  <span className="sub-title">기여</span>
                  <span className="small-text"> 인증 폼과 더불어 수업검색, 등록, 삭제 및 시간표 생성 및 변경, 푸시알림 설정과 ICS 스케쥴 연동기능 구현.</span>
                </li>
                <li>
                  <span className="sub-title">느낀점</span>
                  <span className="small-text"> 첫 자바스크립트 프로젝트라 정신없이 진행되었지만, 개발의 즐거움을 느끼게 된 시간이었습니다. 새로운 기술과 지식을 두려워하지 않는 태도가 중요했던 것 같습니다.</span>
                </li>
              </ul>
            </div>
            <div style={{flex:1, justifyContent:"center", alignItems:"center", borderWidth:"1px"}}>
              <span className="sub-title">스크린샷</span>
              <Slider images={images2}/>
            </div>
          </div>
          <Title title={".paper"} tag={"수상경력"}/>
          <div style={{display:"flex", flexDirection:'row'}}>
            <div style={{flex:2, marginRight:"30px"}}>
              <ul className="project">
                <li>
                  <span className="sub-title">주제</span>
                  <span className="small-text"> Improving Trajectory Pattern Prediction Model Using Bayesian Optimization(베이지안최적화를 이용한 이동경로예측 모델의 성능 개선)</span>
                </li>
                <li>
                  <span className="sub-title">개요</span>
                  <span className="small-text"> 딥러닝 모델의 하이퍼파라미터 자동 탐색을 통해 예측 모델의 성능을 개선하는 법을 연구</span>
                </li>
                <li>
                  <span className="sub-title">성과</span>
                  <span className="small-text"> 한국정보처리학회 학술대회 은상 수상</span>
                </li>
                <li>
                  <span className="sub-title">주요 기술</span>
                  <Snippet>
                    <GreenText>const</GreenText> <WhiteText>techUsed</WhiteText> <GreenText>=</GreenText> <WhiteText>{'{\n'}</WhiteText><br/>
                    <StringText><Tab/>"language": </StringText><WhiteText>python,</WhiteText><br/>
                    <StringText><Tab/>"framework": </StringText><WhiteText>pytorch,</WhiteText><br/>
                    <StringText><Tab/>"data": </StringText><WhiteText>microsoft_geolife</WhiteText><br/>
                    <WhiteText>{'}'}</WhiteText>
                  </Snippet>
                </li>
                <li>
                  <span className="sub-title">느낀점</span>
                  <span className="small-text"> 비록 제가 지원하는 직무(Front-End)와 직접적으로 연관된 경험은 아니지만, 인공지능 분야의 연구를 하면서 개발자로서의 역량이 크게 발전했음을 느꼈습니다. 다양한 디버깅 경험과 새로운 지식에 대한 접근법 및 구현력을 업그레이드했던 경험은 저의 프론트엔드 프로젝트를 진행할 때도 큰 도움이 되었습니다.</span>
                </li>
                <li>
                  <span className="sub-title">논문링크</span>
                  <a className="small-text" href="https://drive.google.com/file/d/1t1luMcqzNXsqjBazC1Q0CZrG_2n413cs/view?usp=sharing"> 다운로드</a>
                </li>
              </ul>
            </div>
            <div style={{flex:1, justifyContent:"center", alignItems:"center", borderWidth:"1px"}}>
              <img src="award.jpeg" width={300} height={400} alt="award"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
