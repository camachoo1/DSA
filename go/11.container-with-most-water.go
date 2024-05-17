func maxArea(height []int) int {
    var waterLevel int
    var dif int
    var i = 0 
    var j = len(height) - 1 
    
    for i < j {
        currentLevel := 0 
        
        dif = j - i 
        
        if height[i] > height[j] {
            currentLevel = height[j] * dif
            j-- 
        } else {
            currentLevel = height[i] * dif
            i++ 
        }
        
        if waterLevel < currentLevel {
            waterLevel = currentLevel
        }
    }
    
    return waterLevel
}