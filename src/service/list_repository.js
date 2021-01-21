import {firebaseDatabase} from "./firebase";


class ListRepository {
  syncLists(userId, onUpdate) {
    const ref = firebaseDatabase.ref(`${userId}/lists`);
    ref.on('value', snapshot =>{
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => ref.off();
  };

  saveList(userId, list) {
    firebaseDatabase.ref(`${userId}/lists/${list.id}`).set(list);
  };
  removeList(userId, list) {
    firebaseDatabase.ref(`${userId}/lists/${list.id}`).remove();
  };
  removeAll(userId) {
    firebaseDatabase.ref(`${userId}/lists`).remove();
  };
}

export default ListRepository;