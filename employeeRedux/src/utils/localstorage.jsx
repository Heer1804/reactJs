export const loadState = () => {
    try {
      const serializedState = localStorage.getItem("empData");
      if (!serializedState) return undefined;
      return JSON.parse(serializedState);
    } catch (err) {
      console.error("Error loading state:", err);
      return undefined;
    }
  };
  
  export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify({ employee: state.employee });
      localStorage.setItem("empData", serializedState);
    } catch (err) {
      console.error("Error saving state:", err);
    }
  };
  