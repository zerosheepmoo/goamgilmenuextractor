/**
 * KR: 한글, EN: 영어
 * delivery: 배달가능메뉴
 * isEvent: 행사중
 * isTheBest: 인기상품
 * naverNotActivated: 네이버 스마트주문에서 활성화되지 않음.
 * naverNotIncluded: 네이버 스마트주문에 포함되지 않음,
 * notForPacking: 포장주문에 포함되지 않음
 * packing: 포장비
 * soldOut: 품절
 * takeOutOnly: 매장주문에 포함되지않음
 * 
 */
/**
 * delivery로 나갈경우 컵선택은 제외된다.
 */

let data = {
    beverage: {
        // 커피
        coffee: {
            // 가게 내 메뉴화면 컬럼에 보여지는 글자
            template: {
                KR: '커피',
                EN: 'COFFEE'
            },
            delivery: true,
            // 해당 메뉴아이템들
            items: [
                {
                    name: {
                        KR: '에스프레소',
                        EN: 'Espresso'
                    },
                    price: {
                        hot: 2500,
                    },
                    menuOptions: {
                        extra: [
                            {
                                KR: '에스프레소 샷 추가',
                                EN: 'Add Espresso Shot',
                                price: 500
                            }
                        ],
                        cup: [
                            {
                                KR: '에스프레소 잔',
                                EN: 'Espresso Cup'
                            },
                            {
                                KR: '일회용 용가',
                                EN: 'Disposable Cup'
                            }
                        ]
                    },
                    picture: {
                        hot: true
                    },
                    detials: '고암길 카페만의 독자적인 블랜딩 원두를 고압으로 추출한 에스프레소로, 마실 때 향을 먼저 맡고 크레마를 맛본후 드세요. 설탕을 넣고 젓지 말고 드시면, 진한 쓴맛 후 점차 달달한 맛을 느낄 수 있습니다.',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '아메리카노',
                        EN: 'Americano'
                    },
                    price: {
                        hot: 2900,
                        ice: 3400
                    },
                    menuOptions: {
                        extra: [
                            {
                                KR: '에스프레소 샷 추가',
                                EN: 'Add Espresso Shot',
                                price: 500
                            },
                            {
                                KR: '바닐라 샷 추가',
                                EN: 'Add Vanilla Shot',
                                price: 500
                            },
                            {
                                KR: '헤이즐넛 샷 추가',
                                EN: 'Add Hazelnut Shot',
                                price: 500
                            },
                        ],
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000
                    },
                    picture: {
                        hot: true,
                        ice: true
                    },
                    details: '',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '착한 아아(1L)',
                        EN: 'Charming Ame'
                    },
                    price: {
                        ice: 3500
                    },
                    menuOptions: {
                        extra: [
                            {
                                KR: '에스프레소 샷 추가',
                                EN: 'Add Espresso Shot',
                                price: 500
                            },
                            {
                                KR: '바닐라 샷 추가',
                                EN: 'Add Vanilla Shot',
                                price: 500
                            },
                            {
                                KR: '헤이즐넛 샷 추가',
                                EN: 'Add Hazelnut Shot',
                                price: 500
                            },
                        ],
                    },
                    takeOutOnly: true,
                    picture: {
                        ice: true
                    },
                    details: '',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '아메리카노 (s)',
                        EN: 'Americano Small'
                    },
                    price: {
                        hot: 1900,
                        ice: 2200,
                    },
                    menuOptions: {
                        extra: [
                            {
                                KR: '에스프레소 샷 추가',
                                EN: 'Add Espresso Shot',
                                price: 500
                            },
                            {
                                KR: '바닐라 샷 추가',
                                EN: 'Add Vanilla Shot',
                                price: 500
                            },
                            {
                                KR: '헤이즐넛 샷 추가',
                                EN: 'Add Hazelnut Shot',
                                price: 500
                            },
                        ],
                    },
                    takeOutOnly: true,
                    naverNotIncluded: true,
                    picture: {
                        hot: false,
                        ice: false
                    },
                    details: '',
                    status: {
                        isEvent: true
                    }
                },
                {
                    name: {
                        KR: '카페라떼',
                        EN: 'Cafe Latte'
                    },
                    price: {
                        hot: 3400,
                        ice: 3900
                    },
                    menuOptions: {
                        extra: [
                            {
                                KR: '에스프레소 샷 추가',
                                EN: 'Add Espresso Shot',
                                price: 500
                            },
                            {
                                KR: '바닐라 샷 추가',
                                EN: 'Add Vanilla Shot',
                                price: 500
                            },
                            {
                                KR: '헤이즐넛 샷 추가',
                                EN: 'Add Hazelnut Shot',
                                price: 500
                            },
                            {
                                KR: '우유 추가',
                                EN: 'Add Milk',
                                price: 500
                            },
                            {
                                KR: '화이트 펄 추가',
                                EN: 'Add White Perl',
                                price: 500
                            },
                            {
                                KR: '블랙 펄 추가',
                                EN: 'Add Black Perl',
                                price: 500
                            },
                        ],
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000
                    },
                    picture: {
                        hot: true,
                        ice: true
                    },
                    details: '',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '플랫화이트',
                        EN: 'Flat White'
                    },
                    price: {
                        hot: 3400,
                        ice: 3900
                    },
                    menuOptions: {
                        extra: [
                            {
                                KR: '에스프레소 샷 추가',
                                EN: 'Add Espresso Shot',
                                price: 500
                            },
                            {
                                KR: '바닐라 샷 추가',
                                EN: 'Add Vanilla Shot',
                                price: 500
                            },
                            {
                                KR: '헤이즐넛 샷 추가',
                                EN: 'Add Hazelnut Shot',
                                price: 500
                            },
                            {
                                KR: '우유 추가',
                                EN: 'Add Milk',
                                price: 500
                            },
                        ],
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000
                    },
                    picture: {
                        hot: false,
                        ice: true
                    },
                    details: '',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '달고나라떼',
                        EN: 'Dalgona Latte'
                    },
                    price: {
                        hot: 4400,
                        ice: 4900
                    },
                    menuOptions: {
                        extra: [
                            {
                                KR: '에스프레소 샷 추가',
                                EN: 'Add Espresso Shot',
                                price: 500
                            },
                            {
                                KR: '바닐라 샷 추가',
                                EN: 'Add Vanilla Shot',
                                price: 500
                            },
                            {
                                KR: '헤이즐넛 샷 추가',
                                EN: 'Add Hazelnut Shot',
                                price: 500
                            },
                            {
                                KR: '우유 추가',
                                EN: 'Add Milk',
                                price: 500
                            },
                            {
                                KR: '화이트 펄 추가',
                                EN: 'Add White Perl',
                                price: 500
                            },
                            {
                                KR: '블랙 펄 추가',
                                EN: 'Add Black Perl',
                                price: 500
                            },
                        ],
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000
                    },
                    picture: {
                        hot: false,
                        ice: true
                    },
                    details: '',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '바닐라라떼',
                        EN: 'Vanilla Latte'
                    },
                    price: {
                        hot: 3700,
                        ice: 4200
                    },
                    menuOptions: {
                        extra: [
                            {
                                KR: '에스프레소 샷 추가',
                                EN: 'Add Espresso Shot',
                                price: 500
                            },
                            {
                                KR: '바닐라 샷 추가',
                                EN: 'Add Vanilla Shot',
                                price: 500
                            },
                            {
                                KR: '우유 추가',
                                EN: 'Add Milk',
                                price: 500
                            },
                            {
                                KR: '화이트 펄 추가',
                                EN: 'Add White Perl',
                                price: 500
                            },
                            {
                                KR: '블랙 펄 추가',
                                EN: 'Add Black Perl',
                                price: 500
                            },
                        ],
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000
                    },
                    picture: {
                        hot: false,
                        ice: true
                    },
                    details: '',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '헤이즐넛라떼',
                        EN: 'Hazelnut Latte'
                    },
                    price: {
                        hot: 3700,
                        ice: 4200
                    },
                    menuOptions: {
                        extra: [
                            {
                                KR: '에스프레소 샷 추가',
                                EN: 'Add Espresso Shot',
                                price: 500
                            },
                            {
                                KR: '헤이즐넛 샷 추가',
                                EN: 'Add Hazelnut Shot',
                                price: 500
                            },
                            {
                                KR: '우유 추가',
                                EN: 'Add Milk',
                                price: 500
                            },
                            {
                                KR: '화이트 펄 추가',
                                EN: 'Add White Perl',
                                price: 500
                            },
                            {
                                KR: '블랙 펄 추가',
                                EN: 'Add Black Perl',
                                price: 500
                            },
                        ],
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000
                    },
                    picture: {
                        hot: true,
                        ice: false
                    },
                    details: '',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '돌체(연유) 라떼',
                        EN: 'Dolce Latte'
                    },
                    price: {
                        hot: 3700,
                        ice: 4200
                    },
                    menuOptions: {
                        extra: [
                            {
                                KR: '에스프레소 샷 추가',
                                EN: 'Add Espresso Shot',
                                price: 500
                            },
                            {
                                KR: '우유 추가',
                                EN: 'Add Milk',
                                price: 500
                            },
                            {
                                KR: '화이트 펄 추가',
                                EN: 'Add White Perl',
                                price: 500
                            },
                            {
                                KR: '블랙 펄 추가',
                                EN: 'Add Black Perl',
                                price: 500
                            },
                        ],
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000
                    },
                    picture: {
                        hot: false,
                        ice: false
                    },
                    details: '',
                    status: {
                        isTheBest: true
                    }
                },
                {
                    name: {
                        KR: '카푸치노',
                        EN: 'Cappucino'
                    },
                    price: {
                        hot: 3900,
                        ice: 4400
                    },
                    menuOptions: {
                        extra: [
                            {
                                KR: '에스프레소 샷 추가',
                                EN: 'Add Espresso Shot',
                                price: 500
                            },
                            {
                                KR: '우유 추가',
                                EN: 'Add Milk',
                                price: 500
                            },
                        ],
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000
                    },
                    picture: {
                        hot: true,
                        ice: true
                    },
                    details: '',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '카라멜마끼아또',
                        EN: 'Caramel Macchiato'
                    },
                    price: {
                        hot: 3900,
                        ice: 4400
                    },
                    menuOptions: {
                        extra: [
                            {
                                KR: '에스프레소 샷 추가',
                                EN: 'Add Espresso Shot',
                                price: 500
                            },
                            {
                                KR: '우유 추가',
                                EN: 'Add Milk',
                                price: 500
                            },
                        ],
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000
                    },
                    picture: {
                        hot: true,
                        ice: true
                    },
                    details: '',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '카페모카',
                        EN: 'Cafe Mocha'
                    },
                    price: {
                        hot: 3900,
                        ice: 4400
                    },
                    menuOptions: {
                        extra: [
                            {
                                KR: '에스프레소 샷 추가',
                                EN: 'Add Espresso Shot',
                                price: 500
                            },
                            {
                                KR: '우유 추가',
                                EN: 'Add Milk',
                                price: 500
                            },
                            {
                                KR: '화이트 펄 추가',
                                EN: 'Add White Perl',
                                price: 500
                            },
                            {
                                KR: '블랙 펄 추가',
                                EN: 'Add Black Perl',
                                price: 500
                            },
                        ],
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000
                    },
                    picture: {
                        hot: true,
                        ice: false
                    },
                    details: '',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '화이트초콜릿모카',
                        EN: 'White Chocolate Mocha'
                    },
                    price: {
                        hot: 3900,
                        ice: 4400
                    },
                    menuOptions: {
                        extra: [
                            {
                                KR: '에스프레소 샷 추가',
                                EN: 'Add Espresso Shot',
                                price: 500
                            },
                            {
                                KR: '우유 추가',
                                EN: 'Add Milk',
                                price: 500
                            },
                            {
                                KR: '화이트 펄 추가',
                                EN: 'Add White Perl',
                                price: 500
                            },
                            {
                                KR: '블랙 펄 추가',
                                EN: 'Add Black Perl',
                                price: 500
                            },
                        ],
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000
                    },
                    picture: {
                        hot: false,
                        ice: false
                    },
                    details: '',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '아인슈패너',
                        EN: 'Einspanner'
                    },
                    price: {
                        hot: 4400,
                        ice: 4400
                    },
                    menuOptions: {
                        extra: [
                            {
                                KR: '에스프레소 샷 추가',
                                EN: 'Add Espresso Shot',
                                price: 500
                            },
                            {
                                KR: '우유 추가',
                                EN: 'Add Milk',
                                price: 500
                            },
                        ],
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000
                    },
                    picture: {
                        hot: true,
                        ice: true
                    },
                    details: '',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '아포가토',
                        EN: 'Affogato'
                    },
                    price: {
                        ice: 5500
                    },
                    menuOptions: {
                        extra: [
                            {
                                KR: '에스프레소 샷 추가',
                                EN: 'Add Espresso Shot',
                                price: 500
                            },
                            {
                                KR: '카라멜 시럽 추가',
                                EN: 'Add Caramel Syrup',
                                price: 500
                            },
                            {
                                KR: '초콜릿 시럽 추가',
                                EN: 'Add Chocolate Syrup',
                                price: 500
                            },
                        ],
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                    },
                    picture: {
                        ice: false
                    },
                    details: '',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '핸드드립 커피',
                        EN: 'Handdrip Coffee'
                    },
                    price: {
                        hot: 3900,
                        ice: 4400
                    },
                    menuOptions: {
                        extra: [
                            {
                                KR: '바닐라 샷 추가',
                                EN: 'Add Vanilla Shot',
                                price: 500
                            },
                            {
                                KR: '헤이즐넛 샷 추가',
                                EN: 'Add Hazelnut Shot',
                                price: 500
                            },
                        ],
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000
                    },
                    picture: {
                        hot: true,
                        ice: false
                    },
                    details: '',
                    status: {
                        isEvent: true
                    }
                },
            ]
        },
        traditionalTea: {
            template: {
                KR: '전통차',
                EN: "Traditional Tea"
            },
            delivery: true,
            items: [
                {
                    name: {
                        KR: '유자차',
                        EN: 'Yuja Tea'
                    },
                    price: {
                        hot: 3800,
                        ice: 4300
                    },
                    menuOptions: {
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000,
                    },
                    picture: {
                        hot: false,
                        ice: false
                    },
                    detials: '',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '레몬차',
                        EN: 'Lemon Tea'
                    },
                    price: {
                        hot: 3800,
                        ice: 4300
                    },
                    menuOptions: {
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000,
                    },
                    picture: {
                        hot: false,
                        ice: false
                    },
                    detials: '',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '자몽차',
                        EN: 'Grapefruit Tea'
                    },
                    price: {
                        hot: 3800,
                        ice: 4300
                    },
                    menuOptions: {
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000,
                    },
                    picture: {
                        hot: false,
                        ice: false
                    },
                    detials: '',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '청귤차',
                        EN: 'Green Tangereen Tea'
                    },
                    price: {
                        hot: 3800,
                        ice: 4300
                    },
                    menuOptions: {
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000,
                    },
                    picture: {
                        hot: false,
                        ice: false
                    },
                    detials: '',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '꿀대추차',
                        EN: 'Honey Jujube Tea'
                    },
                    price: {
                        hot: 3800,
                        ice: 4300
                    },
                    menuOptions: {
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000,
                    },
                    picture: {
                        hot: true,
                        ice: false
                    },
                    detials: '',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '꿀모과차',
                        EN: 'Honey Quince Tea'
                    },
                    price: {
                        hot: 3800,
                        ice: 4300
                    },
                    menuOptions: {
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000,
                    },
                    picture: {
                        hot: true,
                        ice: false
                    },
                    detials: '',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '꿀생강차',
                        EN: 'Honey Ginger Tea'
                    },
                    price: {
                        hot: 3800,
                        ice: 4300
                    },
                    menuOptions: {
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000,
                    },
                    picture: {
                        hot: true,
                        ice: false
                    },
                    detials: '',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '제주한라봉차',
                        EN: 'Jeju Hallabong Tea'
                    },
                    price: {
                        hot: 3800,
                        ice: 4300
                    },
                    menuOptions: {
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000,
                    },
                    picture: {
                        hot: false,
                        ice: false
                    },
                    detials: '',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '견과율무차',
                        EN: 'Nuts Adlay Tea'
                    },
                    price: {
                        hot: 3800,
                        ice: 4300
                    },
                    menuOptions: {
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000,
                    },
                    picture: {
                        hot: false,
                        ice: false
                    },
                    detials: '',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '속삭임 국화차',
                        EN: 'Whispering Chrysanthemum Tea'
                    },
                    price: {
                        hot: 5000,
                        ice: 5500
                    },
                    menuOptions: {
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000,
                    },
                    picture: {
                        hot: false,
                        ice: false
                    },
                    detials: '',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '쌍화대추차',
                        EN: 'Whispering Chrysanthemum Tea'
                    },
                    price: {
                        hot: 6000,
                    },
                    menuOptions: {
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000,
                    },
                    picture: {
                        hot: true,
                    },
                    detials: '',
                    status: {

                    }
                },
            ]
        },
        latte: {
            template: {
                KR: '라떼',
                EN: "LATTE"
            },
            delivery: true,
            items: [
                {
                    name: {
                        KR: '딸기라떼',
                        EN: 'Strawberry Latte'
                    },
                    price: {
                        ice: 4500
                    },
                    menuOptions: {
                        extra: [
                            {
                                KR: '에스프레소 샷 추가',
                                EN: 'Add Espresso Shot',
                                price: 500
                            },
                            {
                                KR: '우유 추가',
                                EN: 'Add Milk',
                                price: 500
                            },
                            {
                                KR: '화이트 펄 추가',
                                EN: 'Add White Perl',
                                price: 500
                            },
                            {
                                KR: '블랙 펄 추가',
                                EN: 'Add Black Perl',
                                price: 500
                            },
                        ],
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000
                    },
                    picture: {
                        ice: false
                    },
                    details: '',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '초코라떼',
                        EN: 'Chocolate Latte'
                    },
                    price: {
                        hot: 3900,
                        ice: 4400
                    },
                    menuOptions: {
                        extra: [
                            {
                                KR: '에스프레소 샷 추가',
                                EN: 'Add Espresso Shot',
                                price: 500
                            },
                            {
                                KR: '우유 추가',
                                EN: 'Add Milk',
                                price: 500
                            },
                            {
                                KR: '화이트 펄 추가',
                                EN: 'Add White Perl',
                                price: 500
                            },
                            {
                                KR: '블랙 펄 추가',
                                EN: 'Add Black Perl',
                                price: 500
                            },
                        ],
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000
                    },
                    picture: {
                        hot: false,
                        ice: false
                    },
                    details: '',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '민트초코라떼',
                        EN: 'Mint-Choco Latte'
                    },
                    price: {
                        hot: 3900,
                        ice: 4400
                    },
                    menuOptions: {
                        extra: [
                            {
                                KR: '에스프레소 샷 추가',
                                EN: 'Add Espresso Shot',
                                price: 500
                            },
                            {
                                KR: '우유 추가',
                                EN: 'Add Milk',
                                price: 500
                            },
                            {
                                KR: '화이트 펄 추가',
                                EN: 'Add White Perl',
                                price: 500
                            },
                            {
                                KR: '블랙 펄 추가',
                                EN: 'Add Black Perl',
                                price: 500
                            },
                        ],
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000
                    },
                    picture: {
                        hot: false,
                        ice: false
                    },
                    details: '',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '말차라떼',
                        EN: 'Green Tea Latte'
                    },
                    price: {
                        hot: 3900,
                        ice: 4400
                    },
                    menuOptions: {
                        extra: [
                            {
                                KR: '에스프레소 샷 추가',
                                EN: 'Add Espresso Shot',
                                price: 500
                            },
                            {
                                KR: '우유 추가',
                                EN: 'Add Milk',
                                price: 500
                            },
                            {
                                KR: '화이트 펄 추가',
                                EN: 'Add White Perl',
                                price: 500
                            },
                            {
                                KR: '블랙 펄 추가',
                                EN: 'Add Black Perl',
                                price: 500
                            },
                        ],
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000
                    },
                    picture: {
                        hot: true,
                        ice: false
                    },
                    details: '',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '오곡라떼',
                        EN: 'Grain Latte'
                    },
                    price: {
                        hot: 3900,
                        ice: 4400
                    },
                    menuOptions: {
                        extra: [
                            {
                                KR: '에스프레소 샷 추가',
                                EN: 'Add Espresso Shot',
                                price: 500
                            },
                            {
                                KR: '우유 추가',
                                EN: 'Add Milk',
                                price: 500
                            },
                            {
                                KR: '화이트 펄 추가',
                                EN: 'Add White Perl',
                                price: 500
                            },
                            {
                                KR: '블랙 펄 추가',
                                EN: 'Add Black Perl',
                                price: 500
                            },
                        ],
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000
                    },
                    picture: {
                        hot: true,
                        ice: false
                    },
                    details: '',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '토피넛 라떼',
                        EN: 'ToffeeNut Latte'
                    },
                    price: {
                        hot: 3900,
                        ice: 4400
                    },
                    menuOptions: {
                        extra: [
                            {
                                KR: '에스프레소 샷 추가',
                                EN: 'Add Espresso Shot',
                                price: 500
                            },
                            {
                                KR: '우유 추가',
                                EN: 'Add Milk',
                                price: 500
                            },
                            {
                                KR: '화이트 펄 추가',
                                EN: 'Add White Perl',
                                price: 500
                            },
                            {
                                KR: '블랙 펄 추가',
                                EN: 'Add Black Perl',
                                price: 500
                            },
                        ],
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000
                    },
                    picture: {
                        hot: false,
                        ice: false
                    },
                    details: '',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '달고나밀크',
                        EN: 'Dalgona Milk'
                    },
                    price: {
                        hot: 3900,
                        ice: 4400
                    },
                    menuOptions: {
                        extra: [
                            {
                                KR: '에스프레소 샷 추가',
                                EN: 'Add Espresso Shot',
                                price: 500
                            },
                            {
                                KR: '우유 추가',
                                EN: 'Add Milk',
                                price: 500
                            },
                            {
                                KR: '화이트 펄 추가',
                                EN: 'Add White Perl',
                                price: 500
                            },
                            {
                                KR: '블랙 펄 추가',
                                EN: 'Add Black Perl',
                                price: 500
                            },
                        ],
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000
                    },
                    picture: {
                        hot: false,
                        ice: true
                    },
                    details: '',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '군고구마라떼',
                        EN: 'Roasted Sweet Potato Latte'
                    },
                    price: {
                        hot: 3900,
                        ice: 4400
                    },
                    menuOptions: {
                        extra: [
                            {
                                KR: '에스프레소 샷 추가',
                                EN: 'Add Espresso Shot',
                                price: 500
                            },
                            {
                                KR: '우유 추가',
                                EN: 'Add Milk',
                                price: 500
                            },
                            {
                                KR: '화이트 펄 추가',
                                EN: 'Add White Perl',
                                price: 500
                            },
                            {
                                KR: '블랙 펄 추가',
                                EN: 'Add Black Perl',
                                price: 500
                            },
                        ],
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000
                    },
                    picture: {
                        hot: false,
                        ice: false
                    },
                    details: '',
                    status: {
                        isTheBest: true
                    }
                },
                {
                    name: {
                        KR: '바밤바라떼',
                        EN: 'Babamba Latte'
                    },
                    price: {
                        hot: 3900,
                        ice: 4400
                    },
                    menuOptions: {
                        extra: [
                            {
                                KR: '에스프레소 샷 추가',
                                EN: 'Add Espresso Shot',
                                price: 500
                            },
                            {
                                KR: '우유 추가',
                                EN: 'Add Milk',
                                price: 500
                            },
                            {
                                KR: '화이트 펄 추가',
                                EN: 'Add White Perl',
                                price: 500
                            },
                            {
                                KR: '블랙 펄 추가',
                                EN: 'Add Black Perl',
                                price: 500
                            },
                        ],
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000
                    },
                    picture: {
                        hot: false,
                        ice: false
                    },
                    details: '',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '밀크카라멜라떼',
                        EN: 'Milk Caramel Latte'
                    },
                    price: {
                        hot: 3400,
                        ice: 3900
                    },
                    menuOptions: {
                        extra: [
                            {
                                KR: '에스프레소 샷 추가',
                                EN: 'Add Espresso Shot',
                                price: 500
                            },
                            {
                                KR: '우유 추가',
                                EN: 'Add Milk',
                                price: 500
                            },
                            {
                                KR: '화이트 펄 추가',
                                EN: 'Add White Perl',
                                price: 500
                            },
                            {
                                KR: '블랙 펄 추가',
                                EN: 'Add Black Perl',
                                price: 500
                            },
                        ],
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000
                    },
                    naverNotIncluded: true,
                    picture: {
                        hot: false,
                        ice: false
                    },
                    details: '',
                    status: {

                    },
                },
                {
                    name: {
                        KR: '흑임자라떼',
                        EN: 'Black Sesame Latte'
                    },
                    price: {
                        hot: 4400,
                        ice: 4900
                    },
                    menuOptions: {
                        extra: [
                            {
                                KR: '에스프레소 샷 추가',
                                EN: 'Add Espresso Shot',
                                price: 500
                            },
                            {
                                KR: '우유 추가',
                                EN: 'Add Milk',
                                price: 500
                            },
                            {
                                KR: '화이트 펄 추가',
                                EN: 'Add White Perl',
                                price: 500
                            },
                            {
                                KR: '블랙 펄 추가',
                                EN: 'Add Black Perl',
                                price: 500
                            },
                        ],
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000
                    },
                    picture: {
                        hot: false,
                        ice: false
                    },
                    details: '',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '견과율무라떼',
                        EN: 'Nuts Adlay Latte'
                    },
                    price: {
                        hot: 4400,
                        ice: 4900
                    },
                    menuOptions: {
                        extra: [
                            {
                                KR: '에스프레소 샷 추가',
                                EN: 'Add Espresso Shot',
                                price: 500
                            },
                            {
                                KR: '우유 추가',
                                EN: 'Add Milk',
                                price: 500
                            },
                            {
                                KR: '화이트 펄 추가',
                                EN: 'Add White Perl',
                                price: 500
                            },
                            {
                                KR: '블랙 펄 추가',
                                EN: 'Add Black Perl',
                                price: 500
                            },
                        ],
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000
                    },
                    naverNotIncluded: true,
                    picture: {
                        hot: false,
                        ice: true
                    },
                    details: '',
                    status: {

                    },
                },
                {
                    name: {
                        KR: '돼지바라떼',
                        EN: 'Pig-bar Latte'
                    },
                    price: {
                        ice: 5500,
                    },
                    menuOptions: {
                        extra: [
                            {
                                KR: '에스프레소 샷 추가',
                                EN: 'Add Espresso Shot',
                                price: 500
                            },
                            {
                                KR: '우유 추가',
                                EN: 'Add Milk',
                                price: 500
                            },
                            {
                                KR: '화이트 펄 추가',
                                EN: 'Add White Perl',
                                price: 500
                            },
                            {
                                KR: '블랙 펄 추가',
                                EN: 'Add Black Perl',
                                price: 500
                            },
                        ],
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000
                    },
                    picture: {
                        ice: false
                    },
                    details: '',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '밀크티',
                        EN: 'Milk Tea'
                    },
                    price: {
                        hot: 5000,
                        ice: 5500
                    },
                    menuOptions: {
                        extra: [
                            {
                                KR: '에스프레소 샷 추가',
                                EN: 'Add Espresso Shot',
                                price: 500
                            },
                            {
                                KR: '우유 추가',
                                EN: 'Add Milk',
                                price: 500
                            },
                            {
                                KR: '화이트 펄 추가',
                                EN: 'Add White Perl',
                                price: 500
                            },
                            {
                                KR: '블랙 펄 추가',
                                EN: 'Add Black Perl',
                                price: 500
                            },
                        ],
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000
                    },
                    picture: {
                        hot: false,
                        ice: false
                    },
                    details: '',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '로투스 라떼',
                        EN: 'Lotus Biscoff Latte'
                    },
                    price: {
                        hot: 5000,
                        ice: 5500
                    },
                    menuOptions: {
                        extra: [
                            {
                                KR: '에스프레소 샷 추가',
                                EN: 'Add Espresso Shot',
                                price: 500
                            },
                            {
                                KR: '우유 추가',
                                EN: 'Add Milk',
                                price: 500
                            },
                            {
                                KR: '화이트 펄 추가',
                                EN: 'Add White Perl',
                                price: 500
                            },
                            {
                                KR: '블랙 펄 추가',
                                EN: 'Add Black Perl',
                                price: 500
                            },
                        ],
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000
                    },
                    picture: {
                        hot: false,
                        ice: false
                    },
                    details: '',
                    status: {

                    }
                },
            ]
        }, 
        tea: {
            template: {
                KR: '차',
                EN: "TEA"
            },
            delivery: true,
            items: [
                {
                    name: {
                        KR: '허브티',
                        EN: 'Herbal Tea'
                    },
                    price: {
                        hot: 3900,
                        ice: 4400
                    },
                    menuOptions: {
                        taste: [
                            {
                                KR: '얼그레이',
                                EN: 'Earl Gray'
                            },
                            {
                                KR: '카모마일 바닐라',
                                EN: 'Chamomile Vanilla'
                            },
                            {
                                KR: '카모마일 레몬 글라스',
                                EN: 'Chamomile Lemon Glass'
                            },
                            {
                                KR: '로즈 힙 앤 채리',
                                EN: 'Rose Hip & Cherry'
                            },
                            {
                                KR: '레몬 진저',
                                EN: 'Lemon Ginger'
                            },
                            {
                                KR: '페퍼민트 레몬',
                                EN: 'Peppermint Lemon'
                            },
                            {
                                KR: '스트로베리',
                                EN: 'Strawberry'
                            },
                        ],
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000
                    },
                    picture: {
                        hot: false,
                        ice: false
                    },
                    details: '',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '리얼아이스티',
                        EN: 'Real Ice Tea'
                    },
                    price: {
                        ice: 5000
                    },
                    menuOptions: {
                        taste: [
                            {
                                KR: '레몬',
                                EN: 'Lemon'
                            },
                            {
                                KR: '블루베리',
                                EN: 'Blueberry'
                            },
                            {
                                KR: '복숭아',
                                EN: 'Peach'
                            },
                            {
                                KR: '트로피칼',
                                EN: 'Tropical'
                            },
                        ],
                        extra: [
                            {
                                KR: '에스프레소 샷 추가',
                                EN: 'Add Espresso Shot',
                                price: 500
                            },
                            {
                                KR: '화이트 펄 추가',
                                EN: 'Add White Perl',
                                price: 500
                            },
                            {
                                KR: '블랙 펄 추가',
                                EN: 'Add Black Perl',
                                price: 500
                            },
                        ],
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000
                    },
                    picture: {
                        ice: false
                    },
                    details: '',
                    status: {

                    }
                },
            ]
        },
        bubbleTea: {
            template: {
                KR: '버블티',
                EN: "Bubble Tea"
            },
            delivery: true,
            items: [
                {
                    name: {
                        KR: '얼그레이 버블티',
                        EN: 'Earl Gray Bubble Tea'
                    },
                    price: {
                        ice: 5500
                    },
                    menuOptions: {
                        perl: [
                            {
                                KR: '화이트펄',
                                EN: 'White Perl'
                            },
                            {
                                KR: '블랙펄',
                                EN: 'Black Perl'
                            }
                        ],
                        extra: [
                            {
                                KR: '에스프레소 샷 추가',
                                EN: 'Add Espresso Shot',
                                price: 500
                            },
                            {
                                KR: '우유 추가',
                                EN: 'Add Milk',
                                price: 500
                            },
                            {
                                KR: '화이트 펄 추가',
                                EN: 'Add White Perl',
                                price: 500
                            },
                            {
                                KR: '블랙 펄 추가',
                                EN: 'Add Black Perl',
                                price: 500
                            },
                        ],
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000
                    },
                    picture: {
                        ice: false
                    },
                    details: '',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '흑당 버블티',
                        EN: 'Brown Sugar Bubble Tea'
                    },
                    price: {
                        ice: 5300
                    },
                    menuOptions: {
                        perl: [
                            {
                                KR: '화이트펄',
                                EN: 'White Perl'
                            },
                            {
                                KR: '블랙펄',
                                EN: 'Black Perl'
                            }
                        ],
                        extra: [
                            {
                                KR: '에스프레소 샷 추가',
                                EN: 'Add Espresso Shot',
                                price: 500
                            },
                            {
                                KR: '우유 추가',
                                EN: 'Add Milk',
                                price: 500
                            },
                            {
                                KR: '화이트 펄 추가',
                                EN: 'Add White Perl',
                                price: 500
                            },
                            {
                                KR: '블랙 펄 추가',
                                EN: 'Add Black Perl',
                                price: 500
                            },
                        ],
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000
                    },
                    picture: {
                        ice: false
                    },
                    details: '',
                    status: {

                    }
                },
            ]
        },
        ade: {
            template: {
                KR: '에이드',
                EN: "ADE"
            },
            delivery: true,
            items: [
                {
                    name: {
                        KR: '에이드',
                        EN: 'ADE'
                    },
                    price: {
                        ice: 5000
                    },
                    menuOptions: {
                        taste: [
                            {
                                KR: '레몬',
                                EN: 'Lemon'
                            },
                            {
                                KR: '레몬유자',
                                EN: 'Lemon Yuja'
                            },
                            {
                                KR: '자몽',
                                EN: 'Grapefruit'
                            },
                            {
                                KR: '자두',
                                EN: 'Plum'
                            },
                            {
                                KR: '청귤',
                                EN: 'Green Tangereen'
                            },
                            {
                                KR: '청포도',
                                EN: 'Green Grape'
                            },
                            {
                                KR: '복숭아',
                                EN: 'Peach'
                            },
                            {
                                KR: '파인애플',
                                EN: 'Pineapple'
                            },
                            {
                                KR: '키위',
                                EN: 'Kiwi'
                            },
                            {
                                KR: '패션푸룻',
                                EN: 'Passion Fruit'
                            },
                            {
                                KR: '라즈베리',
                                EN: 'Raspberry'
                            },
                            {
                                KR: '라임',
                                EN: 'Lime'
                            },
                        ],
                        extra: [
                            {
                                KR: '화이트 펄 추가',
                                EN: 'Add White Perl',
                                price: 500
                            },
                            {
                                KR: '블랙 펄 추가',
                                EN: 'Add Black Perl',
                                price: 500
                            },
                        ],
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000
                    },
                    picture: {
                        ice: false
                    },
                    details: '',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '모히또',
                        EN: 'Mojito'
                    },
                    price: {
                        ice: 5500
                    },
                    menuOptions: {
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000
                    },
                    picture: {
                        ice: false
                    },
                    details: '',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '뱅쇼',
                        EN: 'Vin Chaud'
                    },
                    price: {
                        ice: 5500
                    },
                    menuOptions: {
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000
                    },
                    picture: {
                        ice: true
                    },
                    details: '',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '에너지뱅',
                        EN: 'Energy Bang'
                    },
                    price: {
                        ice: 6900
                    },
                    menuOptions: {
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000
                    },
                    picture: {
                        ice: false
                    },
                    details: '',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '커먼유니크 에이드',
                        EN: 'Common Mallow Ade'
                    },
                    price: {
                        ice: 6900
                    },
                    menuOptions: {
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000
                    },
                    picture: {
                        ice: false
                    },
                    details: '',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '코코젤리 사이다',
                        EN: 'COCO-Jelly Soda'
                    },
                    price: {
                        ice: 3000
                    },
                    menuOptions: {
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000
                    },
                    picture: {
                        ice: false
                    },
                    details: '',
                    status: {
                        isEvent: true
                    }
                },
            ]
        },
        shakeAndSmoo: {
            template: {
                KR: '쉐이크&스무디',
                EN: "Shake&Smoothie"
            },
            delivery: true,
            items: [
                {
                    name: {
                        KR: '밀크 쉐이크',
                        EN: 'Milk Shake'
                    },
                    price: {
                        ice: 4500
                    },
                    menuOptions: {
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000
                    },
                    picture: {
                        ice: false
                    },
                    details: '',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '오레오 쉐이크',
                        EN: 'Oreo Shake'
                    },
                    price: {
                        ice: 5000
                    },
                    menuOptions: {
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000
                    },
                    picture: {
                        ice: false
                    },
                    details: '',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '커피 쉐이크',
                        EN: 'Coffee Shake'
                    },
                    price: {
                        ice: 5500
                    },
                    menuOptions: {
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000
                    },
                    picture: {
                        ice: false
                    },
                    details: '',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '로투스 쉐이크',
                        EN: 'Lotus Biscoff Shake'
                    },
                    price: {
                        ice: 5500
                    },
                    menuOptions: {
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000
                    },
                    picture: {
                        ice: false
                    },
                    details: '',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '바밤바 쉐이크',
                        EN: 'Babamba Shake'
                    },
                    price: {
                        ice: 5500
                    },
                    menuOptions: {
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000
                    },
                    picture: {
                        ice: false
                    },
                    details: '',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '돼지바 쉐이크',
                        EN: 'Pig-bar Shake'
                    },
                    price: {
                        ice: 5800
                    },
                    menuOptions: {
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000
                    },
                    picture: {
                        ice: true
                    },
                    details: '',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '요거트 스무디',
                        EN: 'Pig-bar Shake'
                    },
                    price: {
                        ice: 5800
                    },
                    menuOptions: {
                        taste: [
                            {
                                KR: '플레인',
                                EN: 'Plain'
                            },
                            {
                                KR: '딸기',
                                EN: 'Strawberry'
                            },
                            {
                                KR: '라즈베리',
                                EN: 'Raspberry'
                            },
                            {
                                KR: '블루베리',
                                EN: 'Blueberry'
                            },
                            {
                                KR: '망고',
                                EN: 'Mango'
                            },
                            {
                                KR: '복숭아',
                                EN: 'Peach'
                            },
                            {
                                KR: '청귤',
                                EN: 'Green Tangereen'
                            },
                            {
                                KR: '청포도',
                                EN: 'Green Grape'
                            },
                            {
                                KR: '레몬',
                                EN: 'Lemon'
                            },
                        ],
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000
                    },
                    picture: {
                        ice: true
                    },
                    details: '',
                    status: {

                    }
                },
            ]
        },
        juice: {
            template: {
                KR: '주스',
                EN: "JUICE"
            },
            delivery: true,
            items: [
                {
                    name: {
                        KR: '과일 주스',
                        EN: 'Fruit Juice'
                    },
                    price: {
                        ice: 5000
                    },
                    menuOptions: {
                        taste: [
                            {
                                KR: '망고',
                                EN: 'Mango'
                            },
                            {
                                KR: '파인애플',
                                EN: 'Pineapple'
                            },
                            {
                                KR: '복숭아',
                                EN: 'Peach'
                            },
                        ],
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000
                    },
                    picture: {
                        ice: true
                    },
                    details: '',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '리얼 베리 주스',
                        EN: 'Real Berry Juice'
                    },
                    price: {
                        ice: 5000
                    },
                    menuOptions: {
                        taste: [
                            {
                                KR: '딸기',
                                EN: 'Strawberry'
                            },
                            {
                                KR: '블루베리',
                                EN: 'Blueberry'
                            },
                            {
                                KR: '트리플베리',
                                EN: 'Tripleberry'
                            },
                        ],
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000
                    },
                    picture: {
                        ice: false
                    },
                    details: '',
                    status: {

                    }
                },
                {
                    name: {
                        KR: '딸기바나나 주스',
                        EN: 'Strawberry Banana Juice'
                    },
                    price: {
                        ice: 5000
                    },
                    menuOptions: {
                        taste: [
                            {
                                KR: '딸기',
                                EN: 'Strawberry'
                            },
                            {
                                KR: '블루베리',
                                EN: 'Blueberry'
                            },
                            {
                                KR: '트리플베리',
                                EN: 'Tripleberry'
                            },
                        ],
                        cup: [
                            {
                                KR: '유리컵',
                                EN: 'Glass'
                            },
                            {
                                KR: '일회용컵',
                                EN: 'Disposable Cup'
                            }
                        ],
                        sizeUp: 1000
                    },
                    picture: {
                        ice: false
                    },
                    details: '',
                    status: {

                    }
                },
            ]
        }
    },
    food: {
        shavedIce: {
            template: {
                KR: '빙수',
                EN: 'Shaved Ice'
            },

            delivery: false,
            items: [
                {
                    name: {
                        KR: '클래식 빙수',
                        EN: 'Classic'
                    },
                    price: {
                        ice: 8900
                    },
                    menuOptions: {
                        taste: [
                            {
                                KR: '인절미',
                                EN: 'Injeolmi'
                            },
                            {
                                KR: '찹쌀떡',
                                EN: 'Glutinous Rice Cake'
                            },
                            {
                                KR: '치즈',
                                EN: 'Cheese'
                            },
                        ],
                    },
                    picture: {
                        ice: true
                    },
                    details: '',
                    status: {

                    },
                    packing: 500
                },
                {
                    name: {
                        KR: '망고치즈큐브 빙수',
                        EN: 'Mango Cheese Cube'
                    },
                    price: {
                        ice: 10900
                    },
                    menuOptions: {
                        taste: [
                            {
                                KR: '인절미',
                                EN: 'Injeolmi'
                            },
                            {
                                KR: '찹쌀떡',
                                EN: 'Glutinous Rice Cake'
                            },
                            {
                                KR: '치즈',
                                EN: 'Cheese'
                            },
                        ]
                    },
                    picture: {
                        ice: true
                    },
                    details: '',
                    status: {
                        
                    },
                    packing: 500
                },
            ]
        },
        brunch: {
            template: {
                KR: '브런치',
                EN: 'Brunch'
            },
            items: [
                {
                    name: {
                        KR: '대만 샌드위치',
                        EN: 'Taiwan Sandwich'
                    },
                    price: {
                        meal: 2900
                    },
                    menuOptions: {
                        taste: [
                            {
                                KR: '카야',
                                EN: 'Kaya'
                            },
                            {
                                KR: '딸기',
                                EN: 'Strawberry'
                            },
                            {
                                KR: '햄치즈',
                                EN: 'Ham Cheese'
                            },
                        ]
                    },
                    picture: {
                        meal: true
                    },
                    details: '',
                    status: {
                        
                    },
                    delivery: true,
                },
                {
                    name: {
                        KR: '새우볶음밥',
                        EN: 'Shrimp Fried Rice'
                    },
                    price: {
                        meal: 8900
                    },
                    menuOptions: {
                        addEventBeverage: [
                            {
                                KR: '선택안함',
                                EN: 'Nothing',
                                price: 0
                            },
                            {
                                KR: '사이다',
                                EN: 'Soda',
                                price: 2000 
                            },
                            {
                                KR: '아메리카노 (ice)',
                                EN: 'Americano (ice)',
                                price: 2000
                            },
                            {
                                KR: '아메리카노 (hot)',
                                EN: 'Americano (hot)' ,
                                price: 2000
                            },

                        ]
                    },
                    picture: {
                        meal: true
                    },
                    details: '',
                    status: {
                        
                    },
                    naverNotActivated: true
                },
                {
                    name: {
                        KR: '햄야채볶음밥',
                        EN: 'Ham Vegetable Fried Rice'
                    },
                    price: {
                        meal: 8900
                    },
                    menuOptions: {
                        addEventBeverage: [
                            {
                                KR: '선택안함',
                                EN: 'Nothing',
                                price: 0
                            },
                            {
                                KR: '사이다',
                                EN: 'Soda',
                                price: 2000 
                            },
                            {
                                KR: '아메리카노 (ice)',
                                EN: 'Americano (ice)',
                                price: 2000
                            },
                            {
                                KR: '아메리카노 (hot)',
                                EN: 'Americano (hot)' ,
                                price: 2000
                            },

                        ]
                    },
                    picture: {
                        meal: false
                    },
                    details: '',
                    status: {
                        
                    },
                    naverNotActivated: true
                },
                {
                    name: {
                        KR: '김치볶음밥',
                        EN: 'Kimchi Fried Rice'
                    },
                    price: {
                        meal: 8900
                    },
                    menuOptions: {
                        addEventBeverage: [
                            {
                                KR: '선택안함',
                                EN: 'Nothing',
                                price: 0
                            },
                            {
                                KR: '사이다',
                                EN: 'Soda',
                                price: 2000 
                            },
                            {
                                KR: '아메리카노 (ice)',
                                EN: 'Americano (ice)',
                                price: 2000
                            },
                            {
                                KR: '아메리카노 (hot)',
                                EN: 'Americano (hot)' ,
                                price: 2000
                            },
                        ]
                    },
                    picture: {
                        meal: true
                    },
                    details: '',
                    status: {
                        
                    },
                    naverNotActivated: true,
                },
                {
                    name: {
                        KR: '고암길 샐러드',
                        EN: 'Goamgil Salad'
                    },
                    price: {
                        meal: 8900
                    },
                    menuOptions: {
                        type: [
                            {
                                KR: '케이준',
                                EN: 'Cajun'
                            },
                            {
                                KR: '리코타치즈',
                                EN: 'Ricotta Cheese'
                            }
                        ]
                    },
                    picture: {
                        meal: true
                    },
                    details: '',
                    status: {
                        
                    },
                    delivery: true,
                    packing: 500
                },
                {
                    name: {
                        KR: '숭늉누룽지',
                        EN: 'Sungnyung Nurungji'
                    },
                    price: {
                        meal: 4800
                    },
                    menuOptions: {
                        
                    },
                    picture: {
                        meal: true
                    },
                    details: '',
                    status: {
                        
                    },
                    delivery: true
                },
            ]
        },
        desert: {
            template: {
                KR: '디저트',
                EN: 'DESSERT'
            },
            // TODO details 작업하기
            items: [
                {
                    name: {
                        KR: '고암길 토스트',
                        EN: 'Goamgil Toast'
                    },
                    price: {
                        dessert: 1500
                    },
                    menuOptions: {
                        
                    },
                    picture: {
                        dessert: true
                    },
                    details: '',
                    status: {
                        isEvent: true
                    },
                    naverNotIncluded: true,
                    notForPacking: true
                },
                {
                    name: {
                        KR: '플레인 크로플 (1pc)',
                        EN: 'Plain Cropple (1pc)'
                    },
                    price: {
                        dessert: 2500
                    },
                    menuOptions: {
                        extra: [
                            {
                                KR: '크로플 추가',
                                EN: 'Add a Cropple',
                                price: 2000,
                                maxNumber: 5,
                            }
                        ]
                    },
                    picture: {
                        dessert: true
                    },
                    details: '',
                    status: {
                        
                    },
                    delivery: true
                },
                {
                    name: {
                        KR: '플레인 크로플 (2pc)',
                        EN: 'Plain Cropple (2pc)'
                    },
                    price: {
                        dessert: 4400
                    },
                    menuOptions: {
                        extra: [
                            {
                                KR: '크로플 추가',
                                EN: 'Add a Cropple',
                                price: 2000,
                                maxNumber: 4,
                            }
                        ]
                    },
                    picture: {
                        dessert: true
                    },
                    details: '',
                    status: {
                        
                    },
                    delivery: true
                },
                {
                    name: {
                        KR: '바닐라 크로플 (2pc)',
                        EN: 'Vanilla Cropple (2pc)'
                    },
                    price: {
                        dessert: 6500
                    },
                    menuOptions: {
                        extra: [
                            {
                                KR: '크로플 추가',
                                EN: 'Add a Cropple',
                                price: 2000,
                                maxNumber: 4,
                            },
                            {
                                KR: '바닐라 크로플 추가',
                                EN: 'Add a Vanilla Cropple',
                                price: 3000,
                                maxNumber: 4,
                            },
                            4
                        ]
                    },
                    picture: {
                        dessert: true
                    },
                    details: '',
                    status: {
                        
                    },
                    delivery: true
                },
                {
                    name: {
                        KR: '티라미수 크로플 (2pc)',
                        EN: 'Tiramisu Cropple (2pc)'
                    },
                    price: {
                        dessert: 7500
                    },
                    menuOptions: {
                        extra: [
                            {
                                KR: '크로플 추가',
                                EN: 'Add a Cropple',
                                price: 2000,
                                maxNumber: 4,
                            },
                            {
                                KR: '티라미수 크로플 추가',
                                EN: 'Add a Tiramisu Cropple',
                                price: 3500,
                                maxNumber: 4,
                            },
                            4
                        ]
                    },
                    picture: {
                        dessert: true
                    },
                    details: '',
                    status: {
                        
                    },
                    delivery: true
                },
                {
                    name: {
                        KR: '빅머핀',
                        EN: 'Big Muffin'
                    },
                    price: {
                        dessert: 3500
                    },
                    menuOptions: {
                        type: [
                            {
                                KR: '플레인',
                                EN: 'Plain',
                            },
                            {
                                KR: '블루베리',
                                EN: 'Blueberry',
                            },
                            {
                                KR: '초코',
                                EN: 'Chocolate',
                            },
                        ]
                    },
                    picture: {
                        dessert: true
                    },
                    details: '',
                    status: {
                        
                    },
                    delivery: true
                },
                {
                    name: {
                        KR: '미니 머핀',
                        EN: 'Mini Muffin'
                    },
                    price: {
                        dessert: 500
                    },
                    menuOptions: {
                        type: [
                            {
                                KR: '플레인',
                                EN: 'Plain',
                            },
                            {
                                KR: '딸기',
                                EN: 'Strawberry',
                            },
                            {
                                KR: '초코',
                                EN: 'Chocolate',
                            },
                            {
                                KR: '초코칩',
                                EN: 'Chocolate Chip',
                            },
                        ]
                    },
                    picture: {
                        dessert: true
                    },
                    details: '',
                    status: {
                        
                    },
                    delivery: true
                },
                {
                    name: {
                        KR: '떠먹는 티라미수',
                        EN: 'Handmade Tiramisu'
                    },
                    price: {
                        dessert: 4900
                    },
                    menuOptions: {

                    },
                    picture: {
                        dessert: true
                    },
                    details: '',
                    status: {
                        
                    },
                    delivery: true
                },
                {
                    name: {
                        KR: '제리치즈케이크',
                        EN: 'Jerry Cheese Cake'
                    },
                    price: {
                        dessert: 7000
                    },
                    menuOptions: {
                        extra: [
                            {
                                KR: '제리치즈케이크 추가',
                                EN: 'Add Jerry Cheese Cake',
                                price: 6500,
                                maxNumber: 4
                            },
                        ]
                    },
                    picture: {
                        dessert: true
                    },
                    details: '',
                    status: {
                        
                    },
                    delivery: true
                },
                {
                    name: {
                        KR: '초코브라우니퍼지',
                        EN: 'Choco Brownie Fuzzy'
                    },
                    price: {
                        dessert: 6300
                    },
                    menuOptions: {
                        extra: [
                            {
                                KR: '초코브라우니퍼지 추가',
                                EN: 'Add Choco Brownie Fuzzy',
                                price: 5800,
                                maxNumber: 4
                            },
                        ]
                    },
                    picture: {
                        dessert: true
                    },
                    details: '',
                    status: {
                        
                    },
                    delivery: true
                },
                {
                    name: {
                        KR: '아보카도 케이크',
                        EN: 'Avocado Cake'
                    },
                    price: {
                        dessert: 9500
                    },
                    menuOptions: {
                        extra: [
                            {
                                KR: '아보카도 케이크 추가',
                                EN: 'Add Avocado Cake',
                                price: 9000,
                                maxNumber: 4
                            },
                        ]
                    },
                    picture: {
                        dessert: true
                    },
                    details: '',
                    status: {
                        
                    },
                    delivery: true
                },
                {
                    name: {
                        KR: '생크림 카스테라',
                        EN: 'Cream Castella'
                    },
                    price: {
                        dessert: 4900
                    },
                    menuOptions: {

                    },
                    picture: {
                        dessert: true
                    },
                    details: '',
                    status: {
                        
                    },
                    delivery: true
                },
                {
                    name: {
                        KR: '허니브레드',
                        EN: 'Honey Bread'
                    },
                    price: {
                        dessert: 5300
                    },
                    menuOptions: {

                    },
                    picture: {
                        dessert: true
                    },
                    details: '',
                    status: {
                        
                    },
                    delivery: true
                },
                {
                    name: {
                        KR: '크로크무슈',
                        EN: 'Croque Monsieur'
                    },
                    price: {
                        dessert: 4800
                    },
                    menuOptions: {

                    },
                    picture: {
                        dessert: false
                    },
                    details: '',
                    status: {
                        
                    },
                    delivery: true
                },
                {
                    name: {
                        KR: '치즈케이크',
                        EN: 'Cheese Cake'
                    },
                    price: {
                        dessert: 4400
                    },
                    menuOptions: {
                        extra: [
                            {
                                KR: '치즈케이크 추가',
                                EN: 'Add Cheese Cake',
                                price: 3900,
                                maxNumber: 4
                            },
                        ]
                    },
                    picture: {
                        dessert: true
                    },
                    details: '',
                    status: {
                        isEvent: true
                    },
                    delivery: true
                },
                {
                    name: {
                        KR: '쿠키앤크림 케이크',
                        EN: 'Cookie&Cream Cake'
                    },
                    price: {
                        dessert: 5500
                    },
                    menuOptions: {
                        extra: [
                            {
                                KR: '쿠키앤크림 케이크 추가',
                                EN: 'Add Cookie&Cream Cake',
                                price: 5000,
                                maxNumber: 4
                            },
                        ]
                    },
                    picture: {
                        dessert: true
                    },
                    details: '',
                    status: {
                        
                    },
                    delivery: true
                },
                {
                    name: {
                        KR: '깔루아마끼아또 케이크',
                        EN: 'Kahlua Macchiato Cake'
                    },
                    price: {
                        dessert: 6500
                    },
                    menuOptions: {
                        extra: [
                            {
                                KR: '깔루아마끼아또 케이크 추가',
                                EN: 'Add Kahlua Macchiato Cake',
                                price: 6000,
                                maxNumber: 4
                            },
                        ]
                    },
                    picture: {
                        dessert: false
                    },
                    details: '',
                    status: {
                        
                    },
                    delivery: true
                },
                {
                    name: {
                        KR: '미니 케이크',
                        EN: 'Mini Cake'
                    },
                    price: {
                        dessert: 15000
                    },
                    menuOptions: {
                        type: [
                            {
                                KR: '미니치즈케이크',
                                EN: 'Cheese',
                            },
                            {
                                KR: '미니티라미수',
                                EN: 'Tiramisu',
                            },
                            {
                                KR: '초코무스',
                                EN: 'Chocolate Mousse',
                            },
                        ],
                        candle: [
                            {
                                KR: '짧은 초 (1살)',
                                EN: 'Short Candle (1yr)',
                                maxNumber: 9
                            },
                            {
                                KR: '긴 초 (10살)',
                                EN: 'Tall Candle (10yrs)',
                                maxNumber: 10
                            }
                        ]
                    },
                    picture: {
                        dessert: true
                    },
                    details: '',
                    status: {
                        
                    },
                    delivery: true
                },
                {
                    name: {
                        KR: '초코 브라우니 (1pc)',
                        EN: 'Chocolate Brownie (1pc)'
                    },
                    price: {
                        dessert: 2000
                    },
                    menuOptions: {
                        
                    },
                    picture: {
                        dessert: true
                    },
                    details: '',
                    status: {
                        
                    },
                    delivery: true
                },
                {
                    name: {
                        KR: '초코 브라우니 (2pc)',
                        EN: 'Chocolate Brownie (2pc)'
                    },
                    price: {
                        dessert: 3900
                    },
                    menuOptions: {
                        
                    },
                    picture: {
                        dessert: true
                    },
                    details: '',
                    status: {
                        
                    },
                    delivery: true
                },
                {
                    name: {
                        KR: '나무꾼 케이크',
                        EN: 'Lumberjack Cake'
                    },
                    price: {
                        dessert: 7000
                    },
                    menuOptions: {
                        
                    },
                    picture: {
                        dessert: true
                    },
                    details: '',
                    status: {
                        
                    },
                    delivery: true
                },
                {
                    name: {
                        KR: '수제쿠키',
                        EN: 'Hand-made cookie'
                    },
                    price: {
                        dessert: 3000
                    },
                    menuOptions: {
                        type: [
                            {
                                KR: '마카다미아 초코칩',
                                EN: 'Macadamia Chocochip'
                            },
                            {
                                KR: '호미아 (아몬드)',
                                EN: 'Almond'
                            },
                        ]
                    },
                    picture: {
                        dessert: true
                    },
                    details: '',
                    status: {
                        
                    },
                    delivery: true
                },
                {
                    name: {
                        KR: '바삭 마늘 바게트',
                        EN: 'Basak Garlic Baguette'
                    },
                    price: {
                        dessert: 2000
                    },
                    menuOptions: {
                        
                    },
                    picture: {
                        dessert: true
                    },
                    details: '',
                    status: {
                        
                    },
                    delivery: true
                },
                {
                    name: {
                        KR: '말렌카 허니케이크',
                        EN: 'Marlenka Cake'
                    },
                    price: {
                        dessert: 4800
                    },
                    menuOptions: {
                        type: [
                            {
                                KR: '코코아',
                                EN: 'Cocoa'
                            },
                            {
                                KR: '월넛',
                                EN: 'Walnut'
                            },
                        ]
                    },
                    picture: {
                        dessert: true
                    },
                    details: '',
                    status: {
                        
                    },
                    delivery: true
                },
                {
                    name: {
                        KR: '베이글+크림치즈',
                        EN: 'Bagel+Cream Cheese'
                    },
                    price: {
                        dessert: 3500
                    },
                    menuOptions: {
                        extra: [
                            {
                                KR: '크림치즈 추가',
                                EN: 'Add Cream Cheese',
                                price: 1000
                            }
                        ],
                        type: [
                            {
                                KR: '플레인',
                                EN: 'Plain'
                            },
                            {
                                KR: '어니언',
                                EN: 'Onion'
                            },
                            {
                                KR: '치즈(3800원 / 옆은 추가 300원이라는 뜻)',
                                EN: 'Cheese',
                                price: 300
                            },
                        ]
                    },
                    picture: {
                        dessert: true
                    },
                    details: '',
                    status: {
                        
                    },
                    delivery: true
                },
            ]
        }
    }
}