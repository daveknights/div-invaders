export const startMessage = [
     1,  2,  3,   5,  6,  7,   9, 10, 11,  13,  14, 15, 17, 18, 19,    24, 25, 26,   31, 32, 33, 35, 36, 37,    42, 43, 44,  46,          50, 51, 52,  54,     56,
    121,    123, 125,    127, 129,         133,         137,           144,              152,    155,    157,   162,    164, 166,         170,    172, 174,    176,
    241,242,243, 245,246,247, 249,250,     253,254,255, 257,258,259,   264,265,266,      272,    275,    277,   282,283,284, 286,         290,291,292, 294,295,296,
    361,         365,366,     369,                 375,         379,           386,      392,    395,    397,   402,         406,         410,    412,     415,
    481,         485,    487, 489,490,491, 493,494,495, 497,498,499,   504,505,506,      512,    515,516,517,   522,         526,527,528, 530,    532,     535,

    1441,1442,1443,1444,1445, 1447,1448,1449, 1451,     1453, 1455,1456,1457,                                                               1480,   1494,
    1561,     1563,     1565, 1567,     1569, 1571,     1573, 1575,                                                                    1599,1600,   1614, 1615,
    1681,     1683,     1685, 1687,     1689, 1691,     1693, 1695,1696,                                                          1718,1719,1720,   1734,1735,1736,
    1801,     1803,     1805, 1807,     1809, 1811,     1813, 1815,                                                                    1839,1840,   1854,1855,
    1921,     1923,     1925, 1927,1928,1929, 1931,1932,1933, 1935,1936,1937,                                                               1960,   1974,

    2401,2402,2403, 2405, 2407,2408,2409, 2411,2412,2413,           2438,2439,2440,2441,2442,2443,2444,2445,2446,2447,2448,2449,2450,2451,2452,2453,2454,2455,2456,
    2521,           2525, 2527,     2529, 2531,                     2558,                                                                                     2576,
    2641,2642,      2645, 2647,2648,2649, 2651,2652,                2678,                                                                                     2696,
    2761,           2765, 2767,2768,      2771,                     2798,                                                                                     2816,
    2881,           2885, 2887,     2889, 2891,2892,2893,           2918,2919,2920,2921,2922,2923,2924,2925,2926,2927,2928,2929,2930,2931,2932,2933,2934,2935,2936
];
export const alienBlocks = [[
            3,                    9,
                124,            128,
            243,244,245,246,247,248,249,
        362,363,    365,366,367,    369,370,
    481,482,483,484,485,486,487,488,489,490,491,
    601,    603,604,605,606,607,608,609,    611,
    721,    723,                    729,    731,
                844,845,    847,848             ],

    [         3,                    9,
                124,            128,
    241,    243,244,245,246,247,248,249,    251,
    361,362,363,    365,366,367,    369,370,371,
    481,482,483,484,485,486,487,488,489,490,491,
        602,603,604,605,606,607,608,609,610,
            723,                    729,
        842,                            850     ]
];
export const playerBlocks = [
                     5,
                124,125,126,
                244,245,246,
        362,363,364,365,366,367,368,
    481,482,483,484,485,486,487,488,489,
    601,602,603,604,605,606,607,608,609,
    721,722,723,724,725,726,727,728,729
];
export const ufoBlocks = [
                         6,  7,  8,  9, 10, 11,
                124,125,126,127,128,129,130,131,132,133,
            243,244,245,246,247,248,249,250,251,252,253,254,
        362,363,    365,366,    368,369,    371,372,    374,375,
    481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,
            603,604,605,        608,609,        612,613,614,
                724,                                733
];
export const lifeBlocks = playerBlocks;
export const gameOverBlocks = [
     1,  2,  3,   5,  6,  7,   9, 10, 11, 12, 13,  15, 16, 17,    22, 23, 24,  26,     28,  30, 31, 32,  34, 35, 36,
    121,         125,    127, 129,    131,    133, 135,           142,    144, 146,    148, 150,         154,    156,
    241,    243, 245,246,247, 249,    251,    253, 255,256,       262,    264, 266,    268, 270,271,     274,275,276,
    361,    363, 365,    367, 369,    371,    373, 375,           382,    384, 386,    388, 390,         394,395,
    481,482,483, 485,    487, 489,    491,    493, 495,496,497,   502,503,504, 506,507,508, 510,511,512, 514,    516
];
export const numbers = [
    [1,  2,  3,
    121,    123,
    241,    243,
    361,    363,
    481,482,483],

    [    2,
        122,
        242,
        362,
        482     ],

    [1,  2,  3,
            123,
    241,242,243,
    361,
    481,482,483],

    [1,  2,  3,
            123,
        242,243,
            363,
    481,482,483],

    [1,     3,
    121,   123,
    241,242,243,
            363,
            483],

    [1,  2,  3,
    121,
    241,242,243,
            363,
    481,482,483],

    [1,  2,  3,
    121,
    241,242,243,
    361,    363,
    481,482,483],

    [1,  2,  3,
            123,
            243,
            363,
            483],

    [1,  2,  3,
    121,    123,
    241,242,243,
    361,    363,
    481,482,483],

    [1,  2,  3,
    121,    123,
    241,242,243,
            363,
            483]
];
