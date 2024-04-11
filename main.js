// Модуль main.js
import { getTodos } from "./api.js";
import { renderTasks } from "./renderTasks.js";
import {renderLogin} from "./renderLogin.js";



let tasks = [];

const fetchAndRenderTasks = () => {
    getTodos().then((responseData) => {
        tasks = responseData.todos;
        renderTasks({ tasks, fetchAndRenderTasks });
        return true;
    });
};

// fetchAndRenderTasks();

renderLogin({ fetchAndRenderTasks });

