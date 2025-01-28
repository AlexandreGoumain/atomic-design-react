import { createTodo, deleteTodo, updateTodo } from "@api/todoApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateTodoMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["todos"] });
        },
    });
};

export const useDeleteTodoMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["todos"] });
        },
    });
};

export const useUpdateTodoMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: updateTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["todos"] });
        },
    });
};
