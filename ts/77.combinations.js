/*
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
*/

var combine = function (n, k) {
  const result = [];
  const current = [];
  let start = 1;
  dfs(start, current, result, n, k);
  return result;
};

const dfs = (start, current, result, n, k) => {
  if (current.length === k) {
    result.push([...current]);
  }

  if (current.length > k) {
    return;
  }

  for (let i = start; i <= n; i++) {
    current.push(i);
    dfs(i + 1, current, result, n, k);
    current.pop();
  }
};
