import '../styles/reports-print.css'
import { coreRows } from '@va/core/utils/coreRows.ts'

const reportsTable0: [number, number, string][] = [[582, 363, 'error'], [387, 195, 'error'], [880, 329, 'warn'], [874, 9, 'error'], [11, 952, 'warn'], [820, 33, 'ok'], [57, 669, 'warn'], [132, 668, 'warn'], [643, 431, 'ok'], [87, 547, 'ok'], [40, 829, 'ok'], [520, 842, 'ok']]
function reportsSection0 (scale: number): string {
  const sum = reportsTable0.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 0: ${sum} (${reportsTable0.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable1: [number, number, string][] = [[990, 652, 'warn'], [330, 302, 'ok'], [928, 811, 'warn'], [311, 567, 'ok'], [52, 18, 'error'], [526, 183, 'error'], [624, 777, 'error'], [861, 837, 'warn'], [660, 943, 'error'], [231, 361, 'ok'], [398, 112, 'ok'], [868, 315, 'error']]
function reportsSection1 (scale: number): string {
  const sum = reportsTable1.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 1: ${sum} (${reportsTable1.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable2: [number, number, string][] = [[722, 461, 'warn'], [755, 864, 'warn'], [347, 845, 'warn'], [65, 780, 'warn'], [112, 43, 'warn'], [804, 520, 'error'], [862, 361, 'ok'], [87, 460, 'warn'], [944, 508, 'error'], [904, 370, 'warn'], [937, 689, 'warn'], [905, 288, 'ok']]
function reportsSection2 (scale: number): string {
  const sum = reportsTable2.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 2: ${sum} (${reportsTable2.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable3: [number, number, string][] = [[290, 753, 'ok'], [895, 156, 'warn'], [506, 580, 'ok'], [805, 440, 'warn'], [593, 342, 'error'], [535, 961, 'error'], [771, 370, 'ok'], [13, 496, 'warn'], [751, 852, 'warn'], [57, 146, 'ok'], [500, 923, 'ok'], [666, 249, 'error']]
function reportsSection3 (scale: number): string {
  const sum = reportsTable3.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 3: ${sum} (${reportsTable3.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable4: [number, number, string][] = [[987, 499, 'warn'], [314, 351, 'ok'], [778, 109, 'warn'], [640, 417, 'error'], [49, 651, 'ok'], [583, 635, 'warn'], [496, 874, 'warn'], [838, 324, 'ok'], [594, 139, 'ok'], [466, 869, 'error'], [640, 242, 'warn'], [578, 61, 'warn']]
function reportsSection4 (scale: number): string {
  const sum = reportsTable4.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 4: ${sum} (${reportsTable4.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable5: [number, number, string][] = [[254, 658, 'warn'], [266, 526, 'warn'], [364, 834, 'error'], [802, 275, 'warn'], [279, 848, 'ok'], [609, 26, 'ok'], [808, 934, 'warn'], [920, 428, 'error'], [951, 683, 'error'], [820, 949, 'warn'], [102, 711, 'error'], [567, 749, 'error']]
function reportsSection5 (scale: number): string {
  const sum = reportsTable5.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 5: ${sum} (${reportsTable5.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable6: [number, number, string][] = [[961, 326, 'error'], [628, 123, 'ok'], [827, 831, 'warn'], [0, 10, 'ok'], [730, 286, 'ok'], [530, 817, 'warn'], [831, 132, 'warn'], [115, 499, 'ok'], [522, 26, 'ok'], [693, 838, 'warn'], [8, 645, 'warn'], [663, 473, 'error']]
function reportsSection6 (scale: number): string {
  const sum = reportsTable6.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 6: ${sum} (${reportsTable6.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable7: [number, number, string][] = [[112, 823, 'ok'], [948, 912, 'warn'], [816, 229, 'ok'], [484, 184, 'ok'], [431, 404, 'error'], [354, 241, 'warn'], [912, 68, 'error'], [963, 344, 'ok'], [522, 49, 'ok'], [600, 797, 'error'], [760, 831, 'warn'], [490, 369, 'ok']]
function reportsSection7 (scale: number): string {
  const sum = reportsTable7.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 7: ${sum} (${reportsTable7.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable8: [number, number, string][] = [[904, 283, 'error'], [171, 104, 'warn'], [658, 159, 'error'], [877, 463, 'error'], [289, 16, 'ok'], [694, 610, 'error'], [564, 237, 'error'], [614, 776, 'error'], [292, 188, 'warn'], [386, 548, 'warn'], [804, 778, 'warn'], [286, 676, 'warn']]
function reportsSection8 (scale: number): string {
  const sum = reportsTable8.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 8: ${sum} (${reportsTable8.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable9: [number, number, string][] = [[727, 711, 'warn'], [48, 762, 'warn'], [218, 370, 'error'], [274, 524, 'ok'], [136, 467, 'ok'], [611, 956, 'error'], [436, 433, 'warn'], [656, 684, 'error'], [624, 502, 'error'], [980, 550, 'ok'], [83, 46, 'ok'], [239, 212, 'ok']]
function reportsSection9 (scale: number): string {
  const sum = reportsTable9.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 9: ${sum} (${reportsTable9.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable10: [number, number, string][] = [[928, 41, 'warn'], [73, 582, 'warn'], [323, 634, 'warn'], [840, 111, 'error'], [370, 620, 'warn'], [342, 883, 'error'], [330, 834, 'ok'], [518, 512, 'ok'], [819, 737, 'warn'], [387, 181, 'error'], [655, 377, 'warn'], [212, 256, 'warn']]
function reportsSection10 (scale: number): string {
  const sum = reportsTable10.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 10: ${sum} (${reportsTable10.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable11: [number, number, string][] = [[257, 368, 'warn'], [350, 741, 'warn'], [825, 461, 'warn'], [183, 219, 'ok'], [975, 856, 'warn'], [245, 341, 'ok'], [293, 923, 'warn'], [567, 49, 'error'], [794, 198, 'ok'], [893, 129, 'error'], [501, 889, 'ok'], [216, 732, 'ok']]
function reportsSection11 (scale: number): string {
  const sum = reportsTable11.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 11: ${sum} (${reportsTable11.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable12: [number, number, string][] = [[79, 896, 'ok'], [762, 13, 'error'], [992, 689, 'warn'], [880, 483, 'ok'], [128, 727, 'ok'], [724, 398, 'error'], [578, 879, 'error'], [660, 736, 'error'], [764, 269, 'error'], [223, 537, 'warn'], [923, 974, 'ok'], [931, 301, 'error']]
function reportsSection12 (scale: number): string {
  const sum = reportsTable12.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 12: ${sum} (${reportsTable12.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable13: [number, number, string][] = [[10, 989, 'error'], [923, 243, 'warn'], [530, 672, 'warn'], [506, 830, 'warn'], [519, 167, 'ok'], [800, 467, 'ok'], [294, 801, 'ok'], [145, 920, 'warn'], [640, 542, 'ok'], [12, 529, 'warn'], [209, 430, 'error'], [596, 882, 'ok']]
function reportsSection13 (scale: number): string {
  const sum = reportsTable13.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 13: ${sum} (${reportsTable13.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable14: [number, number, string][] = [[39, 55, 'error'], [594, 757, 'error'], [193, 301, 'ok'], [825, 688, 'error'], [775, 856, 'error'], [598, 320, 'error'], [865, 638, 'error'], [693, 904, 'warn'], [322, 0, 'ok'], [927, 152, 'ok'], [203, 416, 'ok'], [723, 48, 'warn']]
function reportsSection14 (scale: number): string {
  const sum = reportsTable14.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 14: ${sum} (${reportsTable14.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable15: [number, number, string][] = [[423, 929, 'error'], [369, 655, 'error'], [549, 119, 'ok'], [869, 160, 'ok'], [976, 889, 'error'], [392, 144, 'warn'], [244, 135, 'warn'], [574, 9, 'ok'], [526, 344, 'error'], [949, 684, 'ok'], [45, 157, 'warn'], [980, 518, 'error']]
function reportsSection15 (scale: number): string {
  const sum = reportsTable15.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 15: ${sum} (${reportsTable15.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable16: [number, number, string][] = [[739, 829, 'error'], [971, 228, 'ok'], [767, 439, 'ok'], [918, 203, 'error'], [425, 304, 'warn'], [985, 444, 'error'], [538, 441, 'error'], [26, 275, 'error'], [364, 563, 'ok'], [770, 185, 'error'], [417, 535, 'error'], [637, 230, 'ok']]
function reportsSection16 (scale: number): string {
  const sum = reportsTable16.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 16: ${sum} (${reportsTable16.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable17: [number, number, string][] = [[556, 975, 'error'], [314, 952, 'error'], [442, 571, 'warn'], [220, 196, 'warn'], [183, 316, 'error'], [8, 939, 'error'], [172, 464, 'warn'], [192, 494, 'ok'], [895, 736, 'warn'], [298, 408, 'ok'], [378, 751, 'ok'], [112, 497, 'error']]
function reportsSection17 (scale: number): string {
  const sum = reportsTable17.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 17: ${sum} (${reportsTable17.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable18: [number, number, string][] = [[658, 164, 'warn'], [288, 32, 'ok'], [156, 248, 'warn'], [476, 84, 'warn'], [210, 574, 'warn'], [867, 68, 'error'], [876, 707, 'error'], [391, 3, 'ok'], [903, 209, 'warn'], [216, 686, 'error'], [564, 110, 'ok'], [800, 774, 'error']]
function reportsSection18 (scale: number): string {
  const sum = reportsTable18.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 18: ${sum} (${reportsTable18.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable19: [number, number, string][] = [[765, 988, 'ok'], [591, 452, 'warn'], [72, 721, 'ok'], [348, 893, 'error'], [889, 344, 'error'], [902, 371, 'error'], [336, 873, 'error'], [315, 158, 'ok'], [127, 175, 'error'], [633, 370, 'error'], [340, 60, 'ok'], [637, 708, 'ok']]
function reportsSection19 (scale: number): string {
  const sum = reportsTable19.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 19: ${sum} (${reportsTable19.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable20: [number, number, string][] = [[529, 542, 'warn'], [872, 558, 'ok'], [709, 221, 'error'], [678, 561, 'error'], [613, 560, 'error'], [327, 228, 'warn'], [991, 365, 'error'], [556, 70, 'ok'], [191, 121, 'warn'], [218, 907, 'ok'], [648, 407, 'error'], [152, 160, 'ok']]
function reportsSection20 (scale: number): string {
  const sum = reportsTable20.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 20: ${sum} (${reportsTable20.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable21: [number, number, string][] = [[628, 307, 'ok'], [411, 215, 'ok'], [473, 969, 'error'], [352, 214, 'error'], [718, 778, 'ok'], [123, 248, 'warn'], [365, 900, 'error'], [155, 536, 'warn'], [911, 57, 'error'], [75, 797, 'error'], [821, 641, 'ok'], [802, 569, 'warn']]
function reportsSection21 (scale: number): string {
  const sum = reportsTable21.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 21: ${sum} (${reportsTable21.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable22: [number, number, string][] = [[340, 9, 'ok'], [426, 808, 'ok'], [671, 980, 'error'], [66, 517, 'warn'], [542, 377, 'warn'], [317, 18, 'error'], [745, 619, 'warn'], [888, 937, 'warn'], [258, 791, 'warn'], [18, 47, 'warn'], [624, 172, 'error'], [43, 40, 'ok']]
function reportsSection22 (scale: number): string {
  const sum = reportsTable22.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 22: ${sum} (${reportsTable22.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable23: [number, number, string][] = [[373, 189, 'ok'], [1, 659, 'ok'], [80, 0, 'ok'], [496, 424, 'warn'], [373, 905, 'ok'], [742, 158, 'warn'], [854, 96, 'error'], [271, 930, 'ok'], [359, 942, 'ok'], [715, 852, 'error'], [518, 898, 'warn'], [831, 559, 'error']]
function reportsSection23 (scale: number): string {
  const sum = reportsTable23.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 23: ${sum} (${reportsTable23.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable24: [number, number, string][] = [[985, 196, 'warn'], [406, 956, 'ok'], [777, 24, 'warn'], [737, 773, 'warn'], [283, 826, 'ok'], [93, 547, 'ok'], [695, 154, 'ok'], [339, 745, 'warn'], [852, 693, 'ok'], [25, 346, 'ok'], [47, 863, 'ok'], [506, 742, 'error']]
function reportsSection24 (scale: number): string {
  const sum = reportsTable24.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 24: ${sum} (${reportsTable24.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable25: [number, number, string][] = [[964, 739, 'ok'], [678, 293, 'warn'], [611, 539, 'warn'], [620, 427, 'error'], [831, 437, 'ok'], [759, 643, 'ok'], [418, 87, 'ok'], [241, 38, 'warn'], [971, 926, 'ok'], [850, 339, 'warn'], [82, 73, 'warn'], [753, 242, 'warn']]
function reportsSection25 (scale: number): string {
  const sum = reportsTable25.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 25: ${sum} (${reportsTable25.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable26: [number, number, string][] = [[715, 764, 'error'], [225, 463, 'warn'], [642, 635, 'ok'], [829, 717, 'error'], [963, 544, 'ok'], [33, 191, 'warn'], [503, 385, 'error'], [172, 151, 'error'], [762, 656, 'warn'], [670, 574, 'ok'], [451, 228, 'error'], [838, 105, 'error']]
function reportsSection26 (scale: number): string {
  const sum = reportsTable26.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 26: ${sum} (${reportsTable26.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable27: [number, number, string][] = [[239, 337, 'warn'], [325, 230, 'warn'], [838, 244, 'warn'], [532, 464, 'warn'], [687, 131, 'error'], [265, 936, 'error'], [387, 735, 'warn'], [682, 870, 'ok'], [251, 620, 'error'], [143, 945, 'warn'], [275, 346, 'error'], [336, 891, 'error']]
function reportsSection27 (scale: number): string {
  const sum = reportsTable27.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 27: ${sum} (${reportsTable27.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable28: [number, number, string][] = [[77, 955, 'error'], [373, 71, 'error'], [370, 531, 'warn'], [92, 739, 'ok'], [879, 320, 'error'], [707, 166, 'error'], [381, 860, 'warn'], [307, 86, 'error'], [823, 710, 'warn'], [213, 220, 'warn'], [946, 179, 'warn'], [741, 665, 'warn']]
function reportsSection28 (scale: number): string {
  const sum = reportsTable28.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 28: ${sum} (${reportsTable28.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable29: [number, number, string][] = [[7, 493, 'warn'], [863, 200, 'ok'], [754, 769, 'ok'], [15, 234, 'error'], [447, 463, 'error'], [905, 968, 'warn'], [238, 930, 'warn'], [568, 879, 'warn'], [971, 474, 'ok'], [650, 806, 'warn'], [549, 422, 'error'], [819, 960, 'error']]
function reportsSection29 (scale: number): string {
  const sum = reportsTable29.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 29: ${sum} (${reportsTable29.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable30: [number, number, string][] = [[267, 534, 'ok'], [679, 18, 'warn'], [796, 288, 'ok'], [622, 200, 'error'], [348, 794, 'error'], [423, 721, 'ok'], [100, 549, 'error'], [53, 428, 'error'], [404, 405, 'ok'], [990, 417, 'warn'], [460, 738, 'ok'], [139, 853, 'warn']]
function reportsSection30 (scale: number): string {
  const sum = reportsTable30.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 30: ${sum} (${reportsTable30.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable31: [number, number, string][] = [[214, 15, 'ok'], [472, 49, 'ok'], [527, 74, 'error'], [101, 644, 'warn'], [348, 451, 'warn'], [7, 529, 'error'], [1, 579, 'error'], [454, 554, 'ok'], [494, 231, 'warn'], [571, 256, 'error'], [841, 569, 'warn'], [610, 508, 'error']]
function reportsSection31 (scale: number): string {
  const sum = reportsTable31.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 31: ${sum} (${reportsTable31.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable32: [number, number, string][] = [[372, 552, 'ok'], [227, 450, 'error'], [91, 177, 'warn'], [568, 944, 'ok'], [501, 919, 'error'], [922, 249, 'error'], [784, 871, 'ok'], [942, 188, 'ok'], [936, 834, 'error'], [654, 884, 'ok'], [121, 699, 'ok'], [788, 336, 'error']]
function reportsSection32 (scale: number): string {
  const sum = reportsTable32.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 32: ${sum} (${reportsTable32.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable33: [number, number, string][] = [[916, 455, 'ok'], [599, 538, 'error'], [584, 709, 'warn'], [157, 153, 'warn'], [458, 229, 'error'], [114, 367, 'ok'], [792, 577, 'ok'], [936, 362, 'ok'], [773, 300, 'ok'], [601, 420, 'warn'], [370, 577, 'ok'], [23, 122, 'warn']]
function reportsSection33 (scale: number): string {
  const sum = reportsTable33.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 33: ${sum} (${reportsTable33.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable34: [number, number, string][] = [[918, 533, 'error'], [61, 2, 'warn'], [867, 631, 'warn'], [995, 202, 'ok'], [680, 905, 'error'], [600, 835, 'ok'], [367, 955, 'ok'], [770, 420, 'ok'], [994, 958, 'ok'], [825, 278, 'error'], [56, 103, 'warn'], [57, 925, 'error']]
function reportsSection34 (scale: number): string {
  const sum = reportsTable34.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 34: ${sum} (${reportsTable34.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable35: [number, number, string][] = [[897, 10, 'error'], [479, 624, 'error'], [633, 183, 'ok'], [83, 502, 'ok'], [892, 720, 'ok'], [212, 136, 'ok'], [245, 861, 'warn'], [639, 74, 'error'], [767, 360, 'warn'], [733, 217, 'warn'], [46, 1, 'warn'], [200, 368, 'warn']]
function reportsSection35 (scale: number): string {
  const sum = reportsTable35.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 35: ${sum} (${reportsTable35.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable36: [number, number, string][] = [[719, 84, 'ok'], [928, 640, 'error'], [562, 90, 'warn'], [394, 694, 'error'], [162, 683, 'error'], [948, 421, 'ok'], [535, 160, 'warn'], [385, 803, 'error'], [856, 658, 'warn'], [769, 241, 'error'], [533, 773, 'error'], [353, 134, 'ok']]
function reportsSection36 (scale: number): string {
  const sum = reportsTable36.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 36: ${sum} (${reportsTable36.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable37: [number, number, string][] = [[447, 455, 'error'], [772, 30, 'ok'], [526, 46, 'warn'], [702, 329, 'error'], [882, 47, 'warn'], [859, 517, 'ok'], [112, 7, 'ok'], [955, 708, 'ok'], [125, 937, 'warn'], [242, 425, 'warn'], [493, 935, 'error'], [395, 56, 'error']]
function reportsSection37 (scale: number): string {
  const sum = reportsTable37.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 37: ${sum} (${reportsTable37.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable38: [number, number, string][] = [[481, 197, 'ok'], [721, 768, 'error'], [141, 802, 'warn'], [509, 89, 'ok'], [643, 603, 'warn'], [820, 622, 'warn'], [382, 361, 'error'], [156, 552, 'error'], [801, 829, 'error'], [101, 355, 'ok'], [315, 358, 'warn'], [254, 375, 'ok']]
function reportsSection38 (scale: number): string {
  const sum = reportsTable38.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 38: ${sum} (${reportsTable38.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable39: [number, number, string][] = [[72, 248, 'warn'], [834, 981, 'ok'], [859, 60, 'error'], [866, 971, 'error'], [744, 390, 'ok'], [564, 305, 'error'], [433, 339, 'warn'], [389, 472, 'error'], [438, 496, 'error'], [779, 783, 'warn'], [957, 201, 'error'], [780, 616, 'ok']]
function reportsSection39 (scale: number): string {
  const sum = reportsTable39.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 39: ${sum} (${reportsTable39.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable40: [number, number, string][] = [[361, 37, 'error'], [781, 589, 'warn'], [23, 787, 'error'], [586, 293, 'warn'], [849, 330, 'error'], [48, 208, 'ok'], [962, 112, 'ok'], [229, 705, 'warn'], [716, 990, 'ok'], [761, 690, 'error'], [435, 452, 'ok'], [809, 256, 'ok']]
function reportsSection40 (scale: number): string {
  const sum = reportsTable40.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 40: ${sum} (${reportsTable40.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable41: [number, number, string][] = [[206, 60, 'warn'], [806, 75, 'ok'], [647, 738, 'error'], [460, 160, 'error'], [466, 170, 'ok'], [608, 325, 'ok'], [963, 725, 'ok'], [331, 258, 'warn'], [632, 606, 'ok'], [607, 71, 'warn'], [955, 193, 'warn'], [414, 13, 'ok']]
function reportsSection41 (scale: number): string {
  const sum = reportsTable41.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 41: ${sum} (${reportsTable41.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable42: [number, number, string][] = [[2, 216, 'error'], [373, 432, 'ok'], [22, 269, 'warn'], [821, 854, 'warn'], [775, 21, 'error'], [127, 770, 'warn'], [620, 956, 'error'], [297, 573, 'warn'], [489, 843, 'ok'], [838, 903, 'ok'], [874, 932, 'ok'], [659, 723, 'error']]
function reportsSection42 (scale: number): string {
  const sum = reportsTable42.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 42: ${sum} (${reportsTable42.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable43: [number, number, string][] = [[519, 689, 'warn'], [220, 378, 'error'], [308, 205, 'error'], [949, 616, 'ok'], [760, 773, 'error'], [67, 198, 'warn'], [836, 429, 'ok'], [630, 299, 'warn'], [445, 730, 'ok'], [79, 529, 'error'], [539, 973, 'warn'], [345, 575, 'error']]
function reportsSection43 (scale: number): string {
  const sum = reportsTable43.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 43: ${sum} (${reportsTable43.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable44: [number, number, string][] = [[214, 421, 'ok'], [151, 957, 'ok'], [664, 660, 'ok'], [461, 229, 'warn'], [840, 619, 'warn'], [771, 603, 'error'], [228, 955, 'ok'], [272, 324, 'ok'], [500, 428, 'warn'], [621, 278, 'ok'], [285, 520, 'error'], [600, 459, 'error']]
function reportsSection44 (scale: number): string {
  const sum = reportsTable44.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 44: ${sum} (${reportsTable44.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable45: [number, number, string][] = [[36, 625, 'error'], [473, 390, 'error'], [239, 305, 'warn'], [973, 723, 'warn'], [692, 13, 'error'], [203, 57, 'error'], [53, 34, 'ok'], [605, 346, 'ok'], [146, 904, 'ok'], [641, 147, 'error'], [234, 164, 'error'], [986, 346, 'error']]
function reportsSection45 (scale: number): string {
  const sum = reportsTable45.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 45: ${sum} (${reportsTable45.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable46: [number, number, string][] = [[714, 470, 'ok'], [950, 262, 'warn'], [390, 132, 'error'], [452, 816, 'warn'], [407, 406, 'warn'], [674, 341, 'ok'], [921, 425, 'error'], [612, 628, 'warn'], [947, 870, 'ok'], [846, 581, 'warn'], [562, 93, 'ok'], [673, 608, 'ok']]
function reportsSection46 (scale: number): string {
  const sum = reportsTable46.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 46: ${sum} (${reportsTable46.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable47: [number, number, string][] = [[645, 571, 'error'], [818, 730, 'ok'], [288, 535, 'warn'], [880, 880, 'error'], [952, 688, 'ok'], [575, 887, 'ok'], [973, 556, 'warn'], [373, 597, 'warn'], [297, 724, 'ok'], [363, 586, 'error'], [651, 720, 'warn'], [509, 959, 'warn']]
function reportsSection47 (scale: number): string {
  const sum = reportsTable47.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 47: ${sum} (${reportsTable47.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable48: [number, number, string][] = [[699, 307, 'warn'], [837, 22, 'warn'], [861, 75, 'ok'], [92, 272, 'ok'], [885, 894, 'ok'], [135, 427, 'error'], [912, 717, 'ok'], [798, 156, 'error'], [253, 96, 'warn'], [328, 414, 'warn'], [156, 404, 'warn'], [343, 514, 'warn']]
function reportsSection48 (scale: number): string {
  const sum = reportsTable48.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 48: ${sum} (${reportsTable48.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable49: [number, number, string][] = [[294, 827, 'ok'], [935, 564, 'ok'], [28, 986, 'ok'], [519, 698, 'error'], [463, 875, 'ok'], [274, 314, 'ok'], [460, 579, 'warn'], [62, 678, 'warn'], [378, 289, 'error'], [425, 922, 'ok'], [725, 949, 'error'], [722, 677, 'error']]
function reportsSection49 (scale: number): string {
  const sum = reportsTable49.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 49: ${sum} (${reportsTable49.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable50: [number, number, string][] = [[852, 593, 'error'], [713, 401, 'warn'], [747, 212, 'warn'], [804, 725, 'ok'], [463, 662, 'warn'], [9, 875, 'warn'], [591, 623, 'error'], [278, 625, 'error'], [804, 326, 'error'], [377, 650, 'warn'], [94, 802, 'ok'], [422, 500, 'warn']]
function reportsSection50 (scale: number): string {
  const sum = reportsTable50.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 50: ${sum} (${reportsTable50.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable51: [number, number, string][] = [[708, 298, 'error'], [202, 447, 'warn'], [752, 635, 'ok'], [998, 70, 'warn'], [855, 579, 'ok'], [467, 967, 'ok'], [766, 842, 'warn'], [979, 322, 'warn'], [997, 472, 'error'], [750, 408, 'ok'], [690, 851, 'warn'], [102, 952, 'warn']]
function reportsSection51 (scale: number): string {
  const sum = reportsTable51.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 51: ${sum} (${reportsTable51.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable52: [number, number, string][] = [[628, 726, 'error'], [703, 832, 'ok'], [97, 406, 'warn'], [509, 55, 'error'], [150, 519, 'warn'], [266, 771, 'ok'], [867, 138, 'error'], [212, 166, 'ok'], [261, 455, 'warn'], [317, 448, 'ok'], [165, 134, 'error'], [167, 758, 'error']]
function reportsSection52 (scale: number): string {
  const sum = reportsTable52.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 52: ${sum} (${reportsTable52.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable53: [number, number, string][] = [[608, 953, 'ok'], [169, 57, 'ok'], [711, 993, 'warn'], [243, 908, 'error'], [74, 896, 'warn'], [803, 826, 'ok'], [552, 674, 'ok'], [362, 202, 'warn'], [843, 148, 'ok'], [40, 455, 'warn'], [769, 177, 'error'], [231, 870, 'warn']]
function reportsSection53 (scale: number): string {
  const sum = reportsTable53.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 53: ${sum} (${reportsTable53.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable54: [number, number, string][] = [[972, 70, 'warn'], [110, 390, 'warn'], [848, 215, 'ok'], [772, 926, 'ok'], [113, 964, 'warn'], [951, 744, 'error'], [838, 384, 'warn'], [508, 318, 'ok'], [511, 211, 'error'], [123, 968, 'error'], [94, 460, 'warn'], [165, 39, 'error']]
function reportsSection54 (scale: number): string {
  const sum = reportsTable54.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 54: ${sum} (${reportsTable54.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable55: [number, number, string][] = [[530, 388, 'error'], [465, 2, 'error'], [306, 500, 'error'], [290, 5, 'warn'], [118, 666, 'ok'], [150, 545, 'ok'], [56, 345, 'error'], [659, 942, 'ok'], [372, 675, 'ok'], [17, 628, 'ok'], [440, 953, 'ok'], [387, 569, 'error']]
function reportsSection55 (scale: number): string {
  const sum = reportsTable55.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 55: ${sum} (${reportsTable55.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable56: [number, number, string][] = [[79, 71, 'warn'], [753, 186, 'warn'], [416, 446, 'ok'], [202, 226, 'error'], [923, 490, 'ok'], [871, 66, 'error'], [629, 901, 'error'], [369, 846, 'error'], [506, 460, 'error'], [895, 241, 'warn'], [807, 336, 'ok'], [691, 630, 'ok']]
function reportsSection56 (scale: number): string {
  const sum = reportsTable56.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 56: ${sum} (${reportsTable56.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable57: [number, number, string][] = [[452, 794, 'ok'], [354, 120, 'ok'], [623, 642, 'error'], [326, 15, 'error'], [87, 716, 'error'], [742, 385, 'warn'], [676, 497, 'warn'], [561, 758, 'error'], [992, 54, 'ok'], [547, 755, 'ok'], [346, 213, 'error'], [707, 439, 'warn']]
function reportsSection57 (scale: number): string {
  const sum = reportsTable57.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 57: ${sum} (${reportsTable57.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable58: [number, number, string][] = [[358, 703, 'ok'], [413, 774, 'ok'], [347, 496, 'ok'], [72, 30, 'warn'], [841, 971, 'warn'], [79, 636, 'ok'], [277, 425, 'warn'], [629, 161, 'error'], [0, 928, 'ok'], [554, 563, 'error'], [950, 849, 'error'], [823, 132, 'warn']]
function reportsSection58 (scale: number): string {
  const sum = reportsTable58.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 58: ${sum} (${reportsTable58.filter(r => r[2] !== 'ok').length} flagged)`
}

const reportsTable59: [number, number, string][] = [[110, 689, 'error'], [905, 913, 'ok'], [275, 880, 'ok'], [927, 610, 'warn'], [605, 111, 'error'], [208, 917, 'warn'], [136, 719, 'warn'], [371, 95, 'ok'], [573, 1, 'error'], [609, 773, 'error'], [713, 455, 'error'], [150, 596, 'ok']]
function reportsSection59 (scale: number): string {
  const sum = reportsTable59.reduce((acc, [a, b]) => acc + a * scale - b, 0)
  return `Reports section 59: ${sum} (${reportsTable59.filter(r => r[2] !== 'ok').length} flagged)`
}

export function buildReportsReport (scale: number): string[] {
  return [reportsSection0(scale), reportsSection1(scale), reportsSection2(scale), reportsSection3(scale), reportsSection4(scale), reportsSection5(scale), reportsSection6(scale), reportsSection7(scale), reportsSection8(scale), reportsSection9(scale), reportsSection10(scale), reportsSection11(scale), reportsSection12(scale), reportsSection13(scale), reportsSection14(scale), reportsSection15(scale), reportsSection16(scale), reportsSection17(scale), reportsSection18(scale), reportsSection19(scale), reportsSection20(scale), reportsSection21(scale), reportsSection22(scale), reportsSection23(scale), reportsSection24(scale), reportsSection25(scale), reportsSection26(scale), reportsSection27(scale), reportsSection28(scale), reportsSection29(scale), reportsSection30(scale), reportsSection31(scale), reportsSection32(scale), reportsSection33(scale), reportsSection34(scale), reportsSection35(scale), reportsSection36(scale), reportsSection37(scale), reportsSection38(scale), reportsSection39(scale), reportsSection40(scale), reportsSection41(scale), reportsSection42(scale), reportsSection43(scale), reportsSection44(scale), reportsSection45(scale), reportsSection46(scale), reportsSection47(scale), reportsSection48(scale), reportsSection49(scale), reportsSection50(scale), reportsSection51(scale), reportsSection52(scale), reportsSection53(scale), reportsSection54(scale), reportsSection55(scale), reportsSection56(scale), reportsSection57(scale), reportsSection58(scale), reportsSection59(scale), ...coreRows(3).map(r => r.title)]
}
