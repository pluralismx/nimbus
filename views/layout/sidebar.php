<!-- Aside -->
<div class="notes-container">
    <form>
        <div class="new-note">
            <div class="new-note-header">
                <!-- <input name="id_website" :value="id_website" type="hidden" /> -->
                <input v-model="note_title" type="text" placeholder="Ponle un nombre a tu guión"/>
            </div>
            <div class="new-note-body">
                <textarea v-model="note_content" placeholder="Escribe algo interesante..." required></textarea>
            </div>
            <div class="new-note-footer">
                <button type="button" class="btn-primary" v-on:click="saveNotes()">Guardar</button>
            </div>
        </div>
    </form>

    <form v-for="note in notes">
        <div class="note">
            <div class="note-header">
                <input :id="'note_title_' + note.id_note" :value="note.title" type="text" />
            </div>
            <div class="note-body">
                <textarea :id="'note_content_' + note.id_note">{{ note.content }}</textarea>
            </div>
            <div class="note-footer">
                <button  type="button" v-on:click="deleteNote(note.id_note)" class="btn-warn">Eliminar</button>
                <button  type="button" v-on:click="updateNote(note.id_note)" class="btn-primary">Editar</button>
                <button id="button-copy" type="button" class="btn-primary" v-on:click="copyToClipboard('note_content_' + note.id_note)">Copiar</button>
            </div>
        </div>
    </form>
</div>