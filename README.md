# 광주인공지능사관학교 최종 프로젝트
<h2><strong>Key</strong>득<strong>Key</strong>득</h2>

![메인화면](https://user-images.githubusercontent.com/109400761/216765185-712a414b-ca44-4792-9a1d-f54888cb1d5a.png)

<h3>키워드 기반 직장인 서류정리 서비스</h3>
<p>직장인들이 다루는 서류들 속에서, 원하는 키워드를 찾아낼 수 있도록 제작된 데스크톱 어플리케이션입니다.</p>
<p>사용기술:Vue.js Node.js, MongoDB, Flask, PaddleOCR, Yolov5 등<p/>

# 화면구성 및 서비스 흐름도
![서비스흐름도](https://user-images.githubusercontent.com/109400761/216766102-21c470b7-4609-4fa4-b5dc-a43812e4463a.png)
<pre>
1.회원가입 후 로그인을 통해 키득키득 프로그램을 시작할 수 있다.

- 메인화면에는 크게 Drog&Drop 기능이 제공되는 File-Upload박스와 당일 로그를 간단하게 보여주는 Log-Box로 구성되어 있다.

2. 어드민계정으로 로그인할 시, 사원 정보를 관리할 수 있는 사원관리 페이지가 추가로 생성되며, 일반 계정으로 로그인할 시 
   메인화면을 통해 파일을 업로드 하게 된다면 키워드를 서치할 수 있는 페이지로 자동 이동하게 된다.
   
- 서치페이지는 크게, 사용자가 선택할 수 있는 KeyWord 선택박스와 키워드에 대한 내용들을 추려볼 수 있는 확인창으로 구성되어 있다.
  
3. 아쉽게도 CSV파일 저장 기능까지는 구현하지 못하였다.
</pre>

# 시스템&아키텍처
![시스템아키텍처](https://user-images.githubusercontent.com/109400761/216766692-accb0e38-3383-4be2-ac20-3fa21b826037.png)


# UI-UX
![로그인](https://user-images.githubusercontent.com/109400761/216767565-c8a8e70e-3501-4369-9f6c-1daa4858e721.gif) 
![사원관리](https://user-images.githubusercontent.com/109400761/216767773-f8c3aef3-ceb8-4dc7-bb10-3a4ff4ec7a51.gif)
![파일업로드](https://user-images.githubusercontent.com/109400761/216767971-a00ea8d1-a61b-45c4-ac75-fb5029ba819c.gif)
<pre>1. 선택한 뒤 파일을 골라서 업로드도 가능하지만, Drog&Drop 기능도 구현되어 있는 상태.</pre>
![UI2](https://user-images.githubusercontent.com/109400761/216768097-7b342faa-627c-44c9-affd-8c7caea895ab.png)
<p>파일을 업로드 한 뒤 서비스 흐름도의 과정을 거쳐 위와 같은 화면의 결과창으로 이동되며 사용자가 키워드를 입력한 뒤 키워드값에 따른 내용을 확인할 수 있음.</p>


# Team Member
<pre>
팀장 고경훈(Back-End)
부팀장 김가윤(Front-End)
팀원 김청래(Front-End)
     장 건(Back-End)
     하영진(Front-End)
</pre>
