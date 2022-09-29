import { editNote } from "src/type";

export class NoteDB {
  private db;

  constructor() {
    this.db = [{ "name": "Note1", "date": [], "category": "task", "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum minima tempore doloremque, magnam eius earum voluptatum ab obcaecati", "dateOfCreation": "22.09.2022", "archived": false, "id": 941338190646 }, { "name": "Note 2", "date": ["20.12.2002"], "category": "idea", "text": "Lorem ipsum dolor sit amet 20/12/2002 consectetur adipisicing elit. Illum minima tempore doloremque", "dateOfCreation": "22.09.2022", "archived": false, "id": 1223242950903 }, { "name": "Note 3", "date": [], "category": "random", "text": "Lorem ipsum dolor sit amet", "dateOfCreation": "22.09.2022", "archived": false, "id": 888441480812 }, { "name": "Note 4", "date": [], "category": "random", "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum minima tempore doloremque", "dateOfCreation": "22.09.2022", "archived": false, "id": 461342351531 }, { "name": "Note 5", "date": [], "category": "task", "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum minima tempore doloremque, magnam", "dateOfCreation": "22.09.2022", "archived": false, "id": 791725710346 }, { "name": "Note 6", "date": [], "category": "quote", "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum minima tempore doloremque", "dateOfCreation": "22.09.2022", "archived": false, "id": 962401358775 }, { "name": "Note 7", "date": ["02.03.2010", "03.11.2013"], "category": "task", "text": "Lorem ipsum 02-03-2010 dolor 03/11/2013 sit amet", "dateOfCreation": "22.09.2022", "archived": false, "id": 747862329779 }];
  }

  private searchIndexNote(uuid: number) {
    for (let i = 0; i < this.db.length; i++) {
      if (this.db[i].id === uuid) return i;
    }
  }

  public add(note) {
    this.db.push(note);
  }

  public delete(uuid: number) {
    const id: number | undefined = this.searchIndexNote(uuid);

    if (id === undefined) throw new Error(`note is not found - ${uuid}`);

    this.db = [...this.db.slice(0, id), ...this.db.slice(id + 1, this.db.length)];
  }

  public edit(note: editNote, uuid: number) {
    const id: number | undefined = this.searchIndexNote(uuid);

    if (!id === undefined) throw new Error(`note is not found - ${uuid}`);

    this.db = [...this.db.slice(0, id), { ...this.db[id], ...note }, ...this.db.slice(id + 1, this.db.length)];
  }

  public get(uuid?: number) {
    if (!uuid) return this.db;

    const id: number | undefined = this.searchIndexNote(uuid);

    if (!id === undefined) throw new Error(`note is not found - ${uuid}`);

    return this.db[id];
  }
}

export default new NoteDB;