export const ADD = "ADD";
export const DELETE = "DELETE";
export const UPDATE = "UPDATE";

export const addEmployee = (employee) => ({
  type: ADD,
  payload: employee,
});

export const deleteEmployee = (index) => ({
  type: DELETE,
  payload: index,
});

export const updateEmployee = (id, updatedEmployee) => ({
  type: UPDATE,
  payload: { id, updatedEmployee },
});
