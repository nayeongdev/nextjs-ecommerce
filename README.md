# 🛒 이커머스 서비스

> Next.js 14 + Firebase 이커머스 웹 애플리케이션

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
| 컴포넌트 | 설명 |
|---------|------|
| **Button** | 버튼 컴포넌트 |
| **Input** | 입력 필드 컴포넌트 |
| **Checkbox** | 체크박스 컴포넌트 |
| **Heading** | 제목 컴포넌트 |
| **Divider** | 구분선 컴포넌트 |
| **Loader** | 로딩 스피너 컴포넌트 |
| **Tooltip** | 툴팁 컴포넌트 |

#### 아이콘 & 비주얼 컴포넌트
| 컴포넌트 | 설명 |
|---------|------|
| **Icon** | 아이콘 컴포넌트 |
| **IconInput** | 아이콘 포함 입력 컴포넌트 |
| **Slider** | 슬라이더 컴포넌트 |
| **Chart** | 차트 컴포넌트 |
#### 폼 & 입력 컴포넌트
| 컴포넌트 | 설명 |
|---------|------|
| **AutoSignInCheckbox** | 자동 로그인 체크박스 |
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
| 컴포넌트 | 설명 |
|---------|------|
| **ToastProvider** | 토스트 알림 제공자 |
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

## 주요 기능
- Next.js 14 App Router
- 관리자/사용자 페이지
- Redux - 전역 상태 관리
- Firebase - 인증, 데이터베이스, 스토리지
