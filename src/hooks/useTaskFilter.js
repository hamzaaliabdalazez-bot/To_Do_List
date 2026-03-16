import { useMemo } from 'react';

// Hook encapsulating filtering logic and derived counts.
// Consumers can pass the task array and the desired filter state.
export function useTaskFilter(tasks, filter) {
  const filtered = useMemo(() => {
    if (filter === 'completed') return tasks.filter((t) => t.completed);
    if (filter === 'active') return tasks.filter((t) => !t.completed);
    return tasks;
  }, [tasks, filter]);

  const counts = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter((t) => t.completed).length;
    return { total, completed };
  }, [tasks]);

  return { filtered, counts };
}
