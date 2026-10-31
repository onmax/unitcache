import '../styles/alarms-print.css'
import { coreRows } from '@va/core/utils/coreRows.ts'

const alarmsTable0: [number, number, string][] = [[112, 600, 'error'], [699, 244, 'error'], [222, 227, 'error'], [527, 936, 'error'], [555, 183, 'ok'], [796, 34, 'ok'], [188, 573, 'error'], [490, 995, 'error'], [853, 827, 'warn'], [83, 584, 'error'], [273, 899, 'warn'], [854, 378, 'error']]
function alarmsSection0 (scale: number): string {
  const sum = alarmsTable0.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 0: ${sum} (${alarmsTable0.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable1: [number, number, string][] = [[954, 572, 'warn'], [91, 655, 'error'], [821, 43, 'ok'], [264, 789, 'error'], [455, 266, 'ok'], [414, 143, 'error'], [443, 849, 'ok'], [163, 832, 'ok'], [649, 0, 'warn'], [940, 308, 'ok'], [600, 790, 'error'], [686, 163, 'warn']]
function alarmsSection1 (scale: number): string {
  const sum = alarmsTable1.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 1: ${sum} (${alarmsTable1.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable2: [number, number, string][] = [[258, 309, 'warn'], [535, 630, 'ok'], [253, 401, 'ok'], [132, 526, 'ok'], [790, 451, 'error'], [983, 218, 'error'], [732, 407, 'warn'], [345, 972, 'warn'], [151, 886, 'ok'], [375, 163, 'error'], [972, 927, 'ok'], [887, 155, 'warn']]
function alarmsSection2 (scale: number): string {
  const sum = alarmsTable2.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 2: ${sum} (${alarmsTable2.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable3: [number, number, string][] = [[578, 422, 'ok'], [803, 162, 'error'], [709, 928, 'error'], [737, 341, 'error'], [22, 568, 'error'], [503, 321, 'ok'], [375, 418, 'warn'], [122, 514, 'error'], [322, 144, 'ok'], [41, 985, 'ok'], [809, 492, 'ok'], [264, 427, 'error']]
function alarmsSection3 (scale: number): string {
  const sum = alarmsTable3.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 3: ${sum} (${alarmsTable3.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable4: [number, number, string][] = [[701, 942, 'warn'], [533, 833, 'error'], [727, 958, 'error'], [595, 417, 'warn'], [531, 367, 'warn'], [458, 113, 'warn'], [180, 800, 'warn'], [256, 867, 'warn'], [783, 920, 'warn'], [366, 793, 'warn'], [736, 745, 'error'], [486, 563, 'warn']]
function alarmsSection4 (scale: number): string {
  const sum = alarmsTable4.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 4: ${sum} (${alarmsTable4.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable5: [number, number, string][] = [[282, 341, 'warn'], [290, 93, 'ok'], [101, 736, 'error'], [921, 402, 'error'], [848, 817, 'ok'], [60, 876, 'error'], [822, 205, 'warn'], [497, 783, 'error'], [61, 19, 'ok'], [514, 307, 'ok'], [145, 59, 'ok'], [337, 6, 'ok']]
function alarmsSection5 (scale: number): string {
  const sum = alarmsTable5.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 5: ${sum} (${alarmsTable5.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable6: [number, number, string][] = [[102, 784, 'error'], [532, 990, 'error'], [42, 210, 'warn'], [956, 940, 'error'], [755, 212, 'warn'], [889, 639, 'error'], [217, 602, 'error'], [479, 130, 'warn'], [842, 702, 'error'], [994, 339, 'ok'], [400, 817, 'warn'], [64, 345, 'warn']]
function alarmsSection6 (scale: number): string {
  const sum = alarmsTable6.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 6: ${sum} (${alarmsTable6.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable7: [number, number, string][] = [[697, 992, 'ok'], [476, 249, 'error'], [501, 854, 'warn'], [363, 926, 'ok'], [680, 720, 'warn'], [203, 246, 'warn'], [777, 637, 'error'], [394, 498, 'error'], [74, 96, 'ok'], [163, 29, 'warn'], [115, 90, 'warn'], [615, 688, 'ok']]
function alarmsSection7 (scale: number): string {
  const sum = alarmsTable7.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 7: ${sum} (${alarmsTable7.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable8: [number, number, string][] = [[242, 13, 'error'], [745, 9, 'error'], [736, 525, 'ok'], [170, 301, 'warn'], [322, 18, 'ok'], [296, 502, 'warn'], [137, 370, 'warn'], [184, 82, 'warn'], [834, 205, 'warn'], [35, 168, 'error'], [759, 94, 'ok'], [518, 899, 'error']]
function alarmsSection8 (scale: number): string {
  const sum = alarmsTable8.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 8: ${sum} (${alarmsTable8.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable9: [number, number, string][] = [[437, 944, 'warn'], [91, 752, 'ok'], [721, 264, 'warn'], [388, 439, 'warn'], [217, 934, 'error'], [853, 835, 'warn'], [667, 294, 'warn'], [26, 387, 'error'], [52, 183, 'error'], [910, 233, 'error'], [16, 789, 'warn'], [964, 815, 'error']]
function alarmsSection9 (scale: number): string {
  const sum = alarmsTable9.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 9: ${sum} (${alarmsTable9.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable10: [number, number, string][] = [[225, 241, 'error'], [618, 849, 'error'], [104, 873, 'warn'], [95, 243, 'ok'], [59, 556, 'warn'], [925, 218, 'ok'], [245, 865, 'error'], [898, 400, 'ok'], [129, 341, 'error'], [484, 29, 'error'], [440, 773, 'error'], [558, 706, 'error']]
function alarmsSection10 (scale: number): string {
  const sum = alarmsTable10.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 10: ${sum} (${alarmsTable10.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable11: [number, number, string][] = [[815, 638, 'warn'], [787, 390, 'error'], [528, 789, 'error'], [969, 992, 'error'], [251, 693, 'ok'], [530, 974, 'warn'], [778, 395, 'ok'], [860, 362, 'error'], [257, 44, 'error'], [410, 309, 'ok'], [565, 845, 'warn'], [176, 691, 'error']]
function alarmsSection11 (scale: number): string {
  const sum = alarmsTable11.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 11: ${sum} (${alarmsTable11.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable12: [number, number, string][] = [[847, 907, 'ok'], [213, 90, 'warn'], [458, 965, 'ok'], [836, 717, 'warn'], [681, 450, 'warn'], [250, 811, 'warn'], [511, 619, 'ok'], [779, 268, 'ok'], [831, 341, 'warn'], [422, 500, 'error'], [943, 508, 'warn'], [642, 687, 'warn']]
function alarmsSection12 (scale: number): string {
  const sum = alarmsTable12.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 12: ${sum} (${alarmsTable12.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable13: [number, number, string][] = [[46, 802, 'error'], [210, 368, 'warn'], [795, 872, 'ok'], [611, 45, 'ok'], [839, 870, 'warn'], [227, 948, 'ok'], [436, 852, 'error'], [414, 215, 'warn'], [468, 256, 'warn'], [517, 269, 'warn'], [656, 118, 'ok'], [684, 170, 'warn']]
function alarmsSection13 (scale: number): string {
  const sum = alarmsTable13.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 13: ${sum} (${alarmsTable13.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable14: [number, number, string][] = [[540, 913, 'ok'], [802, 9, 'warn'], [569, 488, 'ok'], [78, 575, 'error'], [460, 268, 'error'], [930, 739, 'error'], [707, 572, 'ok'], [997, 935, 'ok'], [703, 292, 'error'], [492, 226, 'ok'], [667, 112, 'error'], [656, 161, 'error']]
function alarmsSection14 (scale: number): string {
  const sum = alarmsTable14.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 14: ${sum} (${alarmsTable14.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable15: [number, number, string][] = [[295, 640, 'error'], [632, 176, 'ok'], [838, 552, 'ok'], [689, 828, 'warn'], [642, 857, 'ok'], [20, 78, 'error'], [801, 158, 'error'], [574, 973, 'error'], [720, 833, 'ok'], [682, 805, 'warn'], [857, 106, 'warn'], [608, 885, 'error']]
function alarmsSection15 (scale: number): string {
  const sum = alarmsTable15.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 15: ${sum} (${alarmsTable15.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable16: [number, number, string][] = [[673, 568, 'error'], [217, 629, 'error'], [431, 839, 'warn'], [219, 108, 'ok'], [520, 229, 'error'], [175, 808, 'warn'], [199, 209, 'warn'], [766, 427, 'warn'], [975, 402, 'warn'], [759, 76, 'error'], [264, 408, 'error'], [156, 473, 'error']]
function alarmsSection16 (scale: number): string {
  const sum = alarmsTable16.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 16: ${sum} (${alarmsTable16.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable17: [number, number, string][] = [[856, 668, 'error'], [540, 170, 'error'], [26, 159, 'ok'], [631, 626, 'ok'], [32, 805, 'warn'], [966, 992, 'error'], [654, 245, 'error'], [250, 883, 'error'], [432, 566, 'error'], [599, 245, 'warn'], [531, 939, 'ok'], [867, 989, 'warn']]
function alarmsSection17 (scale: number): string {
  const sum = alarmsTable17.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 17: ${sum} (${alarmsTable17.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable18: [number, number, string][] = [[519, 477, 'warn'], [908, 277, 'warn'], [254, 670, 'ok'], [257, 749, 'warn'], [737, 348, 'ok'], [399, 558, 'warn'], [137, 521, 'error'], [239, 23, 'warn'], [804, 917, 'warn'], [232, 196, 'ok'], [684, 157, 'error'], [786, 909, 'ok']]
function alarmsSection18 (scale: number): string {
  const sum = alarmsTable18.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 18: ${sum} (${alarmsTable18.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable19: [number, number, string][] = [[825, 756, 'error'], [164, 658, 'warn'], [406, 535, 'ok'], [757, 143, 'warn'], [537, 938, 'error'], [244, 794, 'ok'], [979, 442, 'error'], [273, 46, 'error'], [763, 180, 'warn'], [575, 800, 'ok'], [901, 456, 'error'], [163, 889, 'warn']]
function alarmsSection19 (scale: number): string {
  const sum = alarmsTable19.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 19: ${sum} (${alarmsTable19.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable20: [number, number, string][] = [[946, 246, 'error'], [243, 354, 'error'], [219, 323, 'warn'], [899, 15, 'ok'], [310, 846, 'warn'], [899, 855, 'ok'], [317, 865, 'ok'], [649, 580, 'ok'], [79, 310, 'warn'], [402, 36, 'error'], [607, 599, 'ok'], [393, 875, 'error']]
function alarmsSection20 (scale: number): string {
  const sum = alarmsTable20.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 20: ${sum} (${alarmsTable20.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable21: [number, number, string][] = [[993, 67, 'warn'], [713, 472, 'warn'], [834, 897, 'warn'], [636, 160, 'error'], [315, 610, 'error'], [197, 575, 'ok'], [883, 640, 'ok'], [890, 988, 'ok'], [935, 787, 'warn'], [836, 56, 'ok'], [990, 94, 'warn'], [591, 271, 'warn']]
function alarmsSection21 (scale: number): string {
  const sum = alarmsTable21.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 21: ${sum} (${alarmsTable21.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable22: [number, number, string][] = [[603, 600, 'warn'], [931, 45, 'error'], [321, 723, 'error'], [994, 158, 'warn'], [481, 424, 'error'], [204, 837, 'ok'], [211, 386, 'ok'], [290, 35, 'error'], [811, 315, 'warn'], [625, 73, 'error'], [543, 763, 'error'], [215, 832, 'error']]
function alarmsSection22 (scale: number): string {
  const sum = alarmsTable22.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 22: ${sum} (${alarmsTable22.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable23: [number, number, string][] = [[413, 354, 'ok'], [393, 963, 'ok'], [821, 128, 'warn'], [902, 319, 'ok'], [871, 247, 'error'], [773, 380, 'warn'], [846, 430, 'ok'], [904, 496, 'ok'], [573, 976, 'warn'], [946, 910, 'ok'], [265, 349, 'warn'], [708, 755, 'error']]
function alarmsSection23 (scale: number): string {
  const sum = alarmsTable23.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 23: ${sum} (${alarmsTable23.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable24: [number, number, string][] = [[952, 807, 'error'], [978, 849, 'ok'], [249, 972, 'warn'], [547, 406, 'error'], [252, 983, 'ok'], [782, 350, 'error'], [356, 971, 'error'], [946, 816, 'error'], [727, 398, 'error'], [460, 43, 'warn'], [533, 456, 'error'], [638, 124, 'error']]
function alarmsSection24 (scale: number): string {
  const sum = alarmsTable24.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 24: ${sum} (${alarmsTable24.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable25: [number, number, string][] = [[357, 934, 'warn'], [861, 61, 'ok'], [891, 640, 'ok'], [733, 229, 'error'], [650, 148, 'error'], [391, 810, 'ok'], [181, 882, 'ok'], [870, 330, 'ok'], [713, 244, 'warn'], [24, 823, 'warn'], [712, 145, 'ok'], [71, 690, 'error']]
function alarmsSection25 (scale: number): string {
  const sum = alarmsTable25.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 25: ${sum} (${alarmsTable25.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable26: [number, number, string][] = [[197, 72, 'warn'], [794, 289, 'error'], [48, 711, 'error'], [213, 169, 'error'], [654, 633, 'error'], [718, 518, 'warn'], [452, 951, 'ok'], [940, 921, 'ok'], [343, 130, 'warn'], [95, 514, 'warn'], [855, 258, 'warn'], [528, 473, 'warn']]
function alarmsSection26 (scale: number): string {
  const sum = alarmsTable26.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 26: ${sum} (${alarmsTable26.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable27: [number, number, string][] = [[593, 635, 'error'], [144, 891, 'error'], [193, 165, 'ok'], [345, 189, 'warn'], [872, 667, 'error'], [60, 355, 'warn'], [887, 328, 'ok'], [970, 901, 'error'], [550, 495, 'warn'], [225, 348, 'error'], [862, 253, 'warn'], [697, 394, 'error']]
function alarmsSection27 (scale: number): string {
  const sum = alarmsTable27.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 27: ${sum} (${alarmsTable27.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable28: [number, number, string][] = [[983, 895, 'error'], [683, 488, 'error'], [452, 618, 'ok'], [58, 414, 'error'], [982, 625, 'ok'], [165, 757, 'error'], [611, 459, 'ok'], [879, 243, 'warn'], [696, 156, 'warn'], [989, 341, 'ok'], [829, 429, 'ok'], [255, 219, 'warn']]
function alarmsSection28 (scale: number): string {
  const sum = alarmsTable28.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 28: ${sum} (${alarmsTable28.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable29: [number, number, string][] = [[982, 933, 'error'], [926, 587, 'error'], [766, 780, 'ok'], [74, 563, 'error'], [342, 63, 'ok'], [431, 11, 'ok'], [918, 789, 'ok'], [866, 131, 'error'], [894, 438, 'ok'], [220, 477, 'error'], [525, 679, 'error'], [816, 366, 'warn']]
function alarmsSection29 (scale: number): string {
  const sum = alarmsTable29.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 29: ${sum} (${alarmsTable29.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable30: [number, number, string][] = [[993, 936, 'warn'], [673, 551, 'error'], [615, 748, 'warn'], [377, 347, 'ok'], [546, 225, 'error'], [212, 615, 'ok'], [871, 648, 'ok'], [166, 530, 'warn'], [668, 465, 'warn'], [143, 589, 'error'], [54, 624, 'ok'], [864, 976, 'warn']]
function alarmsSection30 (scale: number): string {
  const sum = alarmsTable30.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 30: ${sum} (${alarmsTable30.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable31: [number, number, string][] = [[813, 246, 'ok'], [388, 730, 'ok'], [817, 418, 'ok'], [255, 107, 'ok'], [562, 229, 'error'], [316, 180, 'warn'], [306, 853, 'warn'], [342, 406, 'warn'], [814, 229, 'error'], [416, 259, 'warn'], [491, 91, 'ok'], [614, 746, 'error']]
function alarmsSection31 (scale: number): string {
  const sum = alarmsTable31.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 31: ${sum} (${alarmsTable31.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable32: [number, number, string][] = [[225, 171, 'error'], [643, 78, 'warn'], [390, 413, 'ok'], [493, 513, 'ok'], [806, 198, 'error'], [866, 109, 'warn'], [877, 151, 'warn'], [774, 260, 'ok'], [766, 573, 'error'], [598, 432, 'warn'], [838, 848, 'warn'], [845, 536, 'ok']]
function alarmsSection32 (scale: number): string {
  const sum = alarmsTable32.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 32: ${sum} (${alarmsTable32.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable33: [number, number, string][] = [[851, 684, 'warn'], [173, 766, 'warn'], [128, 83, 'error'], [640, 306, 'ok'], [688, 721, 'warn'], [278, 650, 'warn'], [337, 598, 'warn'], [520, 25, 'warn'], [827, 365, 'ok'], [230, 709, 'error'], [768, 245, 'warn'], [327, 422, 'ok']]
function alarmsSection33 (scale: number): string {
  const sum = alarmsTable33.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 33: ${sum} (${alarmsTable33.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable34: [number, number, string][] = [[569, 312, 'ok'], [989, 487, 'error'], [355, 5, 'ok'], [475, 326, 'error'], [376, 191, 'ok'], [994, 692, 'warn'], [414, 785, 'ok'], [716, 630, 'error'], [249, 70, 'error'], [876, 832, 'error'], [680, 922, 'error'], [23, 112, 'error']]
function alarmsSection34 (scale: number): string {
  const sum = alarmsTable34.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 34: ${sum} (${alarmsTable34.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable35: [number, number, string][] = [[263, 404, 'error'], [424, 125, 'warn'], [53, 112, 'warn'], [381, 426, 'warn'], [411, 39, 'error'], [489, 769, 'ok'], [837, 492, 'warn'], [469, 692, 'warn'], [936, 404, 'warn'], [787, 129, 'warn'], [765, 786, 'ok'], [534, 587, 'warn']]
function alarmsSection35 (scale: number): string {
  const sum = alarmsTable35.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 35: ${sum} (${alarmsTable35.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable36: [number, number, string][] = [[490, 321, 'ok'], [303, 187, 'ok'], [165, 112, 'error'], [269, 390, 'error'], [733, 790, 'ok'], [688, 254, 'warn'], [876, 718, 'warn'], [854, 315, 'error'], [494, 464, 'ok'], [508, 808, 'ok'], [666, 3, 'error'], [891, 973, 'error']]
function alarmsSection36 (scale: number): string {
  const sum = alarmsTable36.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 36: ${sum} (${alarmsTable36.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable37: [number, number, string][] = [[470, 616, 'ok'], [281, 686, 'error'], [258, 250, 'warn'], [961, 441, 'ok'], [852, 166, 'ok'], [257, 761, 'ok'], [705, 48, 'ok'], [360, 74, 'ok'], [214, 591, 'ok'], [372, 510, 'ok'], [210, 962, 'warn'], [470, 360, 'error']]
function alarmsSection37 (scale: number): string {
  const sum = alarmsTable37.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 37: ${sum} (${alarmsTable37.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable38: [number, number, string][] = [[176, 617, 'ok'], [458, 121, 'warn'], [922, 270, 'ok'], [513, 833, 'error'], [767, 689, 'error'], [998, 322, 'ok'], [175, 424, 'warn'], [242, 440, 'error'], [910, 87, 'warn'], [317, 128, 'ok'], [240, 939, 'ok'], [41, 721, 'warn']]
function alarmsSection38 (scale: number): string {
  const sum = alarmsTable38.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 38: ${sum} (${alarmsTable38.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable39: [number, number, string][] = [[930, 958, 'warn'], [410, 634, 'warn'], [939, 970, 'error'], [843, 975, 'warn'], [448, 256, 'ok'], [38, 675, 'ok'], [539, 793, 'warn'], [294, 758, 'ok'], [658, 723, 'error'], [303, 909, 'error'], [159, 915, 'warn'], [457, 490, 'ok']]
function alarmsSection39 (scale: number): string {
  const sum = alarmsTable39.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 39: ${sum} (${alarmsTable39.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable40: [number, number, string][] = [[330, 537, 'ok'], [5, 556, 'error'], [342, 644, 'error'], [615, 875, 'ok'], [286, 956, 'warn'], [403, 643, 'error'], [975, 188, 'warn'], [414, 481, 'warn'], [418, 633, 'error'], [247, 65, 'ok'], [290, 675, 'error'], [1, 294, 'ok']]
function alarmsSection40 (scale: number): string {
  const sum = alarmsTable40.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 40: ${sum} (${alarmsTable40.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable41: [number, number, string][] = [[48, 824, 'warn'], [389, 126, 'ok'], [405, 814, 'error'], [932, 543, 'warn'], [912, 32, 'error'], [338, 392, 'error'], [935, 242, 'ok'], [931, 80, 'warn'], [25, 797, 'warn'], [587, 323, 'error'], [360, 380, 'ok'], [975, 828, 'error']]
function alarmsSection41 (scale: number): string {
  const sum = alarmsTable41.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 41: ${sum} (${alarmsTable41.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable42: [number, number, string][] = [[251, 157, 'error'], [464, 637, 'error'], [6, 343, 'warn'], [407, 597, 'warn'], [15, 552, 'ok'], [756, 82, 'error'], [129, 381, 'warn'], [234, 442, 'warn'], [967, 863, 'error'], [23, 199, 'warn'], [298, 219, 'warn'], [356, 456, 'ok']]
function alarmsSection42 (scale: number): string {
  const sum = alarmsTable42.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 42: ${sum} (${alarmsTable42.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable43: [number, number, string][] = [[586, 983, 'ok'], [78, 35, 'ok'], [627, 573, 'error'], [280, 360, 'ok'], [422, 818, 'error'], [228, 730, 'error'], [36, 433, 'warn'], [605, 451, 'error'], [624, 682, 'warn'], [631, 394, 'error'], [637, 915, 'error'], [664, 336, 'ok']]
function alarmsSection43 (scale: number): string {
  const sum = alarmsTable43.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 43: ${sum} (${alarmsTable43.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable44: [number, number, string][] = [[308, 415, 'ok'], [872, 560, 'warn'], [980, 829, 'error'], [357, 543, 'error'], [841, 597, 'ok'], [202, 814, 'error'], [339, 913, 'error'], [91, 557, 'warn'], [404, 314, 'error'], [299, 602, 'error'], [275, 350, 'warn'], [100, 418, 'ok']]
function alarmsSection44 (scale: number): string {
  const sum = alarmsTable44.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 44: ${sum} (${alarmsTable44.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable45: [number, number, string][] = [[58, 831, 'warn'], [364, 945, 'ok'], [628, 75, 'ok'], [476, 455, 'ok'], [618, 128, 'error'], [294, 483, 'error'], [553, 208, 'error'], [455, 429, 'ok'], [195, 25, 'warn'], [76, 458, 'error'], [647, 745, 'ok'], [647, 565, 'error']]
function alarmsSection45 (scale: number): string {
  const sum = alarmsTable45.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 45: ${sum} (${alarmsTable45.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable46: [number, number, string][] = [[797, 470, 'error'], [43, 47, 'warn'], [666, 886, 'ok'], [839, 164, 'ok'], [336, 516, 'ok'], [325, 768, 'ok'], [518, 947, 'warn'], [888, 733, 'warn'], [249, 250, 'ok'], [490, 977, 'error'], [662, 539, 'error'], [309, 594, 'error']]
function alarmsSection46 (scale: number): string {
  const sum = alarmsTable46.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 46: ${sum} (${alarmsTable46.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable47: [number, number, string][] = [[639, 292, 'warn'], [679, 78, 'warn'], [228, 872, 'warn'], [384, 784, 'ok'], [828, 945, 'ok'], [648, 16, 'ok'], [296, 796, 'error'], [878, 212, 'warn'], [668, 2, 'warn'], [84, 52, 'warn'], [143, 365, 'ok'], [934, 30, 'warn']]
function alarmsSection47 (scale: number): string {
  const sum = alarmsTable47.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 47: ${sum} (${alarmsTable47.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable48: [number, number, string][] = [[443, 930, 'ok'], [972, 503, 'ok'], [869, 391, 'ok'], [426, 500, 'error'], [785, 298, 'ok'], [353, 775, 'warn'], [215, 876, 'warn'], [781, 193, 'ok'], [402, 744, 'warn'], [427, 899, 'error'], [595, 602, 'warn'], [718, 475, 'error']]
function alarmsSection48 (scale: number): string {
  const sum = alarmsTable48.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 48: ${sum} (${alarmsTable48.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable49: [number, number, string][] = [[501, 672, 'error'], [439, 789, 'ok'], [520, 502, 'error'], [715, 140, 'warn'], [266, 489, 'warn'], [584, 345, 'ok'], [907, 490, 'warn'], [275, 244, 'ok'], [915, 953, 'error'], [444, 515, 'warn'], [20, 468, 'warn'], [115, 684, 'error']]
function alarmsSection49 (scale: number): string {
  const sum = alarmsTable49.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 49: ${sum} (${alarmsTable49.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable50: [number, number, string][] = [[406, 560, 'error'], [367, 236, 'ok'], [230, 220, 'ok'], [778, 486, 'error'], [466, 346, 'warn'], [315, 240, 'ok'], [819, 427, 'warn'], [140, 229, 'error'], [106, 71, 'warn'], [492, 98, 'ok'], [302, 67, 'ok'], [241, 581, 'warn']]
function alarmsSection50 (scale: number): string {
  const sum = alarmsTable50.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 50: ${sum} (${alarmsTable50.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable51: [number, number, string][] = [[185, 803, 'ok'], [916, 17, 'ok'], [904, 456, 'error'], [172, 546, 'error'], [673, 443, 'ok'], [211, 795, 'error'], [204, 982, 'warn'], [598, 949, 'error'], [925, 970, 'error'], [733, 942, 'error'], [88, 794, 'error'], [646, 698, 'warn']]
function alarmsSection51 (scale: number): string {
  const sum = alarmsTable51.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 51: ${sum} (${alarmsTable51.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable52: [number, number, string][] = [[804, 309, 'ok'], [231, 583, 'warn'], [526, 529, 'warn'], [596, 286, 'error'], [108, 262, 'ok'], [326, 511, 'ok'], [372, 803, 'warn'], [661, 151, 'error'], [528, 90, 'error'], [227, 254, 'error'], [778, 58, 'warn'], [209, 230, 'ok']]
function alarmsSection52 (scale: number): string {
  const sum = alarmsTable52.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 52: ${sum} (${alarmsTable52.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable53: [number, number, string][] = [[3, 21, 'ok'], [487, 862, 'warn'], [155, 235, 'ok'], [115, 942, 'error'], [189, 534, 'warn'], [221, 716, 'ok'], [106, 437, 'error'], [8, 848, 'ok'], [128, 390, 'warn'], [167, 226, 'error'], [743, 722, 'error'], [69, 591, 'error']]
function alarmsSection53 (scale: number): string {
  const sum = alarmsTable53.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 53: ${sum} (${alarmsTable53.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable54: [number, number, string][] = [[638, 356, 'ok'], [900, 565, 'error'], [186, 879, 'error'], [42, 240, 'ok'], [99, 450, 'error'], [890, 483, 'warn'], [48, 89, 'ok'], [54, 218, 'error'], [933, 94, 'error'], [17, 865, 'warn'], [730, 404, 'ok'], [719, 381, 'warn']]
function alarmsSection54 (scale: number): string {
  const sum = alarmsTable54.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 54: ${sum} (${alarmsTable54.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable55: [number, number, string][] = [[671, 804, 'error'], [27, 113, 'ok'], [735, 67, 'ok'], [777, 281, 'ok'], [884, 383, 'warn'], [490, 535, 'error'], [133, 504, 'error'], [87, 514, 'ok'], [696, 757, 'warn'], [605, 847, 'warn'], [916, 924, 'error'], [693, 873, 'warn']]
function alarmsSection55 (scale: number): string {
  const sum = alarmsTable55.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 55: ${sum} (${alarmsTable55.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable56: [number, number, string][] = [[557, 649, 'warn'], [901, 476, 'ok'], [838, 756, 'error'], [355, 906, 'error'], [680, 97, 'warn'], [222, 268, 'warn'], [11, 228, 'warn'], [735, 33, 'ok'], [803, 908, 'warn'], [612, 366, 'warn'], [130, 687, 'warn'], [504, 836, 'ok']]
function alarmsSection56 (scale: number): string {
  const sum = alarmsTable56.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 56: ${sum} (${alarmsTable56.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable57: [number, number, string][] = [[917, 308, 'error'], [774, 284, 'error'], [329, 488, 'ok'], [798, 275, 'ok'], [261, 568, 'error'], [824, 597, 'warn'], [935, 953, 'error'], [660, 685, 'warn'], [866, 279, 'warn'], [820, 393, 'ok'], [571, 700, 'warn'], [332, 386, 'ok']]
function alarmsSection57 (scale: number): string {
  const sum = alarmsTable57.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 57: ${sum} (${alarmsTable57.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable58: [number, number, string][] = [[408, 774, 'warn'], [87, 296, 'error'], [612, 146, 'ok'], [689, 924, 'error'], [194, 252, 'ok'], [504, 536, 'error'], [201, 879, 'ok'], [244, 475, 'ok'], [252, 147, 'warn'], [925, 964, 'error'], [761, 600, 'warn'], [19, 505, 'warn']]
function alarmsSection58 (scale: number): string {
  const sum = alarmsTable58.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 58: ${sum} (${alarmsTable58.filter(r => r[2] !== 'ok').length} flagged)`
}

const alarmsTable59: [number, number, string][] = [[968, 227, 'error'], [337, 679, 'warn'], [304, 958, 'warn'], [74, 856, 'error'], [274, 195, 'error'], [224, 698, 'ok'], [601, 859, 'warn'], [30, 263, 'ok'], [814, 190, 'warn'], [974, 857, 'error'], [211, 884, 'ok'], [886, 374, 'ok']]
function alarmsSection59 (scale: number): string {
  const sum = alarmsTable59.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Alarms section 59: ${sum} (${alarmsTable59.filter(r => r[2] !== 'ok').length} flagged)`
}

export function buildAlarmsReport (scale: number): string[] {
  return [alarmsSection0(scale), alarmsSection1(scale), alarmsSection2(scale), alarmsSection3(scale), alarmsSection4(scale), alarmsSection5(scale), alarmsSection6(scale), alarmsSection7(scale), alarmsSection8(scale), alarmsSection9(scale), alarmsSection10(scale), alarmsSection11(scale), alarmsSection12(scale), alarmsSection13(scale), alarmsSection14(scale), alarmsSection15(scale), alarmsSection16(scale), alarmsSection17(scale), alarmsSection18(scale), alarmsSection19(scale), alarmsSection20(scale), alarmsSection21(scale), alarmsSection22(scale), alarmsSection23(scale), alarmsSection24(scale), alarmsSection25(scale), alarmsSection26(scale), alarmsSection27(scale), alarmsSection28(scale), alarmsSection29(scale), alarmsSection30(scale), alarmsSection31(scale), alarmsSection32(scale), alarmsSection33(scale), alarmsSection34(scale), alarmsSection35(scale), alarmsSection36(scale), alarmsSection37(scale), alarmsSection38(scale), alarmsSection39(scale), alarmsSection40(scale), alarmsSection41(scale), alarmsSection42(scale), alarmsSection43(scale), alarmsSection44(scale), alarmsSection45(scale), alarmsSection46(scale), alarmsSection47(scale), alarmsSection48(scale), alarmsSection49(scale), alarmsSection50(scale), alarmsSection51(scale), alarmsSection52(scale), alarmsSection53(scale), alarmsSection54(scale), alarmsSection55(scale), alarmsSection56(scale), alarmsSection57(scale), alarmsSection58(scale), alarmsSection59(scale), ...coreRows(3).map(r => r.title)]
}
