class Solution:
    def simplifyPath(self, path: str) -> str:

        arr = path.split("/")
        out = ""

        for sub in arr:
            if sub == ".." and len(out) > 0:
                out = out[:out.rindex('/')]
            elif sub not in (".","",".."):
                out += ("/" + sub)

        return out if len(out) > 0 else "/"