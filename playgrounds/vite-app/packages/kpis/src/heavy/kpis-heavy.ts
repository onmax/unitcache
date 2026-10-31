import '../styles/kpis-print.css'
import { coreRows } from '@va/core/utils/coreRows.ts'

const kpisTable0: [number, number, string][] = [[27, 353, 'error'], [928, 135, 'ok'], [172, 421, 'warn'], [649, 324, 'ok'], [213, 502, 'ok'], [329, 471, 'error'], [646, 330, 'warn'], [807, 843, 'error'], [748, 61, 'warn'], [539, 481, 'warn'], [903, 776, 'ok'], [2, 975, 'ok']]
function kpisSection0 (scale: number): string {
  const sum = kpisTable0.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 0: ${sum} (${kpisTable0.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable1: [number, number, string][] = [[412, 71, 'error'], [368, 367, 'ok'], [917, 684, 'error'], [968, 604, 'warn'], [583, 367, 'error'], [541, 158, 'warn'], [850, 758, 'warn'], [346, 297, 'error'], [371, 288, 'error'], [899, 244, 'warn'], [606, 188, 'ok'], [132, 364, 'error']]
function kpisSection1 (scale: number): string {
  const sum = kpisTable1.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 1: ${sum} (${kpisTable1.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable2: [number, number, string][] = [[432, 693, 'error'], [577, 26, 'ok'], [870, 922, 'ok'], [531, 895, 'error'], [477, 585, 'warn'], [428, 527, 'ok'], [473, 172, 'warn'], [239, 123, 'error'], [603, 643, 'ok'], [387, 150, 'error'], [437, 153, 'ok'], [866, 244, 'ok']]
function kpisSection2 (scale: number): string {
  const sum = kpisTable2.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 2: ${sum} (${kpisTable2.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable3: [number, number, string][] = [[968, 138, 'error'], [332, 297, 'ok'], [922, 332, 'ok'], [244, 260, 'warn'], [667, 637, 'error'], [422, 23, 'warn'], [393, 743, 'warn'], [330, 101, 'error'], [322, 984, 'warn'], [218, 914, 'ok'], [441, 918, 'warn'], [799, 571, 'ok']]
function kpisSection3 (scale: number): string {
  const sum = kpisTable3.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 3: ${sum} (${kpisTable3.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable4: [number, number, string][] = [[134, 524, 'error'], [959, 502, 'ok'], [321, 999, 'ok'], [691, 144, 'error'], [767, 749, 'error'], [452, 735, 'warn'], [574, 393, 'ok'], [421, 33, 'ok'], [865, 777, 'error'], [704, 578, 'ok'], [932, 818, 'error'], [595, 771, 'warn']]
function kpisSection4 (scale: number): string {
  const sum = kpisTable4.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 4: ${sum} (${kpisTable4.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable5: [number, number, string][] = [[663, 360, 'ok'], [755, 285, 'error'], [300, 113, 'ok'], [441, 728, 'warn'], [366, 761, 'error'], [363, 553, 'ok'], [782, 577, 'warn'], [292, 965, 'error'], [931, 449, 'error'], [237, 895, 'error'], [707, 864, 'warn'], [47, 1, 'error']]
function kpisSection5 (scale: number): string {
  const sum = kpisTable5.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 5: ${sum} (${kpisTable5.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable6: [number, number, string][] = [[295, 575, 'error'], [511, 686, 'warn'], [606, 208, 'ok'], [30, 208, 'ok'], [132, 771, 'ok'], [575, 859, 'warn'], [219, 436, 'ok'], [462, 424, 'ok'], [334, 401, 'error'], [925, 960, 'error'], [803, 966, 'warn'], [323, 985, 'warn']]
function kpisSection6 (scale: number): string {
  const sum = kpisTable6.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 6: ${sum} (${kpisTable6.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable7: [number, number, string][] = [[438, 630, 'warn'], [611, 718, 'ok'], [103, 640, 'error'], [198, 606, 'ok'], [272, 150, 'warn'], [597, 878, 'warn'], [553, 29, 'ok'], [677, 220, 'error'], [635, 971, 'warn'], [223, 333, 'ok'], [226, 761, 'error'], [938, 802, 'ok']]
function kpisSection7 (scale: number): string {
  const sum = kpisTable7.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 7: ${sum} (${kpisTable7.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable8: [number, number, string][] = [[432, 417, 'ok'], [364, 62, 'error'], [520, 276, 'ok'], [806, 222, 'error'], [124, 556, 'error'], [918, 628, 'error'], [799, 407, 'warn'], [369, 807, 'warn'], [73, 366, 'warn'], [998, 372, 'warn'], [674, 264, 'ok'], [986, 94, 'error']]
function kpisSection8 (scale: number): string {
  const sum = kpisTable8.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 8: ${sum} (${kpisTable8.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable9: [number, number, string][] = [[108, 233, 'warn'], [34, 222, 'warn'], [23, 475, 'ok'], [528, 502, 'error'], [477, 271, 'error'], [569, 12, 'warn'], [440, 464, 'warn'], [322, 813, 'error'], [52, 74, 'error'], [127, 142, 'error'], [177, 277, 'warn'], [778, 743, 'ok']]
function kpisSection9 (scale: number): string {
  const sum = kpisTable9.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 9: ${sum} (${kpisTable9.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable10: [number, number, string][] = [[450, 552, 'ok'], [130, 0, 'ok'], [288, 947, 'error'], [530, 478, 'ok'], [281, 824, 'error'], [737, 398, 'ok'], [332, 644, 'ok'], [672, 354, 'ok'], [651, 431, 'ok'], [610, 867, 'ok'], [307, 353, 'warn'], [203, 447, 'ok']]
function kpisSection10 (scale: number): string {
  const sum = kpisTable10.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 10: ${sum} (${kpisTable10.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable11: [number, number, string][] = [[572, 869, 'warn'], [3, 490, 'ok'], [161, 102, 'ok'], [110, 325, 'error'], [854, 160, 'error'], [213, 307, 'ok'], [560, 163, 'ok'], [164, 696, 'ok'], [999, 880, 'ok'], [194, 1, 'ok'], [876, 212, 'warn'], [443, 184, 'ok']]
function kpisSection11 (scale: number): string {
  const sum = kpisTable11.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 11: ${sum} (${kpisTable11.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable12: [number, number, string][] = [[535, 249, 'warn'], [907, 565, 'ok'], [736, 996, 'warn'], [543, 610, 'warn'], [860, 663, 'warn'], [767, 97, 'warn'], [148, 874, 'error'], [448, 306, 'ok'], [360, 776, 'ok'], [708, 855, 'ok'], [766, 752, 'error'], [307, 715, 'ok']]
function kpisSection12 (scale: number): string {
  const sum = kpisTable12.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 12: ${sum} (${kpisTable12.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable13: [number, number, string][] = [[96, 258, 'warn'], [89, 388, 'error'], [153, 613, 'warn'], [278, 960, 'warn'], [406, 488, 'ok'], [563, 872, 'warn'], [474, 300, 'warn'], [528, 562, 'ok'], [323, 709, 'ok'], [775, 980, 'error'], [704, 300, 'ok'], [330, 960, 'ok']]
function kpisSection13 (scale: number): string {
  const sum = kpisTable13.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 13: ${sum} (${kpisTable13.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable14: [number, number, string][] = [[30, 29, 'warn'], [169, 755, 'error'], [406, 963, 'error'], [806, 62, 'warn'], [720, 346, 'error'], [832, 753, 'error'], [32, 466, 'warn'], [270, 579, 'warn'], [681, 430, 'error'], [264, 297, 'warn'], [410, 999, 'ok'], [816, 25, 'error']]
function kpisSection14 (scale: number): string {
  const sum = kpisTable14.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 14: ${sum} (${kpisTable14.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable15: [number, number, string][] = [[235, 435, 'warn'], [7, 343, 'warn'], [709, 917, 'warn'], [702, 840, 'error'], [889, 755, 'warn'], [295, 571, 'error'], [886, 57, 'ok'], [633, 113, 'ok'], [847, 826, 'warn'], [802, 790, 'error'], [947, 283, 'ok'], [402, 11, 'warn']]
function kpisSection15 (scale: number): string {
  const sum = kpisTable15.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 15: ${sum} (${kpisTable15.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable16: [number, number, string][] = [[228, 117, 'ok'], [956, 939, 'warn'], [945, 615, 'error'], [227, 642, 'ok'], [170, 618, 'error'], [427, 376, 'error'], [771, 723, 'warn'], [906, 302, 'ok'], [619, 550, 'ok'], [759, 377, 'warn'], [545, 801, 'warn'], [389, 452, 'warn']]
function kpisSection16 (scale: number): string {
  const sum = kpisTable16.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 16: ${sum} (${kpisTable16.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable17: [number, number, string][] = [[521, 579, 'error'], [486, 579, 'warn'], [222, 50, 'error'], [258, 261, 'error'], [852, 908, 'warn'], [158, 309, 'error'], [203, 726, 'error'], [293, 876, 'warn'], [416, 975, 'error'], [715, 847, 'error'], [506, 4, 'ok'], [312, 965, 'warn']]
function kpisSection17 (scale: number): string {
  const sum = kpisTable17.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 17: ${sum} (${kpisTable17.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable18: [number, number, string][] = [[728, 428, 'ok'], [912, 442, 'warn'], [397, 286, 'error'], [659, 38, 'warn'], [714, 274, 'error'], [574, 979, 'ok'], [705, 126, 'error'], [279, 404, 'warn'], [393, 642, 'ok'], [259, 623, 'warn'], [630, 335, 'ok'], [314, 464, 'ok']]
function kpisSection18 (scale: number): string {
  const sum = kpisTable18.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 18: ${sum} (${kpisTable18.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable19: [number, number, string][] = [[346, 930, 'ok'], [507, 515, 'warn'], [460, 816, 'error'], [132, 945, 'ok'], [86, 753, 'ok'], [267, 443, 'error'], [431, 129, 'warn'], [261, 165, 'error'], [924, 361, 'error'], [392, 881, 'warn'], [521, 460, 'ok'], [935, 191, 'ok']]
function kpisSection19 (scale: number): string {
  const sum = kpisTable19.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 19: ${sum} (${kpisTable19.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable20: [number, number, string][] = [[977, 474, 'error'], [6, 72, 'ok'], [50, 600, 'warn'], [297, 910, 'error'], [235, 326, 'warn'], [199, 909, 'warn'], [4, 629, 'warn'], [594, 244, 'error'], [470, 659, 'ok'], [59, 783, 'ok'], [287, 589, 'ok'], [904, 349, 'ok']]
function kpisSection20 (scale: number): string {
  const sum = kpisTable20.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 20: ${sum} (${kpisTable20.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable21: [number, number, string][] = [[748, 151, 'ok'], [368, 115, 'ok'], [509, 500, 'warn'], [174, 833, 'error'], [920, 276, 'error'], [901, 359, 'warn'], [207, 748, 'warn'], [675, 870, 'error'], [348, 957, 'ok'], [52, 534, 'ok'], [355, 725, 'error'], [699, 967, 'ok']]
function kpisSection21 (scale: number): string {
  const sum = kpisTable21.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 21: ${sum} (${kpisTable21.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable22: [number, number, string][] = [[536, 146, 'ok'], [994, 242, 'error'], [420, 248, 'ok'], [842, 117, 'ok'], [318, 99, 'ok'], [338, 198, 'error'], [230, 809, 'warn'], [214, 657, 'warn'], [293, 260, 'ok'], [219, 862, 'ok'], [488, 194, 'warn'], [575, 337, 'ok']]
function kpisSection22 (scale: number): string {
  const sum = kpisTable22.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 22: ${sum} (${kpisTable22.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable23: [number, number, string][] = [[90, 116, 'error'], [332, 95, 'warn'], [126, 7, 'error'], [598, 379, 'ok'], [450, 331, 'warn'], [149, 157, 'error'], [462, 125, 'error'], [920, 326, 'error'], [578, 570, 'error'], [722, 534, 'error'], [671, 45, 'error'], [626, 29, 'error']]
function kpisSection23 (scale: number): string {
  const sum = kpisTable23.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 23: ${sum} (${kpisTable23.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable24: [number, number, string][] = [[144, 227, 'ok'], [281, 732, 'ok'], [519, 779, 'ok'], [680, 471, 'ok'], [846, 391, 'ok'], [161, 687, 'ok'], [203, 793, 'warn'], [329, 416, 'error'], [258, 28, 'warn'], [712, 454, 'ok'], [445, 659, 'warn'], [415, 64, 'error']]
function kpisSection24 (scale: number): string {
  const sum = kpisTable24.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 24: ${sum} (${kpisTable24.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable25: [number, number, string][] = [[806, 534, 'error'], [267, 526, 'ok'], [343, 760, 'ok'], [411, 610, 'error'], [141, 354, 'error'], [691, 617, 'warn'], [37, 449, 'error'], [809, 627, 'warn'], [977, 676, 'error'], [377, 2, 'error'], [489, 517, 'error'], [64, 44, 'warn']]
function kpisSection25 (scale: number): string {
  const sum = kpisTable25.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 25: ${sum} (${kpisTable25.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable26: [number, number, string][] = [[14, 107, 'warn'], [679, 834, 'warn'], [482, 752, 'ok'], [142, 495, 'error'], [331, 940, 'error'], [86, 82, 'error'], [320, 656, 'ok'], [588, 966, 'warn'], [224, 2, 'error'], [161, 691, 'warn'], [288, 97, 'ok'], [192, 943, 'warn']]
function kpisSection26 (scale: number): string {
  const sum = kpisTable26.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 26: ${sum} (${kpisTable26.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable27: [number, number, string][] = [[312, 315, 'error'], [917, 753, 'warn'], [322, 581, 'ok'], [299, 72, 'ok'], [516, 651, 'error'], [396, 209, 'warn'], [930, 886, 'warn'], [975, 51, 'warn'], [540, 3, 'warn'], [724, 910, 'ok'], [506, 373, 'ok'], [137, 808, 'error']]
function kpisSection27 (scale: number): string {
  const sum = kpisTable27.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 27: ${sum} (${kpisTable27.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable28: [number, number, string][] = [[941, 706, 'error'], [111, 238, 'error'], [617, 99, 'warn'], [826, 940, 'warn'], [784, 153, 'warn'], [806, 296, 'error'], [640, 817, 'error'], [578, 10, 'warn'], [714, 854, 'error'], [478, 771, 'warn'], [353, 300, 'ok'], [810, 407, 'ok']]
function kpisSection28 (scale: number): string {
  const sum = kpisTable28.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 28: ${sum} (${kpisTable28.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable29: [number, number, string][] = [[602, 352, 'error'], [77, 825, 'ok'], [226, 576, 'warn'], [389, 634, 'warn'], [650, 384, 'warn'], [386, 67, 'error'], [384, 512, 'ok'], [659, 668, 'ok'], [441, 716, 'error'], [309, 520, 'error'], [321, 804, 'warn'], [402, 761, 'error']]
function kpisSection29 (scale: number): string {
  const sum = kpisTable29.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 29: ${sum} (${kpisTable29.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable30: [number, number, string][] = [[43, 461, 'warn'], [252, 824, 'warn'], [963, 615, 'ok'], [149, 837, 'error'], [771, 817, 'error'], [401, 201, 'warn'], [52, 161, 'warn'], [754, 363, 'ok'], [924, 399, 'ok'], [433, 262, 'ok'], [800, 13, 'warn'], [849, 932, 'ok']]
function kpisSection30 (scale: number): string {
  const sum = kpisTable30.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 30: ${sum} (${kpisTable30.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable31: [number, number, string][] = [[665, 288, 'error'], [284, 117, 'warn'], [840, 234, 'ok'], [120, 699, 'warn'], [381, 124, 'ok'], [794, 513, 'error'], [453, 76, 'error'], [469, 448, 'warn'], [86, 547, 'warn'], [959, 826, 'warn'], [37, 489, 'ok'], [569, 722, 'error']]
function kpisSection31 (scale: number): string {
  const sum = kpisTable31.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 31: ${sum} (${kpisTable31.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable32: [number, number, string][] = [[801, 71, 'ok'], [660, 126, 'error'], [539, 345, 'error'], [128, 699, 'warn'], [828, 548, 'warn'], [481, 395, 'warn'], [443, 549, 'warn'], [22, 626, 'ok'], [819, 772, 'ok'], [959, 0, 'error'], [533, 597, 'warn'], [120, 974, 'warn']]
function kpisSection32 (scale: number): string {
  const sum = kpisTable32.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 32: ${sum} (${kpisTable32.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable33: [number, number, string][] = [[370, 289, 'warn'], [598, 81, 'ok'], [371, 106, 'warn'], [744, 195, 'error'], [799, 186, 'error'], [459, 848, 'ok'], [272, 14, 'error'], [81, 712, 'error'], [621, 639, 'error'], [769, 661, 'error'], [717, 573, 'warn'], [781, 281, 'error']]
function kpisSection33 (scale: number): string {
  const sum = kpisTable33.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 33: ${sum} (${kpisTable33.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable34: [number, number, string][] = [[224, 382, 'warn'], [711, 248, 'error'], [347, 35, 'ok'], [89, 321, 'error'], [447, 704, 'warn'], [908, 547, 'error'], [856, 728, 'error'], [118, 761, 'ok'], [295, 720, 'ok'], [689, 288, 'error'], [29, 325, 'warn'], [249, 349, 'warn']]
function kpisSection34 (scale: number): string {
  const sum = kpisTable34.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 34: ${sum} (${kpisTable34.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable35: [number, number, string][] = [[232, 227, 'ok'], [692, 611, 'ok'], [831, 651, 'warn'], [332, 825, 'error'], [227, 262, 'warn'], [662, 611, 'warn'], [391, 365, 'error'], [619, 362, 'error'], [58, 710, 'ok'], [218, 146, 'error'], [703, 117, 'ok'], [450, 56, 'error']]
function kpisSection35 (scale: number): string {
  const sum = kpisTable35.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 35: ${sum} (${kpisTable35.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable36: [number, number, string][] = [[261, 380, 'error'], [941, 295, 'error'], [535, 283, 'warn'], [428, 773, 'error'], [303, 908, 'warn'], [382, 306, 'ok'], [13, 221, 'warn'], [533, 218, 'ok'], [706, 695, 'warn'], [775, 666, 'error'], [806, 606, 'warn'], [828, 471, 'error']]
function kpisSection36 (scale: number): string {
  const sum = kpisTable36.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 36: ${sum} (${kpisTable36.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable37: [number, number, string][] = [[996, 42, 'warn'], [280, 588, 'error'], [909, 563, 'ok'], [181, 515, 'ok'], [138, 516, 'error'], [68, 345, 'error'], [247, 621, 'warn'], [682, 456, 'warn'], [872, 961, 'error'], [127, 677, 'warn'], [427, 860, 'ok'], [265, 581, 'ok']]
function kpisSection37 (scale: number): string {
  const sum = kpisTable37.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 37: ${sum} (${kpisTable37.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable38: [number, number, string][] = [[973, 678, 'error'], [282, 114, 'error'], [881, 628, 'error'], [433, 700, 'ok'], [601, 552, 'warn'], [825, 832, 'ok'], [391, 82, 'ok'], [636, 988, 'error'], [828, 885, 'warn'], [499, 11, 'error'], [819, 505, 'warn'], [808, 127, 'ok']]
function kpisSection38 (scale: number): string {
  const sum = kpisTable38.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 38: ${sum} (${kpisTable38.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable39: [number, number, string][] = [[263, 856, 'warn'], [440, 203, 'warn'], [415, 25, 'ok'], [548, 16, 'ok'], [217, 258, 'warn'], [140, 911, 'ok'], [977, 116, 'warn'], [487, 871, 'error'], [420, 784, 'ok'], [58, 612, 'warn'], [218, 550, 'warn'], [747, 69, 'warn']]
function kpisSection39 (scale: number): string {
  const sum = kpisTable39.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 39: ${sum} (${kpisTable39.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable40: [number, number, string][] = [[528, 64, 'ok'], [984, 808, 'ok'], [26, 172, 'error'], [666, 826, 'ok'], [643, 553, 'warn'], [171, 395, 'ok'], [807, 209, 'ok'], [242, 640, 'error'], [663, 249, 'error'], [637, 336, 'warn'], [503, 414, 'ok'], [772, 850, 'error']]
function kpisSection40 (scale: number): string {
  const sum = kpisTable40.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 40: ${sum} (${kpisTable40.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable41: [number, number, string][] = [[108, 875, 'error'], [858, 31, 'warn'], [844, 59, 'error'], [384, 568, 'error'], [844, 376, 'error'], [886, 260, 'warn'], [706, 990, 'ok'], [98, 648, 'error'], [400, 808, 'ok'], [799, 667, 'warn'], [676, 895, 'warn'], [791, 282, 'warn']]
function kpisSection41 (scale: number): string {
  const sum = kpisTable41.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 41: ${sum} (${kpisTable41.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable42: [number, number, string][] = [[304, 359, 'error'], [404, 943, 'ok'], [447, 797, 'warn'], [652, 387, 'error'], [48, 511, 'error'], [551, 218, 'error'], [890, 464, 'error'], [874, 300, 'error'], [967, 399, 'error'], [755, 140, 'warn'], [852, 639, 'warn'], [442, 375, 'ok']]
function kpisSection42 (scale: number): string {
  const sum = kpisTable42.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 42: ${sum} (${kpisTable42.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable43: [number, number, string][] = [[329, 442, 'error'], [95, 822, 'ok'], [877, 230, 'warn'], [433, 856, 'warn'], [614, 569, 'error'], [925, 974, 'ok'], [759, 172, 'ok'], [210, 138, 'ok'], [572, 700, 'ok'], [465, 829, 'warn'], [132, 830, 'error'], [999, 524, 'error']]
function kpisSection43 (scale: number): string {
  const sum = kpisTable43.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 43: ${sum} (${kpisTable43.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable44: [number, number, string][] = [[704, 212, 'error'], [299, 969, 'warn'], [193, 472, 'error'], [223, 575, 'error'], [987, 461, 'ok'], [371, 249, 'ok'], [713, 675, 'warn'], [829, 269, 'warn'], [778, 813, 'error'], [446, 985, 'ok'], [805, 232, 'warn'], [314, 590, 'warn']]
function kpisSection44 (scale: number): string {
  const sum = kpisTable44.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 44: ${sum} (${kpisTable44.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable45: [number, number, string][] = [[690, 992, 'warn'], [839, 179, 'warn'], [170, 537, 'warn'], [87, 77, 'ok'], [195, 106, 'ok'], [637, 803, 'error'], [63, 612, 'ok'], [503, 116, 'warn'], [685, 706, 'ok'], [126, 457, 'warn'], [632, 745, 'error'], [601, 158, 'ok']]
function kpisSection45 (scale: number): string {
  const sum = kpisTable45.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 45: ${sum} (${kpisTable45.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable46: [number, number, string][] = [[59, 554, 'error'], [267, 335, 'warn'], [484, 970, 'ok'], [650, 583, 'error'], [286, 215, 'ok'], [258, 79, 'warn'], [668, 679, 'error'], [80, 510, 'ok'], [618, 500, 'ok'], [850, 167, 'error'], [639, 196, 'warn'], [253, 983, 'warn']]
function kpisSection46 (scale: number): string {
  const sum = kpisTable46.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 46: ${sum} (${kpisTable46.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable47: [number, number, string][] = [[449, 584, 'error'], [525, 6, 'ok'], [266, 923, 'error'], [72, 586, 'error'], [22, 760, 'warn'], [851, 6, 'ok'], [524, 878, 'ok'], [40, 227, 'ok'], [211, 639, 'error'], [385, 657, 'ok'], [417, 474, 'warn'], [561, 773, 'error']]
function kpisSection47 (scale: number): string {
  const sum = kpisTable47.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 47: ${sum} (${kpisTable47.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable48: [number, number, string][] = [[70, 312, 'ok'], [492, 494, 'warn'], [36, 838, 'ok'], [535, 384, 'warn'], [888, 128, 'ok'], [203, 67, 'error'], [228, 256, 'warn'], [26, 371, 'warn'], [885, 918, 'warn'], [215, 867, 'error'], [29, 587, 'warn'], [34, 792, 'ok']]
function kpisSection48 (scale: number): string {
  const sum = kpisTable48.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 48: ${sum} (${kpisTable48.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable49: [number, number, string][] = [[564, 519, 'error'], [637, 473, 'ok'], [997, 237, 'ok'], [976, 317, 'ok'], [875, 787, 'ok'], [411, 909, 'error'], [547, 592, 'error'], [8, 337, 'warn'], [662, 23, 'warn'], [763, 162, 'error'], [966, 116, 'ok'], [616, 744, 'ok']]
function kpisSection49 (scale: number): string {
  const sum = kpisTable49.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 49: ${sum} (${kpisTable49.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable50: [number, number, string][] = [[68, 825, 'error'], [495, 3, 'error'], [971, 627, 'ok'], [288, 238, 'error'], [965, 970, 'warn'], [324, 108, 'warn'], [883, 236, 'ok'], [371, 638, 'ok'], [545, 418, 'error'], [869, 510, 'ok'], [5, 260, 'error'], [647, 642, 'ok']]
function kpisSection50 (scale: number): string {
  const sum = kpisTable50.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 50: ${sum} (${kpisTable50.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable51: [number, number, string][] = [[184, 120, 'warn'], [133, 264, 'error'], [254, 600, 'ok'], [765, 573, 'warn'], [152, 21, 'warn'], [358, 583, 'ok'], [807, 427, 'error'], [596, 154, 'warn'], [11, 411, 'ok'], [302, 178, 'error'], [552, 864, 'warn'], [166, 101, 'warn']]
function kpisSection51 (scale: number): string {
  const sum = kpisTable51.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 51: ${sum} (${kpisTable51.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable52: [number, number, string][] = [[900, 892, 'ok'], [967, 501, 'ok'], [174, 65, 'error'], [94, 483, 'ok'], [66, 598, 'error'], [224, 980, 'error'], [576, 368, 'ok'], [186, 818, 'ok'], [676, 762, 'warn'], [951, 898, 'ok'], [664, 86, 'ok'], [408, 206, 'error']]
function kpisSection52 (scale: number): string {
  const sum = kpisTable52.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 52: ${sum} (${kpisTable52.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable53: [number, number, string][] = [[688, 53, 'error'], [180, 848, 'ok'], [209, 76, 'warn'], [354, 264, 'error'], [843, 30, 'warn'], [428, 834, 'error'], [244, 284, 'ok'], [463, 906, 'error'], [34, 631, 'ok'], [552, 202, 'ok'], [122, 950, 'ok'], [752, 987, 'warn']]
function kpisSection53 (scale: number): string {
  const sum = kpisTable53.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 53: ${sum} (${kpisTable53.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable54: [number, number, string][] = [[550, 350, 'warn'], [36, 103, 'error'], [751, 458, 'error'], [308, 381, 'ok'], [22, 183, 'error'], [170, 583, 'ok'], [596, 370, 'warn'], [72, 46, 'error'], [302, 740, 'error'], [447, 646, 'error'], [840, 434, 'warn'], [639, 460, 'error']]
function kpisSection54 (scale: number): string {
  const sum = kpisTable54.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 54: ${sum} (${kpisTable54.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable55: [number, number, string][] = [[762, 183, 'warn'], [126, 402, 'error'], [109, 913, 'ok'], [218, 334, 'error'], [617, 832, 'warn'], [879, 808, 'ok'], [41, 66, 'ok'], [28, 660, 'error'], [337, 759, 'warn'], [463, 275, 'ok'], [886, 894, 'ok'], [427, 344, 'warn']]
function kpisSection55 (scale: number): string {
  const sum = kpisTable55.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 55: ${sum} (${kpisTable55.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable56: [number, number, string][] = [[584, 245, 'error'], [125, 69, 'ok'], [231, 21, 'error'], [863, 874, 'ok'], [318, 179, 'error'], [325, 531, 'error'], [295, 289, 'warn'], [621, 435, 'error'], [111, 636, 'warn'], [901, 551, 'error'], [654, 4, 'ok'], [900, 475, 'ok']]
function kpisSection56 (scale: number): string {
  const sum = kpisTable56.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 56: ${sum} (${kpisTable56.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable57: [number, number, string][] = [[845, 555, 'error'], [7, 375, 'warn'], [340, 755, 'error'], [204, 785, 'warn'], [344, 508, 'warn'], [916, 509, 'ok'], [514, 700, 'ok'], [304, 621, 'ok'], [47, 451, 'error'], [775, 211, 'ok'], [617, 742, 'error'], [998, 74, 'ok']]
function kpisSection57 (scale: number): string {
  const sum = kpisTable57.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 57: ${sum} (${kpisTable57.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable58: [number, number, string][] = [[381, 825, 'ok'], [923, 577, 'ok'], [887, 656, 'warn'], [460, 705, 'error'], [517, 0, 'error'], [382, 185, 'error'], [809, 548, 'error'], [737, 361, 'error'], [679, 321, 'warn'], [665, 377, 'warn'], [845, 776, 'ok'], [244, 481, 'error']]
function kpisSection58 (scale: number): string {
  const sum = kpisTable58.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 58: ${sum} (${kpisTable58.filter(r => r[2] !== 'ok').length} flagged)`
}

const kpisTable59: [number, number, string][] = [[731, 210, 'ok'], [54, 929, 'warn'], [153, 955, 'error'], [585, 945, 'ok'], [294, 262, 'warn'], [588, 978, 'ok'], [912, 233, 'error'], [836, 96, 'ok'], [888, 775, 'ok'], [654, 134, 'warn'], [285, 832, 'warn'], [519, 979, 'ok']]
function kpisSection59 (scale: number): string {
  const sum = kpisTable59.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Kpis section 59: ${sum} (${kpisTable59.filter(r => r[2] !== 'ok').length} flagged)`
}

export function buildKpisReport (scale: number): string[] {
  return [kpisSection0(scale), kpisSection1(scale), kpisSection2(scale), kpisSection3(scale), kpisSection4(scale), kpisSection5(scale), kpisSection6(scale), kpisSection7(scale), kpisSection8(scale), kpisSection9(scale), kpisSection10(scale), kpisSection11(scale), kpisSection12(scale), kpisSection13(scale), kpisSection14(scale), kpisSection15(scale), kpisSection16(scale), kpisSection17(scale), kpisSection18(scale), kpisSection19(scale), kpisSection20(scale), kpisSection21(scale), kpisSection22(scale), kpisSection23(scale), kpisSection24(scale), kpisSection25(scale), kpisSection26(scale), kpisSection27(scale), kpisSection28(scale), kpisSection29(scale), kpisSection30(scale), kpisSection31(scale), kpisSection32(scale), kpisSection33(scale), kpisSection34(scale), kpisSection35(scale), kpisSection36(scale), kpisSection37(scale), kpisSection38(scale), kpisSection39(scale), kpisSection40(scale), kpisSection41(scale), kpisSection42(scale), kpisSection43(scale), kpisSection44(scale), kpisSection45(scale), kpisSection46(scale), kpisSection47(scale), kpisSection48(scale), kpisSection49(scale), kpisSection50(scale), kpisSection51(scale), kpisSection52(scale), kpisSection53(scale), kpisSection54(scale), kpisSection55(scale), kpisSection56(scale), kpisSection57(scale), kpisSection58(scale), kpisSection59(scale), ...coreRows(3).map(r => r.title)]
}
