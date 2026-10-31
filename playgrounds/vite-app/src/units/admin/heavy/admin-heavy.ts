import '../styles/admin-print.css'
import { coreRows } from '@va/core/utils/coreRows.ts'

const adminTable0: [number, number, string][] = [[424, 569, 'error'], [278, 619, 'ok'], [983, 803, 'ok'], [835, 75, 'error'], [698, 300, 'ok'], [210, 297, 'ok'], [59, 381, 'warn'], [607, 492, 'warn'], [544, 857, 'error'], [4, 749, 'ok'], [996, 19, 'error'], [269, 419, 'error']]
function adminSection0 (scale: number): string {
  const sum = adminTable0.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 0: ${sum} (${adminTable0.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable1: [number, number, string][] = [[263, 964, 'ok'], [716, 471, 'warn'], [13, 640, 'warn'], [552, 696, 'warn'], [629, 166, 'warn'], [179, 903, 'ok'], [631, 37, 'error'], [486, 683, 'error'], [311, 36, 'warn'], [330, 646, 'error'], [386, 150, 'error'], [659, 245, 'ok']]
function adminSection1 (scale: number): string {
  const sum = adminTable1.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 1: ${sum} (${adminTable1.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable2: [number, number, string][] = [[779, 510, 'ok'], [608, 340, 'ok'], [570, 53, 'warn'], [724, 757, 'ok'], [265, 107, 'ok'], [52, 830, 'ok'], [154, 290, 'ok'], [98, 156, 'ok'], [911, 226, 'warn'], [324, 537, 'error'], [723, 986, 'ok'], [598, 55, 'error']]
function adminSection2 (scale: number): string {
  const sum = adminTable2.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 2: ${sum} (${adminTable2.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable3: [number, number, string][] = [[102, 315, 'warn'], [641, 44, 'ok'], [851, 434, 'warn'], [279, 454, 'warn'], [990, 361, 'warn'], [229, 248, 'warn'], [732, 995, 'error'], [181, 765, 'ok'], [293, 701, 'error'], [531, 869, 'warn'], [420, 23, 'warn'], [543, 935, 'error']]
function adminSection3 (scale: number): string {
  const sum = adminTable3.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 3: ${sum} (${adminTable3.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable4: [number, number, string][] = [[551, 263, 'warn'], [308, 162, 'warn'], [358, 85, 'error'], [476, 238, 'error'], [866, 629, 'error'], [375, 404, 'error'], [294, 257, 'ok'], [734, 751, 'ok'], [15, 159, 'error'], [275, 138, 'ok'], [54, 871, 'warn'], [155, 140, 'warn']]
function adminSection4 (scale: number): string {
  const sum = adminTable4.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 4: ${sum} (${adminTable4.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable5: [number, number, string][] = [[619, 680, 'error'], [861, 409, 'warn'], [692, 218, 'warn'], [952, 105, 'warn'], [576, 187, 'ok'], [811, 707, 'error'], [596, 739, 'error'], [871, 246, 'warn'], [556, 673, 'ok'], [331, 607, 'error'], [670, 823, 'error'], [961, 796, 'error']]
function adminSection5 (scale: number): string {
  const sum = adminTable5.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 5: ${sum} (${adminTable5.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable6: [number, number, string][] = [[786, 589, 'ok'], [610, 451, 'error'], [259, 265, 'error'], [447, 327, 'error'], [126, 246, 'error'], [240, 933, 'warn'], [373, 582, 'error'], [648, 185, 'ok'], [714, 240, 'warn'], [77, 15, 'error'], [258, 450, 'ok'], [713, 904, 'warn']]
function adminSection6 (scale: number): string {
  const sum = adminTable6.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 6: ${sum} (${adminTable6.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable7: [number, number, string][] = [[577, 587, 'error'], [529, 847, 'warn'], [628, 725, 'warn'], [333, 627, 'ok'], [739, 274, 'ok'], [999, 731, 'ok'], [199, 652, 'error'], [416, 681, 'error'], [21, 122, 'ok'], [752, 16, 'error'], [171, 111, 'error'], [704, 783, 'ok']]
function adminSection7 (scale: number): string {
  const sum = adminTable7.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 7: ${sum} (${adminTable7.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable8: [number, number, string][] = [[0, 938, 'ok'], [20, 708, 'ok'], [232, 962, 'warn'], [628, 297, 'ok'], [638, 276, 'ok'], [257, 204, 'error'], [923, 361, 'ok'], [732, 804, 'warn'], [835, 610, 'error'], [983, 438, 'ok'], [496, 573, 'error'], [538, 183, 'error']]
function adminSection8 (scale: number): string {
  const sum = adminTable8.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 8: ${sum} (${adminTable8.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable9: [number, number, string][] = [[872, 873, 'error'], [991, 285, 'error'], [80, 219, 'warn'], [417, 560, 'ok'], [444, 430, 'ok'], [652, 857, 'error'], [822, 98, 'warn'], [321, 155, 'error'], [832, 76, 'warn'], [690, 322, 'error'], [315, 261, 'ok'], [507, 672, 'error']]
function adminSection9 (scale: number): string {
  const sum = adminTable9.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 9: ${sum} (${adminTable9.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable10: [number, number, string][] = [[686, 11, 'error'], [895, 476, 'warn'], [526, 870, 'ok'], [20, 846, 'warn'], [256, 681, 'ok'], [33, 837, 'error'], [742, 727, 'ok'], [325, 953, 'ok'], [829, 111, 'ok'], [733, 728, 'warn'], [371, 566, 'warn'], [55, 705, 'ok']]
function adminSection10 (scale: number): string {
  const sum = adminTable10.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 10: ${sum} (${adminTable10.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable11: [number, number, string][] = [[69, 920, 'error'], [577, 98, 'ok'], [709, 463, 'error'], [371, 525, 'warn'], [394, 922, 'warn'], [531, 931, 'ok'], [947, 159, 'ok'], [4, 511, 'warn'], [665, 0, 'ok'], [915, 630, 'warn'], [247, 989, 'ok'], [955, 816, 'warn']]
function adminSection11 (scale: number): string {
  const sum = adminTable11.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 11: ${sum} (${adminTable11.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable12: [number, number, string][] = [[147, 153, 'error'], [433, 499, 'error'], [884, 849, 'error'], [70, 313, 'error'], [347, 399, 'error'], [478, 369, 'error'], [573, 172, 'error'], [449, 78, 'ok'], [564, 216, 'error'], [810, 49, 'error'], [491, 822, 'warn'], [848, 682, 'warn']]
function adminSection12 (scale: number): string {
  const sum = adminTable12.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 12: ${sum} (${adminTable12.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable13: [number, number, string][] = [[146, 72, 'error'], [782, 275, 'ok'], [95, 376, 'error'], [337, 191, 'ok'], [196, 697, 'error'], [571, 955, 'warn'], [624, 467, 'ok'], [313, 289, 'ok'], [204, 936, 'warn'], [14, 30, 'error'], [776, 970, 'warn'], [649, 368, 'error']]
function adminSection13 (scale: number): string {
  const sum = adminTable13.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 13: ${sum} (${adminTable13.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable14: [number, number, string][] = [[701, 446, 'ok'], [685, 795, 'ok'], [357, 365, 'error'], [123, 99, 'error'], [165, 685, 'ok'], [853, 279, 'ok'], [389, 127, 'ok'], [53, 215, 'error'], [931, 345, 'warn'], [416, 727, 'error'], [0, 860, 'ok'], [798, 91, 'warn']]
function adminSection14 (scale: number): string {
  const sum = adminTable14.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 14: ${sum} (${adminTable14.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable15: [number, number, string][] = [[47, 441, 'ok'], [342, 491, 'ok'], [738, 754, 'error'], [102, 60, 'error'], [152, 7, 'warn'], [834, 484, 'ok'], [872, 467, 'ok'], [726, 618, 'warn'], [107, 666, 'ok'], [534, 133, 'warn'], [786, 753, 'warn'], [133, 8, 'ok']]
function adminSection15 (scale: number): string {
  const sum = adminTable15.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 15: ${sum} (${adminTable15.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable16: [number, number, string][] = [[750, 128, 'warn'], [932, 925, 'error'], [776, 374, 'error'], [553, 323, 'ok'], [422, 361, 'ok'], [744, 658, 'warn'], [238, 84, 'ok'], [849, 923, 'error'], [178, 257, 'error'], [79, 46, 'warn'], [443, 9, 'error'], [475, 519, 'warn']]
function adminSection16 (scale: number): string {
  const sum = adminTable16.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 16: ${sum} (${adminTable16.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable17: [number, number, string][] = [[275, 201, 'error'], [687, 792, 'error'], [186, 322, 'warn'], [372, 861, 'warn'], [888, 490, 'error'], [410, 567, 'error'], [954, 975, 'ok'], [960, 906, 'warn'], [842, 602, 'warn'], [303, 25, 'warn'], [470, 498, 'error'], [65, 51, 'ok']]
function adminSection17 (scale: number): string {
  const sum = adminTable17.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 17: ${sum} (${adminTable17.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable18: [number, number, string][] = [[482, 813, 'error'], [301, 410, 'error'], [346, 834, 'warn'], [33, 974, 'error'], [862, 805, 'error'], [315, 282, 'error'], [965, 463, 'error'], [670, 680, 'warn'], [692, 810, 'warn'], [523, 946, 'warn'], [530, 793, 'ok'], [613, 548, 'error']]
function adminSection18 (scale: number): string {
  const sum = adminTable18.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 18: ${sum} (${adminTable18.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable19: [number, number, string][] = [[950, 848, 'error'], [163, 449, 'warn'], [474, 93, 'error'], [542, 245, 'warn'], [373, 841, 'warn'], [459, 391, 'error'], [848, 289, 'warn'], [78, 155, 'ok'], [106, 765, 'ok'], [268, 311, 'warn'], [925, 197, 'error'], [374, 761, 'warn']]
function adminSection19 (scale: number): string {
  const sum = adminTable19.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 19: ${sum} (${adminTable19.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable20: [number, number, string][] = [[615, 23, 'warn'], [400, 722, 'warn'], [458, 555, 'ok'], [982, 509, 'ok'], [334, 620, 'warn'], [273, 73, 'warn'], [707, 614, 'error'], [174, 943, 'ok'], [453, 87, 'ok'], [687, 424, 'error'], [96, 952, 'error'], [827, 788, 'error']]
function adminSection20 (scale: number): string {
  const sum = adminTable20.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 20: ${sum} (${adminTable20.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable21: [number, number, string][] = [[43, 557, 'ok'], [578, 536, 'warn'], [738, 252, 'ok'], [54, 591, 'warn'], [496, 208, 'error'], [153, 463, 'error'], [203, 731, 'ok'], [366, 909, 'warn'], [792, 127, 'warn'], [190, 832, 'warn'], [964, 851, 'warn'], [667, 753, 'error']]
function adminSection21 (scale: number): string {
  const sum = adminTable21.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 21: ${sum} (${adminTable21.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable22: [number, number, string][] = [[424, 205, 'warn'], [248, 815, 'warn'], [268, 102, 'ok'], [889, 748, 'warn'], [460, 932, 'error'], [50, 555, 'ok'], [866, 502, 'warn'], [282, 791, 'ok'], [849, 455, 'error'], [294, 689, 'ok'], [643, 739, 'error'], [53, 78, 'warn']]
function adminSection22 (scale: number): string {
  const sum = adminTable22.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 22: ${sum} (${adminTable22.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable23: [number, number, string][] = [[95, 21, 'ok'], [474, 20, 'warn'], [406, 319, 'warn'], [925, 898, 'error'], [355, 20, 'error'], [694, 170, 'error'], [64, 273, 'error'], [173, 799, 'ok'], [109, 474, 'error'], [512, 891, 'warn'], [614, 366, 'error'], [323, 665, 'ok']]
function adminSection23 (scale: number): string {
  const sum = adminTable23.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 23: ${sum} (${adminTable23.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable24: [number, number, string][] = [[145, 782, 'ok'], [55, 591, 'error'], [656, 163, 'warn'], [334, 703, 'ok'], [771, 210, 'error'], [754, 747, 'warn'], [105, 225, 'ok'], [663, 24, 'error'], [862, 619, 'error'], [828, 910, 'warn'], [209, 44, 'warn'], [975, 113, 'ok']]
function adminSection24 (scale: number): string {
  const sum = adminTable24.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 24: ${sum} (${adminTable24.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable25: [number, number, string][] = [[784, 543, 'ok'], [110, 876, 'warn'], [908, 982, 'warn'], [329, 608, 'ok'], [436, 404, 'ok'], [591, 205, 'ok'], [388, 481, 'ok'], [798, 520, 'warn'], [124, 831, 'error'], [731, 122, 'warn'], [363, 178, 'warn'], [893, 158, 'ok']]
function adminSection25 (scale: number): string {
  const sum = adminTable25.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 25: ${sum} (${adminTable25.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable26: [number, number, string][] = [[30, 759, 'ok'], [643, 307, 'warn'], [148, 329, 'ok'], [519, 213, 'ok'], [278, 836, 'ok'], [238, 129, 'ok'], [587, 211, 'error'], [309, 650, 'ok'], [936, 360, 'error'], [300, 450, 'error'], [111, 740, 'warn'], [624, 783, 'error']]
function adminSection26 (scale: number): string {
  const sum = adminTable26.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 26: ${sum} (${adminTable26.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable27: [number, number, string][] = [[166, 565, 'ok'], [246, 455, 'warn'], [230, 524, 'error'], [416, 260, 'error'], [347, 853, 'warn'], [258, 145, 'warn'], [392, 328, 'ok'], [97, 249, 'ok'], [43, 180, 'ok'], [923, 202, 'error'], [428, 276, 'error'], [521, 911, 'warn']]
function adminSection27 (scale: number): string {
  const sum = adminTable27.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 27: ${sum} (${adminTable27.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable28: [number, number, string][] = [[149, 690, 'warn'], [830, 178, 'warn'], [399, 562, 'error'], [562, 767, 'ok'], [810, 413, 'warn'], [668, 885, 'ok'], [810, 603, 'warn'], [937, 357, 'warn'], [611, 319, 'warn'], [552, 9, 'ok'], [965, 668, 'warn'], [2, 946, 'ok']]
function adminSection28 (scale: number): string {
  const sum = adminTable28.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 28: ${sum} (${adminTable28.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable29: [number, number, string][] = [[57, 147, 'ok'], [880, 147, 'ok'], [62, 297, 'ok'], [6, 154, 'error'], [512, 119, 'ok'], [689, 889, 'warn'], [485, 288, 'error'], [20, 687, 'warn'], [831, 131, 'ok'], [624, 825, 'error'], [406, 608, 'error'], [858, 311, 'warn']]
function adminSection29 (scale: number): string {
  const sum = adminTable29.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 29: ${sum} (${adminTable29.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable30: [number, number, string][] = [[73, 42, 'warn'], [558, 121, 'error'], [434, 28, 'warn'], [942, 473, 'warn'], [929, 47, 'error'], [349, 467, 'ok'], [850, 472, 'warn'], [635, 300, 'warn'], [500, 859, 'error'], [865, 627, 'ok'], [171, 489, 'ok'], [931, 598, 'ok']]
function adminSection30 (scale: number): string {
  const sum = adminTable30.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 30: ${sum} (${adminTable30.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable31: [number, number, string][] = [[363, 766, 'error'], [247, 283, 'warn'], [104, 57, 'warn'], [312, 173, 'ok'], [830, 693, 'ok'], [577, 687, 'error'], [490, 31, 'ok'], [453, 303, 'warn'], [456, 218, 'warn'], [324, 410, 'error'], [557, 61, 'warn'], [977, 116, 'ok']]
function adminSection31 (scale: number): string {
  const sum = adminTable31.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 31: ${sum} (${adminTable31.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable32: [number, number, string][] = [[715, 680, 'error'], [847, 202, 'ok'], [459, 28, 'error'], [984, 708, 'warn'], [608, 493, 'ok'], [16, 359, 'ok'], [29, 25, 'error'], [635, 318, 'warn'], [103, 108, 'error'], [67, 325, 'error'], [767, 913, 'error'], [795, 433, 'warn']]
function adminSection32 (scale: number): string {
  const sum = adminTable32.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 32: ${sum} (${adminTable32.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable33: [number, number, string][] = [[847, 829, 'ok'], [358, 851, 'warn'], [264, 53, 'warn'], [964, 186, 'warn'], [893, 480, 'ok'], [361, 262, 'ok'], [969, 332, 'ok'], [873, 325, 'warn'], [685, 634, 'warn'], [658, 405, 'warn'], [0, 339, 'error'], [67, 984, 'ok']]
function adminSection33 (scale: number): string {
  const sum = adminTable33.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 33: ${sum} (${adminTable33.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable34: [number, number, string][] = [[764, 664, 'error'], [364, 108, 'ok'], [797, 213, 'error'], [862, 960, 'error'], [633, 809, 'ok'], [94, 514, 'warn'], [67, 366, 'ok'], [163, 474, 'ok'], [663, 331, 'warn'], [393, 830, 'warn'], [979, 687, 'ok'], [597, 771, 'warn']]
function adminSection34 (scale: number): string {
  const sum = adminTable34.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 34: ${sum} (${adminTable34.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable35: [number, number, string][] = [[528, 169, 'error'], [825, 822, 'error'], [0, 951, 'warn'], [340, 185, 'error'], [366, 676, 'ok'], [411, 396, 'warn'], [700, 670, 'error'], [30, 35, 'error'], [696, 512, 'warn'], [275, 18, 'error'], [700, 205, 'ok'], [91, 357, 'ok']]
function adminSection35 (scale: number): string {
  const sum = adminTable35.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 35: ${sum} (${adminTable35.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable36: [number, number, string][] = [[498, 677, 'warn'], [37, 133, 'error'], [107, 669, 'error'], [100, 884, 'ok'], [371, 981, 'error'], [43, 754, 'ok'], [117, 620, 'ok'], [189, 26, 'error'], [470, 59, 'warn'], [18, 346, 'warn'], [214, 198, 'ok'], [120, 209, 'warn']]
function adminSection36 (scale: number): string {
  const sum = adminTable36.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 36: ${sum} (${adminTable36.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable37: [number, number, string][] = [[549, 411, 'ok'], [134, 745, 'error'], [477, 195, 'error'], [113, 79, 'warn'], [941, 567, 'error'], [894, 911, 'error'], [558, 978, 'ok'], [226, 325, 'error'], [278, 578, 'error'], [677, 4, 'warn'], [368, 305, 'warn'], [25, 864, 'ok']]
function adminSection37 (scale: number): string {
  const sum = adminTable37.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 37: ${sum} (${adminTable37.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable38: [number, number, string][] = [[326, 14, 'error'], [24, 280, 'ok'], [629, 548, 'warn'], [328, 795, 'error'], [314, 763, 'error'], [546, 908, 'error'], [351, 336, 'error'], [138, 396, 'error'], [68, 145, 'ok'], [657, 533, 'ok'], [111, 823, 'ok'], [245, 683, 'error']]
function adminSection38 (scale: number): string {
  const sum = adminTable38.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 38: ${sum} (${adminTable38.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable39: [number, number, string][] = [[701, 977, 'error'], [213, 865, 'error'], [654, 99, 'ok'], [944, 251, 'warn'], [660, 489, 'warn'], [677, 978, 'error'], [895, 165, 'error'], [434, 467, 'error'], [207, 632, 'error'], [343, 90, 'warn'], [450, 87, 'error'], [359, 929, 'ok']]
function adminSection39 (scale: number): string {
  const sum = adminTable39.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 39: ${sum} (${adminTable39.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable40: [number, number, string][] = [[438, 176, 'error'], [103, 193, 'error'], [148, 996, 'warn'], [114, 861, 'error'], [721, 713, 'error'], [415, 61, 'warn'], [677, 0, 'ok'], [322, 704, 'error'], [541, 975, 'warn'], [918, 216, 'warn'], [653, 670, 'warn'], [738, 71, 'warn']]
function adminSection40 (scale: number): string {
  const sum = adminTable40.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 40: ${sum} (${adminTable40.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable41: [number, number, string][] = [[90, 650, 'error'], [649, 832, 'error'], [593, 405, 'ok'], [761, 671, 'ok'], [639, 663, 'ok'], [555, 42, 'ok'], [156, 216, 'warn'], [509, 487, 'warn'], [810, 262, 'warn'], [246, 649, 'ok'], [483, 764, 'error'], [578, 829, 'ok']]
function adminSection41 (scale: number): string {
  const sum = adminTable41.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 41: ${sum} (${adminTable41.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable42: [number, number, string][] = [[705, 590, 'error'], [522, 370, 'ok'], [1, 665, 'warn'], [506, 404, 'warn'], [849, 19, 'warn'], [878, 862, 'warn'], [848, 704, 'error'], [649, 792, 'ok'], [674, 544, 'warn'], [837, 407, 'error'], [559, 445, 'error'], [539, 191, 'warn']]
function adminSection42 (scale: number): string {
  const sum = adminTable42.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 42: ${sum} (${adminTable42.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable43: [number, number, string][] = [[36, 31, 'ok'], [451, 960, 'error'], [520, 77, 'ok'], [594, 713, 'error'], [441, 258, 'error'], [824, 416, 'ok'], [621, 941, 'ok'], [446, 532, 'warn'], [58, 633, 'ok'], [572, 893, 'ok'], [362, 444, 'error'], [911, 52, 'ok']]
function adminSection43 (scale: number): string {
  const sum = adminTable43.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 43: ${sum} (${adminTable43.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable44: [number, number, string][] = [[412, 602, 'warn'], [214, 341, 'warn'], [366, 793, 'ok'], [306, 226, 'ok'], [251, 309, 'error'], [315, 6, 'error'], [353, 533, 'warn'], [742, 330, 'error'], [557, 17, 'warn'], [388, 760, 'ok'], [831, 790, 'warn'], [697, 476, 'warn']]
function adminSection44 (scale: number): string {
  const sum = adminTable44.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 44: ${sum} (${adminTable44.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable45: [number, number, string][] = [[705, 6, 'ok'], [875, 968, 'ok'], [865, 105, 'error'], [891, 131, 'error'], [638, 65, 'warn'], [245, 485, 'error'], [140, 427, 'ok'], [982, 803, 'ok'], [559, 276, 'error'], [935, 213, 'ok'], [521, 390, 'ok'], [178, 631, 'error']]
function adminSection45 (scale: number): string {
  const sum = adminTable45.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 45: ${sum} (${adminTable45.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable46: [number, number, string][] = [[834, 430, 'error'], [888, 344, 'warn'], [592, 855, 'warn'], [902, 548, 'ok'], [173, 357, 'ok'], [920, 240, 'error'], [407, 690, 'ok'], [647, 445, 'warn'], [23, 105, 'warn'], [11, 16, 'warn'], [634, 458, 'warn'], [496, 56, 'warn']]
function adminSection46 (scale: number): string {
  const sum = adminTable46.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 46: ${sum} (${adminTable46.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable47: [number, number, string][] = [[38, 156, 'error'], [433, 469, 'warn'], [268, 557, 'warn'], [311, 188, 'ok'], [921, 329, 'warn'], [563, 165, 'warn'], [462, 36, 'error'], [240, 799, 'ok'], [112, 775, 'ok'], [668, 172, 'error'], [682, 85, 'error'], [554, 255, 'error']]
function adminSection47 (scale: number): string {
  const sum = adminTable47.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 47: ${sum} (${adminTable47.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable48: [number, number, string][] = [[111, 778, 'warn'], [420, 962, 'ok'], [468, 554, 'ok'], [603, 292, 'error'], [846, 580, 'ok'], [986, 446, 'error'], [126, 106, 'error'], [266, 205, 'ok'], [750, 853, 'error'], [374, 713, 'ok'], [414, 755, 'warn'], [757, 244, 'ok']]
function adminSection48 (scale: number): string {
  const sum = adminTable48.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 48: ${sum} (${adminTable48.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable49: [number, number, string][] = [[233, 161, 'ok'], [355, 463, 'error'], [450, 250, 'error'], [600, 676, 'ok'], [988, 849, 'error'], [549, 195, 'error'], [332, 256, 'ok'], [562, 154, 'warn'], [99, 62, 'ok'], [620, 672, 'error'], [901, 289, 'error'], [908, 71, 'warn']]
function adminSection49 (scale: number): string {
  const sum = adminTable49.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 49: ${sum} (${adminTable49.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable50: [number, number, string][] = [[860, 16, 'ok'], [244, 232, 'error'], [471, 822, 'error'], [417, 854, 'warn'], [282, 846, 'ok'], [627, 942, 'ok'], [917, 159, 'ok'], [234, 813, 'ok'], [33, 771, 'ok'], [860, 970, 'error'], [875, 932, 'ok'], [16, 691, 'ok']]
function adminSection50 (scale: number): string {
  const sum = adminTable50.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 50: ${sum} (${adminTable50.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable51: [number, number, string][] = [[733, 410, 'ok'], [176, 681, 'ok'], [266, 199, 'warn'], [693, 47, 'warn'], [159, 351, 'error'], [715, 878, 'error'], [183, 664, 'error'], [455, 194, 'warn'], [790, 292, 'ok'], [822, 431, 'error'], [496, 868, 'warn'], [666, 603, 'warn']]
function adminSection51 (scale: number): string {
  const sum = adminTable51.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 51: ${sum} (${adminTable51.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable52: [number, number, string][] = [[613, 337, 'ok'], [296, 444, 'ok'], [808, 996, 'error'], [961, 47, 'error'], [702, 955, 'warn'], [507, 54, 'error'], [138, 690, 'error'], [554, 251, 'warn'], [412, 39, 'error'], [773, 742, 'error'], [16, 830, 'ok'], [724, 8, 'error']]
function adminSection52 (scale: number): string {
  const sum = adminTable52.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 52: ${sum} (${adminTable52.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable53: [number, number, string][] = [[401, 199, 'warn'], [736, 213, 'error'], [313, 937, 'ok'], [311, 584, 'warn'], [706, 955, 'error'], [7, 620, 'warn'], [45, 228, 'ok'], [959, 796, 'error'], [107, 639, 'error'], [690, 907, 'ok'], [463, 127, 'warn'], [412, 249, 'ok']]
function adminSection53 (scale: number): string {
  const sum = adminTable53.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 53: ${sum} (${adminTable53.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable54: [number, number, string][] = [[885, 240, 'ok'], [809, 117, 'warn'], [102, 168, 'ok'], [503, 725, 'error'], [568, 765, 'error'], [878, 578, 'ok'], [704, 989, 'warn'], [81, 959, 'error'], [573, 965, 'warn'], [440, 258, 'warn'], [872, 857, 'ok'], [389, 752, 'warn']]
function adminSection54 (scale: number): string {
  const sum = adminTable54.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 54: ${sum} (${adminTable54.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable55: [number, number, string][] = [[96, 805, 'warn'], [109, 337, 'ok'], [430, 769, 'ok'], [870, 882, 'error'], [353, 843, 'ok'], [14, 466, 'error'], [813, 48, 'error'], [1, 455, 'ok'], [625, 419, 'error'], [300, 368, 'warn'], [769, 772, 'ok'], [975, 407, 'warn']]
function adminSection55 (scale: number): string {
  const sum = adminTable55.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 55: ${sum} (${adminTable55.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable56: [number, number, string][] = [[241, 641, 'ok'], [358, 805, 'ok'], [592, 976, 'error'], [253, 126, 'error'], [176, 284, 'error'], [936, 495, 'ok'], [621, 769, 'error'], [160, 151, 'warn'], [632, 607, 'ok'], [947, 420, 'error'], [314, 616, 'error'], [712, 871, 'error']]
function adminSection56 (scale: number): string {
  const sum = adminTable56.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 56: ${sum} (${adminTable56.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable57: [number, number, string][] = [[126, 654, 'warn'], [952, 365, 'error'], [99, 175, 'ok'], [963, 704, 'error'], [539, 348, 'ok'], [491, 514, 'error'], [744, 927, 'warn'], [551, 55, 'warn'], [886, 729, 'error'], [657, 887, 'warn'], [645, 492, 'error'], [34, 991, 'warn']]
function adminSection57 (scale: number): string {
  const sum = adminTable57.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 57: ${sum} (${adminTable57.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable58: [number, number, string][] = [[150, 749, 'ok'], [447, 894, 'error'], [332, 262, 'ok'], [652, 675, 'ok'], [461, 549, 'warn'], [905, 101, 'ok'], [453, 166, 'error'], [247, 560, 'ok'], [371, 269, 'ok'], [896, 216, 'error'], [95, 387, 'warn'], [859, 302, 'ok']]
function adminSection58 (scale: number): string {
  const sum = adminTable58.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 58: ${sum} (${adminTable58.filter(r => r[2] !== 'ok').length} flagged)`
}

const adminTable59: [number, number, string][] = [[511, 447, 'ok'], [716, 519, 'error'], [479, 424, 'warn'], [389, 35, 'warn'], [305, 764, 'warn'], [432, 632, 'ok'], [743, 19, 'warn'], [417, 497, 'error'], [431, 59, 'ok'], [647, 90, 'error'], [976, 678, 'ok'], [179, 664, 'ok']]
function adminSection59 (scale: number): string {
  const sum = adminTable59.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Admin section 59: ${sum} (${adminTable59.filter(r => r[2] !== 'ok').length} flagged)`
}

export function buildAdminReport (scale: number): string[] {
  return [adminSection0(scale), adminSection1(scale), adminSection2(scale), adminSection3(scale), adminSection4(scale), adminSection5(scale), adminSection6(scale), adminSection7(scale), adminSection8(scale), adminSection9(scale), adminSection10(scale), adminSection11(scale), adminSection12(scale), adminSection13(scale), adminSection14(scale), adminSection15(scale), adminSection16(scale), adminSection17(scale), adminSection18(scale), adminSection19(scale), adminSection20(scale), adminSection21(scale), adminSection22(scale), adminSection23(scale), adminSection24(scale), adminSection25(scale), adminSection26(scale), adminSection27(scale), adminSection28(scale), adminSection29(scale), adminSection30(scale), adminSection31(scale), adminSection32(scale), adminSection33(scale), adminSection34(scale), adminSection35(scale), adminSection36(scale), adminSection37(scale), adminSection38(scale), adminSection39(scale), adminSection40(scale), adminSection41(scale), adminSection42(scale), adminSection43(scale), adminSection44(scale), adminSection45(scale), adminSection46(scale), adminSection47(scale), adminSection48(scale), adminSection49(scale), adminSection50(scale), adminSection51(scale), adminSection52(scale), adminSection53(scale), adminSection54(scale), adminSection55(scale), adminSection56(scale), adminSection57(scale), adminSection58(scale), adminSection59(scale), ...coreRows(3).map(r => r.title)]
}
