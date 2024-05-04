import { Delete, DeleteItem } from "../models/models";

export const handleDeleteItem = (id ,name) => {
  DeleteItem(id);
  Delete(name);
  //window.location.reload();
};
