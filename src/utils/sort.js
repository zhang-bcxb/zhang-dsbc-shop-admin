// 上移
export function useArrayMoveUp(arr, index) {
  swapArray(arr, index, index - 1)
}

// 下移
export function useArrayMoveDown(arr, index) {
  swapArray(arr, index, index + 1)
}

/**
 * 功能：交换数组中的位置
 * @param arr 目标数组
 * @param index1 交换之前的位置
 * @param index2 交换之后的位置
 * @returns {*} 返回操作好的数组
 */
function swapArray(arr, index1, index2) {
  arr[index1] = arr.splice(index2, 1, arr[index1])[0]
  return arr
}

/**
 * 功能：sku排列算法
 * @returns {*|(function(*=, *): [])}
 */
export function cartesianProductOf() {
  return Array.prototype.reduce.call(arguments, function (a, b) {
    let ret = [];
    a.forEach(function (a) {
      b.forEach(function (b) {
        ret.push(a.concat([b]));
      });
    });
    return ret;
  }, [[]]);
}

/* 转化前
[
  [
    {"value":"绿色"},
    {"value":"黄色"}
  ],
  [
    {"value":"M"},
    {"value":"L"}
  ]
]
 */

/* 转化后
[
  [
    {"value":"绿色"},
    {"value":"M"}
  ],
  [
    {"value":"黄色"},
    {"value":"M"}
  ],
  [
    {"value":"绿色"},
    {"value":"L"}
  ],
  [
    {"value":"黄色"},
    {"value":"L"}
  ]
]
 */
