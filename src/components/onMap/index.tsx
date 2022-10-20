
import React from "react";
// @ts-ignore
import { Map, MapMarker } from "../map/index.tsx";

export const DeliveryMap: React.FC = () => {
    const orderData = [
        {
            "id": 1,
            "user": {
                "id": 401,
                "firstName": "Mia",
                "lastName": "Hyatt",
                "fullName": "Mia Hyatt",
                "gender": "Female",
                "gsm": "(115) 685-6986",
                "createdAt": "2022-09-25T10:44:39.737Z",
                "isActive": false,
                "avatar": [
                    {
                        "name": "c370d41b-a806-4a3e-a294-9e8d137c5015",
                        "percent": 100,
                        "size": 40088,
                        "status": "done",
                        "type": "image/jpeg",
                        "uid": "8465f46d-c6b4-4a7d-8102-3c96a75df2c7",
                        "url": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1217.jpg"
                    }
                ],
                "addresses": [
                    {
                        "text": "11706 Kautzer Stream, Massapequa, NY 11331",
                        "coordinate": [
                            "40.64248155243185",
                            "-73.78126216665414"
                        ]
                    },
                    {
                        "text": "11553 Lowe Lodge, Brooklyn, NY 11102",
                        "coordinate": [
                            "40.71027342559614",
                            "-73.84882759071735"
                        ]
                    },
                    {
                        "text": "11495 Marilyne Pass, Lindenhurst, NY 11027",
                        "coordinate": [
                            "40.78774782939564",
                            "-73.90491689907265"
                        ]
                    }
                ]
            },
            "amount": 147,
            "createdAt": "2022-10-06T03:24:16.094Z",
            "products": [
                {
                    "id": 126,
                    "name": "Tomato Mozzarella Flatbread",
                    "isActive": false,
                    "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
                    "images": [
                        {
                            "url": "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ2fHxmb29kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                            "name": "cdc8dd76-bb5d-4cb3-b80a-84db625c3feb",
                            "status": "done",
                            "type": "image/jpeg",
                            "uid": "c599357c-aab6-4caf-82c7-626ceb223a2c"
                        }
                    ],
                    "createdAt": "2022-07-12T22:11:45.484Z",
                    "price": 147,
                    "category": {
                        "id": 5,
                        "title": "Practical",
                        "isActive": true
                    }
                }
            ],
            "status": {
                "id": 4,
                "text": "Delivered"
            },
            "adress": {
                "text": "11495 Marilyne Pass, Lindenhurst, NY 11027",
                "coordinate": [
                    "40.78774782939564",
                    "-73.90491689907265"
                ]
            },
            "store": {
                "id": 14,
                "title": "Imani Gardens",
                "email": "Vida_Brakus@hotmail.com",
                "gsm": "(693) 707-7938",
                "isActive": false,
                "createdAt": "2022-01-20T21:21:06.544Z",
                "address": {
                    "text": "11722 Littel Hollow, Massapequa, NY 11106",
                    "coordinate": [
                        "40.821667418071975",
                        "-73.88647879422776"
                    ]
                },
                "products": []
            },
            "courier": {
                "id": 57,
                "name": "Kassandra",
                "surname": "Breitenberg",
                "email": "Terrence_Monahan29@yahoo.com",
                "gender": "Male",
                "gsm": "(662) 820-2832",
                "createdAt": "2022-05-26T22:14:46.223Z",
                "accountNumber": 5824424315,
                "licensePlate": "RCC 394",
                "address": "11908 Francesco Walks, Brooklyn, NY 11486",
                "store": {
                    "id": 17,
                    "title": "Leanna Circles",
                    "email": "Providenci_OConner@yahoo.com",
                    "gsm": "(946) 142-9596",
                    "isActive": false,
                    "createdAt": "2022-07-12T16:53:23.839Z",
                    "address": {
                        "text": "11438 Lowe Neck, Lindenhurst, NY 11052",
                        "coordinate": [
                            "40.889715302547145",
                            "-73.9018339541289"
                        ]
                    },
                    "products": []
                },
                "avatar": [
                    {
                        "name": "d092a795-db29-47d8-8d33-5e2eb05620c4",
                        "percent": 100,
                        "size": 40088,
                        "status": "done",
                        "type": "image/jpeg",
                        "uid": "90f73be9-27b0-425d-8584-12dc59c0f1ff",
                        "url": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/147.jpg"
                    }
                ]
            },
            "events": [
                {
                    "date": "2022-10-06T03:24:16.094Z",
                    "status": "Pending"
                },
                {
                    "date": "2022-10-06T03:32:16.094Z",
                    "status": "Ready"
                },
                {
                    "date": "2022-10-06T03:35:16.094Z",
                    "status": "On The Way"
                },
                {
                    "date": "2022-10-06T03:50:16.094Z",
                    "status": "Delivered"
                }
            ],
            "orderNumber": 498139
        },
        {
            "id": 2,
            "user": {
                "id": 390,
                "firstName": "Stephania",
                "lastName": "Batz",
                "fullName": "Stephania Batz",
                "gender": "Male",
                "gsm": "(983) 585-0217",
                "createdAt": "2022-09-27T06:36:57.526Z",
                "isActive": true,
                "avatar": [
                    {
                        "name": "fa165e3c-976e-4ffd-a6f1-ff1b306d5bca",
                        "percent": 100,
                        "size": 40088,
                        "status": "done",
                        "type": "image/jpeg",
                        "uid": "d7fc0a2c-812d-4171-b504-ea7c4a2ded24",
                        "url": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1140.jpg"
                    }
                ],
                "addresses": [
                    {
                        "text": "11987 Paucek Summit, Lindenhurst, NY 11229",
                        "coordinate": [
                            "40.66669064701033",
                            "-73.89091536314262"
                        ]
                    },
                    {
                        "text": "11827 Tomasa Park, Lindenhurst, NY 11301",
                        "coordinate": [
                            "40.705174543564866",
                            "-74.01519738145755"
                        ]
                    },
                    {
                        "text": "11994 Annalise Trail, Lindenhurst, NY 11986",
                        "coordinate": [
                            "40.82877003117456",
                            "-73.9437209393599"
                        ]
                    }
                ]
            },
            "amount": 1058,
            "createdAt": "2022-09-21T10:30:17.098Z",
            "products": [
                {
                    "id": 31,
                    "name": "Jr Whopper",
                    "isActive": true,
                    "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
                    "images": [
                        {
                            "url": "https://images.unsplash.com/photo-1553452118-621e1f860f43?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEwfHxmb29kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                            "name": "8fdac267-54d4-4448-80c1-134a078cb1d1",
                            "status": "done",
                            "type": "image/jpeg",
                            "uid": "189c2535-12c2-4805-b827-6402e520d854"
                        }
                    ],
                    "createdAt": "2022-07-13T08:44:47.490Z",
                    "price": 1058,
                    "category": {
                        "id": 3,
                        "title": "Pizzas",
                        "isActive": true,
                        "cover": "https://images.unsplash.com/photo-1625395005224-0fce68a3cdc8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                    }
                }
            ],
            "status": {
                "id": 2,
                "text": "Ready"
            },
            "adress": {
                "text": "11994 Annalise Trail, Lindenhurst, NY 11986",
                "coordinate": [
                    "40.82877003117456",
                    "-73.9437209393599"
                ]
            },
            "store": {
                "id": 2,
                "title": "Lebsack Crest",
                "email": "Jeff.Ferry@hotmail.com",
                "gsm": "(765) 952-3703",
                "isActive": false,
                "createdAt": "2022-04-08T05:31:49.134Z",
                "address": {
                    "text": "11402 Roberts Land, Lindenhurst, NY 11788",
                    "coordinate": [
                        "40.70793042041251",
                        "-73.95253449093636"
                    ]
                },
                "products": []
            },
            "courier": {
                "id": 4,
                "name": "Trisha",
                "surname": "Hermiston",
                "email": "Jasper_Bruen@gmail.com",
                "gender": "Male",
                "gsm": "(838) 058-8763",
                "createdAt": "2022-04-25T14:33:56.046Z",
                "accountNumber": 9258505591,
                "licensePlate": "CVA 980",
                "address": "11663 Savion Streets, Brooklyn, NY 11576",
                "store": {
                    "id": 14,
                    "title": "Imani Gardens",
                    "email": "Vida_Brakus@hotmail.com",
                    "gsm": "(693) 707-7938",
                    "isActive": false,
                    "createdAt": "2022-01-20T21:21:06.544Z",
                    "address": {
                        "text": "11722 Littel Hollow, Massapequa, NY 11106",
                        "coordinate": [
                            "40.821667418071975",
                            "-73.88647879422776"
                        ]
                    },
                    "products": []
                },
                "avatar": [
                    {
                        "name": "9164fb40-799e-45d2-9ad8-7db0062b9a41",
                        "percent": 100,
                        "size": 40088,
                        "status": "done",
                        "type": "image/jpeg",
                        "uid": "5ae2121f-2bc8-48e7-b8ab-ffd7ef10a2ca",
                        "url": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/530.jpg"
                    }
                ]
            },
            "events": [
                {
                    "date": "2022-09-21T10:30:17.098Z",
                    "status": "Pending"
                },
                {
                    "date": "2022-09-21T10:31:17.098Z",
                    "status": "Ready"
                },
                {
                    "status": "On The Way"
                },
                {
                    "status": "Delivered"
                }
            ],
            "orderNumber": 575239
        },
        {
            "id": 3,
            "user": {
                "id": 299,
                "firstName": "Kassandra",
                "lastName": "Rau",
                "fullName": "Kassandra Rau",
                "gender": "Female",
                "gsm": "(439) 462-6080",
                "createdAt": "2022-10-04T05:13:29.238Z",
                "isActive": false,
                "avatar": [
                    {
                        "name": "150d5743-7bc7-43ff-b139-d92bb7bb78f1",
                        "percent": 100,
                        "size": 40088,
                        "status": "done",
                        "type": "image/jpeg",
                        "uid": "dbfa1a40-8911-481f-81a4-9f1f4022f3a9",
                        "url": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1027.jpg"
                    }
                ],
                "addresses": [
                    {
                        "text": "11348 Grady Dale, Lindenhurst, NY 11915",
                        "coordinate": [
                            "40.71668043192146",
                            "-73.99223994903706"
                        ]
                    },
                    {
                        "text": "11586 Wava Port, Brooklyn, NY 11211",
                        "coordinate": [
                            "40.70903389802963",
                            "-73.95633910461159"
                        ]
                    },
                    {
                        "text": "11019 Mosciski Loop, Brooklyn, NY 11330",
                        "coordinate": [
                            "40.681155426086335",
                            "-73.93793091732634"
                        ]
                    }
                ]
            },
            "amount": 4025,
            "createdAt": "2022-09-18T12:26:35.508Z",
            "products": [
                {
                    "id": 23,
                    "name": "Whopper Sandwich",
                    "isActive": false,
                    "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
                    "images": [
                        {
                            "url": "https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                            "name": "7d5de9d0-fe3d-4eea-9ace-3e4bbc874ef2",
                            "status": "done",
                            "type": "image/jpeg",
                            "uid": "b576e92f-e255-4074-9ddd-c6de32b7fdc6"
                        }
                    ],
                    "createdAt": "2021-12-19T11:05:11.449Z",
                    "price": 338,
                    "category": {
                        "id": 6,
                        "title": "Refined",
                        "isActive": true
                    }
                },
                {
                    "id": 33,
                    "name": "Classic Grilled Cheese",
                    "isActive": true,
                    "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
                    "images": [
                        {
                            "url": "https://images.unsplash.com/photo-1617421753170-46511a8d73fc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTkwfHxmb29kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                            "name": "14ce6495-3ab4-4aed-a961-a3f51870631c",
                            "status": "done",
                            "type": "image/jpeg",
                            "uid": "87a7766c-c5ff-445c-87a3-057e9a899bdd"
                        }
                    ],
                    "createdAt": "2022-04-26T04:06:18.586Z",
                    "price": 2230,
                    "category": {
                        "id": 6,
                        "title": "Refined",
                        "isActive": true
                    }
                },
                {
                    "id": 56,
                    "name": "Eggplant Tofu",
                    "isActive": false,
                    "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
                    "images": [
                        {
                            "url": "https://images.unsplash.com/photo-1558326567-98ae2405596b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM1fHxmb29kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                            "name": "d21013c5-63f2-4293-b24a-535238101958",
                            "status": "done",
                            "type": "image/jpeg",
                            "uid": "9ff5ec93-e97b-4486-aea8-eeae34fe38dd"
                        }
                    ],
                    "createdAt": "2022-08-04T00:21:06.203Z",
                    "price": 1457,
                    "category": {
                        "id": 6,
                        "title": "Refined",
                        "isActive": true
                    }
                }
            ],
            "status": {
                "id": 2,
                "text": "Ready"
            },
            "adress": {
                "text": "11348 Grady Dale, Lindenhurst, NY 11915",
                "coordinate": [
                    "40.71668043192146",
                    "-73.99223994903706"
                ]
            },
            "store": {
                "id": 14,
                "title": "Imani Gardens",
                "email": "Vida_Brakus@hotmail.com",
                "gsm": "(693) 707-7938",
                "isActive": false,
                "createdAt": "2022-01-20T21:21:06.544Z",
                "address": {
                    "text": "11722 Littel Hollow, Massapequa, NY 11106",
                    "coordinate": [
                        "40.821667418071975",
                        "-73.88647879422776"
                    ]
                },
                "products": []
            },
            "courier": {
                "id": 22,
                "name": "Woodrow",
                "surname": "Becker",
                "email": "Ahmed_Flatley4@gmail.com",
                "gender": "Female",
                "gsm": "(935) 812-6891",
                "createdAt": "2022-01-01T09:13:11.980Z",
                "accountNumber": 9844302540,
                "licensePlate": "SER 698",
                "address": "11659 Hartmann Loaf, Massapequa, NY 11433",
                "store": {
                    "id": 13,
                    "title": "Jake Walk",
                    "email": "Julie83@yahoo.com",
                    "gsm": "(514) 448-9123",
                    "isActive": true,
                    "createdAt": "2022-02-25T16:11:28.092Z",
                    "address": {
                        "text": "11675 Skiles Forges, Massapequa, NY 11473",
                        "coordinate": [
                            "40.67062124110137",
                            "-73.91956085301256"
                        ]
                    },
                    "products": []
                },
                "avatar": [
                    {
                        "name": "680c8d17-0edf-424d-a4ef-f694d3922c92",
                        "percent": 100,
                        "size": 40088,
                        "status": "done",
                        "type": "image/jpeg",
                        "uid": "5f766301-c52b-439b-b294-08735f37008e",
                        "url": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/403.jpg"
                    }
                ]
            },
            "events": [
                {
                    "date": "2022-09-18T12:26:35.508Z",
                    "status": "Pending"
                },
                {
                    "date": "2022-09-18T12:31:35.508Z",
                    "status": "Ready"
                },
                {
                    "status": "On The Way"
                },
                {
                    "status": "Delivered"
                }
            ],
            "orderNumber": 589860
        },
        {
            "id": 4,
            "user": {
                "id": 504,
                "firstName": "Werner",
                "lastName": "Funk",
                "fullName": "Werner Funk",
                "gender": "Male",
                "gsm": "(983) 649-1298",
                "createdAt": "2022-09-19T07:06:54.648Z",
                "isActive": false,
                "avatar": [
                    {
                        "name": "ee428d99-7be3-4ab8-8262-4bd4260375fd",
                        "percent": 100,
                        "size": 40088,
                        "status": "done",
                        "type": "image/jpeg",
                        "uid": "46780150-5d03-44e3-baa4-117254f2fe87",
                        "url": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/710.jpg"
                    }
                ],
                "addresses": [
                    {
                        "text": "11305 Legros Falls, Massapequa, NY 11852",
                        "coordinate": [
                            "40.68714688361487",
                            "-73.93740939600232"
                        ]
                    },
                    {
                        "text": "11904 Jevon Crossroad, Brooklyn, NY 11741",
                        "coordinate": [
                            "40.720679725766914",
                            "-73.8772516982113"
                        ]
                    },
                    {
                        "text": "11082 Rashawn Shore, Brooklyn, NY 11112",
                        "coordinate": [
                            "40.70005559498726",
                            "-73.99223780289893"
                        ]
                    }
                ]
            },
            "amount": 4316,
            "createdAt": "2022-09-30T07:54:51.524Z",
            "products": [
                {
                    "id": 11,
                    "name": "6 inch Oven Roasted Chicken",
                    "isActive": false,
                    "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
                    "images": [
                        {
                            "url": "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                            "name": "3b702ad1-4cbd-41bf-8929-472516fdd557",
                            "status": "done",
                            "type": "image/jpeg",
                            "uid": "bb0da262-5053-441a-aab7-a77852567f1e"
                        }
                    ],
                    "createdAt": "2022-04-28T21:56:50.231Z",
                    "price": 1918,
                    "category": {
                        "id": 10,
                        "title": "Sleek",
                        "isActive": true
                    }
                },
                {
                    "id": 63,
                    "name": "Crispy Chicken Sandwich",
                    "isActive": false,
                    "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
                    "images": [
                        {
                            "url": "https://images.unsplash.com/photo-1618485476859-01e8fa229c52?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmFrZSUyMGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                            "name": "4e782a8d-f9a3-47c6-96bb-e0f4026becc8",
                            "status": "done",
                            "type": "image/jpeg",
                            "uid": "ec7cd99c-2270-4a88-a69d-e259ae4bf8f0"
                        }
                    ],
                    "createdAt": "2022-09-29T21:51:50.160Z",
                    "price": 2398,
                    "category": {
                        "id": 7,
                        "title": "Practical",
                        "isActive": true
                    }
                }
            ],
            "status": {
                "id": 1,
                "text": "Pending"
            },
            "adress": {
                "text": "11082 Rashawn Shore, Brooklyn, NY 11112",
                "coordinate": [
                    "40.70005559498726",
                    "-73.99223780289893"
                ]
            },
            "store": {
                "id": 18,
                "title": "Jamaal Light",
                "email": "Paige_Wunsch@hotmail.com",
                "gsm": "(762) 798-1367",
                "isActive": true,
                "createdAt": "2021-11-20T03:06:43.262Z",
                "address": {
                    "text": "11206 Maida Centers, Massapequa, NY 11555",
                    "coordinate": [
                        "40.71734864858173",
                        "-73.98055044458222"
                    ]
                },
                "products": []
            },
            "courier": {
                "id": 41,
                "name": "Wava",
                "surname": "Rutherford",
                "email": "Norris_Considine@yahoo.com",
                "gender": "Male",
                "gsm": "(474) 814-3655",
                "createdAt": "2022-05-08T12:10:27.949Z",
                "accountNumber": 5834481752,
                "licensePlate": "PJI 538",
                "address": "11670 Carroll Loop, Lindenhurst, NY 11503",
                "store": {
                    "id": 3,
                    "title": "Torrance Estate",
                    "email": "Lila_Vandervort82@gmail.com",
                    "gsm": "(355) 767-3125",
                    "isActive": true,
                    "createdAt": "2022-07-28T06:35:39.663Z",
                    "address": {
                        "text": "11971 Schmitt Highway, Brooklyn, NY 11060",
                        "coordinate": [
                            "40.6192729500347",
                            "-74.06829475299625"
                        ]
                    },
                    "products": []
                },
                "avatar": [
                    {
                        "name": "24bf8d55-b61e-40fc-9200-2e4e0d999d42",
                        "percent": 100,
                        "size": 40088,
                        "status": "done",
                        "type": "image/jpeg",
                        "uid": "5e497e1a-5203-4d9e-b314-a73d7affb206",
                        "url": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/522.jpg"
                    }
                ]
            },
            "events": [
                {
                    "date": "2022-09-30T07:54:51.524Z",
                    "status": "Pending"
                },
                {
                    "status": "Ready"
                },
                {
                    "status": "On The Way"
                },
                {
                    "status": "Delivered"
                }
            ],
            "orderNumber": 208303
        },
        {
            "id": 5,
            "user": {
                "id": 403,
                "firstName": "Nicholaus",
                "lastName": "Reichel",
                "fullName": "Nicholaus Reichel",
                "gender": "Female",
                "gsm": "(910) 077-5940",
                "createdAt": "2022-10-05T03:08:11.512Z",
                "isActive": false,
                "avatar": [
                    {
                        "name": "749aece8-e7c1-4453-a6ac-37892440d5e9",
                        "percent": 100,
                        "size": 40088,
                        "status": "done",
                        "type": "image/jpeg",
                        "uid": "17e2afbf-cf65-4f20-9ead-d04d26eb0dca",
                        "url": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/494.jpg"
                    }
                ],
                "addresses": [
                    {
                        "text": "11078 Hailee Avenue, Lindenhurst, NY 11396",
                        "coordinate": [
                            "40.73717053323046",
                            "-73.95943631965176"
                        ]
                    },
                    {
                        "text": "11116 Faye Forest, Massapequa, NY 11252",
                        "coordinate": [
                            "40.59509813180706",
                            "-73.78763797213502"
                        ]
                    },
                    {
                        "text": "11550 Miguel Branch, Lindenhurst, NY 11464",
                        "coordinate": [
                            "40.87545552612228",
                            "-73.90652136981292"
                        ]
                    }
                ]
            },
            "amount": 1863,
            "createdAt": "2022-09-18T12:26:13.678Z",
            "products": [
                {
                    "id": 133,
                    "name": "Triple Whopper with Cheese",
                    "isActive": false,
                    "description": "The Football Is Good For Training And Recreational Purposes",
                    "images": [
                        {
                            "url": "https://images.unsplash.com/photo-1432139509613-5c4255815697?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                            "name": "ef94f4b3-cdfc-4dad-9565-8694426186dc",
                            "status": "done",
                            "type": "image/jpeg",
                            "uid": "dc78f2b3-7264-44ec-a679-c8dd5fa37fab"
                        }
                    ],
                    "createdAt": "2021-11-25T23:22:20.356Z",
                    "price": 1863,
                    "category": {
                        "id": 9,
                        "title": "Rustic",
                        "isActive": true
                    }
                }
            ],
            "status": {
                "id": 1,
                "text": "Pending"
            },
            "adress": {
                "text": "11116 Faye Forest, Massapequa, NY 11252",
                "coordinate": [
                    "40.59509813180706",
                    "-73.78763797213502"
                ]
            },
            "store": {
                "id": 16,
                "title": "Rickie Burg",
                "email": "Ned.Cronin13@hotmail.com",
                "gsm": "(905) 988-7934",
                "isActive": false,
                "createdAt": "2021-10-19T21:31:22.581Z",
                "address": {
                    "text": "11027 Annette Squares, Lindenhurst, NY 11171",
                    "coordinate": [
                        "40.603492279640136",
                        "-74.15999083360761"
                    ]
                },
                "products": []
            },
            "courier": {
                "id": 68,
                "name": "Elian",
                "surname": "MacGyver",
                "email": "Wilhelmine5@hotmail.com",
                "gender": "Female",
                "gsm": "(126) 896-8290",
                "createdAt": "2022-09-05T16:01:12.372Z",
                "accountNumber": 4719251680,
                "licensePlate": "PNQ 380",
                "address": "11707 Damian Creek, Brooklyn, NY 11637",
                "store": {
                    "id": 15,
                    "title": "Schowalter Islands",
                    "email": "Kariane_Greenfelder@yahoo.com",
                    "gsm": "(885) 747-4020",
                    "isActive": true,
                    "createdAt": "2021-11-24T18:29:51.600Z",
                    "address": {
                        "text": "11281 Clay Divide, Massapequa, NY 11507",
                        "coordinate": [
                            "40.720535760765664",
                            "-73.8594951503135"
                        ]
                    },
                    "products": []
                },
                "avatar": [
                    {
                        "name": "0ec308fd-b647-49a0-a734-34cc9c2445bd",
                        "percent": 100,
                        "size": 40088,
                        "status": "done",
                        "type": "image/jpeg",
                        "uid": "8af927e8-8fc4-4074-857f-f68db3d8fbb1",
                        "url": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/841.jpg"
                    }
                ]
            },
            "events": [
                {
                    "date": "2022-09-18T12:26:13.678Z",
                    "status": "Pending"
                },
                {
                    "status": "Ready"
                },
                {
                    "status": "On The Way"
                },
                {
                    "status": "Delivered"
                }
            ],
            "orderNumber": 638518
        },
        {
            "id": 6,
            "user": {
                "id": 173,
                "firstName": "Paolo",
                "lastName": "Gaylord",
                "fullName": "Paolo Gaylord",
                "gender": "Female",
                "gsm": "(312) 750-2975",
                "createdAt": "2022-09-16T05:39:52.945Z",
                "isActive": false,
                "avatar": [
                    {
                        "name": "19710fe2-c374-4844-b923-0cc1c88a5f24",
                        "percent": 100,
                        "size": 40088,
                        "status": "done",
                        "type": "image/jpeg",
                        "uid": "cad67f2e-8f21-460f-b488-9c9e162fa2be",
                        "url": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/664.jpg"
                    }
                ],
                "addresses": [
                    {
                        "text": "11646 Kreiger Well, Brooklyn, NY 11025",
                        "coordinate": [
                            "40.77393798411921",
                            "-73.96658171824109"
                        ]
                    },
                    {
                        "text": "11426 Connelly Extension, Massapequa, NY 11598",
                        "coordinate": [
                            "40.741235893255606",
                            "-73.9968371304563"
                        ]
                    },
                    {
                        "text": "11920 Soledad Turnpike, Lindenhurst, NY 11460",
                        "coordinate": [
                            "40.65660613309851",
                            "-73.95442767996877"
                        ]
                    }
                ]
            },
            "amount": 2344,
            "createdAt": "2022-09-30T12:00:14.547Z",
            "products": [
                {
                    "id": 2,
                    "name": "Black Forest Ham",
                    "isActive": false,
                    "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
                    "images": [
                        {
                            "url": "https://images.unsplash.com/photo-1607330289024-1535c6b4e1c1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTczfHxmb29kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                            "name": "d90166fb-c904-43fd-8cad-d7fea4196737",
                            "status": "done",
                            "type": "image/jpeg",
                            "uid": "359436dc-d6cd-45ae-936b-6fe8bbdba945"
                        }
                    ],
                    "createdAt": "2022-04-15T13:09:34.547Z",
                    "price": 994,
                    "category": {
                        "id": 10,
                        "title": "Sleek",
                        "isActive": true
                    }
                },
                {
                    "id": 6,
                    "name": "Big King",
                    "isActive": true,
                    "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
                    "images": [
                        {
                            "url": "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                            "name": "b4018cee-0ad9-4039-9207-1c23e9d476ba",
                            "status": "done",
                            "type": "image/jpeg",
                            "uid": "c35a5b58-1d5b-4428-b2d7-1fcdc5019adf"
                        }
                    ],
                    "createdAt": "2022-03-03T22:28:49.683Z",
                    "price": 1350,
                    "category": {
                        "id": 8,
                        "title": "Unbranded",
                        "isActive": true
                    }
                }
            ],
            "status": {
                "id": 5,
                "text": "Cancelled"
            },
            "adress": {
                "text": "11920 Soledad Turnpike, Lindenhurst, NY 11460",
                "coordinate": [
                    "40.65660613309851",
                    "-73.95442767996877"
                ]
            },
            "store": {
                "id": 13,
                "title": "Jake Walk",
                "email": "Julie83@yahoo.com",
                "gsm": "(514) 448-9123",
                "isActive": true,
                "createdAt": "2022-02-25T16:11:28.092Z",
                "address": {
                    "text": "11675 Skiles Forges, Massapequa, NY 11473",
                    "coordinate": [
                        "40.67062124110137",
                        "-73.91956085301256"
                    ]
                },
                "products": []
            },
            "courier": {
                "id": 54,
                "name": "Monty",
                "surname": "Miller",
                "email": "Princess41@yahoo.com",
                "gender": "Male",
                "gsm": "(486) 506-7737",
                "createdAt": "2022-10-13T04:30:43.890Z",
                "accountNumber": 5871601568,
                "licensePlate": "LCY 849",
                "address": "11685 Watsica Heights, Brooklyn, NY 11241",
                "store": {
                    "id": 14,
                    "title": "Imani Gardens",
                    "email": "Vida_Brakus@hotmail.com",
                    "gsm": "(693) 707-7938",
                    "isActive": false,
                    "createdAt": "2022-01-20T21:21:06.544Z",
                    "address": {
                        "text": "11722 Littel Hollow, Massapequa, NY 11106",
                        "coordinate": [
                            "40.821667418071975",
                            "-73.88647879422776"
                        ]
                    },
                    "products": []
                },
                "avatar": [
                    {
                        "name": "7a516277-2f55-4e03-858e-65087cc9019c",
                        "percent": 100,
                        "size": 40088,
                        "status": "done",
                        "type": "image/jpeg",
                        "uid": "4669fa99-8f83-4e52-ba52-8a4170796dab",
                        "url": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1068.jpg"
                    }
                ]
            },
            "events": [
                {
                    "date": "2022-09-30T12:00:14.547Z",
                    "status": "Pending"
                },
                {
                    "date": "2022-09-30T12:05:14.547Z",
                    "status": "Ready"
                },
                {
                    "date": "2022-09-30T12:07:14.547Z",
                    "status": "On The Way"
                },
                {
                    "date": "2022-09-30T12:17:14.547Z",
                    "status": "Cancelled"
                }
            ],
            "orderNumber": 858707
        },
        {
            "id": 7,
            "user": {
                "id": 18,
                "firstName": "Elinore",
                "lastName": "Baumbach",
                "fullName": "Elinore Baumbach",
                "gender": "Male",
                "gsm": "(571) 143-8204",
                "createdAt": "2022-10-04T16:52:39.969Z",
                "isActive": true,
                "avatar": [
                    {
                        "name": "50478bb2-7477-4dc1-ad59-f638cd476d6b",
                        "percent": 100,
                        "size": 40088,
                        "status": "done",
                        "type": "image/jpeg",
                        "uid": "a99c0d8c-53dc-4f1f-bff0-ec6668f2880c",
                        "url": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/563.jpg"
                    }
                ],
                "addresses": [
                    {
                        "text": "11127 Gustave Throughway, Massapequa, NY 11141",
                        "coordinate": [
                            "40.74605854301652",
                            "-73.983292147207"
                        ]
                    },
                    {
                        "text": "11299 Sporer Hollow, Massapequa, NY 11577",
                        "coordinate": [
                            "40.69236218044413",
                            "-73.9865830961965"
                        ]
                    },
                    {
                        "text": "11803 Torphy Center, Lindenhurst, NY 11085",
                        "coordinate": [
                            "40.72113545397827",
                            "-73.9996308758439"
                        ]
                    }
                ]
            },
            "amount": 817,
            "createdAt": "2022-09-25T22:14:30.027Z",
            "products": [
                {
                    "id": 55,
                    "name": "Half Size Turkey Breast Sandwich",
                    "isActive": false,
                    "description": "The Football Is Good For Training And Recreational Purposes",
                    "images": [
                        {
                            "url": "https://images.unsplash.com/photo-1556386734-4227a180d19e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTY0fHxmb29kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                            "name": "b91bdcc2-f375-4da5-9bb2-02dd4b696a8f",
                            "status": "done",
                            "type": "image/jpeg",
                            "uid": "aeaecbca-e2b4-4da8-b9f0-cc18098f9183"
                        }
                    ],
                    "createdAt": "2022-02-11T22:54:31.046Z",
                    "price": 817,
                    "category": {
                        "id": 3,
                        "title": "Pizzas",
                        "isActive": true,
                        "cover": "https://images.unsplash.com/photo-1625395005224-0fce68a3cdc8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                    }
                }
            ],
            "status": {
                "id": 5,
                "text": "Cancelled"
            },
            "adress": {
                "text": "11127 Gustave Throughway, Massapequa, NY 11141",
                "coordinate": [
                    "40.74605854301652",
                    "-73.983292147207"
                ]
            },
            "store": {
                "id": 10,
                "title": "Dorris Curve",
                "email": "Jalen.Nolan@gmail.com",
                "gsm": "(037) 365-0444",
                "isActive": false,
                "createdAt": "2021-10-25T02:30:41.911Z",
                "address": {
                    "text": "11693 Abdul Trace, Brooklyn, NY 11183",
                    "coordinate": [
                        "40.70524540705459",
                        "-74.01590650996995"
                    ]
                },
                "products": []
            },
            "courier": {
                "id": 57,
                "name": "Kassandra",
                "surname": "Breitenberg",
                "email": "Terrence_Monahan29@yahoo.com",
                "gender": "Male",
                "gsm": "(662) 820-2832",
                "createdAt": "2022-05-26T22:14:46.223Z",
                "accountNumber": 5824424315,
                "licensePlate": "RCC 394",
                "address": "11908 Francesco Walks, Brooklyn, NY 11486",
                "store": {
                    "id": 17,
                    "title": "Leanna Circles",
                    "email": "Providenci_OConner@yahoo.com",
                    "gsm": "(946) 142-9596",
                    "isActive": false,
                    "createdAt": "2022-07-12T16:53:23.839Z",
                    "address": {
                        "text": "11438 Lowe Neck, Lindenhurst, NY 11052",
                        "coordinate": [
                            "40.889715302547145",
                            "-73.9018339541289"
                        ]
                    },
                    "products": []
                },
                "avatar": [
                    {
                        "name": "d092a795-db29-47d8-8d33-5e2eb05620c4",
                        "percent": 100,
                        "size": 40088,
                        "status": "done",
                        "type": "image/jpeg",
                        "uid": "90f73be9-27b0-425d-8584-12dc59c0f1ff",
                        "url": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/147.jpg"
                    }
                ]
            },
            "events": [
                {
                    "date": "2022-09-25T22:14:30.027Z",
                    "status": "Pending"
                },
                {
                    "date": "2022-09-25T22:17:30.027Z",
                    "status": "Ready"
                },
                {
                    "date": "2022-09-25T22:18:30.027Z",
                    "status": "On The Way"
                },
                {
                    "date": "2022-09-25T22:21:30.027Z",
                    "status": "Cancelled"
                }
            ],
            "orderNumber": 270827
        },
        {
            "id": 8,
            "user": {
                "id": 540,
                "firstName": "Asia",
                "lastName": "Ferry",
                "fullName": "Asia Ferry",
                "gender": "Female",
                "gsm": "(570) 555-5586",
                "createdAt": "2022-09-23T01:13:31.242Z",
                "isActive": false,
                "avatar": [
                    {
                        "name": "0af51d2c-c9a2-4a20-a769-9db980cdd75b",
                        "percent": 100,
                        "size": 40088,
                        "status": "done",
                        "type": "image/jpeg",
                        "uid": "2a35fa4d-a589-4a5e-84d8-1f35d38c83fa",
                        "url": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/412.jpg"
                    }
                ],
                "addresses": [
                    {
                        "text": "11462 Hassan Creek, Lindenhurst, NY 11016",
                        "coordinate": [
                            "40.640679597275714",
                            "-74.11835346963784"
                        ]
                    },
                    {
                        "text": "11353 Darrel Parkway, Massapequa, NY 11814",
                        "coordinate": [
                            "40.73096467439505",
                            "-73.99764566992536"
                        ]
                    },
                    {
                        "text": "11646 Kreiger Well, Brooklyn, NY 11025",
                        "coordinate": [
                            "40.77393798411921",
                            "-73.96658171824109"
                        ]
                    }
                ]
            },
            "amount": 3755,
            "createdAt": "2022-09-22T04:59:48.488Z",
            "products": [
                {
                    "id": 64,
                    "name": "Six inch Rotisserie Chicken",
                    "isActive": true,
                    "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
                    "images": [
                        {
                            "url": "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTgwfHxmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                            "name": "197c6f5f-0df5-4972-b872-8a256f458a7c",
                            "status": "done",
                            "type": "image/jpeg",
                            "uid": "3eb1be58-3794-4669-a254-26f81e166669"
                        }
                    ],
                    "createdAt": "2022-04-25T03:09:28.494Z",
                    "price": 376,
                    "category": {
                        "id": 8,
                        "title": "Unbranded",
                        "isActive": true
                    }
                },
                {
                    "id": 107,
                    "name": "Half Steak Panini",
                    "isActive": false,
                    "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
                    "images": [
                        {
                            "url": "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                            "name": "dd308750-0f96-4ad1-81b6-525be79e0118",
                            "status": "done",
                            "type": "image/jpeg",
                            "uid": "89fa3fa3-53a1-40b3-9403-46b566dc05c0"
                        }
                    ],
                    "createdAt": "2022-09-22T01:03:06.553Z",
                    "price": 2497,
                    "category": {
                        "id": 2,
                        "title": "Pastas",
                        "isActive": true,
                        "cover": "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                    }
                },
                {
                    "id": 144,
                    "name": "Chow Mein",
                    "isActive": false,
                    "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
                    "images": [
                        {
                            "url": "https://images.unsplash.com/photo-1606149059549-6042addafc5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg0fHxmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                            "name": "d05a598d-cea8-4ecf-b3df-c7de73adce0b",
                            "status": "done",
                            "type": "image/jpeg",
                            "uid": "64897da4-baea-4c08-b322-c6a7d1446d26"
                        }
                    ],
                    "createdAt": "2022-08-13T23:36:05.705Z",
                    "price": 882,
                    "category": {
                        "id": 9,
                        "title": "Rustic",
                        "isActive": true
                    }
                }
            ],
            "status": {
                "id": 4,
                "text": "Delivered"
            },
            "adress": {
                "text": "11353 Darrel Parkway, Massapequa, NY 11814",
                "coordinate": [
                    "40.73096467439505",
                    "-73.99764566992536"
                ]
            },
            "store": {
                "id": 12,
                "title": "Jewell Key",
                "email": "Stephanie8@yahoo.com",
                "gsm": "(962) 859-5334",
                "isActive": true,
                "createdAt": "2022-10-03T00:08:12.810Z",
                "address": {
                    "text": "11255 Bailee Port, Massapequa, NY 11535",
                    "coordinate": [
                        "40.59345332829929",
                        "-73.98380534927684"
                    ]
                },
                "products": []
            },
            "courier": {
                "id": 11,
                "name": "Misael",
                "surname": "Altenwerth",
                "email": "Adell_Harvey25@hotmail.com",
                "gender": "Male",
                "gsm": "(144) 114-5003",
                "createdAt": "2021-11-13T18:48:02.323Z",
                "accountNumber": 6402818463,
                "licensePlate": "JUC 917",
                "address": "11291 Cornelius Turnpike, Brooklyn, NY 11042",
                "store": {
                    "id": 9,
                    "title": "Emilio Lodge",
                    "email": "Morris.Hamill61@yahoo.com",
                    "gsm": "(522) 476-8504",
                    "isActive": false,
                    "createdAt": "2022-02-18T20:26:56.336Z",
                    "address": {
                        "text": "11817 Felipa Mills, Lindenhurst, NY 11218",
                        "coordinate": [
                            "40.83925761762169",
                            "-73.90185084134124"
                        ]
                    },
                    "products": []
                },
                "avatar": [
                    {
                        "name": "715bfb61-e686-4e34-bae2-518ff37666a5",
                        "percent": 100,
                        "size": 40088,
                        "status": "done",
                        "type": "image/jpeg",
                        "uid": "07740d14-ee1f-4d7c-aefa-2842b200be3a",
                        "url": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/569.jpg"
                    }
                ]
            },
            "events": [
                {
                    "date": "2022-09-22T04:59:48.488Z",
                    "status": "Pending"
                },
                {
                    "date": "2022-09-22T05:07:48.488Z",
                    "status": "Ready"
                },
                {
                    "date": "2022-09-22T05:10:48.488Z",
                    "status": "On The Way"
                },
                {
                    "date": "2022-09-22T05:24:48.488Z",
                    "status": "Delivered"
                }
            ],
            "orderNumber": 163643
        },
        {
            "id": 9,
            "user": {
                "id": 95,
                "firstName": "Grant",
                "lastName": "Champlin",
                "fullName": "Grant Champlin",
                "gender": "Female",
                "gsm": "(351) 239-2268",
                "createdAt": "2022-10-09T16:06:33.794Z",
                "isActive": false,
                "avatar": [
                    {
                        "name": "9be0a961-f10d-464e-b401-9df0fae2ead2",
                        "percent": 100,
                        "size": 40088,
                        "status": "done",
                        "type": "image/jpeg",
                        "uid": "f7d6de55-86cf-4193-8bff-c7fb04e41884",
                        "url": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/369.jpg"
                    }
                ],
                "addresses": [
                    {
                        "text": "11070 Bergstrom Groves, Brooklyn, NY 11186",
                        "coordinate": [
                            "40.57533106872448",
                            "-73.97984409019882"
                        ]
                    },
                    {
                        "text": "11646 Kreiger Well, Brooklyn, NY 11025",
                        "coordinate": [
                            "40.77393798411921",
                            "-73.96658171824109"
                        ]
                    },
                    {
                        "text": "11158 Mante Canyon, Massapequa, NY 11461",
                        "coordinate": [
                            "40.66013444217336",
                            "-73.80287032440825"
                        ]
                    }
                ]
            },
            "amount": 1237,
            "createdAt": "2022-09-14T14:23:55.608Z",
            "products": [
                {
                    "id": 1,
                    "name": "Original Chicken Sandwich",
                    "isActive": false,
                    "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
                    "images": [
                        {
                            "url": "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                            "name": "ea208262-eaf5-44b3-83af-bbda26db79b0",
                            "status": "done",
                            "type": "image/jpeg",
                            "uid": "a4269571-7c9e-45ea-aa2e-a16a0ae11490"
                        }
                    ],
                    "createdAt": "2022-03-25T04:32:26.095Z",
                    "price": 1237,
                    "category": {
                        "id": 4,
                        "title": "Fantastic",
                        "isActive": true
                    }
                }
            ],
            "status": {
                "id": 5,
                "text": "Cancelled"
            },
            "adress": {
                "text": "11158 Mante Canyon, Massapequa, NY 11461",
                "coordinate": [
                    "40.66013444217336",
                    "-73.80287032440825"
                ]
            },
            "store": {
                "id": 18,
                "title": "Jamaal Light",
                "email": "Paige_Wunsch@hotmail.com",
                "gsm": "(762) 798-1367",
                "isActive": true,
                "createdAt": "2021-11-20T03:06:43.262Z",
                "address": {
                    "text": "11206 Maida Centers, Massapequa, NY 11555",
                    "coordinate": [
                        "40.71734864858173",
                        "-73.98055044458222"
                    ]
                },
                "products": []
            },
            "courier": {
                "id": 48,
                "name": "Helga",
                "surname": "Weissnat",
                "email": "Rashad1@yahoo.com",
                "gender": "Female",
                "gsm": "(978) 240-3162",
                "createdAt": "2022-09-01T23:55:36.284Z",
                "accountNumber": 8072620861,
                "licensePlate": "DUI 866",
                "address": "11931 Elena Field, Massapequa, NY 11886",
                "store": {
                    "id": 14,
                    "title": "Imani Gardens",
                    "email": "Vida_Brakus@hotmail.com",
                    "gsm": "(693) 707-7938",
                    "isActive": false,
                    "createdAt": "2022-01-20T21:21:06.544Z",
                    "address": {
                        "text": "11722 Littel Hollow, Massapequa, NY 11106",
                        "coordinate": [
                            "40.821667418071975",
                            "-73.88647879422776"
                        ]
                    },
                    "products": []
                },
                "avatar": [
                    {
                        "name": "db36502f-e283-473c-b688-f04dd3dec4fd",
                        "percent": 100,
                        "size": 40088,
                        "status": "done",
                        "type": "image/jpeg",
                        "uid": "37a25c8e-a201-403e-8b36-7bd5f043d137",
                        "url": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/40.jpg"
                    }
                ]
            },
            "events": [
                {
                    "date": "2022-09-14T14:23:55.608Z",
                    "status": "Pending"
                },
                {
                    "date": "2022-09-14T14:24:55.608Z",
                    "status": "Ready"
                },
                {
                    "date": "2022-09-14T14:27:55.608Z",
                    "status": "On The Way"
                },
                {
                    "date": "2022-09-14T14:31:55.608Z",
                    "status": "Cancelled"
                }
            ],
            "orderNumber": 424418
        },
        {
            "id": 10,
            "user": {
                "id": 453,
                "firstName": "Ansel",
                "lastName": "Franecki",
                "fullName": "Ansel Franecki",
                "gender": "Female",
                "gsm": "(105) 257-0956",
                "createdAt": "2022-10-06T09:47:23.582Z",
                "isActive": false,
                "avatar": [
                    {
                        "name": "b8c770b0-8f24-4d72-8ab9-0723ebb82e77",
                        "percent": 100,
                        "size": 40088,
                        "status": "done",
                        "type": "image/jpeg",
                        "uid": "3b9b0357-4f1c-4551-9ef8-19e303cb71f4",
                        "url": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/49.jpg"
                    }
                ],
                "addresses": [
                    {
                        "text": "11870 Barton Manor, Massapequa, NY 11638",
                        "coordinate": [
                            "40.82948999650936",
                            "-73.85014902182587"
                        ]
                    },
                    {
                        "text": "11590 Dickens Bridge, Brooklyn, NY 11309",
                        "coordinate": [
                            "40.8770831315388",
                            "-73.85217650015457"
                        ]
                    },
                    {
                        "text": "11261 Dandre Lights, Massapequa, NY 11169",
                        "coordinate": [
                            "40.86926375960635",
                            "-73.86114528026873"
                        ]
                    }
                ]
            },
            "amount": 1935,
            "createdAt": "2022-09-26T08:38:12.959Z",
            "products": [
                {
                    "id": 123,
                    "name": "Half Italian",
                    "isActive": false,
                    "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
                    "images": [
                        {
                            "url": "https://images.unsplash.com/photo-1607330289024-1535c6b4e1c1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTczfHxmb29kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                            "name": "43616522-d6a6-40d1-94d1-556f78f8a641",
                            "status": "done",
                            "type": "image/jpeg",
                            "uid": "7393e515-ae75-4442-bf33-d9b3cc31c09f"
                        }
                    ],
                    "createdAt": "2021-12-05T02:26:47.413Z",
                    "price": 908,
                    "category": {
                        "id": 10,
                        "title": "Sleek",
                        "isActive": true
                    }
                },
                {
                    "id": 141,
                    "name": "Sofritas Burrito Bowl",
                    "isActive": true,
                    "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
                    "images": [
                        {
                            "url": "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjAwfHxmb29kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                            "name": "63cd3778-9673-4fb3-9c93-66e86ee82f83",
                            "status": "done",
                            "type": "image/jpeg",
                            "uid": "d63461bd-c7c2-44c7-8733-44f3d2c208de"
                        }
                    ],
                    "createdAt": "2021-12-16T05:53:50.896Z",
                    "price": 1027,
                    "category": {
                        "id": 10,
                        "title": "Sleek",
                        "isActive": true
                    }
                }
            ],
            "status": {
                "id": 2,
                "text": "Ready"
            },
            "adress": {
                "text": "11261 Dandre Lights, Massapequa, NY 11169",
                "coordinate": [
                    "40.86926375960635",
                    "-73.86114528026873"
                ]
            },
            "store": {
                "id": 10,
                "title": "Dorris Curve",
                "email": "Jalen.Nolan@gmail.com",
                "gsm": "(037) 365-0444",
                "isActive": false,
                "createdAt": "2021-10-25T02:30:41.911Z",
                "address": {
                    "text": "11693 Abdul Trace, Brooklyn, NY 11183",
                    "coordinate": [
                        "40.70524540705459",
                        "-74.01590650996995"
                    ]
                },
                "products": []
            },
            "courier": {
                "id": 25,
                "name": "Era",
                "surname": "Hilpert",
                "email": "Arturo.Jast91@hotmail.com",
                "gender": "Female",
                "gsm": "(299) 866-0475",
                "createdAt": "2022-04-12T22:04:27.383Z",
                "accountNumber": 2082679596,
                "licensePlate": "MCE 706",
                "address": "11374 Marquis Greens, Massapequa, NY 11000",
                "store": {
                    "id": 18,
                    "title": "Jamaal Light",
                    "email": "Paige_Wunsch@hotmail.com",
                    "gsm": "(762) 798-1367",
                    "isActive": true,
                    "createdAt": "2021-11-20T03:06:43.262Z",
                    "address": {
                        "text": "11206 Maida Centers, Massapequa, NY 11555",
                        "coordinate": [
                            "40.71734864858173",
                            "-73.98055044458222"
                        ]
                    },
                    "products": []
                },
                "avatar": [
                    {
                        "name": "149345d8-7bcb-44cc-890a-d0e42dc3809c",
                        "percent": 100,
                        "size": 40088,
                        "status": "done",
                        "type": "image/jpeg",
                        "uid": "2e74ff35-e132-4690-a5b0-e5734521ffa4",
                        "url": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/619.jpg"
                    }
                ]
            },
            "events": [
                {
                    "date": "2022-10-13T16:52:10.326Z",
                    "status": "Pending"
                },
                {
                    "date": "2022-10-13T16:53:10.326Z",
                    "status": "Ready"
                },
                {
                    "status": "On The Way"
                },
                {
                    "status": "Delivered"
                }
            ],
            "orderNumber": 474565
        }
    ]

    const defaultProps = {
        center: {
            lat: 40.73061,
            lng: -73.935242,
        },
        zoom: 13,
    };

    return (
        <Map {...defaultProps} >
            {orderData.map((order) => {
                return (
                    <MapMarker
                        key={order.id}
                        icon={{
                            url: "/images/marker-courier.svg",
                        }}
                        position={{
                            lat: Number(order.adress.coordinate[0]),
                            lng: Number(order.adress.coordinate[1]),
                        }}
                    />
                );
            })}
            {orderData.map((order) => {
                return (
                    <MapMarker
                        key={order.id}
                        icon={{
                            url: "/images/marker-location.svg",
                        }}
                        position={{
                            lat: Number(order.store.address.coordinate[0]),
                            lng: Number(order.store.address.coordinate[1]),
                        }}
                    />
                );
            })}
        </Map>
    );
};
