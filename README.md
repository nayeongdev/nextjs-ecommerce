# 이커머스 서비스 (Next.js)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

### `/src` Directory Structure

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
├── components/           # 재사용 가능한 컴포넌트
│   ├── autoSignInCheckbox/ # 자동 로그인 체크박스
│   ├── button/             # 버튼 컴포넌트
│   ├── chart/              # 차트 컴포넌트
│   ├── changeOrderStatus/  # 주문 상태 변경
│   ├── checkbox/           # 체크박스 컴포넌트
│   ├── checkoutForm/       # 결제 폼
│   ├── checkoutSummary/    # 결제 요약
│   ├── divider/            # 구분선 컴포넌트
│   ├── heading/            # 제목 컴포넌트
│   ├── icon/               # 아이콘 컴포넌트
│   ├── iconInput/          # 아이콘 입력 컴포넌트
│   ├── infoBox/            # 정보 박스 컴포넌트
│   ├── input/              # 입력 컴포넌트
│   ├── loader/             # 로딩 컴포넌트
│   ├── pagination/         # 페이지네이션 컴포넌트
│   ├── product/            # 상품 컴포넌트
│   ├── slider/             # 슬라이더 컴포넌트
│   ├── toastProvider/      # 토스트 알림 제공자
│   └── tooltip/            # 툴팁 컴포넌트
├── hooks/                # 커스텀 React 훅
├── redux/                # Redux 스토어 및 슬라이스
├── utils/                # 유틸리티 함수
├── firebase/             # Firebase 설정
└── assets/               # 정적 자산
```

### Components

#### UI Components
- **Button** - 버튼 컴포넌트
- **Input** - 입력 필드 컴포넌트
- **Checkbox** - 체크박스 컴포넌트
- **Heading** - 제목 컴포넌트
- **Divider** - 구분선 컴포넌트
- **Loader** - 로딩 스피너 컴포넌트
- **Tooltip** - 툴팁 컴포넌트

#### Icon & Visual Components
- **Icon** - 아이콘 컴포넌트
- **IconInput** - 아이콘이 포함된 입력 컴포넌트
- **Slider** - 슬라이더 컴포넌트
- **Chart** - 차트 컴포넌트

#### Form & Input Components
- **AutoSignInCheckbox** - 자동 로그인 체크박스
- **InfoBox** - 정보 표시 박스 컴포넌트

#### E-commerce Components
- **Product** - 상품 표시 컴포넌트
- **CheckoutForm** - 결제 폼 컴포넌트
- **CheckoutSummary** - 결제 요약 컴포넌트
- **ChangeOrderStatus** - 주문 상태 변경 컴포넌트

#### Navigation & Layout Components
- **Pagination** - 페이지네이션 컴포넌트

#### Provider Components
- **ToastProvider** - 토스트 알림 제공자 컴포넌트

### Features
- Next.js 14 App Router
- 관리자/사용자 페이지
- Redux
- Firebase
