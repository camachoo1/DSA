func simplifyPath(path string) string {
    dirs := strings.Split(path, "/")
    canonicalPath := make([]string, 0, len(dirs))
    for _, d := range dirs {
        if d == ".." {
            if len(canonicalPath) > 0 {
                canonicalPath = canonicalPath[:len(canonicalPath)-1]
            }
        } else if d != "." && d != "" {
            canonicalPath = append(canonicalPath, d)
        }
    }
    return "/" + strings.Join(canonicalPath, "/")
}