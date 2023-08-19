/*
 * @lc app=leetcode id=729 lang=typescript
 *
 * [729] My Calendar I
 */

// @lc code=start
class MyCalendar {
    events: [number, number][]
    constructor() {
        this.events = []
    }

    book(start: number, end: number): boolean {
        for (const [s, e] of this.events) {
            if (start < e && end > s) {
                return false
            }
        }

        this.events.push([start, end])
        return true
    }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
// @lc code=end

