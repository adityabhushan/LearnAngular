function TodoCtrl($scope) {

    $scope.todos = [{ text: 'Learn angular', done: false },
        { text: 'build an app', done: false }
    ]

    $scope.addTodo = function() {
        $scope.todos.push({ text: $scope.formTodoText, done: false })
        $scope.formTodoText = ''

    }
    $scope.getTotalTodos = function() {
        return $scope.todos.length
    }
}
