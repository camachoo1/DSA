func combinationSum(candidates []int, target int) [][]int {
    res := [][]int{}
    list := []int{}
    dfs(candidates, target, list, &res, 0)
    
    return res
}

func dfs(candidates []int, target int, list []int, res *[][]int, p int) {
    if target == 0 {
        *res = append(*res, append([]int{}, list...))
    }
    
    if target < 0 {
        return
    }
    
    for i := p; i < len(candidates); i++ {
        dfs(candidates, target - candidates[i], append(list, candidates[i]), res, i)
    }
}