"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const City_1 = __importDefault(require("./City"));
const db_1 = __importDefault(require("./db"));
db_1.default.once('open', async () => {
    await City_1.default.deleteMany();
    const cities = [
        { name: 'delhi', neighbors: [
                { name: 'mumbai', distance: 1400 },
                { name: 'kolkata', distance: 1500 },
                { name: 'jaipur', distance: 280 },
                { name: 'lucknow', distance: 500 }
            ]
        },
        { name: 'mumbai', neighbors: [
                { name: 'delhi', distance: 1400 },
                { name: 'pune', distance: 150 },
                { name: 'bangalore', distance: 980 },
                { name: 'surat', distance: 300 }
            ]
        },
        { name: 'kolkata', neighbors: [
                { name: 'delhi', distance: 1500 },
                { name: 'patna', distance: 600 },
                { name: 'bhubaneswar', distance: 440 },
                { name: 'guwahati', distance: 970 }
            ]
        },
        { name: 'jaipur', neighbors: [
                { name: 'delhi', distance: 280 },
                { name: 'ahmedabad', distance: 660 },
                { name: 'udaipur', distance: 400 },
                { name: 'jodhpur', distance: 350 }
            ]
        },
        { name: 'pune', neighbors: [
                { name: 'mumbai', distance: 150 },
                { name: 'bangalore', distance: 840 },
                { name: 'hyderabad', distance: 560 },
                { name: 'nagpur', distance: 720 }
            ]
        },
        { name: 'bangalore', neighbors: [
                { name: 'mumbai', distance: 980 },
                { name: 'pune', distance: 840 },
                { name: 'chennai', distance: 350 },
                { name: 'hyderabad', distance: 570 }
            ]
        },
        { name: 'bhubaneswar', neighbors: [
                { name: 'kolkata', distance: 440 },
                { name: 'visakhapatnam', distance: 450 },
                { name: 'raipur', distance: 490 }
            ]
        },
        { name: 'udaipur', neighbors: [
                { name: 'jaipur', distance: 400 },
                { name: 'ahmedabad', distance: 260 },
                { name: 'jodhpur', distance: 270 }
            ]
        },
        { name: 'ahmedabad', neighbors: [
                { name: 'jaipur', distance: 660 },
                { name: 'udaipur', distance: 260 },
                { name: 'surat', distance: 270 },
                { name: 'vadodara', distance: 110 }
            ]
        },
        { name: 'hyderabad', neighbors: [
                { name: 'pune', distance: 560 },
                { name: 'chennai', distance: 630 },
                { name: 'visakhapatnam', distance: 620 },
                { name: 'nagpur', distance: 500 }
            ]
        },
        { name: 'chennai', neighbors: [
                { name: 'bangalore', distance: 350 },
                { name: 'hyderabad', distance: 630 },
                { name: 'madurai', distance: 460 },
                { name: 'coimbatore', distance: 510 }
            ]
        },
        { name: 'visakhapatnam', neighbors: [
                { name: 'bhubaneswar', distance: 450 },
                { name: 'hyderabad', distance: 620 },
                { name: 'raipur', distance: 520 }
            ]
        },
        { name: 'surat', neighbors: [
                { name: 'ahmedabad', distance: 270 },
                { name: 'mumbai', distance: 300 },
                { name: 'vadodara', distance: 150 }
            ]
        },
        { name: 'patna', neighbors: [
                { name: 'kolkata', distance: 600 },
                { name: 'lucknow', distance: 530 },
                { name: 'ranchi', distance: 370 }
            ]
        },
        { name: 'lucknow', neighbors: [
                { name: 'delhi', distance: 500 },
                { name: 'patna', distance: 530 },
                { name: 'kanpur', distance: 80 }
            ]
        },
        { name: 'jodhpur', neighbors: [
                { name: 'jaipur', distance: 350 },
                { name: 'udaipur', distance: 270 },
                { name: 'ahmedabad', distance: 450 }
            ]
        },
        { name: 'nagpur', neighbors: [
                { name: 'pune', distance: 720 },
                { name: 'hyderabad', distance: 500 },
                { name: 'raipur', distance: 300 },
                { name: 'bhopal', distance: 350 }
            ]
        },
        { name: 'raipur', neighbors: [
                { name: 'bhubaneswar', distance: 490 },
                { name: 'nagpur', distance: 300 },
                { name: 'visakhapatnam', distance: 520 }
            ]
        },
        { name: 'coimbatore', neighbors: [
                { name: 'chennai', distance: 510 },
                { name: 'madurai', distance: 210 },
                { name: 'bangalore', distance: 360 }
            ]
        },
        { name: 'madurai', neighbors: [
                { name: 'chennai', distance: 460 },
                { name: 'coimbatore', distance: 210 },
                { name: 'trichy', distance: 140 }
            ]
        },
    ];
    await City_1.default.insertMany(cities);
    console.log('✅ 20 Indian city data inserted successfully.');
    process.exit();
});
//# sourceMappingURL=seed.js.map