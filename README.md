# 🛒 이커머스 서비스

> Next.js 15 + React 19 + Firebase 이커머스 웹 애플리케이션

## 🚀 시작하기

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

[http://localhost:3000](http://localhost:3000)에서 확인

## 🛠️ 기술 스택

### 🔋 Core
- **Next.js 15.3.4** - React 프레임워크
- **React 19** - UI 라이브러리 
- **TypeScript** - 타입 안정성 (선택적)

### 🎨 스타일링
- **Sass** - CSS 전처리기
- **CSS Modules** - 스타일 모듈화

### 🗃️ 상태 관리
- **Redux Toolkit** - 전역 상태 관리
- **React Redux** - React와 Redux 연결

### 🔥 백엔드 & 인증
- **Firebase Auth** - 사용자 인증
- **Firestore** - NoSQL 데이터베이스
- **Firebase Storage** - 파일 저장소

### 💳 결제 & 이메일
- **Toss Payments** - 결제 시스템
- **EmailJS** - 이메일 발송

### 📊 UI 라이브러리
- **React Spinners** - 로딩 스피너
- **React Chart.js 2** - 차트 컴포넌트
- **React Toastify** - 토스트 알림
- **Notiflix** - 알림 시스템
- **React Simple Star Rating** - 별점 시스템

## 📁 프로젝트 구조

```
src/
├── app/
│   ├── (auth)/            # 인증 관련 (그룹핑)
│   │   ├── login/         # 로그인
│   │   ├── register/      # 회원가입
│   │   └── reset/         # 비밀번호 변경
│   ├── (checkout)/        # 결제 관련 (그룹핑)
│   │   ├── cart/          # 장바구니에 넣은 상품 계산
│   │   ├── shipping/      # 배송 주소
│   │   └── success/       # 주문 성공
│   ├── (home)/            # 홈 관련 (그룹핑)
│   ├── (order)/           # 주문 관련 (그룹핑)
│   │   ├── order-history/ # 주문 내역
│   │   └── order-details/ # 주문 상세 (예: order-details/2)
│   ├── admin/             # 관리자 패널 라우트
│   │   ├── dashboard/     # 대시보드 (상품 생성 현황 차트)
│   │   ├── all-products/  # 모든 상품 목록
│   │   ├── add-product/   # 상품 추가
│   │   ├── edit-product/  # 상품 수정 (예: admin/edit-product/2)
│   │   ├── orders/        # 주문 목록
│   │   └── order-details/ # 주문 상세 (예: admin/order-details/2)
│   ├── cart/              # 장바구니
│   ├── contact/           # 문의하기
│   ├── product-details/   # 상품 상세 (예: product-details/2)
│   └── review-product/    # 상품 리뷰 (예: review-product/2)
├── 🧩 components/            # 재사용 컴포넌트
├── 🎨 layouts/               # 레이아웃 컴포넌트
├── 🪝 hooks/                 # 커스텀 훅
├── 🗃️ redux/                 # 상태 관리
├── 🛠️ utils/                 # 유틸리티
├── 🔥 firebase/              # Firebase 설정
└── 📎 assets/                # 정적 자산
```
---
### 🧩 컴포넌트

#### UI 컴포넌트
| 컴포넌트 | 설명 | 비고 |
|---------|------|------|
| **Button** | 버튼 컴포넌트 | primary/secondary 스타일, 색상/크기 커스터마이징 |
| **Input** | 입력 필드 컴포넌트 | 이메일(email)/패스워드(password)/텍스트 |
| **Checkbox** | 체크박스 컴포넌트 |
| **Heading** | 제목 컴포넌트 |
| **Divider** | 구분선 컴포넌트 | 간격(space), 색상(color) 커스터마이징 |
| **Loader** | 로딩 스피너 컴포넌트 | 전체화면/기본(basic) |
| **Tooltip** | 툴팁 컴포넌트 | 4방향 위치(top/right/bottom/left), 색상 커스터마이징 |

#### 아이콘 & 비주얼 컴포넌트
| 컴포넌트 | 설명 |
|---------|------|
| **Icon** | 아이콘 컴포넌트 |
| **IconInput** | 아이콘 포함 입력 컴포넌트 |
| **Slider** | 슬라이더 컴포넌트 |
| **Chart** | 차트 컴포넌트 |

#### 폼 & 입력 컴포넌트
| 컴포넌트 | 설명 | 비고 |
|---------|------|------|
| **AutoSignInCheckbox** | 자동 로그인 체크박스 | 체크 시 자동 툴팁 표시, 레이블/메시지 커스터마이징 |
| **InfoBox** | 정보 표시 박스 |

#### 이커머스 컴포넌트
| 컴포넌트 | 설명 |
|---------|------|
| **Product** | 상품 표시 컴포넌트 |
| **CheckoutForm** | 결제 폼 컴포넌트 |
| **CheckoutSummary** | 결제 요약 컴포넌트 |
| **ChangeOrderStatus** | 주문 상태 변경 컴포넌트 |

#### 네비게이션 & 레이아웃
| 컴포넌트 | 설명 |
|---------|------|
| **Pagination** | 페이지네이션 컴포넌트 |

#### 프로바이더 컴포넌트
| 컴포넌트 | 설명 | 비고 |
|---------|------|------|
| **ToastProvider** | 토스트 알림 제공자 | react-toastify 사용, 2초 후 자동 닫힘 |

---

### 🎨 레이아웃
| 컴포넌트 | 설명 |
|---------|------|
| **Header** | 메인 헤더 컴포넌트 |
| **InnerHeader** | 내부 페이지용 헤더 |
| **Navbar** | 네비게이션 바 |
| **Footer** | 푸터 컴포넌트 |

---

### 🪝 커스텀 훅
| 훅 | 설명 |
|-----|------|
| **useFetchCollection** | Firebase 컬렉션 데이터 조회 |
| **useFetchDocument** | Firebase 단일 문서 조회 |
| **useFetchDocuments** | Firebase 다중 문서 조회 |

---

### 🗃️ Redux 상태 관리

#### 스토어 설정
| 파일 | 설명 |
|------|------|
| **store.js** | Redux 스토어 설정 및 미들웨어 |
| **provider.js** | Redux Provider 컴포넌트 |

#### 상태 슬라이스
| 슬라이스 | 설명 |
|---------|------|
| **authSlice** | 사용자 인증 상태 (로그인/로그아웃) |
| **cartSlice** | 장바구니 상태 (상품 추가/제거/수량) |
| **checkoutSlice** | 결제 프로세스 (배송/결제 정보) |
| **filterSlice** | 상품 필터링 (카테고리/가격/검색) |
| **orderSlice** | 주문 관련 상태 (목록/상세) |
| **productSlice** | 상품 관련 상태 (목록/상세) |
---
### 🛠️ 유틸리티

| 파일 | 설명 |
|------|------|
| **dayjs.js** | 날짜 및 시간 처리 |
| **priceFormat.js** | 가격 포맷팅 (통화 표시, 천 단위 구분) |
---
### 🔥 Firebase 백엔드

| 서비스 | 설명 |
|--------|------|
| **Authentication** | 사용자 인증 및 로그인 |
| **Firestore Database** | NoSQL 데이터베이스 |
| **Storage** | 파일 저장소 (이미지 등) |

## 📋 주요 의존성

```json
{
  "dependencies": {
    "@emailjs/browser": "^4.4.1",
    "@reduxjs/toolkit": "^2.8.2", 
    "@tosspayments/payment-sdk": "^1.9.1",
    "classnames": "^2.5.1",
    "firebase": "^11.10.0",
    "next": "15.3.4",
    "notiflix": "^3.2.8",
    "react": "^19.0.0",
    "react-chartjs-2": "^5.3.0",
    "react-dom": "^19.0.0",
    "react-redux": "^9.2.0",
    "react-simple-star-rating": "^5.1.7",
    "react-spinners": "^0.17.0",
    "react-toastify": "^11.0.5",
    "sass": "^1.89.2"
  }
}
```

## 🎯 주요 기능
- **Next.js 15 App Router** - 최신 라우팅 시스템
- **React 19** - 최신 React 기능 활용
- **관리자/사용자 페이지** - 역할 기반 접근 제어
- **Redux Toolkit** - 효율적인 전역 상태 관리
- **Firebase** - 인증, 데이터베이스, 스토리지
- **Toss Payments** - 안전한 결제 시스템
- **실시간 알림** - 토스트 및 팝업 알림
- **반응형 디자인** - 모든 디바이스 지원
