let selectedPetType = "";
let selectedPetColor = "";
let selectedFavoriteFood = "";

// 애완동물 종류 선택 시 색상 버튼 섹션을 표시
document.querySelectorAll('.petTypeButton').forEach(button => {
    button.addEventListener('click', function() {
        selectedPetType = this.getAttribute('data-type');
        document.getElementById('petTypeSection').style.display = 'none'; // 현재 섹션 숨기기

        // 색상 선택 섹션을 항상 표시
        document.getElementById('petColorSection').style.display = 'block';
    });
});

// 색상 선택 시 음식 버튼 섹션을 표시
document.querySelectorAll('.petColorButton').forEach(button => {
    button.addEventListener('click', function() {
        selectedPetColor = this.getAttribute('data-color');
        document.getElementById('petColorSection').style.display = 'none';
        document.getElementById('favoriteFoodSection').style.display = 'block'; // 음식 선택 섹션 표시
    });
});

// 음식 선택 시 이름 생성 버튼을 표시
document.querySelectorAll('.favoriteFoodButton').forEach(button => {
    button.addEventListener('click', function() {
        selectedFavoriteFood = this.getAttribute('data-food');
        document.getElementById('favoriteFoodSection').style.display = 'none';
        document.getElementById('generateName').style.display = 'block'; // 이름 생성 버튼 표시
    });
});

// 이름 생성 버튼 클릭 시 하나의 이름만 생성
document.getElementById('generateName').addEventListener('click', function() {
    // 모든 항목이 선택되지 않으면 이름 생성을 막고 메시지 출력
    if (!selectedPetType || !selectedPetColor || !selectedFavoriteFood) {
        document.getElementById('petName').textContent = "모든 항목을 선택해주세요.";
        return;  // 이름 생성을 중단
    }

    const names = {
        dog: {
            green: { 
                fruit: ['모래', '거봉이', '노바', '로이', '율무'],
                snack: ['포카리', '우동이', '베니', '비누', '리코'],
                vegetable: ['보리', '땅콩이', '앙꼬', '양배추', '오이']
            },
            red: { 
                fruit: ['딸기', '토리', '개리', '체리', '보리'],
                snack: ['홍시', '우디', '하리보', '철수', '구름이'],
                vegetable: ['비트', '소라', '코미', '탱글이', '다롱이']
            },
            yellow: { 
                fruit: ['(바)나나', '비비', '뭉뭉이', '두부', '황금사과'],
                snack: ['엘리자베스', '집순이', '거봉이', '리코', '도리'],
                vegetable: ['콩순이', '후추', '제이', '마늘이', '영희']
            }
        },
        cat: {
            green: { 
                fruit: ['우디', '찰떡이', '페르소나', '라나', '몽실이'],
                snack: ['꼼이', '소이', '베이', '리나', '캔디'],
                vegetable: ['배추', '콜리', '당근이', '로메인', '상추']
            },
            red: { 
                fruit: ['체리', '망고', '하루', '딸기', '사랑이'],
                snack: ['신짱', '뽀뽀(또)', '식빵이', '감자', '마카롱'],
                vegetable: ['구아바', '절미', '시우', '식빵', '영배']
            },
            yellow: { 
                fruit: ['우니', '망치', '땅콩이', '로로', '흑임자'],
                snack: ['달고나', '카스테라', '인절미', '로셰', '아리'],
                vegetable: ['시럽이', '수박이', '배추', '아리', '군밤이']
            }
        },
        turtle: {
            green: { 
                fruit: ['(아보)(카도)', '치커리', '쌀이', '라임', '키위'],
                snack: ['(참)(쌀)', '녹차쿠키', '새싹', '초록마카롱', '초록빵'],
                vegetable: ['샐샐(러리)', '새봄이', '밥이', '상추', '브로콜리']
            },
            red: { 
                fruit: ['거거', '빨간사과', '체리', '찹쌀이', '수박'],
                snack: ['(초코)(파이)', '체리파이', '크림이', '구슬이', '젤리'],
                vegetable: ['사과', '토마토', '나', '피망', '고구마']
            },
            yellow: { 
                fruit: ['북북', '계란', '봄이', '망고', '귤이'],
                snack: ['계라니(과자)', '황금쿠키', '애플파이', '파인애플캔디', '바나나킥'],
                vegetable: ['고구마', '파프리카', '양파', '옥수수', '호박']
            }
        }
    };

    // 선택된 항목에 해당하는 이름들 배열을 가져옴
    const petNames = names[selectedPetType]?.[selectedPetColor]?.[selectedFavoriteFood];

    // 이름이 존재하면 랜덤으로 하나의 이름 생성
    if (petNames && petNames.length > 0) {
        let randomName = petNames[Math.floor(Math.random() * petNames.length)];
        document.getElementById('petName').textContent = `추천 이름: ${randomName}`;
    } else {
        document.getElementById('petName').textContent = "이름을 생성할 수 없습니다. 다시 선택해 주세요.";
    }

    // 뒤로가기 버튼 표시
    document.getElementById('generateName').style.display = 'none';
    document.getElementById('backButton').style.display = 'block';
});

// 뒤로가기 버튼 클릭 시 첫 화면으로 돌아감
document.getElementById('backButton').addEventListener('click', function() {
    document.getElementById('petTypeSection').style.display = 'block';
    document.getElementById('petColorSection').style.display = 'none';
    document.getElementById('favoriteFoodSection').style.display = 'none';
    document.getElementById('generateName').style.display = 'none';
    document.getElementById('backButton').style.display = 'none';
    document.getElementById('petName').textContent = ""; // 이름 초기화
});
