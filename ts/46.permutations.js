var permute = function (nums) {
  const result = [];
  const current = [];
  const used = new Array(nums.length).fill(false);
  dfs(current, result, nums, used);
  return result;
};

const dfs = (current, result, nums, used) => {
  if (current.length === nums.length) {
    result.push([...current]);
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (used[i]) continue;

    used[i] = true;
    current.push(nums[i]);
    dfs(current, result, nums, used);
    current.pop();
    used[i] = false;
  }
};
