"use strict";
var Task = (function () {
    function Task(content, completed, alive) {
        if (alive === void 0) { alive = true; }
        this.content = content;
        this.completed = completed;
        this.alive = alive;
    }
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=task.js.map